<?php require 'partials/header.php' ?>
    <!-- <ul>
        <!?php foreach ($tasks as $task) : ?>
            <li>
                <!?php if ($task->completed :?>
                    <strike><!?= $task->description ?></strike>
                <!?php else:?>
                    <!?= $task->description ?>
                <!?php endif;?>
            </li>
        <!?php endforeach; ?>
    </ul> -->
    <h1>All Users</h1>

    
    <ul>
        <?php foreach ($users as $user) : ?>
            <li>
                <?= $user->name; ?>
            </li>
        <?php endforeach; ?>
    </ul>

    <h1>Submit your Name</h1>

    <form method="POST" action="/users">
        <!-- wont work without the name attribute -->
        <input name="name"></input>
        <button type="submit">Submit</button>
    </form>
<?php require 'partials/footer.php' ?>
