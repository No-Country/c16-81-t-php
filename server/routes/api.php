<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ConfrontationController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TeamUserController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideogameController;
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

/**Route By Tournaments */
Route::resource('tournaments', TournamentController::class)->only([
    'index', 'show'
]);
Route::get('/tournaments/{id}/confrontations', [TournamentController::class, 'show_confrontations']);


/**Route By Confrontations */
Route::resource('confrontations', ConfrontationController::class);

/**Route By Videogames */
Route::resource('videogames', VideogameController::class);

/**Route By Team Users */
Route::resource('team_users', TeamUserController::class);

/* Authentication routes */
Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::post('/logout', [AuthenticationController::class, 'logout']);
    Route::get('/verify-token', [AuthenticationController::class, 'verify_token']);
    Route::post('/suspend-user',[AuthenticationController::class, 'suspend_user']);
    Route::post('/change-password',[AuthenticationController::class,'change_password']);

    /**Route By Tournaments */
    Route::post('/tournaments', [TournamentController::class, 'store']);
    Route::put('/tournaments/{id}', [TournamentController::class, 'update']);
    Route::delete('/tournaments/{id}', [TournamentController::class, 'destroy']);
    
    /**Route By Teams */
    Route::resource('teams', TeamController::class);
    Route::get('/teams/{id}/integrants', [TeamController::class, 'show_integrants']);
    
    /**Route By Users */
    Route::get('/users/leading-teams', [UserController::class, 'leading_teams']); //Use the token to return the leaded teams
    Route::get('/users/participating-teams', [UserController::class, 'participating_teams']); //Use the token to return the participating teams
    Route::resource('users', UserController::class);  
});  