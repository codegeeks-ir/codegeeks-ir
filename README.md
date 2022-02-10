# ceituut blog
ceituut blog using jekyll. still under development. we need your help !

## How to add my own post to blog ?
Please follow this steps :  
1- Fork this repository and create your own branch from `main`. Name the branch like `Add-post-` followed by `your-github-id`.  
For example I will name my branch like this : `Add-post-amirihusayn`  

2- If your first time to write post, add your bio file as author inside `_authors` directory;   
Just creat a markdown file with name `your-github-id.markdwon`.  
Your future posts will use this  bio file.

3- Your bio content should be like this :  
<pre><code>
---
github_id : amirihusayn
name: امیر گودرزی
position: بازیساز مستقل
---
سلام ! من امیر هستم
</code></pre>  
Note : Don't forget to write your github id correct.

4- Then for adding your own post, simply just create a markdown file inside `_posts` directory. 
It's name should have data and title convention like this : `2022-02-06-post-title.markdown`  

5- Your post content  should be like this :  
<pre><code>
---
layout: post
title: "نام پست"
date: 2022-02-06 11:07:38 +0330
categories: category
description: "شرح مختصر"
author: amirihusayn
---
</code></pre>  
Just edit `title`, `date`, `categories`, `description` and `author`. After these lines you are free to write your post content.  
Note : Don't forget to write your github id in front of `author` field.  
6- Commit your changes, push them and finally send pull request.  

## Which subjects can i post ?
You are free to share experiences, educational references, university or association memories and even your `README.md` of your project !

## Is writing posts the only way to contribute to this project ?
Of course No ! Checkout issues and help to make this project better and better.
