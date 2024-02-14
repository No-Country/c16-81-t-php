<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Make a team for each user
        for ($i = 0; $i < 20; $i++) {
            $nameUserLeader = User::where('id', $i+1)->first()->nick_name;
            DB::table('teams')->insert([
                'name' => $nameUserLeader."'s team",
                'user_leader_id'  => $i+1,
            ]);
        }

        // Make a random team with two integrants
        for ($i = 0; $i < 10; $i++) {
            DB::table('teams')->insert([
                'name' => $faker->citySuffix(),
                'user_leader_id'  => $i+1,
            ]);
        }
    }
}
