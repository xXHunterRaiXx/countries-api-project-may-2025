# Countries API Application - Version 1

## 👋 Welcome!

Your challenge is to build a website with [React.js](https://reactjs.org) that pulls country data from the [REST Countries API](https://restcountries.com) and displays it like the designs.

## 🎯 Project Goals

Required Goals for Version 1 of the project:

- Mobile responsive application build with React.js/Vite
- Code on Github and deployed to a Netlify URL
- Countries data is pulled from the [REST Countries API](https://restcountries.com), or from `data.json` file when the API is down
- As a user, I can see all countries from the API on the homepage, with data displayed about each country
- As a user, I can submit a form with my profile information
- As a user, I can click on a country to see more detailed information on a separate page

Stretch goals for the project (not required for assignment completion)

- As a user, I can search for a country using an `input` field
- As a user, I can filter countries by region
- As a user, I can toggle the color scheme between light and dark mode
- As a user, I can click through to the bordering countries on the detail page

**NOTE: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data. You should use this as a backup, if the API responds with an error.**

## 🔗 Resources

- **Designs:** You will need to use this [Figma file](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?node-id=0-1&p=f&t=LBwKTPOdxkR1yGCi-0) for the designs
- **Style Guide:** Refer to the `style-guide.md` file for info about the color palette, fonts, and design.
- **API:** You will use the [REST Countries API](https://restcountries.com) to get the country data and flag images

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code.
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Write comments throughout your code as a favor for future you!** You will be building on top of this project over the course of 3 months. Future you will have to come back and re-read all of the code you are going to write. Help future you understand your code by writing comments to explain what each line of code is doing. 

## 🚀 Roadmap: Step-by-step guide to building your project

Make sure you've finished Version 0 before moving on with the following steps.

### Step 1: Set up Routes with `react-router`

1. In App.jsx file, set up Routes for each page (Home page, SavedCountries page, Country page) using react-router. You can use this [react-router guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.hbxxe6vmm0fq#heading=h.snu4ai1ffrgi) to help you
2. In the `src` folder, create a `pages` folder and set up page components for each page (Home page, SavedCountries page, Country page)
3. Don't forget to push your code to Github!

### Step 2: Create the Saved Countries Page and Form

1. Create the Saved Countries Page
2. On the Saved Countries page, create the Form so that the user can submit their profile information
3. Style the Form according to the designs

### Step 3: Create the Country Detail page

1. We will create this page together as a class, so you do not need to create this page until the time comes.

### Step 8: Deploy project to Netlify

1. Deploy your completed project to [Netlify](https://www.netlify.com/) via your Github repo. In your Netlify Deploy settings, you will need to specify which version you want to deploy. Check out [this documentation to help you do this](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz)

### Stretch Goals (optional — only do these if you have completed _all_ of the above steps)

1. Create the search bar on the Home page
2. Filter countries by region on the Home page
3. Bordering countries on Country Detail page
4. Light & Dark Mode
