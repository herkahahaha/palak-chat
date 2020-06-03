import * as firebase from 'firebase/app'
// eslint-disable-next-line no-unused-vars
import 'firebase/firestore'

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyDaqsZBNeap1UvxXPJBxSWg8-uAtgWn3dQ',
  authDomain: 'hei-vue.firebaseapp.com',
  databaseURL: 'https://hei-vue.firebaseio.com',
  projectId: 'hei-vue',
  storageBucket: 'hei-vue.appspot.com',
  messagingSenderId: '457430785920',
  appId: '1:457430785920:web:65413071762102d4ec6b65',
  measurementId: 'G-YWZLGX8ZPS'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
