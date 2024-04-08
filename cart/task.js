const productQuantityControls = document.querySelectorAll('.product__quantity-controls')
const products = document.querySelectorAll('.product')
productQuantityControls.forEach( productQuantityControl =>  {
    const controlDEc = productQuantityControl.querySelector('.product__quantity-control_dec')
    const controlInc = productQuantityControl.querySelector('.product__quantity-control_inc')
    const productValue = productQuantityControl.querySelector('.product__quantity-value')

   productQuantityControl.addEventListener('click', (event) => {
       if(event.target === controlDEc) {
           productValue.textContent --
       }else if (event.target === controlInc) {
           productValue.textContent ++
       }
       if(productValue.textContent < 1) {
           return productValue.textContent = '1'
       }
   })
})

products.forEach((product) => {
    const productAdd = product.querySelector('.product__add')
    const dataId = product.getAttribute('data-id')
    const  productImage = product.querySelector('.product__image')
    const  productImageSrc = productImage.getAttribute('src')
    const cartCount = product.querySelector('.product__quantity-value')


    productAdd.onclick = () => {
        const cart = document.querySelector('.cart__products')
        const newDiv = document.createElement('div')
        const productsInCard = Array.from(document.querySelectorAll('.cart__product'))
        const product = productsInCard.find(element => element.getAttribute('data-id') === dataId)

        if(!product) {
            newDiv.innerHTML = `<div class="cart__product" data-id="${dataId}"><img class="cart__product-image" alt="" src="${productImageSrc}"><div class="cart__product-count">${cartCount.textContent}</div></div>`
            cart.appendChild(newDiv);
        } else {
            const productCount = product.querySelector('.cart__product-count');
            productCount.textContent = parseInt(productCount.textContent) + parseInt(cartCount.textContent)
        }


    }

})

