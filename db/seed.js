'use strict'; // eslint-disable-line semi

const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
	{title: 'Ifafa I', artist: {name: 'Frank Stella' }, year: 1968, image: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Pink', 'Geometric'] , description: 'Geometric lithograph from the V Series.', medium: 'Print' , dimensions: [49.1, 0, 28.2], quantity: 1 },
	{title: 'Ifafa II', artist: {name: 'Frank Stella' }, year: 1968, image: '' , price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Orange', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1 },
	{title: 'Itata', artist: {name: 'Frank Stella' }, year: 1968 , image: '' , price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Grey', 'Green', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print' , dimensions: [28.4, 0, 49.2] , quantity: 1 },
	{title: 'Harran II', artist: {name: 'Frank Stella' }, year: 1967, image: '' , price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ], description: 'Lyrical and multi-colored painting, based on the semicircular drafting instrument used for measuring and constructing angles.' , medium: 'Painting', dimensions: [609.6, 0, 304.8] , quantity: 1},
	{title: 'Firuzabad', artist: {name: 'Frank Stella' }, year: 1970 , image: '' , price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Black', 'Blue', 'Circular' ] , description: 'A largescale painting with a striking color palette and composition' , medium: 'Painting' , dimensions: [458.47, 0, 304.8], quantity: 1 },
	{title: 'Gur I', artist: {name: 'Frank Stella' }, year: 1968 , image: '' , price: 2000 , tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ] , description: 'A largescale painting with a striking color palette and composition', medium: 'Painting' , dimensions: [458.47, 0, 304.8], quantity: 1},
	
	// {title: , artist: {name: 'Agnes Martin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: },
	
	// {title: , artist: {name: 'Donald Judd' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: },
	
	// {title: , artist: {name: 'Kenneth Noland' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: },
	
	{title: 'monument for V. Tatlin', artist: {name: 'Dan Flavin' }, year: 1968 , image: '' , price: 2500 , tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'] , description: 'Light sculpture.' , medium: 'Sculpture', dimensions: [60.96, 10, 177.8] , quantity: 1}
	// {title: , artist: {name: 'Dan Flavin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: }
	// {title: , artist: {name: 'Dan Flavin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: }
	// {title: , artist: {name: 'Dan Flavin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: }
	// {title: , artist: {name: 'Dan Flavin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: }
	// {title: , artist: {name: 'Dan Flavin' }, year: , image:  , price: , tags: , description: , medium: , dimensions: , quantity: }

	], product => db.model('products').create(product))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
