<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use App\Http\Requests\StoreTournamentRequest;
use App\Http\Requests\UpdateTournamentRequest;
use Illuminate\Http\Request;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;

        $tournaments = Tournament::paginate($paginateBy);

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
        $adminNick_name = $request->user()->nick_name;
        $fallbackImage = "https://via.placeholder.com/640x480.png/001122?text=$adminNick_name";
        
        $tournament = Tournament::create([
            'name' => $request->input('name', "Torneo de ".$adminNick_name),
            'modality' => $request->input('modality'), 
            'quantity_teams' => $request->input('quantity_teams'), 
            'starts_the' => $request->input('starts_the'), 
            'link_ingame' => $request->input('link_ingame'), 
            'image' => $request->input('image', $fallbackImage) ?? $fallbackImage, 
            'videogame_id' => $request->input('videogame_id'), 
            'user_admin_id' => $request->user()->id, 
            'winner_id' => null, 
        ]);

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

    public function show_confrontations(string $id)
    {
        $tournament = Tournament::where('id', intval($id))->first();
        
        return response()->json([
            "success" => true,
            "confrontations" => $tournament->confrontations->all()
        ], 201);
    }
}
