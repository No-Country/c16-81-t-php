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
        Schema::create('confrontations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tournament_id');//->constrained('tournaments')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('team_one_id');//->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('team_two_id');//->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('winner_id');//->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->enum('status',['to begin','in progress','finalized']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('confrontations');
    }
};
