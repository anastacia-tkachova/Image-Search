import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CGrBtzJ7.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`55028646-8629ed6310cecdce9e4f8a275`;t.defaults.baseURL=`https://pixabay.com/api/`;var o=async(e,n)=>{try{return(await t.get(``,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}})).data}catch(e){throw e.message}},s=e(r(),1),c=new(s.default.default||s.default)(`.gallery a`,{captions:!1});function l(e){let t=document.querySelector(`.gallery`),n=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img
                    class="gallery-image"
                    src="${e}"
                    alt="${n}"
                />
            </a>
            <ul class="img-text">
                <li class="img-text-item">
                    <p class="img-word">Likes</p>
                    <p class="img-num">${r}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Views</p>
                    <p class="img-num">${i}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Comments</p>
                    <p class="img-num">${a}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Downloads</p>
                    <p class="img-num">${o}</p>
                </li>
            </ul>
        </li>`).join(``);t.insertAdjacentHTML(`beforeend`,n),c.refresh()}function u(){let e=document.querySelector(`.gallery`);e.innerHTML=``}function d(){document.querySelector(`.span-loader`).classList.add(`loader`)}function f(){document.querySelector(`.span-loader`).classList.remove(`loader`)}function p(){document.querySelector(`.load-more-button`).classList.remove(`hidden`)}function m(){document.querySelector(`.load-more-button`).classList.add(`hidden`)}var h=document.querySelector(`form`),g=document.querySelector(`.load-more-button`),_=null,v=1;h.addEventListener(`submit`,async e=>{e.preventDefault(),m();let t=e.currentTarget.elements[`search-text`].value.trim(),n=e.currentTarget;if(t)_=t;else return;v=1,u(),d();try{let e=await o(_,v);if(e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}l(e.hits),Math.ceil(e.totalHits/15)>1?p():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e})}finally{f(),n.reset()}}),g.addEventListener(`click`,async()=>{m(),d(),v+=1;try{let e=await o(_,v),t=Math.ceil(e.totalHits/15);v>=t?i.default.info({message:`We're sorry, but you've reached the end of search results.`}):p(),l(e.hits);let n=document.querySelector(`.gallery-item`);if(n){let e=n.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:`smooth`})}}catch(e){i.default.error({message:e})}finally{f()}});