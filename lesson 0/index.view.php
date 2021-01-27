<html>
<head>
    <meta charset="utf8">
    <title>Welcome to PHP</title>
    <style>
    header {
        background: #e3e3e3;
        padding: 2em;
        text-align: center;
    }
    </style>
</head>
    <header>
        <!-- <h1><!?= $greeting; // renders the data ?></h1> -->
    </header>
    
        <ul>
            <!-- alternative for loop -->
            <?php foreach ($names as $key => $value) : ?> 
                    <li><?= $value ?></li>
            <?php endforeach; ?>


            <!-- normal for loop -->
            <?php
                foreach ($names as $key => $value) {
                    echo "<li>$value</li>"; // print every item
                    echo "<li>" . $names[$key] . "</li>"; // print every item based on key
                }
            ?>
        </ul>

        <ul>
            <?php foreach ($animals as $key => $value) : ?>
                <li><?= $value ?></li>
            <?php endforeach; ?>
        </ul>

        <ul>
            <?php foreach ($person as $key => $value) : ?>
                <li><strong><?= $key; ?></strong> <?= $value; ?></li>
            <?php endforeach; ?>
        </ul>

        <!-- make the dump a little bit nicer -->
        <pre>
            <!-- dump variable to the screen -->
            <?php var_dump($person); ?>
        </pre>

        <?php echo $task["completed"]; ?>

        <?= ucwords("Hello, my name is jeff"); ?>

        <h1>Task For The Day</h1>

        <ul>
            <?php foreach ($task as $key => $value) : ?>
                <li>
                    <strong><?= ucwords($key); ?></strong> 
                        <?php 
                        if (is_bool($value))
                            {
                                $value ? $value = 'Yes' : $value = 'No';
                                echo $value;
                            } 
                        else 
                            {
                                echo $value;
                            }
                    ?>
                </li>
            <?php endforeach; ?>
        </ul>

        <ul>
            <li>
                <strong>Name: </strong><?= $task["title"]; ?>
            </li>
            <li>
                <strong>Due date: </strong><?= $task["due"]; ?>
            </li>
            <li>
                <strong>Assigned to: </strong><?= $task["assigned_to"]; ?>
            </li>
            <li>
                <!-- true ? 'do something' : 'do something else' -->
                <!-- <strong>Status: </strong><!?= $task["completed"] ? 'Complete' : 'Incomplete'; ?> -->
                <strong>Status: </strong><?php if ($task['completed']) : ?>
                        <span>&#9989;</span>
                    <?php else : ?>
                        <span>&#10062;</span>
                <?php endif; ?>
                <!-- : == in between {}, endif to end -->
                <!-- not true == ! -->
            </li>
            <li>
                <strong>OverDue: </strong><?php if ($tast["overdue"]) : ?>
                    <span>test</span>
                <?php else : ?>
                    <span>not overdue</span>
                <?php endif; ?>
            </li>
            <p>
                <?= dumper('Hello', 'big', 'world'); ?>
                <!-- <!?= dd($animals); ?> -->
                </br>
                <?= checkv2(3) ? 'Your old enough': 'you\'re not old enough'; ?>
            </p>
        </ul>

        <ul>
            <?php foreach ($tasks as $task) : ?>

                <?php if ($task->isComplete()) : ?>
                    <strike> <li><?= $task->description() ?></li></strike>
                <?php else: ?>
                    <li><?= $task->description()?></li>
                <?php endif; ?>
                
            <?php endforeach; ?>
        </ul>
</html>








<!-- <p><!?php // start making script
    //$greeting = "Hello World"; // create variable - always start a variable with $ - always end with ; on each line
    //echo $greeting; // print the variable
    // end php == ?></p> 
    //<p><!?php 
    //$name = "Zefanja Jobse";
    //echo "Hello, $name ";
    // double quotes: " when u want to use the variable within. single quote: ' if you want to use the dollar sign: $
    //echo 'Hello, ' . $name . ' '; // this is also a option
    //echo "Hello, {$name} "; // optional, to make clear this is a var
    //echo $greeting . ' ' . $name;
    //echo 'Hello ' . htmlspecialchars($_GET["name"]) . '! '; // $_GET["name"] uses the name variable within the url: https://local.jobse.space/?name=oof
    //$newName = htmlspecialchars($_GET["newname"]);
    //echo "hello, $newName";
    // htmlspecialchars() makes all harmfull characters to something less harmfull, so people cant break your website by typing something weird there.
    ?>
    <h1><!?= "Hello, " . htmlspecialchars($_GET['name']); // the php return == script with <!?= instead of <!?php echo ?></h1></p> -->