// This javascript file sets html snippets as long variables (note the back-quotes) 
// that represent repeated elements used by the page_name/index.htm template.  At 
// the end of the file, we have some jquery functions that include the snippets in the 
// appropriate div elements.  

// The most common changes wil be updating the side-bar index.  Anytime a page or a 
// deep-link heading is added, you must add it below to make it show up in the sidebar. 
// Here is an example:

{/* <ul class="treeview">
<li class="chapter"><a href="../home/index.htm">Home Page</a></li>
    <ul class="verses">
    <li class="verse"><a href="../home_intro/index.htm#early">Home Intro Early Link</a></li>
    <li class="chapter"><a href="../home/index.htm">Home</a></li>
       <ul class="verses">
         <li class="verse"><a href="../home/index.htm#early">early Link</a></li>
         <li class="verse"><a href="../home/index.htm#late">Late Link</a></li>
       </ul>
    <li class="verse">List item three</li>
</ul> */}
// Note that a "chapters are web pages represented by index.htm files (based on the template).
// A chapter is al LI element followed by a complete UL element with class="verses". 
// Each "verse" is an LI class="verse" that contains an href to an internal target within the 
// parent chapter.
// A chapter's verses can also include references to other chapters.  Go just one level deep 
// with this. 


let index_htm = `
<p style="background-color: white; margin-left: -10px; padding-left: 10px;">This is a very early draft of the C-Dash Docs.  It is not yet ready for public consumption.  Nevertheless you are welcome to take a look around. 
</p>  
<ul class="treeview">
<h3>Extending Omeka</h3>
<li class="chapter"><a href="../home/index.htm">Enriching and Connecting Place-Based Knowledge</a></li>
    <!-- ul class="verses">
      <li class="verse"><a href="../home/index.htm#roles">Stakeholder Roles and Motivations</a></li>
      <li class="verse"><a href="../home/index.htm#oais">Archival Asset Management Approach</a></li>
    </ul -->

    <li class="chapter"><a href="../stewardship/index.htm">Governance and Stewardship Roles</a></li>
    <ul class="verses">
    <li><a href="../template/index.htm#assets">CDASH Assets Summary</a>
    <li><a href="../template/index.htm#hazards">Predictable Hazards</a>
    <li><a href="../template/index.htm#roles">Stewardship Roles and Responsibilities</a>
    <li><a href="../template/index.htm#tabtargets">IT Service Agreement</a>
    </ul>

    <li class="chapter"><a href="../assets/index.htm">CHC Omeka Assets</a></li>
    <ul class="verses">
    <li><a href="../assets/index.htm#containers">Containerized Web Application</a>
    <li><a href="../assets/index.htm#stack">The CHC Omeka Application Stack</a>
    <li><a href="../assets/index.htm#offline">Off-Line Files</a>
      <li><a href="../assets/index.htm#data">MySQL Data</a>
    <li><a href="../assets/index.htm#persist">Persistent Application Files</a>
      <li><a href="../assets/index.htm#scans">Scan Batches</a>
    </ul>


  </ul>
<h3>Contributor / Manager Viewpoint</h3>
<ul class="treeview">
  <li class="chapter"><a href="../fundamentals/index.htm">Omeka Fundamentals</a></li>
    <ul class="verses">
      <li><a href="../fundamentals/index.htm#reading">Recommended Reading for the CDASH Manager</a>
      <li><a href="../fundamentals/index.htm#items">Items</a>
      <li><a href="../fundamentals/index.htm#templates">Resource Templates and Vocabularies</a>
      <li><a href="../fundamentals/index.htm#vocabularies">Vocabularies</a>
      <li><a href="../fundamentals/index.htm#sites">Omeka Sites (like CDASH)</a>
      <li><a href="../fundamentals/index.htm#sites">Skill Building Exercises</a>
    </ul>
    <li class="chapter"><a href="../schema/index.htm">CDASH Schema: <br>CHC Building Files In Omeka</a></li>
    <ul class="verses">
      <li><a href="../schema/index.htm#building_files">Building Files Collection</a>
      <li><a href="../schema/index.htm#Scanning">Scanning, Rough Cataloging and Geocoding</a>
      <li><a href="../schema/index.htm#items">Omeka Items</a>
      <li><a href="../schema/index.htm#docitems">CDASH Document Items</a>
      <li><a href="../schema/index.htm#placeitems">CDASH Place Items</a>
      <li><a href="../schema/index.htm#docplace">Document Items are Related to Place Items</a>
        <li><a href="../schema/index.htm#editing">Automating and Enriching the Collection</a>
      <li><a href="../schema/index.htm#editing">Creating and Editing CDASH Items</a>
      <li><a href="../schema/index.htm#resources">CDASH Vocabulary Developer Resources</a>
    </ul>
 
 

    <li class="chapter"><a href="../place_items/index.htm">Place Items Data Dictionary</a></li>
    <ul class="verses">
    <li><a href="../place_items/index.htm#dictionary">Place Properties Dictionary</a>
    <li><a href="../place_items/index.htm#types">Place Types</a>
    <li><a href="../place_items/index.htm#neighborhoods">CHC Neighborhoods</a>
    <li><a href="../place_items/index.htm#tbd">Terms To be Determined:</a>
    <li><a href="../place_items/index.htm#use">Building Use</a>
    <li><a href="../place_items/index.htm#style">Building Style</a>
    <li><a href="../place_items/index.htm#material">Building Material</a>
  </ul>


    <li class="chapter"><a href="../doc_items/index.htm">Document Items Data Dictionary</a></li>
    <ul class="verses">
    <li><a href="../doc_items/index.htm#css">Metadata Properties Dictionary</a>
      <li><a href="../doc_items/index.htm#doctypes">Document Types and Default Properties</a>
    <li><a href="../doc_items/index.htm#subjects">CDASH Subject Keywords</a>
    </ul>
</ul>


<h3>Developer Viewpoint</h3>
<ul class="treeview">
<li class="chapter"><a href="../docker/index.htm">Application Development and Production Set-Up</a></li>
<ul class="verses">
  <li><a href="../docker/index.htm#containers">Contianerized Web Application</a>
  <li><a href="../docker/index.htm#dockerfiles">Docker Resources and Set-Up Tips</a>
</ul>

<li class="chapter"><a href="../theme_layout/index.htm">CDASH Layout</a></li>
    <ul class="verses">
    <li><a href="../theme_layout/index.htm#themes">Omeka Themes</a>
    <li><a href="../theme_layout/index.htm#wireframe">Wireframe Demo</a>
    </ul>

<!-- li class="chapter"><a href="../omeka_modules/index.htm">Understanding Critical Modules</a></li>
  <ul class="verses">
    <li class="verse"><a href="../repocat/index.htm#principles">Guided by Sound Asset Management Principles</a></li>
    <li class="verse"><a href="../repocat/index.htm#web">Simple-Self-contained Web Publishing Solution</a></li>
  </ul -->
<br>
 <hr>
 <br> 
<li class="chapter"><a href="../template/index.htm">Documentation Template / Style Guide</a></li>
    <ul class="verses">
    <li><a href="../template/index.htm#css">Basic Styling</a>
    <li><a href="../template/index.htm#slideshow_element">Slide Shows</a>
    <li><a href="../template/index.htm#figures">Figures</a>
    <li><a href="../template/index.htm#table">Tables</a>
    <li><a href="../template/index.htm#tabtargets">Controlling new Tabs</a>
    <li><a href="../template/index.htm#blocks">Colored Text Blocks</a>
    </ul>



</ul> <!-- Closes Index -->
`
let header_htm = `
<!-- div style="float: left; width: 50%; margin: 0px"><img src="../resources/images/c_dash_banner_stretched.jpg" height="50px"></div -->
<div style= "width: 50%; float: right; padding-top: 20px; font-size: 17px;">
<div class="rightflex">
<div><a href="https://github.com/c-dash" target="github">GitHub</a></div> 
<!-- div><a href="https://www.youtube.com/channel/UCPkMHdYokjSvoaljowhkjBQ" target="youtube">YouTube</a></div -->
<div><a href="../home/index.htm">Home</a></div>
</div></div>
`;

let index_head_htm = `<div style="background-image: ../resources/images/c_dash_banner_stretched.jpg;"><img height="100%" style="float:left; padding: 0px 5px 15px 5px;" src="../resources/images/favicon.ico"><p class="title">C-Dash Docs</p></div>`;

let index_footer_htm = `
<!-- div class="middleflex " >
   <div>Hide/Show: </div> 
   <div id="toggle_headings">Pages</div> 
   <div id="toggle_subjects">Headings</div>
 
  
</div-->
`;

let footer_htm = `<div style="float: left;"><a style="color: black; font-size: 10pt;" href="../resources/mit_license.txt">MIT License</a></div>
<div class="rightflex" style="color: red; font-size: 10pt; font-family: Arial, Helvetica, sans-serif;"><div><a href="http://pbcgis.com" target="_new">pbcGIS: cultivating spatial intelligence</a> <span style="font-size: 6pt; vertical-align: super;"> &reg;</span></div></div>`;




$(function() {
  $('#index-header').html(index_head_htm);
   $('#index').html(index_htm);
   $('#index-footer').html(index_footer_htm);
   $('#footer').html(footer_htm);
   $('#header').html(header_htm);

});

 