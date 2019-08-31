grammar Rome;

options {
	language = JavaScript;
}

START:'start';
END:'end';

SET:'set';
NUM:'numbers';
LET:'letters';

FREE:'free';
MEM:'memory';
READ:'read';
WRITE:'write';

IF:'if';
IS:'is';
NOT:'not';
EQL:'equal';
LESS:'less';
GRE:'greater';
//AND:'and';
//OR:'or';

MOVE:'move';
RIGHT:'right';
LEFT:'left';

LOOP:'loop';
ELOOP:'end_loop';
LPAR:'(';
RPAR:')';
LSQ:'[';
RSQ:']';

NEWLINE:'\n';

NUMBER
   : ('0' .. '9') +
   ;

intargs
	: NUMBER
	| MEM LPAR intargs RPAR
	;

STRLIT : '"' ~ ["\r\n]* '"';

r : START NEWLINE expressions* END NEWLINE?;

expressions : expression NEWLINE;

expression
	: SET LPAR (NUM | LET) RPAR # Set
	| FREE # Free
	| READ # Read
	| MOVE LPAR (RIGHT | LEFT) RPAR # Move
	| IF LPAR (IS|NOT) (LESS|GRE|EQL) (intargs|STRLIT) RPAR LSQ NEWLINE expressions* RSQ # If //((AND|OR) (IS|NOT) (LESS|GRE|EQL) (intargs|STRLIT))*
	| LOOP LPAR intargs RPAR NEWLINE expressions+ ELOOP # Loop
	| WRITE LPAR (intargs|STRLIT) RPAR # Write
	;

IDENTIFIER : [a-zA-Z]+;
