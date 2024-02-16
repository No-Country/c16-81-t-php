<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Confrontation extends Model
{
    use HasFactory;

    protected $fillable = [
        'tournament_id',
        'team_one_id',
        'team_two_id',
        'winner_id',
        'losser_id',
        'status_id',
        'position_id',
    ];
}
