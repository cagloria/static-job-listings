"use strict";

var JOBS = (function() {
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
        },
        assignId: function() {
            nextId++;
            return nextId;
        }
    };
})();

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

function displayJobs() {
    let jobs = JOBS.returnJobs();
    jobs.forEach(job => {
        job.id = JOBS.assignId();
        JOBS.incrementId();
        $("#jobs-container").append(`
            <job-listing id="job-${job.id}"
                data-role="${job.role}"
                data-level="${job.level}"
                data-languages="${job.languages}"
                data-tools="${job.tools}"
                </job-listing>
        `);
    });
}
