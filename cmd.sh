#!/bin/sh
(cd ../my-extension3/ && npm run build2)&&echo 'build done'
cp -a ../my-extension3/dist/* ./
git add .
git commit -am 'update'
while ! git push ; do echo 'lll';done;
