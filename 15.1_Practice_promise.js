function delay(ms) {
  return new Promise((res, rej) => {
    let counter = ms / 1000;

    const intervalId = setInterval(() => {
      if (ms < 0) {
        rej("Time cannot be negative");
        return;
      }
      if (counter <= 0) {
        console.log("Done!");
        clearInterval(intervalId);
        res("Timer complete");
      } else {
        console.log(counter + "...");
        counter--;
      }
    }, 1000);
  });
}

delay(3000)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log("Error:", err));
