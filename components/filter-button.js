class FilterButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const category = this.dataset.category;
        const functionName = this.dataset.function;
        const liClasses = "tablet-list__li tablet-list__li--filter";
        const spanClasses = "tablet-list__tablet tablet-list__tablet--filter";

        this.innerHTML = `
            <li class=${liClasses}>
                <span class=${spanClasses}>${category}</span>
                <button 
                    class="delete-filter-button"
                    onclick="${functionName}('${category}')">
                <img src="./images/icon-remove.svg"></button>
            </li>`;
    }
}

customElements.define("filter-button", FilterButton);
