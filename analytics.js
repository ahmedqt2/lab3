export function calculateClassAverage(students, courseId) {
  const records = students.flatMap((student) =>
    student.courses.filter((course) => course.courseId === courseId)
  );
  if (records.length === 0) return 0;
  return records.reduce((total, course) => total + course.grade, 0)/ records.length;
}
export function findTopStudent(students) {
  return students.reduce((top, student) => {
    if (top === null || student.getAverage() > top.getAverage()) {
      return student;
    }
    return top;
  }, null);
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
