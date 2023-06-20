import { test, expect } from '@jest/globals';

import GameSavingLoader from '../GameSavingLoader';

import GameSaving from '../GameSaving';

test('GameSavingLoader - должен разрешать промис и создавать экземпляр GameSaving', async () => {
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

  try {
    const gameSaving = await GameSavingLoader.load();

    expect(gameSaving).toBeInstanceOf(GameSaving);
    expect(gameSaving.id).toEqual(expectedData.id);
    expect(gameSaving.created).toEqual(expectedData.created);
    expect(gameSaving.userInfo.id).toEqual(expectedData.userInfo.id);
    expect(gameSaving.userInfo.name).toEqual(expectedData.userInfo.name);
    expect(gameSaving.userInfo.level).toEqual(expectedData.userInfo.level);
    expect(gameSaving.userInfo.points).toEqual(expectedData.userInfo.points);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});
