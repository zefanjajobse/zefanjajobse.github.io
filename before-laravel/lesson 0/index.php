<?php // file that prepares the data

// require 'functions.php';

// // $greeting = "Hello World";

// $names = [
//     "jeff",
//     "oof",
//     "zefanja"
// ];

// // foreach ($names as $name) {
// //     echo $name . ', ';
// // }

// $animals = [
//     "big",
//     "animal",
//     "list",
//     "for",
//     "the",
//     "fun",
//     "spamming",
//     "names"
// ]; // create normal array

// $animals[] = 'elephant'; // add a item to the array

// $person = [
//     'array' => ["test"],
//     'age' => 23,
//     'hair' => 'brown',
//     'career' => 'dev'
// ]; // create associate array

// $person['name'] = 'Zefanja'; // add value

// unset($person["age"]); // remove age from the associated array

// // die stops the php script and returns it to the client.
// // die(var_dump($person)); // dump variable to the console readable

// $task = [
//     "title" => "making this",
//     "due" => "tomorrow",
//     "assigned_to" => $person,
//     "completed" => true,
//     "overdue" => false,
// ];

// // class
// class Task {
//     private $description;
//     // get public from outside == name->description
//     private $completed = false;
//     // protected == visable for class and child

//     // method -- constructor will run when you make the class, (init)
//     // pubic - visable for everyone, private - only for the class
//     public function __construct($description)
//     {
//         // asign value to this.description
//         $this->description = $description;
//     }

//     /**
//      * Set the task to complete
//      */
//     public function complete()
//     {
//         $this->completed = true;
//     }

//     /**
//      * Check if the  task is completed
//      */
//     public function isComplete()
//     {
//         return $this->completed;
//     }

//     public function description()
//     {
//         return $this->description;
//     }

// }

// $tasks = [
//     new Task('Go to the store'),
//     new Task('Finish my screencast'),
//     new Task('Clean my room')
// ];

// $tasks[0]->complete();

// require 'index.view.php';