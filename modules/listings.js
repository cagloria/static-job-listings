let Listings = (function () {
    let nextId = 0;
    let jobs = [
        Job(
            "Photosnap",
            true,
            true,
            "Senior Frontend Developer",
            1,
            "d",
            "Full Time",
            "USA only",
            "Frontend",
            "Senior",
            ["HTML", "CSS", "JavaScript"],
            null
        ),
        Job(
            "Manage",
            true,
            true,
            "Fullstack Developer",
            1,
            "d",
            "Part Time",
            "Remote",
            "Fullstack",
            "Midweight",
            ["Python"],
            ["React"]
        ),
        Job(
            "Account",
            true,
            false,
            "Junior Frontend Developer",
            2,
            "d",
            "Part Time",
            "USA only",
            "Frontend",
            "Junior",
            ["JavaScript"],
            ["React", "Sass"]
        ),
        Job(
            "MyHome",
            false,
            false,
            "Junior Frontend Developer",
            5,
            "d",
            "Contract",
            "USA only",
            "Frontend",
            "Junior",
            ["CSS", "JavaScript"],
            null
        ),
        Job(
            "Loop Studios",
            false,
            false,
            "Software Engineer",
            1,
            "w",
            "Full Time",
            "Worldwide",
            "Fullstack",
            "Midweight",
            ["JavaScript", "Ruby"],
            ["Sass"]
        ),
        Job(
            "FaceIt",
            false,
            false,
            "Junior Backend Developer",
            2,
            "w",
            "Full Time",
            "UK only",
            "Backend",
            "Junior",
            ["Ruby"],
            ["RoR"]
        ),
        Job(
            "Shortly",
            false,
            false,
            "Junior Developer",
            2,
            "w",
            "Full Time",
            "Worldwide",
            "Frontend",
            "Junior",
            ["HTML", "JavaScript"],
            ["Sass"]
        ),
        Job(
            "Insure",
            false,
            false,
            "Junior Frontend Developer",
            2,
            "w",
            "Full Time",
            "USA only",
            "Frontend",
            "Junior",
            ["JavaScript"],
            ["Vue", "Sass"]
        ),
        Job(
            "Eyecam Co.",
            false,
            false,
            "Full Stack Engineer",
            3,
            "w",
            "Full Time",
            "Worldwide",
            "Fullstack",
            "Midweight",
            ["JavaScript", "Python"],
            ["Django"]
        ),
        Job(
            "The Air Filter Company",
            false,
            false,
            "Front-end Dev",
            1,
            "mo",
            "Part Time",
            "Worldwide",
            "Frontend",
            "Junior",
            ["JavaScript"],
            ["React", "Sass"]
        ),
    ];

    const getJobs = () => {
        return jobs;
    };

    const assignId = () => {
        nextId++;
        return nextId;
    };

    return { getJobs, assignId };
})();

/**
 * Creates a job-listing element for each job in LISTING.jobs and appends
 * them to #jobs-container.
 */
function createJobListings() {
    let jobs = Listings.getJobs();
    jobs.forEach((job) => {
        job.id = Listings.assignId();
        const featuredClass = job.isFeatured ? ` job-listing--featured` : "";

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
}

/**
 * Updates job-listing elements to display based on filters.
 */
function updateJobListingDisplay() {
    const $jobsContainer = $("#jobs-container");
    const $jobListings = $jobsContainer.children();
    const filtersArr = FILTERS.getFilters();

    $jobListings.removeClass("job-listing--invisible");
    updateFilterDisplay();

    // Go through each element in filters list, and if a job-listing does not
    // match, set display to none
    filtersArr.forEach((element) => {
        $jobsContainer
            .children(`:not([data-${element.dataset}*='${element.category}'])`)
            .addClass("job-listing--invisible");
    });
}
