<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Support\Facades\DB;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $team =  Team::all();
        return $team;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamRequest $request)
    {
        Team::create($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Team created successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        return response()->json([
            "success" => true,
            "Team" => $team
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, Team $team)
    {
        $team->update($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Team update successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();
        return response()->json([
            "success" => true,
            "msg" => "Team deleted successfully"
        ], 200);
    }

    public function showIntegrants($id)
    {
        $integrants = DB::table('team_users')
                ->select('team_users.user_id', 'users.nick_name')
                ->join('teams', 'teams.id', '=', 'team_users.team_id')
                ->join('users', 'users.id', '=', 'team_users.user_id')
                ->where('team_id', $id)
                ->get();
                
        return response()->json([
            "success" => true,
            "integrants" => $integrants->all()
        ], 200);
    }
}
