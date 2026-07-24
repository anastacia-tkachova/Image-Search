import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-LwKIkq4E.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`55028646-8629ed6310cecdce9e4f8a275`;t.defaults.baseURL=`https://pixabay.com/api/`;var o=async(e,n)=>{try{return(await t.get(``,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}})).data}catch(e){throw e.message}},s=new(e(r(),1)).default.default(`.gallery a`,{captions:!1});function c(e){let t=document.querySelector(`.gallery`),n=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`<li class="gallery-item">
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
        </li>`).join(``);t.insertAdjacentHTML(`beforeend`,n),s.refresh()}function l(){let e=document.querySelector(`.gallery`);e.innerHTML=``}function u(){document.querySelector(`.span-loader`).classList.add(`loader`)}function d(){document.querySelector(`.span-loader`).classList.remove(`loader`)}function f(){document.querySelector(`.load-more-button`).classList.remove(`hidden`)}function p(){document.querySelector(`.load-more-button`).classList.add(`hidden`)}var m=document.querySelector(`form`),h=document.querySelector(`.load-more-button`),g=null,_=1;m.addEventListener(`submit`,async e=>{e.preventDefault(),p();let t=e.currentTarget.elements[`search-text`].value.trim(),n=e.currentTarget;if(t)g=t;else return;_=1,l(),u();try{let e=await o(g,_);if(e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}c(e.hits),Math.ceil(e.totalHits/15)>1?f():i.default.info({message:`We're sorry, but you've reached the end of search results.`})}catch(e){i.default.error({message:e})}finally{d(),n.reset()}}),h.addEventListener(`click`,async()=>{p(),u(),_+=1;try{let e=await o(g,_),t=Math.ceil(e.totalHits/15);_>=t?i.default.info({message:`We're sorry, but you've reached the end of search results.`}):f(),c(e.hits);let n=document.querySelector(`.gallery-item`);if(n){let e=n.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:`smooth`})}}catch(e){i.default.error({message:e})}finally{d()}});
//# sourceMappingURL=index.js.map