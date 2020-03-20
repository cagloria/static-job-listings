"use strict";

var JOBS = (function() {
    var jobs = [
        {
            role: "Frontend",
            level: "Senior",
            languages: ["HTML", "CSS", "JavaScript"],
            tools: null
        }
    ];
    return {
        returnJobs: function() {
            return jobs;
        }
    };
})();

function displayJobs() {
    JOBS.returnJobs().forEach(job => {
        $("#jobs-container").append(`
            <job-listing 
                data-role="${job.role}"
                data-level="${job.level}"
                data-languages="${job.languages}"
                data-tools="${job.tools}"
                </job-listing>
        `);
    });
}

window.onload = function() {
    this.displayJobs();
};
