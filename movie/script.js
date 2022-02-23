async function myweb() {
  let search = document.getElementById("search").value;
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=f3d5c71f&s=${search}`
    );
    let data = await res.json();
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// expected output: 1500

myweb();

function appendData(data) {
  let main = document.getElementById("main");
  main.innerHTML = null;
  console.log("mydata", data);
  data.Search.forEach(function (el) {
    let box = document.createElement("div");
    box.setAttribute("id", "box");
    let poster = document.createElement("img");
    poster.src = ` ${el.Poster}`;
    let title = document.createElement("p");
    title.innerText = `Title${el.Title}`;
    let type = document.createElement("p");
    type.innerText = `Type: ${el.Type}`;
    let year = document.createElement("p");
    year.innerText = `Release Year-${el.Year}`;
    let rating = document.createElement("p");
    rating.textContent = "💙💛💜❤🤎";

    box.append(poster, title, type, year, rating);
    main.append(box);
  });
}
