# NodeJS-Docker To-Do Application
[![GPLv3 license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
![Nodejs sample App](https://github.com/Lucifergene/NodeJS-Docker-Sample-App/workflows/Nodejs%20sample%20App/badge.svg)

<p> The sample app shows how to dockerize a Nodejs Application and build the container with CI/CD Pipelines. <br>
    Any changes made to this repository triggers the Automated Container Build Pipeline Powered by <b>GitHub Actions</b>.
</p>

**DockerHub** : [avik6028/nodejs_sample:1.0.0](https://hub.docker.com/r/avik6028/nodejs_sample) <br>
**AWS** : http://ec2-54-144-179-254.compute-1.amazonaws.com/ (**STOPPED**)
<br>
<br>

## Running Locally

Make sure you have:
* [Node.js](http://nodejs.org/)
* An account in [MongoDB](https://account.mongodb.com/account/login) and signin for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). 
* You need to change the username and password in the `app.js` file.

```sh
git clone git@github.com:Lucifergene/NodeJS-Docker-Sample-App.git
cd NodeJS-Docker-Sample-App
npm install
node app
```

Your app should now be running on [localhost:8080](http://localhost:8080/).
