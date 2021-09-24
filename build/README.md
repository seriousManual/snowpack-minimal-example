# Reproduce an error where referenced JSON files are bundled incorrectly in prod build

* `git clone https://github.com/seriousManual/snowpack-minimal-example`
* `cd snowpack-minimal-example && npm i`
* verify that the value from the json file is correctly displayed in dev mode (`npx snowpack dev`)
* run `npx snowpack build`
* in the resulting build output the content of the json file is not bundled but rather referenced as an external file with a wrong path. 
  Besides the fact that I'd expect the json file to be bundled, the path to the json file is not correct, instead of `import hepp from "../public/hepp.json";` the following would be correct: `import hepp from "./public/hepp.json";`
  [Wrong build output](/build/index.js)