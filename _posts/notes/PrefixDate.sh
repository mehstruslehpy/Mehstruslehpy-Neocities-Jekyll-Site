#This is intended to be run from the prep from home dir script
#/bin/sh
#DATE=$(date -I)
DATE="1000-01-01"
for f in * ; do mv -- "$f" "$DATE-$f" ; done
mv $DATE-PrefixDate.sh PrefixDate.sh
mv $DATE-NewPost.sh NewPost.sh
mv $DATE-AppendFrontMatter.sh AppendFrontMatter.sh
mv $DATE-PrepFromHomeDir.sh PrepFromHomeDir.sh
