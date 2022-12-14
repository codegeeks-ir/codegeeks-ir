# Update github-pages.yml for all courses

cd outer-pages

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]}"
    cp -r workflows/* "courses/${courses[$index]}/.github/workflows"
    cd "courses/${courses[$index]}/"
    git add .github/workflows/
    git commit -m 'Update github-pages.yml'
    git pull --rebase
    git push
    cd ../../
done