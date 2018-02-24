<?php

namespace App\Modules\Admin\Http\Controllers;

use App\Classes\DynamicModel;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Modules\Admin\Classes\Base;
use App\Modules\Admin\Models\Modules;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
	/**
	 * @var
	 */
	public static $dynamic_static;
	/**
	 * @var Modules
	 */
	protected $modules;
	/**
	 * @var Base
	 */
	protected $base;
	/**
	 * @var DynamicModel
	 */
	protected $dynamic;

	/**
	 * @var array
	 */
	protected $request;

	public function __construct(Request $request)
	{
		parent::__construct();

		$this->modules        = new Modules();
		$this->base           = new Base($request);
		$this->request        = $request->all();
		self::$dynamic_static = $this->dynamic = new DynamicModel();
	}

	public static function addingLogActions(array $data)
	{
		$data['created_at'] = Carbon::now();
		$data['id']         = (new DynamicModel())->t('actions_log')->insertGetId($data);

		return $data['id'];
	}

	/**
	 * @return \Illuminate\View\View
	 */
	public function getIndex()
	{
		try {
			$data = [];
			$t    = 'actions_log';

			$data['type_actions'] = [
				'insert_table_row' => 'Create table row',
				'update_table_row' => 'Update table row',
			];

			$data['actions_log'] = $this->dynamic
				->t('actions_log')
				->join(
					'users',

					function($join) use ($t) {
						$join->type = 'LEFT OUTER';
						$join->on($t . '.users_id', '=', 'users.id');
					}
				)
				->select("$t.*", 'users.name as users_name')
				->orderBy("$t.id", 'DESC')
				->paginate(100);

			$data['send_notifications'] = $this
				->dynamic
				->t('params')
				->select('params.*', 'little_description as key')
				->where('name', 'send_notifications')
				->first();

			$data['lang_s'] = $this
				->dynamic
				->t('params_lang')
				->select('params_lang.*', 'little_description as key')
				->where('active', 1)
				->get()
				->toArray();

			return Base::view("admin::settings.index", $data);
		} catch(\Exception $err) {
			return Base::errorPage($err);
		}
	}

	/**
	 * Change param.
	 *
	 * @param array $data
	 */
	public function change_param($data = [])
	{
		if(!empty($data)) {
			$table  = $data['table'];
			$active = $data['active'];
			$name   = $data['name'];
		} else {
			$table  = $this->request['table'];
			$active = $this->request['active'];
			$name   = $this->request['name'];
		}

		$params = $this
			->dynamic
			->t($table)
			->select('params.*', 'little_description as key')
			->where('name', $name)
			->first();

		$params->active = $active;
		$params->save();
		$ret['result'] = 'ok';

		echo json_encode($ret);
	}
}
