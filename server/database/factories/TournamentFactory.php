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
            'name' => $this->faker->text(50),
            'modality' => $this->faker->randomElement(['1v1', '2v2', 'equipos']),
            'starts_the' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '+1 month'),
            'link_ingame' => $this->faker->optional()->url,
            'image' => $this->faker->imageUrl($width = 640, $height = 480),
            'videogame_id' => $this->faker->numberBetween($min = 1, $max = 10),
            'winner_id' => null,
            'user_admin_id' => $this->faker->numberBetween($min = 1, $max = 100),
        ];
    }
}
