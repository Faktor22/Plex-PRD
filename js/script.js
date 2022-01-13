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


/*==========  LeftMenu extends  =========*/

class sideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="index.html">
            <object data="/img/logo-plex-prd.svg" type="image/svg+xml" alt="Logo Plex" class="logo">
                <img src="/img/logo-plex-prd.svg" />
            </object>
        </a>
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

/*==========  Scroll to Top  =========*/
const toTopButton = document.getElementById("toTop");

toTopButton.addEventListener("click", function() {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

    console.log(toTopButton)
})



// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         toTopButton.style.display = "block";
//     } else {
//         toTopButton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }