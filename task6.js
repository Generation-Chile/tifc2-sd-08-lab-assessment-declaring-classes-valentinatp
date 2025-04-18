let groupsPlayes = {
  name : 'The best players',
  teamMembers : []
}

class Player {
  constructor(name, level, experience) {
    this.name = name;
    this.level = level;
    this.experience = experience
  }
  information(){
    return console.log(`Nombre: ${this.name}, Level: ${this.level}, Experience: ${this.experience}.`);
  }
  addPlayerGroup(){
    return groupsPlayes.teamMembers.push(`Nombre: ${this.name}, Nivel: ${this.level}`);
  }
  
  removePLayerGroup(){
    // console.log(name);
    // if (name == this.name){
    //   groupsPlayes.teamMembers.slice(name,1);
    // } else if (name == 'Player') {
    //     console.log('eL nombre coincide con player');
    // } else {
    //   console.log('no coincide el nombre');
    // }
    
    return groupsPlayes.teamMembers.pop();
  }
}

let newPlayer = new Player("Valee", 5, 0);
let newPlayer2 = new Player("Nicoo", 7, 10);
//newPlayer.information();
newPlayer.addPlayerGroup();
console.log(groupsPlayes);
newPlayer2.addPlayerGroup();
console.log(groupsPlayes);
newPlayer2.removePLayerGroup(); //problemas, no reconoce la funcion.
console.log(groupsPlayes);


