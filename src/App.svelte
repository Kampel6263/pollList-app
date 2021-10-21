<script>
  import {fade} from 'svelte/transition'
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
import Tabs from "./shared/Tabs.svelte";
import CreatePollForm from './components/CreatePollForm.svelte'
import PollList from './components/PollList.svelte'
let items = ['Current Polls', 'Add New Poll']
let activeItem  = 'Add New Poll'

  const tabChange = (e) =>{
    activeItem = e.detail
  }

const handleAdd = (e) =>{
  activeItem = 'Current Polls'
}

</script>



<Header/>
<main>

	<Tabs {items} {activeItem} on:tabChange = {tabChange}/>

  {#if activeItem === 'Current Polls' }
  <PollList />
    {:else}
    <div in:fade>
      <CreatePollForm on:add ={handleAdd}/>
    </div>
 
  {/if}
</main>
<Footer  />
<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }
</style>