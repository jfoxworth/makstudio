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



// Landing page (eventually)
Route::get('/', function () {
    return view('layouts.landing');
});




// First Landing Option
Route::get('/Option1', function () {
    return view('layouts.landingOne');
});



// Second Landing Option
Route::get('/Option2', function () {
    return view('layouts.landingTwo');
});




// Third Landing Option
Route::get('/Option3', function () {
    return view('layouts.landingThree');
});




// Fourth Landing Option
Route::get('/Option4', function () {
    return view('layouts.landingFour');
});




// Products Page
Route::get('/products', function () {
    return view('layouts.products');
});






// Our Work
Route::get('/ourWork', function () {
    return view('layouts.ourWork');
});




// About Us
Route::get('/aboutUs', function () {
    return view('layouts.aboutUs');
});



// Design Studio
Route::get('/designStudio', function () {
    return view('layouts.designStudio');
});



// Retrieve all user models
Route::get('/getModels', 'BuildController@index');


// Save a model
Route::post('/saveModel', 'BuildController@store');

// Update a model
Route::put('/saveModel', 'BuildController@update');

// Delete a model
Route::delete('/deleteModel/{id}', 'BuildController@destroy');

// Save a Message
Route::post('/messages', 'MessageController@store');


Auth::routes();



Route::get('/home', 'HomeController@index')->name('home');
