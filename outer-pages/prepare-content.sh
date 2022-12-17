# Install requirements
sudo apt install tree

mkdir _data
mkdir _includes
mkdir _layouts
mkdir assets

# Create data file for resources explorer
touch assets/tree.json
tree resources --dirsfirst -q -h -f -D -J >> assets/tree.json

# Move essential parts
mv -v ceituut.github.io/_data/* _data
mv -v ceituut.github.io/_includes/* _includes
mv -v ceituut.github.io/_layouts/* _layouts
mv -v ceituut.github.io/assets/* assets

mv .github/course-page-config.yml _config.yml
mv ceituut.github.io/Gemfile Gemfile
mv ceituut.github.io/Gemfile.lock Gemfile.lock

mv ceituut.github.io/404.html 404.html

# Rename README.md to index.md
mv README.md index.md

# Include file explorer to bottem of index.md
sed -i -e '$a\' index.md
echo ""
echo ""
echo "{% include file-explorer.html %}" >> index.md

# Add repository name to _config.yml
sed -i -e '$a\' _config.yml
echo "repo: $(basename `git rev-parse --show-toplevel`)" >> _config.yml

# Exclude other files
chmod +x ./.github/exclude.sh
./.github/exclude.sh