import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/e-commerce-9961f/us-central1/api', // API URL (cloud function)
    baseURL: 'https://us-central1-e-commerce-9961f.cloudfunctions.net/api'
});

export default instance;