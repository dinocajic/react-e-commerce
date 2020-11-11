const functions = require('firebase-functions');
const express   = require('express');
const cors      = require('cors');
const stripe    = require('stripe')('your-stripe-secret-key');

// Setup the express app API

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of currency
        currency: 'usd',
    });

    // Created OK
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint: testing environment
// http://localhost:5001/e-commerce-9961f/us-central1/api