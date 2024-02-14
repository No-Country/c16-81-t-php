<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TournamentController extends Controller
{
    public function showConfrontations(string $id)
    {
        $confrontations = DB::table('confrontations')->get(); //retrieve the fake data
        
        return response()->json([
            "success" => true,
            "confrontations" => $confrontations->all()
        ], 201);
    }
}
