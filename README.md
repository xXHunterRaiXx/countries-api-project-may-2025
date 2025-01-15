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
1. Initialize your project as a public repository on [GitHub](https://github.com/). If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
3. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
4. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.
5. Feel free to use a UI library like Chakra UI to help create your components.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## Roadmap: Step-by-step guide to building your project

### Day 1 — Project Setup, Installation, and Folder Structure
  - Set up React project in VS Code with Vite
  - Install React Router package
  - Create new Github Repo
  - Copy data.json file and [style-guide.md](http://style-guide.md) files into project folder on VS Code
  - Push code to Github
    
### Day 2 — Create UI for Homepage
  - Set up Routes in App.jsx
  - Create Header Component
  - Display country data from data.json file as Cards
  - Create Card Component
    
### Day 3 — API calls and data
  - Create API call
  - Refactor country data in Cards to display data from API call, instead of displaying data from data.json
    
### Day 4 — Form
  - Create the Form on Saved Countries Page
    
### Day 5 — Create Individual Country Page & Search Feature
  - Create the UI for the Individual Country page
  - Create the searchbar on the Home page

### Day 6 — Finalize & Deploy project
  - Deploy your completed project to Netlify

### Stretch Goals (optional)
  - Filter countries by region
  - Dark Mode
