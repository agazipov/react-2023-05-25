export async function fetchRestaurants() {
  const response = await fetch("http://localhost:3001/api/restaurants/", {
    next: { tags: ["config"] },
  });
  const restaurants = await response.json();

  return restaurants;
}

export async function fetchRestaurant(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );
  const restaurant = await response.json();

  return restaurant;
}

export async function fetchDishesAll() {
  const response = await fetch(
    `http://localhost:3001/api/dishes`
  );
  const dishes = await response.json();

  return dishes;
}

export async function fetchDishes(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
  );
  const dishes = await response.json();

  return dishes;
}

export async function fetchDish(dishesId) {
  const response = await fetch(
    `http://localhost:3001/api/dishes?productId=${dishesId}`
  );
  const dish = await response.json();

  return dish;
}

export async function fetchReviews(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
  );
  const reviews = await response.json();

  return reviews;
}

export async function fetchUsers() {
  const response = await fetch(
    `http://localhost:3001/api/users`
  );
  const users = await response.json();

  return users;
}