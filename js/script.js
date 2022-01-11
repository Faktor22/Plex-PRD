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


/*==========  LeftMenu extends  =========*/

class sideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="index.html"><img src="../img/logo.png" alt="Logo Plex" class="logo" /></a>
        <div class="navigation">
            <nav>
                <ul>
                    <li id="link">
                        <a href="contributors.html">
                            <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li id="link1" class="active">
                        <a href="index.html#intro">
                            <span class="icon"><ion-icon name="document-text-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li id="link2">
                        <a href="design.html">
                            <span class="icon"><ion-icon name="color-palette-outline"></ion-icon></span>
                            <span class="title"></span>
                        </a>
                    </li>
                    <li id="link3">
                        <a href="code.html">
                            <span class="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                        </a>
                    </li>
                    <li id="link4">
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


/*==========  LeftMenu active button  =========*/
var menuLinks = window.location.pathname.split('/')[1];
// console.log(menuLinks);

switch (menuLinks) {
    case 'index.html':
        document.getElementById("link1").classList.add("active");
        document.getElementById("link").classList.remove("active");
        break;
    case 'contributors.html':
        document.getElementById("link").classList.add("active");
        document.getElementById("link1").classList.remove("active");
        break;
    case 'design.html':
        document.getElementById("link2").classList.add("active");
        document.getElementById("link1").classList.remove("active");
        break;
    case 'code.html':
        document.getElementById("link3").classList.add("active");
        document.getElementById("link1").classList.remove("active");
        break;
    case 'scope.html':
        document.getElementById("link4").classList.add("active");
        document.getElementById("link1").classList.remove("active");
        break;
    default:
}