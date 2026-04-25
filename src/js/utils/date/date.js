const date = () => {

    function getYearFormat(pattern) {
        const yearRegex = /\d{4}/gm;
        return pattern.match(yearRegex)
    }

    return {
        getYearFormat
    }
}

export default date