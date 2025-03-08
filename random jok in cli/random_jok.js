import https from 'https';
import chalk from 'chalk';

const getJoke = () =>{
  const url = 'https://official-joke-api.appspot.com/random_joke'
  https.get(url,(res)=>{
    let data = "";
    
    res.on('data',(chunk) =>{
 data += chunk
    })
    res.on('end',() =>{
        const joke = JSON.parse(data)
        console.log('Here is a random Joke:');
        console.log(chalk.red.bgRed.bold(joke.setup)); 
        console.log(chalk.blue.bgRed.bold(joke.punchline)); 
    })
    res.on('error', (err) => {
        console.error(chalk.red('Error fetching joke:'), err);
    });
  })
}

getJoke();
