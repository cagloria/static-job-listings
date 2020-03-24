"use strict";

var FILTERS = (function() {
    var filters = [];

    return {
        /**
         * Checks if the category is already a filter.
         * @param {String}  newCategory
         * @returns         If category is a new filter
         */
        isNewFilter: function(newCategory) {
            let newItem = true;
            filters.forEach(element => {
                if (element.category === newCategory) {
                    newItem = false;
                }
            });
            return newItem;
        },

        /**
         * Adds a category to LISTING.filters.
         * @param {String} category
         */
        addFilterObj: function(dataset, category) {
            filters.push({ dataset: dataset, category: category });
        },

        /**
         * Removes a category from LISTING.filters.
         * @param {String} removedCategory  Category to remove
         */
        removeFilterObj: function(removedCategory) {
            filters = filters.filter(
                element => element.category !== removedCategory
            );
        },

        /**
         * @returns LISTING.filters, the list of current filters
         */
        getFilters: function() {
            return filters;
        }
    };
})();

/**
 * Adds new filter to LISTING.filters and creates a filter button.
 * @param {String} dataset  Data set the category belongs to
 * @param {String} category Category, chosen from the button in the container
 */
function createFilter(dataset, category) {
    if (FILTERS.isNewFilter(category)) {
        let $filterContainer = $("#filter-list");

        FILTERS.addFilterObj(dataset, category); // Adds category to LISTING.filters

        // Creates a button of that category and places it in #filter-list
        $filterContainer.append(
            `<li id="filter-${category}" class="filter-list__item">
                <span class="tablet-list__tablet tablet-list__tablet--label">${category}</span>
                <button 
                    class="delete-filter-button"
                    onclick="deleteFilter('${category}')"
                ><img src="../images/icon-remove.svg"></button>
            </li>`
        );

        updateJobListingDisplay();
    }
}

/**
 * Deletes the filter in LISTING.filters and deletes the corresponding button.
 * @param {String} category Category of the filter
 */
function deleteFilter(category) {
    FILTERS.removeFilterObj(category);
    $(`#filter-${category}`).remove();
    updateJobListingDisplay();
}

/**
 * Clear all filters from LISTING.filters and their corresponding buttons.
 */
function clearFilters() {
    let filtersArr = FILTERS.getFilters();

    filtersArr.forEach(element => {
        deleteFilter(element.category);
    });
}

/**
 * Updates #clear-button to display only if LISTING.filters.length > 1.
 */
function updateClearButton() {
    let $clearButton = $("#clear-button");

    if (FILTERS.getFilters().length < 1) {
        $clearButton.css("display", "none");
    } else {
        $clearButton.css("display", "block");
    }
}
