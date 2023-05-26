import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="w-full mx-4 p-10"><div class="bg-gray-700 rounded-lg shadow-lg p-4"><div class="flex space-x-2 flex-wrap"><div class="bg-gray-800 rounded-lg shadow-lg p-4 mb-4"><form action="?/add" method="POST"><div class=""><textarea class="overflow-hidden text-center bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white" placeholder="Title" name="title" maxlength="20" required></textarea></div>
					<div class="mb-4"><textarea class="text-center text-xl bg-gray-800 w-full h-48 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white" placeholder="Enter your note" name="content" required></textarea>
						<div class="flex flex-row items-center justify-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded" type="submit">Add note
							</button>
							<input type="submit" style="position: absolute; left: -9999px"></div>
						${form?.error ? `<p class="text-red-500 mt-2 text-center">${escape(form.error)}</p>` : ``}</div></form></div>
			${data?.notes ? `${each(data.notes, (note) => {
    return `<div class="bg-gray-800 rounded-lg shadow-lg p-4 mb-4"><form action="?/add" method="POST"><div class=""><textarea class="overflow-hidden text-center bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white" placeholder="Title" name="title" maxlength="20" required>${escape(note.title, false)}</textarea></div>
							<div class="mb-4"><textarea class="text-center text-xl bg-gray-800 w-full h-48 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white" placeholder="Enter your note" name="content" required>${escape(note.content, false)}</textarea>
								<div class="flex flex-row items-center justify-center"><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-20 rounded" type="submit" formaction="?/delete">Delete note
									</button>
                  <input style="display:none" type="text" name="noteId" id=""${add_attribute("value", note.id, 0)}>
									<input type="submit" style="position: absolute; left: -9999px"></div>
								${form?.error ? `<p class="text-red-500 mt-2 text-center">${escape(form.error)}</p>` : ``}
							</div></form>
					</div>`;
  })}` : ``}</div></div></div>`;
});
export {
  Page as default
};
