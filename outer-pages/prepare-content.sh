# Install requirements
sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /usr/bin/yq
sudo chmod +x /usr/bin/yq
sudo apt install tree

mkdir _data
mkdir _includes
mkdir _layouts
mkdir assets

# Create data file for resources explorer
touch assets/tree.json
tree resources --dirsfirst -q -h -D -J >> assets/tree.json

# Move essential parts
mv -v ceituut.github.io/_data/* _data
mv -v ceituut.github.io/_includes/* _includes
mv -v ceituut.github.io/_layouts/* _layouts
mv -v ceituut.github.io/assets/* assets

mv .github/course-page-config.yml _config.yml
mv ceituut.github.io/Gemfile Gemfile
mv ceituut.github.io/Gemfile.lock Gemfile.lock

mv ceituut.github.io/404.html 404.html

# Update repository name in config
rootFolderName=$(basename `git rev-parse --show-toplevel`)
REPONAME=rootFolderName yq -i '.repo = strenv(REPONAME)' _config.yml

# Remove all other parts
rm -d -f -r ceituut.github.io

rm -d -f -r _includes/events
rm _includes/authors.html
rm _includes/developers.html
rm _includes/members.html
rm _includes/post.html

rm _layouts/author.html
rm _layouts/contest.html
rm _layouts/event.html

# Rename README.md to index.md
mv README.md index.md

# Exclude other files from build process
rm -d -f -r resources
rm -d -f -r .git
rm _includes/svgs/ceituut/LICENSE
rm _includes/svgs/uut/LICENSE
rm assets/css/input.css
rm assets/images/LICENSE