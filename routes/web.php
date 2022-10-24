<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokesController;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/joke/detail', 
            [JokesController::class, 'getJokeDetail'])->name('joke.detail');