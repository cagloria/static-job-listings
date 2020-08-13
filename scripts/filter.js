var FILTERS = (function () {
    var filters = [];

    return {
        /**
         * Checks if the category is already a filter.
         * @param {String}  newCategory
         * @returns         If category is a new filter
         */
        isNewFilter: function (newCategory) {
            let newItem = true;
            filters.forEach((element) => {
                if (element.category === newCategory) {
                    newItem = false;
                }
            });
            return newItem;
        },

        /**
         * Adds a category to FILTERS.filters.
         * @param {String} category
         */
        addFilterObj: function (dataset, category) {
            filters.push({ dataset: dataset, category: category });
        },

        /**
         * Removes a category from FILTERS.filters.
         * @param {String} removedCategory  Category to remove
         */
        removeFilterObj: function (removedCategory) {
            filters = filters.filter(
                (element) => element.category !== removedCategory
            );
        },

        /**
         * @returns FILTERS.filters, the list of current filters
         */
        getFilters: function () {
            return filters;
        },
    };
})();

/**
 * Adds new filter to FILTERS.filters and creates a filter button.
 * @param {String} dataset  Data set the category belongs to
 * @param {String} category Category, chosen from the button in the container
 */
function createFilter(dataset, category) {
    if (FILTERS.isNewFilter(category)) {
        let $filterContainer = $("#filter-list");

        // Adds category to FILTERS.filters
        FILTERS.addFilterObj(dataset, category);

        // Creates a button of that category and places it in #filter-list
        $filterContainer.append(`<filter-button data-category=${category} />`);

        updateJobListingDisplay();
    }
}

/**
 * Deletes the filter in FILTERS.filters and deletes the corresponding button.
 * @param {String} category Category of the filter
 */
function deleteFilter(category) {
    FILTERS.removeFilterObj(category);
    $(`filter-button[data-category=${category}]`).remove();
    updateJobListingDisplay();
}

/**
 * Clear all filters from FILTERS.filters and their corresponding buttons.
 */
function clearFilters() {
    let filtersArr = FILTERS.getFilters();

    filtersArr.forEach((element) => {
        deleteFilter(element.category);
    });
}

/**
 * Updates #clear-button and #filter-container to display only if
 * FILTERS.filters.length > 1.
 */
function updateFilterDisplay() {
    let $clearButton = $("#clear-button");
    let $filterContainer = $("#filter-container");

    if (FILTERS.getFilters().length < 1) {
        $clearButton.css("display", "none");
        $filterContainer.removeClass("filter-container--visible");
    } else {
        $clearButton.css("display", "block");
        $filterContainer.addClass("filter-container--visible");
    }
}
