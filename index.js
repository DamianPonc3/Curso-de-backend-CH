class User {
    constructor(name, lastName, books, pets){
        this.name = name,
        this.lastName = lastName,
        this.books = [],
        this.pets = []
    };

    getFullName(){
        console.log(`Full Name: ${this.name} ${this.lastName}`)
    };

    addPet(kind, namePet){
        this.pets = [
            {
                kind: "dog",
                namePet: "Thor" 
            },
            {
                kind: "cat",
                namePet: "Indigo"
            }
        ]

        console.log(this.pets)
    };

    countPets(){
        console.log(`The user ${this.name} has ${this.pets.length} pets`)
    };

    addBook(nameBook, author) {
        this.books = [
            {
                nameBook: "Book1",
                author: "A"
            },
            {
                nameBook: "Book2",
                author: "B"
            }
        ]
        // console.log(this.books)
    };

    getBookNames(nameBook){
        console.log(`Name of ${this.name}'s Books: ${this.books.map((myBooks) => myBooks.nameBook).join(', ')}`)
    };
};

const user1 = new User('Damian', 'Ponce');

user1.getFullName();
user1.addBook();
user1.getBookNames();
user1.addPet();
user1.countPets()
