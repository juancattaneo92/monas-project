# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
MenuItem.destroy_all

# BURGERS
item1 = MenuItem.create(name: 'Monas Burgers', description: 'Niman ranch burger patty, melted swiss cheese, crispy bacon, sauteed onions and drizzle with BBQ sauce', price:'13.50', ingredients:'Brioche Bun, Sauteed Onions, BBQ sauce, Swiss Cheese', category: 'burgers')
item1.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/monas.jpg"), filename:'monas.jpg' )

item2 = MenuItem.create(name: 'Classic Burger', description: 'Niman ranch burger patty, melted cheese (optional), sliced onion(*), sliced tomato(*) and fresh lettuce(*). *On the side', price:'10.25', ingredients:'Brioche Bun, Onion, Tomato, lettuce', category: 'burgers')
item2.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/classic.jpg"), filename:'classic.jpg' )

item3 = MenuItem.create(name: 'Drunken Burger', description: 'Niman ranch burger patty, melted blue cheese, crispy bacon, crispy onions and drizzle with lager beer-honey sauce', price:'13.25', ingredients:'Brioche Bun, Crispy Onion, Lager Beer-Honey Sauce, Blue Cheese, Bacon', category: 'burgers')
item3.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/drunken.jpg"), filename:'drunken.jpg' )

item4 = MenuItem.create(name: 'Screw The Diet Burger', description: 'Niman ranch burger patty, melted swiss cheese, fried egg, crispy bacon, crispy onions and drizzle with BBQ sauce ', price:'13.95', ingredients:'Brioche Bun, Fried Egg, Crispy Onion, Swiss Cheese, BBQ sauce, Bacon', category: 'burgers')
item4.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/screw-diet.jpg"), filename:'screw-diet.jpg' )

item5 = MenuItem.create(name: 'Cali Burger', description: 'Niman ranch burger patty, melted jack cheese, fresh sprouts and avocado', price:'13.25', ingredients:'Brioche Bun, Jack Cheese, Avocado, Sprouts', category: 'burgers')
item5.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/cali.jpg"), filename:'cali.jpg' )

item6 = MenuItem.create(name: 'Hawaiian Burger', description: 'Niman ranch burger patty, melted jack Cheese, smoked ham, grilled teriyaki pineapple', price:'13.50', ingredients:'Brioche Bun, Jack Cheese, Pineapple, Teriyaki sauce, Smoke Ham', category: 'burgers')
item6.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/hawaiian.jpeg"), filename:'hawaiian.jpeg' )

item7 = MenuItem.create(name: 'Mediterranean Burger', description: 'Niman ranch burger patty, feta cheese, roasted red bell pepper, pesto sauce and fresh spinach', price:'13.25', ingredients:'Brioche Bun, Feta Cheese, Red Bell Pepper, Pesto sauce, Spinach', category: 'burgers')
item7.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/mediterranean.jpg"), filename:'mediterranean.jpg' )

item8 = MenuItem.create(name: 'Chicano Burger', description: 'Niman ranch burger patty, melted cheddar cheese, fresh guacamole and cilantro', price:'13.25', ingredients:'Brioche Bun, Cheddar Cheese, Cilantro, Guacamole', category: 'burgers')
item8.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/chicano.jpg"), filename:'chicano.jpg' )

item9 = MenuItem.create(name: 'Truffle Burger', description: 'Niman ranch burger patty, melted truffle tremor goat cheese, sauteed mushrooms and fresh arugula', price:'14.75', ingredients:'Brioche Bun, Truffle Tremor Goat Cheese, Arugula, Sauteed Mushrooms', category: 'burgers')
item9.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/truffle.jpg"), filename:'truffle.jpg' )

item10 = MenuItem.create(name: 'Diablo Burger', description: 'Niman ranch burger patty, melted pepper jack cheese, sauteed jalapeños, sauteed onions and drizzle with chipotle aioli', price:'13.50', ingredients:'Brioche Bun, Pepper Jack Cheese, Sauteed Jalapeños, Sauteed Onions, Chipotle Aioli', category: 'burgers')
item10.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/burgers/diablo.jpg"), filename:'diablo.jpg' )


#SIDES
item11 = MenuItem.create(name: 'Skinny Cut', description: 'Thin Frech fries', price: '4.50, 6.50', size: 'small, large', ingredients: 'Fried Potatoes', category: 'fries')
item11.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/fries/skinny-fries.jpg"), filename:'skinny-fries.jpg')


