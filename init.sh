echo "INSTALLING DEPENDENCIES"
apk add --update nodejs npm

cd /tmp/api-main
npm i -g nodemon jest ts-node
npm i
# nodemon --inspect --watch . index.js
#precisa tsconfig-paths/register
nodemon --ext "ts,json" --ignore "**/*.spec.ts" --exec "ts-node -r tsconfig-paths/register index.ts"