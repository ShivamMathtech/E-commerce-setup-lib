#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to create folders and files
function createStructure(baseDir) {
  // Define the folder structure
  const structure = {
    public: {
      "index.html":
        '<!DOCTYPE html><html><head><title>E-commerce App</title></head><body><div id="app"></div></body></html>',
      "favicon.ico": "",
      css: {},
      js: {},
    },
    src: {
      assets: {},
      components: {},
      pages: {},
      services: {},
      store: {},
      styles: {},
      utils: {},
      routes: {},
      "App.js":
        'import React from "react";\n\nfunction App() {\n  return <div>App Component</div>;\n}\n\nexport default App;',
      "index.js":
        'import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\n\nReactDOM.render(<App />, document.getElementById("app"));',
    },
    backend: {
      config: {},
      controllers: {},
      models: {},
      routes: {},
      middlewares: {},
      services: {},
      utils: {},
      "server.js":
        'const express = require("express");\nconst app = express();\napp.listen(3000, () => console.log("Server running on port 3000"));',
      "app.js":
        'const express = require("express");\nconst app = express();\nmodule.exports = app;',
    },
    config: {
      "database.js":
        'const mongoose = require("mongoose");\nmodule.exports = mongoose;',
      env: {},
    },
    tests: {
      unit: {},
      integration: {},
    },
    ".env": "PORT=3000\nDB_URL=your-database-url-here\n",
    ".gitignore": "node_modules\n.env\n",
    "package.json": JSON.stringify(
      {
        name: "ecommerce-app",
        version: "1.0.0",
        main: "index.js",
        scripts: {
          start: "node backend/server.js",
        },
      },
      null,
      2
    ),
    "README.md":
      "# E-commerce Setup\n\nThis is a boilerplate structure for an e-commerce application.",
    "webpack.config.js":
      "// Basic webpack configuration setup\nmodule.exports = {};",
  };

  // Function to recursively create folders and files
  function createFolder(base, structure) {
    for (const name in structure) {
      const fullPath = path.join(base, name);
      if (typeof structure[name] === "string") {
        fs.writeFileSync(fullPath, structure[name]);
        console.log(`File created: ${fullPath}`);
      } else {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Directory created: ${fullPath}`);
        createFolder(fullPath, structure[name]);
      }
    }
  }

  createFolder(baseDir, structure);
}

// Run the script
const targetDir = process.argv[2] || "ecommerce-app";
const fullPath = path.join(process.cwd(), targetDir);

if (!fs.existsSync(fullPath)) {
  fs.mkdirSync(fullPath);
  createStructure(fullPath);
  console.log(`E-commerce project structure created in ${fullPath}`);
} else {
  console.log(
    "Directory already exists. Please choose a different name or remove the existing directory."
  );
}
