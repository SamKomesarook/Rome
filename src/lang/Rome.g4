grammar Rome;

options {
	language = JavaScript;
}

// Tokens

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
AND:'and';
OR:'or';

MOVE:'move';
RIGHT:'right';
LEFT:'left';

LPAR:'(';
RPAR:')';
LSQ:'{';
RSQ:'}';

LOOP:'loop';

NEWLINE:'\n';

SPACE:' ';

IDENTIFIER : [a-zA-Z]+;

NUMBER
   : ('0' .. '9') +
   ;

// Rules

intargs
	: NUMBER # Num
	| MEM LPAR intargs RPAR # Mem
	;

STRLIT : '"' ~ ["\r\n]* '"';

r : START NEWLINE expressions* END NEWLINE*;

expressions : expression NEWLINE;

conditional : (IS | NOT) SPACE (LESS | GRE | EQL) SPACE (intargs | STRLIT) # Cond;

expression
	: SET LPAR (NUM | LET) RPAR # Set
	| FREE # Free
	| READ # Read
	| MOVE LPAR (RIGHT | LEFT) RPAR # Move
	| IF LPAR conditional ((AND | OR) SPACE conditional)* RPAR LSQ NEWLINE expressions* RSQ # If
	| LOOP LPAR intargs RPAR LSQ NEWLINE  expressions* RSQ # Loop
	| WRITE LPAR (intargs | STRLIT) RPAR # Write
	;
