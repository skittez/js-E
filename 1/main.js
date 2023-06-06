'use strict';
//var leftBorderWidth = 1;
//{
//    let second = 2;
//}
//const pi = 3.14;
//
//console.log (second);

//let persone = {
//    name: "John",
//    age: 24,
//    isMarried: false
//}
//
//console.log (persone.name);
//console.log (persone["name"]);
//
//let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
//
//console.log (arr[0]);

//let answer = confirm("are you here?");
//console.log(answer);

//let answer = prompt("are you 18 yo?", "Yes");
//console.log(typeof(arr));

//let incr = 10,
//    decr = 10;
//
////incr++;
////decr--;
//
//console.log (incr++);
//console.log (decr--);
//
//
//let isChecked = true,
//    isClose   = true;


let num = 50;

if (num < 49) {
    console.log ('Not Correct');
} else if (num > 100) {
    console.log ('Many');
} else {
    console.log ('Correct');
}

(num == 50) ? console.log ('Correct') : console.log ('Not Correct');


switch (num) {
    case num < 49:
        console.log ('Not Correct');
        break;
    case num > 100:
        console.log ('Many');
        break;
    case num > 80:
        console.log ('Very Many');
        break;
    case 50:
        console.log ('Correct');
        break;

    default:
        console.log ('Error');
        break;
}


//while (num < 55) {
//    console.log (num);
//    num++;
//}

//do {
//    console.log (num);
//    num++;
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) {
//    console.log (i);
//}

//function calc (a, b) {
//    return (a + b);
//}
//
//let calc = function (a, b) {
//    return (a + b);
//}

//let calc = (a,b) => (a + b)
//console.log (calc(1,4));
//
//let str = "test";
//console.log (str.length);
//console.log (str.toUpperCase());
//console.log (str.toLowerCase());
//
//let twelwe = "12.2px";
//
////console.log (Math.round (twelwe));
//
//console.log(parseInt(twelwe));
//console.log(parseFloat(twelwe));



function first () {
    setTimeout( function() {
        console.log (1);
    }, 500 );
}

function second () {
    console.log (2);
}

first();
second();

function learnJS (lang, callback) {
    console.log ('Education ' + lang);
    callback();
}

function done() {
    console.log ('3 work');
}

learnJS ('JavaScript', done);


console.log ("--------------------------------");
let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log (options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log (options);

for (let key in options) {
    console.log ('Sw ' + key + ' znahenie = ' + options[key]);
}
console.log ("--------------------------------");

console.log (Object.keys(options).length);

console.log ("--------------------------------");

//let arr = ["first", 2, 3, "four", 5];

//arr.pop();
//arr.push("5");
//arr.shift();
//arr.unshift('1');

//arr[99] = [99];
//console.log (arr.length);
//
////for (let i = 0; i < arr.length; i++) {
////    console.log (arr[i]);
////}
//
//arr.forEach(function(item, i, mass) {
//    console.log(i + ': ' + item + '(массив: ' + mass + ")");
//});
//
//console.log (arr);
//
//let mass = [1, 3, 4, 6, 7];
//
//for (let key of mass) {
//    console.log (key);
//}
//
//console.log ("/////////////////////////////");

//let ans = prompt("", ""),
//    arr = [];
//
//arr = ans.split(',');
//console.log (arr);

//let arr = ["a", "z", "w", "s", "o"],
//    i = arr.join(",");
//
//console.log(i);

//let arr = [1, 15, 4],
//    i = arr.sort(compareNum);
//
//function compareNum(a, b) {
//    return a-b;
//}
//
//console.log(arr);

//let soldier = {
//    health: 400,
//    armor: 100
//};
//
//let john = {
//    health: 100
//}
//
//john.__proto__ = soldier;
//
//console.log (john);
//console.log (john.armor);

/*let box      = document.getElementById ('box'),
    btn      = document.getElementsByTagName ('button'),
    circle   = document.getElementsByClassName ('circle'),
    heart    = document.querySelectorAll ('.heart'),
    oneHeart = document.querySelector ('.heart'),
    wrapper  = document.querySelector ('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//for (let i = 0; i < heart.length; i++) {
//    heart[i].style.backgroundColor = 'blue';
//}

heart.forEach(function(item, i, hearArr) {
    item.style.backgroundColor = 'orange';
});

let div = document.createElement('div'),
    text = document.createTextNode('Тут текст');

div.classList.add ('backAq');

//document.body.appendChild (div);
//wrapper.appendChild (div);

//div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = 'Hello World!';


document.body.insertBefore (div, circle[0]);
document.body.removeChild (circle[1]);
wrapper.removeChild (heart[1]);

document.body.replaceChild (btn[1], circle[1]);



console.log (div);

*/

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector ('a');

//btn[0].onclick = function () {
//    alert ('Submit'); 
//}

//btn[0].addEventListener('click', function () {
//    alert ('Submit'); 
//});

btn[0].addEventListener('click', function (event) {
    console.log (event);
    let target = event.target;
    console.log ('EVENT: '+ event.type + ' na ' + event.target);
});

wrap.addEventListener ('click', function () {
    console.log ('EVENT: '+ event.type + ' na ' + event.target);
});

link.addEventListener ('click', function(e) {
    e.preventDefault();
    console.log ('EVENT: '+ e.type + ' na ' + e.target);

});

/*CORRECT*/
btn.forEach(function (item) {
    item.addEventListener ('mouseleave', function () {
        console.log ('URA');
    });
});

//btn[0].addEventListener('mouseenter', function () {
//    alert ('Mouse');
//});

