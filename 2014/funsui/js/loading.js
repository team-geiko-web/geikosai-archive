/*! Copyright (c) 2014 九州大学噴水企画'14 | MIT Lisence | http://git.io/JbFCbw */
!function(t){"use strict";function e(){var t;return u?funsui.loaded?t=100:r?(t=66+.05*(Date.now()-r),t=90>t?t:90):a?(t=33+.05*(Date.now()-a),t=66>t?t:66):(t=.05*(Date.now()-m),t=33>t?t:33):t=0,t}function n(){var t=w+.05*(e()-w);return w=t,t}function o(){var t,e=Date.now(),i=n(),u=.01*(d+25-250)*i+250;f.clearRect(0,0,s,d),f.beginPath();for(var a=0;s>a;++a)t=u-18*Math.sin(.02*a+.005*(e-m))|0,0===a?f.moveTo(a,t):f.lineTo(a,t);f.lineTo(s,d),f.lineTo(0,d),f.closePath(),f.fill(),u>d+23?(w=100,setTimeout(function(){funsui.openLoading()},1e3)):v(o)}function i(){l.textContent=~~w+"%",100===w?setTimeout(function(){l.textContent="Enter!!"},400):v(i)}t.funsui={};var u,a,r,c=document.getElementById("wave"),f=c.getContext("2d"),s=c.width,d=c.height,m=Date.now(),l=document.getElementById("percent"),w=0,v=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}();f.fillStyle="#45BEE6",v(o),v(i),setTimeout(function(){u=!0},500),t.addEventListener("DOMContentLoaded",function(){a=Date.now()},!1),t.addEventListener("load",function(){r=Date.now()},!1)}(this);