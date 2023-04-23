<script>
    import A from '$lib/components/A.svelte';
    import AboutTierLists from '$lib/components/AboutTierLists.svelte';
</script>

<!-- prettier-ignore -->
<div class="max-w-4xl">
    <h1 class="text-2xl font-bold mt-8">What is all this?</h1>
    <p class="mt-2">
        Welcome to <strong>Tierdom</strong>: a List of Lists for things I like.
        Visualized in "Tier Maker" style.
    </p>
    <p class="mt-2">
        Tierdom was created by
        <A href="https://jeroenheijmans.nl">Jeroen Heijmans</A>
        . I'm just reusing the code and included my own tier lists.
        Check out the original source code at <A href="https://github.com/jeroenheijmans/tierdom">github.com/jeroenheijmans/tierdom</A>.
    </p>


    <AboutTierLists clazz="mt-8"/>
</div>
