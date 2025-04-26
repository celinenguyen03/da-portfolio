# React + Vite Portfolio

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to Revert Git Initialization

If you've run `git init` and your files are showing as red in your Git client, this means Git has created a repository and is showing all files as untracked. To revert this:

### Option 1: Remove the .git directory (Recommended)

In Windows PowerShell or Command Prompt:
```
Remove-Item -Recurse -Force .git
```

In Git Bash or other Unix-like terminals:
```
rm -rf .git
```

This will completely remove the Git repository without affecting your project files.

### Option 2: If you want to keep using Git but reset the status

If you want to keep using Git but just want to clear the current status:
1. Add all files to Git tracking:
   ```
   git add .
   ```
2. Commit the changes:
   ```
   git commit -m "Initial commit"
   ```

This will make your files stop appearing as red.

## Original Vite Documentation

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
