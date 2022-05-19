const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));



// notes for the package.json:
// concurrently -> when you want to run 2 separate applications that have their own distinct PORT. you want to activate both of them in the same terminal. Client vs Server. 
