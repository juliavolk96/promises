// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    console.log(gameSaving);
  } catch (error) {
    console.error(error);
  }
})();
