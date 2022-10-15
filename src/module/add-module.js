import { content } from "./first-load";

const addContainer = document.createElement("div");
const overlay = document.createElement("div");
const form = document.createElement("form");
const submit = document.createElement("button");
const inputTittle = document.createElement("input");
const inputDate = document.createElement("input");
const inputDesc = document.createElement("textarea");


export function addModule() {
    // create obj
    const tittle = document.createElement("div");
    const labelTittle = document.createElement("label");
    const date = document.createElement("div");
    const labelDate = document.createElement("label");
    const description = document.createElement("div");
    const labelDesc = document.createElement("label");
    const btnSubmit = document.createElement("div");
    submit.textContent = "Add";
    labelTittle.textContent = "Tittle :";
    inputTittle.minLength = "3";
    inputTittle.maxLength = "20";
    inputTittle.required = true;
    inputTittle.type = "text";
    inputDate.type = "date";
    inputDate.required = true;
    labelDate.textContent = "Date :";
    inputDesc.required = true;
    inputDesc.minLength = "2";
    inputDesc.maxLength = "100";
    labelDesc.textContent = "Description :";

    // add classes
    addContainer.classList.add("add-container");
    overlay.classList.add("overlay");
    form.classList.add("form-add");
    tittle.classList.add("tittle-container");
    labelTittle.classList.add("label");
    inputTittle.classList.add("input");
    date.classList.add("date-container");
    labelDate.classList.add("label");
    inputDate.classList.add("input");
    description.classList.add("description-container");
    labelDesc.classList.add("label");
    inputDesc.classList.add("textarea");
    btnSubmit.classList.add("btn-submit-container");
    submit.classList.add("submit-add");

    // append
    content.insertAdjacentElement("beforeend", addContainer);
    content.insertAdjacentElement("beforeend", overlay);
    addContainer.insertAdjacentElement("beforeend", form);
    form.insertAdjacentElement("beforeend", tittle);
    form.insertAdjacentElement("beforeend", description);
    form.insertAdjacentElement("beforeend", date);
    form.insertAdjacentElement("beforeend", btnSubmit);
    tittle.insertAdjacentElement("beforeend", labelTittle);
    tittle.insertAdjacentElement("beforeend", inputTittle);
    description.insertAdjacentElement("beforeend", labelDesc);
    description.insertAdjacentElement("beforeend", inputDesc);
    date.insertAdjacentElement("beforeend", labelDate);
    date.insertAdjacentElement("beforeend", inputDate);
    btnSubmit.insertAdjacentElement("beforeend", submit);

    // events
    overlay.addEventListener("click", e => {
        addContainer.classList.remove("active-add");
        overlay.classList.remove("active-overlay");
        form.classList.remove("form-active");
    })
}

export {addContainer, overlay, form, submit, inputTittle, inputDesc, inputDate};