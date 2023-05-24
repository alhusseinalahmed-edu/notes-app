<script lang="ts">
import type { ActionData, PageServerData, PageServerLoad } from "./$types";

export let form:ActionData;

export let data: PageServerLoad;

</script>


<div class="min-h-screen bg-gray-900 flex flex-col items-center">
    <div class="max-w-xl w-full mx-4 mt-8">
      <div class="bg-gray-700 rounded-lg shadow-lg p-4 mb-4">
        <h3 class="text-center text-xl font-bold mb-2 text-white">Write a New Note</h3>
        <form action="?/add" method="POST" class="flex flex-col items-center">
            <div class="mb-4">
            <input
                class="bg-gray-800 w-full h-10 p-2 border border-gray-300 rounded text-white"
                type="text"
                placeholder="Title"
                name="title"
                required
            />
            </div>
            <div class="mb-4">
            <textarea
                class="text-xl bg-gray-800 w-full h-64 p-5 border border-gray-300 rounded focus:outline-none focus:shadow-outline text-white"
                placeholder="Enter your note"
                name="content"
                required
            ></textarea>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Add note
            </button>

            {#if form?.error}
            <p class="text-red-500 mt-2 text-center">{ form.error}</p>
            {/if}
    
            </div>
        </form>
      </div>
    </div>
  
    <div class="w-full mx-4 p-10">
      <h2 class="text-3xl font-bold mb-4 text-white">Notes</h2>
      <div class="bg-gray-700 rounded-lg shadow-lg p-4 flex flex-wrap">
        <!-- Previous notes container -->
        <div class="flex space-x-4">
            {#each data?.notes? as note}
            <div class="bg-gray-800 p-4 rounded-lg">
                <h4 class="text-lg font-bold text-white">Note Title</h4>
                <p class="text-white">Note Text</p>
            </div>
           {/each}
          <!-- Repeat the above <div> for each note -->
        </div>
      </div>
    </div>
  </div>
  