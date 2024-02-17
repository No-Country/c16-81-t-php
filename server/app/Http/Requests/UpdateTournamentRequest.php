<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTournamentRequest extends FormRequest
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
            // "name" => "required",
            // "modality" => "required",
            // "starts_the" => "required",
            // "link_ingame" => "required",
            // "image" => "required",
            // "videogame_id" => "required",
            // "winner_id" => "required",
            // "user_admin_id" => "required",
        ];
    }
}
