<?php

namespace App\Controllers;

use App\Core\App;

class UsersController {
    public function index() {
        $users = App::get('database')->selectAll("users");
        return view('users', compact('users'));
    }

    public function store() {
        // only gets a object of all the get requests items "?name=" etc
        // var_dump($_REQUEST["name"]);
        
        // only get the object if its a get request
        // var_dump($_GET["name"]);
        
        App::get('database')->insert("users", ["name" => htmlspecialchars($_POST["name"])]);
        var_dump('You typed ' . $_POST["name"]);
        
        // redirect back to the home page
        return redirect('users');

    }
} 