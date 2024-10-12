# E-commerce-srtup-lib
``` npm i e-commerce-setup-lib ```
# E-commerce Setup CLI

A Node.js CLI tool to generate a common folder and file structure for e-commerce development.

## Installation

Install the CLI globally via npm:

```
npm i e-commerce-setup-lib
```
# Usage
Run the following command to generate a new e-commerce project structure:
``` ecommerce-setup <project-name> ```

# Example 
``` ecommerce-setup my-ecommerce-app```
# Folder Stducture
The CLI generates the following folder structure:
```
my-ecommerce-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── css/
│   └── js/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   ├── routes/
│   ├── App.js
│   └── index.js
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── app.js
├── config/
│   ├── database.js
│   └── env/
├── tests/
│   ├── unit/
│   └── integration/
├── .env
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```
# License
MIT
# Author
Shivam Singh
