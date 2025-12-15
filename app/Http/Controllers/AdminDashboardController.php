<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $total_users = User::count();

        return Inertia::render(
            'Admin/Dashboard',
            [
                'total_users' => $total_users
            ]
        );
    }
}
