<?php

use App\Http\Controllers\AdminDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Login
Route::get('/login', function () {
    return Inertia::render('Auths/Login');
});
Route::post('/login', [SessionController::class, 'store']);

// Register
Route::get('/register', function () {
    return Inertia::render('Auths/Register');
})->name('register');
Route::post('/register', [RegisterController::class, 'store']);

// Admin
Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function () {

    // Admin Dashboard
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
});

require __DIR__ . '/settings.php';
