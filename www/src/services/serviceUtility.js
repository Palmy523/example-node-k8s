import * as axios from 'axios';

// TODO replace this with value from environment (on docker-compose)
console.log(`using API_ROUTE: ${process.env.VUE_APP_API_ROUTE}`);

const API_ROUTE = process.env.VUE_APP_API_ROUTE || 'http://localhost:8000/';

/*
  Wrap axios requests by passing the proper api domain to the requests
 */
export const post = async (route, body) => {
	return axios.post(`${API_ROUTE}${route}`, body);
}
export const get = async (route) => {
	return axios.get(`${API_ROUTE}${route}`);
}
export const del = async (route) => {
	return axios.delete(`${API_ROUTE}${route}`);
}

export default {
	post,
	get,
	del
}