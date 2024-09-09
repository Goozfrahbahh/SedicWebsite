
export function toggleNavigation(menuIcon, navMenu, closeIcon) {
        menuIcon.addEventListener("click", () => {
                menuIcon.classList.toggle("hide-page");
                navMenu.classList.toggle("hide-page");
                closeIcon.classList.toggle("hide-page");
        })

        closeIcon.addEventListener("click", () => {
                menuIcon.classList.toggle("hide-page");
                navMenu.classList.toggle("hide-page");
                closeIcon.classList.toggle("hide-page");
        })
}
/**
 * Generic function to handle page visibility toggling.
 * @param {HTMLElement[]} pagesToHide - An array of elements to hide.
 * @param {HTMLElement} pageToShow - The element to show.
 * @param {HTMLElement} imageElement - The image element to toggle visibility.
 * @param {boolean} hideImage - Whether to hide or show the image element.
 */
function router(pagesToHide, pageToShow, imagesToHide, imageToShow, menuIcon, navMenu, closeIcon) {
        pagesToHide.forEach(page => page.classList.add("hide-page"));
        imagesToHide.forEach(image => image.classList.add("hide-page"));
        pageToShow.classList.remove("hide-page");
        imageToShow.classList.remove("hide-page");

        menuIcon.classList.remove("hide-page");
        navMenu.classList.add("hide-page");
        closeIcon.classList.add("hide-page");
}

export function setupRoutes(routesConfig, menuIcon, navMenu, closeIcon) {
        routesConfig.forEach(({ triggerElement, pagesToHide, pageToShow, imagesToHide, imageToShow }) => {
                triggerElement.addEventListener("click", () => {
                        router(pagesToHide, pageToShow, imagesToHide, imageToShow, menuIcon, navMenu, closeIcon);
                });
        });

} 


/**
 * Task close menu navigation on Select route
 * 1. function toggleNavigation(menuIcon, navMenu, closeIcon)
 * 2. close the navigation menu and reset the menu icon
 */

