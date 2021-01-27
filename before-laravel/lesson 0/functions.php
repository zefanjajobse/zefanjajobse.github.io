<?php

// first function
function dumper($one, $two, $three) {
    var_dump($one, $two, $three);
}

function dd($value) {
    echo '<pre>';
    die(var_dump($value));
    echo '</pre>';
}

function alcoholAgeCheck($value) {
    if ($value < 21) {
        echo "your not old enough";
    } else {
        echo "your old enough";
    }
}

function checkv2($value) {
    return $value < 21 ?  false : true;
}