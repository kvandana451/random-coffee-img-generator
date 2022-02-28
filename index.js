const imgContainer = document.getElementById("image-container");

fetch("https://coffee.alexflipnote.dev/random.json")
  .then((response) => response.json())
  .then((data) => {
    displayImage(data);
  });

function createElements(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.style.width = "600px";
  img.style.height = "500px";
  imgContainer.appendChild(img);
}

function displayImage(data) {
  const image = data.file;
  createElements(image);
}
