#!/bin/bash

#read post title or go with default "post"
if [ $# -ne 1 ]
then
	POST_NAME=post
else
	POST_NAME=$1
fi
FILE_NAME=$(date -I)-$POST_NAME.md
#build the file
touch $FILE_NAME
echo "---" >> $FILE_NAME
echo "layout: post" >> $FILE_NAME
echo "title: $POST_NAME" >> $FILE_NAME
echo "---" >> $FILE_NAME
vim $FILE_NAME
