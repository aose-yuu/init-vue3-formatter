# Vue 3 Formatter Initializer

<p align="center">
  <img src="./images/vue3_formatter_logo_resized.png" alt="Vue 3 Formatter Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

This repository provides a formatter setup script and configuration files for Vue 3 projects. It includes settings for ESLint, Prettier, and Stylelint.

## Contents

- `vue3-formatter-initializer`: Script to initialize formatter in Vue 3 project.
- `.eslintrc.json`: Configuration file for ESLint.
- `.prettierrc.json`: Configuration file for Prettier.
- `.stylelintrc.json`: Configuration file for Stylelint.

## Usage

1. Clone this repository.

   ```bash
   cd ~
   git clone <repository URL>
   ```

2. Execute the script by specifying the directory path of your project.

   ```bash
   init-vue3-formatter /path/to/vue3-project
   ```

3. Add the script's path to your .zshrc as an environment variable:

   ```bash
   export PATH=$PATH:~/vue3-formatter-initializer
   ```

Remember to reload your .zshrc or restart your terminal session for the changes to take effect.

Happy coding and enjoy the streamlined formatter setup!
