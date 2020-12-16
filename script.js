
// button Id's
const carBtn = document.getElementById('car-btn');
const lionBtn = document.getElementById('lion-btn');
const chickenBtn = document.getElementById('chicken-btn');
const iceCreamBtn = document.getElementById('ice-cream-btn');
const tomatoBtn = document.getElementById('tomato-btn');

// circle start Id's
const carCircleStart = document.getElementById('car-circle-start');
const lionCircleStart = document.getElementById('lion-circle-start');
const chickenCircleStart = document.getElementById('chicken-circle-start');
const iceCreamCircleStart = document.getElementById('icecream-circle-start');
const tomatoCircleStart = document.getElementById('tomato-circle-start');

// circle end Id's
const carCircleEnd = document.getElementById('car-circle-end');
const lionCircleEnd = document.getElementById('lion-circle-end');
const chickenCircleEnd = document.getElementById('chicken-circle-end');
const iceCreamCircleEnd = document.getElementById('icecream-circle-end');
const tomatoCircleEnd = document.getElementById('tomato-circle-end');

// image Id's
const lionImg = document.getElementById('lion');
const tomatoImg = document.getElementById('tomato');
const iceCreamImg = document.getElementById('ice-cream');
const chickenImg = document.getElementById('chicken');
const carImg = document.getElementById('car');

// button Array
const btnArr = [tomatoBtn, iceCreamBtn, chickenBtn, lionBtn, carBtn];

// circle start Array
const circleStartArr = [tomatoCircleStart, iceCreamCircleStart, chickenCircleStart, lionCircleStart, carCircleStart];

// circle end Array
const circleEndArr = [tomatoCircleEnd, iceCreamCircleEnd, chickenCircleEnd, lionCircleEnd, carCircleEnd];

// image Id's
const imageArr = [];

// matched lines
const line1 = document.getElementById('line-1-match');
const line2 = document.getElementById('line-2-match');
const line3 = document.getElementById('line-3-match');
const line4 = document.getElementById('line-4-match');
const line5 = document.getElementById('line-5-match');

// circleEndArr.map(x => x.style.fill = "red");

// btnArr.map(x => {
//     x.addEventListener("click", function (e) {
//         tomatoCircleStart.style.fill = "green";
//     })
// })

// adding eventListener's to buttons

// btnArr.forEach(item => {
//     item.addEventListener('click', () => {
//         for (let i = 0; i < circleEndArr.length; i++) {
//             circleStartArr[i].classList.toggle('activated');
//         }
//     })
// });

tomatoBtn.addEventListener('click', () => tomatoCircleStart.classList.toggle('green'));
iceCreamBtn.addEventListener('click', () => iceCreamCircleStart.classList.toggle('green'));
chickenBtn.addEventListener('click', () => chickenCircleStart.classList.toggle('green'));
lionBtn.addEventListener('click', () => lionCircleStart.classList.toggle('green'));
carBtn.addEventListener('click', () => carCircleStart.classList.toggle('green'));

// preventing unmatched colored circles



// adding eventListener's to images
lionImg.addEventListener('click', () => lionCircleEnd.classList.toggle('green'));
carImg.addEventListener('click', () => carCircleEnd.classList.toggle('green'));


// tomato image
tomatoImg.addEventListener('click', () => {
    tomatoCircleEnd.classList.toggle('green')
    if (tomatoCircleStart.classList.contains("green") && tomatoCircleEnd.classList.contains("green")) {
        line1.style.display = "block";
    } else {
        line1.style.display = "none";
    }
});

// ice-cream image
iceCreamImg.addEventListener('click', () => {
    iceCreamCircleEnd.classList.toggle('green')
    if (iceCreamCircleStart.classList.contains("green") && iceCreamCircleEnd.classList.contains("green")) {
        line2.style.display = "block";
    } else {
        line2.style.display = "none";
    }
});

// chicken image
chickenImg.addEventListener('click', () => {
    chickenCircleEnd.classList.toggle('green')
    if (chickenCircleStart.classList.contains("green") && chickenCircleEnd.classList.contains("green")) {
        line3.style.display = "block";
    } else {
        line3.style.display = "none";
    }
});


carImg.addEventListener('click', () => carCircleEnd.classList.toggle('green'));

