import{a as g,i as v}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const p="42772780-849d5e67a8b9b0ab7e6b7483b",d={async fetchImages(e,t=1,o=15){try{const i=await g.get(`https://pixabay.com/api/?key=${p}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`);if(!i.data.hits.length)throw new Error("No images found");return i.data.hits}catch(i){throw console.error("Error fetching images:",i),i}}};function u(e){const t=document.querySelector(".gallery"),o=document.querySelector(".load-more-btn");if(!t||!o){console.error("Gallery list or Load more button not found");return}const i=e.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}" class="gallery-link">
            <img
              src="${r.webformatURL}"
              alt="${r.tags}"
              class="gallery-image"
            />
          </a>
          <div class="image-info">
            <div class="info-item">Likes: ${r.likes}</div>
            <div class="info-item">Views: ${r.views}</div>
            <div class="info-item">Comments: ${r.comments}</div>
            <div class="info-item">Downloads: ${r.downloads}</div>
            <div class="downloads">Downloads</div>
            <div class="width-text">Width</div>
            <div class="width-value">43px</div>
          </div>
        </li>
      `).join("");t.innerHTML+=i,e.length>0&&o.classList.remove("hidden")}function f(){const e=document.querySelector(".loader");e?e.classList.add("visible"):console.error("Loader not found")}function m(){const e=document.querySelector(".loader");e?e.classList.remove("visible"):console.error("Loader not found")}function h(){v.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}const L=document.querySelector(".search-form"),n=document.querySelector(".search-input"),a=document.querySelector(".load-more-btn");let l=1;L.addEventListener("submit",async e=>{e.preventDefault();const t=n.value.trim();if(!t){w("Please enter a search query!");return}f();try{const o=await d.fetchImages(t,l);u(o),o.length<15?(a.classList.add("hidden"),h()):a.classList.remove("hidden")}catch(o){y(o)}finally{m()}});a.addEventListener("click",async()=>{l+=1,f();try{const e=await d.fetchImages(n.value.trim(),l);u(e),e.length<15?(a.classList.add("hidden"),h()):a.classList.remove("hidden")}catch(e){y(e)}finally{m()}});n.addEventListener("focus",()=>{n.classList.add("active")});n.addEventListener("blur",()=>{n.classList.remove("active")});function w(e){iziToast.warning({title:"Warning",message:e})}function y(e){console.error("Error:",e),b("An error occurred. Please try again later.")}function b(e){iziToast.error({title:"Error",message:e})}
//# sourceMappingURL=commonHelpers.js.map
