/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyCY18QGdy0lI_B3rr2_OMt8vTLdRqxWyO0",
  authDomain: "friendlychat-84806.firebaseapp.com",
  projectId: "friendlychat-84806",
  storageBucket: "friendlychat-84806.appspot.com",
  messagingSenderId: "339805051355",
  appId: "1:339805051355:web:8eff0be2f11517901c6ffe",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
