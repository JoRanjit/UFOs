# UFO Sightings around the world

## Project goal is to create an interactive webpage that allows readers to parse the data UFO sightings from around the world. 

### Table 'data.js' contains data of UFO sightings around the world with details like date, city,state, country, shape and some comments. 
The webpage will allow users to view the data (HTML) and a dynamic table that will present it (JavaScript).

### First we created a storyboard with the different components to build the website.

### Set up the filters in the exact dimensions that the user wanted using this code in index.html:
![index.html filter-setup]( https://github.com/JoRanjit/UFOs/blob/main/static/Images/filters%20in%20html.PNG)

-- This is how it looks in website:
![website filters]( https://github.com/JoRanjit/UFOs/blob/main/static/Images/filters%20update.PNG)

### Then using app.js - 
    * we created a table to organize UFO data that is stored as a JavaScript array.
    * we created fully functional filters that will allow users to interact with our visualizations. Available filters are:
        * by Date
        * by City
        * by State
        * by Country
        * by Shape
-- Then we used this function in app.js to capture the filter selections
![app.js updatefilters]( https://github.com/JoRanjit/UFOs/blob/main/static/Images/updateFilters%20code.PNG)

-- Finally this function in app.js will filter the table based on user selections and display on the dynamic table:
![app.js filterTable]( https://github.com/JoRanjit/UFOs/blob/main/static/Images/filterTable.PNG)

### We used bootstrap and css styles (style.css file) - like background image, fonts etc. to customize the webpage.

### Here's the final look of the 'UFO Signtings' webpage:
  * Users can filter the data by date, city, state etc. and 'UFO Sightings table' on the right will update dynamically based on their selection.
![Webpage]( https://github.com/JoRanjit/UFOs/blob/main/static/Images/webpage.PNG)
