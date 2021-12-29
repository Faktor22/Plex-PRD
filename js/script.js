// topbar active button
let topBar = document.querySelectorAll(".topbar nav li a");

topBar.forEach(a => {
    a.addEventListener("click", () => {
        topBar.forEach(a => a.classList.remove("active-topbar"))
        a.classList.add("active-topbar")
    })
})



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