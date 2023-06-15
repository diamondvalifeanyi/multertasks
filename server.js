require ("./Config/famdb.js")

const express = require("express");
const famRoute = require("./Routes/famroute")
const PORT = 9364


const app = express();
app.use( express.json() );
app.use( "/uploads", express.static( "uploads" ) );

app.use('/api', famRoute)

app.listen( PORT, () => {
    console.log(`listening to port: ${ PORT }`);
});