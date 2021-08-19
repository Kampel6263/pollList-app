<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={()=>dispatch('tabChange', item)}>
        <div class="item" class:active = {item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .item{
    padding-bottom: 4px;
    transition: .1s;
    border-bottom: 3px solid #d91b4200;
  }
  .active{
    color: #d91b42;
    border-bottom: 3px solid #d91b42;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li{
    margin: 0 16px 12px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
</style>