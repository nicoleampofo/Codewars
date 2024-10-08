// Make a program that filters a list of strings and returns a list with only your friend's name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


function friend(friends){
    friendArray = []
        for(i=0; i<friends.length; i++){
          if(friends[i].length == 4){
            friendArray.push(friends[i])
        }
    } return(friendArray)
}
friend(["Ryan", "Kieran", "Jason", "Yous"])