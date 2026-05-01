/*
  Higher-Order Functions
  YOU DO: Independent Student Challenges

  Instructions:
  Complete the TODOs below.
  Use forEach, map, and filter.

  Rules:
  1. Do not use regular for loops for these challenges.
  2. Use console.log to check your work.
  3. Read the expected output comments carefully.
*/

console.log("=== YOU DO: Higher-Order Functions Challenges ===");

function section(title) {
  console.log(" Students");
  console.log(" Ava" + title + "liam " + title + "noah" + title + "mia"
  );
}

// ------------------------------------------------------------
// Challenge Set 1: Students
// ------------------------------------------------------------

section("Challenge Set 1: Students");

const students = [
  { name: "Ava", grade: 92, missingWork: 0 },
  { name: "Liam", grade: 67, missingWork: 3 },
  { name: "Noah", grade: 81, missingWork: 1 },
  { name: "Mia", grade: 74, missingWork: 0 },
  { name: "Ethan", grade: 58, missingWork: 5 },
  { name: "Sophia", grade: 99, missingWork: 0 }
];

// Challenge 1:
// Use forEach to print each student name in this format:
// Student: Ava
// Student: Liam
// Student: Noah

// Write your code here:
students.forEach(student => console.log(`Student: ${student.name}`));
// Challenge 2:
// Use map to create a new array that contains only the student names.
// Expected:
// ["Ava", "Liam", "Noah", "Mia", "Ethan", "Sophia"]

// Write your code here:
const studentNames = students.map(student => student.name);
console.log(studentNames);


// Challenge 3:
// Use filter to create a new array of students who are passing.
// Passing means grade is 70 or higher.

// Write your code here:
 const passingStudents = students. filter(students => students.grade >= 70);
  console.log(passingStudents);


// Challenge 4:
// Use filter to create a new array of students who have missing work.
// Missing work means missingWork is greater than 0.

// Write your code here:
const missingWorkStudents = students.filter(student => student.missingWork > 0);
console.log(missingWorkStudents);


// Challenge 5:
// Use map to create a new array of messages like this:
// "Ava has a 92"
// "Liam has a 67"
// "Noah has an 81"

// Write your code here:
const studentMessages = students.map(student => `${student.name} has a ${student.grade}`);
console.log(studentMessages);


// Challenge 6:
// Combine filter and map to get only the names of students who are passing.
// Expected:
// ["Ava", "Noah", "Mia", "Sophia"]

// Write your code here:

const passingStudentNames = students
  .filter(student => student.grade >= 70)
  .map(student => student.name);
console.log(passingStudentNames); 



// ------------------------------------------------------------
// Challenge Set 2: Products
// ------------------------------------------------------------

section("Challenge Set 2: Products");

const products = [
  { name: "Keyboard", price: 40, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 150, inStock: false },
  { name: "USB Cable", price: 10, inStock: true },
  { name: "Headset", price: 75, inStock: false },
  { name: "Webcam", price: 60, inStock: true }
];

// Challenge 7:
// Use forEach to print every product name.

// Write your code here:



// Challenge 8:
// Use filter to create an array of only products that are in stock.

// Write your code here:



// Challenge 9:
// Use filter to create an array of products that cost more than $50.

// Write your code here:



// Challenge 10:
// Use map to create an array of product names.
// Expected:
// ["Keyboard", "Mouse", "Monitor", "USB Cable", "Headset", "Webcam"]

// Write your code here:

