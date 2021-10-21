var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Kampel6263/pollList-app', // Update to point to your repository  
    user: {
      name: 'Kampel6263', // update to use your name
      email: 'andrian6263@gmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)