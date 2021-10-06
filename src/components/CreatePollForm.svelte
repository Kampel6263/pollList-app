
<script>
  import PollStore from '../stores/PollStore.js'
  import AnswerStore from '../stores/AnswerStore.js'
  import {createEventDispatcher} from 'svelte'
  import Button from '../shared/Button.svelte'
  import { useForm, Hint, validators, minLength } from "svelte-use-form";
  const form = useForm();


let answersArr = []

  AnswerStore.subscribe(data=>{
    answersArr = data
  })


    const addNewAnswer = () =>{
      AnswerStore.update(currentAnswer => {

let copiedAnswer = [...currentAnswer]
let upvotedPoll = copiedAnswer.push({
  name: `Answer ${copiedAnswer.length+1}`
})


return copiedAnswer
} )
    }

 
</script>

<main>
  <form use:form>
    <div class="form-field">
      <label for="question">Poll Question:</label>
      <input name="question" use:validators={[minLength(5)]} />
      <span class="error-text">
        <Hint   for="question" on="minLength" let:value>
          The title requires at least {value} characters.
        </Hint>
      </span>
      
    </div>
    {#each answersArr as answer}
    <div class="form-field">
      <label for={answer.name}>{answer.name}</label>
      <input name={answer.name} use:validators={[minLength(7)]} />
      <span class="error-text">
        <Hint   for={answer.name} on="minLength" let:value>
          The title requires at least {value} characters.
        </Hint>
      </span>
      
    </div>
    {/each}
    <div class="add-new" on:click={addNewAnswer}>+ Add one more answer</div>
    <Button disabled={!$form.valid} type={'secondary'}>Add Poll</Button>

  </form>
</main>
  
<style>
  
  form{
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field{
    margin: 18px auto
  }
  input{
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
  .error-text{
    color: #d91b42;
    font-weight: bold;
    text-align: left;
    display: block;
  }
  .add-new{
    text-align: left;
    padding: 10px 15px;
    margin-bottom: 22px;
    color: #45c496;
    font-weight: bold;
    background: #45c49622;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s;
  }
  .add-new:hover{
    background: #45c49644;
  }
  
</style>
