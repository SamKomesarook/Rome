## Grammar changes:

Make updates to the .g4 files, then navigate to the folder containing the .g4 file and run the following command:

`antlr4 -Dlanguage=JavaScript -visitor MyGrammar.g4`

Include all changed files with the next commit.

## setPassword
PASS=~password~ npm run setPassword

example:

PASS=newpassword!123 npm run setPassword