__NUXT_JSONP__("/blog/discord-embed-spoofing", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{blog:{slug:"index",description:"Vulnerability in Discord client URL parsing makes custom embed content appear to come from a legitimate domain",title:"Discord embed spoofing",toc:[],body:{type:"root",children:[{type:b,tag:m,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"TLDR:"}]},{type:a,value:" I found a vulnerability in the way the Discord clients parse URLs which makes my custom embed content appear to come from a legitimate domain.\nThe message "},{type:b,tag:f,props:{},children:[{type:a,value:"https:\u002F\u002Fdiscord.gg%2ek.vu"}]},{type:a,value:" will show an embed from "},{type:b,tag:f,props:{},children:[{type:a,value:q}]},{type:a,value:" but display as "},{type:b,tag:f,props:{},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Discord uses Node’s "},{type:b,tag:f,props:{},children:[{type:a,value:"url.parse()"}]},{type:a,value:" function to process URLs in messages. Node’s parser expects to receive a URL which has already had its percent encoding decoded into special characters. Discord’s web and desktop clients forget to do this and instead attempt to parse the raw user input."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"A "},{type:b,tag:f,props:{},children:[{type:a,value:t}]},{type:a,value:" symbol is never allowed in a hostname ("},{type:b,tag:"a",props:{href:u},children:[{type:a,value:u}]},{type:a,value:") so the parser considers the hostname as the text before the "},{type:b,tag:f,props:{},children:[{type:a,value:t}]},{type:a,value:". This results in the server (which decodes the "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" to a "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:") and the client seeing different URLs."}]},{type:a,value:e},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F node parseUrl.js 'https:\u002F\u002Fdiscord.gg%2ek.vu'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:"Url"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"{"}]},{type:a,value:"\n  protocol"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'https:'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  slashes"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  auth"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,l,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  host"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  port"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,l,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  hostname"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  hash"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,l,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  search"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,l,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  query"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,l,p]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  pathname"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  path"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:"\n  href"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"'https:\u002F\u002Fdiscord.gg\u002F%2ek.vu'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"}"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"The server which loads the embed content acts the same way as a normal web browser and decodes the "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" before loading the embed from "},{type:b,tag:f,props:{},children:[{type:a,value:q}]},{type:a,value:". The desktop and web clients incorrectly parse the URL and display it as "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:", suggesting that the URL came from "},{type:b,tag:f,props:{},children:[{type:a,value:z}]},{type:a,value:w}]},{type:a,value:e},{type:b,tag:A,props:{src:"discord_1.png"},children:[{type:a,value:"\n  It’s from discord.gg, right?\n"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"This vulnerability can be used for much more realistic phishing attacks as the blue text that the user is clicking is different to the website that it links to. For example, clicking “Join the Official Fortnite Discord Server!” in the image below sends the victim to a cloned Discord login page. The user has just seen the "},{type:b,tag:f,props:{},children:[{type:a,value:z}]},{type:a,value:" URL so they are unlikely to be suspicious of the login page."}]},{type:a,value:e},{type:b,tag:A,props:{src:"discord_2.png"},children:[{type:a,value:"\n  Phishing potential: clicking on the link in the embed will take you to my domain\n"}]},{type:a,value:e},{type:b,tag:s,props:{},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"I contacted Discord security about this vulnerability and they claim that it is not a security vulnerability as “there is no guarantee the link in a message matches the link in the title.” As such, there is no patch available and all desktop and web clients are currently vulnerable. Mobile devices do not display the deceiving slash."}]}]},dir:"\u002Fblog\u002Fdiscord-embed-spoofing",path:"\u002Fblog\u002Fdiscord-embed-spoofing\u002Findex",extension:".md",createdAt:B,updatedAt:B}}],fetch:[],mutations:[]}}("text","element","span","token","\n","code"," ","punctuation","operator",":",",","null","p","string","keyword","nil","https:\u002F\u002Fdiscord.gg.k.vu","https:\u002F\u002Fdiscord.gg\u002F%2ek.vu","blog-hr","%","ietf.org\u002Frfc\u002Frfc2396.html#section-3.2.2","%2e",".","'discord.gg'","'%2ek.vu'","discord.gg","blog-img","2021-02-06T04:50:54.123Z")));