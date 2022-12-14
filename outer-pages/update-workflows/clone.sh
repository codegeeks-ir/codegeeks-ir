# Clones all courses to courses/ directory

cd outer-pages

declare -a courses=(algorithm-design artificial-intelligence cloud-computing 
compiler computational-intelligence data-base data-mining 
data-structures laboratory multimedia networks 
object-oriented-development software-engineering)

coursesLength=${#courses[@]}

for (( index=0; index<${coursesLength}; index++));
do
    git clone "git@github.com:ceituut/${courses[$index]}.git" "courses/${courses[$index]}" 
done