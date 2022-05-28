
const random = (max) => {
    return Math.round(Math.random() * max)
}

console.log(random(87))

const array = (max, maxRnd) => {
    const arrayNan = [];

    while(arrayNan.length < max) {
        arrayNan.push(random(maxRnd))
    }
    return arrayNan
}

console.log('Массив случайных чисел: ', array(5, 10))


const a = array(5, 20)
const b = array(5, 10)
const c = array(5, 5)


console.log('случайные числа, массив А: ', a)
console.log('случайные числа, массив B: ', b)
console.log('случайные числа, массив C: ', c)


const filt = (arr, max) => {
    return arr.filter((number) => {
        return number > max
    })
}

console.log('Отфильтрованный массив А, числа больше 5: ', filt(a, 5)) 

export { filt, random }
