echo "INSTALLING DEPENDENCIES"
apk add --update nodejs npm
npm i
node -v
cd /tmp/api-main
node index.js