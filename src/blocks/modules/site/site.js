import gsap from "gsap";
import BezierEasing from "bezier-easing";
import SwipedEvents from "swiped-events";

const bgItems = document.querySelectorAll(".slides-bg__link"),
    imageSlides = document.querySelectorAll(".slides-bt__inner"),
    shapes = document.querySelectorAll(".slides-shapes__content"),
    shapeSlides = document.querySelectorAll(".slides-shapes__item"),
    helperInput = document.querySelector("#helper-input"),
    mainSection = document.querySelector(".main-section");

const slidesCount = 5;
let slidesCounter = 1;

const easing = BezierEasing(0.77, 0.125, 0.265, 1.04);

const startComplete = () => {
    imageSlides.forEach(el => {
        el.style.opacity = 1;
    });
    shapeSlides.forEach(el => {
        el.style.opacity = 1;
    });
};

const startInTl = gsap.timeline({ defaults: { easing }, onComplete: startComplete });

shapes.forEach(el => {
    el.style.backgroundColor = `${el.dataset.bg}`;
});
bgItems.forEach(el => {
    el.style.backgroundImage = `url(${el.dataset.bg})`;
});

// Логика слайдера

const init = () => {
    const showNextSlide = () => {
        bgSlides("down");
        console.log("Next");
    };
    const showPrevSlide = () => {
        bgSlides("up");
        console.log("Prev");
    };
    
    if (window.innerWidth >= 768) {
        window.addEventListener("wheel", (e) => {
            // Переменная для определения направления скролла
            // часто используют  delta
            let delta = -e.deltaY;

            if (delta > 0) {
                if (helperInput.value === "1") {
                    console.log("Scroll up");
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            } else {
                if (helperInput.value === "1") {
                    console.log("Scroll down");
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            }
        });
    } else {
        document.addEventListener("swiped-left", () => {
            showNextSlide();
        });
        document.addEventListener("swiped-right", () => {
            showPrevSlide();
        });
    }
};
init();

const bgSlides = (direction) => {
    let itemClass = `slides-slide__${slidesCounter}`;
    if (direction === "down") {
        if (slidesCounter < slidesCount) {
            mainSection.classList.remove(itemClass);
            slidesCounter++;

            itemClass = `slides-slide__${slidesCounter}`;
            mainSection.classList.add(itemClass);
        }
    } else if (direction === "up") {
        if (slidesCounter > 1) {
            mainSection.classList.remove(itemClass);
            slidesCounter--;

            itemClass = `slides-slide__${slidesCounter}`;
            mainSection.classList.add(itemClass);
        }
    }
}