// Testing if-else 
const tomato = document.getElementById('inputA');
const iceCream = document.getElementById('inputB');
const chicken = document.getElementById('inputC');
const lion = document.getElementById('inputD');
const car = document.getElementById('inputE');
// tomato.addEventListener('change', (e) => {
//     (e.target.checked || !(tomato.classList.contains('classAtoImage'))) ? (console.log('Tomato ON'), tomato.classList.add('classAtoImage'))
//         : ((tomato.classList.remove('classAtoImage'), console.log('Tomato OFF')));
// });

var testArr = [];

// tomato
tomato.addEventListener('change', (e) => {
    if (e.target.checked && !(tomato.classList.contains('classAtoImage'))) {
        testArr.push('classAtoImage');
        console.log(testArr);
    } else {
        testArr = testArr.filter(e => e !== 'classAtoImage');
        console.log(testArr);
    }
});

// icecream
iceCream.addEventListener('change', (e) => {
    if (e.target.checked && !(iceCream.classList.contains('classBtoImage'))) {
        testArr.push('classBtoImage');
        console.log(testArr);
    } else {
        testArr = testArr.filter(e => e !== 'classBtoImage');
        console.log(testArr);
    }
});

// chicken
chicken.addEventListener('change', (e) => {
    if (e.target.checked && !(iceCream.classList.contains('classCtoImage'))) {
        testArr.push('classCtoImage');
        console.log(testArr);
    } else {
        testArr = testArr.filter(e => e !== 'classCtoImage');
        console.log(testArr);
    }
});

// lion
lion.addEventListener('change', (e) => {
    if (e.target.checked && !(iceCream.classList.contains('classDtoImage'))) {
        testArr.push('classDtoImage');
        console.log(testArr);
    } else {
        testArr = testArr.filter(e => e !== 'classDtoImage');
        console.log(testArr);
    }
});
// car
car.addEventListener('change', (e) => {
    if (e.target.checked && !(iceCream.classList.contains('classEtoImage'))) {
        testArr.push('classEtoImage');
        console.log(testArr);
    } else {
        testArr = testArr.filter(e => e !== 'classEtoImage');
        console.log(testArr);
    }
});

// color change test

function changeColor() {
    const change24 = document.styleSheets[0].cssRules[24].style;
    change24.setProperty('background', 'red');
}
