<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Confrontation>
 */
class ConfrontationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "tournament_id" => fake()->numberBetween($min = 1,  $max = 3),
            "round_name"  => fake()->randomElement(['final', 'semifinal', 'cuartos']),
            "team_one_id" => fake()->numberBetween($min = 1,  $max = 10),
            "team_two_id" => fake()->numberBetween($min = 11,  $max = 20),
            "winner_id" => null,
            "losser_id" => null,
            "status_id" => 2,
            "position_id" => 4,
        ];
    }
}
