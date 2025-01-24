# Countries API Application

## Welcome! 👋

Your challenge is to build a website with [React.js](https://reactjs.org) that pulls country data from the [REST Countries API](https://restcountries.com) and displays it like the designs.

## Project Goals 

Required Goals for Version 1 of the project:

- Mobile responsive application build with React.js/Vite
- Code deployed to a URL through a Github repo
- As a user, I can see all countries from the API on the homepage, with data displayed about each country
- As a user, I can submit a form with my information
- As a user, I can click on a country to see more detailed information on a separate page
- As a user, I can search for a country using an `input` field

Stretch goals for the project (not required for assignment completion)
- As a user, I can filter countries by region
- As a user, I can toggle the color scheme between light and dark mode
- As a user, I can click through to the border countries on the detail page
- As a user, I can add a country to my Saved Countries list (note: we will work on this during a later version of the project)


**⚠️ NOTE ⚠️: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data. You should use this as a backup, if the API responds with an error.**

## Where to find everything

You will need to use this [Figma file](https://www.figma.com/design/YuEMNteoQic0h6RRiYprpV/Countries-API-Project?m=auto&t=C9b6FsfUdPspzaqu-1) for the designs

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use an icon font library for the icons.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Tips for building your project
1. Work on one feature at a time. Finish one feature first before you move onto the next thing. As a metaphor, if we are making dinner, we should start with making each dish before we get hung up on choosing the plates and dinnerware. Otherwise we'll have a bunch of nice plates but no food on the table!
2. Start with the most important features first, such as the Header and displaying the country data as cards. Don't bother working on less significant features (such as the filter and search features) until you've gotten the main stuff completed. 
3. Initialize your project as a public repository on [GitHub](https://github.com/). If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
4. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
7. Feel free to use a UI library like Chakra UI to help create your components.

## Deploying your project

When you are close to finishing your project, please deploy it to [Netlify](https://www.netlify.com/) via your Github repo. 

## Roadmap: Step-by-step guide to building your project

### Step 1 — Project Setup, Installation, and Folder Structure
  - Set up React project in VS Code with Vite
  - Install React Router package
  - Create new Github Repo
  - Copy data.json file and [style-guide.md](http://style-guide.md) files into project folder on VS Code
  - Push code to Github
    
### Step 2 — Set up Header and Routes
  - Set up Routes for each page (Home page and Saved Countries page) in App.jsx
  - Set up file for Home Page
  - Set up file for Saved Countries Page
  - Create Header component

### Step 3 — Create UI for Homepage
  - Display country data from the data.json file on HomePage
  - Create CountryCard component
    
### Step 4 — API calls and data
  - Create API call
  - Refactor country data in Cards to display data from API call, instead of displaying data from data.json
    
### Step 5 — Form
  - Create the Form on Saved Countries Page

### Step 6 — Finalize & Deploy project
  - Deploy your completed project to Netlify

### Stretch Goals (optional)
  - Create the searchbar on the Home page
  - Filter countries by region
  - Dark Mode
  - Create the Individual Country page
 
