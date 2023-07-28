# Install requirements
sudo apt install tree

# Clone content repositories
git clone --depth 1 -b main "https://github.com/codegeeks-ir/docs.git"
git clone --depth 1 -b main "https://github.com/codegeeks-ir/courses.git"

courses=( $(ls -d courses/*/) )
coursesLength=${#courses[@]}

# Generate assets/tree.json files for each course that is used for file explorer
for (( index=0; index<${coursesLength}; index++));
do
    cd "${courses[$index]}" 
    mkdir assets
    touch assets/tree.json
    tree resources --dirsfirst -q -h -f -D -J >> assets/tree.json
    cd ../../
done

# Move images
mv -v docs/images/* public/images/