declare -a contents=(challenges events projects blog requirements 
faqs members companions)

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

contentsLength=${#contents[@]}
coursesLength=${#courses[@]}

# Clones content repositories
for (( index=0; index<${contentsLength}; index++));
do
    git clone "https://github.com/codegeeks/${contents[$index]}.git" \
        "collections/${contents[$index]}" 
done

# Clones course repositories
for (( index=0; index<${coursesLength}; index++));
do
    git clone "https://github.com/codegeeks/${courses[$index]}.git" \
        "collections/courses/${courses[$index]}" 
done