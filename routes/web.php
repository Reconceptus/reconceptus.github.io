<?php

Auth::routes();

Route::group(["middleware"=>["site"], "prefix"=>""], function() {
	Route::get('/', 'MainController@main');
	Route::get('/selection-request', 'MainController@selection_request');
	Route::get('/favorite', 'MainController@favorite');
	Route::get('/villas', 'MainController@villas');
	Route::get('/blog/{id?}', 'MainController@blog');
	Route::get('/about-us', 'MainController@about_us');
	Route::get('/contact-us', 'MainController@contact_us');
	Route::get('/vacancies/{id?}', 'MainController@vacancies');
	Route::get('/request-for-accommodation', 'MainController@request_for_accommodation');
});
