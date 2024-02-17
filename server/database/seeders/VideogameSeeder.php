<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class VideogameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        for ($i = 0; $i < 5; $i++) {
            DB::table('videogames')->insert([
                'name' => $faker->sentence(2),
                'category' => $faker->randomElement(['Aventura', 'Acción', 'Estrategia', 'Deportes', 'RPG', 'Puzzle']),
            ]);
        }
    }
}
