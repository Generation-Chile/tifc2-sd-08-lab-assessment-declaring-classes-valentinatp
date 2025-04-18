//const prompt = require("prompt-sync")();
export class Player {
    constructor(name, level, experience, inventorySwitch) {
      this.name = name;
      this.level = level;
      this.experience = experience;
      this.inventorySwitch = inventorySwitch;
      console.log(inventorySwitch)
    }
    inventory(responseBoolean){
      
      if ( responseBoolean ) {
        // this.addArticleInventory();
        console.log('Inventario abierto!');
        // //let addArrticle = prompt("Quieres ingresar un articulo a tu inventario?: ");
        // let addArrticle = 'si';
        // if( addArrticle == 'si') {
        //   this.addArticleInventory();
        // } else {
        //   this.removeArticleInventory();
        // }
      } else {
        console.log('El inventario no ha sido abierto')
      }
    }
       
  }

let newPlayer = new Player("Valee", 5, 0, 'true');
newPlayer.inventory(true);

class Product extends Player {
  constructor(name, nameProduct, totalProducts){
    super(name);
    this.nameProduct = nameProduct;
    this.totalProducts = totalProducts;
  }
  addArticleInventory(){
    console.log('Articulo agregado');
  }
  removeArticleInventory(){
    console.log('Articulo eliminado');
  }
}
let newProduct = new Product('Nairobi','Axe', 2);
console.log(newProduct.addArticleInventory());
