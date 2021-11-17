import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [cancelled, setCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // add a document
  const addDocument = (document) => {};

  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};