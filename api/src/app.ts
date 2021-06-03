import * as express from 'express';
import * as cors from 'cors';
import incrementerAPI from './api/incrementer';

const app = express();

// easy allow origins for local app
app.use(cors());

// Log api calls method and url
app.use((req, res, next) => {
	console.log(`App ${req.method} ${req.originalUrl}`)
	next();
});

// register api routes
incrementerAPI(app);

// base route greeting
app.get('/', (req, res) => {
	return res.json('Welcome to example-node-k8s-api')
});


export default app;