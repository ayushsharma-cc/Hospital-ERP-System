
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import Routes
const employeeRoutes = require('./src/routes/employee.routes.js');
const patientRoutes = require('./src/routes/patient.routes.js');
const labRoutes = require('./src/routes/labRoutes.js');
const billingRoutes = require('./src/routes/billingRoutes.js');
const inventoryRoutes = require('./src/routes/inventoryRoutes.js');
const hrRoutes = require('./src/routes/hrRoutes.js');  // Corrected typo



// Initialize Express App
const app = express();

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Hospital ERP System API');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Routes
app.use('/api/employees', employeeRoutes);    // Employee management
app.use('/api/patients', patientRoutes);      // Patient management
app.use('/api/laboratory', labRoutes);        // Laboratory tests
app.use('/api/billing', billingRoutes);       // Billing management
app.use('/api/inventory', inventoryRoutes);   // Inventory management
app.use('/api/hr', hrRoutes);                 // HR management

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});