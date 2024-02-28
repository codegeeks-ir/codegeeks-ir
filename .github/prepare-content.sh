# Install requirements
sudo apt install tree

# Clone content repositories
git clone --depth 1 -b main "https://github.com/codegeeks-ir/docs.git"
git clone --depth 1 -b main "https://github.com/codegeeks-ir/courses.git"

# Move images
# mv -v docs/images/* public/images/