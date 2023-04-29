#!/usr/bin/node
const fs = require("fs");

console.log();

const fileName1 = "before";
const fileName2 = "after";

// read a file
fs.readFile(fileName1, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log({ fileName1 }, data);

  // rename a file
  fs.rename(fileName1, fileName2, (err1) => {
    if (err1) {
      return console.error(err1);
    }

    // update file's contents to:
    const newContent = "I was a simple test file. Now I'm so much more!";
    fs.writeFile(fileName2, newContent, (err2) => {
      if (err2) {
        console.error(err2);
        return;
      }

      console.log({ fileName2 }, "--- file written");

      // read file's new contents
      fs.readFile(fileName2, "utf-8", (err3, data3) => {
        if (err3) {
          console.error(err3);
          return;
        }

        console.log({ fileName2 }, data3);

        // move test file back to 'before' for next run
        fs.rename("after", "before", (err2) => {
          if (err2) {
            return console.error(err2);
          }

          // restore file's content:
          const originalContent = "I'm a boring test file :(";
          fs.writeFile(fileName1, originalContent, (err4, data4) => {
            if (err4) {
              console.error(err4);
              return;
            }

            console.log({ fileName1 }, "--- restored original file:");

            // read restored file:
            fs.readFile(fileName1, "utf-8", (err5, data5) => {
              if (err5) {
                console.error(err5);
                return;
              }

              console.log({ fileName1 }, data5, "\n");
            });
          });
        });
      });
    });
  });
});
