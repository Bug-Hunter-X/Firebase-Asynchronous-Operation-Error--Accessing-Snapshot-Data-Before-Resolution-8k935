The Firebase SDK may throw an error if you try to access a property of a document snapshot before the promise returned by `getDoc()` or similar methods resolves.  This often happens when you're not using `.then()` or `async/await` correctly to handle the asynchronous nature of Firebase operations.

```javascript
// Incorrect - will likely cause an error
const docRef = doc(db, 'collection', 'docId');
const docSnap = await getDoc(docRef);
console.log(docSnap.data().someField); // Error: docSnap.data() might be undefined
```

```javascript
// Correct - using async/await
async function getData() {
  const docRef = doc(db, 'collection', 'docId');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data().someField); 
  } else {
    console.log('No such document!');
  }
}
```

```javascript
// Correct - using .then()
const docRef = doc(db, 'collection', 'docId');
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log(docSnap.data().someField);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error("Error fetching document: ", error);
});
```