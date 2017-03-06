'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const amazonRoute = 'https://s3.amazonaws.com/art-auction/'




const seedUsers = () => db.Promise.map([
  {name: 'Christine', email: 'christine@gshop.com', password: '1234'},
  {name: 'Abdel', email: 'Abdel@gshop.com', password: '1234'},
  {name: 'Brian', email: 'Brian@gshop.com', password: '1234'},
  {name: 'Arnoldo', email: 'Arnoldo@gshop.com', password: '1234'},

], user => db.model('users').create(user))

const seedArtists = () => db.Promise.map([
	{name: 'Frank Stella'},
	{name: 'Agnes Martin'},
	{name: 'Donald Judd'},
	{name: 'Kenneth Noland'},
	{name: 'Dan Flavin'}
	], artist => db.model('artists').create(artist))


const seedProducts = () => db.Promise.map([

	//Frank Stella
	{title: 'Ifafa I', artist_id: 1, year: 1968, url: amazonRoute + 'Ifafa_I_Frank_Stella.jpg', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Pink', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 2, artistName: 'Frank Stella'},
	{title: 'Ifafa II', artist_id: 1, year: 1968, url: amazonRoute + 'Ifafa_II_Frank_Stella.jpg', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Blue', 'Orange', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [49.1, 0, 28.2], quantity: 1, artistName: 'Frank Stella'},
	{title: 'Itata', artist_id: 1, year: 1968, url: amazonRoute + 'Itata_Frank_Stella.jpg', price: 500, tags: ['Frank Stella', 'V Series', 'Print', 'Grey', 'Green', 'Geometric'], description: 'Geometric lithograph from the V Series.', medium: 'Print', dimensions: [28.4, 0, 49.2], quantity: 1, artistName: 'Frank Stella'},
	{title: 'Harran II', artist_id: 1, year: 1967, url: amazonRoute + 'Harran_II_Frank Stella.jpg', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ], description: 'Lyrical and multi-colored painting, based on the semicircular drafting instrument used for measuring and constructing angles.', medium: 'Painting', dimensions: [609.6, 0, 304.8], quantity: 1, artistName: 'Frank Stella'},
	{title: 'Firuzabad', artist_id: 1, year: 1970, url: amazonRoute + 'Firuzabad_Frank_Stella.png', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Black', 'Blue', 'Circular' ], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [458.47, 0, 304.8], quantity: 1 , artistName: 'Frank Stella'},
	{title: 'Gur I', artist_id: 1, year: 1968, url: amazonRoute + 'Gur_I_Frank_Stella.jpg', price: 2000, tags: ['Frank Stella', 'Painting', 'Multi-colored', 'Circular' ], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [458.47, 0, 304.8], quantity: 1, artistName: 'Frank Stella'},
	//Agnes Martin
	{title: 'White Flower', artist_id: 2, year: 1960, url: amazonRoute + 'White_Flower_Agnes_Martin.jpg', price: 4999, tags: ['Agnes Martin', 'Abstract', 'Geometric', 'Grey'], description: 'Monochromatic paintings inspired by the desert terrain of New Mexico', medium: 'Painting', dimensions: [72.87, 0, 72], quantity: 1, artistName: 'Agnes Martin'},
	{title: 'Untitled', artist_id: 2, year: 1977, url: amazonRoute + 'Untitled_Agnes_Martin.jpg', price: 5000, tags: ['Agnes Martin', 'Abstract', 'Post-Minimalism', 'Pastel'], description: 'Inspired by her in interest in Taoism and Zen Buddhism, Martin\'s watercolors paintings feature lateral expanses of delicately colored washes rich in atmospheric effect', medium: 'Painting', dimensions: [9, 0, 9], quantity: 1, artistName: 'Agnes Martin'},
	{title: 'Untitled Number 9', artist_id: 2, year: 1995, url: amazonRoute + 'Untitled_Number_9_Agnes_Martin.jpg', price: 5000, tags: ['Agnes Martin', 'Abstract', 'Pastel', 'Blue', 'Rose'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [60, 0, 60], quantity: 1, artistName: 'Agnes Martin'},
	{title: 'Night Sea', artist_id: 2, year: 1963, url: amazonRoute + 'Night_Sea_Agnes_Martin.jpg', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Blue', 'Geometric'], description: 'Although the painting does not obviously depict a "night sea," the two brilliant hues of blue are under-painted with a gold leaf grid that shimmers and seems to move like light reflecting on an expanse of water, of which she had a view from her studio on the East River.', medium: 'Painting', dimensions: [72, 0, 72], quantity: 1, artistName: 'Agnes Martin'},
	{title: 'Untitled Number 5', artist_id: 2, year: 1975, url: amazonRoute + 'Untitled_Number_5_Agnes_Martin.jpg', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Pastel', 'Orange', 'Blue', 'Lavender'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [72.87, 0, 72], quantity: 1 , artistName: 'Agnes Martin'},
	{title: 'PRAISE', artist_id: 2, year: 1976, url: amazonRoute + 'PRAISE_Agnes_Martin.jpg', price: 5000, tags: ['Agnes Martin', 'Abstract',  'Pastel', 'Pink'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [8, 0, 8], quantity: 1, artistName: 'Agnes Martin'},
	//Donald Judd
	{title: 'untitled 1', artist_id: 3, year: 1969, url: amazonRoute + 'untitled_1_Donald_Judd.jpg', price: 3000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale copper sculpture hung on wall', medium: 'Sculpture', dimensions: [101.6, 78.7, 457.2], quantity: 1, artistName: 'Donald Judd'},
	{title: 'untitled 2', artist_id: 3, year: 1973, url: amazonRoute + 'untitled_2_Donald_Judd.jpg', price: 2000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Box-like sculpture made of metal and wood', medium: 'Sculpture', dimensions: [83.82, 172.7, 121.9 ], quantity: 1, artistName: 'Donald Judd'},
	{title: 'untitled 3', artist_id: 3, year: 1973, url: amazonRoute + 'untitled_3_Donald_Judd.jpg', price: 3500, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [86.4, 86.4, 619.8], quantity: 1, artistName: 'Donald Judd'},
	{title: 'untitled 4', artist_id: 3, year: 1967, url: amazonRoute + 'untitled_4_Donald_Judd.jpg', price: 800, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Lacquer on galvanized iron sculpture, hung on wall.', medium: 'Sculpture', dimensions: [194.6, 65.1, 37.2], quantity: 1, artistName: 'Donald Judd'},
	{title: 'untitled (stack)', artist_id: 3, year: 1967, url: amazonRoute + 'untitled_stack_Donald_Judd.jpg', price: 2000, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [22.8, 101.6, 78.7], quantity: 1, artistName: 'Donald Judd'},
	{title: 'untitled 5', artist_id: 3, year: 1967, url: amazonRoute + 'untitled_5_Donald_Judd.jpg', price: 500, tags: ['Donald Judd', 'Metal', 'Sculpture'], description: 'Largescale metal sculpture, hung on wall', medium: 'Sculpture', dimensions: [91.6, 66.2, 5.5 ], quantity: 1, artistName: 'Donald Judd'},
	//Kenneth Noland
	{title: 'Turnsole', artist_id: 4, year: 1961, url: amazonRoute + 'Turnsole_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Yellow', 'Pastel', 'Black'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [94, 0, 94], quantity: 1, artistName:'Kenneth Noland'},
	{title: 'Sounds in the Summer Night', artist_id: 4, year: 1962, url: amazonRoute + 'Sounds_in_the_Summer_Night_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Red', 'Yellow', 'Blue'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [69, 0, 70], quantity: 1 , artistName:'Kenneth Noland'},
	{title: 'Blue Veil', artist_id: 4, year: 1963, url: amazonRoute + 'Blue_Veil_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Blue', 'Rose', 'Pink'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [69, 0, 69], quantity: 1 , artistName:'Kenneth Noland'},
	{title: 'Untitled', artist_id: 4, year: 1973, url: amazonRoute + 'Untitled_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Pastel', 'Red'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [9, 0, 12], quantity: 1, artistName:'Kenneth Noland'},
	{title: 'Horizontal Stripes', artist_id: 4, year: 1978, url: amazonRoute + 'Horizontal_Stripes_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Red', 'Blue'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [50, 0, 33], quantity: 1, artistName:'Kenneth Noland'},
	{title: 'Trans Shift', artist_id: 4, year: 1964, url: amazonRoute + 'Trans_Shift_Kenneth_Noland.jpg', price: 1000, tags: ['Geometric', 'Blue', 'Green'], description: 'A largescale painting with a striking color palette and composition', medium: 'Painting', dimensions: [100, 0, 113], quantity: 1, artistName:'Kenneth Noland'},
	//Dan Flavin
	{title: 'monument for V. Tatlin 1', artist_id: 5, year: 1968, url: amazonRoute + 'monument_for_V_Tatlin_Dan_Flavin-1.jpg', price: 2500, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture.', medium: 'Sculpture', dimensions: [60.96, 10, 177.8], quantity: 1, artistName: 'Dan Flavin'},
	{title: 'monument for V. Tatlin 2', artist_id: 5, year: 1964, url: amazonRoute + 'monument_for_V_Tatlin_Dan_Flavin_2.jpg' , price: 2300, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [60.96, 10, 177.8], quantity: 1, artistName: 'Dan Flavin'},
	{title: 'monument for V. Tatlin 3', artist_id: 5, year: 1966, url: amazonRoute + 'monument_for_V_Tatlin_Dan_Flavin_3.jpg', price: 2700, tags: ['Dan Flavin', 'White', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [60.96, 10, 200.8], quantity: 1, artistName: 'Dan Flavin'},
	{title: 'untitled: for Robert with fond regards', artist_id: 5, year: 1977, url: amazonRoute + 'untitled_for_Robert_with_fond_regards_Dan_Flavin.jpg', price: 1800, tags: ['Dan Flavin', 'White', 'Red', 'Orange', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [244.3, 22.9, 243.8], quantity: 1, artistName: 'Dan Flavin'},
	{title: 'greens crossing greens (to Piet Mondrian who lacked green)', artist_id: 5, year: 1966, url: amazonRoute + 'greens_crossing_creens_Dan_Flavin.jpg', price: 5000, tags: ['Dan Flavin', 'White', 'Green', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture', dimensions: [610, 670, 122], quantity: 1, artistName: 'Dan Flavin'},
	{title: 'untitled (to Henri Matisse)', artist_id: 5, year: 1964, url: amazonRoute + 'untitled_to_henri_matisse_Dan_Flavin.jpg', price: 1500, tags: ['Dan Flavin', 'White', 'Green', 'Pink', 'Yellow', 'Sculpture', 'Light Sculpture'], description: 'Light sculpture', medium: 'Sculpture',  dimensions: [10, 10, 244], quantity: 2 , artistName: 'Dan Flavin'}

	], product => db.model('products').create(product))

const seedOrders = () => db.Promise.map([
	{status: 'cart', user_id: 1},
	{status: 'cart', user_id: 2}
	], orders => db.model('orders').create(orders))

const seedProductLines = () => db.Promise.map ([
	{quantity: 2, unitCost: 1500, product_id: 30, order_id: 1},
	{quantity: 1, unitCost: 500, product_id: 5, order_id: 1},
	{quantity: 2, unitCost: 500, product_id: 1, order_id: 2},
	{quantity: 1, unitCost: 500, product_id: 10, order_id: 2},
	], productLine => db.model('productLines').create(productLine))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedArtists)
  .then(artists => console.log(`Seeded ${artists.length} artists OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedProductLines)
  .then(productLines => console.log(`Seeded ${productLines.length} productLines OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())


