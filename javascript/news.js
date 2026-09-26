const newsbox = document.querySelector(".news");

async function fetchnews () {
    try{
        const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        const data = await res.json();
        artikelen = data.results;
        for (let index = 0; index < 5; index++) {
            const artikel = artikelen[index];
            const newskaart = document.createElement("article");
            newskaart.classList = "newskaart";
            const div = document.createElement("div");
            const img = document.createElement("img");
            const title = document.createElement("h2");
            const desc = document.createElement("p");
            img.src = `${artikel.image_url}`;
            title.textContent = `${artikel.title}`;
            desc.textContent = `${artikel.summary}`;
            newskaart.append(div);
            newskaart.append(img);
            newskaart.append(title);
            newskaart.append(desc);
            newsbox.append(newskaart);
        }
    }
    catch(error){
        console.error(error);
    }
}

fetchnews();