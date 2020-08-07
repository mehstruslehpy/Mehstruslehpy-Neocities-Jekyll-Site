#this is intended to be run from the PrepFromHomeDir script
#/bin/sh
for f in *.md ; do
	touch temp.txt
	echo "---" >> temp.txt
	echo "layout: note" >> temp.txt
	echo "title: ${f:11:-3}" >> temp.txt #extract title from filename
	echo "tag: notes" >> temp.txt
	echo "permalink: ${f:11:-3}" >> temp.txt #extract permalink from filename
	echo "---" >> temp.txt
	cat $f >> temp.txt
	cp temp.txt $f
	rm temp.txt
done
