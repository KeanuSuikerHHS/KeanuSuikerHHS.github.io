const projectenbox = document.querySelector(".projecten");

async function fetchprojecten(){
    try{
        const res = await fetch("../json/projecten.json");
        const projecten = await res.json();
        projecten.forEach(project => {
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
    catch(error){
        console.error(error);
    }
}
fetchprojecten();