const verstuurKnop = document.querySelector("#form button");
const voorNaam = document.getElementById("voornaam");
const achterNaam = document.getElementById("achternaam");
const email = document.getElementById("email");

const errorVoornaam = document.getElementById("errorVoornaam");
const errorAchternaam = document.getElementById("errorAchternaam");
const errorEmail = document.getElementById("errorEmail");



verstuurKnop.addEventListener("click", e => {
    e.preventDefault();
    voorNaam.style.borderColor = "black";
    achterNaam.style.borderColor = "black";
    email.style.borderColor = "black";
    errorVoornaam.textContent = "";
    errorAchternaam.textContent = "";
    errorEmail.textContent = "";
    const voornaamGoed = checkVoornaam();
    const achternaamGoed = checkAchternaam();
    const emailGoed = checkEmail();
    if(voornaamGoed && achternaamGoed && emailGoed){
        voorNaam.style.borderColor = "green";
        achterNaam.style.borderColor = "green";
        email.style.borderColor = "green";
        console.log("Alles is correct ingevuld");
        window.alert("Alles is correct ingevuld en verstuurd");
    }
});

function checkVoornaam(){
    let result = true;
    const voornaamfouten = new Set();

    if(voorNaam.value.trim().length > 0){
        console.log("Voornaam is lang genoeg");
    }
    else{
        console.log("Fout! voornaam is te kort");
        voornaamfouten.add("Moet minstens 1 letter bevatten");
        voorNaam.style.borderColor = "red";
        result = false;
    }

    if(!/\d/.test(voorNaam.value)){
        console.log("Voornaam bevat geen cijfers");
    }
    else{
        console.log("Fout! voornaam bevat cijfer");
        voornaamfouten.add("Mag geen cijfers bevatten");
        voorNaam.style.borderColor = "red";
        result = false;
    }

    errorVoornaam.textContent = [...voornaamfouten].join(", ");
    return result;
}

function checkAchternaam(){
    let result = true;
    const achternaamfouten = new Set();

    if(achterNaam.value.trim().length > 0){
        console.log("Achternaam is lang genoeg");
    }
    else{
        console.log("Fout! achternaam is te kort");
        achternaamfouten.add("Moet minstens 1 letter bevatten");
        achterNaam.style.borderColor = "red";
        result = false;
    }

    if(!/\d/.test(achterNaam.value)){
        console.log("Achternaam bevat geen cijfers");
    }
    else{
        console.log("Fout! achternaam bevat cijfer");
        achternaamfouten.add("Mag geen cijfers bevatten");
        achterNaam.style.borderColor = "red";
        result = false;
    }

    errorAchternaam.textContent = [...achternaamfouten].join(", ");
    return result;
}

function checkEmail(){
    let result = true;
    const emailfouten = new Set();

    if(email.value.trim().length > 0){
        console.log("Email is lang genoeg");
    }
    else{
        console.log("Fout! email is te kort");
        emailfouten.add("Moet minstens 1 letter bevatten");
        email.style.borderColor = "red";
        result = false;
    }

    let emailHasAt = false;
    for(let i = 0; i <= email.value.trim().length; i++){
        if(email.value.trim().charAt(i) == "@"){
            emailHasAt = true;
        }
    }

    if(emailHasAt){
        console.log("Email heeft @");
    }
    else{
        console.log("Fout! email bevat geen @");
        emailfouten.add("Moet een @ symbool bevatten");
        email.style.borderColor = "red";
        result = false;
    }

    errorEmail.textContent = [...emailfouten].join(", ");
    return result;
}