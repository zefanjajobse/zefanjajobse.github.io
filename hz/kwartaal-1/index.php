<!DOCTYPE html> <!-- for html5 add this in front of the page and start with <html> -->

<!-- in HTML we have main, header, footer, nav, video, article and section to better label the elements in code (has no further purpose)-->
<!-- <a href="#footer"></a> links to a element with the id="footer" -->
<!-- <a href="#"></a> to create a "dead link", usefull for javascript -->
<ul> <!-- for a unordered list -->
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
</ul>
<ul> <!-- for a ordered list -->
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
</ul>
<form action="https://freecatphotoapp.com/submit-cat-photo"> <!-- makes a form thats submit to "action" with 1 input field -->
    <input type="text" placeholder="cat photo URL" required> <!-- required to make it a required option -->
    <button type="submit">submit</button>
    <label for="indoor"> <!-- this created a radio checkbox, because of the same name of the 2 can only 1 be selected -->
                        <!-- It is considered best practice to set a for attribute on the label element, 
                        with a value that matches the value of the id attribute of the input element.
                        This allows assistive technologies to create a linked relationship between the label and the child input element. -->
      <input id="indoor" type="radio" name="indoor-outdoor" value="outdoor"> <!-- add value="outdoor" so its sends outdoor to the server instead of "on" -->
      Indoor
    </label>
    <label for="outdoor">
      <input if="outdoor" type="radio" name="indoor-outdoor" value="indoor" checked> <!-- "checked" to mark it as checked by default -->
      Outdoor
    </label>
    <label for="loving"> <!-- same for a radio item -->
      <input id="loving" type="checkbox" name="personality" value="loving">
       Loving
      </label>
</form> 




