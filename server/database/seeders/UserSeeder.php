<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 30; $i++) {
            DB::table('users')->insert([
                'nick_name'       => $faker->name,
                'first_name' => $faker->firstname,
                'last_name'  => $faker->lastname,
                'phone'      => $faker->phoneNumber,
                'gender' => $faker->randomElement(['male', 'female', 'other']),
                'email'  => $faker->email,
                'password' => Hash::make($faker->password),
                'email_verified_at' => now(),
                'remember_token' => $faker->sha1(),
                // Otros campos y datos de prueba
            ]);
        }
    }
}
