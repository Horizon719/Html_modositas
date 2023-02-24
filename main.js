window.addEventListener("load", init);

function init() {
  const tartalom = document.getElementById("tartalom");
  const tartalomMaskepp = document.querySelector("#tartalom");
  const tartalomMaskepp2 = document.querySelector(".tart");
  const tartalomMaskepp3 = document.getElementsByClassName("tart");
  const tartalomElemEz = document.querySelectorAll(".tart");
  console.log(tartalomElemEz);
  //tartalomElemEz[1].innerHTML="<p>valami</p>"
  let lista = ["palacsinta", "milánói", "almás pite"];
  listaki(lista);
  
  displayFoodImages();
}

function listaki(lista) {
  tartalom.innerHTML += "<ul>";
  const ulelem = document.querySelectorAll("#tartalom>ul")[0];

  for (let i = 0; i < lista.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(lista[i]));
    ulelem.appendChild(li);
  }
}

function displayFoodImages() {
    const foodImages = [
      "kepek/01.jpg",
      "kepek/02.jpg",
      "kepek/03.jpg",
      ];
  
    const article = document.createElement("article");
  
    for(let i = 0; i < foodImages.length; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = foodImages[i];
      div.appendChild(img);
      article.appendChild(div);
    };
  
    document.body.appendChild(article);
  }
