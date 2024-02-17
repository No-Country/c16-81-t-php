<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id('tournament_id');
            $table->string('name');
            $table->string('modality');
            $table->timestamp('starts_the');
            $table->string('link_ingame')->nullable();
            $table->string('image');
            $table->foreignId('videogame_id');
            $table->foreignId('winner_id')->nullable();
            $table->foreignId('user_admin_id');
            
            // // Claves foráneas
            // $table->foreign('videogame_id')->references('id')->on('videogames');
            // $table->foreign('winner_id')->references('id')->on('users');
            // $table->foreign('user_admin_id')->references('id')->on('users');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
