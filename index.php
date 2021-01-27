<?php

// get both files at the same time:
use App\Core\{Router, Request};

// require 'core/database/Connection.php';
// require 'core/database/QueryBuilder.php';
// require 'core/Router.php';
// require 'core/Request.php';

// composer is used instead so there is only one global loader for everything
// composer install installs all dependencies in the composer.json file.
// load composer:
require 'vendor/autoload.php';

// install files: composer install

// get new changed files: composer dump-autoload



// require 'Task.php';
require 'core/bootstrap.php';


// $router = new Router;

// require 'routes.php';

Router::load('app/routes.php')
    ->direct(Request::uri(), Request::method());

// same as:
// $router = Router::load('routes.php');
// require $router->direct(trim($_SERVER['REQUEST_URI'], '/'));
// but without defining a $router variable




// sudo tail /var/log/nginx/error.log -n 200