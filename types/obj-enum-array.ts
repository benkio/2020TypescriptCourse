// const person: {
//     name: string;
//     age: number;
// } =
// const person : {
//     name    : string;
//     age     : number;
//     hobbies : string[];
//     role    : [number, string];
// } = {
//     name    : "Enrico",
//     age     : 13,
//     hobbies : ["Sports", "Guitar"],
//     role    : [2, "author"]
// };

// const ADMIN      = 0;
// const READ_ONLY  = 1;
// const AUTHOR     = 0;

enum Role {ADMIN = "ADMIN" , READ_ONLY = 100, AUTHOR = "AUTHOR"}
const person = {
    name    : "Enrico",
    age     : 13,
    hobbies : ["Sports", "Guitar"],
    role    : Role.ADMIN
};
//person.role.push("stronzi");
//person.role[1] = 22;

//person.role = [0, "writer", "wrong"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); Wrong
}
if (person.role === Role.AUTHOR) {
    console.log("user is ADMIN");
}
