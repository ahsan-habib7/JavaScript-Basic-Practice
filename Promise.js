console.log('Promise function start');
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve('Promise resolved');
        } else {
            reject('Promise rejected');
        }
    }, 2000);
});
prom.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
console.log('Promise function end');