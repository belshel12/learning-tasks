// Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

//  Expected result
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'


const genresInfo = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

const films = [
  {
    title: "Interceptor",
    genreIDs: [28, 53, 12],
  },
  {
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    genreIDs: [14, 12, 28],
  },
  {
    title: "Last Seen Alive",
    genreIDs: [28, 53],
  },
  {
    title: "Jurassic World Dominion",
    genreIDs: [878, 28, 12, 53],
  },
];

const filmsList = films.map((film) => {
  return { ...film, genreNames: [] };
});

filmsList.map(({ genreIDs, genreNames }) => {
  genresInfo.genres.map((item) => {
    genreIDs.forEach((el, elId) => {
      if (el === item.id) {
        genreNames[elId] = item.name;
      }
    });
  });
});

const list = document.querySelector("#films");

const markup = filmsList
  .map(({ genreNames, title }, id) => {
    const genres =
      genreNames.length > 2
        ? genreNames.slice(0, 2).join(", ") + ", Others"
        : genreNames.join(", ");

    return `<li class="films-item"><p>${
      id + 1
    }. "${title}: ${genres}."</p> </li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", markup);
