#!/bin/sh

#while ! git pull --rebase ; do echo 'lll';done;

(cd ../my-extension3/ && npm run build2 -- --dest='../testdemo' --no-clean )&&echo 'build done'
#cp -a ../my-extension3/dist/* ./
git add .
git commit -am 'update'
while ! git push ; do echo 'lll';done;
