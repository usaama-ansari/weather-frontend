

 # Weather app Frontend - (React.js)
  ----------------------------------------------------------------------------------------------
 ### Synopsis
 This is frontend for a Weather App. It uses the [open weather api's](https://openweathermap.org) via Node js Backend.
 It serves the following use cases:
 - To add city to the list of existing cities in database.
 - To fetch all cities stored in database and display in a list.
 - To fetch current weather data for a city selected from list and display current and 5 days forecasted data.
 ----------------------------------------------------------------------------------------------
 ###### This project is setup using:
   - **Yarn** version 3.1.1. See [this](https://yarnpkg.com/getting-started/install) to install **Yarn** in your system.
   - **NODE JS** version 18.12.0 | [Node installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)
   - **React.js** framework version 18.2.0 (created via create-react-app utility)
  
 #### Best Practices adopted
- BDD style functional tests (only limited components have been tested for time constraints)
- Pre-commit hook via husky and lint-staged
- prettier
- editorconfig
- eslint
- Dependency Injection via inversify
# Installation

##### Install Node version v18.12.0
 Install Node via NVM. [Source]("https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04")

##### Run the project

Checkout to master
   ```sh
   git checkout master
   ```
   install dependencies:
   ```sh
   yarn install
   ```
   
   Start the development server:
   ```sh
   yarn start
   ```
   # Folder structure
   --------------------------------------------------------------------------------------------
   ##### Folder Structure:
   - **components** - Contains reusable components. Most of them are presentational
   - **config** - contains configuration for app
   - **constants** - contains contant values used application wide.
   - **context** - Contains react contexts.
   - **features** - This houses all the main features the app is build upon.
   - **helpers** - contains tooling and other helpers
   - **mockedServer** - contains mocked server handlers which override axios at runtime. 
   - **routes** - contains routes for the whole app
   - **services** - Services to serve api needs
   - **types** - contains root typescript typings
----------------------------------------------------------------------------------------------
  # Path Aliases
 
  This is a very usefull feature supported by typescript via `ts-config.json`.However with react it works with a little workaround. It uses [`craco`](https://craco.js.org/) to enable path aliases with `create-react-app`.
  To save you from typing the complete relative path of this sort `../../../../......./to-some-folder`, what this alows you to do is declare aliases in `ts-config` file. So that above path becomes `@Shared/to-some-folder`.
  
  Some pre-configured aliases are present with this base structure:
  ```json
  "paths": {
      "@Components/*": ["components/*"],
      "@Features/*": ["features/*"],
      "@Routes": ["routes"],
      "@Context/*": ["context/*"],
      "@Constants/*": ["constants/*"],
      "@Helpers/*": ["helpers/*"],
      "@Types": ["types"],
      "@Config": ["config"],
      "@Services": ["services"]
    }
```

You can extend path aliases further. See this [guide](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
