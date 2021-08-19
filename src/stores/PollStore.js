import { writable } from 'svelte/store'

const PollStore = writable(
  [
    {
      id: 1,
      question: 'React or Svelte',
      answerA: 'React',
      answerB: 'Svelte',
      votesA: 9,
      votesB: 15
    },
    {
      id: 2,
      question: 'SCSS or Tailwind',
      answerA: 'SCSS',
      answerB: 'Tailwind',
      votesA: 4,
      votesB: 11
    },
    {
      id: 3,
      question: 'Front-end or Back-end',
      answerA: 'Front-end',
      answerB: 'Back-end',
      votesA: 3,
      votesB: 1
    },
    {
      id: 4,
      question: 'Dog or Cat',
      answerA: 'Dog',
      answerB: 'Cat',
      votesA: 1,
      votesB: 0
    }
  ]
)

export default PollStore