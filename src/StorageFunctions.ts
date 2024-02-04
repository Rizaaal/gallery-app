export function insertNewCard(url?: string, title?: string): void{
    const oldCards = JSON.parse(localStorage.getItem("cards") || "{}");
    let id = 1;
    for (let post in oldCards){id++;}
    localStorage.setItem("cards", JSON.stringify({
        ...oldCards, 
        [`post${id}`]: {
            url: url,
            title: title,
            favourite: false
        }
    }));
}

export function setFav(id: string): void{
    const cards = JSON.parse(localStorage.getItem("cards") || "{}");
    localStorage.setItem("cards", JSON.stringify(
      {...cards, 
        [id]: {
          ...cards[id],
          favourite: !cards[id].favourite
        }
      }
    ));
  };