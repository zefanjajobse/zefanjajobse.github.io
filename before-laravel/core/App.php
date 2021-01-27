<?php

namespace App\Core;

class App {
    // public static can be gathered everywhere
    protected static $registry = [];

    public static function bind($key, $value) {
        // saves the value in the static registry
        static::$registry[$key] = $value;
    }

    public static function get($key) {
        if (! array_key_exists($key, static::$registry)) {
            throw new \Exception("No $key is bound in the container");
        }
        // returns whats in the static registry
        return static::$registry[$key];
    }
}