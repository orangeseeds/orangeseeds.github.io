import { n as noop, h as assign, i as identity, c as create_ssr_component, b as subscribe, a as escape, d as add_attribute, e as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
/* empty css                      */import { w as writable } from "../../../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tocWidth, $$unsubscribe_tocWidth;
  let { data } = $$props;
  let { tocContainer } = $$props;
  let toc = [];
  let tocWidth = tweened(16, { duration: 200 });
  $$unsubscribe_tocWidth = subscribe(tocWidth, (value) => $tocWidth = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.tocContainer === void 0 && $$bindings.tocContainer && tocContainer !== void 0)
    $$bindings.tocContainer(tocContainer);
  $$unsubscribe_tocWidth();
  return `<div class="fixed right-1 max-w-sm sm:max-w-[14rem] font-light space-y-4 text-slate-600 border p-4 rounded-sm shadow-xs bg-base-100 hidden lg:block" style="${"width: " + escape($tocWidth, true) + "rem;"}"${add_attribute("this", tocContainer, 0)}><button class="font-bold outline-0 hover:underline" data-svelte-h="svelte-1saxryf">Contents</button> <ol class="${["text-sm font-light space-y-2", ""].join(" ").trim()}">${each(toc, (elem) => {
    return `<button class="text-left w-fit hover:underline text-emerald-600 text-sm px-5"><li type="1">${escape(elem.innerText)}</li> </button>`;
  })}</ol></div> <div class="fixed right-1 max-w-xs rounded-lg border border-base-400 bg-base-100 shadow-sm truncate text-slate-800" hidden><div class="px-4 py-4 flex items-start flex-col"><button class="w-fit hover:scale-125 active:scale-150" hidden data-svelte-h="svelte-6cv0fs"><svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-fit" viewBox="0 0 512 512" fill="green"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></button> <button class="w-fit my-4 text-lg font-semibold hover:underline" data-svelte-h="svelte-ak1dcf">Contents</button> ${`<div data-svelte-h="svelte-1hd1swz"><ol></ol></div>`}</div></div> <div${add_attribute("this", tocContainer, 0)}></div> <div class="mb-1 max-w-2xl"><h2 class="mb-1 font-semibold text-3xl">${escape(data.post.title)}</h2> <span class="text-sm font-normal text-slate-400 my-2">${escape(data.post.date)}</span> <p class="font-light text-slate-500 mt-4">${escape(data.post.description)}</p></div> <article id="article" class="prose prose-slate-800 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-normal prose-p:text-md max-w-2xl">${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>       `;
});
export {
  Page as default
};
