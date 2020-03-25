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
        let jobObj = LISTING.getJobs().find(job => job.id === id);

        let logo = this.getCompanyLogo(jobObj.company);
        let isNewText = jobObj.isNew
            ? `<span class='job-listing__badge job-listing__badge--new'>New!</span>`
            : ``;
        let isFeaturedText = jobObj.isFeatured
            ? `<span class='job-listing__badge job-listing__badge--featured'>Featured</span>`
            : ``;

        // Top text = Company, new badge, featured badge
        let topText = `
            <span class='job-listing__company'>${jobObj.company}</span>
            ${isNewText}
            ${isFeaturedText}
        `;

        // Company logo, title, info
        let htmlText = `
            <img class="job-listing__logo" width="88" height="88" ${logo} />
            <p class="job-listing__top">${topText}</p>
            <p class="job-listing__title"><a href="#">${jobObj.title}</a></p>
            <p class="job-listing__info">${jobObj.time} - ${jobObj.shift} - ${jobObj.location}</p>
        `;

        // Tablets
        let categories = this.createCategoriesArr(
            role,
            level,
            languages,
            tools
        );
        htmlText += categories;

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
        let htmlText = `<ul class="tablet-list">`;
        const liClass = `tablet-list__li tablet-list__li--job`;
        const tabletClass = `tablet-list__tablet tablet-list__tablet--job`;

        htmlText += `<li class="${liClass}">
            <button 
                class="${tabletClass}" 
                onclick="createFilter('role', '${role}')"
                >${role}</button>
            </li>`;
        htmlText += `<li class="${liClass}">
            <button 
                class="${tabletClass}" 
                onclick="createFilter('level', '${level}')"
            >${level}</button>
        </li>`;

        if (languages !== null) {
            languages.forEach(element => {
                htmlText += `<li class="${liClass}">
                    <button 
                        class="${tabletClass}"
                        onclick="createFilter('languages', '${element}')"
                    >${element}</button>
                </li>`;
            });
        }
        if (tools !== null) {
            tools.forEach(element => {
                htmlText += `<li class="${liClass}">
                    <button 
                        class="${tabletClass}"
                        onclick="createFilter('tools', '${element}')"
                    >${element}</button>
                </li>`;
            });
        }

        htmlText += `</ul>`;

        return htmlText;
    }

    /**
     * Returns the path to the logo image of the company.
     * @param {String} name Name of company
     * @returns             File path and alt text of company logo
     */
    getCompanyLogo(name) {
        let html = ``;

        const list = [
            { company: "Account", logo: "account.svg" },
            { company: "Eyecam Co.", logo: "eyecam-co.svg" },
            { company: "FaceIt", logo: "faceit.svg" },
            { company: "Insure", logo: "insure.svg" },
            { company: "Loop Studios", logo: "loop-studios.svg" },
            { company: "Manage", logo: "manage.svg" },
            { company: "MyHome", logo: "myhome.svg" },
            { company: "Photosnap", logo: "photosnap.svg" },
            { company: "Shortly", logo: "shortly.svg" },
            {
                company: "The Air Filter Company",
                logo: "the-air-filter-company.svg"
            }
        ];
        let companyObj = list.find(company => company.company === name);

        html += `src="./images/${companyObj.logo}" 
            alt="${companyObj.company} logo"`;

        return html;
    }
}

customElements.define("job-listing", JobListing);
