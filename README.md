# About

This jamstack website project is made using [nextjs][] for Computer Association of Urmia University of Technologies; Considering License, You are able to use this boilerplate project to create website for your Computer Association as well.  
Components and layouts, all are React based. Any contributions are welcome, specially for React developers that supporting each other in their huge community !

## Requirements

You can Fork the repo, Create your branch from main, Commit your changes and send Pull request.

Install project dependencies:  

```bash
npm install
```

Generate styles:  

```bash
npm run tailwind-dev
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

Means this repository only contains source code; So if You build the project locally, You will not see any content.  

The collections are repositories that make content of website like posts, events, courses and so on; To see them or test your changes locally, First of all You need to clone all the collections.  

So what You should do is to Run our clone command inside project directory. If you are on windows, run it inside git bash.  

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
[companions][]  

## License

UUT®, the UUT® logo design, UUT Cultural Affairs® and the UUT Cultural Affairs® logo are trademarks of UUT, The Urmia University of Technologies. No adaptation or use of any kind of any of our registered trademarks, is allowed without the express written permission of UUT. Checkout the relevant license [here][UUT-logo-license]. For more information regarding the authorized uses of these items, please [contact us](mailto:info@uut.ac.ir).  

codegeeks-ir® and the codegeeks-ir® logo design, are trademarks of codegeeks-ir, The association of Computer Engineering and Information of Technologies - Urmia University of Technologies. No adaptation or use of any kind of any of our registered trademarks, is allowed without the express written permission of codegeeks-ir. Checkout the relevant license [here][codegeeks-ir-logo-license]. For more information regarding the authorized uses of these items, please [contact us](mailto:amirgoodarzi75@gmail.com).  

Any other things like code and docs are under [same MIT license][project-license].

[nextjs]: https://nextjs.org/  
[tailwindcss]: https://tailwindcss.com/  

[requirements]: https://github.com/codegeeks-ir/requirements  
[faqs]: https://github.com/codegeeks-ir/faqs  
[projects]: https://github.com/codegeeks-ir/projects  
[events]: https://github.com/codegeeks-ir/events  
[blog]: https://github.com/codegeeks-ir/blog  
[members]: https://github.com/codegeeks-ir/members  
[challenges]: https://github.com/codegeeks-ir/challenges  
[companions]: https://github.com/codegeeks-ir/companions  

[UUT-logo-license]: https://github.com/codegeeks-ir/codegeeks-ir/blob/main/public/icones/uut/LICENSE
[codegeeks-ir-logo-license]: https://github.com/codegeeks-ir/codegeeks-ir/blob/main/public/icones/codegeeks-ir/LICENSE
[project-license]: https://github.com/codegeeks-ir/codegeeks-ir/blob/main/LICENSE
