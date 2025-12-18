<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users/Index', [
            'users' => User::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Users/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|email|max:255|unique:users,email',
            'role' => 'required|in:admin,user',
            'password' => ['required', 'confirmed', Password::default()],
        ]);

        User::create([
            'name' => $validated['name'],
            'username' => $validated['username'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'password' => bcrypt($validated['password']),
        ]);

        return redirect()->route('admin.users')
            ->with('success', 'User created successfully.');
    }

    public function edit($id)
    {
        $user = User::where('id', $id)->firstOrFail();
        return Inertia::render('Admin/Users/Edit', ['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->firstOrFail();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => [
                "required",
                "string",
                "max:255",
                Rule::unique('users', 'username')->ignore($user->id)
            ],
            'email' =>  [
                "required",
                "string",
                "max:255",
                Rule::unique('users', 'email')->ignore($user->id)
            ],
            'role' => 'required|in:admin,user',
        ]);

        $user->update($validated);

        return redirect()->route('admin.users')->with("success", "User updated successfully!");
    }

    public function destroy($id){
        $user = User::where('id', $id)->first();

        $user->delete();

        return redirect()->route('admin.users')->with('success', "User delete successfully!");
    }
}
