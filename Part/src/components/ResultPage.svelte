<script>
    import carStore from '../routes/store'
    import {get} from 'svelte/store'
    import {onMount} from 'svelte';
    import ResultPageV1 from './ResultPageV1.svelte';
    import ResultPageV2 from './ResultPageV2.svelte';
    export let version = 1;

    let cars = get(carStore);
    let loading = true;
    onMount(()=>{
        setTimeout(()=>{
            loading = false
        }, 5000)
    })
</script>

{#if loading}
    <div class="progress_bar">
        <div class="line"></div>
    </div>
{:else}
    {#each cars as  car}
        {#if version == 1}
            <ResultPageV1 car={car}/>
        {:else}
            <ResultPageV2 car={car}/>    
        {/if}
    {/each}
{/if}