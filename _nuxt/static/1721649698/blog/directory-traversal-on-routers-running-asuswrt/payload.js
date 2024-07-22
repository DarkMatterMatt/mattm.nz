__NUXT_JSONP__("/blog/directory-traversal-on-routers-running-asuswrt", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{blog:{slug:"index",description:"Directory traversal (path traversal) vulnerability allows unauthenticated access to images and file archives on the router and on attached external storage devices.",title:"Directory traversal on Asus routers running AsusWRT before v3.0.0.4.385.20630",updatedAt:"2022-11-06T00:00:00.000Z",toc:[{id:Y,depth:O,text:Z},{id:_,depth:O,text:$},{id:aa,depth:O,text:ab}],body:{type:"root",children:[{type:b,tag:w,props:{},children:[{type:a,value:"AsusWRT is a web-based interface for router configuration. All testing was performed on an Asus\nRT-AC68U running AsusWRT v3.0.0.4.385.20433."}]},{type:a,value:g},{type:b,tag:P,props:{id:Y},children:[{type:b,tag:E,props:{href:"#source-code",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[S,T]},children:[]}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"Asus releases the source code for their router firmware under the GNU GPLv2. The following steps\ndescribe how to download the latest source code."}]},{type:a,value:g},{type:b,tag:"ol",props:{},children:[{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Go to the router's page on the Asus website."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Navigate to the \"Support\" section for the router."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Click \"Drivers & Tools\"."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Select \"Others\" for the operating system."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"There should be a section for the source code. Some routers don't have this section (and others\nare very outdated), so you might need to search around."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:P,props:{id:_},children:[{type:b,tag:E,props:{href:"#directory-traversal",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[S,T]},children:[]}]},{type:a,value:$}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"The HTTP handling and routing is contained in "},{type:b,tag:h,props:{},children:[{type:a,value:"asuswrt\\release\\src\\router\\httpd\\httpd.c"}]},{type:a,value:". The\nrequest path validation looks like this."}]},{type:a,value:g},{type:b,tag:ac,props:{className:[ad]},children:[{type:b,tag:ae,props:{className:[af,ag]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"int"}]},{type:a,value:" len"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F* Lots of code omitted for brevity. *\u002F"}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"Bad filename.\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:"\n    file "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n    len "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"..\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"..\u002F\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"strstr"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"\u002F..\u002F\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:"len"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"\u002F..\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"Illegal filename.\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"I couldn't figure out any way to get around this. It ensures that the "},{type:b,tag:h,props:{},children:[{type:a,value:v}]},{type:a,value:" path does not begin at\nthe root directory and it can't contain "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002F..\u002F"}]},{type:a,value:" anywhere in the path. I kept exploring the source\ncode and eventually found the following mistake."}]},{type:a,value:g},{type:b,tag:ac,props:{className:[ad]},children:[{type:b,tag:ae,props:{className:[af,ag]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,au,av]},children:[{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,ay,l]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"applyapp.cgi\""}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,au,av]},children:[{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,ay,l]},children:[{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"getapp\""}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F* Path validation is here. *\u002F"}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"strncpy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" file"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"sizeof"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" APPLYAPPSTR"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" GETAPPSTR"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"strcpy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:" url "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n        file "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"If the request path starts with "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fgetapp"}]},{type:a,value:" then the "},{type:b,tag:h,props:{},children:[{type:a,value:v}]},{type:a,value:" pointer will be moved six characters\nforward. This means that a request to "},{type:b,tag:h,props:{},children:[{type:a,value:"https:\u002F\u002F192.168.1.1\u002Fgetapp\u002Ffile.zip"}]},{type:a,value:" will be transformed into\n"},{type:b,tag:h,props:{},children:[{type:a,value:"https:\u002F\u002F192.168.1.1\u002F\u002Ffile.zip"}]},{type:a,value:", which serves the archive file located at "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Ffile.zip"}]},{type:a,value:". The request\npath validation is bypassed because the "},{type:b,tag:h,props:{},children:[{type:a,value:"getapp"}]},{type:a,value:" file path prefix is removed after validation\noccurs."}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"Due to further security checks, this vulnerability is limited to accessing files matching the\nfollowing patterns. Of particular note are the image and file archive patterns, which could let an\nattacker view personal photos or system backups from external media devices connected to the router."}]},{type:a,value:g},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Images: "},{type:b,tag:h,props:{},children:[{type:a,value:"*.gif"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.jpg"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.png"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.svg"}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"File archives: "},{type:b,tag:h,props:{},children:[{type:a,value:"*.gz"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.tgz"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.zip"}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:aD},{type:b,tag:h,props:{},children:[{type:a,value:"*.css"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.htc"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.ipk"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.pac"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.pcap*"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.swf"}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"An authenticated attacker can also read files matching the following patterns. Not much point to\nthis since an authenticated attacker can enable and log in with SSH..."}]},{type:a,value:g},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Configuration files: "},{type:b,tag:h,props:{},children:[{type:a,value:"*.CFG"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.ovpn"}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Web: "},{type:b,tag:h,props:{},children:[{type:a,value:"*.asp*"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.htm*"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.js"}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:aD},{type:b,tag:h,props:{},children:[{type:a,value:"*.appcache"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.cab"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.json"}]},{type:a,value:q},{type:b,tag:h,props:{},children:[{type:a,value:"*.xml"}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:P,props:{id:aa},children:[{type:b,tag:E,props:{href:"#disclosure-timeline",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[S,T]},children:[]}]},{type:a,value:ab}]},{type:a,value:g},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2020-05-20: Found vulnerability."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2020-05-31: Reported to Asus."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2020-06-10: Reply from Asus confirming the report, included beta firmware containing a patch for\nthe vulnerability."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2020-06-30: Firmware update with patch released (v3.0.0.4.385.20630)."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2020-07: Added to Asus' "},{type:b,tag:E,props:{href:"https:\u002F\u002Fwww.asus.com\u002Fcontent\u002Fasus-product-security-advisory\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Hall of Fame"}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"2022-11-06: Public disclosure."}]},{type:a,value:g}]}]},dir:"\u002Fblog\u002Fdirectory-traversal-on-routers-running-asuswrt",path:"\u002Fblog\u002Fdirectory-traversal-on-routers-running-asuswrt\u002Findex",extension:".md",createdAt:"2024-07-22T12:00:29.444Z"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","code","(",")","operator","keyword",",","number","li","function",", ",";","\n    ","0","string","file","p","{","char","==","*","\n        ","strlen","url","a","void","if","[","]","}","=","1","||","GETAPPSTR",2,"h2","true",-1,"icon","icon-link","path","\n\n    ","strncmp","ul","source-code","Source code","directory-traversal","Directory traversal","disclosure-timeline","Disclosure timeline","div","nuxt-content-highlight","pre","language-c","line-numbers","static","handle_request","comment","!=","'\u002F'","send_error","400","\"Bad Request\"","return","&","strcmp","3","-","macro","property","directive-hash","#","directive","define","macro-name","APPLYAPPSTR","\n        fromapp ","Other files: ")));