# i-peers [![Latest version](https://badgen.net/npm/v/i-peers)](https://npm.im/i-peers) [![Monthly downloads](https://badgen.net/npm/dm/i-peers)](https://npm.im/i-peers) [![Install size](https://packagephobia.now.sh/badge?p=i-peers)](https://packagephobia.now.sh/result?p=i-peers)

Zero-dependency CLI to install your peer-dependencies. Just run it in your project directory:

```sh
npx i-peers
```

## 🙋‍♂️ Why?
- **⚡️ Blazing fast** Has no dependencies and is optimized for npx!
- **🔥 Uses your npm** and doesn't install one!
- **🐥 Tiny** `469 B` minzipped!

## ⚙️ Options
- `-a` Install all dependencies
  - `-a ci` Installs all dependencies with `npm ci`

## 💁‍♀️ FAQ

### When would I use this?
In rare instances where you have peer-dependencies that you can't declare as dev-dependencies. For example, when the peer-dependency is propietary and can only be installed behind a fire-wall (eg. private npm registry), declaring it as a dev-dependency might cause your CI to fail at `npm install`.

### How is this different from [npm-install-peers](https://github.com/spatie/npm-install-peers)?
They accomplish the same task, but `i-peers` is dramatically lighter, and therefore, faster.


The latest version of `npm-install-peers` [![npm-install-peers install size](https://packagephobia.now.sh/badge?p=npm-install-peers)](https://packagephobia.now.sh/result?p=npm-install-peers) vs `i-peers` [![i-peers install size](https://packagephobia.now.sh/badge?p=i-peers)](https://packagephobia.now.sh/result?p=i-peers)
