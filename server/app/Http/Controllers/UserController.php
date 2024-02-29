<?php


namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::All();
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
            "msg" => "User created successfully"
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
                "message" => "You cannot edit the information of others users profiles."
            ], 403);
        }

        if( empty($request->all()) ){
            return response()->json([
                "success" => false,
                "message" => "Cannot update without new information (empty fields)"
            ], 400);
        }
        
        $request->user()->update($request->all());
        
        return response()->json([
            "success" => true,
            "message" => "User update successfully"
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
            "msg" => "User deleted successfully"
        ], 200);
    }

    public function leading_teams(Request $request)
    {
        $paginateBy = $request->integer('paginatedBy', 0) ?? 0;
        $user = $request->user();
        
        return response()->json( [
            "msg" => "success",
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

        return response()->json( [
            "msg" => "success",
            "participating_in" => $participating_in
        ], 200);
    }

}
