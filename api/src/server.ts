import app from './app';

// get the port to server
const port : number = process.env.PORT ? Number(process.env.PORT) : 8000;

// serve the api
app.listen(port, () => { console.log(`App listening on port ${port}`); });