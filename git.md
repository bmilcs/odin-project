# Git Notes

## Cheatsheet

```sh
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

## Commit Messages

Commits are a **snapshot** of your code at the moment the commit is made.

### Why commit messages are important:

- **Applying for jobs**: Employers look through projects on Github and through your commit history. Good commits as a novice help you stand out.
- Allow you & other developers to **quickly see what changes were made and why**. This is useful if a bug is found that needs to be fixed.
- Helpful if you **come back to a project after a long break**. You won't likely remember your original thought process.
- Maintainability: Important to a project's long term success

### When to Commit

- Every time you have meaningful changes in the code.
- Creates a timeline of progress & that your finished code didn't appear out of nowhere.
- If you get a piece of code to:
  - function like you want to
  - fix a typo
  - or fix a bug

When you finally get something just right, it is the perfect time to commit. 30 seconds to a few days later, it breaks. Everything could appear the same and you don't remember editing that line, but it doesn't work anymore. You'll want to be able to revert to the last commit you made when you got it working or see what it looked like at that time.

## Tips

- Use VSCode spell check extension
- Use an **active voice**: "Fix card generator"
- Avoid vague messages: "saved", "updated"
- Commit _early_ and _often_
- Be concise & consistent
  - Important when using `git log`
  - Adds structure

## How to Write an Individual Commit Message

- A Team has to agree on commit message convention that defines 3 things:
  - **Style.** Markup syntax, wrap margins, grammar, capitalization, punctuation.
  - **Content.** What kind of info should it contain
  - **Metadata.** How issue tracking ID's, pull request numbers, etc. be referenced

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
7. Use body to explain _what_ and _why_ -- _not how_

## Commit Verbs

- **Add** some feature
- **Remove** class whatever
- **Update** dependency x
- **Refactor** function y
- **Fix** crazy bug

## Best Practices

`Atomic commits` and leveraging those atomic commits to make your commit messages more useful to **future collaborators**.

An atomic commit is a commit that includes _changes related to only one feature or task of your program._ There are two main reasons for doing this:

- first, if something you change turns out to cause some problems, it is easy to revert the specific change without losing other changes
- second, it enables you to write better commit messages.

## Origin/Main

- **Origin**: remote connection's default name
- **Main**: branch

## Glossary

- **Version Control** any system that allows you to understand the history of the file and how it has progressed
- **Git**: a version control program which allows you to annotate the changes you make to create an easily traversable system history
- **Commit**: an annotated “snapshot” of the differences made to the system at a given point in time
- **Local**: refers to the computer you’re working on this very minute
- **Remote**: refers to an online location
- **Repository (repo)**: a special folder configured with Git superpowers containing all the files pertaining to your project/system
- **Github**: takes your local commit history and hosts it remotely so that you can access it from any computer
- **Pushing**: the action of taking local Git commits (and whatever work these encompass) and putting them online on Github
- **Pulling**: the action of taking online Github commits and bringing them into your local machine
- **Master (branch)**: the “trunk” of the commit history “tree”; contains all approved content/code
- **Feature branch**: an isolated location, based off of master, where you can write a new piece of work safely before reincorporating said changes back to master
- **Pull Request**: a Github tool that allows users to easily see the changes (the difference or “diff”) that a feature branch is proposing as well as discuss any tweaks that said branch might require before it is merged into master
- **Merging**: the action of taking the commits from a feature branch and adding them to the top of master’s history
- **Checking out**: the action of moving from one branch to another

## Branching

Branching allows you to make changes without having to _worry about breaking_ what you have now.

Branches allow you to hold multiple _alternate reality_ versions of your files at the same time.

`main` was set as the default branch using `git config --global init.defaultBranch main`

Branches on a tree stem off the _trunk_ (`main` branch), or off _other branches_.

Changes made to branches only exist on that branch, leaving other branches alone.

- `main` becomes the place for finished features that are working properly.
- _feature branches_ are used for adding new features to your project in a dedicated branch

### Using Branches

Creating branches:

```sh
git branch <branch_name>
```

Swapping to a branch:

```sh
git checkout <branch_name>
```

Create AND Swap to a new branch:

```sh
git checkout -b <branch_name>
```

List all branches

```sh
git branch
```

Adding a feature branch to your `main` branch using `merge`.

```sh
# While inside your main branch:
git merge <feature_branch>
```

Deleting a branch once it's no longer needed:

```sh
git branch -d <branch_name> # branch has already been merged w/ main
git branch -D <branch_name> # branch HAS NOT been merged w/ main
```

**Best practice**: Delete branches once you're done with them to prevent them from piling up.

**Sharing Code** is another use case for branches.

- Sometimes you may not want to commit to your main or feature branch at all.
- IE: Bugs in a new feature that you can't figure out

Example:

1. Create a new branch called `temp` using `git checkout -b temp`
2. Commit current state of your code to `temp`
3. Push `temp` to your GitHub repo: `git push origin temp`
4. Now others can view your `temp` branch on GitHub using the dropdown

## Changing History

### Changing Last Commit

To add something to the last commit, use `git commit --amend`.

Only `amend` commits that have **NOT BEEN PUSHED** anywhere!

- `amend` does NOT simply edit the last commit
- it **replaces that commit with an entirely new one**
- could potentially destroy commit other devs are working on

When rewriting history always make sure that you do so in a safe manner and that **coworkers are aware of what you're doing**.

```sh
git add file
git commit --amend
```

### Changing Multiple Commits

In order to change commits further back in history, we use the `rebase` command.

`rebase -i` allows us to:

- interactively stop after each commit we're trying to modify
- make whatever changes we wish

To edit the last two commits:

```sh
git rebase -i HEAD~2
```

An interactive window pops up allowing us to edit commits. In order to edit a commit, change `pick` to `edit`, write & exit the file.

To change the commit message, run `git commit --amend`, make the changes and then `rebase --continue`.

In a shared repo, make sure you rebase for a **very good reason** that your **coworkers are aware of.**

### Squashing Commits

Using `squash` helps keep our Git history tidy.

- Squash process may be the standard on some dev teams
- Makes it easier to understand the history of your project

When a feature is merged, we end up with some visually complex logs of all changes a feature branch had on a main branch.

- Important during development
- Aren't necessary while looking through entire history of your main branch

To squash the 2nd commit INTO the 1st: `Create first file`:

```sh
# rebase back to root commit
git rebase -i --root

