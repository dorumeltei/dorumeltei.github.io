const fs = require("fs");
const path = require("path");

function loadHtml(fileName) {
  const filePath = path.join(__dirname, fileName);
  return fs.readFileSync(filePath, "utf8");
}

test("home page has the correct name", () => {
  const html = loadHtml("index.html");
  expect(html.includes("Doru Meltei")).toBe(true);
});

test("home page has a main section", () => {
  const html = loadHtml("index.html");
  expect(html.includes("main")).toBe(true);
});

test("contact page has a LinkedIn link", () => {
  const html = loadHtml("contact.html");
  expect(html.includes("linkedin.com/in/DoruMeltei")).toBe(true);
});
