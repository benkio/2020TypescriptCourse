// const person: {
//     name: string;
//     age: number;
// } =
const person = {
    name: "Enrico",
    age: 13,
    hobbies: ["Sports", "Guitar"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); Wrong
}
