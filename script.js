
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

// un-matched lines
const line1Unmatch1 = document.getElementById('line-1-match-1');
const line1Unmatch2 = document.getElementById('line-1-match-2');
const line1Unmatch3 = document.getElementById('line-1-match-3');
const line1Unmatch4 = document.getElementById('line-1-match-4');

const line2Unmatch1 = document.getElementById('line-2-match-1');
const line2Unmatch2 = document.getElementById('line-2-match-2');
const line2Unmatch3 = document.getElementById('line-2-match-3');
const line2Unmatch4 = document.getElementById('line-2-match-4');

const line3Unmatch1 = document.getElementById('line-3-match-1');
const line3Unmatch2 = document.getElementById('line-3-match-2');
const line3Unmatch3 = document.getElementById('line-3-match-3');
const line3Unmatch4 = document.getElementById('line-3-match-4');

const line4Unmatch1 = document.getElementById('line-4-match-1');
const line4Unmatch2 = document.getElementById('line-4-match-2');
const line4Unmatch3 = document.getElementById('line-4-match-3');
const line4Unmatch4 = document.getElementById('line-4-match-4');



iceCreamBtn.addEventListener('click', () => iceCreamCircleStart.classList.toggle('green'));
chickenBtn.addEventListener('click', () => chickenCircleStart.classList.toggle('green'));
lionBtn.addEventListener('click', () => lionCircleStart.classList.toggle('green'));
carBtn.addEventListener('click', () => carCircleStart.classList.toggle('green'));

// adding eventListener's to images

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

// lion image
lionImg.addEventListener('click', () => {
    lionCircleEnd.classList.toggle('green')
    if (lionCircleStart.classList.contains("green") && lionCircleEnd.classList.contains("green")) {
        line4.style.display = "block";
    } else {
        line4.style.display = "none";
    }
});

//  car image
carImg.addEventListener('click', () => {
    carCircleEnd.classList.toggle('green')
    if (carCircleEnd.classList.contains("green") && carCircleStart.classList.contains("green")) {
        line5.style.display = "block";
    } else {
        line5.style.display = "none";
    }
});

// BELOW CODE FOR INCORRECT PATHS

// preventing unmatched colored circles

// tomato image

tomatoBtn.addEventListener('click', () => {
    tomatoCircleStart.classList.toggle('green')
    let n = circleEndArr.slice(1);
    n.map(item => {
        item.classList.toggle("red");
        item.style.visibility = "none";
    })
});

