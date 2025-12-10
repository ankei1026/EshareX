<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'username' => 'required|string|max:50',
            'email' => 'required|string|max:50',
            'role' => 'required|string|max:50',
            'password' => ['required', 'confirmed', Password::defaults()],

        ]);

        User::create($validated);

        return redirect()->route('/login')->with('success', 'Account created successfully!');
    }
}
