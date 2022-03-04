# website
ceituut blog using jekyll. Any contributions are welcome !

## Requirements

First of all You shoul install [jekyll][]. Then take a look at it's documentation.
Now you can Fork the repo, Create your branch from main, Commit your changes and send Pull request.

## Attention

When you are ready to commit changes, please do not use `git add . ` !    
There are submodules inside `collections/` that are 
actually another repos. If you mistakenly added those, be sure to run  
`git rm --cached collections/` for unstaging `collections/`. Then You are free to make commit.   

## How to update theme ?

Currently We use [Bootstrap][] with [SASS][]. Check out `_layouts`, `_includes` and `scss` directories. To modify styles, 
change the rules inside `scss/styles.scss`. This SASS file will be compiled to `assets/css/styles.css`.

## How to update website content ?

Content of website are submodules that located inside `collections/` directory. You are not allowed to change their content 
directly. Instead You can fork those repos and send pull request. Here are the content repos :  

[References][]  
[_authors][]  
[_contests][]  
[_events][]  
[_faqs][]  
[_members][]  
[_posts][]  

[jekyll]: https://jekyllrb.com/docs/installation/
[Bootstrap]: https://getbootstrap.com/
[SASS]: https://sass-lang.com/

[References]: https://github.com/ceituut/References  
[_authors]: https://github.com/ceituut/_authors 
[_contests]: https://github.com/ceituut/_contests
[_events]: https://github.com/ceituut/_events
[_faqs]: https://github.com/ceituut/_faqs
[_members]: https://github.com/ceituut/_members  
[_posts]: https://github.com/ceituut/_posts
