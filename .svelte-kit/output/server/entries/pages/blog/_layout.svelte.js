import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="layout"><main>${slots.default ? slots.default({}) : ``}</main></div>          `;
});
export {
  Layout as default
};
