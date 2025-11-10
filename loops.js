let people = [
  {
    name: "Anders",
    age: 25,
    isMale: true,
    hobbies: ["going fishing", "game", "bike"],
  },
  { name: "Emma", age: 22, isMale: false, hobbies: ["read", "paint", "run"] },
  {
    name: "Bob",
    age: 38,
    isMale: true,
    hobbies: ["going fishing", "going hunting", "skiing"],
  },
  {
    name: "Sara",
    age: 25,
    isMale: false,
    hobbies: ["drink", "work out", "game"],
  },
  {
    name: "Alf",
    age: 65,
    isMale: true,
    hobbies: ["wood carving", "read", "jog"],
  },
  {
    name: "Beate",
    age: 34,
    isMale: false,
    hobbies: ["jog", "paint", "do yoga"],
  },
  {
    name: "Sarah",
    age: 29,
    isMale: false,
    hobbies: ["write", "do yoga", "sculpt"],
  },
  {
    name: "David",
    age: 40,
    isMale: true,
    hobbies: ["fish", "garden", "travel"],
  },
  {
    name: "Anna",
    age: 22,
    isMale: false,
    hobbies: ["sing", "jog", "game"],
  },
  {
    name: "Chris",
    age: 33,
    isMale: true,
    hobbies: ["drum", "skate", "camp"],
  },
];

console.log(people);

for (let i = 0; i < people.length; i++) {
  console.log(
    `${people[i].name} is ${people[i].age} years old. ${
      people[i].isMale ? "He" : "She"
    } like to ${people[i].hobbies[0]}`
  );
}
