<?php

namespace App\Modules\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Classes\Base;
use Hash;
use Illuminate\Support\Facades\Auth;
use Request;

class LoginController extends Controller
{

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		if(Auth::check())
			return redirect('/admin');

		return Base::view('admin::block.login');
	}

	public function login()
	{
		$email    = Request::input("email");
		$password = Request::input("password");

		if(Auth::attempt(['email' => $email, 'password' => $password])) {
			return redirect()->intended("/admin");
		}

		return redirect('/admin/login');
	}

}