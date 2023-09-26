<script>
  import AboutTierLists from '$lib/components/AboutTierLists.svelte';
</script>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h1 class="text-2xl font-bold mt-8">xwillmarktheplace's tier lists</h1>
  <p class="mt-2">Current and upcoming tier lists:</p>
  <div class="flex flex-wrap gap-4 mt-4">
    <a href="/tier-lists/games" class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
      style="background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('art/games/zelda-majoras-mask.png')"
    >
      <span>Games</span>
    </a>

    <a href="/tier-lists/romcoms" class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
       style="background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('art/romcoms/crazy-rich-asians.png')"
    >
        <span>Romcoms</span>
    </a>

    <span class="border-2 border-transparent text-shadow font-bold bg-center bg-cover text-xl aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30 opacity-50">
      <span class="text-center">Rollercoasters<br>(upcoming)</span>
    </span>
  </div>

  <AboutTierLists clazz="mt-4" />

</div>
