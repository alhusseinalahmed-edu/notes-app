<script lang="ts">
	import '../app.css';
   export let data;

</script>

<nav class="bg-gray-800">
   <div class="container mx-auto px-4">
     <ul class="flex items-center justify-center h-16">
       {#if data?.user}
         <li class="py-4 px-6"><a href="/" class="text-white text-lg">My Notes</a></li>
         <li class="py-4 px-6"><a href="/settings" class="text-white text-lg">Settings</a></li>
         <form action="?/logout" method="POST">
           <li class="py-4 px-6">
             <label for="signOutButton" class="text-white text-lg cursor-pointer">Sign Out</label>
             <button id="signOutButton" type="submit" class="hidden"></button>
           </li>
         </form>
       {/if}
       
       {#if !data?.user}
         <li class="py-4 px-6">
           <a href="/login" class="text-white text-lg hover:text-gray-300 transition-colors">Sign In</a>
         </li>
         <li class="py-4 px-6">
           <a href="/register" class="text-white text-lg hover:text-gray-300 transition-colors">Sign Up</a>
         </li>
       {/if}
     </ul>
   </div>
 </nav>
   

  <slot/>
