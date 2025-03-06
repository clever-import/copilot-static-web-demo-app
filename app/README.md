# README.md

# Solar System Information Website

Welcome to the Solar System Information Website project! This project is designed to provide users with detailed information about the solar system, including the Sun and the planets.

## Project Structure

The project is organized as follows:

```
app
├── src
│   ├── public
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── main.js
│   │   └── views
│   │       ├── index.html
│   │       ├── about.html
│   │       └── contact.html
│   ├── server.js
│   └── routes
│       └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Home Page (index.html)**: Displays information about the solar system, including details about the Sun and the planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto.
- **About Page (about.html)**: Provides information about the creators of the website, who are a small group of astronomy enthusiasts with a mission to educate and share information about the planets.
- **Contact Page (contact.html)**: Contains a contact form that collects user information, including First Name, Last Name, Email, Country, and a large text field for users to share their anecdotes.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap (for styling and components)
- Node.js (for server-side JavaScript)
- Express.js (for serving the static website)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   node src/server.js
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.