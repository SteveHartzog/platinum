class Game {
  load(res) {
    return res.json({
      location: [0, 0],
      gameTime: ['799', 'Ches', '5', '13:25'],
      party: [ 1, 2, 3, 4, 5, 6],
      saveTime: 'July 2, 2017'
    });
  }

  save(game, res) {
    if (!confirmRequiredFields(game)) {
      const message = `Missing '${field}' in game save`;
      console.error(message);
      return res.status(400).send(message);
    } else {
      let saveTime = new Date();
      game.saveTime = saveTime;
      console.log(`Game saved.`);  
      return res.status(204).json(game);
    }
  }

  confirmRequiredFields(obj) {
    const requiredFields = ['location', 'gameTime', 'party', 'saveTime' ];
    for (let i=0; i<requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in obj)) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  Game: new Game()
}