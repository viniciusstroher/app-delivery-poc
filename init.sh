echo "INSTALLING DEPENDENCIES"
apk add --update nodejs npm

cd /tmp/api-main
npm i
nodemon --watch . index.js