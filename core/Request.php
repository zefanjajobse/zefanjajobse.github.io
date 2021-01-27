<?php

namespace App\Core;

class Request {
    public static function uri() {
        // trim of "/", parse the url to only the path of the global request URI
        return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    }

    public static function method() {
        return $_SERVER['REQUEST_METHOD']; // gives GET or POST
    }
} 