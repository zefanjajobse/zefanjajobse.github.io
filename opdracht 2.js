/**
 * Elke 3e rij een andere kleur
 */
for (let index = 1; index < 10; index++) {
    if ((index % 3) == 0) {
        console.log('add the background colour green', index);
    } else {
        console.log('normal');
    }
}