# Install requirements
sudo apt-get install jq
sudo apt install tree

declare -a contents=(challenges events projects blog requirements 
faqs members companions)

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

contentsLength=${#contents[@]}
coursesLength=${#courses[@]}

# Clone content repositories
for (( index=0; index<${contentsLength}; index++));
do
    git clone --depth 1 -b main "https://github.com/codegeeks-ir/${contents[$index]}.git" \
        "collections/${contents[$index]}"
done

# Clone course repositories 
# Then generate a json tree file structure that is used for file explorer
for (( index=0; index<${coursesLength}; index++));
do
    git clone --depth 1 -b main "https://github.com/codegeeks-ir/${courses[$index]}.git" \
        "collections/courses/${courses[$index]}"
    cd "collections/courses/${courses[$index]}" 
    mkdir assets
    touch assets/tree.json
    tree resources --dirsfirst -q -h -f -D -J >> assets/tree.json
    cd ../../../
done

# Move events images
mv -v collections/events/images/* public/images/