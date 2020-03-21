"use strict";

class JobListing extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let id = this.getAttribute("id").split("-")[1];
        id = Number(id);
        let role = this.getAttribute("data-role");
        let level = this.getAttribute("data-level");
        let languages = this.getAttribute("data-languages");
        let tools = this.getAttribute("data-tools");

        let jobObj = JOBS.returnJobs().find(job => job.id === id);

        let htmlText = `
            <p>${jobObj.company}</p>
            <p>${jobObj.title}</p>
            <p>${jobObj.time} - ${jobObj.shift} - ${jobObj.location}</p>
            <ul>
                <li>${role}</li>
                <li>${level}</li>
        `;

        // TODO: Return is new/featured

        let languagesStr = this.getDataList(languages, "languages");
        if (languagesStr !== undefined) {
            htmlText += languagesStr;
        }

        let toolsStr = this.getDataList(tools, "tools");
        if (toolsStr !== undefined) {
            htmlText += toolsStr;
        }

        this.innerHTML = htmlText + "</ul>";
    }

    getDataList(arrString, className) {
        if (arrString !== "null") {
            let html = ``;
            let arr = arrString.split(",");

            arr.forEach(element => {
                html += `<li>${element}</li>`;
            });

            return html;
        }
    }
}

customElements.define("job-listing", JobListing);
