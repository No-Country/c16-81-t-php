<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AutenticateController extends Controller
{
    public function Register(RegisterRequest $request){
        User::create($request->all());

        return response()->json(["msg" => "User Created"],201);
    }

    public function Login(LoginRequest $request){
        $user = User::where('email',$request->email)->first();
        
        if(!$user || !Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages([
                'Message' => ["Credentials incorrect"],
            ]);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            "success" => true,
            "token" => $token,
            "Message" => "Welcome to the Game Center"
        ]);
    }

    public function Logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "success" => true,
            "Message" => "Token Deleted Successfully",
        ]);
    }
}
