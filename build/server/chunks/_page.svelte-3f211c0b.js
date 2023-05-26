import { c as create_ssr_component, e as escape } from './index2-227e1bff.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex items-center justify-center h-screen bg-gray-900"><div class="w-1/4 bg-gray-800 rounded-lg shadow-lg p-14"><h2 class="text-center text-4xl font-bold text-white mb-6">Sign Up</h2>
	  <form action="?/register" method="POST"><div class="mb-8"><label class="block text-white text-lg font-bold mb-2" for="username">Username</label>
		  <input class="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="username" id="username" type="text" placeholder="Enter your username"></div>
		<div class="mb-8"><label class="block text-white text-lg font-bold mb-2" for="password">Password</label>
		  <input class="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="Enter your password"></div>
		<div class="flex items-center justify-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-20 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button></div>

		${form?.error ? `<p class="text-red-500 mt-2 text-center">${escape(form.error)}</p>` : ``}</form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3f211c0b.js.map
