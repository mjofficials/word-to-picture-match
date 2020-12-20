// word inputs
const tomatoWord = document.getElementById('inputA');
const iceCreamWord = document.getElementById('inputB');
const chickenWord = document.getElementById('inputC');
const lionWord = document.getElementById('inputD');
const carWord = document.getElementById('inputE');

// image inputs
const lionImg = document.getElementById('inputF');
const tomatoImg = document.getElementById('inputG');
const carImg = document.getElementById('inputH');
const iceCreamImg = document.getElementById('inputI');
const chickenImg = document.getElementById('inputJ');

// svg path
const svgPath = document.getElementById('svgPath');


// answer arrays
const testArr2 = ['classAtoImage', 'classBtoWord'];

var testArr = [];

// adding event function
function addEvents(input, cName) {
    input.addEventListener('change', (e) => {
        if (e.target.checked && !(input.classList.contains(cName))) {
            testArr.push(cName);
            console.log(testArr);
            matchInArray(testArr, testArr2);
        } else {
            testArr = testArr.filter(e => e !== cName);
            console.log(testArr);
        }
    })
}

// matching array
const matchInArray = (arr1, arr2) => {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        document.body.style.backgroundColor = '#00ff00'
        console.log(' matches');
    } else {
        document.body.style.backgroundColor = '#ffffff'
        console.log(' not matching');
    }
}

// adding events to words
addEvents(tomatoWord, 'classAtoImage');
addEvents(iceCreamWord, 'classBtoImage');
addEvents(chickenWord, 'classCtoImage');
addEvents(lionWord, 'classDtoImage');
addEvents(carWord, 'classEtoImage');

// adding events to images
addEvents(lionImg, 'classAtoWord');
addEvents(tomatoImg, 'classBtoWord');
addEvents(carImg, 'classEtoWord');
addEvents(iceCreamImg, 'classDtoWord');
addEvents(chickenImg, 'classCtoWord');

