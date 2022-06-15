import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

import firebaseconfig from './firebaseconfig';

const firebaseApp = firebase.initializeApp(firebaseconfig);
const db = firebaseApp.firestore();
// export const storage = firebase.storage();


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
        results.forEach(user => list.push(user.data()));
        return list;
    },
    listRecipes: async () => {
        let list = [];
        let results = await db.collection('recipes').get();
        results.forEach(recipe => list.push(recipe.data()));
        return list;    
    },
    addRecipe: async (recipe) => {  
        let createdRecipe = await db.collection('recipes').add(recipe)
        return createdRecipe.get()
    }
}