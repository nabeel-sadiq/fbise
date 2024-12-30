<script>
  import "../app.css";
  let { children } = $props();
  import Navbar from "$lib/components/custom/Navbar.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import Info from "$lib/components/custom/Info.svelte";
  import Card from "$lib/components/custom/Card.svelte";
  import Github from "$lib/components/custom/Github.svelte";
  import ClassSelect from "$lib/components/custom/ClassSelect.svelte";
  import Footer from "$lib/components/custom/Footer.svelte";
</script>

<Navbar />
<div
  class="text-center flex flex-col justify-center items-center py-20 px-6 text-balance"
>
  <Info />
  <h1 class="text-5xl font-bold mt-6">FBISE Model Papers</h1>
  <p class="text-slate-400 mt-2">
    Collection of all the fbise model papers for all classes regarding board
    exams.
  </p>
  <span class="flex gap-3 mt-6">
    <ClassSelect />
  </span>
</div>

{@render children()}

<Footer />
