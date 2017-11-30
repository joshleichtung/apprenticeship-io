# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Apprenticeship.delete_all
Apprentice.delete_all

Apprentice.create({
  uid: "Derrick",
  first_name: "Derrick",
  last_name: "Carr",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAkcAAAAJDJkY2JiMzYwLWI5MDAtNDYxNC1hMzUyLTMwMWUxODM5ZTFjOQ.jpg",
  current_title: "Developer",
  current_company: "thoughtbot",
  apprenticeship_company: "thoughtbot",
  email: "d@carr.com",
  hall_of_famer?: true
})

Apprentice.create({
  uid: "Coline",
  first_name: "Coline",
  last_name: "Forde",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAYxAAAAJDE2MDY4OGIxLTFiMjMtNGMzYy1iODJkLTQ0MTQ0MzNjNDYwNw.jpg",
  current_title: "Developer",
  current_company: "Airbnb",
  apprenticeship_company: "Uber",
  email: "c@forde@.com",
  hall_of_famer?: true
})


Apprentice.create({
  uid: "Enrique",
  first_name: "Enrique",
  last_name: "Torrendall",
  linkedin_image_url: "/default_profile.png",
  current_title: "Software Engineer",
  current_company: "LinkedIn",
  apprenticeship_company: "LinknedIn",
  email: "e@t.com",
  hall_of_famer?: true
})

Apprentice.create({
  uid: "Ibraheem",
  first_name: "Ibraheem",
  last_name: "Abdul-Malik",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAv5AAAAJGU0N2NlODBkLTQ5ZjctNDYyMy1hOWU5LTA4ZWY0OWE2NWRhMg.jpg",
  current_title: "Software Engineer",
  current_company: "LinkedIn",
  apprenticeship_company: "LinknedIn",
  email: "I@a.com",
  hall_of_famer?: true
})

Apprentice.create({
  uid: "Derrick2",
  first_name: "Derrick2",
  last_name: "Carr",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAkcAAAAJDJkY2JiMzYwLWI5MDAtNDYxNC1hMzUyLTMwMWUxODM5ZTFjOQ.jpg",
  current_title: "Developer",
  current_company: "thoughtbot",
  apprenticeship_company: "thoughtbot",
  email: "d@carr.com",
  hall_of_famer?: true
})

Apprentice.create({
  uid: "Coline2",
  first_name: "Coline2",
  last_name: "Forde",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAYxAAAAJDE2MDY4OGIxLTFiMjMtNGMzYy1iODJkLTQ0MTQ0MzNjNDYwNw.jpg",
  current_title: "Developer",
  current_company: "Airbnb",
  apprenticeship_company: "Uber",
  email: "c@forde@.com",
  hall_of_famer?: true
})
