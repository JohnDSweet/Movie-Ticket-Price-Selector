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
function Address(type, street, city, state) {
  this.type = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

function resetFields() {
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#phoneNumber").val("");
    $("input.address-type").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + " " + this.state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
 var contact1 = new Contact("Chuck", "Norris", "1-800-KICK-ASS");

 var inputContact = function(addressBook) {
   $("ul#personEntry").text("");
   for (var index=0; index < addressBook.contacts.length; index++) {
     // debugger;
     $("ul#personEntry").append("<li>NAME: "  + addressBook.contacts[index].fullName() + "</li>"); $("ul#personEntry").append("<li>PHONE: " + addressBook.contacts[index].phoneNumber + "</li>");
     addressBook.contacts[index].addresses.forEach(function(address) {
       $("ul#personEntry").append("<li>" + address.type + ": " + address.fullAddress() + "</li>");


     });
   };
 };


//User Interface Logic -----------
$(document).ready(function() {
  $("#contactsInput form").submit(function(event) {

  var firstNameInput = $("input#firstName").val();
  var lastNameInput = $("input#lastName").val();
  var phoneNumberInput = $("input#phoneNumber").val();
  var newContact = new Contact(firstNameInput, lastNameInput, phoneNumberInput);
// debugger;
  $(".new-address").each(function() {
    debugger;
    var addressType = $(this).find("select.address-type").val();
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();
    var newAddress = new Address(addressType, inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(newAddress);
  });

  resetFields();

  addressBook.addContact(newContact);
  inputContact(addressBook);


  event.preventDefault();
  });

  $("#add-address").click(function() {
    $("#new-addresses").append('<br>' +
    '<div class="form-group">' +
      '<label for="address-type">Type</label>' +
      '<select class="form-control address-type">' +
        '<option value="Home">Home</option>' +
        '<option value="Work">Work</option>' +
      '</select>' +
    '</div>' +
    '<div class="new-address">' +
      '<div class="form-group">' +
        '<label for="new-street">Street</label>' +
        '<input class="form-control new-street" type="text">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-city">City</label>' +
        '<input class="form-control new-city" type="text">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-state">State</label>' +
        '<input class="form-control new-state" type="text">' +
      '</div>' +
    '</div>');
  });
});
