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

        let topText = `
            ${jobObj.company}
            ${jobObj.isNew ? " New!" : ""}
            ${jobObj.isFeatured ? " Featured" : ""}
        `;

        let logoPath = this.getCompanyLogo(jobObj.company);

        let htmlText = `
            <img width="88" height="88" src="${logoPath}" />
            <p>${topText}</p>
            <p>${jobObj.title}</p>
            <p>${jobObj.time} - ${jobObj.shift} - ${jobObj.location}</p>
            <ul>
                <li>${role}</li>
                <li>${level}</li>
        `;

        let languagesStr = this.getDataList(languages, "languages");
        let toolsStr = this.getDataList(tools, "tools");
        
        htmlText += languagesStr === undefined ? "" : languagesStr;
        htmlText += toolsStr === undefined ? "" : toolsStr;

        this.innerHTML = htmlText + "</ul>";
    }

    getDataList(arrString) {
        if (arrString !== "null") {
            let html = ``;
            let arr = arrString.split(",");

            arr.forEach(element => {
                html += `<li>${element}</li>`;
            });

            return html;
        }
    }

    getCompanyLogo(name) {
        let list = [
            { company: "Account", logo: "../images/account.svg" },
            { company: "Eyecam Co.", logo: "../images/eyecam-co.svg" },
            { company: "FaceIt", logo: "../images/faceit.svg" },
            { company: "Insure", logo: "../images/insure.svg" },
            { company: "Loop Studios", logo: "../images/loop-studios.svg" },
            { company: "Manage", logo: "../images/manage.svg" },
            { company: "MyHome", logo: "../images/myhome.svg" },
            { company: "Photosnap", logo: "../images/photosnap.svg" },
            { company: "Shortly", logo: "../images/shortly.svg" },
            {
                company: "The Air Filter Company",
                logo: "../images/the-air-filter-company.svg"
            }
        ];
        let companyObj = list.find(company => company.company === name);

        return companyObj.logo;
    }
}

customElements.define("job-listing", JobListing);
