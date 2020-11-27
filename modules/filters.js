var Filters = (function () {
    let _filters = [];

    const _isNewFilter = (newCategory) => {
        let isNew = !_filters.some((item) => item.category === newCategory);
        return isNew;
    };

    const _addFilterObj = (dataset, category) => {
        _filters.push({ dataset: dataset, category: category });
    };

    return {
        removeFilterObj: function (removedCategory) {
            _filters = _filters.filter(
                (element) => element.category !== removedCategory
            );
        },

        getFilters: function () {
            return _filters;
        },

        createFilter: function (dataset, category) {
            if (_isNewFilter(category)) {
                let $filterList = $("#filter-list");

                _addFilterObj(dataset, category);

                // Creates a button of that category
                $filterList.append(
                    `<filter-button data-category=${category}
                        data-function=Filters.deleteFilter />`
                );

                Listings.updateJobListingDisplay();
            }
        },

        deleteFilter: function (category) {
            Filters.removeFilterObj(category);
            $(`filter-button[data-category=${category}]`).remove();
            Listings.updateJobListingDisplay();
        },

        clearFilters: function () {
            let filtersArr = Filters.getFilters();

            filtersArr.forEach((element) => {
                Filters.deleteFilter(element.category);
            });
        },

        updateFilterDisplay: function () {
            let $filterContainer = $("#filter-container");

            if (Filters.getFilters().length < 1) {
                $filterContainer.removeClass("filter-container--visible");
            } else {
                $filterContainer.addClass("filter-container--visible");
            }
        },
    };
})();
