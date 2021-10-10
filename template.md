---
trailName: Title of Trail
date: 2020-10-23
activity:
  - running
  - walking
  - hiking
  - cycling
link: https://link-to-trail-website
location: https://goo.gl/maps/LmATVVBDUkAR3z6P6
free: true
routes: https://link-to-the-route-like-alltrails
otherLinks:
  - https://link-to-another-blog-post
  - https://link-to-another-video
---

This is where you add the description. Try to write a small paragraph about what the trail is like and why we should do it. Are there multiple trails? How hard are the trails? What do you like about the trail? How is the parking? Anything we should look out for? What else should we know about the trail? Bathrooms? It it safe?

Perhaps a picture. To add a picture add the picture to the folder and name it something reasonable, then add the image to the markdown file. Try not add massive image check out [https://squoosh.app/](https://squoosh.app/) to reduce it (a width of 800px is more than enough I think)

For the frontmatter at the top here is an explanation of what's required:

- trailName (required (string) - name of the frail)
- date (required (date) - Date edited, note the date format, use YYYY-MM-DD so we can read it easily for the website)
- activity (required (list) - the following types are accepted: cycling, running, walking, hiking, swimming)
- link (required (url) - a website for the trail, if there is not one try add something with authority like a google place link, government website or facebook page)
- location (required (url) - google map link, so you can pull it up quickly for directions)
- free (required (boolean) - is the trail free or do you have to pay, boolean true or false)
- routes (optional (url) - try find a webpage with a route or look on alltrails.com or strava.com)
- otherLinks (optional (list) - list of other resources about the trail like another blog post, article or video)
