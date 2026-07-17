// Firebase Configuration

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

databaseURL: "YOUR_DATABASE_URL",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_STORAGE_BUCKET",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


// Firebase Services

const auth = firebase.auth();

const database = firebase.database();

const storage = firebase.storage();
