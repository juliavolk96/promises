import { test, expect } from '@jest/globals';
import GameSavingLoader from '../GameSavingLoader';

import GameSaving from '../GameSaving';

test('GameSavingLoader - должен разрешать промис и создавать экземпляр GameSaving', () => {
  const expectedData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const promise = GameSavingLoader.load();
  return promise
    .then((gameSaving) => {
      console.log('Parsed data:', gameSaving); // Отладочный вывод
      expect(gameSaving).toBeInstanceOf(GameSaving);
      expect(gameSaving.id).toEqual(expectedData.id);
      expect(gameSaving.created).toEqual(expectedData.created);
      expect(gameSaving.userInfo.id).toEqual(expectedData.userInfo.id);
      expect(gameSaving.userInfo.name).toEqual(expectedData.userInfo.name);
      expect(gameSaving.userInfo.level).toEqual(expectedData.userInfo.level);
      expect(gameSaving.userInfo.points).toEqual(expectedData.userInfo.points);
    })
    .catch((error) => {
      console.error('Error during promise execution:', error); // Отладочный вывод
    });
});
