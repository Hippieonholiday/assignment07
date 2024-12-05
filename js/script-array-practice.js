//STEP 1
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince"];
// console.log(movies[1]); 

//STEP 2
// let movies = new Array(5);
// movies[0] = "Lord of The Rings";
// movies[1] = "Eternal Sunshine of The Spotless Mind";
// movies[2] = "Dead Poets Society";
// movies[3] = "The Perks of Being a Wallflower";
// movies[4] = "Harry Potter and The Hald Blood Prince";
// console.log(movies[0]); 

//STEP 3
// let movies = new Array(5); 
// movies[0] = "Lord of The Rings";
// movies[1] = "Eternal Sunshine of The Spotless Mind";
// movies[2] = "Dead Poets Society";
// movies[3] = "The Perks of Being a Wallflower";
// movies[4] = "Harry Potter and The Hald Blood Prince";
// movies.splice(2, 0, "In Time"); 
// console.log(movies.length); 

//STEP 4
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince"];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// for (let index in movies) {
//     console.log(movies[index]); 
// }

//STEP 6
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// for (let movie of movies) {
//     console.log(movie); 
// }

//STEP 7
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// movies.sort(); 
// for (let movie of movies) {
//   console.log(movie); 
// }

//STEP 8
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// let leastFavMovies = ["Biosphere", "The Hobit Part 3", "Dune"];
// console.log("\nMovies I like:\n\n");
// movies.sort(); 
// for (let movie of movies) {
//   console.log(movie); 
// }
// console.log("\nMovies I regret watching:\n\n");
// leastFavMovies.forEach(movie => console.log(movie));

//STEP 9
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// let leastFavMovies = ["Biosphere", "The Hobit Part 3", "Dune"];
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse();
// console.log("\nAll Movies:\n\n");
// for (let movie of allMovies) {
//   console.log(movie);
// }

//STEP 10
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// let leastFavMovies = ["Biosphere", "The Hobit Part 3", "Dune"];
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse();
// let lastMovie = allMovies.pop(); 
// console.log("\nLast Movie in the Array:\n\n", lastMovie);

//STEP 11
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// let leastFavMovies = ["Biosphere", "The Hobit Part 3", "Dune"];
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse();
// let firstMovie = allMovies.shift(); 
// console.log("\nFirst Movie in the Array:\n\n", firstMovie);

//STEP 12
// let movies = ["Lord of The Rings", "Eternal Sunshine of The Spotless Mind", "Dead Poets Society", "The Perks of Being A Wallflower", "Harry Potter and The Half Blood Prince", "In Time", "Shrek"];
// let leastFavMovies = ["Biosphere", "The Hobit Part 3", "Dune"];
// let allMovies = movies.concat(leastFavMovies);
// allMovies.sort().reverse();
// let indicesToReplace = [];
// for (let i = 0; i < leastFavMovies.length; i++) {
//   let index = allMovies.indexOf(leastFavMovies[i]);
//   if (index !== -1) {
//     indicesToReplace.push(index);
//   }
// }
// let moviesYouLike = ["Firefly", "Idiocracy", "Date Night"];
// for (let i = 0; i < indicesToReplace.length; i++) {
//   let index = indicesToReplace[i];
//   if (moviesYouLike[i]) {
//     allMovies[index] = moviesYouLike[i];
//   }
// }

// console.log("\nUpdated Movies Array:\n\n", allMovies);

//STEP 13
// let movies = [
//     ["Lord of The Rings", 1],
//     ["Eternal Sunshine of The Spotless Mind", 2],
//     ["Dead Poets Society", 3],
//     ["The Perks of Being A Wallflower", 4],
//     ["Harry Potter and The Half Blood Prince", 5]
// ];
// let movieNames = movies.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);
// console.log("\nMovies:\n\n");
// movieNames.forEach(movie => console.log(movie));

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// let showEmployee = function(employeeList) {
//     console.log("\nEmployees:\n\n");
//     employeeList.forEach(employee => {
//       console.log(employee);
//     });
// };
// showEmployee(employees);

//STEP 15
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// let showEmployee = function(employeeList) {
//     console.log("\nEmployees:\n\n");
//     employeeList.forEach(employee => {
//       console.log(employee);
//     });
// };
// showEmployee(employees);
// function filterValues(arr) {
//     return arr.filter(item => item !== false && item !== null && item !== 0 && item !== '');
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function getRandomItem(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }
// console.log(getRandomItem(numbers));

//STEP 17
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function getLargestNumber(arr) {
//     return Math.max(...arr);
//   }
// console.log(getLargestNumber(numbers));
