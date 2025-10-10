### Weather App

# Features

- Search for the weather in any city:

  - displays a summarized description of the current weather in a card, which can be saved or used to open the corresponding details page

- Search autocomplete:

  - receive autocomplete suggestions for popular cities or fall back on recent searches (if there are no suggestions or the search field is empty)

- Browse popular locations:

  - as the Weather API only allows to search for one place, an array with around 300 cities is used (this allows for loading, pagination etc.)
  - Pagination and selectable number of forecasts per page are supported

- Favorites page:

  - any city can be added to favorites (and removed) - this is a way to pin them and check them out faster
  - the favorites are persisted in the local storage, so that a refresh doesn't wipe them out

- Details page:

  - each city's details page can be generated dynamically based on the URL params
  - includes more detailed information and forecasts for the following 5 days

- Theme selection:

  - dark mode is fully supported
  - the theme choice is also persisted in the local storage

- Error page:

  - handles attempts to access nonexistent pages

- Loading state:

  - a spinner or appropriate text is used to inform the user that a resource is being loaded

- Responsiveness

- Simulate Error Boundary application in details page

## How to run

- Make sure to provide a API key in the env file (I will send mine in the task assignment)
- npm run dev
