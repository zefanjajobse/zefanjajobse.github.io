<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>All Users</h1>

    <!-- instead of:
    <!?php foreach ($users as $user) ?>
        <li><!?= $user->name ?></li>
    <!?php endforeach; ?>

    laravel can do: -->
    @foreach ($users as $user)
        <li>{{ $user->name }}</li>
    @endforeach

    <h2>Add a user</h2>

    <form method="POST", action="/users">
        {{ csrf_field() }}
        <p>
            <input type="text", name="name", placeholder="Name", required>
        </p>
        <p>
            <input type="email", name="email", placeholder="Email Address", required>
        </p>
        <p>
            <input type="password", name="password", placeholder="Password", required>
        </p>
        <p>
            <button type="submit">Add User</button>
        </p>
    </form>

</body>
</html>