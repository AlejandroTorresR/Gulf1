var prices=[{name:"img/reto1.png"},{name:"img/reto2.png"},{name:"img/reto3.png"},{name:"img/reto4.png"}];$(function(){var n=$(".roulette").fortune(prices),r=function(){$(".spinner").off("click"),$(".spinner span").hide(),n.spin().done(function(n){document.getElementById("myImg").src=n.name,$(".spinner").on("click",r),$(".spinner span").show()})};$(".spinner").on("click",r)}),function(n){n.fn.fortune=function(r){if(void 0===r)throw new Error("You must define the options.prices");var i=n.extend({},{prices:r,duration:1e3,separation:2,min_spins:10,max_spins:15,onSpinBounce:function(){}},r),s=this,e=Array.isArray(i.prices)?i.prices.length:i.prices,t=360/e,o=!1;s.spin=function(r){r="number"==typeof r?r:Math.floor(Math.random()*e);var m=n.Deferred(),p=Math.floor(t*(r-.5)+c(i.separation,t-i.separation)),u=c(i.min_spins,i.max_spins),f=360*u+p,l=0,d=!1;o=!0,s.css({transform:"rotate("+f+"deg)","-webkit-transform":"rotate("+f+"deg)",transition:"transform "+i.duration+"ms cubic-bezier(.17,.67,.12,.99)","-webkit-transition":"-webkit-transform "+i.duration+"ms cubic-bezier(.17,.67,.12,.99)"}).siblings(".spin").removeClass("bounce");var b=function(){var n,r=Math.floor(a(s)),e=Math.floor((r+.5*t)%t),c=t/5,m=t/10;l=Math.floor(l>r?l-360:l),n=r-l,c>e&&m>n||3*c>e&&n>=m?d||(s.siblings(".spin").addClass("bounce"),i.onSpinBounce(s.siblings(".spin")),d=!0):(s.siblings(".spin").removeClass("bounce"),d=!1),o&&(l=r,requestAnimationFrame(b))},g=requestAnimationFrame(b);return setTimeout(function(){s.css({transform:"rotate("+p+"deg)","-webkit-transform":"rotate("+p+"deg)",transition:"","-webkit-transition":""}).siblings(".spin").removeClass("bounce"),cancelAnimationFrame(g),m.resolve(Array.isArray(i.prices)?i.prices[r]:r),o=!1},i.duration),m.promise()};var a=function(n){var r=0,i=n.css("-webkit-transform")||n.css("-moz-transform")||n.css("-ms-transform")||n.css("-o-transform")||n.css("transform");if("none"!==i){var s=i.split("(")[1].split(")")[0].split(","),e=s[0],t=s[1],o=Math.atan2(t,e);0>o&&(o+=2*Math.PI),r=Math.round(o*(180/Math.PI))}return r},c=function(n,r){return Math.floor(Math.random()*(r-n+1))+n};return s}}(jQuery);