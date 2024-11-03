interface product {
    description : string;
    price : number
}
const phone:product = {
    description:'nokia',
    price:150
}

const tablet:product = {
    description: "Ipad",
    price: 250
}

const shoppingcart = [phone,tablet];
const tax = 0.15;

interface taxCalculationOptions {
    tax:number;
    products:product[];
}



function taxCalculation(option:taxCalculationOptions): number[]{

    let total = 0;
    option.products.forEach(producto => {
        total += producto.price;
    })
    return[total,total * option.tax]
}
const result = taxCalculation({
    products:shoppingcart,
    tax:tax,
})
console.log('total',result[1])