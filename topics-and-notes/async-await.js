// Functions marked with async always return a promise, even if you return a non-promise value.

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error fetching:', error);
  }
}

fetchData();