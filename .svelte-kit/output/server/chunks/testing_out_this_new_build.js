import { c as create_ssr_component, a as escape } from "./ssr.js";
/* empty css     */const metadata = {
  "title": "Testing out this new build",
  "date": "2022-11-29",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
};
const Testing_out_this_new_build = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<p data-svelte-h="svelte-115vnxf"><img src="https://picsum.photos/640/360/?random&date=2018-10-10" alt="post picture"></p> <p data-svelte-h="svelte-13oc4i7">Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod <em>tempor</em> incididunt ut labore et dolore <del>magna</del> aliqua. Ut enim ad -minim- veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <blockquote data-svelte-h="svelte-1qsq5dd"><p>Incididunt ut labore et dolore magna aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></blockquote> <pre class="language-go"><!-- HTML_TAG_START -->${`<code class="language-go">
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Naice"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre> <h4 data-svelte-h="svelte-6kz256">A List of Options</h4> <ol data-svelte-h="svelte-19dtkl7"><li>Anteater</li> <li>Bull</li> <li>Cow</li></ol> <ul class="contains-task-list" data-svelte-h="svelte-1ctug1t"><li><p>Dog</p></li> <li><p>Elephant</p></li> <li class="task-list-item"><p><input type="checkbox" disabled> apple</p></li> <li class="task-list-item"><p><input type="checkbox" disabled> ball</p></li></ul> <button class="btn">Click ${escape(count)}</button>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testing_out_this_new_build,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
