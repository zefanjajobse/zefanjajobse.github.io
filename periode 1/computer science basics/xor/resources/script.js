let a=false;
let b=true;

if ((a || b) && !(a && b)) {
    console.log(true)
} else {
    console.log(false)
}

//(a ∨ b) ∧ ~(a ∧ b)