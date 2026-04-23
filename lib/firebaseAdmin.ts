import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function assertEnv(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing Firebase admin env var: ${name}`);
  }
}

export function getAdminDb() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  assertEnv('FIREBASE_PROJECT_ID', projectId);
  assertEnv('FIREBASE_CLIENT_EMAIL', clientEmail);
  assertEnv('FIREBASE_PRIVATE_KEY', privateKey);

  const adminApp =
    getApps().length > 0
      ? getApps()[0]
      : initializeApp({
          credential: cert({
            projectId,
            clientEmail,
            privateKey
          })
        });

  return getFirestore(adminApp);
}
