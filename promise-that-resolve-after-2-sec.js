function delayTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Executed after 2 seconds");
    }, 2000); // 2000 milliseconds = 2 seconds
  });
}

// Usage
delayTwoSeconds().then((message) => {
  console.log(message);
});
