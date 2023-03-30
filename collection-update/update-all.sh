declare -a contents=(challenges events projects blog requirements 
faqs members companions)

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

contentsLength=${#contents[@]}
coursesLength=${#courses[@]}

for (( index=0; index<${contentsLength}; index++));
do
    echo "---------- Update ${contents[$index]}"
    cd "collections/${contents[$index]}/"
    git add .
    git commit -m 'Update the entire collection'
    git pull --rebase
    git push
    cd ../../
done

for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]}"
    cd "collections/courses/${courses[$index]}/"
    git add .
    git commit -m 'Update the entire collection'
    git pull --rebase
    git push
    cd ../../../
done