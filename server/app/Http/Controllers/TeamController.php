<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\TeamUser;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $team =  Team::paginate($paginateBy);
        return $team;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $leader = $request->user();

        $newTeam = Team::create([
            "user_leader_id" => $leader->id,
            "name" => $request->input('name')
        ]);


        $members = array_merge([$leader->id], $request->input('teammates', []));
        foreach ($members as $member) {
            TeamUser::create([
                "team_id" => $newTeam->id,
                "user_id" => $member,
            ]);
        }
        
        $newTeam->integrants;

        return response()->json([
            "success" => true,
            "msg" => "Team created successfully",
            "newTeam" => $newTeam,
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

    public function show_integrants(string $id)
    {
        $team = Team::where('id', intval($id))->first();
            
        return response()->json([
            "success" => true,
            "integrants" => $team->integrants->all()
        ], 200);
    }
}
