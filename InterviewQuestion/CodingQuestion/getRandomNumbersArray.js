function getRandomNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumbers = Array.from({length}, () => Math.floor(Math.random() * 100));
            resolve(randomNumbers);
        }, delay);
        //reject("Error in getRandomNumbersArray");
    })
}

getRandomNumbersArray(5, 1000).then((data) => console.log(data)).catch((err) => console.log(err)); // [ 87, 24, 94, 69, 0 ]