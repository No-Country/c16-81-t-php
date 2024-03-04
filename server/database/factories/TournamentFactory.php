<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tournament>
 */
class TournamentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->text(10),
            'modality' => "1v1",
            'quantity_teams' => 8,
            'starts_the' => fake()->dateTimeBetween($startDate = 'now', $endDate = '+1 month'),
            'link_ingame' => fake()->optional()->url,
            'image' => fake()->imageUrl($width = 640, $height = 480),
            'videogame_id' => fake()->numberBetween(1, 5),
            'winner_id' => null,
            'user_admin_id' => fake()->numberBetween($min = 1, $max = 30),
        ];
    }
}
