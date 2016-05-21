(function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

var relatedTitles = new Array(); var relatedTitlesNum = 0; var relatedUrls = new Array(); function related_results_labels(json) { for (var i = 0; i < json.feed.entry.length; i++) { var entry = json.feed.entry[i]; relatedTitles[relatedTitlesNum] = entry.title.$t; for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') {relatedUrls[relatedTitlesNum] = entry.link[k].href; relatedTitlesNum++; break;}}}} function removeRelatedDuplicates() { var tmp = new Array(0); var tmp2 = new Array(0); for(var i = 0; i < relatedUrls.length; i++) { if(!contains(tmp, relatedUrls[i])) { tmp.length += 1; tmp[tmp.length - 1] = relatedUrls[i]; tmp2.length += 1; tmp2[tmp2.length - 1] = relatedTitles[i];}} relatedTitles = tmp2; relatedUrls = tmp;} function contains(a, e) { for(var j = 0; j < a.length; j++) if (a[j]==e) return true; return false;} function printRelatedLabels() { var r = Math.floor((relatedTitles.length - 1) * Math.random()); var i = 0; document.write('<ul>'); while (i < relatedTitles.length && i < 20) { document.write('<li><a href="' + relatedUrls[r] + '">' + relatedTitles[r] + '</a></li>'); if (r < relatedTitles.length - 1) { r++; } else { r = 0;} i++;} document.write('</ul>');

var relnojudul = 0;
var relmaxtampil = 8;
var numchars = 90;
var reljudul=new Array();var relurls=new Array();var relcuplikan=new Array();var relgambar=new Array();function saringtags(g,h){var e=g.split("<");for(var f=0;f<e.length;f++){if(e[f].indexOf(">")!=-1){e[f]=e[f].substring(e[f].indexOf(">")+1,e[f].length)}}e=e.join("");e=e.substring(0,h-1);return e}function relpostimgcuplik(h){for(var e=0;e<h.feed.entry.length;e++){var g=h.feed.entry[e];reljudul[relnojudul]=g.title.$t;postcontent="";if("content" in g){postcontent=g.content.$t}else{if("summary" in g){postcontent=g.summary.$t}}relcuplikan[relnojudul]=saringtags(postcontent,numchars);if("media$thumbnail" in g){postimg=g.media$thumbnail.url}else{postimg="https://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.GIF"}relgambar[relnojudul]=postimg;for(var f=0;f<g.link.length;f++){if(g.link[f].rel=="alternate"){relurls[relnojudul]=g.link[f].href;break}}relnojudul++}}function contains(a,e){for(var f=0;f<a.length;f++){if(a[f]==e){return true}}return false}function artikelterkait(){var v=new Array(0);var w=new Array(0);var x=new Array(0);var A=new Array(0);for(var u=0;u<relurls.length;u++){if(!contains(v,relurls[u])){v.length+=1;v[v.length-1]=relurls[u];w.length+=1;w[w.length-1]=reljudul[u];x.length+=1;x[x.length-1]=relcuplikan[u];A.length+=1;A[A.length-1]=relgambar[u]}}reljudul=w;relurls=v;relcuplikan=x;relgambar=A;for(var u=0;u<reljudul.length;u++){var B=Math.floor((reljudul.length-1)*Math.random());var i=reljudul[u];var s=relurls[u];var y=relcuplikan[u];var C=relgambar[u];reljudul[u]=reljudul[B];relurls[u]=relurls[B];relcuplikan[u]=relcuplikan[B];relgambar[u]=relgambar[B];reljudul[B]=i;relurls[B]=s;relcuplikan[B]=y;relgambar[B]=C}var r=0;var D=Math.floor((reljudul.length-1)*Math.random());var z=D;var q;var t=document.URL;while(r<relmaxtampil){if(relurls[D]!=t){q="<li class='news-title clearfix'>";q+="<a href='"+relurls[D]+"' target='_top' title='"+reljudul[D]+"'><div class='overlayb'></div><img src='"+relgambar[D]+"' /></a>";q+="<a class='relinkjdulx' href='"+relurls[D]+"' target='_top'>"+reljudul[D]+"</a>";q+="<span class='news-text'>"+relcuplikan[D]+"</span>";q+="</li>";document.write(q);r++;if(r==relmaxtampil){break}}if(D<reljudul.length-1){D++}else{D=0}if(D==z){break}}};

var disqus_shortname="sepukom";
var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

  function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("https://urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    }