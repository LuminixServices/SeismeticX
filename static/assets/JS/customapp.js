// Function to add a new app
function addApp() {
    var appName = prompt("Enter the name of the app:");
    var appLink = prompt("Enter the link of the app:");
    var appImgSrc = prompt("Enter the image source of the app:");
    
    // Create a new app object
    var app = {
      name: appName,
      link: appLink,
      imgSrc: appImgSrc
    };
  
    // Get the existing apps from local storage
    var apps = JSON.parse(localStorage.getItem("apps")) || [];
  
    // Add the new app to the array
    apps.push(app);
  
    // Save the updated array of apps to local storage
    localStorage.setItem("apps", JSON.stringify(apps));
  
    // Refresh the app container to display the new app
    window.location.reload();
  }
  
  // Function to retrieve the apps from local storage and display them in the app container
  function refreshAppContainer() {
    var appContainer = document.getElementById("app-container");
    // Get the apps from local storage
    var apps = JSON.parse(localStorage.getItem("apps")) || [];
  
    // Loop through the apps and create a gamebox element for each app
    for (var i = 0; i < apps.length; i++) {
      var app = apps[i];
      var gamebox = document.createElement("div");
      gamebox.classList.add("gamebox");
      gamebox.innerHTML = `
        <div class="gamebox__image">
          <img src="${app.imgSrc}" alt="${app.name}">
        </div>
        <div class="gamebox__content">
          <div class="gamebox__title">${app.name}</div>
          <button class="gamebox__button" onclick="openWindow('${app.link}')">Launch</button>
        </div>
      `;
      appContainer.appendChild(gamebox);
    }
  
    // Add the "Add App" gamebox element
    var addAppGamebox = document.createElement("div");
    addAppGamebox.classList.add("gamebox");
    addAppGamebox.id = "add-app";
    addAppGamebox.innerHTML = `
      <div class="gamebox__image">
        <img src="./assets/img/addicon.png" alt="GameImage">
      </div>
      <div class="gamebox__content">
        <div class="gamebox__title">Add App</div>
        <button class="gamebox__button" onclick="addApp()">Launch</button>
      </div>
    `;
  }
  
  function clearApps() {
    window.location.reload()
    localStorage.clear();
  }
    