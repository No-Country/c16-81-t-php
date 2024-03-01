<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function register(RegisterRequest $request){
        User::create($request->all());

        return response()->json(["msg" => "User Created"], 201);
    }

    public function login(LoginRequest $request){
        $user = User::where('email',$request->email)->first();
        
        if(!$user || !Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages([
                'message' => ["Credentials incorrect"],
            ]);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            "success" => true,
            "token" => $token,
            "message" => "Welcome to the Game Center"
        ]);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "success" => true,
            "message" => "Token Deleted Successfully",
        ]);
    }

    /**
    * Checks the user owner of the given authorization bearer token
    */
    public function verify_token(Request $request){
        return $request->user();
    }


    /**
     * Suspend an already authenticated user
     */
    public function Suspend_user(){
        $id = Auth::user()->id;
        
        $user = User::find($id);
        $user->is_suspend = true;
        $user->save();

        return response()->json([
            "success" => true,
            "Message" => "User Suspended"
        ]);
    }
}
