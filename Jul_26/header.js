class Header{
    static render(){
        return `<header class="pt-display-container pt-content pt-wide" style="max-width:1600px;min-width:400px" id="home">
        ${Image.render("bg.jpg", "pt-image banner", "Restaurant Menu")}
        <div class="pt-display-middle w3-padding-large w3-opacity">
          ${H1.render("Prasad's Restaurant", "pt-xxlarge pt-text-white")}
        </div>
      </header>`;
    }
}