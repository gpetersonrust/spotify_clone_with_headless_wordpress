import styles from "./tailwind-extractor.js.module.scss";
const fs = require('fs');

function tailwindExtractorAndWrite(directory, file) {
  const path = directory + '/' + file;
  // if file is node_modules
  if (
    file === 'tailwind-parser-and-extractor.js' ||
    file == 'node_modules' ||
    !fs.existsSync(path)
  ) {
    return;
  }
  if (fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach((file) => {
      tailwindExtractorAndWrite(path, file);
    });
  } else if (path.endsWith('.js') || path.endsWith('.jsx')) {
    const classNames = fs
      .readFileSync(path)
      .toString()
      .match(/className={styles.([^\}]*)"/g);
    if (!classNames) {
      return;
    }
    let fileContents = fs.readFileSync(path).toString();
    let { styles, str: newFileContents } = styleCompiler(fileContents);
    const basename = file.replace(/\.js?x/gi, '');
    const stylesFile = directory + '/' + basename + '.module.scss';
    if (fs.existsSync(stylesFile)) {
      const stylesFileContents = fs.readFileSync(stylesFile).toString();
      fs.writeFileSync(stylesFile, stylesFileContents + '\n' + styles);
    } else {
      let import_statement = 'import styles from \"./' + basename + '.module.scss\";';
      // add import statement to top of file
      newFileContents = import_statement + '\n' + newFileContents;
      fs.writeFileSync(stylesFile, styles);
    }
    fs.writeFileSync(path, newFileContents);
  }
}

function styleCompiler(str) {
  const regex = /className={styles.([^\}]*)"/g;
  const classNames = {};
  let match;
  while ((match = regex.exec(str))) {
    const classList = match[1].trim().split(' ');
    const key = classList[classList.length - 1].replace(/-/g, '_');
    const value = classList[classList.length - 1].replace(/-/g, '_');
    const updatedStr = str.replaceAll( match[0], 'className={styles.' + value + '}' );
    str = updatedStr;
    classNames[key] = classList.join(' ');
  }
  const styles = Object.entries(classNames)
    .map( ([key, value]) => '.' + key + '{ @apply ' + value.split(' ').slice(0, -1).join(' ') + ';}' )
    .join('');
  return { styles, str };
}

function tailwind_parser_and_extractor() {
  const directory = process.cwd();
  fs.readdirSync(directory).forEach((file) => {
    tailwindExtractorAndWrite(directory, file);
  });
}

tailwind_parser_and_extractor();
tailwind_parser_and_extractor();