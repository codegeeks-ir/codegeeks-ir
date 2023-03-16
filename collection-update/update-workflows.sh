# Export env variables
set -a
. ./.env
set +a

# Get names of content repositories - that have <content> topic
IFS=$'\n' read -r -d '' -a contents < <( curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GITHUB_ACCESS_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/orgs/ceituut/repos \
    | jq -c -r '.[] | select(.topics[] | contains("content"))'.name )

# Get names of course repositories - that have <course> topic
IFS=$'\n' read -r -d '' -a courses < <( curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GITHUB_ACCESS_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/orgs/ceituut/repos \
    | jq -c -r '.[] | select(.topics[] | contains("course"))'.name )

contentsLength=${#contents[@]}
coursesLength=${#courses[@]}

for (( index=0; index<${contentsLength}; index++));
do
    echo "---------- Update ${contents[$index]}"
    rm -r -d -f "collections/${contents[$index]}/.github/workflows/"
    cp -r collection-update/workflows/* \
        "collections/${contents[$index]}/.github/workflows"
    cd "collections/${contents[$index]}/"
    git add .github/workflows/
    git commit -m 'Update workflow'
    git pull --rebase
    git push
    cd ../../../
done

for (( index=0; index<${coursesLength}; index++));
do
    echo "---------- Update ${courses[$index]}"
    rm -r -d -f "collections/courses/${courses[$index]}/.github/workflows/"
    cp -r collection-update/workflows/* \
        "collections/courses/${courses[$index]}/.github/workflows"
    cd "collections/courses/${courses[$index]}/"
    git add .github/workflows/
    git commit -m 'Update workflow'
    git pull --rebase
    git push
    cd ../../../
done