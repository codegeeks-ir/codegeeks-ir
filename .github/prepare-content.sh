# Download content repositories into collections directory
git clone --depth 1 -b main https://github.com/ceituut/requirements.git collections/requirements
git clone --depth 1 -b main https://github.com/ceituut/guide.git collections/guide
git clone --depth 1 -b main https://github.com/ceituut/faqs.git collections/_faqs
git clone --depth 1 -b main https://github.com/ceituut/projects.git collections/projects
git clone --depth 1 -b main https://github.com/ceituut/events.git collections/_events
git clone --depth 1 -b main https://github.com/ceituut/posts.git collections/_posts
git clone --depth 1 -b main https://github.com/ceituut/members.git collections/_members
git clone --depth 1 -b master https://github.com/ceituut/code-challenge.git collections/_code-challenge

# Get data from requirements
mv -v collections/requirements/_data/* _data/

# Exclude some files and directories from build process
rm -d -f -r collections/requirements/.git
rm -d -f -r collections/requirements/.github
rm -d -f -r collections/requirements/_data
rm -d -f -r collections/requirements/Computer-Curriculum-Guide-UUT.pdf

rm -d -f -r collections/guide/.git
rm -d -f -r collections/guide/.github

rm -d -f -r collections/_faqs/.git
rm -d -f -r collections/_faqs/.github

rm -d -f -r collections/projects/.git
rm -d -f -r collections/projects/.github

rm -d -f -r collections/_events/.git
rm -d -f -r collections/_events/.github
rm -d -f -r collections/_events/README.md

rm -d -f -r collections/_posts/.git
rm -d -f -r collections/_posts/.github
rm -d -f -r collections/_posts/README.md

rm -d -f -r collections/_members/.git
rm -d -f -r collections/_members/.github
rm -d -f -r collections/_members/README.md

rm -d -f -r collections/_code-challenge/.git
rm -d -f -r collections/_code-challenge/.github
rm -d -f -r collections/_code-challenge/API
rm -d -f -r collections/_code-challenge/solutions

rm -d -f -r .git/
rm -d -f -r .github/ISSUE_TEMPLATE/
rm .github/FUNDING.yml
rm _includes/svgs/ceituut/LICENSE
rm _includes/svgs/uut/LICENSE
rm assets/css/input.css
rm assets/images/LICENSE
rm .gitignore
rm CODE_OF_CONDUCT.md
rm CONTRIBUTING.md
rm LICENSE
rm package-lock.json
rm package.json
rm README.md
rm tailwind.config.js

# Move authors to collections directory
mv collections/_posts/authors collections/_authors

# Update version data
rm _data/version.yml
version=$(git ls-remote --tags --refs --sort="refname" https://github.com/ceituut/ceituut.github.io.git | tail -n1 | sed 's/.*\///')
version="${version:1}"
echo "version: $version" >> _data/version.yml