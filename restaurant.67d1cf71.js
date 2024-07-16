const anchors=document.querySelectorAll('a[href*="#"]');for(let t of anchors)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=restaurant.67d1cf71.js.map
