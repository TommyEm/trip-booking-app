# Trip Booking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build-dt`

Builds the design token files.

### `yarn storybook`

Launches Storybook.

### `yarn build-storybook`

Builds Storybook for production.


## Deploy with Docker

First, build the Docker image:

```
docker build -t trip_booking_app .
```

Then run a container from the image:

```
docker run -d --name trip_booking_app -p 8010:80 trip_booking_app
```

On a local machine, the app should now be accessible at `http://localhost:8010`.