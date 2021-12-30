/*==========  Progress indicator  =========*/

window.onscroll = function() { scrollIndicator() };

function scrollIndicator() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 80;
    document.getElementById("progress-indicator").style.width = scrolled + "%";

    console.log(scrolled);
}


/*==========  Topbar active button  =========*/

let topBar = document.querySelectorAll(".topbar nav li a");

topBar.forEach(a => {
    a.addEventListener("click", () => {
        topBar.forEach(a => a.classList.remove("active-topbar"))
        a.classList.add("active-topbar")
    })
})

/*==========  Topbar active button  =========*/

// let topbar = document.querySelectorAll(".topbar nav li a");

// topbar.forEach(a => {
//     a.addEventListener("click", () => {
//         resetLinks();
//         a.classList.add("active-topbar")
//     })
// })

// function resetLinks() {
//     topbar.forEach(a => {
//         a.classList.remove("active-topbar")
//     })
// }