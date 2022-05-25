// using mini project as a reference!!
// using activity 26 as a reference!!

import { openDB } from 'idb';

const initdb = async () =>
  // creating a new database named 'jate', which will be using version 1 of the database
  openDB('jate', 1, {
    // add our database schema if it has not already been created
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Add in the logic that would UPDATE the objectStore based on information you pass in.
export const putDb = async (content) => {
  console.log('PUT to the database');
  // Create a connection to the jate database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');

  const request = store.put({ id: 1, value: content });
  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
// the logic to run to getAll the information from the objectStore.
export const getAllDb = async () => {
  console.log('GET all from the database');
  // Create a connection to the jate database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  // return result?.value;
  return result.pop().content;
};

// console.error('getDb not implemented');

initdb();
