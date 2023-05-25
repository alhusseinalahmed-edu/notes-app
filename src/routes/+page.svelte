<script lang="ts">
	import type { ActionData, PageServerData } from './$types';
	export let form: ActionData;

	export let data: PageServerData;
</script>

<div class="w-full mx-4 p-10">
	<div class="bg-gray-700 rounded-lg shadow-lg p-4">
		<div class="flex space-x-2 flex-wrap">
			<div class="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
				<form action="?/add" method="POST">
					<div class="">
						<textarea
							class="overflow-hidden text-center bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white"
							placeholder="Title"
							name="title"
							maxlength="20"
							required
						/>
					</div>
					<div class="mb-4">
						<textarea
							class="text-center text-xl bg-gray-800 w-full h-48 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white"
							placeholder="Enter your note"
							name="content"
							required
						/>
						<div class="flex flex-row items-center justify-center">
							<button
								class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded"
								type="submit"
							>
								Add note
							</button>
							<input type="submit" style="position: absolute; left: -9999px" />
						</div>
						{#if form?.error}
							<p class="text-red-500 mt-2 text-center">{form.error}</p>
						{/if}
					</div>
				</form>
			</div>
			{#if data?.notes}
				{#each data.notes as note}
					<div class="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
						<form action="?/add" method="POST">
							<div class="">
								<textarea
									class="overflow-hidden text-center bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white"
									placeholder="Title"
									name="title"
									maxlength="20"
									required
                >{note.title}</textarea>							
              </div>
							<div class="mb-4">
								<textarea
									class="text-center text-xl bg-gray-800 w-full h-48 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white"
									placeholder="Enter your note"
									name="content"
									required
								>{note.content}</textarea>
								<div class="flex flex-row items-center justify-center">
									<button
										class="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-20 rounded"
										type="submit"
                    formaction="?/delete"
									>
										Delete note
									</button>
                  <input style="display:none" type="text" name="noteId" id="" value={note.id}>
									<input type="submit" style="position: absolute; left: -9999px" />
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
