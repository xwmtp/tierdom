<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  import type { Item } from '$lib/models/Item';

  import InfoBox from '$lib/components/InfoBox.svelte';
  import ItemModal from '$lib/components/ItemModal.svelte';
  import ItemRectangle from '$lib/components/ItemRectangle.svelte';
  import ItemSquare from '$lib/components/ItemSquare.svelte';
  import TierContainer from '$lib/components/TierContainer.svelte';

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
  <p>! Under construction ! Tiers indicate how much I personally enjoyed romantic comedies I watched. Rating is the actual quality of the movie.</p>
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
  <h2 class="text-xl font-bold mt-4">Why romcoms??</h2>
  <p class="mt-2">
    Romantic comedies are my (not so) guilty pleasure.
    Watching them is a great way to wind down and relax, and I'm just a sucker for romance, what can I say.
    Listing all the movies I've ever watched seemed like too daunting of a task, so I decided to just list the romcoms I remember watching!
  </p>

  <h2 class="text-xl font-bold mt-4">What do the tiers mean?</h2>
  <p class="mt-4">
    The tier a movie belongs to indicates how much I personally enjoyed it; how much emotionally invested I was.
  </p>

  <h2 class="text-xl font-bold mt-4">What about the xx/100 ratings?</h2>
  <p class="mt-2">
    These indicate how high I rate the <em>quality</em> of the movie.
    There may be examples where a movie is not objectively bad, but I just personally didn't relate to it.
    There's a strong correlation between high tiers and high ratings though.
  </p>
</div>
