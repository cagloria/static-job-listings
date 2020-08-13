class JobListing extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let id = this.getAttribute("id").split("-")[1];
        id = Number(id);
        const role = [this.dataset.role];
        const level = [this.dataset.level];
        const languages = this.splitList(this.dataset.languages);
        const tools = this.splitList(this.dataset.tools);
        const jobObj = LISTING.getJobs().find((job) => job.id === id);

        // Logo
        const logoAttr = this.getCompanyLogoAttr(jobObj.company);

        // Badges
        const badgesClasses = "job-listing__badge job-listing__badge";
        const isNewBadge = jobObj.isNew
            ? `<span class="${badgesClasses}--new">New!</span>`
            : ``;
        const isFeaturedBadge = jobObj.isFeatured
            ? `<span class="${badgesClasses}--featured">Featured</span>`
            : ``;

        // Tablets
        const categories = this.createCategoriesArr(
            role,
            level,
            languages,
            tools
        );

        this.innerHTML = `
            <img class="job-listing__logo" ${logoAttr} />
            <p class="job-listing__top">
                <span class='job-listing__company'>${jobObj.company}</span>
                ${isNewBadge}
                ${isFeaturedBadge}
            </p>
            <p class="job-listing__title"><a href="#">${jobObj.title}</a></p>
            <p class="job-listing__info">
                ${jobObj.time} • ${jobObj.shift} • ${jobObj.location}
            </p>
            ${categories}
        `;
    }

    /**
     * Splits a list by comma or returns null.
     * @param {String} listStr  List in string from, separated by commas
     * @returns                 An array or null
     */
    splitList(listStr) {
        return listStr === "null" ? null : listStr.split(",");
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
            languages.forEach((element) => {
                htmlText += `<li class="${liClass}">
                    <button 
                        class="${tabletClass}"
                        onclick="createFilter('languages', '${element}')"
                    >${element}</button>
                </li>`;
            });
        }
        if (tools !== null) {
            tools.forEach((element) => {
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
     * Returns src and alt attributes of the logo.
     * @param {String} name Name of company
     * @returns             src and alt attributes of company logo
     */
    getCompanyLogoAttr(name) {
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
                logo: "the-air-filter-company.svg",
            },
        ];
        let companyObj = list.find((company) => company.company === name);

        html += `src="./images/${companyObj.logo}" 
            alt="${companyObj.company} logo"`;

        return html;
    }
}

customElements.define("job-listing", JobListing);
