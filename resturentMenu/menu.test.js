const itemsMenu = require('./menu'); // Import the itemsMenu class

describe('itemsMenu', () => {
  let menu;

  beforeEach(() => {
    menu = new itemsMenu();
    menu.addItem("Burger", "Juicy beef burger with lettuce and cheese", 10.99, "Main");
    menu.addItem("Salad", "Fresh garden salad with vinaigrette dressing", 8.49, "Appetizer");
    menu.addItem("Pizza", "Classic Margherita pizza with tomato and mozzarella", 12.99, "Main");
  });

  test('Adding a new item', () => {
    menu.addItem("Pasta", "Spaghetti with marinara sauce", 11.99, "Main");
    expect(menu.menu.length).toBe(4);
  });

  test('Adding a duplicate item should throw an error', () => {
    expect(() => {
      menu.addItem("Burger", "Another delicious burger", 11.99, "Main");
    }).toThrow("Menu item with the same name already exists.");
  });

  test('Removing an item', () => {
    menu.removeItem("Salad");
    expect(menu.menu.length).toBe(2);
  });

  test('Updating an item', () => {
    menu.updateItem("Burger", { price: 12.49 });
    const updatedItem = menu.menu.find(item => item.name === "Burger")
    expect(updatedItem.price).toBe(12.49);
  });
  test('Updating a non-existing item should throw an error', () => {
    expect(() => {
      menu.updateItem("NonExistentItem", { price: 9.99 })
    }).toThrow("Menu item not found.");
  });

  test('Sorting the menu by price', () => {
    menu.sortMenu("price");
    const sortedMenu = menu.menu.map(item => item.price);
    expect(sortedMenu).toEqual([8.49, 10.99, 12.99]);
  });

});
