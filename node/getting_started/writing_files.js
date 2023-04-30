#!/usr/bin/node

const fs = require("fs");
const fsp = require("fs/promises");

const fileName = "test-writing_to_files";

// async write
const content = "Asynchronous write content!";

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

// sync write
// const syncContent = "Synchronous write content!";

// try {
//   fs.writeFileSync(fileName, syncContent);
//   console.log("sync write succeeded!");
// } catch (e) {
//   console.error(e);
// }

// promise-based write
async function promiseWrite() {
  try {
    const promiseContent = "Promise-based write content!";
    await fsp.writeFile(fileName, promiseContent);
  } catch (e) {
    console.error(e);
  }
}

promiseWrite();

// append to a file:

const appendContent = "File append content!";

fs.appendFile(fileName, appendContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  // append done!
});

// promise-based append:

fsp.appendFile(fileName, appendContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  // append done!
});
