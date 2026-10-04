export class Student {
  constructor(id, name, courses = []) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true,
    });
    this.name = name;
    this.courses = courses.map((course) => ({ ...course }));
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (this.courses.length === 0) return 0;
    else return this.courses.reduce((total, course) => total + course.grade, 0)
      / this.courses.length;
  }
}
