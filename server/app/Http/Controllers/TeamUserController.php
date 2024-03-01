<?php

namespace App\Http\Controllers;

use App\Models\TeamUser;
use App\Http\Requests\StoreTeamUserRequest;
use App\Http\Requests\UpdateTeamUserRequest;
use Illuminate\Http\Request;

class TeamUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $teamUser = TeamUser::paginate($paginateBy);
        return response()->json([
            "success" => true,
            "teamUser" => $teamUser
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamUserRequest $request)
    {
        TeamUser::create($request->all());
        return response()->json([
            "success" => true,
            "msg" => "TeamUser created successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(TeamUser $teamUser)
    {
        return response()->json([
            "success" => true,
            "TeamUser" => $teamUser
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamUserRequest $request, TeamUser $teamUser)
    {
        $teamUser->update($request->all());
        return response()->json([
            "success" => true,
            "msg" => "TeamUser update successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TeamUser $teamUser)
    {
        $teamUser->delete();
        return response()->json([
            "success" => true,
            "msg" => "TeamUser deleted successfully"
        ], 200);
    }
}
