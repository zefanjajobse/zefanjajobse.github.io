<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function index() {
        // get all users:
        $users = User::all();

        // return specific users:
        // $users = User::where('age', '>=', 21)->get();

        return view('users.index', compact('users'));

        // create user:
        // $user = new App\Models\User;
        // $user->name = 'John';
        // $user->email = 'john@example.com';
        // $user->password = bcrypt('password');
        // $user->save();

        // mess with code without writing it in php:
        // php artisan tinker
    }

    public function store() {
        $user = new User;

        $user->name = request('name');
        $user->email = request('email');
        $user->password = bcrypt(request('password'));
        $user->save();

        return back();
    }
}