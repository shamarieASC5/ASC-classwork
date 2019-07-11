const heros = [ 
    "Iron Man",
    "Batman",
    "Black Panther",
    "Captain America",
    "Spiderman"
];

console.log( 'The length is...', heros.length);

heroes.push('Captain Marvel');

console.log('The new length is...', heroes.length);

console.log('The second hero is..', heroes[1]);

heroes[1] = "Nightwing";

console.log('The second hero is...', heroes[1]);

heroes.pop();

console.log(heroes);
