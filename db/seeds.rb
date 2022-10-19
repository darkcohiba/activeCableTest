# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



puts "creating seeds..."
puts "creating users"
user1 = User.create(username: "Sam", email: "sam@gmail.com", password_digest: "password")
user2 = User.create(username: "Lucy", email: "lucy@gmail.com", password_digest: "password")
user3 = User.create(username: "Max", email: "max@gmail.com", password_digest: "password")
user4 = User.create(username: "Adam", email: "adam@gmail.com", password_digest: "password")
user5 = User.create(username: "Lizard", email: "lizard@gmail.com", password_digest: "password")
user6 = User.create(username: "Wiz", email: "wiz@gmail.com", password_digest: "password")
user7 = User.create(username: "Lexia", email: "Lexia@gmail.com", password_digest: "password")
user8 = User.create(username: "Shelter For You", email: "Shelt@gmail.com", password_digest: "password")

puts "Finished creating user..."
puts "finished seeding"