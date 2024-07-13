// Define the API endpoints
const apiEndpoints = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
];

// Create an array of fetch promises

const fetchPromises = apiEndpoints.map(async(url) => {
    console.log(`Fetching ${url}`);
    return await fetch(url)
        .then(async(response) => {
            return await response.json();
        })
        .then(async(jsonData) => {
            return jsonData;
        });
});
// var fetchedData = [];
// for (const url of apiEndpoints) {
//     console.log(`Fetching ${url}`);
//     const response = await fetch(url);

//     const jsonData = await response.json();

//     fetchedData.push(jsonData);
// }

console.log(fetchPromises[0][0]);
// Measure the execution time
// const start = performance.now();

// Promise.all(fetchPromises)
//     .then((results) => {
//         const end = performance.now();
//         console.log("All requests completed in", end - start, "ms");
//         console.log("Results:", results);
//     })
//     .catch((error) => {
//         console.error("One or more requests failed:", error);
//     });