const e={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},n=[{title:"Interceptor",genreIDs:[28,53,12]},{title:"Fantastic Beasts: The Secrets of Dumbledore",genreIDs:[14,12,28]},{title:"Last Seen Alive",genreIDs:[28,53]},{title:"Jurassic World Dominion",genreIDs:[878,28,12,53]}].map((e=>({...e,genreNames:[]})));n.map((({genreIDs:n,genreNames:i})=>{e.genres.map((e=>{n.forEach(((n,t)=>{n===e.id&&(i[t]=e.name)}))}))}));const i=document.querySelector("#films"),t=n.map((({genreNames:e,title:n},i)=>`<li class="films-item"><p>${i+1}. "${n}: ${e.length>2?e.slice(0,2).join(", ")+", Others":e.join(", ")}."</p> </li>`)).join("");i.insertAdjacentHTML("beforeend",t);
//# sourceMappingURL=task-02-films.dd1df942.js.map
