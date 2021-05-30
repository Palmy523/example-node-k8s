const redis = require('async-redis');
export const createClient = () => {
	return redis.createClient({
		host: 'redis',
		port: 6379
	});
};

export default createClient;