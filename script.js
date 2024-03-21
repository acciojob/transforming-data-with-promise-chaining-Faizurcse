//your JS code here. If required.
let btn = document.getElementById('btn');
let input = document.getElementById('ip');

btn.addEventListener('click', () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input.value);
        }, 2000);
    });

    p1.then((data1) => {
        let output = document.getElementById('output');
        output.innerText = `Result: ${data1}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data1);
            }, 2000);
        });
    }).then((data2) => {
        let output = document.getElementById('output');
        output.innerText = `Result: ${data2}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data2 * 2);
            }, 1000);
        });
    }).then((data3) => {
        let output = document.getElementById('output');
        output.innerText = `Result: ${data3}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data3 - 3);
            }, 1000);
        });
    }).then((data4) => {
        let output = document.getElementById('output');
        output.innerText = `Result: ${data4}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data4 / 2);
            }, 1000);
        });
    }).then((data5) => {
        let output = document.getElementById('output');
        output.innerText = `Result: ${data5}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data5 + 10);
            }, 1000);
        });
    }).then((finalResult) => {
        let output = document.getElementById('output');
        output.innerText = `Final Result: ${finalResult}`;
    });
});
