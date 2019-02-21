// const person = {
//   name: "Sanil",
//   age: 24,
//   location: {
//     city: "Bangalore",
//     temp: 26
//   }
// };
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// const Book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { title, author } = Book;
// const { name: publisherName = "Self-Published" } = Book.publisher;
// console.log(publisherName);

// const address = [
//   "1299 south Juniper Street",
//   "Philadelphia",
//   "Pensylvania",
//   "19147"
// ];

// const [street, city, state = "New York", zip] = address;

// console.log(`You are in ${city} ${state}`);

// console.log(`You are in ${address[1]} ${address[2]}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
