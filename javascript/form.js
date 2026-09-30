const verstuurKnop = document.querySelector("#form button");
const voorNaam = document.getElementById("voornaam");
const achterNaam = document.getElementById("achternaam");
const email = document.getElementById("email");
const errorVoornaam = document.getElementById("errorVoornaam");
const errorAchternaam = document.getElementById("errorAchternaam");
const errorEmail = document.getElementById("errorEmail");

verstuurKnop.disabled = true;
verstuurKnop.style.opacity = "0.5";
verstuurKnop.style.cursor = "not-allowed";

function checkVoornaam(toonErrors) {
    let result = true;
    const voornaamfouten = new Set();
    
    if(voorNaam.value.trim().length === 0){
        voornaamfouten.add("Moet minstens 1 letter bevatten");
        result = false;
    } else if(/\d/.test(voorNaam.value)){
        voornaamfouten.add("Mag geen cijfers bevatten");
        result = false;
    }
    
    if(toonErrors) {
        errorVoornaam.textContent = [...voornaamfouten].join(", ");
        voorNaam.style.borderColor = result ? "green" : "red";
    }
    return result;
}

function checkAchternaam(toonErrors) {
    let result = true;
    const achternaamfouten = new Set();
    
    if(achterNaam.value.trim().length === 0){
        achternaamfouten.add("Moet minstens 1 letter bevatten");
        result = false;
    } else if(/\d/.test(achterNaam.value)){
        achternaamfouten.add("Mag geen cijfers bevatten");
        result = false;
    }
    
    if(toonErrors) {
        errorAchternaam.textContent = [...achternaamfouten].join(", ");
        achterNaam.style.borderColor = result ? "green" : "red";
    }
    return result;
}

function checkEmail(toonErrors) {
    let result = true;
    const emailfouten = new Set();
    
    if(email.value.trim().length === 0){
        emailfouten.add("Moet minstens 1 letter bevatten");
        result = false;
    } else if(!email.value.includes("@")){
        emailfouten.add("Moet een @ symbool bevatten");
        result = false;
    }
    
    if(toonErrors) {
        errorEmail.textContent = [...emailfouten].join(", ");
        email.style.borderColor = result ? "green" : "red";
    }
    return result;
}

function valideerKnop() {
    if(checkVoornaam(false) && checkAchternaam(false) && checkEmail(false)) {
        verstuurKnop.disabled = false;
        verstuurKnop.style.opacity = "1";
        verstuurKnop.style.cursor = "pointer";
    } else {
        verstuurKnop.disabled = true;
        verstuurKnop.style.opacity = "0.5";
        verstuurKnop.style.cursor = "not-allowed";
    }
}

voorNaam.addEventListener("input", () => {
    checkVoornaam(true);
    valideerKnop();
});

achterNaam.addEventListener("input", () => {
    checkAchternaam(true);
    valideerKnop();
});

email.addEventListener("input", () => {
    checkEmail(true);
    valideerKnop();
});

verstuurKnop.addEventListener("click", e => {
    e.preventDefault();
    window.alert("Alles is correct ingevuld en verstuurd");
});