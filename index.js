class User {

    constructor(name, lastName, books, pets){
        this.name = name,
        this.lastName = lastName,
        this.books = [],
        this.pets = []
    };

    getFullName(){
        return `Full Name: ${this.name} ${this.lastName}`
    };

    addPet(namePet){

        this.pets.push({namePet})
            console.log(`the names of their pets are ${this.pets.map((myPets) => myPets.namePet).join(', ')}`)
    };

    countPets(namePet){
        console.log(`The user has ${(this.pets).length} pets`)
        return `The user has ${(this.pets).length} pets`
    };

    addBook(nameBook, author) {

        this.books.push({nameBook, author})

        console.log(this.books)
    };

    getBookNames(nameBook){
        console.log(`Name of ${this.name}'s Books: ${this.books.map((myBooks) => myBooks.nameBook).join(', ')}`)
    };

};

const user1 = new User('Damian', 'Ponce');


user1.getFullName();
user1.addBook('book1', 'A');
user1.getBookNames();
user1.addPet('Estrellita')
user1.addPet('Indigo')
user1.countPets()

