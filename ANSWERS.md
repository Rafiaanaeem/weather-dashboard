## 1. How to run the project

To run this project on a fresh machine:

1. Download or clone the repository
2. Open the project folder
3. Open `index.html` in any modern browser (Chrome recommended)
4. Make sure your internet is working
5. Ensure a valid OpenWeather API key is added inside `script.js`

No additional installations or setup are required.

---

## 2. Stack choice

I used HTML, CSS, and JavaScript for this project.

I chose this stack because it is simple, lightweight, and ideal for building a small interactive web application without needing any backend or framework. JavaScript’s Fetch API is sufficient to interact with public APIs like OpenWeather.

A worse choice would have been using a heavy framework like React or Angular because it would add unnecessary complexity for a small project like this and slow down development.

---

## 3. One real edge case handled

The application handles invalid city names and API failures.

For example:
- If a user enters a wrong city name, the OpenWeather API returns a 404 error.
- This is handled inside the `getWeather()` function in `script.js`.
- Instead of crashing or showing broken data, the app displays a user-friendly message: "City not found".

If this was not handled, the application would either break or show undefined values in the UI.

---

## 4. AI usage

I used ChatGPT during the development of this project for:

- Structuring the project workflow
- Designing the UI layout and styling ideas
- Understanding API integration using Fetch in JavaScript
- Debugging errors related to API responses and UI rendering

In some cases, I modified the AI-generated code to improve clarity, remove unnecessary complexity, and adjust the UI behavior according to my design preferences.

---

## 5. Honest gap

One limitation of this project is that it does not store search history or previous results.

If I had more time, I would improve this by adding:
- Local storage to save recent searches
- A history dropdown for quick access
- Better user personalization features

Additionally, the project could be enhanced further by adding weather forecasts for upcoming days.