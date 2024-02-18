<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Team extends Model
{
    use HasFactory;
    
    protected $fillable = ['name','user_leader_id']; 

    public function confrontations_as_team_one(): HasMany
    {
        return $this->hasMany(Confrontation::class, 'team_one_id');
    }

    public function confrontations_as_team_two(): HasMany
    {
        return $this->hasMany(Confrontation::class, 'team_two_id');
    }

    public function has_won_confrontations(): HasMany
    {
        return $this->hasMany(Confrontation::class, 'winner_id');
    }

    public function has_lost_confrontations(): HasMany
    {
        return $this->hasMany(Confrontation::class, 'losser_id');
    }

    public function lead_by(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_leader_id');
    }

    public function has_won_tournaments(): HasMany
    {
        return $this->hasMany(Tournament::class, 'winner_id');
    }

    public function integrants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'team_users', 'team_id', 'user_id');
    }
}
