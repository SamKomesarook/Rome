grammar Rome;

options {
	language = JavaScript;
}

// Tokens

START: 'start';
END: 'end';

SET: 'set';
NUM: 'numbers';
LET: 'letters';

FREE: 'free';
MEM: 'memory';
KREAD: 'k_read';
SWRITE: 's_write';
WRITE: 'write';
NAME: 'name';

IMP: 'import';
NET: 'network';
IO: 'IO';

IF: 'if';
IS: 'is';
NOT: 'not';
EQL: 'equal';
LESS: 'less';
GRE: 'greater';
AND: 'and';
OR: 'or';

NWRITE: 'n_write';
NREAD: 'n_read';

MOVE: 'move';
RIGHT: 'next';
LEFT: 'last';

LOOP: 'loop';

NEWLINE: '\n';

WS: ' ';

IDENTIFIER: [a-zA-Z]+;

NUMBER: ('0' .. '9')+;

STRLIT: '"' ~ ["\r\n]* '"';

// Rules

strargs : STRLIT #Str ;

imp: IMP WS NET # Net 
	| IMP WS IO # Io
	;

mem: MEM '(' intargs ')';

intargs: NUMBER # Num 
	| mem #memory
	;

r: START NEWLINE (imp NEWLINE)* expressions* END NEWLINE*;

expressions: expression NEWLINE;

conditional: (IS | NOT) WS (LESS | GRE | EQL) WS (intargs| STRLIT) # Cond;

// NOTE :: For multiple conds, add this: ((AND | OR) WS conditional)* 

expression:
	SET '(' (NUM | LET) ')'								# Set
	| FREE													# Free
	| MOVE '(' (RIGHT | LEFT) ')'							# Move
	| IF '(' conditional ')' '{' NEWLINE expressions* '}'	# If
	| LOOP '(' intargs ')' '{' NEWLINE expressions* '}'	# Loop
	| WRITE '(' (intargs | STRLIT) ')'					# Write
	| NWRITE '(' (intargs | STRLIT) ')'					# Snet
	| NREAD													# Rnet
	| KREAD													# Kread
	| SWRITE '(' (intargs | STRLIT) ')'					# Swrite
	| NAME '(' (STRLIT |  mem) ')' 						# Name
	;

