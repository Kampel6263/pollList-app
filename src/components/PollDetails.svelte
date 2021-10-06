<script>
  import PollStore from '../stores/PollStore.js'
  import Card from '../shared/Card.svelte'
  import Button from '../shared/Button.svelte'
  import {tweened} from 'svelte/motion'
  export let poll;



$: totalVotes = poll.totalVotes


const handleVote = (index, id) =>{
  PollStore.update(currentPolls => {

  let copiedPolls = [...currentPolls]
  let upvotedPoll = copiedPolls.find(poll => poll.id === id)
 
  upvotedPoll.answers[index].votes++
  upvotedPoll.totalVotes++

  return copiedPolls
  } )

}
   
const handleDelete = (id) =>{
  PollStore.update(currentPolls => {
    return currentPolls.filter(el => el.id !== id)
  })
}


</script>

<Card>
  <div class="poll">

    <h3>{poll.question}</h3>
    <p>
      Total votes: {totalVotes}
    </p>
    {#each poll.answers as el,i}
    <div class="answer" on:click={()=> handleVote(i, poll.id)}>
      <div style={`width: ${Math.floor(el.votes/totalVotes * 100) || 0}%`} class="percent"></div>
      <span>{el.answer} ({el.votes})</span>
    </div>
    {/each}

    <div class="delete" on:click = {() => handleDelete(poll.id)}>
      <Button >
        Delete
      </Button>
    </div>
  </div>


</Card>

  
<style>

h3{
  margin: 0 auto;
  color: #555
}
p{
  margin-top: 6px;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 30px;

}
.answer{
  background: #fafafa;
  cursor: pointer;
  margin: 10px auto;
  position: relative;
}
.answer:hover{
  opacity: .8;
}
span{
  display: inline-block;
  padding: 10px 20px;

}

.percent{
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  border-left: 4px solid #d91b42;
  background: rgba(217, 27, 66, 0.2);
  transition: .3s;

}


.delete{
  margin-top: 30px;
  text-align: center;
}

</style>