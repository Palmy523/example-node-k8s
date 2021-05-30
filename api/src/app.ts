import * as express from 'express';
import * as cors from 'cors';

import incrementer from './redis/incrementer';

const app = express();
let count = 0;

app.use(cors());

app.get('/', (req, res) => {
	return res.json('Welcome to example-node-k8s-api')
});
/**
 * Adds 1 to the counter value
 */
app.post('/increment', async (req, res) => {
	//Incrememnt value
	console.log('APP POST /increment');
	// count +=1;
	await incrementer.increment();
	const count = await incrementer.getCount();
	return res.json({ count });
});

app.post('/decrement', async (req, res) => {
	//Incrememnt value
	console.log('APP POST /decrement');
	await incrementer.decrement();
	const count = await incrementer.getCount();
	return res.json({ count });
});

/**
 * Reset the counter value 
 */
app.delete('/increment', async (req, res) => {
	// Reset increment value to 0
	console.log('APP DELETE /increment');
	await incrementer.resetCount();
	const count = await incrementer.getCount();
	res.json({ count });
});

/**
 * Get the counter value	
 */
app.get('/increment', async (req, res) => {
	// Get increment value
	console.log('APP GET /increment');
	const count = await incrementer.getCount();
	return res.json({ count });
});

export default app;