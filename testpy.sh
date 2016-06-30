for dir in ./*/
do
    dir=${dir%*/}
    python3 -m unittest discover -s ${dir##*/}
done