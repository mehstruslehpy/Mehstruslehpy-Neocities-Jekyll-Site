---
layout: post
title: Jekyll Workflow.
tag: blog
---
<br>
# How do I debug and demo my site?

Currently I run everything through a [makefile](https://github.com/mehstruslehpy/Mehstruslehpy-Neocities-Jekyll-Site/blob/master/Makefile) which controls a local jekyll server to view and make changes, this makefile can also kick off a couple scripts which I will describe in the next section that I use for uploading to neocities. I use git and github for version control and backups alongside all this.

So far what I do is write my posts in markup using vim, then I run my post generating script and copy my finished file to the created file. Then I preview the new post locally, after I am satisfied I push the changes to neocities via my script, next I check all my files on neocities, finally I push any changes to my github repo.

# How do I post to this neocities page?

Previously I would write my posts by hand in html. This solution was not ideal because I would have to spend large chunks of time fiddling with html css and javascript. 
After deciding to use a static site generator and getting started using Jekyll I realized things would be a lot nicer if I also wrote a script that would upload the generated site directly to neocities. 
Initially I was going to write a selenium script to do the dirty work directly in the browser. 
This is probably doable but fairly unelegant. 
After poking around with that idea for a while I found that neocities had its own api and somebody had already written a library for python which could upload individual files directly to [neocities](https://github.com/neocities/python-neocities). 
All I needed was to write a small python script of my own which could take in a local file path and a remote file path and copy the local file to the remote location which resulted in the following [script](https://github.com/mehstruslehpy/Mehstruslehpy-Neocities-Jekyll-Site/blob/master/upload-sitefile.py).

The script itself is ran by a modification of this stackoverflow [oneliner](https://stackoverflow.com/questions/26387327/linux-recursively-go-through-directories) and can be found [here](https://github.com/mehstruslehpy/Mehstruslehpy-Neocities-Jekyll-Site/blob/master/UploadSite.sh).

The oneliner finds every regular file recursively and calls the upload python script with the found files filename for both arguments. 

Note that for pragmatic purposes my gitignore and upload script ignore any files containing my username and password. I manually check every upload and never persistently store these files in plaintext.

# Things I'd like to change about my workflow:

- I'd like to write my own static site generator, I think perl would be a very fun language to do this in and I would love to get practice in perl.
- I'd like to extend my makefile to automate more tasks, I really like the idea of doing "make blah" to do things. It keeps basic tasks simple.
- I'd like to come up with more templates for different post types. Right now I've got post project and list templates that are more or less functional but it would be nice to have more creative ones.
- I definitely need to fiddle around with mathjax some more.
