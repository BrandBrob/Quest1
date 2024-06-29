const title = document.querySelector(".header__div-h1");
const p = document.querySelectorAll(".head__goal-p");
const midP = document.querySelectorAll(".mid-div__p");
const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const titleH1 = document.getElementById("firts-h2");
const titleH2 = document.getElementById("secound-h2");
const arrow = document.querySelector(".fa-arrow-right-long");

let idPosition = 0;
let textSave = {};

// Cambiar el estilo del título en eventos de ratón
p.forEach(text => {
    text.addEventListener("mouseover", () => {
        title.style.background = "#ccc";
        title.style.color = "#333";
    });
    text.addEventListener("mouseleave", () => {
        title.style.background = "#111";
        title.style.color = "#ccc";
    });
});

midP.forEach(text => {
    text.addEventListener("mouseover", () => {
        title.style.background = "#ccc";
        title.style.color = "#111";
    });
    text.addEventListener("mouseleave", () => {
        title.style.background = "#111";
        title.style.color = "#ccc";
    });
});

// Función para guardar los textos actuales
function saveTexts(position) {
    textSave[position] = [];
    midP.forEach((text, index) => {
        textSave[position][index] = text.innerHTML;
    });
}

// Función para restaurar los textos guardados
function restoreTexts(position) {
    if (textSave[position]) {
        midP.forEach((text, index) => {
            text.innerHTML = textSave[position][index];
        });
    } else {
        midP.forEach(text => {
            text.innerHTML = "";
        });
    }
}

// Guardar los textos iniciales
saveTexts(idPosition);

btnNext.addEventListener("click", () => {
    if(idPosition == 0 || idPosition == 1){
    saveTexts(idPosition); // Guardar los textos antes de cambiar de posición
    idPosition++;
    }
    console.log(idPosition);
    if (idPosition == 1) {
        arrow.style.display = "block";
        titleH1.innerHTML = "Obstacles that may arise are...";
        titleH2.innerHTML = "How I plan to respond to each obstacle";
    }
    if (idPosition == 2) {
        arrow.style.display = "none";
        titleH1.innerHTML = "What will be different when I achieve my goal?";
        titleH2.innerHTML = "NEXT BEST STEPS";
        btnNext.style.display ="none"
    }
    restoreTexts(idPosition); // Restaurar los textos para la nueva posición
});

btnBack.addEventListener("click", () => {
    if (idPosition > 0) {
        saveTexts(idPosition); // Guardar los textos antes de cambiar de posición
        idPosition--;
        if (idPosition == 1) {
            arrow.style.display = "block";
            titleH1.innerHTML = "Obstacles that may arise are...";
            titleH2.innerHTML = "How I plan to respond to each obstacle";
        }
        if (idPosition == 0) {
            arrow.style.display = "none";
            titleH1.innerHTML = "My key strengths that will help me achieve this goal are...";
            titleH2.innerHTML = "This goal is important to me because...";
            btnNext.style.display ="block"
        }
        restoreTexts(idPosition); // Restaurar los textos para la nueva posición
    }
});
