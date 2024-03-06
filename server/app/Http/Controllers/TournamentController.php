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
            "msg" => "El torneo creado exitosamente",
            "tournament" => $tournament
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tournament $tournament)
    {

        $tournament->videogame;
        $tournament->managed_by;
        $tournament->won_by;

        return response()->json([
            "success" => true,
            "tournament" => $tournament
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTournamentRequest $request, int $idToEdit)
    {
        $tournamentCorrespondToUser = $request->user()->manage->firstWhere('id', $idToEdit);

        if( !isset($tournamentCorrespondToUser) ){
            return response()->json([
                "success" => false,
                "message" => "No puedes editar la informacion del torneo de otro usuario."
            ], 403);
        }

        if( empty($request->all()) ){
            return response()->json([
                "success" => false,
                "message" => "Debes enviar al menos un campo para actualizar el torneo"
            ], 400);
        }
        
        $tournamentCorrespondToUser->update($request->all());

        return response()->json([
            "success" => true,
            "msg" => "El torneo actualizado exitosamente",
            "tournament" => $tournamentCorrespondToUser
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, int $idToDelete)
    {
        $tournamentCorrespondToUser = $request->user()->manage->firstWhere('id', $idToDelete);

        if( !isset($tournamentCorrespondToUser) ){
            return response()->json([
                "success" => false,
                "message" => "No puedes eliminar el torneo de otro usuario."
            ], 403);
        } 

        $tournamentCorrespondToUser->delete();

        return response()->json([
            "success" => true,
            "msg" => "El torneo fue borrado exitosamente"
        ], 200);
    }

    public function show_confrontations(int $id)
    {
        $tournament = Tournament::where('id', $id)->first();
        
        return response()->json([
            "success" => true,
            "confrontations" => $tournament->confrontations->all()
        ], 201);
    }
}
