<?php


namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $user = User::paginate($paginateBy);
        return UserResource::collection($user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        User::create($request->all());
        return response()->json([
            "success" => true,
            "message" => "User created successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            "success" => true,
            "user" => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, int $idToEdit)
    {
        
        if($request->user()->id != $idToEdit){
            return response()->json([
                "success" => false,
                "message" => "No puedes editar la informacion del perfil de otro usuario.."
            ], 403);
        }

        if( empty($request->all()) ){
            return response()->json([
                "success" => false,
                "message" => "Debes enviar al menos un campo para actualizar el perfil"
            ], 400);
        }
        
        $request->user()->update($request->all());
        
        return response()->json([
            "success" => true,
            "message" => "El usuario fue actualizado exitosamente"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            "success" => true,
            "message" => "User deleted successfully"
        ], 200);
    }

    public function leading_teams(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $user = $request->user();
        
        return response()->json( [
            "message" => "success",
            "leader_for" => $user->leader_for()->paginate($paginateBy)
        ] , 200);
    }

    public function participating_teams(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $user = $request->user();
        
        $participating_in = $user->teams()
                                ->with('integrants')
                                ->where('user_leader_id', '<>', $user->id)
                                ->paginate($paginateBy);
                                
        return response()->json([
            "message" => "success",
            "participating_in" => $participating_in
        ], 200);
    }

    public function managed_tournaments(User $user){
        return response()->json([ 
            "message" => "success",
            "managed_tournaments" => $user->manage()->paginate(8)
        ], 200);
    }

    public function participating_tournaments(User $user){
        $participating_as_team_one = DB::table('confrontations')
                ->join('tournaments', 'confrontations.tournament_id', '=', 'tournaments.id')
                ->join('team_users AS TEAM_ONE', 'confrontations.team_one_id', '=', 'TEAM_ONE.team_id')
                ->join('users', 'TEAM_ONE.user_id', '=', 'users.id')
                ->where('users.id', '=', $user->id)
                ->select('tournaments.*');

        $participating_tournaments = DB::table('confrontations')
                ->join('tournaments', 'confrontations.tournament_id', '=', 'tournaments.id')
                ->join('team_users AS TEAM_TWO', 'confrontations.team_two_id', '=', 'TEAM_TWO.team_id')
                ->join('users', 'TEAM_TWO.user_id', '=', 'users.id')
                ->where('users.id', '=', $user->id)
                ->select('tournaments.*')
                ->union($participating_as_team_one)
                ->distinct()
                ->paginate(8);
        
        return response()->json([ 
            "message" => "success",
            "participating_tournaments" => $participating_tournaments
        ], 200);
    }
}
