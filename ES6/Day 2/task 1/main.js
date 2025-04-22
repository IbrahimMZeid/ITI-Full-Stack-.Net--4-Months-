function generateCourse(course) {
    return Object.assign({
        courseName: "Default Name",
        courseDuration: "Default Duration",
        courseOwner: "Default Owner"
    },course);
}
let course = generateCourse({ courseName: "ES6", courseOwner: "Ahmed" });
console.log(course);