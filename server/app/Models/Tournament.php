<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tournament extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'name',
        'modality',
        'starts_the',
        'quantity_teams',
        'link_ingame',
        'image',
        'videogame_id',
        'winner_id',
        'user_admin_id',
    ];

    public function videogame(): BelongsTo
    {
        return $this->belongsTo(Videogame::class);
    }

    public function managed_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }

    public function confrontations(): HasMany
    {
        return $this->hasMany(Confrontation::class);
    }

    public function won_by(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'winner_id');
    }
}

