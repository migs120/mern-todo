# function shortwd() {
#     num_dirs=3
#     pwd_symbol="..."
#     newPWD="${PWD/#$HOME/~}"
#     if [ $(echo -n $newPWD | awk -F '/' '{print NF}') -gt $num_dirs ]; then
#         newPWD=$(echo -n $newPWD | awk -F '/' '{print $1 "/.../" $(NF-1) "/" $(NF)}')
#     fi 
#     echo -n $newPWD
# }
# git_branch() {
#     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
# }
# PS1='\n\e[38;5;211m$(shortwd)\e[38;5;48m $(git_branch)\e[0m$'
# export PS1

# echo "Enter any number"
# read n

# if [[ ( $n -eq 15 || $n  -eq 45 ) ]]
# then
# echo "You won the game"
# else
# echo "You lost the game"
# fi
brnh=git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/'
git add . && git commit -m "{$message}" && git push origin $brnh
#
# num_dirs=3
# pwd_symbol="..."
# newPWD="${PWD/#$HOME/~}"
# echo Hello World!
#echo "${PWD/#$HOME/~}"