"use strict";

var LISTING = (function() {
    let nextId = 0;
    var jobs = [
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        new Job(
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
        )
    ];
    return {
        /**
         * @returns LISTING.jobs, the array of Job objects
         */
        getJobs: function() {
            return jobs;
        },

        /**
         * Increments the global id and assigns it to the next job.
         * @returns New id to assign to job
         */
        assignId: function() {
            nextId++;
            return nextId;
        }
    };
})();

/**
 * Creates a Job object to store in LISTING.jobs.
 * @param {String} company
 * @param {Boolean} isNew
 * @param {Boolean} isFeatured
 * @param {String} title
 * @param {Number} timeNumber
 * @param {String} timeUnit
 * @param {String} shift
 * @param {String} location
 * @param {String} role
 * @param {String} level
 * @param {Array} languages
 * @param {Array} tools
 */
function Job(
    company,
    isNew,
    isFeatured,
    title,
    timeNumber,
    timeUnit,
    shift,
    location,
    role,
    level,
    languages,
    tools
) {
    this.company = company;
    this.isNew = isNew;
    this.isFeatured = isFeatured;
    this.title = title;
    this.time = timeNumber + timeUnit + " ago";
    this.shift = shift;
    this.location = location;
    this.role = role;
    this.level = level;
    this.languages = languages;
    this.tools = tools;
}

/**
 * Creates a job-listing element for each job in LISTING.jobs and appends
 * them to #jobs-container.
 */
function createJobListings() {
    let jobs = LISTING.getJobs();
    jobs.forEach(job => {
        job.id = LISTING.assignId();
        $("#jobs-container").append(`
            <job-listing
                id="job-${job.id}"
                class="job-listing main-row"
                data-role="${job.role}"
                data-level="${job.level}"
                data-languages="${job.languages}"
                data-tools="${job.tools}"
                </job-listing>
        `);
    });
}

/**
 * Updates job-listing elements to display based on filters from FILTERS.filters.
 */
function updateJobListingDisplay() {
    let $jobListings = $("#jobs-container");
    let filtersArr = FILTERS.getFilters();

    $jobListings.children().css("display", "grid"); // Resets display
    updateClearButton();

    // Go through each element in FILTERS.filters, and if a job-listing does
    // not match, set display to none
    filtersArr.forEach(element => {
        $jobListings
            .children(`:not([data-${element.dataset}*='${element.category}'])`)
            .css("display", "none");
    });
}