item12 = MenuItem.create(name: 'Sweet Potato', description: 'Thin fried sweet potatoes', price: '4.95, 6.95', size: 'small, large', ingredients: 'Fried Sweet Potatoes', category: 'fries')
item12.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/fries/sweet-potato.jpeg"), filename:'sweet-potato.jpeg')

item13 = MenuItem.create(name: 'Spicy Curly', description: 'Thin spiced curly fries', price: '4.75, 6.95', size: 'small, large', ingredients: 'Spiced Curly Potatoes', category: 'fries')
item13.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/fries/curly-fries.jpg"), filename:'curly-fries.jpg')

item14 = MenuItem.create(name: 'Potato Flats', description: 'Thick French fries', price: '4.50, 6.50', size: 'small, large', ingredients: 'Fried Potatoes', category: 'fries')
item14.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/fries/skinny-fries.jpg"), filename:'skinny-fries.jpg')

item15 = MenuItem.create(name: 'Onion Rings', description: 'Beer battered onion rings topped with Parmesan cheese', price: '6.25, 7.95', size: 'small, large', ingredients: 'Beer Battered Onion, Parmesan Cheese', category: 'fries')
item15.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/fries/onion-ring.jpg"), filename:'onion-ring.jpg')

#STARTERS
item16 = MenuItem.create(name: 'Mixed Greens', description: 'Mixed greens lettuce, pearl tomatoes, grated carrot, sliced cucumber and house vinaigrette dressing', price: '6.25', ingredients: 'Mixed Greens Lettuce, Pearl Tomatoes, Carrot, Cucumber, House Vinaigrette Dressing', category: 'starters')
item16.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/mixed-greens.jpg"), filename:'mixed-greens.jpg')

item17 = MenuItem.create(name: 'Small Caesar', description: 'Romaine lettuce, home croutons, parmesan cheese and Caesar dressing', price: '6.25', ingredients: 'Romaine lettuce, Croutons, Parmesan Cheese, Caesar Dressing', category: 'starters')
item17.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/ceasar-salad.jpg"), filename:'ceasar-salad.jpg')

item18 = MenuItem.create(name: 'Wedge', description: 'Iceberg lettuce, crumbled crispy bacon, crumbled blue cheese, pearl tomatoes and blue cheese dressing', price: '6.50', ingredients: 'Iceberg Lettuce, Bacon, Blue Cheese, Pearl Tomatoes, Blue Cheese Dressing', category: 'starters')
item18.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/wedge.jpg"), filename:'wedge.jpg')

item19 = MenuItem.create(name: 'La Monita', description: 'Mixed greens lettuce, quinoa, roasted corn, crumbled feta cheese, pearl tomatoes and mint vinaigrette dressing', price: '6.50', ingredients: 'Mixed Greens Lettuce, Quinoa, Corn, Feta Cheese, Pearl Tomatoes, Mint Vinaigrette Dressing', category: 'starters')
item19.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/monita.jpg"), filename:'monita.jpg')

item20 = MenuItem.create(name: 'Bowl of Chili', description: 'Stew chili topped with cheddar cheese and chopped fresh onions', price: '7.50', ingredients: 'Chili Peppers, Kidney Beans, Onions, Cheddar Cheese', category: 'starters')
item20.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/bowl-chili.jpg"), filename:'bowl-chili.jpg')

item21 = MenuItem.create(name: 'Chicken Tenders', description: 'Fried chicken tenders served with a side of BBQ sauce', price: '6.95', ingredients: 'Breaded Chicken, BBQ sauce', category: 'starters')
item21.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/chicken-tenders.jpg"), filename:'chicken-tenders.jpg')

item22 = MenuItem.create(name: 'Buffalo Chicken Wings', description: 'Wings tossed in buffalo sauce served with stock celery', price: '7.95', ingredients: 'Chicken Wings, Buffalo Wings, Celery', category: 'starters')
item22.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/sides/wings.jpg"), filename:'wings.jpg')

#UNBURGERS
item23 = MenuItem.create(name: "Mona's Hot Dog", description: 'Sauteed jalapeños and onions, melted cheddar cheese, tomatoes, side of relish, and hot dog bun', price: '11.25', ingredients: 'Sauteed Jalapeños, Sauteed Onions, Melted Cheddar Cheese, Tomatoes, Relish, Hot-Dog Bun', category: 'un-burger') #side:
item23.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/unburgers/chicago-hot-dog.jpg"), filename:'chicago-hot-dog.jpg')

