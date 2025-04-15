export class Player {
  //Recibimos los argumentos para la clase Player
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  //Creamos el metodo 'info()' para imprimir el nombre y el nivel del Jugador.
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  }
  //Creamos el metodo 'levelUp()' para aumentar el nivel del Jugador.
  levelUp(){
    return this.level ++;
  }

}