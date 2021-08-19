<script>
  import {fade, scale} from 'svelte/transition'
  import {flip } from 'svelte/animate'
  import PollStore from '../stores/PollStore.js' 
  import PollDetails from '../components/PollDetails.svelte'

  let polls = []

  PollStore.subscribe(data=>{
    polls = data
  })
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
  <div in:fade out:scale|local animate:flip={{duration: 500}}>
    <PollDetails on:vote {poll}/>
  </div>
    
{/each}
</div>



<style>
  .poll-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>