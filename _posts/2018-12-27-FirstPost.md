---
layout: post
title: My First Post
---

This is my first post using Jekyll. Part of what got me interested in jekyll is because it allows me to do the bulk of my posting in simple markdown and delegate the rest to be done via some simple automatable templating and a few scripts. One thing I've already noticed is posts names can be created automatically via the following script.
<div class="code-filename">&nbsp;&nbsp;NewPost.sh:</div>
<pre>
	<code>
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
	</code>
</pre>
