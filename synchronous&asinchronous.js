// Synchronous function
console.log('Synchronous function start');
function synchronousFunction() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log(sum);
}
synchronousFunction();
console.log('Synchronous function end');

//asynchronous function
console.log('Asynchronous function start');
function asynchronousFunction() {
    setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        console.log(sum);
    }, 2000);
}
asynchronousFunction();
console.log('Asynchronous function end');
