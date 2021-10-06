import { writable } from 'svelte/store'

const AnswerStore = writable(
  [
    {
      name: 'Answer 1'
    },
    {
      name: 'Answer 2'
    }
  ]
)

export default AnswerStore