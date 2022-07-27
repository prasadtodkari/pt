class ContatUs{
    static render(){
        return `<div class="pt-container pt-padding-64" id="contact">
        ${H1.render("Contact Us", "pt-center")}
        <br>
        ${Para.render("We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.")}
        ${Para.render("You can also contact us by phone 91-12345 12345 or email prasad@restaurant.com, or you can send us a message here:")}
        <form action="thankyou.html" target="_blank" class="pt-col m6 pt-padding-small pt-pl-64">
          ${Para.render("<input class='pt-input pt-padding-16' type='text' placeholder='Name' required name='Name'>")}
          ${Para.render("<input class='pt-input pt-padding-16' type='number' placeholder='How many people' required name='People'>")}
          ${Para.render("<input class='pt-input pt-padding-16' type='datetime-local' placeholder='Date and time' required name='date' value='2022-07-27T20:00'>")}
          ${Para.render("<input class='pt-input pt-padding-16' type='text' placeholder='Message \ Special requirements' required name='Message'>")}
          ${Button.render("Send", "AboutMe.clicked", "pt-button pt-black pt-section")}
        </form>
      </div>`
    };
}