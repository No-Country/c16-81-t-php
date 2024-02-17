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

        // All users are a one man team
        for ($i = 0; $i < 30; $i++) {
            $team_id = $i + 1;
            $leaderId = Team::where('id', $team_id)->first()->user_leader_id;

            DB::table('team_users')->insert([
                'team_id' => $team_id,
                'user_id' => $leaderId,
            ]);
        }

        // First 10 users will have a team with other user (team of 2 integrants)
        for ($j = 31; $j <= 40; $j++) {
            $leader_id = Team::where('id', $j)->first()->user_leader_id;
            
            DB::table('team_users')->insert([
                [
                    'team_id' => $j,
                    'user_id' => $leader_id,
                ],
                [
                    'team_id' => $j,
                    'user_id' => $faker->randomDigitNot($leader_id)+1,
                ]
            ]);
        }
    }
}
