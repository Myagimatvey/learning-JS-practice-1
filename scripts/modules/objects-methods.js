import { random } from "./arrays-method";
import { names } from "../helpers/user-names";


const users = [{
    firstName: 'Artem',
    secondName: 'Zvezda',
    age: 23
},{
    firstName: 'Andrey',
    secondName: 'Neptun',
    age: 20
},{
    firstName: 'ilya',
    secondName: 'Upiter',
    age: 29
},{
    firstName: 'Stas',
    secondName: 'Loh',
    age: 16
},{
    firstName: 'Leha',
    secondName: 'Med',
    age: 28
}];

const adultUsers = users.filter((sniper) => {
    return sniper.age > 18
})

console.log('Массив совершеннолетних пользователей ', adultUsers)

const getRandomUser = () => {
    return {
        firstName: names[random(names.length - 1)],
        lastName: names[random(names.length - 1)],
    }
}

const getRandomUsers = (maxUsers) => {
    const arrayUsers = []

    while(maxUsers > arrayUsers.length) {
        arrayUsers.push(getRandomUser())
    }

    return arrayUsers

}
console.log('Массив случайных пользователей: ', getRandomUsers(5))


const usersWithId = getRandomUsers(10).map((elementArr) => {
    return {
        firstName: elementArr.firstName,
        lastName: elementArr.lastName,
        id: random(1000)
    }
})

console.log('Массив случайных пользователей с ID: ', usersWithId )

const randomUsersOrderId = getRandomUsers(10).map((elementArr, id) => {
    return {
        firstName: elementArr.firstName,
        lastName: elementArr.lastName,
        id: id
    }
})

console.log('Случайные пользователи с ид по порядку: ', randomUsersOrderId)

const userOne = randomUsersOrderId.find((elem) => {
    if(elem.id === 0) {
        return true
    }
})

console.log('Первый пользователь из массива', userOne)

const findUser = (id) => {
    return  randomUsersOrderId.find((elem) => {
        if(elem.id === id) {
            return true
        }
    })
}

console.log('Поиск пользователя по ID из массива', findUser(6))


export { findUser, getRandomUsers, randomUsersOrderId }
