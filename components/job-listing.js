"use strict";

class JobListing extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let id = this.getAttribute("id").split("-")[1];
        id = Number(id);
        let role = [this.dataset.role];
        let level = [this.dataset.level];
        let languages =
            this.dataset.languages === "null"
                ? null
                : this.dataset.languages.split(",");
        let tools =
            this.dataset.tools === "null"
                ? null
                : this.dataset.tools.split(",");
        let jobObj = JOBS.getJobs().find(job => job.id === id);

        let logoPath = this.getCompanyLogoPath(jobObj.company);
        let isNewText = jobObj.isNew
            ? `<span class='job-listing__new'>New!</span>`
            : ``;
        let isFeaturedText = jobObj.isFeatured
            ? `<span class='job-listing__featured'>Featured</span>`
            : ``;

        let topText = `
            <span class='job-listing__company'>${jobObj.company}</span>
            ${isNewText}
            ${isFeaturedText}
        `;

        let htmlText = `
            <img class="job-listing__logo" width="88" height="88" src="${logoPath}" />
            <p class="job-listing__top">${topText}</p>
            <p class="job-listing__title">${jobObj.title}</p>
            <p class="job-listing__info">${jobObj.time} - ${jobObj.shift} - ${jobObj.location}</p>
            <ul class="job-listing__categories-list">
        `;

        let categories = this.createCategoriesArr(
            role,
            level,
            languages,
            tools
        );
        categories.forEach(element => {
            htmlText += `<li>${element}</li>`;
        });

        htmlText += `</ul>`;

        this.innerHTML = htmlText;
    }

    /**
     * Concatenates role, level, languages, and tools arrays into one
     * categories array. Checks if languages or tools are null.
     * @param {Array} role      Role array
     * @param {Array} level     Level array
     * @param {Array} languages Languages array
     * @param {Array} tools     Tools array
     * @returns                 Concatenated array
     */
    createCategoriesArr(role, level, languages, tools) {
        let arr = role.concat(level);
        if (languages !== null) {
            arr = arr.concat(languages);
        }
        if (tools !== null) {
            arr = arr.concat(tools);
        }

        return arr;
    }

    /**
     * Returns the path to the logo image of the company.
     * @param {String} name Name of company
     * @returns             Path to company logo image file
     */
    getCompanyLogoPath(name) {
        let pathFolder = "../images/";
        let list = [
            { company: "Account", logo: pathFolder + "account.svg" },
            { company: "Eyecam Co.", logo: pathFolder + "eyecam-co.svg" },
            { company: "FaceIt", logo: pathFolder + "faceit.svg" },
            { company: "Insure", logo: pathFolder + "insure.svg" },
            { company: "Loop Studios", logo: pathFolder + "loop-studios.svg" },
            { company: "Manage", logo: pathFolder + "manage.svg" },
            { company: "MyHome", logo: pathFolder + "myhome.svg" },
            { company: "Photosnap", logo: pathFolder + "photosnap.svg" },
            { company: "Shortly", logo: pathFolder + "shortly.svg" },
            {
                company: "The Air Filter Company",
                logo: pathFolder + "the-air-filter-company.svg"
            }
        ];
        let companyObj = list.find(company => company.company === name);

        return companyObj.logo;
    }
}

customElements.define("job-listing", JobListing);
