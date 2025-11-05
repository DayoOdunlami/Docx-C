# Push to Git - Instructions

## If you have a GitHub/GitLab repository URL:

Run these commands (replace `<your-repo-url>` with your actual repository URL):

```bash
cd "c:\Users\DayoOdunlami\OneDrive - Connected Places Catapult\Documents\StrategyAI\Document X\doc-x"

# Add remote repository
git remote add origin <your-repo-url>

# Push to GitHub/GitLab
git push -u origin master
```

## Example:

If your repository URL is `https://github.com/yourusername/doc-x.git`:

```bash
git remote add origin https://github.com/yourusername/doc-x.git
git push -u origin master
```

## If you need to create a repository:

1. Go to https://github.com/new
2. Repository name: `doc-x`
3. Description: "Doc X Platform - Intelligent Knowledge Experiences"
4. Make it **Private** or **Public** (your choice)
5. **Don't** check "Initialize with README" (we already have one)
6. Click "Create repository"
7. Copy the repository URL shown
8. Use it in the commands above

## Branch Note:

Your current branch is `master`. If your GitHub repo uses `main` instead:

```bash
git branch -M main
git push -u origin main
```

