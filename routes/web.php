<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Calls to pull pages



// Landing page (eventually)
Route::get('/', function () { return view('layouts.landing'); });


// First Landing Option
Route::get('/Option1', function () { return view('layouts.landingOne'); });


// Second Landing Option
Route::get('/Option2', function () { return view('layouts.landingTwo'); });


// Third Landing Option
Route::get('/Option3', function () { return view('layouts.landingThree'); });


// Fourth Landing Option
Route::get('/Option4', function () { return view('layouts.landingFour'); });


// Location after login
Route::get('/home', 'HomeController@index')->name('home');


// Products Page
Route::get('/products', function () { return view('layouts.products'); });


// Our Work
Route::get('/ourWork', function () { return view('layouts.ourWork'); });


// About Us
Route::get('/aboutUs', function () { return view('layouts.aboutUs'); });


// Admin page
Route::get('/admin', function () { return view('layouts.admin'); });


// Messages page
Route::get('/messages', function () { return view('layouts.messages'); });
 

// Design Studio
Route::get('/designStudio/{designID}', function () { return view('layouts.designStudio');  });
Route::get('/designStudio', function () { return view('layouts.designStudio');  });


// Build Studio
Route::get('/buildStudio/{buildID}', function () { return view('layouts.buildStudio');  });


// Individual build page
Route::get('/buildInfo/{buildID}', function () { return view('layouts.buildInfo'); });



// Calls to pull data


// Retrieve all user models
Route::get('/getModels', 'BuildController@index');


// Save a model
Route::post('/saveModel', 'BuildController@store');


// Update a model
Route::put('/saveModel', 'BuildController@update');


// Delete a model
Route::delete('/deleteModel/{id}', 'BuildController@destroy');


// Retrieve Messages
Route::get('/messages/{offset}/{type}', 'MessageController@index');

// Save a Message
Route::post('/messages', 'MessageController@store');


// Retrieve all builds
Route::get('/allBuilds/{offset}', 'BuildController@indexAll');


// Retrieve a builds
Route::get('/buildData/{buildNum}', 'BuildController@buildData');


// Retrieve builds for an instance
Route::get('/getBuilds/{id}', 'BuildController@getBuilds');


// Retrieve an instance
Route::get('/getInstance/{id}', 'InstanceController@index');


// New Instance
Route::put('/newInstance', 'InstanceController@store');

// New Build
Route::put('/newBuild', 'BuildController@newBuild');

// Send Quote
Route::post('/getQuote', 'BuildController@getQuote');


// Get Actions
Route::get('/getActions/{instanceID}', 'ActionController@index');


Auth::routes();
