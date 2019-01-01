function buildExpr(outstring,relarr,depth,min,max)
{
    if (depth>=0) //recursion should not be unlimited
    {
        outstring=outstring.replace(/\ X\ /g,function($1) {return randRel(relarr);});
        return buildExpr(outstring,relarr,depth-1,min,max);
    }
    else //once recursion ends all the C's and X's must be replaced by constants and variables respectively
    {
        outstring=outstring.replace(/\ X\ /g,function($1) {return randVar(relarr);});
        outstring=outstring.replace(/\ V\ /g,function($1) {return randVar(relarr);});
        outstring=outstring.replace(/\ C\ /g,function($1) {return getConstantNum(min,max).toString();});
        return outstring;
    }
}
function randRel(relarr) //pick a random relation from the array given by the user
{
    var retstr = relarr[getRandNum(relarr.length)];
    return retstr;
}
function randVar() //pick a random variable from the ones given by the user
{
    var possible = document.getElementById("variables").value;
    possible=possible.trim();
    return randRel(possible.split(''));
}
function getRandNum(max) //from SO get a random integer greater than 0
{
    return Math.floor(Math.random() * max);
}
function getConstantNum(min,max) //from SO get a random integer within a range
{
    return Math.floor(parseFloat(Math.random() * (max - min) + min));
}
var LINECOUNT=0; //this will be used to track the count of lines the user generates each session
function handleInput()
{
    //chomp up the user input into some vars
    var depth = document.getElementById("depth").value;
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;
    var text = document.getElementById("expression").value;
    var action = document.getElementById("action").value;
    var outstring = document.getElementById("seed").value; //the initial string
    var solutionstring = "";
    var splitbysemi = text.split(';'); //split the user expressions into an array of expresssions
    console.log(splitbysemi); //some debugging info
    outstring=buildExpr(outstring,splitbysemi,depth,min,max);
    console.log("output expression:"+action+" "+outstring); //some debugging info

	if (action!="")
	{
		solutionstring+="<a target=\"_blank\" rel=\"noopener noreferrer\"href=\"https://www.wolframalpha.com/input/?i=";
		solutionstring+=encodeURIComponent(action+" "+outstring);
		//solutionstring+=action+" "+outstring;
		solutionstring+="\">Wolfram Alpha</a><br>"
		//solutionstring+="\">Wolfram Alphas Solution</a>"
    	console.log("solution string:"+solutionstring); //debugging info
	}

	div = document.getElementById( 'outputexpressions' );
	outstring = ""+(++LINECOUNT)+":&emsp; \\("+outstring+"\\)<br>"+solutionstring;
    console.log("final string:"+outstring); //debugging info
    div.insertAdjacentHTML( 'beforeend', outstring ); //append the content to the page
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('appendhere')]); //retypeset new stuff
}
function handleInputNoMarkupNoWolfram()
{
    //chomp up the user input into some vars
    var depth = document.getElementById("depth").value;
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;
    var text = document.getElementById("expression").value;
    var outstring = document.getElementById("seed").value; //the initial string
    var solutionstring = "";
    var splitbysemi = text.split(';'); //split the user expressions into an array of expresssions
    console.log(splitbysemi); //some debugging info
    outstring=buildExpr(outstring,splitbysemi,depth,min,max);
    console.log("output expression:"+outstring); //some debugging info

	div = document.getElementById( 'outputexpressions' );
	outstring = "&emsp; "+outstring+";<br>"+solutionstring;
    console.log("final string:"+outstring); //debugging info
    div.insertAdjacentHTML( 'beforeend', outstring ); //append the content to the page
}
