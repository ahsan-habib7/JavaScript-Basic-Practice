console.log('Async function start');
async function a(){
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < 1000000000; i++) {
                sum += i;
            }
            console.log(sum);
            resolve();            
        }, 2000);
    })
}
a()
console.log('Async function end');




