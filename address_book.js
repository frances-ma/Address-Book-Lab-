"use scrict"; 
class AddressBook {
    constructor () {
        this.contacts = [
        new Contact("Hannah", "hannah@hannah.com", "567-666-666", "classmate"),
        new Contact("Dono", "hannah@hannah.com", "567-666-666", "classmate"),
        new Contact("Elle", "hannah@hannah.com", "567-666-666", "classmate")
        ]; 
    }

    add(info){
        const addedContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(addedContact);
    }
    deleteAt(index) {
        this.contacts.splice(index,1);   // dynamic 
    }
    print(){
        console.log(this.contacts); 
    } 

}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name; 
        this.email = email; 
        this.phone = phone; 
        this.relation = relation; 
    }
}

const myAddressBook = new AddressBook(); 

while(true) {
    let userInput = prompt("Would you like to add, print, delete, delete by name, or quit?"); 
    let userInputLowerCase = userInput.toLowerCase(); 
    if(userInputLowerCase === "add") {
        const info = {
            name: prompt("What is your name?"),
            email: prompt("What is your email?"), 
            phone: prompt("What is your phone number?"),
            realtion: prompt("Relationship?")
        }

        myAddressBook.add(info); 
        console.log(myAddressBook); 

    } else if (userInputLowerCase === "delete") {
        const index = prompt("Write the number of the index you'd like to delete.")
        myAddressBook.deleteAt(index); 
            

    } else if (userInputLowerCase === "print") {
        for (let i = 0; i < myAddressBook.contacts.length; i ++) {
            console.log(myAddressBook.contacts [i]); 
        }
        console.log("selected print");

    } else if (userInputLowerCase === "quit") {
        console.log("selected quit, goodbye!"); 
        break; 

    } else {
        console.log("invalid input!"); 
        continue;
    }
}


