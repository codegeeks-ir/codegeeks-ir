declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

# Update workflows of course repositories
for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]} workflows"
    rm -r -d -f "courses/${courses[$index]}/.github/workflows/"
    cp -a collection-update/workflows/. \
        "courses/${courses[$index]}/.github/workflows"
    cd "courses/${courses[$index]}/"
    git add .github/workflows/
    git commit -m 'Update workflow'
    git pull --rebase
    git push
    cd ../../
done

# Update workflows of docs repository
echo "---------- Update docs workflows"
rm -r -d -f "docs/.github/workflows/"
cp -a collection-update/workflows/. docs/.github/workflows
cd "docs/"
git add .github/workflows/
git commit -m 'Update workflow'
git pull --rebase
git push
cd ../