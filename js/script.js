// Get the container element
var navContainer = document.getElementById("navigation");

// Get all links with class="links" inside the container
var links = navContainer.getElementsByClassName("links");

// Loop through the links and add the active class to the current/clicked links
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}