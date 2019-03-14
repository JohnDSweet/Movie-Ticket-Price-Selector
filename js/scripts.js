//Business Logic for AddressBook -----------
var addressBook = new AddressBook();

function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}


//Business Logic for Contacts --------------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = [];
}

//Business Logic for Addresses -------------
function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
 var contact1 = new Contact("Chuck", "Norris", "1-800-KICK-ASS");

 var inputContact = function(addressBook) {
   debugger;
   for (var index=0; index <= addressBook.contacts.length; index++) {
     $("ul").append("<li>NAME: "  + addressBook.contacts[index].fullName() + ", PHONE: " + addressBook.contacts[index].phoneNumber + "</li>")
  }
   console.log(newContact);
 }


//User Interface Logic -----------
$(document).ready(function() {
  $("#contactsInput form").submit(function(event) {

  var firstNameInput = $("input#firstName").val();
  console.log(firstNameInput)
  var lastNameInput = $("input#lastName").val();
  console.log(lastNameInput);
  var phoneNumberInput = $("input#phoneNumber").val();
  console.log(phoneNumberInput);

  // var addressBook = new AddressBook();
  console.log("address book", addressBook);

  var newContact = new Contact(firstNameInput, lastNameInput, phoneNumberInput);

  addressBook.addContact(newContact);
  console.log(newContact);
  console.log("address book", addressBook);

  //$("ul").empty();

  inputContact(addressBook);




event.preventDefault();
  });
});
