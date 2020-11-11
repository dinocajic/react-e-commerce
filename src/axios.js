import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-9961f/us-central1/api', // API URL (cloud function)
});

export default instance;