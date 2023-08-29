var buttonsplus = document.getElementsByClassName('buttonplus')

console.log(buttonsplus)
var prix = document.getElementsByClassName('prix')
console.log(prix)
var buttonsmoins = document.getElementsByClassName('buttonmoins')
console.log(buttonsmoins)
var quantities = document.getElementsByClassName('quantity')
console.log(quantities)
var suprimer = document.getElementsByClassName('buttonsuprimer')
console.log(suprimer)
var total = document.getElementById('total')
console.log(total)

// gestion des bouttons plus
for (const button of buttonsplus) {
    button.addEventListener("click", () => {
        var quantity = button.nextElementSibling.getAttribute("value")
        console.log(quantity)
        var quantityInt = parseInt(quantity)

        button.nextElementSibling.setAttribute("value", quantityInt + 1) 
          totalCalcul()
        console.log()
    })
}

// gestion des bouttons moins
for (const button of buttonsmoins) {
    button.addEventListener('click', () => {
        var quantity = button.previousElementSibling.getAttribute("value")
        var quantityInt = parseInt(quantity)

        if (quantityInt > 0) {
            button.previousElementSibling.setAttribute("value", quantityInt - 1)
           totalCalcul()
        }
        console.log()
    })
}
// gestion des buttons suprimer
for (const button of suprimer) {
    button.addEventListener('click', () => {
        var grandParent = button.parentElement.parentElement
        grandParent.remove()
       totalCalcul()
        console.log()
    })
}

// fonction qui calcul le prix
const totalCalcul = () => {
    var subtotal = 0
    for (let i = 0; i < quantities.length; i++) {
        subtotal += parseInt(quantities[i].value) * parseInt(prix[i].value)
        console.log(subtotal)
    }
    total.innerHTML = subtotal
}
totalCalcul()


