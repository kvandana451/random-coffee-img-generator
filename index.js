fetch("https://coffee.alexflipnote.dev/random.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
