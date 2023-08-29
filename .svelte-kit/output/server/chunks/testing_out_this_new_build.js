import { c as create_ssr_component, a as escape } from "./ssr.js";
/* empty css     */const metadata = {
  "title": "Testing out this new build",
  "date": "2022-11-30, Tuesday",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
  "tags": ["apple", "ball", "cat", "dog", "eel"],
  "readTime": "12 min"
};
const Testing_out_this_new_build = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<p data-svelte-h="svelte-115vnxf"><img src="https://picsum.photos/640/360/?random&date=2018-10-10" alt="post picture"></p> <p data-svelte-h="svelte-a4z6gf">Naice Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod <em>tempor</em> incididunt ut labore et dolore <del>magna</del> aliqua. Ut enim ad -minim- veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <blockquote data-svelte-h="svelte-1qsq5dd"><p>Incididunt ut labore et dolore magna aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></blockquote> <!-- HTML_TAG_START -->${`<pre class="shiki github-dark-dimmed" style="background-color: #22272e" tabindex="0"><code><span class="line"><span style="color: #768390">// main.go</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F47067">package</span><span style="color: #ADBAC7"> </span><span style="color: #F69D50">main</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F47067">import</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot;</span><span style="color: #F69D50">fmt</span><span style="color: #96D0FF">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F47067">func</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">main</span><span style="color: #ADBAC7">()&#123;</span></span>
<span class="line"><span style="color: #ADBAC7">    fmt.</span><span style="color: #6CB6FF">Println</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;Naice&quot;</span><span style="color: #ADBAC7">)</span></span>
<span class="line"><span style="color: #ADBAC7">&#125;</span></span>
<span class="line"></span></code></pre>`}<!-- HTML_TAG_END --> <h4 data-svelte-h="svelte-6kz256">A List of Options</h4> <ol data-svelte-h="svelte-19dtkl7"><li>Anteater</li> <li>Bull</li> <li>Cow</li></ol> <ul data-svelte-h="svelte-1j22doz"><li>Dog</li> <li>Elephant</li></ul> <h3 data-svelte-h="svelte-35vw3e">Naice little title</h3> <ul class="contains-task-list" data-svelte-h="svelte-1v78zgu"><li class="task-list-item"><input type="checkbox" disabled> apple</li> <li class="task-list-item"><input type="checkbox" disabled> ball</li> <li class="task-list-item"><input type="checkbox" disabled> cat</li></ul> <h4 data-svelte-h="svelte-6kz256">A List of Options</h4> <ol data-svelte-h="svelte-19dtkl7"><li>Anteater</li> <li>Bull</li> <li>Cow</li></ol> <ul data-svelte-h="svelte-1j22doz"><li>Dog</li> <li>Elephant</li></ul> <button class="btn">Click ${escape(count)}</button>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Testing_out_this_new_build,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
