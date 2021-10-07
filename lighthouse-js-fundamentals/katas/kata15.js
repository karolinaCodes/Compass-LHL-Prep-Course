// Organizing Instructors

const organizeInstructors = function (instructors) {
  let organizedInstructors = {};
  //loops through instructors array, and destructures the course and name from each object
  for (let i = 0; i < instructors.length; i++) {
    const { course } = instructors[i];
    const { name } = instructors[i];

    //checks whether the course key in already in the organizedInstructors array, if it is, added the name to the key array, if it isn't, adds the course as a new property and adds an array with the instructors name
    if (organizedInstructors[course]) {
      organizedInstructors[course].push(name);
    } else {
      organizedInstructors[course] = [name];
    }
  }
  return organizedInstructors;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
