//Error Handling using try...catch block
function calculate(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}
try {
    console.log(calculate(3, 0));
} catch (err) { // here error handled by try catch block.
    console.log("Caught:", err.message);
}

// console.log("hello");

//Error handling using callback

function calculate1(num, callback) {

    if (typeof callback !== 'function') {
        throw new TypeError(`callback is not a function, pass an argument as ${typeof callback}`);
    }

    setTimeout(() => {
        if (typeof num !== 'number') {
            callback(new TypeError(`num is not a number , got: ${typeof num}`))
            return;
        }
        callback(null, num * 2);
    }, 2000)

}

calculate1(2, (err, result) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log(result);
    }
})

//error handled using promise
const calculate2 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num !== 'number') {
                reject(new TypeError(`num is not a number , got: ${typeof num}`))
            }
            else {
                resolve(num * 2)
            }
        })
    }, 2000)
}
calculate2(4)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));

// error handle using async await
function calculate3(num) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof num !== 'number') {
                reject(new TypeError(`Expected number, got: ${typeof num}`));
                return;
            }

            resolve(num * 2);

        }, 2000);

    });
}
async function run() {
    try {
        const result = await calculate3('2'); // try with number also
        console.log(result);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();

//using event emmiter for error handling

const EventEmitter = require('events');
function calculateEvent(num) {
    return new Promise((resolve, reject) => {
        const emitter = new EventEmitter();
        emitter.on('success', (result) => {
            resolve(result);
        });
        emitter.on('error', (err) => {
            reject(err);
        });
        setTimeout(() => {
            if (typeof num !== 'number') {
                emitter.emit('error', new TypeError("expected number"));
                return;
            }
            emitter.emit('success', num * 2);
        }, 1000);

    });
}
async function run() {
    try {
        const result = await calculateEvent('2');
        console.log(result);
    } catch (err) {
        console.error("Caught:", err.message);
    }
}
run();


