// push
let  num = [1,2,3,4,5,6,7,8,9]
    console.log("original num",num ,);

    num.push(10,20,30,40,50);
    console.log("After puah",num);
        

// pop

let number =[1,2,3,4,5]
console.log(number)

number.pop()
console.log(number)
number.pop()
console.log(number)


// unshift
    let name =["sri","seenu", "srinath"]
    console.log(name)

    name.unshift("java","python","react")
    console.log(name)


// shift

let alpha =["apple","banana","cucumber","dragon fruit","england chips"]

    console.log(alpha)

    alpha.shift()
    alpha.shift()
    console.log(alpha)


// includes 

let names = ["srinath", "jagath ","mukund","praveen"]
console.log(names)

let arrange =names.includes("srinath")
console.log(arrange)



// indexof        
    let numeric = [10,20,30,40,50,60,70,80]
    console.log(numeric)

    let numer = numeric.indexOf(70)
    console.log(numer)


// slice

let n = [1,2,3,4,5,6,7,8,9]
console.log(n)

nu = n.slice(3,9)
console.log(nu)


// splice

let digit = [1,2,3,4,5,6,7,8,9]
console.log(digit)

let digital = digit.splice(1,5,8,500)
console.log(digital)
console.log(digit)


// join 

let apple = ["a","b","c","d","e"]
console.log(apple)

let banana = apple.join("/")
    console.log(banana)


// reverse

let snake = [9,8,7,6,5,4,3,2,1]
console.log(snake)

let game = snake.reverse()
console.log(game)



// sort


let orange = [98,7,48,35,9,75]
console.log(orange)

let grapes = orange.sort((a,b)=>a-b)
console.log(grapes)