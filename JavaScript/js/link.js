/**
 * Created with JetBrains WebStorm.
 * User: Ana
 * Date: 9/18/13
 * Time: 3:37 PM
 * To change this template use File | Settings | File Templates.
 */
function changeLink()
{
   document.getElementById("myAnchor").innerHTML = "W3Schools";
   document.getElementById("myAnchor").href="http://www.w3schools.com";
   <!-- _blank, _self, _parent, _top , framename  -->
   document.getElementById("myAnchor").target="_top";
}
