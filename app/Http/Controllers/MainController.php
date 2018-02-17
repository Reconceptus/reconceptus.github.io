<?php

namespace App\Http\Controllers;

use App\Classes\DynamicModel;
use App\Modules\Admin\Classes\Base;
use Illuminate\Http\Request;

class MainController extends Controller
{
	/**
	 * @var Base
	 */
	protected $base;

	/**
	 * @var DynamicModel
	 */
	private $dynamic;

	/**
	 * @var array
	 */
	private $request;

	public function __construct(Request $request)
	{
		$this->base    = new Base($request);
		$this->dynamic = new DynamicModel();
		$this->request = $request->all();
	}

	/**
	 * Main page.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function main()
	{
		$whereBlog[]   = ['str.active', 1];
		$whereBlog[]   = ['str.tags', '!=', '\'\''];
		$whereVillas[] = ['villas.active', 1];

		$data['blog'] = $this->dynamic->t('str')
			->where($whereBlog)

			->join('files', function($join)
			{
				$join->type = 'LEFT OUTER';
				$join->on('str.id', '=','files.id_album')
					->where('files.name_table', '=', 'stralbum')
					->where('files.main', '=', 1);
			})

			->select('str.*', 'files.file', 'files.crop')
			->groupBy('str.id')
			->orderBy('str.id', 'DESC')
			->paginate(4);

		$data['villas'] = $this->dynamic->t('villas')
			->where($whereVillas)

			->join('files', function($join)
			{
				$join->type = 'LEFT OUTER';
				$join->on('villas.id', '=','files.id_album')
					->where('files.name_table', '=', 'villasalbum')
					->where('files.main', '=', 1);
			})

			->select('villas.*', 'files.file', 'files.crop')
			->groupBy('villas.id')
			->orderBy('villas.id', 'DESC')
			->orderBy('villas.is_best', 'ASC')
			->paginate(6);

		$data['locations'] = $this->dynamic->t('locations')->where('locations.active', 1)->get()->toArray();

		return $this->base->view_s("site.main.index", $data);
	}

	/**
	 * Selection request.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function selection_request()
	{
		$data['locations'] = $this->dynamic->t('locations')->where('locations.active', 1)->get()->toArray();

		return $this->base->view_s("site.main.selection_request", $data);
	}

	/**
	 * Request for accommodation.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function request_for_accommodation()
	{
		$data = [];

		return $this->base->view_s("site.main.request_for_accommodation", $data);
	}

	/**
	 * Favorite.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function favorite()
	{
		$data['locations'] = $this->dynamic->t('locations')->where('locations.active', 1)->get()->toArray();

		return $this->base->view_s("site.main.favorite", $data);
	}

	/**
	 * Villas.
	 *
	 * @param null $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function villas($id = null)
	{
		$data      = [];
		$where[]   = ['villas.active', 1];
		$count_box = 4;
		$group     = 'id';

		if($id) {
			$data['villa'] = $this->dynamic->t('villas')
				->where(array_merge($where, [['villas.id', $id]]))

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.id', '=','files.id_album')
						->where('files.name_table', '=', 'villasalbum')
						->where('files.main', '=', 1);
				})

				->join('menu', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.cat', '=','menu.id');
				})

				->select('villas.*', 'files.file', 'files.crop', 'menu.name AS place')
				->groupBy('villas.id')
				->orderBy('villas.' . $group, 'DESC')
				->first();

			$data['villa']['document'] = false;

			$data['recommended_villas'] = $this->dynamic->t('villas')
				->where($where)
				->whereIn('villas.id', json_decode($data['villa']['recommendedVillas'], true) ?? [])

				->join('files', function($join) use($data)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.id', '=','files.id_album')
						->where('files.name_table', '=', 'villasalbum')
						->where('files.main', '=', 1);
				})

				->join('menu', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.cat', '=','menu.id');
				})

				->select('villas.*', 'files.file', 'files.crop', 'menu.name AS place')
				->groupBy('villas.id')
				->orderBy('villas.' . $group, 'DESC')
				->get()
				->toArray();

			$data['album'] = $this->dynamic->t('files')
				->where('files.name_table', '=', 'villasalbum')
				->where('files.main', '=', 0)
				->where('files.active', '=', 1)
				->where('files.id_album', '=', $id)
				->get()
				->toArray();

			$data['album_what_is_next'] = $this->dynamic->t('files')
				->where('files.name_table', '=', 'villaswhat_is_next')
				->where('files.active', '=', 1)
				->where('files.id_album', '=', $id)
				->get()
				->toArray();

			$data['meta_c'] = $this->base->getMeta($data, 'villa');

			return $this->base->view_s("site.main.villas_id", $data);
		} else {
			$data['villas'] = $this->dynamic->t('villas')
				->where($where)

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.id', '=','files.id_album')
						->where('files.name_table', '=', 'villasalbum')
						->where('files.main', '=', 1);
				})

				->join('menu', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.cat', '=','menu.id');
				})

				->select('villas.*', 'files.file', 'files.crop', 'menu.name AS place')
				->groupBy('villas.id')
				->orderBy('villas.' . $group, 'DESC')
				->paginate($count_box);

			$data['locations'] = $this->dynamic->t('locations')->where('locations.active', 1)->get()->toArray();

			return $this->base->view_s("site.main.villas", $data);
		}
	}

	/**
	 * Blog.
	 *
	 * @param null $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function blog($id = null)
	{
		$data['tags'] = $this->dynamic->t('tags')->limit(100)->get()->toArray();
		$where[]      = ['str.active', 1];
		$count_box    = 4;
		$group        = 'id';

		if($id) {
			$data['blog'] = $this->dynamic->t('str')
				->where(array_merge($where, ['str.id' => $id]))

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('str.id', '=','files.id_album')
						->where('files.name_table', '=', 'stralbum')
						->where('files.main', '=', 1);
				})

				->select('str.*', 'files.file', 'files.crop')
				->first()
				->toArray();

			$data['meta_c'] = $this->base->getMeta($data, 'blog');

			$data['blogs'] = $this->dynamic->t('str')
				->whereNotIn('str.id', [$id])

				// TODO скорее отвалится когда теги будут с id больше 10
				->where(function ($query) use($data) {
					$tags = explode(',', $data['blog']['tags']);

					for($i = 0; $i < count($tags); $i++){
						$query->orwhere('str.tags', 'like',  '%' . $tags[$i] .'%');
					}
				})

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('str.id', '=','files.id_album')
						->where('files.name_table', '=', 'stralbum')
						->where('files.main', '=', 1);
				})

				->select('str.*', 'files.file', 'files.crop')
				->orderBy('str.' . $group, 'DESC')
				->limit(10)
				->get()
				->toArray();

			return $this->base->view_s("site.main.blog_id", $data);
		} else {
			$tags                 = explode(',', str_replace(']', '', str_replace('[', '', $this->request['tag'] ?? '')));
			$data['current_tags'] = $tags;
			$where[]              = ['str.tags', '!=', '\'\''];

			$data['blog'] = $this->dynamic->t('str')
				->where($where)
				->whereNotIn('str.tags', ['[]', ''])

				// TODO скорее отвалится когда теги будут с id больше 10
				->where(function ($query) use($tags) {
					for($i = 0; $i < count($tags); $i++){
						$query->orwhere('str.tags', 'like',  '%' . $tags[$i] .'%');
					}
				})

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('str.id', '=','files.id_album')
						->where('files.name_table', '=', 'stralbum')
						->where('files.main', '=', 1);
				})

				->select('str.*', 'files.file', 'files.crop')
				->groupBy('str.id')
				->orderBy('str.' . $group, 'DESC')
				->paginate($count_box);

			return $this->base->view_s("site.main.blog", $data);
		}
	}

	/**
	 * About Us.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function about_us()
	{
		$data = [];

		return $this->base->view_s("site.main.about_us", $data);
	}

	/**
	 * Contact Us.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function contact_us()
	{
		$data = [];

		return $this->base->view_s("site.main.contact_us", $data);
	}

	/**
	 * Vacancies.
	 *
	 * @param null $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function vacancies($id = null)
	{
		$data = [];

		if($id)
			return $this->base->view_s("site.main.vacancies_id", $data);
		else
			return $this->base->view_s("site.main.vacancies", $data);
	}

	/**
	 * Location.
	 *
	 * @param $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function location($id)
	{
		$data = [];

		return $this->base->view_s("site.main.location_id", $data);
	}

	/**
	 * Search.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function search()
	{
		$data = [];

		return $this->base->view_s("site.main.search", $data);
	}
}
