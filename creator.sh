#!/bin/bash

mkdir $1;
cp -R boilerplate/ $1
cd $1
sed -i "" "s/\[\[project_name\]\]/$1/g" package.json