<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TeamUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 20; $i++) {
            $teamId = $i + 1;
            $leaderId = Team::where('id', $teamId)->first()->user_leader_id;

            DB::table('team_users')->insert([
                'team_id' => $teamId,
                'user_id' => $leaderId,
            ]);
        }

        for ($j = 30; $j >= 20; $j--) {
            $firstMember = $faker->numberBetween($min = 1, $max = 30);
            DB::table('team_users')->insert([
                [
                    'team_id' => $j,
                    'user_id' => $firstMember,
                ],
                [
                    'team_id' => $j,
                    'user_id' => $faker->randomDigitNotNull($firstMember),
                ]
            ]);
        }
    }
}
