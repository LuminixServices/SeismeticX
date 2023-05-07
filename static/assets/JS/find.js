function search_item() {
    let input = document.getElementById("searchbar").value.toLowerCase();
    let x = document.getElementsByClassName("gamebox");
    let visibleCount = 0;
    for (i = 0; i < x.length; i++) {
      if (input === "") {
        x[i].style.visibility = "visible";
        x[i].style.position = "initial";
        visibleCount++;
      } else if (x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.visibility = "visible";
        x[i].style.position = "absolute";
        x[i].style.top = document.getElementById("searchbar").offsetTop + 50 + "px";
        x[i].style.left = visibleCount * 500 + "px";
        visibleCount++;
      } else {
        x[i].style.visibility = "hidden";
      }
    }
    document.body.style.overflow = input !== "" ? "hidden" : "auto";
  }
  