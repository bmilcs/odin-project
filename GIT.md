# Git Notes

## Commit Messages

Commits are a **snapshot** of your code at the moment the commit is made. 

### Why commit messages are important:

* **Applying for jobs**: Employers look through projects on Github and through your commit history. Good commits as a novice help you stand out.
* Allow you & other developers to **quickly see what changes were made and why**. This is useful if a bug is found that needs to be fixed.
* Helpful if you **come back to a project after a long break**. You won't likely remember your original thought process.
* Maintainability: Important to a project's long term success

### When to Commit

* Every time you have meaningful changes in the code.
* Creates a timeline of progress & that your finished code didn't appear out of nowhere.
* If you get a piece of code to:
  *  function like you want to
  *  fix a typo
  *  or fix a bug
  
When you finally get something just right, it is the perfect time to commit. 30 seconds to a few days later, it breaks. Everything could appear the same and you don't remember editing that line, but it doesn't work anymore. You'll want to be able to revert to the last commit you made when you got it working or see what it looked like at that time.

## Tips

* Use VSCode spell check extension
* Use an **active voice**: "Fix card generator"
* Avoid vague messages: "saved", "updated"
* Commit *early* and *often*
* Be concise & consistent
  * Important when using `git log`
  * Adds structure

## How to Write an Individual Commit Message

* A Team has to agree on commit message convention that defines 3 things:
  * **Style.** Markup syntax, wrap margins, grammar, capitalization, punctuation.
  * **Content.** What kind of info should it contain
  * **Metadata.** How issue tracking ID's, pull request numbers, etc. be referenced

## 7 Rules of Great Commits
  
  1. Separate subject from body with **blank line**.
     1. `Fix typo in introduction to user guide`

  2. Limit subject line to 50 characters.
  3. Capitalize the subject line.
     1. `Fix` vs `fix`
  4. Do not end subject line with period.
  5. Use imperative mood in subject line.
     1. `Clean your room`, `Close the door`, `Take out the trash`
     2. If applied, this commit will `<insert commit message here>`
  6. Wrap body at 72 characters.
  7. Use body to explain *what* and *why* -- *not how*
## Commit Verbs

* **Add** some feature
* **Remove** class whatever
* **Update** dependency x
* **Refactor** function y
* **Fix** crazy bug
  
## Best Practices

`Atomic commits` and leveraging those atomic commits to make your commit messages more useful to **future collaborators**.

An atomic commit is a commit that includes *changes related to only one feature or task of your program.* There are two main reasons for doing this: 

* first, if something you change turns out to cause some problems, it is easy to revert the specific change without losing other changes
* second, it enables you to write better commit messages.

## Origin/Main
* **Origin**: remote connection's default name
* **Main**: branch

## Glossary
* **Version Control** any system that allows you to understand the history of the file and how it has progressed
* **Git**: a version control program which allows you to annotate the changes you make to create an easily traversable system history
* **Commit**: an annotated “snapshot” of the differences made to the system at a given point in time
* **Local**: refers to the computer you’re working on this very minute
* **Remote**: refers to an online location
* **Repository (repo)**: a special folder configured with Git superpowers containing all the files pertaining to your project/system
* **Github**: takes your local commit history and hosts it remotely so that you can access it from any computer
* **Pushing**: the action of taking local Git commits (and whatever work these encompass) and putting them online on Github
* **Pulling**: the action of taking online Github commits and bringing them into your local machine
* **Master (branch)**: the “trunk” of the commit history “tree”; contains all approved content/code
* **Feature branch**: an isolated location, based off of master, where you can write a new piece of work safely before reincorporating said changes back to master
* **Pull Request**: a Github tool that allows users to easily see the changes (the difference or “diff”) that a feature branch is proposing as well as discuss any tweaks that said branch might require before it is merged into master
* **Merging**: the action of taking the commits from a feature branch and adding them to the top of master’s history
* **Checking out**: the action of moving from one branch to another


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

# Remove file from staging area
git reset -- path/to/file

# Clear all changes & reset to last commit (destructive)
git reset --hard

# Commands related to checking status or log history
git status
git log
```