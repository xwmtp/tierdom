<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import type { Item } from "$lib/models/Item";

  import InfoBox from "$lib/components/InfoBox.svelte";
  import ItemModal from "$lib/components/ItemModal.svelte";
  import ItemRectangle from "$lib/components/ItemRectangle.svelte";
  import ItemSquare from "$lib/components/ItemSquare.svelte";
  import TierContainer from "$lib/components/TierContainer.svelte";

  export let data;

  let selected: Item | null = null;

  function select(item: Item | null) {
    selected = item;
    const currentPath = $page.url.pathname;
    const url = !item ? currentPath : `${currentPath}#${item.code}`;
    goto(url, { noScroll: true });
  }

  function onHashChangedThroughBrowser() {
    const hash = location.hash.substring(1);
    selected = data.tierList.findByCode(hash);
  }

  onMount(() => {
    const hash = $page.url.hash.substring(1);
    selected = data.tierList.findByCode(hash);
  });
</script>

<svelte:window on:hashchange={onHashChangedThroughBrowser} />

{#if selected}
  <ItemModal item={selected} on:dismiss={() => select(null)} />
{/if}

<InfoBox clazz="my-4">
  <p>! Under construction ! Tiers indicate how much I personally enjoyed rollercoasters I went on. Rating is the more objective quality of the coaster, as far as I can judge.</p>
</InfoBox>

<div class="flex flex-col gap-1 bg-black/50 my-2">
  {#each data.tierList.tiers as tier}
    <TierContainer {tier}>
      {#each tier.items as item}
        {#if data.display === 'detailed'}
          <ItemRectangle {item} />
        {:else}
          <ItemSquare on:click={() => select(item)} {item} />
        {/if}
      {/each}
    </TierContainer>
  {/each}
</div>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h2 class="text-xl font-bold mt-4">Rollercoasters</h2>
  <p class="mt-2">
    I'm a huge sucker for good theme parks, and definitely enjoy going on rollercoasters.
    Here I'm tracking the coasters that I can clearly remember going on.
    I'll exclude very small or children's coasters, unless I find them interesting to rate regardless.
  </p>

  <h2 class="text-xl font-bold mt-4">What do the * asterisks mean?</h2>
  <p class="mt-2">
    These are coasters that do not exist anymore.
  </p>

  <h2 class="text-xl font-bold mt-4">What do the tiers mean?</h2>
  <p class="mt-4">
    The tier a rollercoaster belongs to indicates how much I personally enjoyed it.
    Of course I have my own preferences, so something might get a higher or lower tier based on details like theming or the type of coaster!
  </p>

  <h2 class="text-xl font-bold mt-4">What about the xx/100 ratings?</h2>
  <p class="mt-2">
    These indicate how high I rate the <em>quality</em> of the rollercoaster, in a more objective way.
    There may be examples where a coaster is not objectively bad, but I just personally didn't enjoy it.
    In that case the tier is probably low, but the score still decent.
    Generally there's a strong correlation between high tiers and high ratings though.
  </p>
</div>
