<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'name',
        'modality',
        'starts_the',
        'link_ingame',
        'image',
        'videogame_id',
        'winner_id',
        'user_admin_id',
    ];
}

