const projectenbox = document.querySelector(".projecten");
const filterCategorie = document.getElementById("filterCategorie");
const sorteerTitel = document.getElementById("sorteerTitel");

let alleProjecten = []; 

function laadProjecten(projectenArray) {
    projectenbox.innerHTML = "<h2>Projecten</h2>";

    projectenArray.forEach(project => {
        const projectkaart = document.createElement("article");
        projectkaart.classList = "projectkaart";
        
        const div = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const desc = document.createElement("p");
        const link = document.createElement("a");
        
        img.src = `${project.img}`;
        title.textContent = `${project.title}`;
        desc.textContent = `${project.description}`;
        link.href = `${project.link}`;
        link.textContent = "go to";
        
        projectkaart.append(div);
        projectkaart.append(img);
        projectkaart.append(title);
        projectkaart.append(desc);
        projectkaart.append(link);
        
        projectenbox.append(projectkaart);
    });
}

async function fetchprojecten(){
    try{
        const res = await fetch("../json/projecten.json");
        alleProjecten = await res.json();
        
        laadProjecten(alleProjecten);
    }
    catch(error){
        console.error(error);
        projectenbox.innerHTML += "<p>Kon projecten niet laden.</p>";
    }
}

function pasFiltersToe() {
    let actueleProjecten = [...alleProjecten]; 

    const gekozenCategorie = filterCategorie.value;
    if (gekozenCategorie !== "Alles") {
        actueleProjecten = actueleProjecten.filter(project => project.categorie === gekozenCategorie);
    }

    const gekozenSorteer = sorteerTitel.value;
    if (gekozenSorteer === "az") {
        actueleProjecten.sort((a, b) => a.title.localeCompare(b.title));
    } else if (gekozenSorteer === "za") {
        actueleProjecten.sort((a, b) => b.title.localeCompare(a.title));
    }

    laadProjecten(actueleProjecten);
}

filterCategorie.addEventListener("change", pasFiltersToe);
sorteerTitel.addEventListener("change", pasFiltersToe);

fetchprojecten();