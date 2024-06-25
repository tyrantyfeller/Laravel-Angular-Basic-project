<?php

use App\Http\Controllers\ChampionshipController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::post('/teams', [TeamController::class, 'store']);
Route::get('/teams', [TeamController::class, 'index']);
Route::post('/championship/start', [ChampionshipController::class, 'start']);
