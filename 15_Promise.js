// trying how promise syntax works
const timer = new Promise((resolve, reject) => {
  let isTrue = false;

  const timeoutId = setTimeout(() => {
    if (isTrue) {
      resolve("Promise resolved ji");
    } else {
      reject("Promise rejected ji");
    }
  }, 3000);
});

timer
  .then((msg) => {
    console.log("Msg1:", msg);
  })
  .catch((err) => {
    console.log("Msg2:", err);
  })
  .finally(() => {
    console.log("Code samaapti!");
  });
