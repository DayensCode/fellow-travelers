document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".filter__button"),t=document.querySelectorAll(".filter__inputs"),n=document.querySelectorAll(".filter__icon"),o=document.querySelector(".filter__inputs-transport"),i=document.getElementById("transport"),c=document.getElementById("transport-icon"),l=document.querySelector(".filter__range"),d=document.getElementById("range-button"),r=document.getElementById("range-icon");e.forEach(((e,o)=>{e.addEventListener("click",(function(){const e=window.innerWidth;(e<731||e>=1360)&&(t[o].classList.toggle("filter__inputs_open"),n[o].classList.toggle("filter__icon_deployed"))}))})),i.addEventListener("click",(function(){const e=window.innerWidth;(e<731||e>=1360)&&(o.classList.toggle("filter__inputs-transport_open"),c.classList.toggle("filter__icon_deployed"))})),d.addEventListener("click",(function(){const e=window.innerWidth;(e<731||e>=1360)&&(l.classList.toggle("filter__range_open"),r.classList.toggle("filter__icon_deployed"))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("range"),t=document.getElementById("max-value");e.addEventListener("input",(function(){t.textContent=this.value}))}));