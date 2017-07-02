class Party {
  constructor() {
    this.party = [1, 2, 3, 4, 5, 6, 7];
  }
  get(res) {
    return res.json(this.party);
  }

  add(id, res) {
    console.log(`Character added to party: ${id}`);
    return res.status(204).end();
  }

  remove(id, res) {
    console.log(`Remove character from party: ${id}`);
    return res.status(204).end();
  }
}

module.exports = {
  Party: new Party()
}