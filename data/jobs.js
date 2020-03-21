"use strict";

var JOBS = (function() {
    let nextId = 0;
    var jobs = [
        new Job(
            "Photosnap",
            true,
            true,
            "Senior",
            "Frontend Developer",
            1,
            "d",
            "Full Time",
            "USA only",
            ["HTML", "CSS", "JavaScript"],
            null
        )
    ];
    return {
        returnJobs: function() {
            return jobs;
        },
        getNextId: function() {
            return nextId;
        },
        incrementId: function() {
            nextId++;
        }
    };
})();

function Job(
    company,
    isNew,
    isFeatured,
    level,
    role,
    timeNumber,
    timeUnit,
    shift,
    location,
    languages,
    tools
) {
    this.company = company;
    this.isNew = isNew;
    this.isFeatured, isFeatured;
    this.title = level + " " + role;
    this.level = level;
    this.role = role;
    this.time = timeNumber + timeUnit + " ago";
    this.shift = shift;
    this.location = location;
    this.languages = languages;
    this.tools = tools;
}

function displayJobs() {
    let jobs = JOBS.returnJobs();
    jobs.forEach(job => {
        let id = jobs.indexOf(job);
        $("#jobs-container").append(`
            <job-listing id="job-${id}"
                data-role="${job.role}"
                data-level="${job.level}"
                data-languages="${job.languages}"
                data-tools="${job.tools}"
                </job-listing>
        `);
    });
}
