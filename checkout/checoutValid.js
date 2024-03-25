function checkoutValidation(books,quantity,shippingAdress){

    if(books.length<0){
        
       return"please select at least one book";
    }

    for (let i=0;i<quantity.length;i++){
        if(!Number.isInteger(quantity[i])||quantity[i]<0){
       return "selected the quantity of book";
        }    
    }
    if(books.length!==quantity.length){
        console.error("please check the books or quantity given")
       return;
    }
    let totalCost = 0;
    for (let i = 0; i < books.length; i++) {
        totalCost += books[i].price * quantity[i];
    }
    const shippingCost = 10;
    totalCost += shippingCost;

       console.log("orderDetails")
    const orderDetails = {
        books: books.map((book, index) => ({
            title: book.title,
            price: book.price,
            quantity: quantity[index]
        })),
        Address: shippingAdress,
        totalCost: totalCost
    };

    return orderDetails;


}
// const books = [
//      {title:"PoorDad", price:100 },
//     {title:"Lenin",price:150}
// ];
// const bookquantity = [3,5];
// const Address = "1234455/9876";

// console.log(checkoutValidation(books, bookquantity, Address));//outPut of Code

module.exports=checkoutValidation;