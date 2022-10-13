# website
ceituut blog using jekyll. Any contributions are welcome !

## Requirements

First of all You should install [jekyll][]. Then take a look at it's documentation to understand how to work with that.
Now you can Fork the repo, Create your branch from main, Commit your changes and send Pull request.

## How to update theme ?

We use [tailwindcss][]. To modify styles, 
change the rules inside `assets/input.css`. This will be processed to `assets/css/output.css`. Also You can check out html template files inside `_layouts` and `_includes` directories.

## How to see website content locally ?

Maybe You ask I just build the source code and see it on my local; But Where is the content of website ?! How can I improve theme without any content ?!  

Honestly There is no content, text or images inside this source code. If You're trying to improve website source or make a better theme, simply run the commands below inside project directory to bring content on your machine :  

```bash
git clone --depth 1 -b master https://github.com/ceituut/_code-challenge.git collections/_code-challenge
git clone --depth 1 -b main https://github.com/ceituut/events.git collections/_events
git clone --depth 1 -b main https://github.com/ceituut/posts.git collections/_posts
git clone --depth 1 -b master https://github.com/ceituut/authors.git collections/_authors
git clone --depth 1 -b main https://github.com/ceituut/faqs.git collections/_faqs
git clone --depth 1 -b main https://github.com/ceituut/members.git collections/_members
git clone --depth 1 -b main https://github.com/ceituut/references.git collections/references
git clone --depth 1 -b main https://github.com/ceituut/guide.git collections/guide
git clone --depth 1 -b main https://github.com/ceituut/projects.git collections/projects
```  

## Join content team

Also if You have something valuable to write or give someone else, here are the repos You can fork and improve them :  

[references][]  
[guide][]  
[faqs][]  
[projects][]  
[events][]  
[posts][]  
[authors][]  
[members][]  
[code-challenge][]  

[jekyll]: https://jekyllrb.com/docs/installation/  
[tailwindcss]: https://tailwindcss.com/  

[references]: https://github.com/ceituut/references  
[guide]: https://github.com/ceituut/guide  
[faqs]: https://github.com/ceituut/faqs  
[projects]: https://github.com/ceituut/projects  
[events]: https://github.com/ceituut/events  
[posts]: https://github.com/ceituut/posts  
[authors]: https://github.com/ceituut/authors  
[members]: https://github.com/ceituut/members  
[code-challenge]: https://github.com/ceituut/code-challenge  
