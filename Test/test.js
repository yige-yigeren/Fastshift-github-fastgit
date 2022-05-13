javascript:(function()
{const rules={
    'github.com':{testReg:/^http(?:s)?:\/\/github\.com/$1,replace:'https://hub.fastgit.xyz/$1',query:['p'],hash:!0}
    }};
const pureUrl=function(url=window.location.href){const hash=url.replace(/^[^#]*(#.*)?$/,'$1'),base=url.replace(/(\?|#).*$/,'');
let pureUrl=url;
const getQueryString=function(key){let ret=url.match(new RegExp('(?:\\?|&)('+key+'=[^?#&]*)','i'));
return null===ret?'':ret[1]},
methods={decodeUrl:function(url){return decodeURIComponent(url)}};
for(let i in rules){let rule=rules[i],reg=rule.testReg,replace=rule.replace;
if(reg.test(url)){let newQuerys='';
void 0!==rule.query&&rule.query.length>0&&rule.query.map(query=>{const ret=getQueryString(query);
''!==ret&&(newQuerys+=(newQuerys.length?'&':'?')+ret)}),newQuerys+=void 0!==rule.hash&&rule.hash?hash:'',
pureUrl=(void 0===replace?base:url.replace(reg,replace))+newQuerys,void 0!==rule.methods&&rule.methods.length>0&&rule.methods.map(methodName=>{pureUrl=methods[methodName](pureUrl)});
break}}return pureUrl}();
let newnode=document.createElement('input');
newnode.id='pure-url-for-copy',newnode.value=pureUrl,document.body.appendChild(newnode);
let copyinput=document.getElementById('pure-url-for-copy');
copyinput.select();
try{document.execCommand('copy');
window.location.href===pureUrl?window.location.reload():window.location.href=pureUrl}catch(err){null!=prompt('净化后的网址是：',pureUrl)&&(window.location.href=pureUrl)}document.body.removeChild(copyinput)})();