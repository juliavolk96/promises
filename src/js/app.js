// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}).catch((error) => {
  console.error(error);
});
