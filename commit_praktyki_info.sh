#!/bin/bash

echo "Enter commit message: "
read message

git add .
git commit -m "Aktualizacja praktyk: $message"
git push

exit 0
