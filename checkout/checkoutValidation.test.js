const checkoutValidation=require('./checoutValid')

test('If negative quantity is given then return error message', () => {
  const books = [
      { title: "book2334", price: 100 },
      { title: "book5644", price: 150 }
  ];
  const quantity = [-1, 3];
  const address = "1234455/9876";

  expect(checkoutValidation(books, quantity, address)).toBe("selected the quantity of book");
});

test('If positive quantity is given it will return details', () => {
  const books = [
      { title: "PoorDad", price: 100 },
      { title: "Lenin", price: 150 }
  ];
  const quantity = [2, 3];
  const address = "1234455/9876";
  const orderDetails = {
    books: [
        { title: "PoorDad", price: 100, quantity: 2 },
        { title: "Lenin", price: 150, quantity: 3 }
    ],
    Address: "1234455/9876",
    totalCost: 660 
};

  expect(checkoutValidation(books, quantity, address)).toEqual(orderDetails);
});
// test('throws error if no books are selected', () => {
//   const quantity = [];
//   const Address = "123 Main St, City, Country";

//   expect(() => {
//     checkoutValidation([], quantity, Address);
//   }).toBe("Please select at least one book.");
// });

test('If negative books is given then return error message', () => {
  const books = [
     // { title: "book5644", price: 150 }
  ];
  const quantity = [1, 3];
  const address = "1234455/9876";

  expect(checkoutValidation(books, quantity, address)).toBe("please select at least one book");
});
