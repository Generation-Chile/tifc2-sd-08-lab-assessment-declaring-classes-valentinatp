export class Player {
  constructor(name, level, experience) {
    //Declaramos variables globales
    //let newLevel;
    this.name = name;
    this.level = level;
    this.experience = experience;
  }
  //Creamos el metodo 'info()' para imprimir el nombre y el nivel del Jugador.
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  }
  //Creamos el metodo 'levelUp()' para aumentar el nivel del Jugador.
  levelUp(){
    return this.level ++;
  }
  //Creamos el metodo par aumentar los puntos de experiencia.
  experiencePoints(){
    this.experience += 5;
    console.log(`Nivel actual: ${this.level}.`);
    this.pointsWin();
  }
  //Creamos el metodo para validar el aumento de nivel.
  pointsWin(){
    //Condicionamos la subida de nivel
    if ( this.experience >= 3 ) {
        this.levelUp();
        console.log('------------------');
        console.log('...Elevando el Ki...');
        console.log('------------------');
        console.log(`Subiendo al nivel... ${this.level}!`);
        console.log('------------------');
    }  else {
      console.log('Los puntos de experiencia son insuficientes.');
    }
  }
}  

// let newPlayer = new Player("Valee", 5, 0);

// console.log(newPlayer);

// newPlayer.experiencePoints();
// console.log(newPlayer);

// newPlayer.experiencePoints();
// console.log(newPlayer);
