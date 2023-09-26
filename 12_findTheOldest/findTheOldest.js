const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const aDeath = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
        const bDeath = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
        return (bDeath - b.yearOfBirth) - (aDeath - a.yearOfBirth);
    })[0];

};

// Do not edit below this line
module.exports = findTheOldest;
