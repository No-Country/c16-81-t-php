<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use App\Http\Requests\StoreTournamentRequest;
use App\Http\Requests\UpdateTournamentRequest;
use Illuminate\Support\Facades\DB;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tournaments = Tournament::all();
        return response()->json([
            "success" => true,
            "tournaments" => $tournaments
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTournamentRequest $request)
    {
        $tournament = Tournament::create($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Tournament created successfully",
            "tournament" => $tournament
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tournament $tournament)
    {
        return response()->json([
            "success" => true,
            "tournament" => $tournament
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTournamentRequest $request, Tournament $tournament)
    {
        $tournament->update($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Tournament upated successfully",
            "tournament" => $tournament
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tournament $tournament)
    {
        $tournament->delete();
        return response()->json([
            "success" => true,
            "msg" => "Tournament deleted successfully"
        ], 200);
    }

    public function showConfrontations(string $id)
    {
        $confrontations = DB::table('confrontations')->get(); //retrieve the fake data
        
        return response()->json([
            "success" => true,
            "confrontations" => $confrontations->all()
        ], 201);
    }
}
