const Job = (
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
) => {
    const time = timeNumber + timeUnit + " ago";

    return {
        company,
        isNew,
        isFeatured,
        title,
        time,
        shift,
        location,
        role,
        level,
        languages,
        tools,
    };
};
