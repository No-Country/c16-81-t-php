<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            TeamSeeder::class,
            TeamUserSeeder::class,
            VideogameSeeder::class,
            TournamentSeeder::class,
            StatusSeeder::class,
            PositionSeeder::class,
            ConfrontationSeeder::class,
        ]);

        \App\Models\Videogame::factory()
            ->count(4)
            ->state(new Sequence(
                ['name' => 'Carlos duty', 'category' => 'FPS'],
                ['name' => 'Brawl Stars', 'category' => 'FPS'],
                ['name' => 'Chess', 'category' => 'Estrategia'],
                ['name' => 'Clash of Clans', 'category' => 'Estrategia'],
            ))
            ->create();

        // User demo
        $user_demo = \App\Models\User::factory()->create([
            'nick_name'  => 'nehuen_demo',
            'first_name' => 'Nehuen',
            'last_name'  => 'Cuenca',
            'phone'  => '+54 9 3446 203344',
            'gender' => 'male',
            'email'  => 'nehuen.demo@gmail.com',
            'password' => 'programador123'
        ]);

        // Team demo
        $team_demo = \App\Models\Team::factory()->create([
            'name' => "TEAM DEMO de ". $user_demo->nick_name,
            'user_leader_id'  => $user_demo->id,
        ]);

        // TeamUser demo
        \App\Models\TeamUser::factory()->create([
            'team_id' => $team_demo->id,
            'user_id' => $user_demo->id,
        ]);

        // Tournament demo
        $tournament_demo = \App\Models\Tournament::factory()->create([
            'name' => "Torneo DEMO de ". $user_demo->nick_name,
            'modality' => "1v1",
            'quantity_teams' => 8,
            'videogame_id' => 1,
            'user_admin_id' => $user_demo->id,
        ]);

        // Confrontation demo
        \App\Models\Confrontation::factory()
            ->count(4)
            ->sequence(
                ['team_one_id' => 1, 'team_two_id' => 2],
                ['team_one_id' => 3, 'team_two_id' => 4],
                ['team_one_id' => 5, 'team_two_id' => 6],
                ['team_one_id' => 7, 'team_two_id' => 8],
            )
            ->create([
                "tournament_id" => $tournament_demo->id,
                "round_name" => "cuartos",
            ]);
    }
}