item24 = MenuItem.create(name: "Grilled Portobello Cap", description: 'Roasted bell peppers, crumbled blue cheese, arugula, pesto sauce, and weath bun', price: '13.75', ingredients: 'Roasted Bell Peppers, Crumbled Blue Cheese, Arugula, Pesto Sauce, Weath Bun', category: 'un-burger') #side:
item24.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/unburgers/portobello.jpg"), filename:'portobello.jpg')

item25 = MenuItem.create(name: "Tri-Tip Sandwich", description: 'Melted pepper jack cheese, sauteed onions, BBQ sauce, and brioche bun', price: '14.25', ingredients: 'Melted Pepper Jack Cheese, Sauteed Onions, BBQ Sauce, Brioche Bun', category: 'un-burger') #side:
item25.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/unburgers/tri-tip.jpg"), filename:'tri-tip.jpg')

item26 = MenuItem.create(name: "Salmon Wrap", description: 'Charbroiled salmon, iceberg, guacamole, pico de gallo, sprouts, and spinach tortilla', price: '14.25', ingredients: 'Charbroiled Salmon, Iceberg, Guacamole, Pico de Gallo, Sprouts, Spinach Tortilla', category: 'un-burger') #side:
item26.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/unburgers/salmon-wrap.jpg"), filename:'salmon-wrap.jpg"')

item27 = MenuItem.create(name: "Veggie Sandwich", description: 'Roasted bell peppers, goat cheese, fresh spinach, sprouts, pesto sauce, cucumber, and wheat bun', price: '10.50', ingredients: 'Roasted Bell Peppers, Goat Cheese, Fresh Spinach, Sprouts, Pesto Sauce, Cucumber, Wheat Bun', category: 'un-burger') #side:
item27.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/unburgers/veggie-sandwich.jpg"), filename:'veggie-sandwich.jpg')

#SALADS
item28 = MenuItem.create(name: "Ceasar Salad", description: 'Romaine lettuce, croutons, and ceasar dressing, grilled chicken (optional)', price: '9.95', ingredients: 'Romaine lettuce, Croutons, Ceasar dressing', category: 'salad') #PRICE INCREASE IF ADDED CHICKEN
item28.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/ceasar-salad.jpg"), filename:'ceasar-salad.jpg')

item29 = MenuItem.create(name: "Kale Chicken Salad", description: 'Baby kale, spinach, quinoa, pearl tomatoes, avocado, grilled pineapple, grilled chicken, and house vinaigrette dressing', price: '13.75', ingredients: 'Baby Kale, Spinach, Quinoa, Pearl Tomatoes, Avocado, Grilled Pineapple, Grilled Chicken, House Vinagrette Dressing', category: 'salad') 
item29.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/kale-salad.jpg"), filename:'kale-salad.jpg')

item30 = MenuItem.create(name: "Mona's Cobb Chicken Salad", description: 'Romaine lettuce, mixed greens, bacon, grilled chicken, hard-boiled egg, avocado, crumbled blue cheese, pearl tomatoes, and ranch dressing', price: '13.75', ingredients: 'Romaine Lettuce, Mixed Greens, Bacon, Grilled Chicken, Hard-Boiled Egg, Avocado, Crumbled Blue Cheese, Pearl Tomatoes, Ranch Dressing', category: 'salad') 
item30.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/cobb-salad.jpg"), filename:'cobb-salad.jpg')

item31 = MenuItem.create(name: "Mediterranean Salad", description: 'Romaine lettuce, cucumber, red onion, pearl tomatoes, olives, feta cheese, grilled chicken (optional), and house vinaigrette.', price: '10.75', ingredients: 'Romaine Lettuce, Cucumber, Red Onion, Pearl Tomatoes, Olives, Feta Cheese, Grilled Chicken (optional), House Vinaigrette.', category: 'salad') #PRICE INCREASE IF ADDED CHICKEN
item31.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/mediterranean-salad.jpg"), filename:'mediterranean-salad.jpg')

item32 = MenuItem.create(name: "Southwestern Chicken Salad", description: 'Romaine lettuce, grilled chicken, black beans, cilantro, tortilla strips, pearl tomatoes, corn, red onion, avocado, and ranch dressing', price: '13.75', ingredients: 'Romaine Lettuce, Grilled Chicken, Black Beans, Cilantro, Tortilla Strips, Pearl Tomatoes, Corn, Red Onion, Avocado, Ranch Dressing', category: 'salad') 
item32.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/southwestern-salad.jpg"), filename:'southwestern-salad.jpg')

