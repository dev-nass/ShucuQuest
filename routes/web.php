<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomeView');
});

Route::get('/battle', fn () => Inertia::render('BattleView'));
Route::get('/character-selection', fn () => Inertia::render('CharacterSelectionView'));
