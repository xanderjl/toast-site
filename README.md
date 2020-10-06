# Barest of Bones Toast Site

So, we're finally here. It's Toast o'clock. Let's get going on our first page. 

At the time of writing this, Toast is on version `0.3.6`. 

Create a new directory for the project
`mkdir toast-site && cd toast-site`

Install toast and the current dependency
npm: `npm i toast @sector/breadbox`
yarn: `yarn add toast @sector/breadbox`

## Uh oh-
`error toast@0.3.6: The engine "node" is incompatible with this module. Expected version ">=14.13". Got "12.18.4"`

Thankfully, Toast lets you know which version of node is required. I [followed along with this blog post to install node 14.13.0](https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux/). Your mileage will vary depending on your OS of choice.

running `yarn add toast @sector/breadbox` should now pass with flying colors.

Here's where we run into a few speed bumps.

To avoid a known bug, we need to add a `static/` directory to the root of the project.

Next, we'll create our first page.

add `src/pages/index.js` in the root of the project.

we'll need to add `import { h } from "preact"` at the top of our file (Preact.h and React.createElement are the same thing).

Now, we can write up a page as any old arrow function.

```jsx
/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Hello | Toast</title>
        <meta name="description" content="Is a baby toast a crouton?" />
      </Helmet>
      <div className="page-content">
        <div className="hero">
          <h1>
            Hello, <a href="https://toast.dev/">Toast</a>.
          </h1>
          <ul className="socials">
            <li>
              <a href="https://discord.gg/m2RdVRA">Discord</a>
            </li>
            <li>
              <a href="https://github.com/toastdotdev/toast">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/toastdotdev">Twitter</a>
            </li>
          </ul>
        </div>
        <section className="section">
          <p>Baby's first Toast site. Pretty neat, huh?</p>
        </section>
      </div>
      <footer>
        <section className="section">Get Toasty</section>
      </footer>
    </div>
  );
};

export default Index;


export default Index;
```

The command to build the site is `yarn toast incremental .`. Your first time running this will result in something along the lines of :
```properties
Error: 
   0: Failed to read `import-map.json` from `/path/to/toast/public/web_modules/import-map.json`
   1: No such file or directory (os error 2)

Backtrace omitted.
Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
```

turns out we need to run this command first:
`yarn breadbox --dest public/web_modules`

Which will result in:
```
✔ snowpack install complete. [0.14s]

  ⦿ web_modules/     size       gzip       brotli   
    └─ preact.js     10.22 KB   4.04 KB    3.7 KB     

```
Neat!

Now when we run `yarn toast incremental .`, we'll be met with: 
```properties
yarn run v1.22.5
warning package.json: No license field
$ /path/to/toast/node_modules/.bin/breadbox --dest public/web_modules
ignoring unsupported file "yarn.lock"
✔ snowpack install complete. [0.14s]

  ⦿ web_modules/     size       gzip       brotli   
    └─ preact.js     10.22 KB   4.04 KB    3.7 KB     


Done in 1.01s.

 Documents/web-dev/toast on  main *
 ᨂ yarn toast incremental .               
yarn run v1.22.5
warning package.json: No license field
$ /home/alexander/Documents/web-dev/toast/node_modules/.bin/toast incremental .
▪▪▪ [0s] 0 pages created
▪▪▪ [0s] 0/18446744073709551615 sources compiled
⠁ 
(node:365882) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
no user pagewrapper supplied Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/path/to/toast/.tmp/src/page-wrapper.js' imported from /path/to/toast/node_modules/toast/toast-render.mjs
    at finalizeResolution (internal/modules/esm/resolve.js:276:11)
    at moduleResolve (internal/modules/esm/resolve.js:699:10)
    at defaultResolve (internal/modules/esm/resolve.js:810:11)
    at resolve (file:///path/to/toast/node_modules/toast/src/loader.mjs:8:10)
    at Loader.resolve (internal/modules/esm/loader.js:85:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:229:28)
    at Loader.import (internal/modules/esm/loader.js:164:28)
    at importModuleDynamically (internal/modules/esm/translators.js:94:35)
    at exports.importModuleDynamicallyCallback (internal/process/esm_loader.js:30:14)
    at main (file:///path/to/toast/node_modules/toast/toast-render.mjs:29:21) {
  code: 'ERR_MODULE_NOT_FOUND'
▪▪▪ [0s] html rendered
Done in 0.36s.
```

We can ignore the error at the bottom for now. We can check to see if our build worked by looking in the `public/` dir in the root of our project. There should be an `index.html` file. Tada!

We can now serve the page locally with something like `npx serve public`.

To speed up the process a little bit, you can copy the `package.json` from this repo to use things like `yarn build && yarn serve` until some sort of hot reload is implemented: 
```json
{
  "name": "toast-site",
  "description": "Our first toast site!",
  "version": "0.1.0",
  "author": "<Your name>",
  "dependencies": {
    "@sector/breadbox": "^0.0.4",
    "serve": "^11.3.2",
    "toast": "^0.3.6"
  },
  "license": "OBSD",
  "scripts": {
    "build": "toast incremental .",
    "serve": "serve public",
    "postinstall": "breadbox --dest public/web_modules"
  },
  "type": "module",
  "snowpack": {
    "installOptions": {
      "alias": {
        "react": "preact/compat"
      }
    }
  }
}
```
