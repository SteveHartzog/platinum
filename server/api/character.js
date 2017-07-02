class Character {

  constructor() {
    this.characters = [
      { id: 1, name: "Vex'ahlia", race: "Half-Elf", class: "Ranger", level: 18,
        abilityScores: { strength: 7, intellect: 14, dexterity: 20, wisdom: 14, constitution: 10, charisma: 17 }, armorClass: 19, hitPoints: 128 },
      { id: 2, name: "Vax'ildan", race: "Half-Elf", class: "Rogue", level: 18,
        abilityScores: { strength: 14, intellect: 16, dexterity: 20, wisdom: 14, constitution: 11, charisma: 14 }, armorClass: 20, hitPoints: 119 },
      { id: 3, name: "Keyleth", race: "Half-Elf", class: "Druid", level: 18,
        abilityScores: { strength: 14, intellect: 15, dexterity: 15, wisdom: 22, constitution: 14, charisma: 10 }, armorClass: 17, hitPoints: 133 },
      { id: 4, name: "Percival Fredrickstein Von Musel Klossowski De Rolo III", race: "Human", class: "Gunslinger", level: 18,
        abilityScores: { strength: 12, intellect: 20, dexterity: 22, wisdom: 16, constitution: 14, charisma: 14 }, armorClass: 18, hitPoints: 149 },
      { id: 5, name: "Grog Strongjaw", race: "Goliath", class: "Barbarian", level: 18,
        abilityScores: { strength: 26, intellect: 6, dexterity: 15, wisdom: 10, constitution: 20, charisma: 13 }, armorClass: 17, hitPoints: 241 },
      { id: 6, name: "Pike", race: "Gnome", class: "Cleric", level: 16,
        abilityScores: { strength: 19, intellect: 13, dexterity: 11, wisdom: 20, constitution: 12, charisma: 14 }, armorClass: 23, hitPoints: 105 },
      { id: 7, name: "Scanlan Shorthalt", race: "Gnome (Forest)", class: "Bard", level: 17,
        abilityScores: { strength: 13, intellect: 14, dexterity: 11, wisdom: 7, constitution: 16, charisma: 22 }, armorClass: 16, hitPoints: 161 }
    ];
  }

  get(id, res) {
    if (id) {
      let character = this.characters.find({id: id});
      return res.json(character);
    } else {
      return res.json(this.characters);
    }
  }

  add(obj, res) {
    if (!confirmRequiredFields(obj)) {
      const message = `Missing '${field}' in request body`;
      console.error(message);
      return res.status(400).send(message);
    } else {
      console.log(`Created character: ${obj}`);
      return res.status(201).json(obj);
    }
  }

  delete(id, res) {
    console.log(`Deleted character bu id: ${id}`);
    return res.status(204).end();
  }

  update(character, res) {
    if (!confirmRequiredFields(obj)) {
      const message = `Missing '${field}' in request body`;
      console.error(message);
      return res.status(400).send(message);
    } else {
      console.log(`Editing character ${req.params.id}`);  
      const updatedItem = Character.update(req.body);
      return res.status(204).json(updatedItem);
    }
  }

  confirmRequiredFields(obj) {
    const requiredFields = ['name', 'race', 'stats', 'class', 'level', 'feats' ];
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
  Character: new Character()
}