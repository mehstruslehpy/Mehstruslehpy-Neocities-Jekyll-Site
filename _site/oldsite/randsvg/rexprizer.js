function buildExpr(outstring,relarr,depth,min,max)
{
    if (depth>=0) //recursion should not be unlimited
    {
        outstring=outstring.replace(/\ X\ /g,function($1) {return randRel(relarr);});
        return buildExpr(outstring,relarr,depth-1,min,max); //recurse
    }
    else //once recursion ends all the appropriate macro tags must be expanded into constants
    {
        outstring=outstring.replace(/\ X\ /g,function($1) {return "";}); //get rid of any X tags
		//Y tags are replaced by svg paths this will expand randomly into a linear cubic quadratic or elliptical path the T's expand to constant numbers below
        outstring=outstring.replace(/\ Y\ /g,function($1) {return randRel([" L  T   T "
																		  ," C  T   T   T   T   T   T "
																		  ," Q  T   T   T   T "
																		  ," A  T   T   T   1   1   T   T "]);});

        outstring=outstring.replace(/\ V\ /g,function($1) {return randVar();}); //replace every V tag with a color code
        outstring=outstring.replace(/\ W\ /g,function($1) {return getRandNum(100);}); //replace every W tag with a random number from 0 to 100
        outstring=outstring.replace(/\ T\ /g,function($1) {return getConstantNum(min,max).toString();}); //replace every constant with a number
        return outstring;
    }
}
function randRel(relarr) //pick a random relation from the array given by the user
{
    var retstr = relarr[getRandNum(relarr.length)];
    return retstr;
}
function randVar() //a modification to the rexprizers previous randvar, this one just generates a color code randomly
{
	var alpha = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var color = "#";
    color +=randRel(alpha);
    color +=randRel(alpha);
    color +=randRel(alpha);
    color +=randRel(alpha);
    color +=randRel(alpha);
    color +=randRel(alpha);
    return color;
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
function BuildSvg()
{
    //chomp up the user input into some vars
    var depth = 10; //the depth of recursion
    var min = 0; //the min constant value for macro expansion
    var max = 1500; //the max constant value for macro expansion
    var text = "<rect x=\" T \" y=\" T \" width=\" T \" height=\" T \" fill=\" V \"/> X \n;"+
			   "<circle cx=\" T \" cy=\" T \" r=\" T \" fill=\" V \"/> X \n;"+
			   "<line x1=\" T \" y1=\" T \" x2=\" T \" y2=\" T \" stroke=\" V \" stroke-width=\" W \"/>\n X ;"+
			   "<ellipse cx=\" T \" cy=\" T \" rx=\" T \" ry=\" T \" fill=\" V \" stroke=\" V \" stroke-width=\" T \"/>\n X ;"+
			   "<path d=\"M  T   T  L  T   T  L  T   T  z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //simple triangles
			   "<path d=\"M  T   T  L  T   T  L  T   T  L  T   T z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //simple four point paths
			   "<path d=\"M  T   T  Y  Y z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //more complicated three point paths
			   "<path d=\"M  T   T  Y  Y  Y z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //more complicated four point paths
			   "<path d=\"M  T   T  Y  Y  Y  Y z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //more complicated five point paths
			   "<path d=\"M  T   T  Y  Y  Y  Y  Y z\" fill=\" V \" stroke=\" V \" \"/>\n  X  ;"+ //more complicated six point paths
			   " X ";

	var outstring = "<svg fill=\"black\" width=\"1000\" height=\"800\">\n"+ //open svg tag
					" X \n"+ //macro expansion seed
					"</svg>"; //svg close tag
    var splitbysemi = text.split(';'); //split the text string into an array of expressions for macro expansions
    outstring=buildExpr(outstring,splitbysemi,depth,min,max); //build the output string

	div = document.getElementById( 'outputexpressions' ); //get the appropriate div
    div.insertAdjacentHTML( 'beforeend', outstring ); //append the content to the page
}
