// Testing if-else 
const tomato = document.getElementById('inputA');

// tomato.addEventListener('change', (e) => {
//     (e.target.checked || !(tomato.classList.contains('classAtoImage'))) ? (console.log('Tomato ON'), tomato.classList.add('classAtoImage'))
//         : ((tomato.classList.remove('classAtoImage'), console.log('Tomato OFF')));
// });

var testArr = [];

tomato.addEventListener('change', (e) => {
    if (e.target.checked && !(tomato.classList.contains('classAtoImage'))) {
        foundOrnot();
        testArr.push('classAtoImage');
        console.log(testArr);
    } else {
        foundOrnot();
        testArr = testArr.filter(e => e !== 'classAtoImage');
        console.log(testArr);
    }
});


function foundOrnot() {
    if ((testArr.indexOf('classAtoImage') != -1)) {
        console.log('not found');
    } else {
        console.log(' found')
    }
}