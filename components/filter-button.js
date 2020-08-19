class FilterButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const category = this.dataset.category;
        const functionName = this.dataset.function;

        this.innerHTML = `
            <li class="tablet-li">
                <span class="tablet">${category}</span>
                <button 
                    class="delete-filter-button"
                    onclick="${functionName}('${category}')"
                    aria-label="Delete ${category} filter">
                <img src="./images/icon-remove.svg" aria-hidden="true"></button>
            </li>`;
    }
}

customElements.define("filter-button", FilterButton);
