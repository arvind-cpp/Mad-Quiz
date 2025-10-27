// Question 1

const cart = [
  { name: "Apple", price: 120, quantity: 2 },
  { name: "Banana", price: 60, quantity: 5 },
  { name: "Mango", price: 150, quantity: 3 }
];

const calculateTotal = (cart) => 
  cart.reduce((total, item) => total + item.price * item.quantity, 0);

console.log("Total Price:", calculateTotal(cart));

// Question2
cart.forEach(({ name, price, quantity }) => {
  console.log(`Item: ${name} | Total: ${price * quantity}`);
});

// Question 3
const fetchUserData = async () => {
  const mockApi = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ name: "John", age: 22 }), 2000);
    });

  const user = await mockApi();
  console.log(`User Loaded: ${user.name}, Age ${user.age}`);
};

fetchUserData();
