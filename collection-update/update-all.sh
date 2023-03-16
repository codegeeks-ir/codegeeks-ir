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
    cd "collections/${contents[$index]}/"
    git add .
    git commit -m 'Update the entire collection'
    git pull --rebase
    git push
    cd ../../../
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