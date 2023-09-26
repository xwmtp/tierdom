<script lang="ts">
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {onMount} from 'svelte';

  import type {Item} from '$lib/models/Item';

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
  <p>Tiers indicate what games mean to me. Rating is the actual quality of a game (given its context and time period).</p>
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
  <h2 class="text-xl font-bold mt-4">Is this exhaustive?</h2>
  <p class="mt-2">
    These are all the games I remember playing, and played for a long enough time to form an opinion on them.
    I've had to leave out a lot of games that I played a very long time ago, and hardly remember.
  </p>
  <h2 class="text-xl font-bold mt-4">What do the tiers mean?</h2>
  <p class="mt-4">
    The tier a game belongs to is how 'impactful' it was to me, how much I enjoyed it given its time and context.
    There might be several cases where a high tier does <em>not</em> automatically imply a recommendation.
  </p>
  <h2 class="text-xl font-bold mt-4">What about the xx/100 ratings?</h2>
  <p class="mt-2">
    These indicate how high I rate the <em>quality</em> of the game (also given its time period).
    They're supposed to be a bit more objective than the tiers, so a high rating should generally mean I recommend the game.
    There's a strong correlation between high tiers and high ratings though.
  </p>
  <p class="mt-4">
    Notable exceptions are for example games that <em>mean a lot to me</em>, but have a low rating because they're bad games.
    Vice versa, some high quality games didn't click for me, so they ended up in a low tier.
  </p>
</div>
