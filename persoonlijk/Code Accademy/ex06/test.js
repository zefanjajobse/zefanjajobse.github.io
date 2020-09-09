$number(
    $replace(
        $replace(payload, "-", "0"),
        ",",
        "."
    )
 )

$sum(payload.data)