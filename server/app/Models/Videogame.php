<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Videogame extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'category'];

    public function tournaments(): HasMany
    {
        return $this->hasMany(Tournament::class);
    }
}
