export function slideFromLeft(element, duration = 1000) {
    element.style.transform = "translateX(-100%)";
    element.style.transition = `transform ${duration}ms ease-in-out`;
    setTimeout(() => {
        element.style.transform = "translateX(0)";
    }, 10);
}

export function slideFromTop(element, duration = 1000) {
    element.style.transform = "translateY(-100%)";
    element.style.transition = `transform ${duration}ms ease-in-out`;
    setTimeout(() => {
        element.style.transform = "translateY(0)";
    }, 10);
}