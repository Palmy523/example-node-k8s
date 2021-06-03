const redis = require('async-redis');

// Max number of times to attempt reconnect if connection can't be made
const REDIS_MAX_ATTEMPTS : number = process.env.REDIS_MAX_ATTEMPTS ? Number(process.env.REDIS_MAX_ATTEMPTS) : 10;
// Retry wait timeout factor in ms
const REDIS_RETRY_FACTOR_MILLISECONDS : number = process.env.REDIS_RETRY_FACTOR_MILLISECONDS ? Number(process.env.REDIS_RETRY_FACTOR_MILLISECONDS) : 5000;
// Redis host name
const REDIS_HOST : string = process.env.REDIS_HOST ? String(process.env.REDIS_HOST) : 'redis://redis'; // Default redis host for docker-compose
// Redis port
const REDIS_PORT : number = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379;
// Redis url from environment or formed via host and port
const REDIS_URL : string = process.env.REDIS_URL ? String(process.env.REDIS_URL) : String(`${REDIS_HOST}:${REDIS_PORT}`);

const retry_strategy = ({ attempt }) => {
  if (attempt > REDIS_MAX_ATTEMPTS) {
    console.log('Redis max connection retrys exceeded');
    return false;
  } else {
    const retryInTime = attempt * REDIS_RETRY_FACTOR_MILLISECONDS;
    console.error(`Failed to connect to Redis, retrying in ${retryInTime}ms [attempt=${attempt}]`);
    return retryInTime;
  }
};

export const createClient = () => {
  console.log(`Creating redis client [host=${REDIS_HOST}, port=${REDIS_PORT}]`);
  const client = redis.createClient({
    url: REDIS_URL
  });
  return client;
};

export default createClient;