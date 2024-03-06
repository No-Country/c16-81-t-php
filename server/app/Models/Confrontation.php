<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Confrontation extends Model
{
    use HasFactory;

    protected $fillable = [
        'tournament_id',
        'round_name',
        'team_one_id',
        'team_two_id',
        'winner_id',
        'losser_id',
        'status_id',
        'position_id',
    ];

    public function tournament(): BelongsTo
    {
        return $this->belongsTo(Tournament::class)->with(['videogame', 'managed_by']);
    }

    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function team_one(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function team_two(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function won_by(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'winner_id');
    }

    public function lost_by(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'losser_id');
    }
}
