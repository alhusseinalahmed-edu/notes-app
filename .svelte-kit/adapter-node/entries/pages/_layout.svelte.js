import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav class="bg-gray-800"><div class="container mx-auto px-4"><ul class="flex items-center justify-center h-16">${data?.user ? `<li class="py-4 px-6"><a href="/" class="text-white text-lg">My Notes</a></li>
         <form action="?/logout" method="POST"><li class="py-4 px-6"><label for="signOutButton" class="text-white text-lg cursor-pointer">Sign Out</label>
             <button id="signOutButton" type="submit" class="hidden"></button></li></form>` : ``}
       
       ${!data?.user ? `<li class="py-4 px-6"><a href="/login" class="text-white text-lg hover:text-gray-300 transition-colors">Sign In</a></li>
         <li class="py-4 px-6"><a href="/register" class="text-white text-lg hover:text-gray-300 transition-colors">Sign Up</a></li>` : ``}</ul></div></nav>
   

  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
