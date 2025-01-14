# Firebase Asynchronous Operation Error

This repository demonstrates a common error when working with Firebase's asynchronous functions, specifically accessing document data before the promise has resolved.

## Problem
The Firebase SDK's `getDoc()` function (and others like it) returns a promise.  If you attempt to access data from the returned snapshot before the promise resolves, you'll likely encounter an error because the data might not yet be available.

## Solution
Always use `async/await` or `.then()` to ensure you handle the asynchronous nature of the operation correctly and only access the data after the promise has successfully fulfilled.

## How to Reproduce
1. Clone the repository.
2. Install the necessary packages: `npm install firebase`
3. Configure your Firebase project (replace placeholders in `bug.js` and `bugSolution.js` with your project's config).
4. Run `bug.js`. You will observe an error.
5. Run `bugSolution.js`. You will observe the correct behavior.
