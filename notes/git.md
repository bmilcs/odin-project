``` sh
# Best Practices
# Atomic commits and leveraging those atomic commits to make your commit messages more useful to future collaborators.

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