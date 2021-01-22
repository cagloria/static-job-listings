# Frontend Mentor - Job Listings Challenge

![Design preview for the Job Listings coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

This project has been deployed to [cagloria.github.io/static-job-listings](https://cagloria.github.io/static-job-listings/).

## The challenge

Your challenge is to build out this job listing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Filter job listings based on the categories using the HTML `data-` attribute

### Filtering

The categories are:

-   Role: Frontend, Backend, Fullstack
-   Level: Junior, Midweight, Senior
-   Languages: Python, Ruby, JavaScript, HTML, CSS
-   Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)

So, if a job listing is for has the following categories `Frontend, Junior, JavaScript, React` your HTML data attributes would look like this `data-role="frontend" data-level="junior" data-languages="javascript" data-tools="react"`.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.
