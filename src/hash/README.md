# Rome

Rome is a language and IDE designed to teach young children about the fundamentals of computer science. It was inspired by the Montessori method of education, and built to operate seamlessly in such an environment.

## Dev

### Installation
Run `npm install` from the root directory.

### Run
Run `npm start` from the root directory.

### Directory
`/src/components` - Individual IDE components.
`/src/hash` - Hash value (password) and commands.
`/src/lang` - Antlr files describing language grammars, visitors, and other **ANTLR4** generated files.
`/src/state` - React contexts to handle state across app.

### Language
The language uses **ANTLR4** for language comprehension. To make changes to the grammar, edit the `Rome.g4` file inside the `lang` folder.

Then, run `antlr4 -Dlanguage=JavaScript Rome.g4` to recompile, and add all generated files to your commit.

### Generate password script
This script is use to reset the hash value in the json file

1. Make sure you have install bcrypt module:
npm install bcryptjs --save

2. Make sure you are in the ./src/hash folder

3. Use the script with the following command:
node setPassword [new password]
