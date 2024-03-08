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
                "message" => ["Credenciales incorrectas"],
            ]);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            "success" => true,
            "token" => $token,
            "message" => "Bienvenido al Game Center"
        ]);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "success" => true,
            "message" => "El token de usuario fue eliminado exitosamente",
        ]);
    }

    /**
    * Checks the user owner of the given authorization bearer token
    */
    public function verify_token(Request $request){
        return $request->user();
    }

    /**
     * Change password by user
     */
    public function change_password(Request $request){
        $id = Auth::user()->id;
        $user = User::find($id);

        if($user){
            $user->password = $request->password;
            $user->save();
            return response()->json([
                "message" => "La contraseña ha sido cambiada satisfactoriamente"
            ], 200);
        }else{
            return response()->json([
                "success" => true,
                "message" => "El usuario especificado no existe",
            ], 400);
        }
    }


    /**
     * Suspend an already authenticated user
     */
    public function suspend_user(Request $request){
        $suspend = $request->input('suspend');
        $id = Auth::user()->id;
        
        $user = User::find($id);
        $user->is_suspend = $suspend;
        $user->save();

        $message = ($suspend) 
                    ? "El usuario fue suspendido exitosamente"
                    : "El usuario no fue suspendido";

        return response()->json([
            "success" => true,
            "message" => $message
        ]);
    }
}
