## start a laravel project:
### if no project given from teacher:
```bash
composer create-project laravel/laravel example-app
```
### after git clone:
```bash
composer install
cp .env.example .env
```
### Create database with user:
```bash
create database practice;
create user 'practice'@'%' IDENTIFIED BY 'LLcagQ55VRCuvaFJ';
GRANT ALL PRIVILEGES ON practice.* TO 'practice'@'%';
FLUSH PRIVILEGES;
```
### artisan:
```bash
php artisan key:generate
php artisan migrate
php artisan db:seed
```
### run the website:
```bash
php artisan serve
optional: --host=0.0.0.0
```

## Functional design
make a wireframe and wireflow:
[PDF](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/78c32c72-3dd1-4557-ab65-1dcd700fd33d/Reader_Wireflows.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210301T103317Z&X-Amz-Expires=86400&X-Amz-Signature=78580341a1a42ecf9aa5a994e6bdd3f814d4d47e3e76acf51cd8daf56ef5a0bc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Reader%2520Wireflows.pdf%22)

## Technical design
- Which routes to create,
- which controllers to generate,
- How to configure the page to send to the server,
- What should the application store in the database.

## create
```bash
php artisan make:model == database item 
php artisan make:model Person -mcrsf
```
> `-m` = model,
`-c` = ,
`-r` = resource controller,
`-s` = seeder,
`-f` = factory,
`-a` = all of them.

### factory:
```php
public function definition()
{
    return [
        'name' => $this->faker->paragraph(1),
        'thud' => $this->faker->numberBetween(1,100),
    ];
}
```
### seeder connected to factory:
```php
public function run() {
    //
    \App\Models\Foo::factory(10)->create();
}
```

### databaseSeeder calls seeder:
```php
public function run(){
    // \App\Models\User::factory(10)->create();
    $this->call(PostSeeder::class);
    $this->call(FooSeeder::class);
}
```
or independent: artisan seed --class=PersonSeeder

## get specific with database:
````php
App\Models\Grade::where('completed', false)->get();
$grade = Grade::where('course_name', "test2")->first() // only 1 item
````

## controller naming:
can be made with:
```bash
php artisan make:controller ArticleController --model=Article
```

```php
<?php

    namespace App\Http\Controllers;

    use App\Models\Article;
    use Illuminate\Http\Request;

    class ProfessionController extends Controller
        {
        // show 1 article
        public function show($foo) {
            return view('foos.show', ['foo' => $foo]);
        }

        // show all articles
        public function index() 
            $foos = Foo::all();

            return view('foos.index', compact('foos'));
        }

        // create a article (creation page)
        public function create() {
            return view('foos.create');
        }

        // save the created article
        public function store(Request $request) {
            Foo::create($this->validateFoo($request));
            return redirect(route('foos.index'));
        }

        // edit a article
        public function edit(Foo $foo) {
            return view('foos.edit', ['foo' => $foo]);
        }

        // save a edited article
        public function update(Foo $foo, Request $request) {
            $foo->update($this->validateFoo($request));
            return redirect(route('foos.show', $foo->id));
        }

        // remove a article
        public function destroy(Foo $foo) {
            $foo->delete();

            return redirect(route('foos.index'));
        }

        public function validateFoo($request): array
        {
            return $request->validate([
                'title' => ['required', 'min:8', 'max:255'],
                'excerpt' => ['required', 'string', 'min:10', 'max:9999'],
                'body' => ['required', 'min:20', 'max:9999'],
                'url' => ['nullable', 'url', 'max:255'],
                'icon' => ['nullable', 'max:255'],
                'best_grade' => ['nullable', 'numeric', 'min:0', 'max:10'], // int - 0 - 10
            ]);
        }
    }
?>
```
> list page = `Route::get /`,
one post = `Route::get /:id`,
creation page = `Route::get /create`,
submit new = `Route::post /`,
remove = `Route::delete /:id`,
edit page = `Route::get /:id/edit`,
edit == `Route::put /:id`.

## database stuff
```bash
select * from Song where title = 'Lullaby';
select * from Artist where id=1582;
```
### same as above but combined:
```bash
select * from Song inner join Artist on Artist.id = Song.artist where Song.title = 'Lullaby';
```
### name and artist position 655 and edition 2020
```bash
select * from Occurance inner join Song on Occurance.song = Song.id inner join Artist on Song.artist = Artist.id where Occurance.position = 1 and Occurance.edition = 2020;
```