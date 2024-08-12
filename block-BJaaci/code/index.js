let movies = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    releaseDate: '2018-02-28',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    releaseDate: '2018-02-23',
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    releaseDate: '2018-01-24',
    actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
  },
];

/*
Go through the variable named movies properly before solvinf the exercises.
Use the variable named movies to solve the requirement below.
*/

// 1. Log the value of the title key in the first movie of the array named `movies`

console.log("The title of the first movie is:", movies[0].title);

// 2. Log the value of the title key in the last movie of the array named `movies`

console.log("The title of the last movie is:", movies[movies.length - 1].title);

// 3. Log the value of the title key in the second movie (index 1) of the array named `movies`

console.log("The title of the second movie is:", movies[1].title);

// 4. Log the value of the year key in the first movie of the array named `movies`

console.log("The year of the first movie is:", movies[0].year);

// 5. Log all the named of actors (key named actors) of the first movie

console.log("The actors of the first movie are:", movies[0].actors);

// 6. Log the name of the first actor of the first movie

console.log("The forst actor of the first movie is:", movies[0].actors[0]);

// 7. Log the name of the last actor of the first movie

console.log("The last actor of the first movie is:", movies[0].actors[movies[0].actors.length - 1]);

// 8. Log the name of the second actor (index 1) of the first movie

console.log("The second actor of the first movie is:", movies[0].actors[1]); 

// 12. Log all the genres of the third movie

console.log("The genres of the third movie are:", movies[2].genres);

// 13. Log all the genres of the first movie

console.log("The genres of the first movie are:", movies[0].genres);

// 14. Log the first genres of the first movie

console.log("The first genre of the first movie is:", movies[0].genres[0]);

// 15. Log the first genres of the second movie

console.log("The first genre of the second movie is:", movies[1].genres[0]);

// 16. Log the last genres of the first movie (using the length property of array)

console.log("The last genre of the first movie is:", movies[0].genres[movies[0].genres.length - 1]);

// 17. Log the first genres of the second movie (using the length property of array)

console.log("The first genre of the second movie is:", movies[1].genres[movies[1].genres.length - movies[1].genres.length + 0]);

// 18. Log all the genres of the first movie one by one

for (let i = 0; i < movies[0].genres.length; i++) {
  console.log(`Genre ${i + 1} of the first movie is: ${movies[0].genres[i]}`);
}

// 19. Log all the genres of the second movie one by one

for (let i = 0; i < movies[1].genres.length; i++) {
  console.log(`Genre ${i + 1} of the second movie is: ${movies[1].genres[i]}`);
}

// 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)

console.log(movies[0].actors[0]==='Rachel McAdams');

// 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)

console.log(movies[1].actors[1]==='Natalie Portman');

// 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)

console.log(movies[0].year > 2017);
console.log(movies[1].year > 2017);
console.log(movies[2].year > 2017);

// 23. Log the title of all three movies one by one.

console.log(movies[0].title);
console.log(movies[1].title);
console.log(movies[2].title);


// 24. Log if the title of the first movie is `Hannah` or not

console.log(movies[0].title === 'Hannah');

// 25. Log the number of actors in all three movies one by one

console.log(movies[0].actors.length);
console.log(movies[1].actors.length);
console.log(movies[2].actors.length);

// 26. Log the number of genres in all three movies one by one

console.log(movies[0].genres.length);
console.log(movies[1].genres.length);
console.log(movies[2].genres.length);

// 27. Log the name of all the movies with more than 1 genre

for (let i = 0; i < movies.length; i++) {
  if (movies[i].genres.length > 1) {
    console.log(movies[i].title);
  }
}

// 28. Log the name of all the movies with more than 1 actors

for (let i = 0; i < movies.length; i++) {
  if (movies[i].actors.length > 1) {
    console.log(movies[i].title);
  }
}

// 29. Log the name of all the movies with exactly 3 actors

for (let i = 0; i < movies.length; i++) {
  if (movies[i].actors.length === 3) {
    console.log(movies[i].title);
  }
}


// 30. Log the name of all the movies with year `2018`

for (let i = 0; i < movies.length; i++) {
  if (movies[i].year === 2018) {
    console.log(movies[i].title);
  }
}
