var FILTERS = (function () {
    var filters = [];

    return {
        /**
         * Checks if the category is already a filter.
         * @param {String}  newCategory
         * @returns         If category is a new filter
         */
        isNewFilter: function (newCategory) {
            let isNew = !filters.some((item) => item.category === newCategory);
            return isNew;
        },

        /**
         * Adds a category to filters.
         * @param {String} category
         */
        addFilterObj: function (dataset, category) {
            filters.push({ dataset: dataset, category: category });
        },

        /**
         * Removes a category from filters.
         * @param {String} removedCategory  Category to remove
         */
        removeFilterObj: function (removedCategory) {
            filters = filters.filter(
                (element) => element.category !== removedCategory
            );
        },

        /**
         * @returns The list of current filters
         */
        getFilters: function () {
            return filters;
        },
    };
})();

/**
 * Adds new filter and creates its corresponding button.
 * @param {String} dataset  Data set the category belongs to (role, level,
 * languages, tools)
 * @param {String} category Category, passed from the job listing's button
 */
function createFilter(dataset, category) {
    if (FILTERS.isNewFilter(category)) {
        let $filterList = $("#filter-list");

        // Adds category to filters
        FILTERS.addFilterObj(dataset, category);

        // Creates a button of that category
        $filterList.append(
            `<filter-button data-category=${category}
                data-function=${deleteFilter.name} />`
        );

        updateJobListingDisplay();
    }
}

/**
 * Deletes the filter in filters and its corresponding button.
 * @param {String} category Category of the filter
 */
function deleteFilter(category) {
    FILTERS.removeFilterObj(category);
    $(`filter-button[data-category=${category}]`).remove();
    updateJobListingDisplay();
}

/**
 * Clear all filters and their corresponding buttons.
 */
function clearFilters() {
    let filtersArr = FILTERS.getFilters();

    filtersArr.forEach((element) => {
        deleteFilter(element.category);
    });
}

/**
 * Updates display of filter container.
 */
function updateFilterDisplay() {
    let $filterContainer = $("#filter-container");

    if (FILTERS.getFilters().length < 1) {
        $filterContainer.removeClass("filter-container--visible");
    } else {
        $filterContainer.addClass("filter-container--visible");
    }
}
