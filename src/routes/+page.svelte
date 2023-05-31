<script lang="ts">
	import type { ActionData, PageServerData } from './$types';
	export let form: ActionData;
	export let data: PageServerData;
  
  if (typeof document !== 'undefined') {
		document.addEventListener('DOMContentLoaded', function (event) {
			var scrollpos = localStorage.getItem('scrollpos');
			if (scrollpos) window.scrollTo(0, parseInt(scrollpos));
		});

		window.onscroll = function (e) {
			localStorage.setItem('scrollpos', window.scrollY.toString());
		};
	}

	function OnValueChangeAdd() {
		const form = document.getElementById('addForm');
		const title = document.getElementById('titleId')?.innerText;
		const content = document.getElementById('contentId')?.innerText;
		if (form) {
			//form.submit();
		}
	}
	function OnValueChangeUpdate() {
		const form = document.getElementById('updateForm');
		if (form) {
			form.action = '?/update';
			form.submit();
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-screen bg-gray-800">
	<div class="w-1/4 mx-4 p-10 mt-10">
		<h1 class="text-center text-2xl text-white"> ✏ Write a new note</h1>
		<div class="bg-gray-700 rounded-lg shadow-lg p-4">
			<div class="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
				<form action="?/add" method="POST" id="addForm">
					<div>
						<textarea
							class="overflow-hidden text-center bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white"
							placeholder="Title"
							name="title"
							id="titleInput"
							maxlength="20"
							required
							on:change={OnValueChangeAdd}
						/>
					</div>
					<div class="mb-4">
						<textarea
							class="text-center text-xl bg-gray-800 w-full h-32 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white"
							placeholder="Enter your note"
							name="content"
							id="noteContent"
							required
							on:change={OnValueChangeAdd}
						/>
						<div class="flex flex-row items-center justify-center">
							<button
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
								type="submit"
								id="addButton"
							>
								Add note
							</button>
						</div>
						{#if form?.error}
							<p class="text-red-500 mt-2 text-center">{form.error}</p>
						{/if}
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="w-full mx-4 p-10 h-screen bg-gray-900">
		<h1 class="text-center text-6xl mb-10 text-white">📒My notes</h1>
		<div class="grid grid-cols-6 gap-4">
			{#if data?.notes}
				{#each data.notes as note}
					<div class="bg-gray-700 rounded-lg shadow-lg p-2 w-60">
						<form action="?/add" method="POST" id="updateForm">
							<div>
								<textarea
									class="overflow-hidden text-center bg-gray-800 w-full h-8 p-1 border border-gray-300 rounded text-white"
									placeholder="Title"
									name="title"
									id="titleInput"
									maxlength="20"
									on:change={OnValueChangeUpdate}
									required>{note.title}</textarea
								>
							</div>
							<div class="mb-2">
								<textarea
									class="text-center text-lg bg-gray-800 w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white"
									placeholder="Enter your note"
									name="content"
									id="noteContent"
									on:change={OnValueChangeUpdate}
									required>{note.content}</textarea
								>
								<div class="flex flex-row items-center justify-center">
									<button
										class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded w-h"
										type="submit"
										formaction="?/delete"
									>
										Delete note
									</button>
									<button
										class="left-9999 display:none"
										type="submit"
										id="update"
										formaction="?/update"
									/>
									<input
										style="display:none"
										type="text"
										name="noteId"
										id="noteId"
										value={note.id}
									/>
								</div>
								{#if form?.error}
									<p class="text-red-500 mt-2 text-center">{form.error}</p>
								{/if}
							</div>
						</form>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