item33 = MenuItem.create(name: "Steak Salad", description: 'Arugula, spinach, grilled tri-tip, beets, goat cheese, pearl tomatoes, crispy onions, and house vinaigrette', price: '14.25', ingredients: 'Arugula, Spinach, Grilled Tri-Tip, Beets, Goat Cheese, Pearl Tomatoes, Crispy Onions, House Vinaigrette', category: 'salad') 
item33.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/salads/steak-salad.jpg"), filename:'steak-salad.jpg')

#BEVERAGE
item34 = MenuItem.create(name: "Coke", description: 'Refreshing soda over ice', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item34.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/cola.jpg"), filename:'cola.jpg')

item35 = MenuItem.create(name: "Diet Coke", description: 'Refreshing soda over ice', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item35.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/cola.jpg"), filename:'cola.jpg')

item36 = MenuItem.create(name: "Fanta", description: 'Refreshing soda over ice', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item36.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/fanta.jpg"), filename:'fanta.jpg')

item37 = MenuItem.create(name: "Sprite", description: 'Refreshing soda over ice', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item37.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/sprite.jpg"), filename:'sprite.jpg')

item38 = MenuItem.create(name: "Barq's", description: 'Refreshing soda over ice', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item38.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/cola.jpg"), filename:'cola.jpg')

item39 = MenuItem.create(name: "Pellegrino", description: '8oz bottle', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item39.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/pellegrino-sq.png"), filename:'pellegrino-sq.png')

item40 = MenuItem.create(name: "Brewed Iced Tea", description: 'Unsweeted ice tea, brewed daily', price: '2.50', ingredients: 'Soda', category: 'beverage') 
item40.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/ice-tea.jpg"), filename:'ice-tea.jpg')

item41 = MenuItem.create(name: "Homemade Lemonade", description: 'Refreshing homemade lemonade', price: '2.50', ingredients: 'Lemon Juice, Sugar', category: 'beverage') 
item41.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/lemonade.jpg"), filename:'lemonade.jpg')

item42 = MenuItem.create(name: "Strawberry Lemonade", description: 'Refreshing homemade Strawberry lemonade', price: '2.50', ingredients: 'Lemon Juice, Strawberries, Sugar', category: 'beverage') 
item42.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/strawberry-lemonade.jpg"), filename:'strawberry-lemonade.jpg')

#MILKSHAKES
item43 = MenuItem.create(name: "Vanilla", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Milk', category: 'milkshake') 
item43.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/vanilla-shake.jpg"), filename:'vanilla-shake.jpg')

item44 = MenuItem.create(name: "Chocolate", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: "Vanilla Ice Cream, Hershey's Chocolate, Milk", category: 'milkshake') 
item44.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/chocolate.jpg"), filename:'chocolate.jpg')

item45 = MenuItem.create(name: "Strawberry", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Strawberries, Milk', category: 'milkshake') 
item45.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/strawberry-shake.jpg"), filename:'strawberry-shake.jpg')

item46 = MenuItem.create(name: "Oreo", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Crushed Oreos, Milk', category: 'milkshake') 
item46.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/oreo-shake.jpg"), filename:'oreo-shake.jpg')

item47 = MenuItem.create(name: "Nutella", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Nutella, Milk', category: 'milkshake') 
item47.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/nutella-shake.jpg"), filename:'nutella-shake.jpg')

item48 = MenuItem.create(name: "Reese's Peanut Butter", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: "Vanilla Ice Cream, Reese's Peanut Butter, Milk", category: 'milkshake') 
item48.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/reeses-shake.jpg"), filename:'reeses-shake.jpg')

item49 = MenuItem.create(name: "Birthday Cake", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Baking Soda, Rainbow Confetti,  Milk', category: 'milkshake') 
item49.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/birthday-shake.jpg"), filename:'birthday-shake.jpg')

item50 = MenuItem.create(name: "Very Berry", description: 'Thick hand-crafted milkshake available in 12oz & 24oz', price: '4.95, 7.50', ingredients: 'Vanilla Ice Cream, Blueberry, Strawberry, Blackberry, Milk', category: 'milkshake') 
item50.photo.attach(io: open("https://monas-burgers-dev.s3-us-west-1.amazonaws.com/drinks/very-berry-shake.jpg"), filename:'very-berry-shake.jpg')
