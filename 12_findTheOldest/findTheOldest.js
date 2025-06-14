const findTheOldest = function(people){
    const currentYear = new Date().getFullYear();
    return people.reduce((oldest, currentElement) => {
        const deathYear = currentElement.yearOfDeath || currentYear;
        const age = deathYear - currentElement.yearOfBirth;
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        return (age > oldestAge)? currentElement : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
