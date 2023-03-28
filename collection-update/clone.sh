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

# Clones content repositories
for (( index=0; index<${contentsLength}; index++));
do
    git clone "https://github.com/ceituut/${contents[$index]}.git" \
        "collections/${contents[$index]}" 
done

# Clones course repositories
for (( index=0; index<${coursesLength}; index++));
do
    git clone "https://github.com/ceituut/${courses[$index]}.git" \
        "collections/courses/${courses[$index]}" 
done