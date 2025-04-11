# Countries API Application - Version 0

## 👋 Welcome!

Your challenge is to build a website with React.js that pulls country data from the [REST Countries API](https://restcountries.com) and displays it like the designs.

## 🎯 Requirements for Version 0

- Mobile responsive application built with React.js and Vite
- Countries data is pulled from the [REST Countries API](https://restcountries.com), or from `data.json` file when the API is down
- As a user, I can see all countries from the API on the homepage, with data displayed about each country

![image](https://github.com/user-attachments/assets/79094b58-6856-4491-8fa5-0a394f85f0b9)


## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=1045-2&p=f&t=T2oSD2lU7TuxaG13-0) for the designs
- **Style Guide:** Refer to the `style-guide.md` file for info about the color palette, fonts, and design.
- **API:** You will use the [REST Countries API](https://restcountries.com) to get the country data and flag images

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code.
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Write comments throughout your code as a favor for future you!** You will be building on top of this project over the course of 3 months. Future you will have to come back and re-read all of the code you are going to write. Help future you understand your code by writing comments to explain what each line of code is doing. 


## 🚀 Roadmap: Step-by-step guide to building your project

### Fork & Clone the Github repo 
1. Fork this Github repo into your own account. Use this [fork and clone guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.55gk3qetux2a#heading=h.wbbot8ebr58a) to help you.
2. Clone your new Github repo into the `dev` folder on your local machine. 

### Create a new React project with Vite 
1. In the terminal, navigate into your repo and then into the `version-0` folder
2. In the `version-0` folder, create a new React project with [Vite](https://vite.dev/). Use this [How to create a new project with Vite guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.rxwa6murqe1y#heading=h.wvxq6966uco7) to help you. 
3. Push your code to Github!

### Set up Routes with `react-router`
Refer to this [react-router guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.hbxxe6vmm0fq#heading=h.snu4ai1ffrgi) as you do the following steps:
1. In the terminal, in your `version-0` folder, install the `react-router` package using the command `npm install react-router`. 
2. In App.jsx file, set up Routes for 3 pages: Home page, SavedCountries page, and CountryInfo page. 
3. In the `src` folder, create a `pages` folder
4. In the `pages` folder, set up components for each page by making these 3 files: Home.jsx, SavedCountries.jsx, and CountryInfo.jsx  
5. Don't forget to push your code to Github!

### Create Header
1. Create the Header component, which will be displayed on the Home page.
2. In App.css, style the Header component with CSS
3. Clicking on "Where in the world?" should link to the Home page, and clicking on "Saved Countries" should link to the SavedCountries page. Use the Link component provided by the `react-router` library to make this happen. Refer to this [react-router guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.hbxxe6vmm0fq#heading=h.snu4ai1ffrgi) to help you. 
4. Push your code to Github!

### In the Home page, display localData from `localData.js` file
1. In Home.jsx, import the `localData.js` file. This file contains all of the data about each country as an array of objects.  
2. In Home.jsx, display all of the data about each country.
   
    💡 **Tip:** Create reusable components:
        - `CountryCard` – displays data for a single country
        - `CountryCardList` – maps over the array of countries and renders a list of `CountryCard` components

3. In App.css, style the country data according to the Figma designs
4. Don't forget to push your code to Github!

### Final Steps
1. Comment your code generously — Future You will thank you. You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
2. Submit the link to your Github repo to Canvas! Whether or not your Version 0 is complete, your instructor needs to see your progress by the end of the 2-week break.
3. Be ready to demo what you've got on Day 1 of Backend — complete or not. We just want to see your thinking and progress! 💡 

### Stretch Goals (optional — only do these if you have completed _all_ of the above steps)

Finished all the steps above? Amazing!   
Keep leveling up by tackling this next challenge:
- 🧾 Creating the form on the SavedCountries page  
  [Figma Design for the Form](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=1-329&t=eKfO5eJcdQC03CrI-4)
