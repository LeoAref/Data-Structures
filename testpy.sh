for dir in ./*/
do
    dir=${dir%*/}
    echo ${dir%*/}
    python3 -m unittest discover -s ${dir##*/}
done