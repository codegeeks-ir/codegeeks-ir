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
    rm -r -d -f "collections/${contents[$index]}/.github/workflows/"
    cp -a collection-update/workflows/. \
        "collections/${contents[$index]}/.github/workflows"
    cd "collections/${contents[$index]}/"
    git add .github/workflows/
    git commit -m 'Update workflow'
    git pull --rebase
    git push
    cd ../../
done

for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]}"
    rm -r -d -f "collections/courses/${courses[$index]}/.github/workflows/"
    cp -a collection-update/workflows/. \
        "collections/courses/${courses[$index]}/.github/workflows"
    cd "collections/courses/${courses[$index]}/"
    git add .github/workflows/
    git commit -m 'Update workflow'
    git pull --rebase
    git push
    cd ../../../
done