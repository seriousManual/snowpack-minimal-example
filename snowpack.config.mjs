/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
  },
  plugins: [
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    treeshake: true,
    minify: false
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
