# To run the application locally:

1. Go to the folder `CHALLENGE-MT3`.
2. In the console run the command: `npm install`.
3. In the console run the command: `npm run dev`.
4. The console should create a link like this: `http://localhost:5173/`.
5. Open the link.

# To run tests:

1. Go to the folder `CHALLENGE-MT3`.
2. In the console run the command: `npm run test`.

# PROJECT REQUIREMENTS 🚩

- [X] Only front-end technologies are allowed.
- [X] The application looks like the wireframe. The color to be used in the application is `#43ED3F`.
- [X] JS Framework: React.
- [X] When you click on the first crossed-square in the wireframe, it should display a form to add a new pending to the dashboard. Fields: Priority, text, status. Statuses allowed: Active, Done, Deleted.
- [X] There should be a way to mark the pendings as "Done".
- [X] The cards with "Done" status are not displayed in the dashboard.
- [X] The "Active" and "Done" counters are incremented according to the action performed.
- [X] The pending card is draggable to place it wherever the user needs it in the Dashboard.
- [X] The pendings could be deleted from the dashboard once created.
- [X] The cards with "Done" and "Deleted" statuses are not displayed in the dashboard.

## Extras

- [X] "Due date" is included. Rules: If the tasks should be completed within the current or the next day, the card color should be `#FFD6D6`. Otherwise, the color is `#FFFFFF`.
- [X] Sort by "due date".
- [X] Validations.
- [X] The application should not allow duplicated descriptions.
- [X] The application is published on GitHub Pages. Please share the application link.


# About the project 📃

The project was created with `vite`, as it provides more advantages compared to the traditional "Create React app" (CRA) version: 
- Faster Development and Hot Module Replacement (HMR): extremely fast development server. It leverages native ES modules in the browser, which allows for faster cold and hot module reload times, is significantly faster and more responsive compared to CRA, making the development process smoother.
- ESM (ES Modules) Support: Natively supports ES modules, which can lead to a more efficient bundling process and smaller bundle sizes, resulting in faster load times for your application.
- Plugin System: Has a flexible and extensible plugin system, allowing you to easily integrate tools and libraries like `TypeScript`, and more.
- No Bundling in Development:
`vite` serves your code unbundled in development, which means that your code is served as-is, without the need for extensive bundling. This results in quicker builds and faster development feedback.
- Tree Shaking: Makes it easier to implement tree shaking, a technique for eliminating dead code from your production bundles. This helps in reducing the size of your final bundle, which is crucial for improving application performance.
- Simplicity: Has a simpler and more minimal configuration setup compared to the configuration-heavy approach of CRA. 

* To improve the development experience, `Prettier`, `Eslint` and `Jest` were installed.
* Only `Material` (and its dependencies) and `redux` libraries were installed.
* Clean architectural design was used.

# FEATURES 🎉
- File names come with this format "name.type.extension", example: `card.component.jsx`, this way it is easier to search with VS Code for file types.
- A custom hook was created to sort the cards by dragging them on the dashboard in order to avoid using external libraries.
- The hook `useCount` was created to return the total number of "Active" and "Done", if there was only one data as a counter it would have been better to increase the counter manually but this method allows counting more properties.
- Constants such as `PRIORITIES` and `STATUS` were created to have a reference that in the future can be modified without affecting the result of the app or manually change the values of all files where needed (An effect similar to having an .env).
- For the action "Sort by due date" I updated the state, in case a text filter would have been required as well, I would have created a `ref` to save the original value instead of creating another state, with this I avoid making unnecessary renders to the page.
- A method was created to generate unique IDs in order to install external libraries.
- Several tests were created mainly to test the methods of 'utils'; These tests can be verified by typing in the console (inside the `CHALLENGE-MT3` folder) the following command: `npm run test`.
- The raw test files are located in the folder `__mocked__`.
- I added buttons to delete cards and a select to change the status. In case there were more actions like 'edit', 'reschedule' I would have hidden the actions and only make them appear when hovering, this in order not to visually saturate the user (#UX).
- I used this method to sort the dates: `pendings.toSorted((a, b) => new Date(a.dueDate) - new Date(b.dueDate));` unlike `Sort`, `toSorted` does not directly mutate the state, it creates a copy of the array internally, which would be equivalent to cloning the array first: `[...pendings].Sort();` 

## UX
- Instead of displaying the date in "mm/dd/yyy" format I decided to use a more 'understandable' language example: "2 days ago", "In two days", "Today", "Tomorrow", I achieved this by converting the date with: `Intl.RelativeTimeFormat("en", { numeric: "auto" });` (The code is in the `Utils` folder -> `timeAgo.js`).
- I used colors to identify the "priorities", these priorities were not specified in the requirements so I assigned 3: "High", "Medium" and "Low".

## UI
- Responsive design with Material & grid.
- Added icons.

# Things to improve
- Use TypeScript with a folder for interfaces.
- Use 'adapters' to transform data before passing it through Redux.
- Theme configuration for Material, as some colors are static.
- I would have created a `Select` component to avoid repeating it in the code.
- Improve the application of some colors and contrast.