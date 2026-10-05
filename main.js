import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {calculateClassAverage,findTopStudent,filterStudents,} from "./analytics.js";


console.log("Fetching data from database...");

fetchStudents((rawStudents) => {
  console.log("Data received!");
  const students = rawStudents.map(
    ({ id, name, courses }) => new Student(id, name, courses)
  );

  console.log("\nTesting Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  try {
    students[0].id = 999;
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
  }
  console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);

  console.log("\n--- Analytics Report ---");
  console.log(
    `Class Average for Course 101: ${calculateClassAverage(students, 101).toFixed(2)}`
  );
  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const enrolled = filterStudents(students, (student) =>
    student.courses.some((course) => course.courseId === 102)
  );
  console.log(`Students in Course 102: ${enrolled.map((student) => student.name).join(", ")}`);
});
