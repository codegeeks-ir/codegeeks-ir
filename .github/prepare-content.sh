# Install requirements
sudo apt install tree

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

# Clone docs repository
git clone --depth 1 -b main "https://github.com/codegeeks-ir/docs.git"

# Clone course repositories 
for (( index=0; index<${coursesLength}; index++));
do
    git clone --depth 1 -b main "https://github.com/codegeeks-ir/${courses[$index]}.git" \
        "courses/${courses[$index]}"
    cd "courses/${courses[$index]}" 
    mkdir assets
    touch assets/tree.json
    # Generate a json tree file structure that is used for file explorer
    tree resources --dirsfirst -q -h -f -D -J >> assets/tree.json
    cd ../../
done

# Move images
mv -v docs/images/* public/images/