// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjng_H_r294YuDhpXd8i0YISP1wx87kTY',
  authDomain: 'pokedex-project-a6f12.firebaseapp.com',
  projectId: 'pokedex-project-a6f12',
  storageBucket: 'pokedex-project-a6f12.appspot.com',
  messagingSenderId: '129196721381',
  appId: '1:129196721381:web:b4eb725526a675f0b1c00c',
  measurementId: 'G-SB4EZZ5GBG'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()

export type Collection = 'pokemons' | 'users'
export const db = getFirestore(app)
