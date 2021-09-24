// build/lib/getHepp.js
import hepp from "../public/hepp.json";
function getHepp() {
  return hepp.foo;
}

// build/index.js
console.log("json value from json file: " + getHepp());
//# sourceMappingURL=index.js.map
