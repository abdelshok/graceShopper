'use strict'; // eslint-disable-line semi

const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Christine', email: 'christine@.gshop.com', password: '1234'},
  {name: 'Abdel', email: 'Abdel@.gshop.com', password: '1234'},
  {name: 'Brian', email: 'Brian@.gshop.com', password: '1234'},
  {name: 'Arnoldo', email: 'Arnoldo@.gshop.com', password: '1234'},

], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([

	//Frank Stella
	{title: 'Ifafa I', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Pink', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1 },
	{title: 'Ifafa II', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Orange', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1 },
	{title: 'Itata', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Grey', 'Green', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [28.4, 0, 49.2], quantity: 1 },
	{title: 'Harran II', artist: {name: 'Frank Stella' }, year: 1967, url: '', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ], description: 'Lyrical and multi-colored painting, based on the semicircular drafting instrument used for measuring and constructing angles.', medium: 'Painting', dimensions: [609.6, 0, 304.8], quantity: 1},
	{title: 'Firuzabad', artist: {name: 'Frank Stella' }, year: 1970, url: '', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Black', 'Blue', 'Circular' ], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [458.47, 0, 304.8], quantity: 1 },
	{title: 'Gur I', artist: {name: 'Frank Stella' }, year: 1968, url: '', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [458.47, 0, 304.8], quantity: 1},
	//Agnes Martin
	{title: 'White Flower', artist: {name: 'Agnes Martin' }, year: 1960, url: '', price: 4999, tags: ['Agnes Martin', 'Abstract', 'Geometric', 'Grey'], description: 'Monochromatic paintings inspired by the desert terrain of New Mexico', medium: 'Painting', dimensions: [72.87, 0, 72], quantity: 1},
	{title: 'Untitled', artist: {name: 'Agnes Martin' }, year: 1977, url: '', price: 5000, tags: ['Agnes Martin', 'Abstract', 'Post-Minimalism', 'Pastel'], description: 'Inspired by her in interest in Taoism and Zen Buddhism, Martin\'s watercolors paintings feature lateral expanses of delicately colored washes rich in atmospheric effect', medium: 'Painting', dimensions: [9, 0, 9], quantity: 1},
	{title: 'Untitled Number 9', artist: {name: 'Agnes Martin' }, year: 1995, url: '', price: 5000, tags: ['Agnes Martin', 'Abstract', 'Pastel', 'Blue', 'Rose'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [60, 0, 60], quantity: 1},
	{title: 'Night Sea', artist: {name: 'Agnes Martin' }, year: 1963, url: '', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Blue', 'Geometric'], description: 'Although the painting does not obviously depict a "night sea," the two brilliant hues of blue are under-painted with a gold leaf grid that shimmers and seems to move like light reflecting on an expanse of water, of which she had a view from her studio on the East River.', medium: 'Painting', dimensions: [72, 0, 72], quantity: 1},
	{title: 'Untitled Number 5', artist: {name: 'Agnes Martin' }, year: 1975, url: '', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Pastel', 'Orange', 'Blue', 'Lavender'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [72.87, 0, 72], quantity: 1 },
	{title: 'PRAISE', artist: {name: 'Agnes Martin' }, year: 1976, url: '', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Pastel', 'Pink'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [8, 0, 8], quantity: 1},
	//Donald Judd
	{title: 'untitled 1', artist: {name: 'Donald Judd' }, year: 1969, url: '', price: 3000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale copper sculpture hung on wall', medium: 'Sculpture', dimensions: [101.6, 78.7, 457.2], quantity: 1},
	{title: 'untitled 2', artist: {name: 'Donald Judd' }, year: 1973, url: '', price: 2000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Box-like sculpture made of metal and wood', medium: 'Sculpture', dimensions: [83.82, 172.7, 121.9 ], quantity: 1},
	{title: 'untitled 3', artist: {name: 'Donald Judd' }, year: 1973, url: '', price: 3500, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [86.4, 86.4, 619.8], quantity: 1},
	{title: 'untitled 4', artist: {name: 'Donald Judd' }, year: 1967, url: '', price: 800, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Lacquer on galvanized iron sculpture, hung on wall.', medium: 'Sculpture', dimensions: [194.6, 65.1, 37.2], quantity: 1},
	{title: 'untitled (stack)', artist: {name: 'Donald Judd' }, year: 1967, url: '', price: 2000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [22.8, 101.6, 78.7], quantity: 1},
	{title: 'untitled 5', artist: {name: 'Donald Judd' }, year: 1967, url: '', price: 500, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [91.6, 66.2, 5.5 ], quantity: 1},
	//Kenneth Noland
	{title: 'Turnsole', artist: {name: 'Kenneth Noland' }, year: 1961, url: '', price: 1000, tags: ['Geometric', 'Yellow', 'Pastel', 'Black'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [94, 0, 94], quantity: 1},
	{title: 'Sounds in the Summer Night', artist: {name: 'Kenneth Noland' }, year: 1962, url: '', price: 1000, tags: ['Geometric', 'Red', 'Yellow', 'Blue'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [69, 0, 70], quantity: 1 },
	{title: 'Blue Veil', artist: {name: 'Kenneth Noland' }, year: 1963, url: '', price: 1000, tags: ['Geometric', 'Blue', 'Rose', 'Pink'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [69, 0, 69], quantity: 1 },
	{title: 'Untitled', artist: {name: 'Kenneth Noland' }, year: 1973, url: '', price: 1000, tags: ['Geometric', 'Pastel', 'Red'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [9, 0, 12], quantity: 1},
	{title: 'Horizontal Stripes', artist: {name: 'Kenneth Noland' }, year: 1978, url: '', price: 1000, tags: ['Geometric', 'Red', 'Blue'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [50, 0, 33], quantity: 1},
	{title: 'Trans Shift', artist: {name: 'Kenneth Noland' }, year: 1964, url: '', price: 1000, tags: ['Geometric', 'Blue', 'Green'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [100, 0, 113], quantity: 1},
	//Dan Flavin
	{title: 'monument for V. Tatlin 1', artist: {name: 'Dan Flavin' }, year: 1968, url: '', price: 2500, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture.', medium: 'Sculpture', dimensions: [60.96, 10, 177.8], quantity: 1},
	{title: 'monument for V. Tatlin 2', artist: {name: 'Dan Flavin' }, year: 1964, url: '', price: 2300, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [60.96, 10, 177.8], quantity: 1},
	{title: 'monument for V. Tatlin 3', artist: {name: 'Dan Flavin' }, year: 1966, url: '', price: 2700, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [60.96, 10, 200.8], quantity: 1},
	{title: 'untitled: for Robert with fond regards', artist: {name: 'Dan Flavin' }, year: 1977, url: '', price: 1800, tags: ['Dan Flavin', 'White', 'Red', 'Orange', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [244.3, 22.9, 243.8], quantity: 1},
	{title: 'greens crossing greens (to Piet Mondrian who lacked green)', artist: {name: 'Dan Flavin' }, year: 1966, url: '', price: 5000, tags: ['Dan Flavin', 'White', 'Green', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [610, 670, 122], quantity: 1},
	{title: 'untitled (to Henri Matisse)', artist: {name: 'Dan Flavin' }, year: 1964, url: '', price: 1500, tags: ['Dan Flavin', 'White', 'Green', 'Pink', 'Yellow', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture',  dimensions: [10, 10, 244], quantity: 1 }

	], product => db.model('products').create(product))

// const seedProductLines = () => db.Promise.map ([


// 	], productLine => db.model('productLine').create(productLine))

// const seedOrders = () => db.Promise.map([

// 	], orders => db.model('order').create(order))



db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
