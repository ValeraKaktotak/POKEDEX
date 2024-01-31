// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { UserCredential } from '../node_modules/@firebase/auth/dist/auth-public.d'

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
export const db = getFirestore(app)

// Hook for logIn
export const userLogIn = async (
  email: string,
  password: string
): Promise<UserCredential | any> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    console.log(error.code, error.message)
  }
}

// Hook for registration
export interface IRegistrationUser {
  firstName: string
  lastName: string
  email: string
  city: string
  password: string
}
export const userRegistration = async (
  user: IRegistrationUser
): Promise<UserCredential | any> => {
  try {
    return await createUserWithEmailAndPassword(auth, user.email, user.password)
  } catch (error: any) {
    console.log(error)
  }
}
