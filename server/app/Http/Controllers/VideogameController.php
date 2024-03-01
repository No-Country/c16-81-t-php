<?php

namespace App\Http\Controllers;

use App\Models\Videogame;
use App\Http\Requests\StoreVideogameRequest;
use App\Http\Requests\UpdateVideogameRequest;
use Illuminate\Http\Request;

class VideogameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;

        $videogames = Videogame::paginate($paginateBy);
        return response()->json([
            "success" => true,
            "videogames" => $videogames
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVideogameRequest $request)
    {
        $videogame = Videogame::create($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Videogame created successfully",
            "videogame" => $videogame
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Videogame $videogame)
    {
        return response()->json([
            "success" => true,
            "videogame" => $videogame
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVideogameRequest $request, Videogame $videogame)
    {
        $videogame->update($request->all());
        return response()->json([
            "success" => true,
            "msg" => "Videogame upated successfully",
            "videogame" => $videogame
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Videogame $videogame)
    {
        $videogame->delete();
        return response()->json([
            "success" => true,
            "msg" => "Videogame deleted successfully"
        ], 200);
    }
}
