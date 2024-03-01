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
            
            $table->string('round_name');
            $table->foreignId('tournament_id')->constrained('tournaments')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('team_one_id')->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('team_two_id')->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('winner_id')->nullable()->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('losser_id')->nullable()->constrained('teams')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('status_id')->constrained('statuses')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('position_id')->constrained('positions')->cascadeOnUpdate()->cascadeOnDelete();
            
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
