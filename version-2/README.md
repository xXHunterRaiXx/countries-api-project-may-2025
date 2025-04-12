# Countries API Application - Version 2

## 👋 Welcome!

Version 2 builds on the Version 1 of the Countries API app by saving data in the browser using Local Storage. Your application will remember the user's Form data, Saved Countries, and how many times each country has been viewed. By storing persistent data, your app will become more personal, dynamic, and interactive.

## 🎯 Requirements for Version 1

Include functionality in your Countries API project that saves the following data to local storage: 

1. **Form data**
    - As a user, when I submit the form, my data should be stored in Local Storage.
    - As a user, if I have already submitted the form, I should see "Welcome, [my name]!" instead of the form. 
2. **Saved Countries data**
    - As a user, on my Saved Countries page, I should be able to see all of the Saved Countries.
    - As a user, when I click the Save button in an individual country's page, I should be able to see that country's card in my Saved Countries page
3. **View Count data** 
    - As a user, when I open a country's page, I should be able to see how many times the user has viewed this country.
    - Every time I view a country's page, its view count should go up by 1. 

## 🔗 Resources

- **Local Storage guide on freeCodeCamp:** Learn how to use Local Storage via [this tutorial on freeCodeCamp](https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/)
- **Local Storage demo on Youtube:** [This video](https://www.youtube.com/watch?v=AUOzvFzdIk4) shows you a quick example of using Local Storage in Javascript
- **API:** You will use the [REST Countries API](https://restcountries.com) to get the country data and flag images

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code.
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.

## 🚀 Roadmap: Step-by-step guide to building Version 2
Make sure you've finished Version 1 before moving on with the following steps.

### Project Setup: Copy your files over 
1. Copy all of the files inside of your `version-1` folder
2. Paste all of the files into your `version-2` folder
3. Push your code to Github! You will use your `version-1` code as the starting point for your `version-2`. 

### Pseudo-code: Review your code 
1. Review your code so far. Review each component's purpose and its code. Consider where you will be storing the 3 pieces of data (form, saved countries, and view count).
2. Make a list of the things you will need to do in order to build your Version 2. 

### Storing Form data
1. Review your Form on the Saved Countries page. Pseudo-code what you will need to do to store and retrieve the Form data. 
2. When the user submits the form, store the data in Local Storage.
3. When loading the Saved Countries page, check Local Storage to see if the user has already submitted the form. If the user already has data stored in Local Storage, retrieve that data and display "Welcome, {user}!" instead of the Form.
4. Comment the code you wrote so that Future You can understand it later.
5. Push your code to Github! 

### Storing Saved Countries data
1. Pseudo-code what you will need to do to store and retrieve the Saved Countries data.
2. When the user saves a country, store the saved country's data in Local Storage.
3. When loading the Saved Countries page, get the Saved Countries data from Local Storage. Display those countries as CountryCards on the Saved Countries page. 
4. Comment the code you wrote so that Future You can understand it later.
5. Push your code to Github!

### Storing View Count data 
1. Pseudo-code what you will need to do to store and retrieve the View Count data. 
2. When the user views a country's page, get its View Count from Local Storage and display it to the user.
3. When the user views a country's page, increment its View Count by 1 and store the updated View Count in Local Storage. 
4. Comment the code you wrote so that Future You can understand it later.
5. Push your code to Github!

### Clean and Comment your code 
1. Clean up your code by renaming confusing variables, removing unused code, and organizing your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.
2. Comment your code generously — Future You will thank you. You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.

### Deploy project to Netlify
1. Deploy your completed project to [Netlify](https://www.netlify.com/) via your Github repo. In your Netlify Deploy settings, you will need to specify which version you want to deploy. Check out [this guide to help you](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz).

### Stretch Goals (optional — only do these if you have completed _all_ of the above steps)

Finished all the above steps? Fantastic! 

Here are a few next-level challenges to tackle:
1. On the Saved Countries page, add a "Unsave" button to the Country Cards so that the user can unsave a country.
2. On the Form on the Saved Countries page, add a "Submit again" button so that the user can re-submit the form. 
