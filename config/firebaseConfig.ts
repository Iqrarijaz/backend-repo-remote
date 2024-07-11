import admin from 'firebase-admin';
import * as serviceAccount from './serviceAccountKey.json';

// Type assertion to ensure proper typing
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://backend-remote-node-ts.firebaseio.com'
});

const db = admin.firestore();
export { db };
