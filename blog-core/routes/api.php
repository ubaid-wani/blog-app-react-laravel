<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('profile', [ProfileController::class, 'index']);
Route::post('profile', [ProfileController::class, 'store']);
Route::get('profile/{id}', [ProfileController::class, 'show']);
Route::put('profile/{id}', [ProfileController::class, 'update']);
Route::delete('profile/{id}', [ProfileController::class, 'destroy']);
