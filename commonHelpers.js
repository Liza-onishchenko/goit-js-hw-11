import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const h="https://pixabay.com/api/",m="45541862-830ec78a7fc3c846a462bfeb1",g=e=>{const s=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${s.toString()}`).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()})},y=e=>`
    <li class="gallery-card">
      <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a> 
      <ul>
        <li>likes: ${e.likes}</li>
        <li>views: ${e.views}</li>
        <li>comments: ${e.comments}</li>
        <li>downloads: ${e.downloads}</li>
      </ul>
    </li>
    `,f=(e,s,t)=>{const i=e.map(y).join("");s.innerHTML=i,t.refresh()},p=e=>{e.classList.remove("is-hidden")},L=e=>{e.classList.add("is-hidden")},l=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),w=new d(".gallery-card a"),S=e=>{e.preventDefault();const s=l.elements.user_query.value.trim();if(s===""){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(u),c.innerHTML="",g(s).then(t=>{if(t.hits.length===0){n.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(t.hits,c,w)}).catch(t=>{n.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"}),console.error("Error fetching images:",t)}).finally(()=>{L(u),l.elements.user_query.value=""})};l.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
