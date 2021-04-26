# TypeScript Boilerplate

- [Starting a TypeScript Project in 2021](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/)

# Basic Project Setup

```

# Create project folder

mkdir my-project
cd my-project

# Create source folder and files

mkdir src
touch src/main.ts src/main.test.ts src/cli.ts

# Create a package.json

npm init

# Install TypeScript, linter and Jest

npm i -D typescript @types/node ts-node
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D jest ts-jest @types/jest

# Get a .gitignore

wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.gitignore

# Get a tsconfig.json with some defaults (adapt as needed)

wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/tsconfig.json

# Alternatively you can create a fresh tsconfig.json (with extensive docstrings)

tsc --init

# Get a .eslintrc.js

wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.eslintrc.js

# Get a jest.config.json, for ts-jest to run the tests without a separate typescript compile step

wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/jest.config.js

# Create a git repo and make the first commit

git init
git add .
git commit -am "initial commit"

```

---

**NOTE**

Use src/cli.ts for code that’s run from the command line. This way code from main.ts can be included without running the entrypoint code, and allows for easier cross-target building and code branches (eg. Node.js and browsers).

---

Add scripts to your package.json:

```
{
    "scripts": {
        "cli": "ts-node src/cli.ts",
        "test": "jest",
        "lint": "eslint src/ --ext .js,.jsx,.ts,.tsx",
        "build": "tsc -p tsconfig.json",
        "clean": "rm -rf dist build",
        "ts-node": "ts-node"
    }
}
```

---

**Note**

💡 In Visual Studio Code you can use the build and test tasks to start scripts with keyboard shortcuts. In the command palette “Configure Default Build Task” and “Configure Default Test Task” ([see the VS Code docs](https://code.visualstudio.com/docs/editor/tasks)).

---

# Tests with Jest

You can write [Jest tests](https://jestjs.io/docs/getting-started) [like this:](https://github.com/metachris/typescript-boilerplate/blob/master/src/main.test.ts)

```
import { greet } from './main'

test('the data is peanut butter', () => {
  expect(1).toBe(1)
});

test('greeting', () => {
  expect(greet('Foo')).toBe('Hello Foo')
});

```

Run the tests with npm run test, no separate compile step is necessary.

See also the [Jest documentation](https://jestjs.io/docs/getting-started)
Take a look at other modern test runners such as ava, uvu and tape
