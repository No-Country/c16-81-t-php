<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('positions')->insert([
            ['placed_at' => 'First',  'points' => 300 ],
            ['placed_at' => 'Second', 'points' => 200 ],
            ['placed_at' => 'Third',  'points' => 100 ],
            ['placed_at' => 'Not in podium', 'points' => 0 ]
        ]);
    }
}
