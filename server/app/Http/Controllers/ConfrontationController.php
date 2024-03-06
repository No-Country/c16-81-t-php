<?php

namespace App\Http\Controllers;

use App\Models\Confrontation;
use App\Http\Requests\StoreConfrontationRequest;
use App\Http\Requests\UpdateConfrontationRequest;
use App\Models\Position;
use App\Models\Status;
use App\Models\Team;
use Illuminate\Http\Request;

class ConfrontationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConfrontationRequest $request)
    {
        $tournament_id = $request->integer('tournament_id');
        $round_name  = $request->input('round_name');
        $team_one_id = $request->integer('team_one_id');
        $team_two_id = $request->integer('team_two_id');
        $winner_id   = $request->input('winner_id');
        $losser_id   = $request->input('losser_id');
        $status_id   = $request->integer('status_id', 2);
        $position_id = $request->integer('position_id', 2);
        
        $fields_existences = [
            "TORNEO"   => $request->user()->manage->firstWhere('id', $tournament_id),
            "EQUIPO 1" => Team::firstWhere('id', $team_one_id), 
            "EQUIPO 2" => Team::firstWhere('id', $team_two_id), 
            "ESTADO"   => Status::firstWhere('id', $status_id), 
            "POSICION" => Position::firstWhere('id', $position_id)
        ];

        $fields_not_found_or_exist = array_filter($fields_existences, fn($existence) => !isset($existence));

        if( !empty($fields_not_found_or_exist) ){
            $fieldsToString = implode(', ', array_keys($fields_not_found_or_exist));
            return response()->json([
                "succes" => false,
                "message" => "Los campos ($fieldsToString) detallados no han sido encontrados o no existen..."
            ], 400);
        }

        $newConfrontation = Confrontation::create([
            "round_name" => $round_name,
            "tournament_id" => $tournament_id,
            "team_one_id" => $team_one_id,
            "team_two_id" => $team_two_id,
            "winner_id" => $winner_id,
            "losser_id" => $losser_id,
            "status_id" => $status_id,
            "position_id" => $position_id,
        ]);

        return response()->json([
            "succes" => true,
            "message" => "Confrontacion creada exitosamente",
            "newConfrontation" => $newConfrontation
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Confrontation $confrontation)
    {
        $confrontation->tournament;
        $confrontation->position;
        $confrontation->status;
        $confrontation->team_one;
        $confrontation->team_two;
        $confrontation->won_by;
        $confrontation->lost_by;

        return response()->json([
            "success" => true,
            "confrontation" => $confrontation
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConfrontationRequest $request, Confrontation $confrontation, int $idToEdit)
    {
        $confrontation = $confrontation->firstWhere('id', $idToEdit);
        if( !isset($confrontation) ){
            return response()->json([
                "success" => false,
                "message" => "Esa confrontacion no existe o no pertenece a ningun torneo.."
            ], 400);
        }

        // parse inputs
        $round_name  = $request->input('round_name', $confrontation->round_name);
        $team_one_id = $request->integer('team_one_id', $confrontation->team_one_id);
        $team_two_id = $request->integer('team_two_id', $confrontation->team_two_id);
        $winner_id   = $request->input('winner_id', $confrontation->winner_id);
        $losser_id   = $request->input('losser_id', $confrontation->losser_id);
        $status_id   = $request->integer('status_id', $confrontation->status_id);
        $position_id = $request->integer('position_id', $confrontation->position_id);

        // verify if the user that made the update is the admin of the tournament
        $from_tournament_id = $confrontation->tournament->id;
        $is_admin = $request->user()->manage->contains('id', $from_tournament_id);
        if( !$is_admin ){
            return response()->json([
                "success" => false,
                "message" => "No puedes editar una confrontacion de un torneo ajeno"
            ], 403);
        }

        $confrontation->update([
            "round_name"  => $round_name,
            "team_one_id" => $team_one_id,
            "team_two_id" => $team_two_id,
            "winner_id" => $winner_id,
            "losser_id" => $losser_id,
            "status_id" => $status_id,
            "position_id" => $position_id,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Confrontacion creada exitosamente",
            "confrontation" => $confrontation
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Confrontation $confrontation, int $idToDelete)
    {
        $confrontation = $confrontation->firstWhere('id', $idToDelete);

        if( !isset($confrontation) ){
            return response()->json([
                "success" => false,
                "message" => "Esa confrontacion no existe o no pertenece a ningun torneo.."
            ], 400);
        }

        // verify if the user that made the update is the admin of the tournament
        $from_tournament_id = $confrontation->tournament->id;
        $is_admin = $request->user()->manage->contains('id', $from_tournament_id);
        if( !$is_admin ){
            return response()->json([
                "success" => false,
                "message" => "No puedes eliminar una confrontacion de un torneo ajeno"
            ], 403);
        }

        $confrontation->delete();

        return response()->json([
            "success" => true,
            "message" => "Confrontacion eliminada exitosamente",
        ], 200);
    }
}
