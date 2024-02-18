<?php

namespace Database\Seeders;

use App\Models\Tournament;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TournamentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 3; $i++) {
            DB::table('tournaments')->insert([
                'name' => $faker->text(10),
                'modality' => "2v2", //$faker->randomElement(['1v1', '2v2', '3v3', '4v4', '5v5']),
                'quantity_teams' => 8, //$faker->randomElement([4, 8, 16]),
                'starts_the' => $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 month'),
                'link_ingame' => $faker->optional()->url,
                'image' => $faker->imageUrl($width = 640, $height = 480),
                'videogame_id' => $faker->numberBetween($min = 1, $max = 5),
                'winner_id' => null,
                'user_admin_id' => $faker->numberBetween($min = 1, $max = 30),
            ]);
        }
    }
}
