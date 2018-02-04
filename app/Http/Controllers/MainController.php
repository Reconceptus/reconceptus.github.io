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

	public function __construct(Request $request)
	{
		$this->base    = new Base($request);
		$this->dynamic = new DynamicModel();
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
		$data = [];

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

		if($id)
			return $this->base->view_s("site.main.villas_id", $data);
		else {
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
		$where[]      = ['str.tags', '!=', '\'\''];
		$count_box    = 4;
		$group        = 'id';

		if($id)
			return $this->base->view_s("site.main.blog_id", $data);
		else {
			$data['blog'] = $this->dynamic->t('str')
				->where($where)
				//			->whereIn('blogs.id', $cart_id ?? [])
				//			->where('blogs.text', 'like', '%' . trim($request['input_search'] ?? '') . '%')

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
}
