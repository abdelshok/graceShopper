<div align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/20652426/83822564-66078080-a69f-11ea-838c-0b5164a85631.png" width="100" />
</div>

<h2 align="center">
  Politics Ajar
</h2>

<p align="center">
E-Commerce Platform selling minimalist art created throughout our time at [Fullstack Academy](https://www.fullstackacademy.com/). Users authenticate through OAuth, sort through a list of art pieces, filter by artist name, color,title, and medium, add items to their shopping cart, and purchase them with fictional debit or credit cards. 
</p>


<div align="center">
  <img alt="artShop" src="https://user-images.githubusercontent.com/20652426/83822518-44a69480-a69f-11ea-8620-e640acc091b7.png"/>
</div>

<h3 marginTop="20px">
These technologies were used:
</h3>

- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux](https://redux.js.org/)
- [Express JS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Documentation

### Start

Short and sweet:

```sh
npm install
npm run dev
```

The `dev` script sets `NODE_ENV` to "development", runs the build script in watch mode, and
starts the server with `nodemon`. Build vs server logs are separated by a prefix. If you prefer
to run the server and build processes separately, you can instead do:

```sh
npm run start-dev
```

```sh
npm run build-dev
```

In two separate terminals. The vanilla `npm start` is for production — you won't use it in development!

### Anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)

### Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

I use two spaces, no semi-colons, and trailing commas where possible. I'll
have a linter someday soon.

### Quick Heroku deployment

1. Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli) and install [Yarn](https://yarnpkg.com/en/) if you haven't already (`npm install -g yarn`)
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add postgres
    3. `npm run deploy-heroku`. This will create a new branch and compile and commit your frontend JS to it, then push that branch to Heroku.
    4. `heroku run npm run seed` to seed the database

  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

Afterwards,
  - *To deploy:* `npm run deploy-heroku`
  - *To re-seed:* `heroku run npm run seed`
