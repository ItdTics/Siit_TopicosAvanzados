$(document).ready(function(){

             
          
      $('.app-folders-container').appFolders({
        opacity: 1,                 // Opacity of non-selected items
        marginTopAdjust: true,            // Adjust the margin-top for the folder area based on row selected?
        marginTopBase: 10,               // If margin-top-adjust is "true", the natural margin-top for the area
        marginTopIncrement: 0,            // If margin-top-adjust is "true", the absolute value of the increment of margin-top per row
        animationSpeed: 200,            // Time (in ms) for transitions
        URLrewrite: false,               // Use URL rewriting?
          // a jQuery selector containing links to content within a jQuery App Folder
      });

      // For each image:
      // Once image is loaded, get dominant color and palette and display them.
      
  
  
});