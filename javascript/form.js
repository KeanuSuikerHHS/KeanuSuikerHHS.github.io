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

function toonFeedback(inputElement, errorElement, checkFunctie) {
    const { isValid, foutmelding } = checkFunctie(inputElement.value);

    if (!isValid) {
        errorElement.textContent = foutmelding;
        errorElement.style.color = "red";
        inputElement.style.borderColor = "red";
        inputElement.setAttribute("aria-invalid", "true");
    } else {
        errorElement.textContent = "Correct ingevuld!";
        errorElement.style.color = "green";
        inputElement.style.borderColor = "green";
        inputElement.setAttribute("aria-invalid", "false");
    }
    
    return isValid;
}

function controleerVoornaam(waarde) {
    if (waarde.trim().length === 0) 
        return { isValid: false, foutmelding: "Voornaam mag niet leeg zijn (minstens 1 letter)." };

    if (/\d/.test(waarde)) 
        return { isValid: false, foutmelding: "Voornaam mag geen cijfers bevatten." };

    return { isValid: true, foutmelding: "" };
}

function controleerAchternaam(waarde) {
    if (waarde.trim().length === 0) 
        return { isValid: false, foutmelding: "Achternaam mag niet leeg zijn (minstens 1 letter)." };

    if (/\d/.test(waarde))
        return { isValid: false, foutmelding: "Achternaam mag geen cijfers bevatten." };

    return { isValid: true, foutmelding: "" };
}

function controleerEmail(waarde) {
    if (waarde.trim().length === 0)
        return { isValid: false, foutmelding: "E-mailadres mag niet leeg zijn." };

    if (!waarde.includes("@"))
        return { isValid: false, foutmelding: "E-mailadres moet een '@' symbool bevatten." };
    
    return { isValid: true, foutmelding: "" };
}

function valideerFormulierKnop() {
    const voornaamValid = controleerVoornaam(voorNaam.value).isValid;
    const achternaamValid = controleerAchternaam(achterNaam.value).isValid;
    const emailValid = controleerEmail(email.value).isValid;

    if (voornaamValid && achternaamValid && emailValid) {
        verstuurKnop.disabled = false;
        verstuurKnop.style.opacity = "1";
        verstuurKnop.style.cursor = "pointer";
    } else {
        verstuurKnop.disabled = true;
        verstuurKnop.style.opacity = "0.5";
        verstuurKnop.style.cursor = "not-allowed";
    }
}

voorNaam.addEventListener("blur", () => { toonFeedback(voorNaam, errorVoornaam, controleerVoornaam); valideerFormulierKnop(); });
achterNaam.addEventListener("blur", () => { toonFeedback(achterNaam, errorAchternaam, controleerAchternaam); valideerFormulierKnop(); });
email.addEventListener("blur", () => { toonFeedback(email, errorEmail, controleerEmail); valideerFormulierKnop(); });
voorNaam.addEventListener("input", () => { toonFeedback(voorNaam, errorVoornaam, controleerVoornaam); valideerFormulierKnop(); });
achterNaam.addEventListener("input", () => { toonFeedback(achterNaam, errorAchternaam, controleerAchternaam); valideerFormulierKnop(); });
email.addEventListener("input", () => { toonFeedback(email, errorEmail, controleerEmail); valideerFormulierKnop(); });

verstuurKnop.addEventListener("click", e => {
    e.preventDefault();
    window.alert("Alles is correct ingevuld en verstuurd!");
});