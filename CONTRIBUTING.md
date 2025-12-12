## Contributing

Thank you for contributing. This repository uses Git LFS for large binary assets (images) and a rewritten history was pushed to `main`.

Please follow these guidelines to avoid problems and to get your local repo in sync:

- Install Git LFS:

  ```powershell
  # Windows (PowerShell)
  winget install --id Git.Git -e --source winget # if Git not installed
  choco install git-lfs -y || winget install Git.LFS
  git lfs install
  ```

- If you already had the repo cloned before the history rewrite, re-clone to avoid conflicts:

  ```bash
  # safest: fresh clone
  git clone https://github.com/SinanZo/HAS-Website.git

  # OR reset to remote (destructive for local changes):
  git fetch origin
  git reset --hard origin/main
  ```

- Workflow for adding images or other large assets:

  - Add new patterns to LFS tracking before committing binary files, for example:

    ```bash
    git lfs track "public/images/*"
    git lfs track "src/assets/images/*"
    git add .gitattributes
    git commit -m "chore: track images with git-lfs"
    ```

  - Then add and commit your image files as normal. Pushing will upload LFS objects to the remote.

- Avoid committing build artifacts and duplicate public folders. The repo `.gitignore` includes `/build/` and `/public/public/`.

- After a history rewrite (we recently migrated large files to LFS), collaborators must re-clone or run the reset command above. Any local branches based on old history should be rebased onto the new `main`.

- If you see Git LFS warnings on push, verify tracked objects with:

  ```bash
  git lfs ls-files
  ```

- For maintainers: if you need to migrate more files into LFS, use `git lfs migrate import --include="path/*" --include-ref=refs/heads/main --yes` and force-push after reviewing the changes.

Questions or issues? Open an issue or ping the repository owner.
