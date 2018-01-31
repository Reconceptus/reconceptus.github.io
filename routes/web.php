<?php

Auth::routes();

Route::get('/', 'MainController@main');
Route::get('/selection-request', 'MainController@selection_request');
Route::get('/favorite', 'MainController@favorite');
