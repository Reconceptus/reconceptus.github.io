<?php

/*
|--------------------------------------------------------------------------
| Module Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for the module.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/admin/login','LoginController@index');
Route::post('/admin/login','LoginController@login');
Route::get('/admin/logout', 'MainController@getLogout');


Route::group([
    "prefix"=>"admin",
    "middleware"=>["auth"]
],
    function() {
        Route::get('/index/backup/sqlBackup','BackupController@sqlBackup');
        Route::get('/index/backup/tarBackup','BackupController@tarBackup');
        Route::get('/index/backup/delBackup','BackupController@delBackup');
        /*backup*/
        Route::controller('/index/backup','BackupController');

        /* настройки */
        Route::controller('/index/settings','SettingsController');
        // пользователи
        Route::controller('/index/users','UsersController');
        Route::any('/update/users/{id?}','UsersController@update');
        Route::any('/update/users/{id?}/{apply?}','UsersController@update');
        // модули
        Route::any('/index/{page?}','ModuleController@index');
        Route::get('/update/{page?}','ModuleController@update');
        Route::any('/update/{page?}/{id?}','ModuleController@update');
        Route::any('/update/{page?}/{id?}/{apply?}','ModuleController@update');
        Route::any('/copy/{page?}/{id?}','ModuleController@copy');
        Route::any('/getData/{page?}/{id?}','ModuleController@getData');
        // файлы
        Route::post('/file/get_loader_img','FilesController@get_loader_img');
        Route::post('/files/upload_img','FilesController@upload_img');
        Route::post('/files/get_crop','FilesController@get_crop');
        Route::post('/files/get_edit','FilesController@get_edit');
        Route::post('/files/set_edit','FilesController@get_edit');
        Route::post('/files/edit_img','FilesController@edit_img');
        Route::post('/files/to_main','FilesController@to_main');
        // delete row in mySQL
        Route::post('/rowDelete','MainController@rowDelete');
        // сборщик
        Route::controller('/engineer','EngineerController');
        // главная (рабочий стол)
        Route::controller('/','MainController');
    });
