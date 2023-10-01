const app = require("./app");

let port = 3045;

app.listen(port, () => {
	console.log("La API se esta ejecutando en el puerto " + port);
});
