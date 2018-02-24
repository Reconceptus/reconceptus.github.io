<?php

namespace App\Http\Controllers;

use App\Classes\DynamicModel;
use App\Modules\Admin\Classes\Base;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

	/**
	 * @var Request
	 */
	private $requests;

	public function __construct(Request $request)
	{
		$this->base     = new Base($request);
		$this->dynamic  = new DynamicModel();
		$this->request  = $request->all();
		$this->requests = $request;
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
		$cart      = array_values($this->requests->session()->get('cart') ?? []);
		$where[]   = ['villas.active', 1];
		$count_box = 4;
		$group     = 'id';
		$session   = $this->request['session'] ?? true;

		if(!isset($params['id']) && $session) {
			for($i = 0; count($cart ?? []) > $i; $i++)
				$data['favorites_id'][] = $cart[$i]['id'] ?? 0;
		}

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

			$data['villa']['document'] = $this->dynamic->t('files')
				->where('files.name_table', '=', 'villasfiles')
				->where('files.id_album', '=', $id)
				->first();

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
		$whereVillas[] = ['villas.active', 1];

		$data['location'] = $this
			->dynamic
			->t('locations')

			->join('menu', function($join) use($id)
			{
				$join->type = 'RIGHT OUTER';
				$join->on('menu.id', '=','locations.cat');
			})

			->select('locations.*')
			->where('locations.active', 1)
			->where('menu.translation', '=', $id)
			->orWhere('menu.id', '=', $id)
			->first();

		$whereVillas['villas.cat'] = $data['location']['cat'];

		if(empty($data['location']))
			return abort(404, 'Страница не существует');

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
			->paginate(4);

		$data['locations'] = $this
			->dynamic
			->t('locations')
			->where('locations.active', 1)

			->join('menu', function($join)
			{
				$join->type = 'LEFT OUTER';
				$join->on('locations.cat', '=','menu.id');
			})

			->join('files', function($join)
			{
				$join->type = 'LEFT OUTER';
				$join->on('locations.id', '=','files.id_album')
					->where('files.name_table', '=', 'album')
					->where('files.main', '=', 1);
			})

			->select('locations.*', 'menu.translation', 'files.file', 'files.crop')
			->get()
			->toArray();

		$data['meta_c']    = $this->base->getMeta($data, 'location');

		return $this->base->view_s("site.main.location_id", $data);
	}

	/**
	 * Search.
	 *
	 * @param $page
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function search($page = 0)
	{
		$limit = 4;
		$page  = $page * $limit;
		$q     = $this->request['q'];
		$count  = 0;

		$query = function($count) use ($q)
		{
			return '
			(SELECT
			 ' . ($count ? 'COUNT(villas.id) AS count' : ('villas.id COLLATE utf8_general_ci as id,
			 villas.name COLLATE utf8_general_ci as name,
			 villas.name_table COLLATE utf8_general_ci as name_table,
			 villas.text COLLATE utf8_general_ci as text')) . '
			FROM villas
			WHERE `text` LIKE \'%' . trim($q) . '%\' OR `name` LIKE \'%' . trim($q) . '%\')
			
			UNION ALL
			
			(SELECT
		 ' . ($count ? 'COUNT(str.id) AS count' : ('str.id COLLATE utf8_general_ci as id,
			 str.name COLLATE utf8_general_ci as name,
			 str.name_table COLLATE utf8_general_ci as name_table,
			 str.text COLLATE utf8_general_ci as text')) . '
			FROM str
			WHERE `text` LIKE \'%' . trim($q) . '%\' OR `name` LIKE \'%' . trim($q) . '%\')';
		};

		$data['search'] = \DB::select($query(false) . ' ORDER BY `id` DESC LIMIT ' . ($page) . ', ' . ($limit) . ';');
		$data['count']  = \DB::select($query(true));

		foreach($data['count'] as $v)
			$count = $count + $v->count;

			$data['count'] = $count;
			$data['page']  = $page ? $page / $limit : 1;
			$data['limit'] = $limit;
			$data['q']     = $q;

		return $this->base->view_s("site.main.search", $data);
	}

	/**
	 * добавление/удаление в избранное
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function add_favorite()
	{
		$idd      = false;
		$id       = $this->request['id'];
		$get_data = $this->request['get_data'];
		$type     = $this->request['type'];
		$cart     = array_values($this->requests->session()->get('cart') ?? []);

		if($type === 'add') {
			for($i = 0; count($cart) > $i; $i++)
				if($cart[$i]['id'] == $id) {
					$idd = true;
					break;
				}

			if(!$idd)
				$this->requests->session()->put(
					'cart',
					array_merge($cart, [$id => ['id' => $id]]));
		}

		if($type === 'remove') {
			for($i = 0; count($cart) > $i; $i++)
				if($cart[$i]['id'] == $id) {
					unset($cart[$i]);
					break;
				}

			$this->requests->session()->flush('cart');
			$this->requests->session()->put('cart', $cart);
		}

		if($get_data) {
			$where[]   = ['villas.active', 1];
			$group = 'id';
			$count_box = 24;
			$cart_0 = array_values($this->requests->session()->get('cart') ?? []);

			for($i = 0; count($cart_0 ?? []) > $i; $i++)
				$cart_id[] = $cart_0[$i]['id'] ?? 0;

			$data['villas'] = $this->dynamic->t('villas')
				->where($where)
				->whereIn('villas.id', $cart_id ?? [])
				->where('villas.text', 'like', '%' . trim($this->requests['input_search'] ?? '') . '%')

				->join('files', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.id', '=','files.id_album')
						->where('files.name_table', '=', 'villas')
						->where('files.main', '=', 1);
				})

				->join('menu', function($join)
				{
					$join->type = 'LEFT OUTER';
					$join->on('villas.cat', '=','menu.id');
				})

				->select('villas.*', 'files.file', 'files.crop', 'menu.name as cat_parent')
				->groupBy('villas.id')
				->orderBy('villas.' . $group, 'DESC')
				->paginate($count_box);
		}

		foreach($this->requests->session()->get('cart') ?? [] as $v)
			$data['cart'][$v['id']] = $v;

		$data['result'] = 'ok';
		$data['count']  = count(array_values($this->requests->session()->get('cart') ?? []));

		return json_encode($data);
	}

	public function search_render_villas($params = [])
	{
		$data      = [];
		$where[]   = ['villas.active', 1];
		$count_box = 8;
		$group     = 'id';
		$cart      = array_values($this->requests->session()->get('cart') ?? []);
		$cart_id   = [];
		$session   = $this->request['session'] ?? true;

		if(!isset($params['id']) && $session) {
			for($i = 0; count($cart ?? []) > $i; $i++)
				$cart_id[] = $cart[$i]['id'] ?? 0;

			$params['id'] = $cart_id;
		}

		$way       = (int) ($this->request['way'] ?? -1);
		$date_to   = $this->request['date_to'] ?? -1;
		$date_from = $this->request['date_from'] ?? -1;
		$rooms     = (int) ($this->request['rooms'] ?? -1);
		$hot       = (int) ($this->request['hot'] ?? -1);

		if($way !== -1 && !empty($way))
			$where[] = ['villas.cat', $way];

		if($rooms !== -1)
			$where[] = ['villas.bedroom', $rooms];

		if($hot !== -1)
			$where[] = ['villas.is_hot', 1];

		$villas_query = $this->dynamic->t('villas')
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
			});

			if(isset($params['id']))
				$villas_query = $villas_query->whereIn('villas.id', $params['id']);

		$villas_query = $villas_query
			->select('villas.*', 'files.file', 'files.crop', 'menu.name AS place')
			->groupBy('villas.id')
			->orderBy('villas.' . $group, 'DESC')
			->paginate($count_box);


		$data['villas']       = $villas_query;
		$data['favorites_id'] = $cart_id;
		$data['paginate']     = true;

		return $this->base->view_s("site.block.villas_main_list", $data);
	}

	/**
	 * Страницы.
	 *
	 * @param null $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|void
	 */
	public function page($id = null)
	{
		if(!$id)
			return abort(404, 'Страница не существует');

		$Mod     = $this->dynamic;
		$data    = [];
		$where[] = ['str.active', 1];

		if((int) $id == 0 || strlen($id) > 5) {
			$data['field'] = 'translation';
			$where[]       = ['str.translation', $id];
		} else {
			$where['str.id'] = $id;
		}

		$data['page'] = $Mod->t('str')
			->where($where)

			->join(
				'files',

				function($join) {
					$join->type = 'LEFT OUTER';
					$join->on('str.id', '=', 'files.id_album')
						->where('files.name_table', '=', 'str');
				}
			)

			->select('str.*', 'files.file', 'files.crop')
			->first();

		if(empty($data['page'])) {
			return abort(404, 'Страница не существует');
		}
		$data['meta_c'] = $this->base->getMeta($data, 'page');

		if(!empty($data['page'][0])) {
			$data['files'] = $Mod->t('files')
				->where(['files.active' => 1])
				->where(['id_album' => $data['page'][0]['id'], 'name_table' => 'str'])->get();
		} else {
			$data['files'] = [];
		}

		return $this->base->view_s("site.main.page_id", $data);
	}

	/**
	 * Tools Send mail.
	 */
	public function submit_required()
	{
		if(isset($this->request['data2']))
			$form = $this->base->decode_serialize($this->request['data2']);
		else
			$form = $this->base->decode_serialize($this->request['data']);

		$form_data = [];
		$type      = $this->request['type'];
		$title     = '';
		$from      = 'no-realy@greecobooking.niws.ru';

//		print_r($form);
//		print_r($type);
//		exit;

		$param = $this
			->dynamic
			->t('params')
			->select('params.*', 'little_description as key')
			->where('name', 'email_alerts')
			->first();

		foreach($form as $k => $v)
			$form_data[$k] = (int) $v == -1 ? '' : $v;

		if($type === 'selection_request') {
			if($form['way'] != -1) {
				$way = $this->dynamic->t('menu')->select('menu.name')->where('id', $form['way'])->first();
				$form['way'] = $this->base->lang($way['name']);
			} else
				$form['way'] = __('main.all_destinations');

			Mail::send('emails.' . $type, $form_data, function($m) use($param, $title, $from, $form_data) {
				$m->from($from, __('main.selection_request_mess_user'));
				$m->to($form_data['mail'], 'no-realy')->subject(__('main.selection_request_mess_user'));
			});

			$title = __('main.selection_request_mess_admin');
		}

		if($type == 'request_for_accommodation') {
			Mail::send('emails.' . $type, $form_data, function($m) use($param, $title, $from, $form_data) {
				$m->from($from, __('main.request_for_accommodation_user'));
				$m->to($form_data['mail'], 'no-realy')->subject(__('main.request_for_accommodation_user'));
			});

			$title = __('main.request_for_accommodation_admin');
		}

		if($type == 'contact_us')
			$title = __('main.contact_us_admin');

		if($type == 'subscription') {
			$title = __('main.subscription_admin');

			// Insert Subscribe email
			$subscribe_mail = $this->dynamic->t('params_subscribe')
				->where('subscribe_mail', '=' , trim($form_data['subscribe_mail']))
				->first();

			if(!$subscribe_mail)
				$this->dynamic->t('params_subscribe')->insertGetId(
					[
						'created_at'     => Carbon::now(),
						'subscribe_mail' => $form_data['subscribe_mail'],
					]
				);
		}

		if($type == 'friend_form') {
			$cart  = array_values($this->requests->session()->get('cart') ?? []);
			$title = __('main.send_compilation_friend_user');
			$form_data['message_s'] = $form_data['message'];

			for($i = 0; count($cart ?? []) > $i; $i++)
				$form_data['selected_villas'][] = $cart[$i]['id'] ?? 0;

			$form_data['selected_villas'] = $this->dynamic->t('villas')
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

				->whereIn('villas.id', $form_data['selected_villas'])
				->select('villas.*', 'files.file', 'files.crop', 'menu.name AS place')
				->groupBy('villas.id')
				->orderBy('villas.id', 'DESC')
				->get()
				->toArray();

			$form_data['langSt']  = function($t, $l = '') {
				return Base::langSt($t, $l);
			};

			if(isset($form['send-me']))
				Mail::send('emails.' . $type, $form_data, function($m) use($param, $title, $from, $form_data) {
					$m->from($from, __('main.send_compilation_friend_user'));
					$m->to($form_data['yourEmail'], 'no-realy')->subject(__('main.send_compilation_friend_user'));
				});

			foreach($form_data['friendMail'] ?? [] as $mail) {
				Mail::send('emails.' . $type . '_friend', $form_data, function($m) use($param, $title, $from, $form_data, $mail) {
					$m->from($from, $form_data['yourName'] ?? __('main.send_compilation_friend_user'));
					$m->to($mail, 'no-realy')->subject(__('main.send_compilation_friend_user'));
				});
			}

			$title = __('main.send_compilation_friend_admin');
		}

		Mail::send('emails.' . $type, $form_data, function($m) use($param, $title, $from) {
			$m->from($from, $title);
			$m->to($param->key, 'no-realy')->subject($title);
		});

		$ret['result'] = 'ok';
		echo json_encode($ret);
	}
}
