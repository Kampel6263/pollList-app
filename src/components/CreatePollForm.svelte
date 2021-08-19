
<script>
  import PollStore from '../stores/PollStore.js'
  import {createEventDispatcher} from 'svelte'
  import Button from '../shared/Button.svelte'
  let fields = {question: '', answerA: '', answerB: ''}
  let errors = {question: ' ', answerA: ' ', answerB: ' '}
  let valid = false

  const dispatch = createEventDispatcher()

  const submitHandler = () =>{
    valid = true
    if(fields.question.trim().length < 5){
      valid = false
      errors.question = 'Question must be at least 5 characters long'
    } else {
      errors.question = ' '
    }

    if(fields.answerA.trim().length < 1){
      valid = false
      errors.answerA = 'Answer A cannot be empty'
    } else {
      errors.answerA = ' '
    }
    if(fields.answerB.trim().length < 1){
      valid = false
      errors.answerB = 'Answer B cannot be empty'
    } else {
      errors.answerB = ' '
    }

    // add new Poll

    if(valid){
      let poll = {...fields, votesA: 0, votesB: 0, id: Math.random() * Math.random() + Math.random()}
      PollStore.update(currentPolls =>{
        return [poll, ...currentPolls]
      })
      dispatch('add')

    } else {
      console.log(errors, 'error');
    }
  }
</script>


  <form on:submit|preventDefault={submitHandler} >
    <div class="form-field">
      <label for="question">Poll Question:</label>
      <input type="text" id="question" bind:value={fields.question}>
      <span class="error-text">{errors.question}</span>
    </div>
    <div class="form-field">
      <label for="answer-a">Answer A:</label>
      <input type="text" id="answer-a" bind:value={fields.answerA}>
      <span class="error-text">{errors.answerA}</span>
    </div>
    <div class="form-field">
      <label for="answer-b">Answer B:</label>
      <input type="text" id="answer-b" bind:value={fields.answerB}>
      <span class="error-text">{errors.answerB}</span>
    </div>
    <Button type={'secondary'}>Add Poll</Button>
  </form>


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
</style>