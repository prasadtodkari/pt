class AboutUs{
    static render(){
        return `<!-- About Section -->
        <div class="pt-row pt-padding-64" id="about">
          <div class="pt-col m6 pt-padding-large pt-hide-small">
           ${Image.render("https://emilypost.com/assets/image-cache/Formal_Four_Courses_Birdseye_768x576.35c4cf9a.jpg", "pt-round pt-image", "Table Setting")}
          </div>
          <div class="pt-col m6 pt-padding-small">
            ${H1.render("About Catering", "pt-center")}
            <br>
            ${H5.render("Tradition since 1889", "pt-center")}
            ${Para.render("The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class='pt-tag pt-light-grey'>seasonal</span> ingredients.")}
          </div>
        </div>
        `;
    }
}