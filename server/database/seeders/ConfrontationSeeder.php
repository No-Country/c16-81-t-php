<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ConfrontationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 8; $i++) {    
            DB::table('confrontations')->insert([
                'tournament_id' => $faker->numberBetween($min = 1,  $max = 3),
                'round_name'    => $faker->randomElement(['final', 'semifinal', 'cuartos']),
                'team_one_id'   => $faker->numberBetween($min = 1,  $max = 10),
                'team_two_id'   => $faker->numberBetween($min = 11, $max = 20),
                'winner_id'     => null, //$faker->numberBetween($min = 1,  $max = 20),
                'losser_id'     => null, //$faker->numberBetween($min = 1,  $max = 20),
                'status_id'     => 2, //$faker->numberBetween($min = 1,  $max = 4),
                'position_id'   => 4 //$faker->numberBetween($min = 1,  $max = 4),
            ]);
        }
    }
}
