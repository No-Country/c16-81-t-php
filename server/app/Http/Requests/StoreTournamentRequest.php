<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTournamentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required",
            "modality" => "required",
            "quantity_teams" => "required",
            "starts_the" => "required",
            "videogame_id" => "required",
            // "user_admin_id" => "required",
            // "link_ingame" => "required",
            // "image" => "required",
            // "winner_id" => "required",
        ];
    }
}
