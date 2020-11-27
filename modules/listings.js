let Listings = (function () {
    let _nextId = 0;
    let _jobs = [];

    const _assignId = () => {
        _nextId++;
        return _nextId;
    };

    return {
        loadJobs: function () {
            JobsData.getList().forEach((job) => {
                _jobs.push(
                    Job(
                        job.company,
                        job.isNew,
                        job.isFeatured,
                        job.title,
                        job.timeNumber,
                        job.timeUnit,
                        job.shift,
                        job.location,
                        job.role,
                        job.level,
                        job.languages,
                        job.tools
                    )
                );
            });
        },

        getJobs: function () {
            return _jobs;
        },

        createJobListings: function () {
            _jobs.forEach((job) => {
                job.id = _assignId();
                const featuredClass = job.isFeatured
                    ? ` job-listing--featured`
                    : "";

                $("#jobs-container").append(`
                <li is="job-listing"
                    id="job-${job.id}"
                    class="job-listing${featuredClass} content-row"
                    data-role="${job.role}"
                    data-level="${job.level}"
                    data-languages="${job.languages}"
                    data-tools="${job.tools}" />
            `);
            });
        },

        updateJobListingDisplay: function () {
            const $jobsContainer = $("#jobs-container");
            const $jobListings = $jobsContainer.children();
            const filtersArr = Filters.getFilters();

            $jobListings.removeClass("job-listing--invisible");
            Filters.updateFilterDisplay();

            // Go through each element in filters list, and if a job-listing
            // does not match, set display to none
            filtersArr.forEach((element) => {
                $jobsContainer
                    .children(
                        `:not([data-${element.dataset}*='${element.category}'])`
                    )
                    .addClass("job-listing--invisible");
            });
        },
    };
})();
