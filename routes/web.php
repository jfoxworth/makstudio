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
    return view('welcome');
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
