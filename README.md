# CS601 Final Project Mid-term Review - Joshua Byrd

You will find below the complete summation of my site as it stands as well as my plans for features I want to include in the
final project. I welcome any and all feedback and will do my best to incorporate it into the finished product. Thanks for taking
the time to provide a review!

## Links
The site is currently published to the web using Github pages at: https://joshua-byrd.github.io/

And you can view the repository at: https://github.com/Joshua-Byrd/Joshua-Byrd.github.io

## The Current State
My project currently consists of seven pages:
1. Landing page - there isn't much here, just a brief introduction and welcome.  ## UPDATE 11/24/23 - Added a new landing page
2. Resume - a current resume in HTML. This is still partially under construction.
3. Projects - a list of projects I've built with links to their respective Github pages
4. Blog - a blog with multiple posts detailing various things that I've learned so far this semester.
5. Gallery - a gallery of pictures I've taken
6. About - a bio detailing my story and career-change aspirations
7. Contact - a contact page with a working contact form and links to my person Github and LinkedIn pages.

At this point, every element on every page has been styled using a carefully chosen color scheme and fonts. Flexbox is used in the
navbar and in multiple places on the resume, contact, and gallery pages, and the entire site is made responsive to screen changes using media queries with specific breakpoints. Every pages scales from mobile size to large desktop-monitor size with a max-width set on the main sections so it never becomes too wide and difficult to read. There is also a simplified version of the site specifically for printing using a print media query. 

There isn't a lot of JavaScript right now - I'm using it to validate form information on the contact page and the most recent blog post details the making of a div that gets randomly styled when clicked.  ## UPDATE 11/26/23 - JavaScript has been added to the landing page and the blog page, explained below.

## Plans for the final project
1. As I've stated in other assignments, I really want to do something eye-catching with the landing page, but so far this has stymied me. Hopefully, as my knowledge of JavaScript grows, I can figure out something really nice to do here. ## UPDATE 11/24/23 - Added a new landing page with fade in heading and arrow, and sections heading that appear on scroll. The arrow glows every one to four seconds randomly. It's not perfect, and I need to finish the captions on each of the section headings, but I think it looks pretty nice.
2. The resume page is obviously unfinished. The styles are there, but I need to determine how to arrange everything to present myself as well as possible. I also need to remove the underlying project logos in the print style.
3. I want to redo the blog page as an accordion so each post can be hidden or displayed. ## UPDATE 11/23/23 - Added the accordion to the blog page. The original update had the accordion looking pretty standard with an opaque background and defined boxes for each heading, but I changed it to fit the theme of the site, which I feel looks better. Now it is just a series of clickable headings with a plus or minus to indicate that it can be expanded or collapsed.
4. I want to redesign the projects page using either grid or flexbox, with more succinct descriptions.
5. I want to redesign the contact form validations given what I've learned in module 4.  
6. I know that using Vue is part of the stated requirements for the final project, so this will be added as well, but since I've only just started researching Vue, I don't know what this will look like yet. 
7. I know that with seven pages, I'm only just meeting the minimum number. However, I would rather spend time making the pages that I have great than to add extraneous pages that don't really offer anything of value.

## To Run

As this is current a static website, no extra steps are necessary to run it. Simply open index.html in your browser of choice.