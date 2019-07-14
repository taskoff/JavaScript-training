function schoolRegister(arr) {
    let studentList = {};
   for (const current of arr) {
       let studentInfo = current.split(', ');
    //    console.log(studentInfo);
       let name = studentInfo[0].split(': ')[1];
       let grade = studentInfo[1].split(': ')[1];
       let avgScore = Number(studentInfo[2].split(': ')[1]);
        // console.log(name, grade, avgScore);

        if (!studentList.hasOwnProperty(grade) && avgScore>= 3) {
            studentList[grade] = {'name': [name], 'avgScore': [avgScore]}
        } else {
            if (avgScore >= 3) {
                studentList[grade].name.push(name);
                studentList[grade].avgScore.push(avgScore);
                // let sum = (studentList[grade].avgScore.reduce((a, b) => a+b)) / studentList[grade].avgScore.length;
                // studentList[grade].avgScore = sum;
                // console.log(sum)
            }
            
        }
       
   }
   let listOfStudentsArr = Object.entries(studentList).sort((a, b) => Number(a[0]) - Number(b[0]));
//    console.log(listOfStudentsArr);
   listOfStudentsArr.forEach(e => {
       console.log(`${Number(e[0]) + 1} Grade`);
       console.log(`List of students: ${e[1].name.join(', ')}`);
       console.log(`Average annual grade from last year: ${((e[1].avgScore.reduce((a, b) => a+b))/e[1].avgScore.length).toFixed(2)}`)
       console.log();
   })
   
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)
// schoolRegister(["Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
// "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
// "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",])