echo "switching to master..."
git checkout main

echo "building app ..."
npm run build

echo "Deploying file to server ..."
scp -r build/* root@139.59.230.213:/var/www/damansarachiropractic.com/html

echo "done"