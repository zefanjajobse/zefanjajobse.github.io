<?php

class Post {
    public $title;

    public $published;

    public function __construct($title, $published)
    {
        $this->title = $title;
        $this->published = $published;
    }
}

$posts = [
    new Post ('My First Post', true),
    new Post ('My Second Post', true),
    new Post ('My Third Post', true),
    new Post ('My Fourth Post', false),
];

// add to array if true
$publishedPosts = array_filter($posts, function ($post) {
    return $post->published;
});


// add to array if false
$unpublishedPosts = array_filter($posts, function ($post) {
    return !$post->published;
});

// change every item in the array based on the loop
// $fobar = array_map(function ($post) {
//     $post->published = true;
//     return $post;
// }, $posts);

// same thing with foreach:
// foreach ($posts as $post) {
//     $post->published = true;
// }

// make a objectlist a array
$fobar = array_map(function ($post) {
    return (array) $post;
}, $posts);

// return only the title within a object still:
$fobar = array_map(function ($post) {
    return ['title' => $post->title];
}, $posts);

// only return a specific part: (only works if the part is public)
$titles = array_column($posts, 'title');

// returns a objectarray with title as key and published as variable
$maybepublished = array_column($posts, 'published', 'title');

var_dump($maybepublished);