javascript:(function(){const rules={'www.bilibili.com':{testReg:/^http(?:s)?:\/\/www\.bilibili\.com\/video\/(av\d+).*$/i,replace:%27https://www.bilibili.com/$1%27,query:[%27p%27],hash:!0},%27itunes.apple.com%27:{testReg:/^http(?:s)?:\/\/itunes\.apple\.com\/(?:\w{2}\/)?([^\/]+)\/(?:[^\/]+\/)?((?:id)\d+).*$/i,replace:%27https://itunes.apple.com/cn/$1/$2%27},%27chrome.google.com/webstore%27:{testReg:/^http(?:s)?:\/\/chrome\.google\.com\/webstore\/detail\/[^\/]+\/([a-z]{32}).*/i,replace:%27https://chrome.google.com/webstore/detail/$1%27},%27s.taobao.com%27:{testReg:/^http(?:s)?:\/\/s\.taobao\.com\/search.*$/i,replace:%27https://s.taobao.com/search%27,query:[%27q%27]},%27list.tmall.com%27:{testReg:/^http(?:s)?:\/\/list\.tmall\.com\/search_product\.htm.*$/i,replace:%27https://list.tmall.com/search_product.htm%27,query:[%27q%27]},%27item.taobao.com%27:{testReg:/^http(?:s)?:\/\/item\.taobao\.com\/item\.htm.*$/i,replace:%27https://item.taobao.com/item.htm%27,query:[%27id%27]},%27detail.tmall.com%27:{testReg:/^http(?:s)?:\/\/detail\.tmall\.com\/item\.htm.*$/i,replace:%27https://detail.tmall.com/item.htm%27,query:[%27id%27]},%27taobao/tmall.com/shop%27:{testReg:/^http(?:s)?:\/\/(\w+)\.(taobao|tmall)\.com\/shop\/view_shop\.htm.*$/i,replace:%27https://$1.$2.com/%27},%27c.pc.qq.com%27:{testReg:/^http(?:s)?:\/\/c\.pc\.qq\.com\/middle.html\?.*pfurl=([^&]*)(?:&.*$|$)/i,replace:%27$1%27,query:[],methods:[%27decodeUrl%27]},%27item.m.jd.com%27:{testReg:/^http(?:s)?:\/\/item\.m\.jd\.com\/product\/(\d+)\.html(\?.*)?$/i,replace:%27https://item.jd.com/$1.html%27},%27item.m.jd.com/ware/%27:{testReg:/^http(?:s)?:\/\/item\.m\.jd\.com\/ware\/view\.action\?.*wareId=(\d+).*$/i,replace:%27https://item.jd.com/$1.html%27},%27search.jd.com%27:{testReg:/^http(?:s)?:\/\/search\.jd\.com\/Search\?.*$/i,query:[%27keyword%27,%27enc%27]},%27re.jd.com%27:{testReg:/^http(?:s)?:\/\/re\.jd\.com\/cps\/item\/(\d+)\.html.*$/i,replace:%27https://item.jd.com/$1.html%27},%27weibo.com/u%27:{testReg:/^http(?:s)?:\/\/(?:www\.)?weibo\.com\/u\/(\d+)(\?.*)?$/i,replace:%27https://m.weibo.cn/$1%27},%27weibo.com%27:{testReg:/^http(?:s)?:\/\/(?:www\.)?weibo\.com\/(?:\d+)\/(\w+)(\?.*)?$/i,replace:%27https://m.weibo.cn/status/$1%27},%27greasyfork.org%27:{testReg:/^http(?:s)?:\/\/(?:www\.)?greasyfork\.org\/(?:[\w-]*\/)?scripts\/(\d+)-.*$/i,replace:%27https://greasyfork.org/zh-CN/scripts/$1%27},%27store.steampowered.com|steamcommunity.com%27:{testReg:/^http(?:s)?:\/\/(store\.steampowered|steamcommunity)\.com\/app\/(\d+).*$/i,replace:%27https://$1.com/app/$2%27},%27meta.appinn.com%27:{testReg:/^http(?:s)?:\/\/meta\.appinn\.net\/t(?:\/[^/]*)*?\/(\d+)(\/.*$|$)/i,replace:%27https://meta.appinn.net/t/$1%27},%27amazon.co.jp%27:{testReg:/^http(?:s)?:\/\/(?:www\.)?amazon\.co\.jp\/([^\/]+)\/dp\/(\w+)\/.*$/i,replace:%27https://www.amazon.co.jp/$1/dp/$2%27},%27yangkeduo.com%27:{testReg:/^http(?:s)?:\/\/mobile\.yangkeduo\.com\/goods.html\?.*$/i,query:[%27goods_id%27]},other:{testReg:/^(http(?:s)?:\/\/[^?#]*)[?#].*$/i,query:['id','tid','uid','q','wd','query','keyword']}};const pureUrl=function(url=window.location.href){const hash=url.replace(/^[^#]*(#.*)?$/,'$1'),base=url.replace(/(\?|#).*$/,'');let pureUrl=url;const getQueryString=function(key){let ret=url.match(new RegExp('(?:\\?|&)('+key+'=[^?#&]*)','i'));return null===ret?'':ret[1]},methods={decodeUrl:function(url){return decodeURIComponent(url)}};for(let i in rules){let rule=rules[i],reg=rule.testReg,replace=rule.replace;if(reg.test(url)){let newQuerys='';void 0!==rule.query&&rule.query.length>0&&rule.query.map(query=>{const ret=getQueryString(query);''!==ret&&(newQuerys+=(newQuerys.length?'&':'?')+ret)}),newQuerys+=void 0!==rule.hash&&rule.hash?hash:'',pureUrl=(void 0===replace?base:url.replace(reg,replace))+newQuerys,void 0!==rule.methods&&rule.methods.length>0&&rule.methods.map(methodName=>{pureUrl=methods[methodName](pureUrl)});break}}return pureUrl}();let newnode=document.createElement('input');newnode.id='pure-url-for-copy',newnode.value=pureUrl,document.body.appendChild(newnode);let copyinput=document.getElementById('pure-url-for-copy');copyinput.select();try{document.execCommand('copy');window.location.href===pureUrl?window.location.reload():window.location.href=pureUrl}catch(err){null!=prompt('净化后的网址是：',pureUrl)&&(window.location.href=pureUrl)}document.body.removeChild(copyinput)})();