// drop collection if already exists
db.samplesCollection.drop();
// insert new documents into collection
db.samplesCollection.insert([
    {
    "name":'ASP.NET Core Web App',
    "description":'An example of my first web app developed using ASP.NET Core. ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.',
    "url":'https://docs.microsoft.com/en-us/aspnet/core/',
    "technologies":["ASP.NET Core","C#","MVC","MS Azure"],
    "images":[{"filename":"image1.png"},{"filename":"image2.png"},{"filename":"image3.png"},{"filename":"image4.png"}]
    },
    {
    "name":'Flexbox Page Layout Examples',
    "description":'The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").',
    "url":'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    "technologies":["Flexbox","HTML","CSS"],
    "images":[{"filename":"image5.png"},{"filename":"image6.png"},{"filename":"image7.png"},{"filename":"image8.png"}]
    },
    {
    "name":'CSS Styling with Sass Examples',
    "description":'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    "url":'http://sass-lang.com/',
    "technologies":["Sass","HTML","CSS"],
    "images":[{"filename":"image9.png"},{"filename":"image10.png"},{"filename":"image11.png"},{"filename":"image12.png"}]
    },
    {
    "name":'Web Apps with React',
    "description":'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    "url":'https://reactjs.org/',
    "technologies":["React","Typescript","HTML","Sass"],
    "images":[{"filename":"image13.png"},{"filename":"image14.png"},{"filename":"image15.png"},{"filename":"image16.png"}]
    }
]);