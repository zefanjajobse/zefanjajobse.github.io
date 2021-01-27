<?php

namespace App\Controllers;

class PagesController {
    public function home() {
        //$tasks = App::get('database')->selectAll("todos"); //'Task'
        
        // var_dump($tasks[0]->description);
        
        // var_dump($tasks[0]->foobar());
        
        // require 'views/index.view.php'; 

        // same as: ["users" => $users]; instead of compact('users');
        return view('index', compact('tasks'));
        
        // prints the values below within the %s spaces (%s for string)
        $test = sprintf('insert into %s (%s) values (%s',
            'one', 'two', 'three'
        );
        
        var_dump($test);        
    }

    public function about() { 

        $company = 'Laracasts';

        return view('about', ['company' => $company]);
    }

    public function contact() { 
        return view('contact');
    }
}