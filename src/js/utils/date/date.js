export default function getYearFormat(pattern) {
        const yearRegex = /\d{4}/gm;
        return pattern.match(yearRegex)
    }