<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/login', function (Request $request) {
    return ['teste', 'teste'];
});
