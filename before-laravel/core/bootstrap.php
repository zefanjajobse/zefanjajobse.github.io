<?php

use App\Core\App; // for every time we use "App::" function use it from the namespace App\Core
// this can also be done by adding App\Core in front of each function call

// bind to "api" (self made function) instead of a array
App::bind('config', require 'config.php');
App::bind('database', new QueryBuilder(Connection::make(App::get('config')['database'])));

// old array
// $app = [];
// $app['config'] = require 'config.php';
// $app['database'] = new QueryBuilder(Connection::make($app['config']['database']));
// return $app;

/**
 * make all view calls shorter with only view($name)
 */
function view($name, $data=[]) {
    // makes the data a variable: $data = data instead of ["data" => data]
    extract($data);
    return require "app/views/$name.view.php";
}

function redirect($location) {
    header("Location: /$location");
}