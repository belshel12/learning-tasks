const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");

search.addEventListener("submit", onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const { query, days } = e.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch((err) => console.log(err));
}

function getWeather(city, days) {
  //http://api.weatherapi.com/v1/forecast.json?key=baa62dbb5a8a449c87b194856231311&q=Lviv&days=5&lang=uk
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "baa62dbb5a8a449c87b194856231311";
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: "uk",
  });

  return fetch(
    //  `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
    `${BASE_URL}/forecast.json?${params}`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
  <img src="${icon}" alt="${text}">
  <p>${text}</p>
  <h2>${date}</h2>
  <h3>${avgtemp_c}</h3>
</li>`
    )
    .join("");
}
