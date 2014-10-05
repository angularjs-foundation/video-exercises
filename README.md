# AngularJS Foundation - Hands On Exercises

Welcome to the hands on exercises for the [Build a Strong AngularJS Foundation](http://shop.oreilly.com/product/110000151.do) course.

#### The course was divided into three parts
1. Commentary on a specific AngularJS concept.
2. A live coding example to illustrate the concept.
3. Hands on exercises to reinforce the concept.

This is the third section of the course and it is time for us to work through the hands on exercises.

Each module has a set of exercises and a suite of failing unit tests. As you work through the exercises, the tests will start to pass. You will know that you have successfully completed the exercises when all of the tests are passing.

Checkout `master` from the [angularjs-foundation/video-app](https://github.com/angularjs-foundation/video-app) repository to see the completed application and solutions to the exercises.

## Prerequisites
- Git
- NodeJS (version `v0.10.26` or greater)
- NPM (version `1.4.4` or greater)
- Make sure you have the following NPM plugins installed **globally** (via `-g`):
  - `sudo npm install -g grunt`
  - `sudo npm install -g grunt-cli`
  - `sudo npm install -g karma`
  - `sudo npm install -g karma-cli`
  - `sudo npm install -g http-server`

## Installation

First run `npm cache clear` in the console (for Windows use the `nodejs command prompt`).

### Windows
1. clone by repo: `git clone https://github.com/angularjs-foundation/video-exercises.git`
2. go to the directory: `cd video-exercises`
3. run the installation: `scripts\install.cmd`
4. run the server: `scripts\server.cmd`. **MAKE SURE that this is NOT run directly from inside of the `scripts\` directory.
5. Visit the website at `http://localhost:8088`.

### Mac / Linux
1. clone by repo: `git clone https://github.com/angularjs-foundation/video-exercises.git`
2. go to the directory: `cd video-exercises`
3. run the installation : `./scripts/install.sh`
4. run the server: `./scripts/server.sh`
5. Visit the website at `http://localhost:8088`.

## Hands on Exercises

### Open the Website

When the website is run there will be a series of modules to work through.

![modules](https://cloud.githubusercontent.com/assets/590361/2930144/5478ba74-d792-11e3-8cd1-d301fd45c4f5.png)

### Choose a Module

Each module will have individual exercises to work through. (The hands on exercises will be installed inside of `hands-on-exercises`.)

![module](https://cloud.githubusercontent.com/assets/590361/2930145/5acf6bc0-d792-11e3-8607-65622a0f49e3.png)

### Run the Tests

Each module starts with a series of failing tests.

![tests_fail](https://cloud.githubusercontent.com/assets/590361/2930276/03f99dc8-d794-11e3-850f-71eb7437daaf.png)

### Complete the Exercises

The goal is to work through the exercises until all the tests pass.

![tests_pass](https://cloud.githubusercontent.com/assets/590361/2930277/0699515e-d794-11e3-88a1-af374ee1fdc4.png)

### Success! All Tests are Passing

## Issues

If you run into any problems, please file a [GitHub Issue](https://github.com/angularjs-foundation/video-exercises/issues) and we will address it immediately. Thanks!
