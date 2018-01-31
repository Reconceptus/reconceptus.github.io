<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Modules\Admin\Classes\Base;
use Illuminate\Http\Request;

class MainController extends Controller
{
	/**
	 * @var Base
	 */
	protected $base;

	public function __construct(Request $request)
	{
		$this->base    = new Base($request);
	}

	/**
	 * Main page.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function main()
	{
		$data = [];

		return $this->base->view_s("site.main.index", $data);
	}

	/**
	 * Selection request.
	 *
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function selection_request()
	{
		$data = [];

		return $this->base->view_s("site.main.selection_request", $data);
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
}
