const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = canvas.height;
}

const collumn = []

var howNude = 0

for (let i = 0; i < rainDrops.length; i++) {
    collumn.push(getRandomIter())    
}

function EnterMatrix() {
    howNude = 100;
    document.getElementById("container1").innerHTML= "";
}

// document.getElementById("sliderRange").value

function getRandomIter() {
    if (Math.random() > howNude/100) {
        return makeRandomIterator(katakana)
    } else {
        return makeTextIterator("SEND NUDES ")
    } 
}

console.log(collumn.length)

function* makeTextIterator(text) {
    let index = Math.floor(Math.random() * text.length);
    while (true) {
        if (index >= text.length) {
            index = 0
        }
        yield text[index++]
    }
}

function* makeRandomIterator(text) {
    while(true) {
        yield text[Math.floor(Math.random() * text.length)];
    }
}


const draw = () => {
    context.fillStyle = 'rgba(238, 238, 238, 0.2)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#000000';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            collumn[i] = getRandomIter ()
            rainDrops[i] = 0;
        }

        if (rainDrops[i] * fontSize < canvas.height) {
            text = collumn[i].next().value;
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        } else {
            if (Math.random() > 0.40) {
                collumn[i].next().value;
            }
        }   
        rainDrops[i]++;
    }
};

setInterval(draw, 70);