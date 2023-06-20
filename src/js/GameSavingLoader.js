import read from './reader';

import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((parsedData) => JSON.parse(parsedData))
      .catch((error) => {
        throw new Error(`Failed to load game saving: ${error}`);
      });
  }
}
