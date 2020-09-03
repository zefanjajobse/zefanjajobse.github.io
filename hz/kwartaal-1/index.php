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

<style>
.penguin {
  --penguin-skin: gray;
}

.penguin-left-hand { /*om een variable aan meerdere items met dezelfde kleur toe te wijzen*/
  background-color: gray; /* voor backwards compatibilty */
  background-color: var(--penguin-skin);
}

.container {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* makes 3 divs in the container 100px big */
  grid-template-rows: 50px 50px;
  grid-column-gap: 5px; /* room between columns */
  grid-row-gap: 5px; /* room between rows */
  grid-gap: 10px 20px; /* row - column */
  grid-column: 2 / 4; /* select the space it uses in the grid on a item */
  justify-self: center; /* align item horizontaal */
  align-self: end; /* verticaal */
  grid-template-areas: /* maak de grid makkerlijker (de header is 3 blokken lang) */
  "header header header"
  "advert content content"
  "footer footer footer";
  grid-area: footer; /* in een area, define het als de footer area */
  grid-area: 3/1/4/4; /* grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at; */
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); /* autofills with columns until it doesnt fit within the minmax */
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); /* only do it when all the items doesnt fit */

  /* instead of 1fr 1fr 1fr u can use repeat(3, 1fr); */

  /* fr: sets the column or row to a fraction of the available space,

auto: sets the column or row to the width or height of its content automatically,

%: adjusts the column or row to the percent width of its container. */
}
</style>