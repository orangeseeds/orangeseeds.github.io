import { c as create_ssr_component, e as each, d as add_attribute, a as escape, i as is_promise, n as noop, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                */const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Posts", path: "/posts" }
  ];
  let query = "";
  let loadedRes;
  return `<nav class="navbar bg-base-100 px-8 py-2"><div class="navbar-start font-bold space-x-8">${each(navLinks, ({ name, path }) => {
    return `<a class="transition-all duration-200 border-y-2 border-transparent hover:border-b-slate-500"${add_attribute("href", path, 0)}>${escape(name)}</a>`;
  })}</div> <div class="navbar-end"><div class="max-w-xs relative"><input type="text" class="input input-bordered w-full h-9 text-sm !outline-0" placeholder="search..."${add_attribute("value", query, 0)}> <ul class="${["absolute border rounded bg-white top-10 w-full", "hidden"].join(" ").trim()}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(result) {
      let posts = result?.posts ? result.posts : [];
      return `  ${each(posts, (post) => {
        return `<li><a href="${escape(base, true) + "/posts/" + escape(post.slug, true)}">${escape(post.title)}</a> </li>`;
      })} ${posts.length == 0 ? `<span data-svelte-h="svelte-bbndqr">No Post Found..</span>` : ``} `;
    }(__value);
  }(loadedRes)}</ul></div> <button class="btn btn-ghost btn-circle" data-svelte-h="svelte-5fhv1a"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current w-5"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></button> <button class="btn btn-ghost btn-circle"><label class="swap swap-rotate scale-[60%] w-full h-full"> <input type="checkbox">  <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label></button></div></nav>`;
});
const logo = "/_app/immutable/assets/favicon.f7e00d5a.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer footer-center px-4 py-2 bg-base-300 text-base-content flex justify-center max-w-[100vw] absolute bottom-0" data-svelte-h="svelte-1sgf6md"><img width="24" height="24"${add_attribute("src", logo, 0)} alt="logo"> <p class="text-xs sm:text-sm font-medium flex">Copyright © 2023 - All right reserved by <a class="font-semibold hover:underline" href="https://github.com/orangeseeds">Orangeseeds</a></p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative min-h-[100vh]">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <main class="pb-20">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
