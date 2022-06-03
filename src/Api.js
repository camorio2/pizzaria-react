import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import firebaseconfig from './firebaseconfig';



const firebaseApp = firebase.initializeApp(firebaseconfig);
const db = firebaseApp.firestore();

export default {

    createUser: async (u) => {
        return await db.collection('users').doc(u.id).set({
            name: u.name,
            email: u.email,
            password: u.password
        }, { merge: true });
    },
    listUsers: async () => {
        let list = [];
        let results = await db.collection('users').get();

    
        console.log(results)
        return list;
    },
}