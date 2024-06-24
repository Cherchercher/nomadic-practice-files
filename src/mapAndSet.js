fantacyCollections = new Set(["fireDragon", "uglyEel",  "wrinklyElf"])
fantacyCollections.add("fireDragon")
console.log(fantacyCollections) 

fantacyCollections.add("mothFairy")
console.log(fantacyCollections);


const bookDirectory = new Map();
bookDirectory.set("fireDragon") = "shelf 1"
bookDirectory.get("fireDragon") //shelf1
bookDirectory.has("fireDragon") //True

// Common mistakes bookDirectory[‘fireDragon’] = ….
