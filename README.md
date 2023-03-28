# About

This jamstack website project is made using [nextjs][] for Computer Association of Urmia University of Technologies; Considering License, You are able to use this project to create website for your Computer Association as well.  
Components and layouts, all are React based. Any contributions are welcome, specially for React developers with huge community !

## Requirements

You can Fork the repo, Create your branch from main, Commit your changes and send Pull request.

Install project dependencies:  

```bash
npm install
```

Run project:  

```bash
npm run dev
```

### We use prettier

We formate code, using Prettier. before commiting your changes run format command:  

```bash
npm run pretty
```

### We use tailwindcss

We use [tailwindcss][]. To modify styles, change the rules inside `public/css/input.css`. Then run build command:  

```bash
npm run tailwind
```

Output will be `public/css/output.css`.

## Contents are seperated from source code

In this project, We've seperated content from this source code; So if You build the project locally, You will not see any content.  

The collections are repositories that make content of website like posts, events, courses and so on; To see them or test your changes locally, First of all You need to clone all the collections.  

We made this clone process a little automation and without being worry about renamed colllections, newly added or removed ones; We just to bring all of them with no other headaches.  

So what You should do is to :  
1- Create `.env` file inside project root directory, with your Github Personal Access Token provided like so :  

```text
GITHUB_ACCESS_TOKEN=<Your Github Personal Access Token>
```

2- Run our clone command inside project directory. If you are on windows run it inside git bash.  

```bash
npm run clone-collections
```

Now all contents are available and You see them.

## Join content team

Also if You have something valuable to write or give someone else, here are the repos You can fork and improve them :  

[requirements][]  
[faqs][]  
[projects][]  
[events][]  
[blog][]  
[members][]  
[challenges][]  

## License

UUT®, the UUT® logo design, UUT Cultural Affairs® and the UUT Cultural Affairs® logo are trademarks of UUT, The Urmia University of Technologies. No adaptation or use of any kind of any of our registered trademarks, is allowed without the express written permission of UUT. Checkout the relevant license [here][UUT-logo-license]. For more information regarding the authorized uses of these items, please [contact us](mailto:info@uut.ac.ir).  

CEITUUT® and the CEITUUT® logo design, are trademarks of CEITUUT, The association of Computer Engineering and Information of Technologies - Urmia University of Technologies. No adaptation or use of any kind of any of our registered trademarks, is allowed without the express written permission of CEITUUT. Checkout the relevant license [here][CEITUUT-logo-license]. For more information regarding the authorized uses of these items, please [contact us](mailto:amirgoodarzi75@gmail.com).  

Any other things like code and docs are under [same MIT license][project-license].

[nextjs]: https://nextjs.org/  
[tailwindcss]: https://tailwindcss.com/  

[requirements]: https://github.com/ceituut/requirements  
[faqs]: https://github.com/ceituut/faqs  
[projects]: https://github.com/ceituut/projects  
[events]: https://github.com/ceituut/events  
[blog]: https://github.com/ceituut/blog  
[members]: https://github.com/ceituut/members  
[challenges]: https://github.com/ceituut/challenges  

[UUT-logo-license]: https://github.com/ceituut/ceituut.github.io/blob/main/public/icones/uut/LICENSE
[CEITUUT-logo-license]: https://github.com/ceituut/ceituut.github.io/blob/main/public/icones/ceituut/LICENSE
[project-license]: https://github.com/ceituut/ceituut.github.io/blob/main/LICENSE
