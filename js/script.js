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

/*==========  LeftMenu active button  =========*/

let leftMenu = document.querySelectorAll(".navigation nav ul li");

leftMenu.forEach(li => {
    li.addEventListener("click", () => {
        leftMenu.forEach(li => li.classList.remove("active"))
        li.classList.add("active")
    })
})




class sideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="index.html"><img src="../img/logo.png" alt="Logo Plex" class="logo" /></a>
        <div class="navigation">
            <nav>
                <ul>
                    <li>
                        <a href="contributors.html">
                            <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="index.html#intro">
                            <span class="icon"><ion-icon name="document-text-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li>
                        <a href="design.html">
                            <span class="icon"><ion-icon name="color-palette-outline"></ion-icon></span>
                            <span class="title"></span>
                        </a>
                    </li>
                    <li>
                        <a href="code.html">
                            <span class="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li>
                        <a href="scope.html">
                            <span class="icon"><ion-icon name="grid-outline"></ion-icon></span>
                        </a>
                    </li>
                </ul>
                <p class="version">v.1.0</p>
            </nav>
        </div>
        `
    }
}

customElements.define('sidebar-menu', sideMenu)