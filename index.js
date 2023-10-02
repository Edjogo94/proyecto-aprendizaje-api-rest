const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// 404 Route
app.use((req, res, next) => {
	res.status(404).send("404 Page Not Found");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
