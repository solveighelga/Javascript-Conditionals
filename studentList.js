/* I decided to identify the people from the file as Students.
Each person is represented by an object in an array */
const student = [
{
    name: 'Minerva Thurstan',
    dob: new Date('3/9/1974'), // here I added new Date() because I will be using this number for comparisons later
    children: 2,
    country: 'Indonesia',
    programmer: true,
},
{
    name: 'Ashlen Glasscoe',
    dob: new Date('6/28/1976'),
    children: 2,
    country: 'Philippines',
    programmer: false, 
},
{
    name: 'Helli Adamini',
    dob: new Date('6/23/1987'),
    children: 5,
    country: 'Pakistan',
    programmer: false, 
},
{
    name: 'Laurel Moughtin',
    dob: new Date('6/15/1972'),
    children: 3,
    country: 'Thailand',
    programmer: true, 
},
{
    name: 'Rusty Tran',
    dob: new Date('3/10/1980'),
    children: 2,
    country: 'United States',
    programmer: true, 
}
]

console.log(student);

/* If and else statement: 
Is the first person older than the last person? */
if (student[0].dob < student[4].dob) { // I wanted to compare the first student to the last so I used the nr. 0 b/c JavaScript counts from 0 and the last person is nr.4. I used the dob variable and the symbol less then to make the statement true.
    console.log("Minerva is older than Rusty");
 } else {
    console.log("Minerva is not younger than Rusty");
 }

 /* Does the 2nd person have the same amount of kids as the 3rd? */
 if (student[1].children == student[2].children) { // Is checking if the number is the same for children then use ==
    console.log("They have the same amount of kids");
 } else {
    console.log("They don't have the same amount of kids");
 }

 /* If the 1st person and the 4th person in the array both know how to program then "Yay!" if not "LMGTFY" */
 if (student[0].programmer && student[3].programmer) { // && = Logical AND: both are true so the && symbol retuned Yay! to the console.
    console.log("Yay!");
 } else {
    console.log("LMGTFY");
 }

 /* If the 2nd student nationality is from Iceland(Hæ), Spain(Hola) og Korea(여보세요). If not say "Hello" */
 switch (student[1].country) { // second student is number 1 and I want to compare to the country if it matches any of the languages.
    case 'Iceland':
        console.log('Hæ');
        break;
    case 'Spain':
        console.log('Hola');
        break;
    case 'Korea':
        console.log('여보세요');
        break;
    default: // remember lowerCase
        console.log('Hello');
        break;
 }

/* Use a ternary operator to output if the 2nd person’s name is longer than 5 characters. */
let ashlen = student[1].name; // target her name
console.log(ashlen);

let answer = ashlen.length <= 5 ? "If true then it is shorter" : "If false then it is longer"; // Ashlen's name length less than 5 ? false
console.log(answer);
