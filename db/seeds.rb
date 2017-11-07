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
  first_name: "Derrick",
  last_name: "Carr",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAkcAAAAJDJkY2JiMzYwLWI5MDAtNDYxNC1hMzUyLTMwMWUxODM5ZTFjOQ.jpg",
  current_title: "Developer",
  current_company: "thoughtbot",
  apprenticeship_company: "thoughtbot",
  email: "d@carr.com"
})

Apprentice.create({
  first_name: "Coline",
  last_name: "Forde",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAYxAAAAJDE2MDY4OGIxLTFiMjMtNGMzYy1iODJkLTQ0MTQ0MzNjNDYwNw.jpg",
  current_title: "Developer",
  current_company: "Airbnb",
  apprenticeship_company: "Uber",
  email: "c@forde@.com"
})


Apprentice.create({
  first_name: "Enrique",
  last_name: "Torrendall",
  linkedin_image_url: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAziAAAAJGQ1Njg4YzFlLWNkODEtNGQzZC04ZTM2LTMwNDVhMjYwMTg2Mw.jpg",
  current_title: "Software Engineer",
  current_company: "LinkedIn",
  apprenticeship_company: "LinknedIn",
  email: "e@t.com"
})

Apprentice.create({
  first_name: "Ibraheem",
  last_name: "Abdul-Malik",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAv5AAAAJGU0N2NlODBkLTQ5ZjctNDYyMy1hOWU5LTA4ZWY0OWE2NWRhMg.jpg",
  current_title: "Software Engineer",
  current_company: "LinkedIn",
  apprenticeship_company: "LinknedIn",
  email: "I@a.com"
})

Apprentice.create({
  first_name: "Derrick",
  last_name: "Carr",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAkcAAAAJDJkY2JiMzYwLWI5MDAtNDYxNC1hMzUyLTMwMWUxODM5ZTFjOQ.jpg",
  current_title: "Developer",
  current_company: "thoughtbot",
  apprenticeship_company: "thoughtbot",
  email: "d@carr.com"
})

Apprentice.create({
  first_name: "Coline",
  last_name: "Forde",
  linkedin_image_url: "https://media.licdn.com/media/AAEAAQAAAAAAAAYxAAAAJDE2MDY4OGIxLTFiMjMtNGMzYy1iODJkLTQ0MTQ0MzNjNDYwNw.jpg",
  current_title: "Developer",
  current_company: "Airbnb",
  apprenticeship_company: "Uber",
  email: "c@forde@.com"
})
