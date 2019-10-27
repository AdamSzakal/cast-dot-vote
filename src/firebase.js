import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDfgdwAfThtFkMsgbYZJzG4tJeOqWQD3fE",
  authDomain: "castdotvote.firebaseapp.com",
  databaseURL: "https://castdotvote.firebaseio.com",
  projectId: "castdotvote",
  storageBucket: "castdotvote.appspot.com",
  messagingSenderId: "571568256217",
  appId: "1:571568256217:web:3a2c1766b3f3680c2a3ac8",
  measurementId: "G-39S0LFNT8Q"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const pollsRef = databaseRef.child("polls");

/**
 * A Poll is defined as follows:
 * {
 *    question: String
 *    alternatives: Array<String>
 * }
 * @param {Poll} poll
 */
export const submitPoll = poll => {
  pollsRef.push().set(poll);
};
