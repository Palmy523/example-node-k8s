import * as redis from 'async-redis';
import { createClient } from './redis';

const cache = createClient();
cache.set('count', 0);

const increment = async () => {
	cache.incr('count');
}

const decrement = async () => {
	return cache.decr('count');
}

const getCount = async () => {
	return cache.get('count');
}

const resetCount = async () => {
	return cache.set('count', 0);
}

export default {
	increment,
	decrement,
	getCount,
	resetCount
}