import { c as create_ssr_component, o as onDestroy, e as each, a as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
/* empty css                      */import { w as writable } from "../../../../chunks/index.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const activeTOCElem = writable({});
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const TOC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toc } = $$props;
  let active = Array(toc.length).fill(false);
  const unsub = activeTOCElem.subscribe((data) => {
    const index = toc.indexOf(data);
    active.fill(false);
    active[index] = true;
    active = active;
  });
  afterNavigate(() => {
    active = active.fill(false);
  });
  onDestroy(() => {
    unsub();
  });
  if ($$props.toc === void 0 && $$bindings.toc && toc !== void 0)
    $$bindings.toc(toc);
  return `<div class="w-92 max-w-sm sm:max-w-[14rem] font-light space-y-4 text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block sticky top-14"><h2 class="font-bold" data-svelte-h="svelte-2urmw0">Contents</h2> <ol class="text-sm font-light h-40 max-h-screen overflow-y">${each(toc, (elem, index) => {
    return `<button class="${[
      "text-left w-fit hover:underline text-emerald-600 text-sm px-10 border border-0 border-l py-2 hover:border-l-1 hover:border-slate-500",
      (active[index] ? "border-l-2" : "") + " " + (active[index] ? "border-slate-600" : "") + " " + (active[index] ? "font-semibold" : "")
    ].join(" ").trim()}"><li type="1">${escape(elem.innerText)}</li> </button>`;
  })}</ol></div>`;
});
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags } = $$props;
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<div class="max-w-sm sm:max-w-[14rem] font-light text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block"><h2 class="font-bold mb-5" data-svelte-h="svelte-1yxekda">Tags</h2> <div class="flex flex-wrap">${each(tags, (tag) => {
    return `<a href="#" class="py-1 px-3 mb-2 rounded-full text-slate-500 text-sm font-medium border border-slate-300 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:underline">${escape(tag)}</a>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let toc = [];
  function updateToc() {
    const content = document.getElementById("article");
    toc = Array.from(content.children).filter((child) => {
      if (child instanceof HTMLHeadingElement) {
        actionWhenInViewport(child);
        return true;
      }
      return false;
    });
  }
  afterNavigate(() => {
    updateToc();
  });
  let observer;
  function actionWhenInViewport(e) {
    observer = new IntersectionObserver(
      (entries) => {
        if (e instanceof HTMLHeadingElement) {
          if (entries[0].boundingClientRect.top <= 0) {
            activeTOCElem.set(e);
          }
        }
      },
      {}
    );
    observer.observe(e);
  }
  onDestroy(() => {
    observer?.disconnect();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` <div class="lg:mb-0 mb-24"><div class="mb-1 max-w-2xl"><h2 class="mb-1 font-semibold text-3xl">${escape(data.post.title)}</h2> <span class="text-sm font-normal text-slate-400 my-2">Posted ${escape(data.post.date)} · ${escape(data.post.readTime)} read</span> <p class="font-light text-slate-500 mt-4">${escape(data.post.description)}</p></div> <article id="article" class="prose prose-slate-800 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-normal prose-p:text-md max-w-2xl">${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article></div> <div class="space-y-8 ml-10">${validate_component(Tags, "Tags").$$render($$result, { tags: data.post.tags }, {}, {})} ${validate_component(TOC, "Toc").$$render($$result, { toc }, {}, {})}</div> <button class="${[
    "btn btn-circle btn-outline fixed bottom-16 right-14 text-3xl text-center shadow-lg border-slate-200 text-slate-500 hover:bg-slate-600 hover:text-white hidden lg:block",
    "hidden"
  ].join(" ").trim()}" data-svelte-h="svelte-j9f94p"></button>`;
});
export {
  Page as default
};
