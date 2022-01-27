#!/usr/bin/env bash

# shellcheck disable=SC2045

echo "deploying..."

if [ -d "docs" ]; then
  echo "deleting old files..."
  rm -r docs/
fi

mkdir "./docs"

# JavaScript files
echo "compressing js files..."
mkdir "./docs/js"
for i in $(ls ./js/*); do
  uglifyjs "$i" -o "./docs/js/${i##*/}"
done

# CSS files
echo "compressing css files..."
mkdir "./docs/css"
for i in $(ls ./css/*); do
  uglifycss "$i" --output "./docs/css/${i##*/}"
done

# HTML files
echo "compressing html files..."
htmlFiles=(
  "./index.html"
  "./result/index.html"
  "./share/index.html"
)
for i in ${htmlFiles[*]}; do
  mkdir "docs/${i%/*}"
  htmlcompressor "$i" -o "./docs/${i}"
done

# other files
echo "copying other files..."
otherFiles=(
  "./assets/"
  "./lib/"
)
for i in ${otherFiles[*]}; do
  cp -r "$i" "./docs/${i}"
done
