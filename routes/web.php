<?php

use App\Http\Controllers\AdminDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Login
Route::get('/login', function () {
    return Inertia::render('Auths/Login');
})->name('login');
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

    // Users
    Route::get('users', [UserController::class, 'index'])->name('admin.users');
    Route::get('users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('users/create', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('user/edit/{id}', [UserController::class, 'edit'])->name('admin.user.edit');
    Route::put('user/update/{id}', [UserController::class, 'update'])->name('admin.user.update');
    Route::delete('user/delete/{id}', [UserController::class, 'destroy'])->name('admin.user.delete');
    
});

require __DIR__ . '/settings.php';
