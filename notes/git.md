# Git Notes

URL: https://www.theodinproject.com/lessons/foundations-git-basics#origin-push

## Best Practices

*Atomic commits* and leveraging those atomic commits to make your commit messag*es more useful to future collaborators.

An atomic commit is a commit that includes *changes related to only one feature or task of your program.* There are two main reasons for doing this: 

  * first, if something you change turns out to cause some problems, it is easy to revert the specific change without losing other changes
  * second, it enables you to write better commit messages.

## Misc.
* origin = remote connection's default name
* main = branch

## Glossary
Version Control: any system that allows you to understand the history of the file and how it has progressed

Git: a version control program which allows you to annotate the changes you make to create an easily traversable system history

Commit: an annotated “snapshot” of the differences made to the system at a given point in time

Local: refers to the computer you’re working on this very minute

Remote: refers to an online location

Repository (repo): a special folder configured with Git superpowers containing all the files pertaining to your project/system

Github: takes your local commit history and hosts it remotely so that you can access it from any computer

Pushing: the action of taking local Git commits (and whatever work these encompass) and putting them online on Github

Pulling: the action of taking online Github commits and bringing them into your local machine

Master (branch): the “trunk” of the commit history “tree”; contains all approved content/code

Feature branch: an isolated location, based off of master, where you can write a new piece of work safely before reincorporating said changes back to master

Pull Request: a Github tool that allows users to easily see the changes (the difference or “diff”) that a feature branch is proposing as well as discuss any tweaks that said branch might require before it is merged into master

Merging: the action of taking the commits from a feature branch and adding them to the top of master’s history

Checking out: the action of moving from one branch to another


## Cheatsheet

``` sh
# SSH Key Generation
ssh-keygen -t ed25519 -C bmilcs@yahoo.com

# Git Config Setup
git config --global user.name "Bryan Miller"
git config --global user.email "bmilcs@yahoo.com"
git config --global init.defaultBranch main
git config --global color.ui auto

# Get Remote Repo URL
git remote -v

# Confirm settings
git config --get user.name
git config --get user.email

# Change Default Editor
git config --global core.editor "code --wait"

#Commands related to a remote repository:
git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
git push or git push origin main (Both accomplish the same goal in this context)

# Commands related to the workflow:
git add .
git commit -m "A message describing what you have done to make this snapshot different"

# Commands related to checking status or log history
git status
git log
```