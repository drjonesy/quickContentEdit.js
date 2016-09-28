/**
* Developer: Ryan Jones
* Date: 9/28/2016
* Description: 	Requires jQuery. Embed a link to this file.
                In a script tag, call the quickContentEdit() function.
                Between the parenthesis in either single or double quotes
                place an HTML element, class, or id.
                This will now make the content editable in the web browser.

                Ex: quickContentEdit('table td'); will make all table cell data editable.
*/
var quickContentEdit = function(stringElement){
    //Uses jQuery each to loop through all elments
    $(stringElement).each(function(){
        var currentData = $(this).html();
        $(this).attr('contenteditable', 'true');
        //comment this out to remove the alert notice
        $(this).click(function(){
            alert("You are about to make a change to"+ currentData +". Caution!");
        });
    });
}
    

