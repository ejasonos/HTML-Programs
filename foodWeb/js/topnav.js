/* Top Navbar Script */
const homeItems = document.querySelector("#homeItems");
const menuItems = document.querySelector("#menuItems");
const blogItems = document.querySelector("#blogItems");
const contactItems = document.querySelector("#contactItems");
const body = document.querySelector("body");

const homeItemsWrap = document.querySelector("#homeItems-wrap");
const menuItemsWrap = document.querySelector("#menuItems-wrap");
const blogItemsWrap = document.querySelector("#blogItems-wrap");
const contactItemsWrap = document.querySelector("#contactItems-wrap");

const homeExpandIcon = document.querySelector("#home-expand-icon");
const menuExpandIcon = document.querySelector("#menu-expand-icon");
const blogExpandIcon = document.querySelector("#blog-expand-icon");
const contactExpandIcon = document.querySelector("#contact-expand-icon");

homeItemsWrap.addEventListener("click", function() {
    if (homeItems.className == "expand") {
        homeItems.className = "collapse";
        homeExpandIcon.textContent=" v";
    } else {
        homeItems.className = "expand";
        homeExpandIcon.textContent=" ^";
    }
}, false);
menuItemsWrap.addEventListener("click", function() {
    if (menuItems.className == "expand") {
        menuItems.className = "collapse";
        menuExpandIcon.textContent=" v";
    } else {
        menuItems.className = "expand";
        menuExpandIcon.textContent=" ^"
    }
}, false);
blogItemsWrap.addEventListener("click", function() {
    if (blogItems.className == "expand") {
        blogItems.className = "collapse";
        blogExpandIcon.textContent=" v";
    } else {
        blogItems.className = "expand";
        blogExpandIcon.textContent=" ^";
    }
}, false);
contactItemsWrap.addEventListener("click", function() {
    if (contactItems.className == "expand") {
        contactItems.className = "collapse";
        contactExpandIcon.textContent=" v";
    } else {
        contactItems.className = "expand";
        contactExpandIcon.textContent=" ^";
    }
}, false);

function expCol(el) {
    el.addEventListener("click", function() {
        if (el.childNodes.className == "collapse") {
            el.childNodes.className = "expand";
            el.childNodes.nextElementSibling.textContent = " ^";
        } else {
            el.childNodes.className = "collapse";
            el.childNodes.nextElementSibling.textContent=" v";
        }
    })
};

/* Light-Dark Mode code */
const selectMode = document.querySelector("#selectMode");
selectMode.onclick = ()=>{
  if (selectMode.textContent === "Light Mode") {
    localStorage.setItem("fw-mode", "dark");
    body.className = localStorage.getItem("fw-mode");
    selectMode.textContent = "Dark Mode";
  } else if (selectMode.textContent === "Dark Mode") {
    localStorage.setItem("fw-mode", "light");
    body.className = localStorage.getItem("fw-mode");
    selectMode.textContent = "Light Mode";
  }
};

if (localStorage.getItem("fw-mode") == "dark") {
    body.className = localStorage.getItem("fw-mode");
    selectMode.textContent = "Dark Mode";
} else if (localStorage.getItem("fw-mode") == "light") {
    body.className = localStorage.getItem("fw-mode");
    selectMode.textContent = "Light Mode";
}
