declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

# Clones docs repository
git clone --depth 1 -b main "https://github.com/codegeeks-ir/docs.git"

# Clones all course repositories
for (( index=0; index<${coursesLength}; index++));
do
    git clone "https://github.com/codegeeks-ir/${courses[$index]}.git" \
        "courses/${courses[$index]}" 
done