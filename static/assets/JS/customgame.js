// Function to add a new game
function addGame() {
  var gameName = prompt("Enter the name of the game:");
  var gameLink = prompt("Enter the link of the game:");
  var gameImgSrc = prompt("Enter the image source of the game:");

  // Create a new game object
  var game = {
    name: gameName,
    link: gameLink,
    imgSrc: gameImgSrc
  };

  // Get the existing games from local storage
  var games = JSON.parse(localStorage.getItem("games")) || [];

  // Add the new game to the array
  games.push(game);

  // Save the updated array of games to local storage
  localStorage.setItem("games", JSON.stringify(games));

  // Refresh the game container to display the new game
  window.location.reload();
}

// Function to retrieve the games from local storage and display them in the game container
function refreshGameContainer() {
  var gameContainer = document.getElementById("game-container");
  // Get the games from local storage
  var games = JSON.parse(localStorage.getItem("games")) || [];

  // Loop through the games and create a gamebox element for each game
  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var gamebox = document.createElement("div");
    gamebox.classList.add("gamebox");
    gamebox.innerHTML = `
      <div class="gamebox__image">
        <img src="${game.imgSrc}" alt="${game.name}">
      </div>
      <div class="gamebox__content">
        <div class="gamebox__title">${game.name}</div>
        <button class="gamebox__button" onclick="openWindow('${game.link}')">Launch</button>
      </div>
    `;
    gameContainer.appendChild(gamebox);
  }}

function clearGames() {
  localStorage.clear();
  window.location.reload()
}
