const burger = document.querySelector(".burger"),
    headerMenu = document.querySelector(".header-menu"),
    burgerInner = burger.querySelector(".burger__inner"),
    menuItem = document.querySelectorAll(".header-menu__item");
    // dropDown = document.querySelector(".dropdown"),
    // dropItems = document.querySelector(".dropdown__items"),
    // dropItem = document.querySelectorAll(".dropdown__item");

function overflowMenu () {
    if (burgerInner.classList.contains("burger__inner--active")) {
        document.body.style.overflow = "hidden";
        document.querySelector(".content").style.zIndex = "0";
        document.querySelectorAll(".burger__inner div").forEach(el => {
            el.style.backgroundColor = "#fff";
        });
    } else {
        document.body.style.overflow = "";
        document.querySelector(".content").style.zIndex = "";
        document.querySelectorAll(".burger__inner div").forEach(el => {
            el.style.backgroundColor = "";
        });
    }
}

function removeMenuActive() {
    burgerInner.classList.remove("burger__inner--active");
    headerMenu.classList.remove("header-menu--active");
    overflowMenu();
}

burger.addEventListener("click", () => {
    headerMenu.classList.toggle("header-menu--active");
    burgerInner.classList.toggle("burger__inner--active");
    // dropDown.classList.add("dropdown-burger");
    overflowMenu();
});

document.addEventListener("keydown", (event) => {
    if(event.code === "Escape" && burgerInner.classList.contains("burger__inner--active")) {
        removeMenuActive();
    }
});


menuItem.forEach((item, i) => {
    item.addEventListener("click", () => {
        if (! menuItem[i].querySelector(".dropdown")) {
            removeMenuActive();
        }
    });
});

// function dropdownInBurger(dropdownItem, dropDownItems) {
//     dropdownItem.forEach((item) => {
//         item.addEventListener("click", () => {
//             removeMenuActive();
//             dropDownItems.style.display = "none";
//         });
//     });
// }
//
// dropdownInBurger(dropItem, dropItems);

