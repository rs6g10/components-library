This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


## Reusable components
### Checkbox
- A limited React component mimicking native checkbox element without using native `<input type="checkbox" />` element.
- A pure JS solution that can allow to handle state and render a span mimicking a checkbox functionality
- Does not handle onChange as natively as it should but mimics that to onClick event.
- Does not handle `indeterminate` state.

### Usage
```
<Checkbox
  label="Testing"
  value="testing"
  disabled={false|true}
  onClick={function}/>
```

### TODO
Handle following props
- indeterminate
- onChange
- value
