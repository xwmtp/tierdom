<script lang="ts">
  import A from "$lib/components/A.svelte";
  import NavItem from "$lib/components/NavItem.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import DisplayModeSwitcher from "$lib/components/DisplayModeSwitcher.svelte";

  $: showDisplayModeSwitcher = $page.url.pathname.includes('/tier-lists/');
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100">
  <div class="mb-8">
    <div class="pb-4">
      <div class="sticky top-0 py-1 md:py-2 border-b border-b-slate-900/20 bg-slate-700 z-10 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
        <nav class="flex gap-1 md:gap-4 max-w-page mx-auto px-2 md:px-4 ">
          <div class="flex flex-wrap items-center gap-1 md:gap-4">
            <NavItem route="{base}/">Home</NavItem>
            <span class="hidden md:inline-block w-2" />
            <NavItem route="{base}/tier-lists/games">Games</NavItem>
            <NavItem route="{base}/tier-lists/rollercoasters">Rollercoasters</NavItem>
            <NavItem route="{base}/tier-lists/romcoms">Romcoms</NavItem>
            <span class="hidden md:inline-block w-2" />
            <NavItem route="{base}/about">About</NavItem>
          </div>
          {#if showDisplayModeSwitcher}
            <div class={`ml-auto flex flex-nowrap`}>
              <DisplayModeSwitcher />
            </div>
          {/if}
        </nav>
      </div>
      <div class="max-w-page mx-auto px-2 md:px-4 ">
        <slot />
      </div>
    </div>
  </div>
  <footer class="mt-auto border-t border-t-slate-700 bg-black/10 py-2">
    <div class="px-2 md:px-4 opacity-50 text-sm">
      <div class="max-w-page mx-auto flex gap-4">
        <A href="https://github.com/jeroenheijmans/tierdom">Tierdom Source</A>
      </div>
    </div>
  </footer>
</div>
