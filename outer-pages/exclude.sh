# Remove other parts that no need for them
rm -d -f -r ceituut.github.io

rm -d -f -r _includes/events
rm _includes/authors.html
rm _includes/developers.html
rm _includes/members.html
rm _includes/post.html

rm _layouts/author.html
rm _layouts/contest.html
rm _layouts/event.html

# Exclude other files from build process
rm -d -f -r resources
rm -d -f -r .git
rm _includes/svgs/ceituut/LICENSE
rm _includes/svgs/uut/LICENSE
rm assets/css/input.css
rm assets/images/LICENSE