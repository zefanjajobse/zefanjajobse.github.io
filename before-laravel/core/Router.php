<?php

namespace App\Core;

class Router {
    public $routes = [
        'GET' => [],
        'POST' => []
    ];

    public static function load($file) {
        $router = new static; // create a new instance of Router

        require $file; // load the file specified (routes.php)
        // routes.php requests .define() within router, saves it to the $router.

        return $router; // returns the Router within $router
    }
    
    public function get($uri, $controller) {
        // $getRoutes = [];
        
        // $getRoutes[] = 'foo'; // adds to index 0, because the array is empty (no need for append etc, its not python..)
        // $getRoutes[] = 'bar'; // adds it to the end of array
        // $getRoutes['uri'] = 'baz'; // adds it with 'uri' as the key: 'uri' => 'baz'

        // // end result:
        // [
        //     0 => 'foo',
        //     1 => 'bar',
        //     'uri' => 'baz'
        // ]


        $this->routes['GET'][$uri] = $controller;
    }

    public function post($uri, $controller) {
        $this->routes['POST'][$uri] = $controller;
    }

    public function direct($uri, $requestType) {
        // check if in array
        if (array_key_exists($uri, $this->routes[$requestType])) {
            // return value in location of array
            // return $this->routes[$requestType][$uri];

            // explode creates a array of the items 

            // ... makes each element within the array a seperate value within the function call:
            return $this->callAction(...explode('@', $this->routes[$requestType][$uri]));
        }

        // throw error when not found
        throw new \Exception('No route defined for this URI');
    }

    protected function callAction($controller, $action) {

        $controller = "App\\Controllers\\$controller";

        // if the method isnt static, dont forget to create it first
        $controller = new $controller;

        if (! method_exists($controller, $action)) {
            // use \ to use main
            throw new \Exception("$controller does not respond to the $action action");
        }
        
        return $controller->$action();
    }
}