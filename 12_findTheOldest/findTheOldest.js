const findTheOldest = function(people) {
    let oldest = 0;
    return people.map(person => {
        let age = 0;
        if (!person.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldest) oldest = age;
        return {
            "name": person.name,
            "age": age
        };
    }).filter(person => {
        return person.age === oldest;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
