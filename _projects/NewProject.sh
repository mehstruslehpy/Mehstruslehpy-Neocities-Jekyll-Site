#!/bin/bash

#read post title or go with default "post"
if [ $# -ne 1 ]
then
	PROJECT_NAME=project
else
	PROJECT_NAME=$1
fi
FILE_NAME=$(date +'%a-%d-%b-%Y-%T')-$PROJECT_NAME.md
#build the file
touch $FILE_NAME
echo "---" >> $FILE_NAME
echo "projectname: ###PLACE PROJECT NAME HERE###" >> $FILE_NAME
echo "projectlink: ###PLACE LINK HERE###" >> $FILE_NAME
echo "projectdescription: ###PLACE SHORT PROJECT DESCRIPTION HERE###" >> $FILE_NAME
echo "projectid: ###PLACE A UNIQUE PROJECT ID HERE###" >> $FILE_NAME
echo "---" >> $FILE_NAME
echo "###PLACE A LONGER PROJECT DESCRIPTION HERE###" >> $FILE_NAME
vim $FILE_NAME
