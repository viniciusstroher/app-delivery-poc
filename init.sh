echo "INSTALLING DEPENDENCIES"
apk add --update nodejs npm

cd /tmp/api-main
npm i -g nodemon
npm i
nodemon --inspect --watch . index.js