"use strict";

class JobListing extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let role = this.getAttribute("data-role");
        let level = this.getAttribute("data-level");
        let languages = this.getAttribute("data-languages");
        let tools = this.getAttribute("data-tools");

        this.innerHTML = `
            <p class="job-listing__role">${role}</p>
            <p class="job-listing__level">${level}</p>
            <ul class="job-listing__languages">
                ${this.getDataList(languages)}
            </ul>
            <ul class="job-listing__tools">
                ${this.getDataList(tools)}
            </ul>
        `;
    }

    getDataList(arrString) {
        let html = "";
        let arr = arrString.split(",");

        arr.forEach(element => {
            html += `<li>${element}</li>`;
        });

        return html;
    }
}

customElements.define("job-listing", JobListing);
