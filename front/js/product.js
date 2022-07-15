
const params = (new URL(document.location)).searchParams
const id = params.get("id")
console.log(id)

fetch(`http://localhost:3000/api/products/${id}`)
.then(resultat => resultat.json())
.then(Display => displayOneProduct(Display))
.catch(error=> console.log(error))

function displayOneProduct(item){
    const section = document.getElementsByClassName("item")
    console.log(section[0])

    section[0].innerHTML =
    `<article>
            <div class="item__img">
            <img src= ${item.imageUrl} alt="Photographie d'un canapé">
            </div>
            <div class="item__content">

              <div class="item__content__titlePrice">
                <h1 id="title"> ${item.name} </h1>
                <p>Prix : <span id="price"> ${item.price} </span>€</p>
              </div>

              <div class="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description"> ${item.description} </p>
              </div>

              <div class="item__content__settings">
                <div class="item__content__settings__color">
                  <label for="color-select">Choisir une couleur :</label>
                  <select name="color-select" id="colors">
                      <option value="">--SVP, choisissez une couleur --</option>
                      ${item.colors.map(function(color){
                          return (
                           `<option value=${color}>
                              ${color}
                           </option>`
                          )
                      })
                    }
                  </select>
                  </div>

                  <div class="item__content__settings__quantity">
                    <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                    <input type="number" name="itemQuantity" min="1" max="100" value="1" id="quantity">
                  </div>
                </div>
  
                <div class="item__content__addButton">
                  <button id="addToCart">Ajouter au panier</button>
                </div>
  
              </div>
            </article>
          </section>`
const idColor = document.getElementById("colors")

const choixColor = idColor.value

const btnPanier = document.getElementById("addToCart")

let optionProduit = {
  name : id.name,
  section : id.id,
  colors : choixColor,
  price : id.price
} 

btnPanier.addEventListener("click", (event)=>{
  event.preventDefault()
  console.log(choixColor)
  console.log(optionProduit)
  })
}; 


