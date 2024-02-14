<?php

use App\Http\Controllers\ConfrontationController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**Route By Users */
Route::resource('users', UserController::class);

/**Route By Confrontations */
Route::resource('confrontations', ConfrontationController::class);

/**Route By Tournaments */
Route::get('/tournaments/{id}/confrontations', [TournamentController::class, 'showConfrontations']);

/**Route By Teams */
Route::resource('teams', TeamController::class);