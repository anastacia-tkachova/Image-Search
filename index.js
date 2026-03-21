import{a as u,S as w,i}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="55028646-8629ed6310cecdce9e4f8a275";u.defaults.baseURL="https://pixabay.com/api/";const d=async(t,s)=>{try{return(await u.get("",{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch(o){throw o.message}},q=new w(".gallery a",{captions:!1});function m(t){const s=document.querySelector(".gallery"),o=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:l,views:h,comments:L,downloads:b})=>`<li class="gallery-item">
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
                    <p class="img-num">${b}</p>
                </li>
            </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",o),q.refresh()}function M(){const t=document.querySelector(".gallery");t.innerHTML=""}function g(){document.querySelector(".span-loader").classList.add("loader")}function f(){document.querySelector(".span-loader").classList.remove("loader")}function p(){document.querySelector(".load-more-button").classList.remove("hidden")}function y(){document.querySelector(".load-more-button").classList.add("hidden")}const x=document.querySelector("form"),B=document.querySelector(".load-more-button");let c=null,n=1;const v=async t=>{t.preventDefault(),y();const o=t.currentTarget.elements["search-text"].value.trim(),a=t.currentTarget;if(o)c=o;else return;n=1,M(),g();try{const e=await d(c,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e.hits),Math.ceil(e.totalHits/15)>1?p():i.info({message:"We're sorry, but you've reached the end of search results."})}catch(e){i.error({message:e})}finally{f(),a.reset()}};x.addEventListener("submit",v);B.addEventListener("click",async()=>{y(),g(),n+=1;try{const t=await d(c,n),s=Math.ceil(t.totalHits/15);n>=s?i.info({message:"We're sorry, but you've reached the end of search results."}):p(),m(t.hits);const o=document.querySelector(".gallery-item");if(o){const a=o.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})}}catch(t){i.error({message:t})}finally{f()}});
//# sourceMappingURL=index.js.map
