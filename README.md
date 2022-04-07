# website
ceituut blog using jekyll. Any contributions are welcome !

## Requirements

First of all You shoul install [jekyll][]. Then take a look at it's documentation.
Now you can Fork the repo, Create your branch from main, Commit your changes and send Pull request.

## How to update theme ?

We use [tailwindcss][]. To modify styles, 
change the rules inside `assets/input.css`. This will be processed to `assets/css/output.css`. Also You can check out html template files inside `_layouts` and `_includes` directories.

## How to update website content ?

Content of website are submodules that located inside `collections/` directory. You are not allowed to change their content 
directly. Instead You can fork those repos, change them and send pull request. Here are the content repos :  

[_UUTCodeChallenge][]  
[_events][]  
[_posts][]  
[_authors][]  
[_faqs][]  
[_members][]  
[References][]  
[guide][]  

[jekyll]: https://jekyllrb.com/docs/installation/  
[tailwindcss]: https://tailwindcss.com/  

[_UUTCodeChallenge]: https://github.com/ceituut/_UUTCodeChallenge  
[_events]: https://github.com/ceituut/_events  
[_posts]: https://github.com/ceituut/_posts  
[_authors]: https://github.com/ceituut/_authors  
[_faqs]: https://github.com/ceituut/_faqs  
[_members]: https://github.com/ceituut/_members  
[References]: https://github.com/ceituut/References  
[guide]: https://github.com/ceituut/guide  
