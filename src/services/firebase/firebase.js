import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
  addDoc,
  documentId,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        resolve(products);
      })
      .catch((error) => {
        reject("Error obteniendo productos: ", error);
      });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDb, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("Error obteniendo producto: ", error);
      });
  });
};

export const getProductsInOrder = (productIds) => {
  return new Promise((resolve, reject) => {
    const collectionRef = query(
      collection(firestoreDb, "products"),
      where(documentId(), "in", productIds)
    );

    getDocs(collectionRef)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject("Error obteniendo productos: ", error);
      });
  });
};

export const addOrder = (order) => {
  return new Promise((resolve, reject) => {
    addDoc(collection(firestoreDb, "orders"), order)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject("Error obteniendo producto: ", error);
      });
  });
};

export const batch = writeBatch(firestoreDb);

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(firestoreDb, "categories"))
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject("Error obteniendo categorías: ", error);
      });
  });
};
