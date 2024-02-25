<script>
  import AboutTierLists from "$lib/components/AboutTierLists.svelte";
  import { base } from "$app/paths";
</script>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h1 class="text-2xl font-bold mt-8">xwillmarktheplace's tier lists</h1>
  <p class="mt-2">Current and upcoming tier lists:</p>
  <div class="flex flex-wrap gap-4 mt-4">
    <a href="{base}/tier-lists/games"
       class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
       style={`background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('${base}/art/games/zelda-majoras-mask.jpg')`}
    >
      <span>Games</span>
    </a>

    <a href="{base}/tier-lists/rollercoasters"
       class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
       style={`background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('${base}/art/rollercoasters/fly.jpg')`}
    >
      <span class="text-center">Rollercoasters</span>
    </a>

    <a href="{base}/tier-lists/romcoms"
       class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
       style={`background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('${base}/art/romcoms/crazy-rich-asians.jpg')`}
    >
      <span>Romcoms</span>
    </a>
  </div>

  <AboutTierLists clazz="mt-4" />

</div>
