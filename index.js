import{a as d,S as b,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="55028646-8629ed6310cecdce9e4f8a275";d.defaults.baseURL="https://pixabay.com/api/";const u=async(t,s)=>{try{return(await d.get("",{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:9}})).data}catch(o){throw o.message}},q=new b(".gallery a",{captions:!1});function m(t){const s=document.querySelector(".gallery"),o=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:l,views:h,comments:L,downloads:w})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${a}"
                    alt="${r}"
                />
            </a>
            <ul class="img-text">
                <li class="img-text-item">
                    <p class="img-word">Likes</p>
                    <p class="img-num">${l}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Views</p>
                    <p class="img-num">${h}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Comments</p>
                    <p class="img-num">${L}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Downloads</p>
                    <p class="img-num">${w}</p>
                </li>
            </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",o),q.refresh()}function M(){const t=document.querySelector(".gallery");t.innerHTML=""}function g(){document.querySelector(".span-loader").classList.add("loader")}function p(){document.querySelector(".span-loader").classList.remove("loader")}function f(){document.querySelector(".load-more-button").classList.remove("hidden")}function y(){document.querySelector(".load-more-button").classList.add("hidden")}const x=document.querySelector("form"),B=document.querySelector(".load-more-button");let c=null,i=1;const P=async t=>{t.preventDefault(),y();const o=t.currentTarget.elements["search-text"].value.trim(),a=t.currentTarget;if(o)c=o;else return;i=1,M(),g();try{const e=await u(c,i);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e.hits),Math.ceil(e.totalHits/9)>1&&f()}catch(e){n.error({message:e})}finally{p(),a.reset()}};x.addEventListener("submit",P);B.addEventListener("click",async()=>{g(),i+=1;try{const t=await u(c,i),s=Math.ceil(t.totalHits/9);i>=s?(y(),n.info({message:"We're sorry, but you've reached the end of search results."})):f(),m(t.hits);const o=document.querySelector(".gallery-item");if(o){const a=o.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})}}catch(t){n.error({message:t})}finally{p()}});
//# sourceMappingURL=index.js.map
