declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

# Update content of all course repositories
for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]} content"
    cd "courses/${courses[$index]}/"
    git add .
    git commit -m 'Update the entire collection'
    git pull --rebase
    git push
    cd ../../
done

# Update content of docs repository
echo "---------- Update docs content"
cd "docs"
git add .
git commit -m 'Update the content'
git pull --rebase
git push
cd ../