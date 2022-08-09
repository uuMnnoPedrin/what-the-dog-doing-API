# What The Dog Doing API Docs
## Setup
To use our API you need to have <b>Node and Yarn</b> installed. Node can be downloaded on it's official website whilst yarn can be downloaded running the following command after installing node

`npm install --global yarn`

This will install yarn globally on your system. Then, after extracting all the files, you should run `yarn install` to install all the dependencies of the project and then type `yarn run start` to run the start script and open the server on port <b>3000</b>. The server url will be `localhost:3000`.

## The API
The API show a different phrase (or action if you prefer to call this way) of What the dog is doing. You can create new actions that will be saved in a json file.

## URLs
* `localhost:3000/v1/dog/dogdoing` | Show random dog action
* `localhost:3000/v1/dog/` | Lists all possible dog actions
* `localhost:3000/v1/cat/` | Shows random pictures of cats, using an external API