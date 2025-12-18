<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'username' => 'required|string|unique:users,username|max:50',
            'email' => 'required|string|email|max:50|unique:users,email',
            [
                'username.unique' => 'This username is already taken.',
                'email.unique' => 'This email is already registered.',
            ],
            'bio' => 'required|string|max:50',
            'role' => 'required|string|max:50',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        User::create([
            'name' => $validated['name'],
            'username' => $validated['username'],
            'bio' => $validated['bio'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'password' => bcrypt($validated['password']),
        ]);

        return redirect()->route('login')->with('success', 'Account created successfully!');
    }
}
