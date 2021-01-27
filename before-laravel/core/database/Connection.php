<?php

class Connection {
    public static function make($config) {
        // mysql_connect(); -- is old and deprecated - could allow sql injection..
        try {            
            return new PDO($config['connection'].';dbname='.$config['name'], $config['username'], $config['password'], $config['options']);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}

// to run a static function:
// Connection::make();