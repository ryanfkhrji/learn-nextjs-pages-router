import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(userData: { email: string; fullname: string; password: string; role?: string }, callback: Function) {
  try {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (data.length > 0) {
      callback({ status: false, message: "Email sudah terdaftar" });
    } else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";
      await addDoc(collection(firestore, "users"), userData);
      callback({ status: true, message: "Register Success" });
    }
  } catch (err: any) {
    callback({ status: false, message: err.message });
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    userData.role = data[0].role;
    try {
      await updateDoc(doc(firestore, "users", data[0].id), userData);
      callback({ status: true, message: "Login With Google Success", data: userData });
    } catch (error) {
      callback({ status: false, message: "Login With Google Failed" });
    }
  } else {
    userData.role = "member";
    try {
      await addDoc(collection(firestore, "users"), userData);
      callback({ status: true, message: "Login With Google Success", data: userData });
    } catch (error) {
      callback({ status: false, message: "Login With Google Failed" });
    }
  }
}
