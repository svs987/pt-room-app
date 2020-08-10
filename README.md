# pt-room-app
App that allows coaches to find trainers

Installation instructions: 

Prerequisites:

You'll need to install the following:

    npm
    expo
    aws amplify - https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native#option-1-watch-the-video-guide


Navigate to the root directory for your project. I use <home>/git. Run

    git checkout https://github.com/svs987/pt-room-app.git
    npm install
    
To set up the authorisation via aws cognito, run

    amplify configure
    amplify init
    amplify add auth # Select default configuration and Email for the user sign in
    amplify push
    
