import { writable } from 'svelte/store'

const PollStore = writable(
  [

    {
      id: 1,
      question: 'Dog or Cat',
      totalVotes: 15,
      answers: [
        {
          answer: 'Dog',
          votes: 5
        },
        {
          answer: 'Dog',
          votes: 10
        },
        {
          answer: 'Dog',
          votes: 0
        }
      ],
    },
    {
      id: 2,
      question: 'Dog or Cat',
      totalVotes: 0,
      answers: [
        {
          answer: 'Dog',
          votes: 0
        },
        {
          answer: 'Dog',
          votes: 0
        },
        {
          answer: 'Dog',
          votes: 0
        },
        {
          answer: 'Dog',
          votes: 0
        },
        {
          answer: 'Dog',
          votes: 0
        }
      ],
    }
  ]
)

export default PollStore


