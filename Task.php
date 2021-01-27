<?php

class Task {
    private $description;
    private $completed;

    public function completed() {
        return $this->completed;
    }

    public function description() {
        return $this->description;
    }

    public function foobar() {
        return 'foobar';
    }
}