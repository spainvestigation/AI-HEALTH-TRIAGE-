// api.js

// Backend API integration for health triage

const axios = require('axios');

const BASE_URL = 'https://api.example.com'; // Replace with actual API URL

// Function to fetch health data
async function fetchHealthData(userId) {
    try {
        const response = await axios.get(`${BASE_URL}/health-data/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching health data:', error);
        throw error;
    }
}

// Algorithm for triaging patients based on health data
function triagePatient(healthData) {
    // Simple triage algorithm based on vital signs
    if (healthData.heartRate > 100 || healthData.bloodPressure > 180) {
        return 'High Priority';
    } else if (healthData.heartRate > 80 || healthData.bloodPressure > 140) {
        return 'Medium Priority';
    } else {
        return 'Low Priority';
    }
}

module.exports = { fetchHealthData, triagePatient };