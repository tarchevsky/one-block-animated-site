const cursor = document.querySelector(".custom-cursor"),
    slidesBg = document.querySelector(".slides-bg"),
    links = document.querySelectorAll("a");

function moveMouse(e) {
    if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
        cursor.style.opacity = "0";
    } else {
        cursor.style.opacity = "1";
        cursor.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 30}px)`;
    }
}

if (window.innerWidth >= 768) {
    document.addEventListener("mousemove", moveMouse);

    slidesBg.addEventListener("mouseover", () => {
        document.querySelector(".custom-cursor__view").style.opacity = "1";
    });
    slidesBg.addEventListener("mouseleave", () => {
        document.querySelector(".custom-cursor__view").style.opacity = "";
    });

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            document.querySelector(".custom-cursor__view").style.opacity = "1";
        });
    });
    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            document.querySelector(".custom-cursor__view").style.opacity = "0";
        });
    });
}