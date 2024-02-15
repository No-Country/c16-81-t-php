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

        for ($i = 0; $i < 10; $i++) {    
            DB::table('confrontations')->insert([
                'tournament_id' => 1,
                'team_one_id' => $faker->numberBetween($min = 1,  $max = 10),
                'team_two_id' => $faker->numberBetween($min = 11, $max = 20),
                'winner_id'   => $faker->numberBetween($min = 1,  $max = 20),
                'status' => $faker->randomElement(['to begin', 'in progress', 'finalized']),
            ]);
        }
    }
}
