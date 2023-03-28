# Install requirements
sudo apt-get install jq
sudo apt install tree

# Get names of content repositories - that have <content> topic
IFS=$'\n' read -r -d '' -a contents < <( curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $MY_SECRET" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/orgs/ceituut/repos \
    | jq -c -r '.[] | select(.topics[] | contains("content"))'.name )

# Get names of course repositories - that have <course> topic
IFS=$'\n' read -r -d '' -a courses < <( curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $MY_SECRET" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/orgs/ceituut/repos \
    | jq -c -r '.[] | select(.topics[] | contains("course"))'.name )

contentsLength=${#contents[@]}
coursesLength=${#courses[@]}

# Clone content repositories
for (( index=0; index<${contentsLength}; index++));
do
    git clone --depth 1 -b main "https://github.com/ceituut/${contents[$index]}.git" \
        "collections/${contents[$index]}"
done

# Clone course repositories 
# Then generate a json tree file structure that is used for file explorer
for (( index=0; index<${coursesLength}; index++));
do
    git clone --depth 1 -b main "https://github.com/ceituut/${courses[$index]}.git" \
        "collections/courses/${courses[$index]}"
    cd "collections/courses/${courses[$index]}" 
    mkdir assets
    touch assets/tree.json
    tree resources --dirsfirst -q -h -f -D -J >> assets/tree.json
    cd ../../../
done