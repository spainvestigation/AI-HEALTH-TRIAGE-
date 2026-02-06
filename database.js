// database.js

/**
 * This module manages user data and medical history using localStorage.
 */

const LocalStorageKey = 'userData';

/**
 * Saves user data to localStorage.
 * @param {Object} data - The user data to be saved.
 */
function saveUserData(data) {
    const existingData = getUserData() || {};
    const updatedData = { ...existingData, ...data };
    localStorage.setItem(LocalStorageKey, JSON.stringify(updatedData));
}

/**
 * Retrieves user data from localStorage.
 * @returns {Object} - The user data retrieved from localStorage.
 */
function getUserData() {
    const data = localStorage.getItem(LocalStorageKey);
    return data ? JSON.parse(data) : null;
}

/**
 * Clears user data from localStorage.
 */
function clearUserData() {
    localStorage.removeItem(LocalStorageKey);
}

/**
 * Saves medical history to localStorage.
 * @param {Array} medicalHistory - The medical history to be saved.
 */
function saveMedicalHistory(medicalHistory) {
    const existingHistory = getMedicalHistory() || [];
    const updatedHistory = [...existingHistory, ...medicalHistory];
    localStorage.setItem('medicalHistory', JSON.stringify(updatedHistory));
}

/**
 * Retrieves medical history from localStorage.
 * @returns {Array} - The medical history retrieved from localStorage.
 */
function getMedicalHistory() {
    const history = localStorage.getItem('medicalHistory');
    return history ? JSON.parse(history) : [];
}

/**
 * Clears medical history from localStorage.
 */
function clearMedicalHistory() {
    localStorage.removeItem('medicalHistory');
}

// Export the functions for use in other modules.
export { saveUserData, getUserData, clearUserData, saveMedicalHistory, getMedicalHistory, clearMedicalHistory };