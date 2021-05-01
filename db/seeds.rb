# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


MenuItem.destroy_all

item1 = MenuItem.create(name: 'Monas Burgers', description: 'Amazing Burger', price:'15.00', ingredients:'Brioche Bun, Sauted Onions, BBq, Jack Cheese')
item2 = MenuItem.create(name: 'Classic Burger', description: 'Amazing Burger', price:'15.00', ingredients:'Brioche Bun, Onion, Tomatoe, lettuce')
item3 = MenuItem.create(name: 'Drunken Burger', description: 'Amazing Burger', price:'15.00', ingredients:'Brioche Bun, Crispy Onion, Drunken Sauce, Blue Cheese')
item4 = MenuItem.create(name: 'Screw Diet Burger', description: 'Amazing Burger', price:'15.00', ingredients:'Brioche Bun, Fried Egg, Crispy Onion, Jack Cheese')
item5 = MenuItem.create(name: 'Cali Burger', description: 'Amazing Burger', price:'15.00', ingredients:'Brioche Bun, Jack Cheese, Avocado, Sprouts')
