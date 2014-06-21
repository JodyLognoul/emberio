git add -A
NOW=$(date +"%m-%d-%Y")
git commit -am $NOW
git push -u https://github.com/Narcotic/emberio.git master
