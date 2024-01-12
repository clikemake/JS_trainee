
//Замыкание
function outFoo(){
    var num = 7;
    return function innnerFoo(){
        ++num;
        console.log(num);
    }
}

//Тоже замыкание
function outFooSecond(){
    let num = 7;
    function innnerFoo(){
        ++num;
        console.log(num);
    }

    return innnerFoo;
}

const exp = outFoo();
//exp(); //8
//exp(); //9
//exp(); //10
//exp(); //11
//console.log(exp); - undefined

const sec_exp = outFooSecond();
//sec_exp(); //8

function multiple(factor){
    return function(number){
        return factor * number;
    }
}

const first_multp = multiple(4);
//console.log(first_multp(6)); //24

//console.log(1 === '1'); //false
//console.log(1 == '1'); //true

async function asyncFoo(){

}

const ex_asyncFoo = asyncFoo();

//console.log(ex_asyncFoo); //Promise {<fulfilled>: undefined}

const games = [
    {name: "Baldur's Gate 3", year: 2023},
    {name: "TES Skyrim", year: 2011},
    {name: "Dishonored", year: 2012},
    {name: "We were here", year: 2017}
]

//Перебор массива с условием без изменения исходного массива или создания нового
games.forEach(function (game){
    if(game.year < 2023)
        return //console.log(game.name);
});

//console.log(games);

//Метод filter принимает callback-функцию с ТРЕМЯ параметрами (1 - текущий элемент массива, 2 - индекс элемента, 
//3 - массив, для которого вызывается функция)
//Данный метод возрващает массив элементов, для которых функция вернула true
const oldGames = games.filter(function (game){
    return game.year < games[0].year;
});

//console.log(oldGames);

//Метод reduce принимает callback-функцию с ЧЕТЫРЬМЯ параметрами (accumulator - значение, которое накапливает результат,
//текущий элемент массива, индекс элемента, массив, для которого вызывается функция)
//Возвращает аккумулятор 
const newGames = games.reduce(function (game, newest){
    return (game.year > newest.year) ? game : newest;
}, games[0]);

//console.log(newGames.name);

//Метод map callback-функцию с ТРЕМЯ параметрами (1 - текущий элемент массива, 2 - индекс элемента, 
//3 - массив, для которого вызывается функция)
//Возвращает обработаный функцией массив
const mapedGames = games.map(function (game){
    return {
        name : game.name,
        year: game.year + 10,
    };
});

//console.log(mapedGames);

var a = {};
(function b(a) {
a.a = 10;
a = null;
})(a);
//console.log(a);

// const a = {}
// function clear(obj){
//     obj.x = 40
//     obj = null
// }
// clear(a);
// console.log(a); // 40

let x = 10;
x.y = 10;
//console.log(x);


//В данном коде .catch(p => p + 'c') не вызывается потому, что промис, 
//возвращаемый предыдущим catch, становится выполненным (resolved). 
//В методе catch, если обработчик отработал успешно (то есть не выбросил ошибку), то промис становится выполненным, 
//и управление передается следующему блоку then.
// Promise.reject('a')
//   .catch(p => p + 'b') // ab
//   .catch(p => p + 'c') //пропуск тк предыдущий промис выполнен (ab)
//   .then(p => p + 'd') //abd
//   .finally(p => console.log(p)) // finally не возвращает промис, поэтому abd
//   .then(p => console.log(p)); //abd

//   function multiply(x, y) {
//     return x * y;
//   }
  
//   const multiplyByTwo = multiply.bind(null, 2);
  
//   console.log(multiplyByTwo(5));

//   function foo(){};
//   foo.x =10;
//   console.log(foo.x)

//   const obj = {
//     x:10,
//     y:20,
//     z:30,
//   }

//   const result = Object.values(obj)

//   console.log(result)

//   async function bar(){
//     return Promise.resolve(10);
//   }

//   async function bar2(){};

//   const res1 = bar();
//   const res2 = bar2();

//   console.log(res1,res2);
//   console.log(0 || 1 && 2 || 3);
//   console.log(0 || 1 && 2 || 3);

// setTimeout(function timeout(){
//     console.log('1')
// }, 0)

// Promise.resolve('2').then(console.log);

// console.log('3')


console.log('log 1');

setTimeout(()=>{
    console.log('setTimeout 1');
    Promise.resolve('setTimeout promise').then(console.log);
});

setTimeout(()=>{
    console.log('setTimeout 2');
});

Promise.resolve('promise 1').then(console.log);

setTimeout(()=>{
    console.log('setTimeout 3');
});

queueMicrotask(()=>{
    console.log("queueMicrotask 1");
    setTimeout(()=>{
        console.log("setTimeout queueMicrotask 1");
    });
});

console.log('log 5');