# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


MenuItem.destroy_all

item1 = MenuItem.create(name: 'Monas Burgers', description: 'Niman ranch burger patty, melted swiss cheese, crispy bacon, sauteed onions and drizzle with BBQ sauce', price:'13.50', ingredients:'Brioche Bun, Sauteed Onions, BBQ sauce, Swiss Cheese', category: 'burgers')
item2 = MenuItem.create(name: 'Classic Burger', description: 'Niman ranch burger patty, melted cheese(optional), sliced onion(*), sliced tomato(*) and fresh lettuce(*). *On the side', price:'10.25', ingredients:'Brioche Bun, Onion, Tomato, lettuce', category: 'burgers')
item3 = MenuItem.create(name: 'Drunken Burger', description: 'Niman ranch burger patty, melted blue cheese, crispy bacon, crispy onions and drizzle with lager beer-honey sauce', price:'13.25', ingredients:'Brioche Bun, Crispy Onion, Lager Beer-Honey Sauce, Blue Cheese, Bacon', category: 'burgers')
item4 = MenuItem.create(name: 'Screw The Diet Burger', description: 'Niman ranch burger patty, melted swiss cheese, fried egg, crispy bacon, crispy onions and drizzle with BBQ sauce ', price:'13.95', ingredients:'Brioche Bun, Fried Egg, Crispy Onion, Swiss Cheese, BBQ sauce, Bacon', category: 'burgers')
item5 = MenuItem.create(name: 'Cali Burger', description: 'Niman ranch burger patty, melted jack cheese, fresh sprouts and avocado', price:'13.25', ingredients:'Brioche Bun, Jack Cheese, Avocado, Sprouts', category: 'burgers')
item6 = MenuItem.create(name: 'Hawaiian Burger', description: 'Niman ranch burger patty, melted jack Cheese, smoked ham, grilled teriyaki pineapple', price:'13.50', ingredients:'Brioche Bun, Jack Cheese, Pineapple, Teriyaki sauce, Smoke Ham', category: 'burgers')
item7 = MenuItem.create(name: 'Mediterranean Burger', description: 'Niman ranch burger patty, feta cheese, roasted red bell pepper, pesto sauce and fresh spinach', price:'13.25', ingredients:'Brioche Bun, Feta Cheese, Red Bell Pepper, Pesto sauce, Spinach', category: 'burgers')
item8 = MenuItem.create(name: 'Chicano Burger', description: 'Niman ranch burger patty, melted cheddar cheese, fresh guacamole and cilantro', price:'13.25', ingredients:'Brioche Bun, Cheddar Cheese, Cilantro, Guacamole', category: 'burgers')
item9 = MenuItem.create(name: 'Truffle Burger', description: 'Niman ranch burger patty, melted truffle tremor goat cheese, sauteed mushrooms and fresh arugula', price:'14.75', ingredients:'Brioche Bun, Truffle Tremor Goat Cheese, Arugula, Sauteed Mushrooms', category: 'burgers')
item10 = MenuItem.create(name: 'Diablo Burger', description: 'Niman ranch burger patty, melted pepper jack cheese, sauteed jalapeños, sauteed onions and drizzle with chipotle aioli', price:'13.50', ingredients:'Brioche Bun, Pepper Jack Cheese, Sauteed Jalapeños, Sauteed Onions, Chipotle Aioli', category: 'burgers')

item11 = MenuItem.create(name: 'Skinny Cut', description: 'Thin Frech fries', price: '4.50, 6.50', size: 'small, large', ingredients: 'Fried Potatoes', category: 'fries')
item12 = MenuItem.create(name: 'Potato Flats', description: 'Thick French fries', price: '4.50, 6.50', size: 'small, large', ingredients: 'Fried Potatoes', category: 'fries')
item13 = MenuItem.create(name: 'Sweet Potato', description: 'Thin fried sweet potatoes', price: '4.95, 6.95', size: 'small, large', ingredients: 'Fried Sweet Potatoes', category: 'fries')
item14 = MenuItem.create(name: 'Spicy Curly', description: 'Thin spiced curly fries', price: '4.75, 6.95', size: 'small, large', ingredients: 'Spiced Curly Potatoes', category: 'fries')
item15 = MenuItem.create(name: 'Onion Rings', description: 'Beer battered onion rings topped with Parmesan cheese', price: '6.25, 7.95', size: 'small, large', ingredients: 'Beer Battered Onion, Parmesan Cheese', category: 'fries')

item16 = MenuItem.create(name: 'Mixed Greens', description: 'Mixed greens lettuce, pearl tomatoes, grated carrot, sliced cucumber and house vinaigrette dressing', price: '6.25', ingredients: 'Mixed Greens Lettuce, Pearl Tomatoes, Carrot, Cucumber, House Vinaigrette Dressing', category: 'starters')
item17 = MenuItem.create(name: 'Small Caesar', description: 'Romaine lettuce, home croutons, parmesan cheese and Caesar dressing', price: '6.25', ingredients: 'Romaine lettuce, Croutons, Parmesan Cheese, Caesar Dressing', category: 'starters')
item18 = MenuItem.create(name: 'Wedge', description: 'Iceberg lettuce, crumbled crispy bacon, crumbled blue cheese, pearl tomatoes and blue cheese dressing', price: '6.50', ingredients: 'Iceberg Lettuce, Bacon, Blue Cheese, Pearl Tomatoes, Blue Cheese Dressing', category: 'starters')
item19 = MenuItem.create(name: 'La Monita', description: 'Mixed greens lettuce, quinoa, roasted corn, crumbled feta cheese, pearl tomatoes and mint vinaigrette dressing', price: '6.50', ingredients: 'Mixed Greens Lettuce, Quinoa, Corn, Feta Cheese, Pearl Tomatoes, Mint Vinaigrette Dressing', category: 'starters')
item20 = MenuItem.create(name: 'Bowl of Chili', description: 'Stew chili topped with cheddar cheese and chopped fresh onions', price: '7.50', ingredients: 'Chili Peppers, Kidney Beans, Onions, Cheddar Cheese', category: 'starters')
item21 = MenuItem.create(name: 'Chicken Tenders', description: 'Fried chicken tenders served with a side of BBQ sauce', price: '6.95', ingredients: 'Breaded Chicken, BBQ sauce', category: 'starters')
item22 = MenuItem.create(name: 'Buffalo Chicken Wings', description: 'Wings tossed in buffalo sauce served with stock celery', price: '7.95', ingredients: 'Chicken Wings, Buffalo Wings, Celery', category: 'starters')

