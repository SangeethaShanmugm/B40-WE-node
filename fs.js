const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart🥳";

// fs.writeFile("./awesome.ppt", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

// const quote2 = "Live more, worry less🥳🥳";

//Task 1
//Create the below files with quote2 as the content

//  /backup/
// text-1.html
// text-2.html
//  ...
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

// const quote3 = "Happy Day🥳🥳";
// //node fs.js 20 - 20 files need to be created / file-1.txt ...file-20.txt

// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles)
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/file-${i}.txt`, quote3, (err) => {
//     console.log(`Completed writing file-${i}.txt`);
//   });
// }

//read file

// fs.readFile("./awesome123.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is =", data);
// });

const niceQuote = "\nMake everyday a little less ordinarily🥳";

// fs.writeFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

fs.appendFile("./nice.txt", niceQuote, (err) => {
  console.log("Completed writing nice.txt");
});
