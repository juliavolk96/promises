import read from './reader';

import json from './parser';

import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);
      return new GameSaving(parsedData);
    } catch (error) {
      throw new Error('Ошибка загрузки данных');
    }
  }
}
