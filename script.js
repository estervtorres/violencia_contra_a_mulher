window.addEventListener("load", () => {


// ===== MENU SCROLL =====
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===== MENU EFEITO =====
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.style.background = "rgba(36, 0, 70, 0.95)";
        menu.style.transform = "scale(0.97)";
    } else {
        menu.style.background = "rgba(75, 46, 131, 0.9)";
        menu.style.transform = "scale(1)";
    }
});


// ===== BLOCOS ANIMAÇÃO =====
const blocos = document.querySelectorAll('.bloco, .ajuda');

blocos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s";
});

function aparecer() {
    blocos.forEach(el => {
        const topo = el.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener('scroll', aparecer);
aparecer();


// ===== BOTÕES =====
document.querySelectorAll('.btn, button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = "scale(1)";
    });
});


// ===== TÍTULO DIGITANDO =====
const titulo = document.querySelector('.parallax-inner h1');

if (titulo) {
    const texto = titulo.innerText;
    titulo.innerText = "";

    let i = 0;

    function digitar() {
        if (i < texto.length) {
            titulo.innerText += texto.charAt(i);
            i++;
            setTimeout(digitar, 70);
        }
    }

    digitar();
}


// ===== ESTRELAS (FUND0 ANIMADO FUNCIONANDO) =====
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

let estrelas = [];

for (let i = 0; i < 120; i++) {
    estrelas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        speed: Math.random() * 1.5 + 0.5
    });
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let e of estrelas) {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#c77dff";

        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();

        e.y += e.speed;

        if (e.y > canvas.height) {
            e.y = 0;
            e.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animar);
}

animar();

window.addEventListener("resize", resize);


});
const frases = [
    { simbolo: "+", texto: "LIBERDADE" },
    { simbolo: "−", texto: "VIOLÊNCIA" },
    { simbolo: "=", texto: "IGUALDADE" }
];

let i = 0;

const simboloEl = document.getElementById("simbolo");
const textoEl = document.getElementById("texto");

function trocarTexto() {
    simboloEl.style.opacity = "0";
    textoEl.style.opacity = "0";

    setTimeout(() => {
        i = (i + 1) % frases.length;

        simboloEl.textContent = frases[i].simbolo;
        textoEl.textContent = frases[i].texto;

        simboloEl.style.opacity = "1";
        textoEl.style.opacity = "1";
    }, 300);
}

setInterval(trocarTexto, 2000);


/* SOM */
const setas = document.querySelectorAll(".setas label");//seleciona mais d um


const somVirar = new Audio("flip.mp3");

const somSlide = new Audio("somcarrossel.mp3");

/* TOCAR SOM */

setas.forEach(function(seta){
 // "Para cada" item da lista..
    seta.addEventListener("click", function(){
        // "Escute" o clique no botão e mostre um alerta

        somSlide.currentTime = 0;
        somSlide.play();

    });

});

