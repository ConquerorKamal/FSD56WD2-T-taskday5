let resume = {
    name : "kamal",
    age : 23,
    phonenumber : 8217011466,
    address : "71D,Railway quarters,diesel loco shed,krishnarajapuram",
    city : "bangalore",
    state : "karnataka",
    pincode : 560036,
    country : "India",
    education: "BA journalism at AL-AMEEN Arts college",
    hobbies : ["reading","coding","exercising"],
    achievements : ["100m State level bronze medallist in U23 karnataka state championship"],
    experienceInCoding : "just started",
    languagesKnown : ["tamil","kannada","english","hindi","telugu"],
    aboutMe : "dedicated,hardworking,smartworking,consisitent,givingUpIsNotAnOption"
}

//iterating the above JSON with for...each loop
let entries = Object.keys(resume)
entries.forEach(keys =>   {
    console.log(keys,":",resume[keys])
})