# pick first commit, squash 2nd
pick e30ff48 Create first file
squash 92aa6f3 Create second file
pick 05e5413 Create third file and create fourth file

# delete two commit messages & enter a new one:
Create first and second file

# write & exit file
```

### Splitting Up A Commit

To split a previous commit up into individual commits:

```sh
# open up interactive rebase
git rebase -i

# change pick to edit for the commit
edit ... commit to be changed

# reset HEAD^ (resets commit to one right before HEAD)
git reset HEAD^

# add changes individually
git add test3.md && git commit -m 'Create third file'
git add test4.md && git commit -m 'Create fourth file'
```

When we run `git reset HEAD^`, we:

- Reset current branch, pointing HEAD at the commit _right before it_
- Also, updated the index (staging area) with the contents of wherever HEAD is now pointed

If you want to move to **where HEAD points to** but _don't_ want to touch the staging area, run `git reset --soft`.

- `soft` only moves HEAD to point elsewhere
- Doesn't touch the index / staging area

`git reset --hard` does the following:

- all steps of `git reset`
  - moves HEAD
  - updates index
- **Also updates the working directory**

`hard` resets can be dangerous as it can potentially destroy data.

Hard resets overwrites the files in the working directory:

- makes it look exactly like the staging area where HEAD points to
- like `git commit --amend`, `hard` resets are a destructive command that overwrites history

**Make sure you know exactly why you're using it & your coworkers are also aware of how and why you're using it.**
