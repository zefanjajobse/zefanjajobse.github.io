/**
 * aftellen happy birthday
 */
function countdown(jaartal) {
    for (let index = 10; index >= 0; index--) {
        if (index == 0) {
            return "Happy " + jaartal
        } else {
            console.log(index);
        }
    }
}