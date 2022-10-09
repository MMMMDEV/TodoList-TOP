const content = document.querySelector("#content");

export function firstLoad() {
    // creating objects
    const sideHeader = document.createElement("div");
    const main = document.createElement("div");

    // adding classes
    sideHeader.classList.add("side-header");
    main.classList.add("main");

    // appending
    content.insertAdjacentElement("beforeend", sideHeader);
    content.insertAdjacentElement("beforeend", main);
}