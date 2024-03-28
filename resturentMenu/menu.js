class resturentMenu {
    constructor(name, description, price, category) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.category = category;
    }
  }
  
  class itemsMenu {
    constructor() {
      this.menu = [];
    }
  
    addItem(name, description, price, category) {
      const itemIndex = this.menu.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        throw new Error("Menu item with the same name already exists.");
      }
      const newItem = new resturentMenu(name, description, price, category);
      this.menu.push(newItem);
    }
  
   
    removeItem(name) {
      const removeItem = this.menu.findIndex(item => item.name === name);
      if (removeItem === -1) {
        throw new Error("Menu item not found.");
      }
      this.menu.splice(removeItem, 1);
    }
  
    // Update information about a menu item
    updateItem(name, updatedItemName) {
      const updatedIndex= this.menu.findIndex(item => item.name === name);
      if (updatedIndex === -1) {
        throw new Error("Menu item not found.");
      }
      this.menu[updatedIndex] = { ...this.menu[updatedIndex], ...updatedItemName };
    }
  
    displayMenu(category = null) {
      let filteredMenu = this.menu;
      if (category) {
        filteredMenu = this.menu.filter(item => item.category === category);
      }
      console.log("Menu:");
      filteredMenu.forEach(item => {
        console.log(`Name: ${item.name}, Description: ${item.description}, Price: ${item.price}, Category: ${item.category}`);
      });
    }
  
    sortMenu(criteria) {
      if (criteria === "price") {
        this.menu.sort((a, b) => a.price - b.price);
      }else {
        throw new Error("Invalid sorting criteria.");
      }
    }
  }
  
  // Example usage
  const ItemsMenu = new itemsMenu();
  ItemsMenu.addItem("Burger", "Juicy beef burger with lettuce and cheese", 10.99, "Main");
  ItemsMenu.addItem("Salad", "Fresh garden salad with vinaigrette dressing", 8.49, "Appetizer");
  ItemsMenu.addItem("Pizza", "Classic Margherita pizza with tomato and mozzarella", 12.99, "Main");
  
  console.log("Initial Menu:");
  ItemsMenu.displayMenu();
  
  console.log("\nAdding a new item:");
  ItemsMenu.addItem("Pasta", "Spaghetti with marinara sauce", 11.99, "Main");
  ItemsMenu.displayMenu();
  
  console.log("\nRemoving an item:");
  ItemsMenu.removeItem("Salad");
  ItemsMenu.displayMenu();
  
  console.log("\nUpdating an item:");
  ItemsMenu.updateItem("Burger", { price: 12.49 });
  ItemsMenu.displayMenu();
  
  console.log("\nSorted Menu by Price:");
  ItemsMenu.sortMenu("price");
  ItemsMenu.displayMenu();
  
  console.log("\nFiltered Menu by Category:");
  ItemsMenu.displayMenu("Main");
  