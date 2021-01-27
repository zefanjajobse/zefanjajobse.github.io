<?php

class QueryBuilder {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function selectAll($table) { //, $toClass
        // create what needs to be executed
        $statement = $this->pdo->prepare("select * from $table");
    
        // execute the statement -- the return can be used somewhere else
        $statement->execute();
    
        // save the returned statement
                            // but only the objects
        // $tasks = $statement->fetchAll(PDO::FETCH_OBJ);
    
        // save to the class Task
        // return $statement->fetchAll(PDO::FETCH_CLASS, $toClass);

        return $statement->fetchAll(PDO::FETCH_OBJ);
    }

    public function insert($table, $values) { // $value == dict
        $types = implode(", ", array_keys($values));
        // add : in front, implode makes a array a string seperated by ', :' in between, array_keys gets the keys of a given array.
        $valuesAmount = ':' . implode(', :', array_keys($values));

        // same as:
        // $counter = 0;
        // foreach ($values as $key => $value) { 
        //     if ($counter++ == 0) {
        //         $valuesAmount = ":$key";
        //     } else {
        //         $valuesAmount = $valuesAmount . ", :$key";
        //     };
        // }

        try {
            $statement = $this->pdo->prepare("insert into $table ($types) values ($valuesAmount)");
    
            $statement->execute($values);
            
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
}