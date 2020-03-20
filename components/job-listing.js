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

        let htmlText = `
            <p class="job-listing__role">${role}</p>
            <p class="job-listing__level">${level}</p>
        `;

        let languagesStr = this.getDataList(languages, "languages");
        if (languagesStr !== undefined) {
            htmlText += languagesStr;
        }

        let toolsStr = this.getDataList(tools, "tools");
        if (toolsStr !== undefined) {
            htmlText += languagesStr;
        }

        this.innerHTML = htmlText;
    }

    getDataList(arrString, className) {
        if (arrString !== "null") {
            let html = `<ul class="job-listing__${className}">`;
            let arr = arrString.split(",");

            arr.forEach(element => {
                html += `<li>${element}</li>`;
            });

            return (html += `</ul>`);
        }
    }
}

customElements.define("job-listing", JobListing);
