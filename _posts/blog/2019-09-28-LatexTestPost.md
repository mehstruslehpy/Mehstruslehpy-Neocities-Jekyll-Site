---
mathjax: true
layout: post
title: Some Stuff With Latex.
tag: blog
---
<br>
## What's New?
I finally got MathJax working on this blog, the main things of note with the setup is that I switched to using kramdown as my markdown engine and added some frontmatter stuff for allowing me to include the mathjax scripts per post. All that needs to be done to include mathjax now is "mathjax: true" per post. 
I spent way too much time troubleshooting a "problem" which turned out to be my script blocker not being enabled for localhost, to avoid embarassing issues like that in the future I would like to recommend that you leave javascript enabled to browse my website. 
Here is a demo of how equations can be displayed.
<br>
<br>
## Displaying equations with no backdrop:
Equations can be displayed like this:
<div>$$ \int sinx\,dx $$</div>
By typing the following html code.
<div class="code-filename">Display an equation centered:</div>
<pre>
	<code>
	&lt;div>$$ \int sinx\,dx $$$</div>
	</code>
</pre>
<br>

## Displaying equations with a title and backdrop:
Fancy backdrop and titles can be added which look like this.
<div class="math-highlight">
<div class="math-title">Some Equation</div>
$$ \int sinx\,dx $$
</div>
<br>
With this code:
<div class="code-filename">Display an equation with fancy backdrop:</div>
<pre>
	<code>
	&lt;div class="math-highlight">
	&lt;div class="math-title">Some Equation</div>
	$$ \int sinx\,dx $$
	</div>
	</code>
</pre>
<br>

## Displaying equations inline: 
Inline equations and expressions like \\(\oint_C \nabla\phi\,ds=\phi(b)-\phi(a)\\) can be displayed as follows:
<div class="code-filename">Display inline latex:</div>
<pre>
	<code>
	Inline equations and expressions like \\(\oint_C \nabla\phi\,ds=\phi(b)-\phi(a)\\) can be displayed as follows:
	</code>
</pre>

