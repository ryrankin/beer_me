# Etsy Search

<img width="1280" alt="screen shot 2017-02-07 at 10 16 09 am" src="https://cloud.githubusercontent.com/assets/20390109/22697311/11b65afc-ed1f-11e6-8ec1-20caadb4d3c8.png">
<img width="1277" alt="screen shot 2017-02-07 at 10 16 23 am" src="https://cloud.githubusercontent.com/assets/20390109/22697316/14f9f34a-ed1f-11e6-93df-e5c13188eb0c.png">
<img width="1275" alt="screen shot 2017-02-07 at 10 16 37 am" src="https://cloud.githubusercontent.com/assets/20390109/22697324/191e39fe-ed1f-11e6-9543-d031c6502422.png">
<img width="1277" alt="screen shot 2017-02-07 at 10 17 05 am" src="https://cloud.githubusercontent.com/assets/20390109/22697331/1c000846-ed1f-11e6-87aa-9fe505ee148e.png">
<img width="1277" alt="screen shot 2017-02-07 at 10 17 28 am" src="https://cloud.githubusercontent.com/assets/20390109/22697334/1e33c24c-ed1f-11e6-8a68-b3fde9fd3249.png">
<img width="1280" alt="screen shot 2017-02-07 at 10 17 42 am" src="https://cloud.githubusercontent.com/assets/20390109/22697338/21015836-ed1f-11e6-908b-5a4952392982.png">

  In this Etsy Search app, the user will come to a main screen with a title of "Search Etsy Products", with a textbox to input a search, and "Search" button the user can use to enter their search. The user will enter a keyword to search in the textbox, and either hit "Enter" or click "Submit" on the screen. If the user enters an incorrect keyword, they will be prompted with a message telling them "No search results found for '_blank_', please search for something else". 
  When the user has entered a valid keyword, a loading gif will appear on the screen letting the user know the page is loading something. When the load is complete, the load gif disappears and the page has rendered results from the search. The page will initially load 20 items. When the user scrolls down the page and reaches the last row, 20 more items will load into the page. This will continue as long as the user keeps scrolling and the search renders more results. On each item, there is a button labeled "view on Etsy" with a link corresponding to that item on Etsy's site. The button can be clicked and opens in a new tab in the browser. 
  If the user wants to begin a new search, they can click the arrow that running along the right panel, and the page will scroll back to the top of the page where the search textbox is. 
  
This app uses HTML, CSS, JavaScript, and jQuery. The AJAX request to Etsy returns data in 'jsonp' format.
