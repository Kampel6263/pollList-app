<script>
  export let type = 'primary'
  export let flat = false
  export let inverse = false
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
  <slot/>

</button>

<style>
button{
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 12px;
  font-weight: bold;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
}
button.primary{
  background-color: #d91b42;
  
}
button.secondary{
  background-color: #45c496;
  
}
button.flat{
  box-shadow: none;
}
button.primary.inverse{
  background-color: #fff;
  color: #d91b42;
  border: 2px solid #d91b42;
}
button.secondary.inverse{
  background-color: #fff;
  color: #45c496;
  border: 2px solid #45c496;
}
</style>