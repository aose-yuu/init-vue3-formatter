#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PACKAGES_TO_INSTALL, CONFIG_FILES } = require('./constants');

const scriptDir = path.resolve(__dirname);

function echoBoldWhite(message) {
  console.log(`\n\x1b[1m\x1b[37m${message}\x1b[0m\n`);
}

function installPackages() {
  echoBoldWhite('Step 1: Installing npm packages...');
  const installCommand = `npm i -D ${PACKAGES_TO_INSTALL.join(' ')}`;
  execSync(installCommand, { stdio: 'inherit' });
}

function copyConfigFiles(targetDir) {
  echoBoldWhite('Step 2: Copying configuration files...');

  const filesExist = (() => {
    for (const file of CONFIG_FILES) {
      const targetFilePath = (() => {
        if (file === 'shims.d.ts') {
          return path.join(scriptDir, targetDir, 'src', file);
        }
        return path.join(scriptDir, targetDir, file);
      })();

      if (!fs.existsSync(targetFilePath)) {
        fs.copyFileSync(path.join(scriptDir, file), targetFilePath);
      } else {
        console.log(`${file} already exists. Skipping creation.`);
        return true;
      }
    }
    return false;
  })();

  return filesExist;
}

function initFormatter(targetDir = '.') {
  if (
    !fs.existsSync(targetDir) ||
    !fs.existsSync(path.join(targetDir, 'package.json'))
  ) {
    console.error(
      `Target directory ${targetDir} or package.json not found. Exiting.`,
    );
    return;
  }

  process.chdir(targetDir);
  try {
    installPackages();
    const filesExist = copyConfigFiles(targetDir);
    console.log(
      filesExist
        ? 'Some configuration files already exist.'
        : 'Configuration files created successfully.',
    );
  } catch (error) {
    console.error(`Error during formatter initialization: ${error.message}`);
    process.exit(1);
  }

  console.log('Formatter initialization complete.');
}

const targetDir = process.argv[2];
initFormatter(targetDir);
