# Vue 3 Formatter Initializer

<p align="center">
  <img src="./images/vue3_formatter_logo_resized.png" alt="Vue 3 Formatter Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

This repository provides a formatter setup script and configuration files for Vue 3 projects. It includes settings for ESLint, Prettier, and Stylelint.

## Installation as npm Package

Instead of cloning and setting up manually, you can now install this tool directly from npm:

```bash
npm install -g vue3-formatter-initializer
```

This will install vue3-formatter-initializer globally, so it can be run from anywhere in your system.

## Usage as npm Package

After installing globally, navigate to your Vue 3 project directory and simply run:

```bash
vue3-formatter-initializer /path/to/vue3-project # default '.'
```

This will automatically set up ESLint, Prettier, and Stylelint configurations for your Vue 3 project.

## Contents

- `vue3-formatter-initializer`: Script to initialize formatter in Vue 3 project.
- `.eslintrc.json`: Configuration file for ESLint.
- `.prettierrc.json`: Configuration file for Prettier.
- `.stylelintrc.json`: Configuration file for Stylelint.
- `shims.d.ts`: File to resolve type errors in main.ts.

## Manual Usage

1. Clone this repository.

   ```bash
   cd ~
   ```

   ```bash
   git clone git@github.com:aose-yuu/vue3-formatter-initializer.git
   ```

2. Add the script's path to your .zshrc as an environment variable:

   ```bash
   export PATH=$PATH:~/vue3-formatter-initializer
   ```

   Remember to reload your .zshrc or restart your terminal session for the changes to take effect.

3. Execute the script by specifying the directory path of your project.

   ```bash
   init-vue3-formatter /path/to/vue3-project
   ```

**Happy coding and enjoy the streamlined formatter setup!**
