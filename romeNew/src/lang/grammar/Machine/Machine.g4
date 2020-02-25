grammar Machine;

options {
	language = JavaScript;
}

// Tokens

MOVER: '>';
MOVEL: '<';
PRINT: '.';
READ: ',';
INC: '+';
DEC: '-';
LPAR: '[';
RPAR: ']';
NEWLINE: '\n';

r: expressions*;

expressions: expression NEWLINE*;

expression:
	MOVER		#MoveR
	| MOVEL 	#MoveL
	| PRINT 	#Print
	| READ 		#Read
	| INC 		#Inc
	| DEC 		#Dec
	| LPAR expressions* RPAR	#Loop
	;
