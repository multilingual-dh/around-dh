---
layout: project
date: 2023-03-01
lang: en
lang-ref: sucho-meme-wall
ref: sucho-meme-wall
title: "SUCHO Meme Wall"
author: "Anna Rakityanskaya"
description: "Capturing memes from Russia's war on Ukraine."
permalink: /en/sucho-meme-gallery/
image: true
include: false
---
### About the project
The [SUCHO Meme Wall](https://memes.sucho.org/) collects internet memes related to the Russian war on Ukraine (02/24/2022-), archives them and presents them as a curated collection with complex metadata. The collecting is carried out by crowdsourcing via manual submission of individual memes through a public Google form. The results are presented as an interactive “meme wall” where the memes can be filtered by content, person featured, language, country and template used. The controlled vocabularies have evolved along with the project, and the trajectory of the war. 

The meme wall is part of [Saving Ukrainian Cultural Heritage Online (SUCHO)](https://www.sucho.org/), a rapid-response DH project started on March 1, 2022, days after the war began. SUCHO’s initial focus was web-archiving Ukrainian cultural heritage websites, with the explicit goal of protecting the data in order to help cultural heritage workers rebuild after the war. SUCHO does not see these web archives as a research corpus for western scholars, at least, not without the permission of the libraries, archives, museums, and other institutions that created the data.

The meme wall is part of SUCHO’s second phase, which began in summer 2022. Unlike the web archives, the meme wall is intended to be a resource for scholars and teachers in a variety of contexts, from future historians to current Ukrainian language classes, from high school social studies teachers to scholars working at the cutting edge of computer vision.


### What are the stakes?
Ukrainian war memes are an important born-digital element of contemporary culture. They are disseminated mainly through social media and transmit very powerful war-related messages in a playful manner. Because memes are strongly rooted in current events and ideas, their life span is very short and if not preserved, they will be lost. Even if the files are captured and preserved, many memes only “work” by relying on hyper-specific context that makes sense in the moment, but is quickly forgotten. While machine vision models could be trained to capture the text in memes, or recognize templates or public figures, it is currently impossible to meaningfully automate explanations or metadata that captures meme context, even as that is essential for the memes to have much long-term value. The manual, crowdsourced work that volunteers put into capturing today’s memes will allow them to persist into the short- and long-term future, giving historians an invaluable view into how people across the world experienced and responded to the evolving trajectory of this war.

### What have you learned doing this project?
I learned that memes related to the war in Ukraine are being produced in quantities that completely surpass my expectations, and their subjects keep evolving daily along with the events of the war. For that reason, no archive could collect all the Ukrainian war memes ever produced, but we should aspire to build a representative collection and furnish it with useable metadata. I also learned that it is very important to have many contributors submitting material to a project like that, because submissions reflect the familiar internet environment of each individual person, and the more different contributors we have, the more diversity and depth the archive acquires. 


### Tools
The collecting is carried out by submissions via Google form. The SUCHO Meme Wall website is built directly from these submissions (after manual curation). At build-time, the contents of the sheet are fetched and parsed, and the source images are downloaded from the Google Drive folder. The images are then processed to create the versions in multiple sizes/formats required to create the site. The front-end site itself is created in HTML, CSS, and vanilla Javascript using the Astro static framework. The site is hosted on GitHub Pages and the source is available on GitHub. Running this as a static site using GitHub Actions limits the potential for the site getting hacked, which is a concern with a project like this where the content can be provocative. 


### Source material
The collection contains internet memes found anywhere on the web. The majority of them comes from social media (Telegram, Twitter, etc.). The scope excludes memes with pro-Russian or anti-Ukrainian sentiments. The memes contain texts in various languages, with Russian, English and Ukrainian dominating the set. We collect both image and video files, although at this point only the images are presented on the SUCHO Wall. 


### Collaborators
SUCHO has mobilized over 1,500 volunteers – mostly from Western Europe and North America – to take action in support of Ukrainian cultural heritage following Russia’s invasion. The project is led out of Harvard Library (Anna Rakityanskaya), with technical development from Stanford University Library (Simon Wiles). Olena Sharafanenko at the Bavarian State Library, Mieke Siemons, Caroline Finkeldey, Elisa Cecchetto have been major contributors, along with many other volunteers. We are grateful to them all for submitting memes to the collection.