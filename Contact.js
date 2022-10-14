console.log("Welcome to Address Book System!");

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.city = params[2];
        this.state = params[3];
        this.zip = params[4];
        this.phoneNumber = params[5];
        this.email = params[6]
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        const nameRegex = RegExp("^[A-Z][a-zA-Z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else 
            throw 'Name input is Invalid!';
    }

    set lastName(lastName){
        const nameRegex = RegExp("^[A-Z][a-zA-Z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else 
            throw 'Name input is Invalid!';    
    }

    set city(city){
        const cityStateRegex = RegExp('^[a-zA-z]{3,}$');
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "City input is Invalid!";   
    }

    set state(state){
        const cityStateRegex = RegExp('^[a-zA-z]{3,}$');
        if (cityStateRegex.test(state))
        this._state = state;
        else
            throw "State input is Invalid!";    
    }

    set zip(zip){
        const zipRegex = RegExp("^[0-9]{3}[0-9]{3}$");
        if (zipRegex.test(zip))
        this._zip = zip;
        else
            throw "Zip input is Invalid!";    
    }

    set phoneNumber(phoneNumber){
        const phoneNumberRegex = RegExp("^[0-9]{10}$");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Phone number input is Invalid!";    
    }

    set email(email){
        const emailRegex = RegExp("^[0-9a-zA-Z]+([_+-.a-z0-9A-Z]+)*[@][a-zA-Z]+[.][a-z]{2,4}([.][a-z]{2})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Email input is Invalid!";
    }

    toString(){
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : "+ this.zip+ "\nPhone Number : " + this.phoneNumber + "\nEmail ID: " + this.email;
    }
}

//new address book
let addressBookArray = new Array();

try{
    addressBookArray.push(new Contact("Priya", "Pai", "Porbandar", "Indiana", 637889, 9378921781, "priyap@gmail.com"));
   // console.log(contact.toString());
}
catch(e){
    console.log(e);
}

try{
    addressBookArray.push(new Contact("Mahi", "Walli", "Mecca", "Miriam", 893478, 7782967365, "mm16hmp@gmail.com"));
   // console.log(contact.toString());
}
catch(e){
    console.log(e);
}

//find contact
function contactExists(name) {
    return addressBookArray.some(contact => contact.firstName == name);
}

function printAddressBook(){
    addressBookArray.forEach(contact => console.log(contact.toString));
}

//edit contact
function editContact(name, property, newValue) {
    if (contactExists(name)) {
        switch (property) {
            case "city":
                addressBookArray.find((contact) => contact.firstName == name).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == name).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == name).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == name).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == name).email = newValue;
                break;
            default:
                console.log("Enter a valid field to edit");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}

console.log("Address Book : ");
printAddressBook();

console.log("\nAddress Book after editing Contact :");
editContact("Priya", "city", "Boston");
printAddressBook();
