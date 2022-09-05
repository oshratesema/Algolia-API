let input = document.querySelector("input");
let ul = document.querySelector("ul");

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    const API_URL = `http://hn.algolia.com/api/v1/search?query=${input.value}`;
    fetch(API_URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //clear all ul children
        ul.innerHTML = "";
        //take all the nessesery array from the API
        let hits = data.hits;
        for (let i = 0; i <= hits.length; i++) {
          // put li in ul
          let li = document.createElement("li");
          ul.append(li);
          li.style.cssText = "margin-bottom: 10px";
          // put the title in the li
          let title = document.createElement("h5");
          li.append(title);
          title.innerHTML = data.hits[i].title;
          // put the links in the li
          let link = document.createElement("a");
          li.append(link);
          // become to link
          link.href = data.hits[i].url;
          link.style.cssText = "text-decoration: none; color:rgb(39, 27, 27);";
          link.innerHTML = data.hits[i].url;
        }
      });
  }
});
