line-comads (git, npm, eslint, )

npm i -D
npm i -S

1. GIT comands =>
   git init
   echo "# react" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/...some git project... /react.git
   git push -u origin main

2. NPM comads =>
   npm init
   npm init -y //=> init json folder(project)
   npm i //or// npm install // => install paket of tools whith package.json file
   npm i -D (or -p) webpack // install last version of product
   npm i -D webpack@5 // install 5 version of webpack

   npm run build
   npm start

3. @BABEL comands =>
   npm i -D jest @babel/preset-env

4. SASS comands =>
   npm i -D sass npm-run-all

5. REACT comands =>
   npm i -g create-react-app
   create-react-app task4-1
   npm start
   Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd task4-1
npm start

//

npm audit fix --force
