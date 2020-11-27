const JobsData = (function () {
    const _list = [
        {
            company: "Photosnap",
            isNew: true,
            isFeatured: true,
            title: "Senior Frontend Developer",
            timeNumber: 1,
            timeUnit: "d",
            shift: "Full Time",
            location: "USA only",
            role: "Frontend",
            level: "Senior",
            languages: ["HTML", "CSS", "JavaScript"],
            tools: null,
        },
        {
            company: "Manage",
            isNew: true,
            isFeatured: true,
            title: "Fullstack Developer",
            timeNumber: 1,
            timeUnit: "d",
            shift: "Part Time",
            location: "Remote",
            role: "Fullstack",
            level: "Midweight",
            languages: ["Python"],
            tools: ["React"],
        },
        {
            company: "Account",
            isNew: true,
            isFeatured: false,
            title: "Junior Frontend Developer",
            timeNumber: 2,
            timeUnit: "d",
            shift: "Part Time",
            location: "USA only",
            role: "Frontend",
            level: "Junior",
            languages: ["JavaScript"],
            tools: ["React", "Sass"],
        },
        {
            company: "MyHome",
            isNew: false,
            isFeatured: false,
            title: "Junior Frontend Developer",
            timeNumber: 5,
            timeUnit: "d",
            shift: "Contract",
            location: "USA only",
            role: "Frontend",
            level: "Junior",
            languages: ["CSS", "JavaScript"],
            tools: null,
        },
        {
            company: "Loop Studios",
            isNew: false,
            isFeatured: false,
            title: "Software Engineer",
            timeNumber: 1,
            timeUnit: "w",
            shift: "Full Time",
            location: "Worldwide",
            role: "Fullstack",
            level: "Midweight",
            languages: ["JavaScript", "Ruby"],
            tools: ["Sass"],
        },
        {
            company: "FaceIt",
            isNew: false,
            isFeatured: false,
            title: "Junior Backend Developer",
            timeNumber: 2,
            timeUnit: "w",
            shift: "Full Time",
            location: "UK only",
            role: "Backend",
            level: "Junior",
            languages: ["Ruby"],
            tools: ["RoR"],
        },
        {
            company: "Shortly",
            isNew: false,
            isFeatured: false,
            title: "Junior Developer",
            timeNumber: 2,
            timeUnit: "w",
            shift: "Full Time",
            location: "Worldwide",
            role: "Frontend",
            level: "Junior",
            languages: ["HTML", "JavaScript"],
            tools: ["Sass"],
        },
        {
            company: "Insure",
            isNew: false,
            isFeatured: false,
            title: "Junior Frontend Developer",
            timeNumber: 2,
            timeUnit: "w",
            shift: "Full Time",
            location: "USA only",
            role: "Frontend",
            level: "Junior",
            languages: ["JavaScript"],
            tools: ["Vue", "Sass"],
        },
        {
            company: "Eyecam Co.",
            isNew: false,
            isFeatured: false,
            title: "Full Stack Engineer",
            timeNumber: 3,
            timeUnit: "w",
            shift: "Full Time",
            location: "Worldwide",
            role: "Fullstack",
            level: "Midweight",
            languages: ["JavaScript", "Python"],
            tools: ["Django"],
        },
        {
            company: "The Air Filter Company",
            isNew: false,
            isFeatured: false,
            title: "Front-end Dev",
            timeNumber: 1,
            timeUnit: "mo",
            shift: "Part Time",
            location: "Worldwide",
            role: "Frontend",
            level: "Junior",
            languages: ["JavaScript"],
            tools: ["React", "Sass"],
        },
    ];

    return {
        getList: function () {
            return _list;
        },
    };
})();