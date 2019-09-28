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
KREAD:'read_keyboard';
SWRITE:'write_screen';
READ:'read';
WRITE:'write';

IMP:'import';

IF:'if';
IS:'is';
NOT:'not';
EQL:'equal';
LESS:'less';
GRE:'greater';
AND:'and';
OR:'or';

SNET:'write_net';
RNET:'read_net';

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

r : START NEWLINE (IMP NEWLINE)? expressions* END NEWLINE*;

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
	| SNET LPAR (intargs | STRLIT) RPAR #Snet
	| RNET LPAR (intargs | STRLIT) RPAR #Rnet
	| KREAD LPAR (intargs | STRLIT) RPAR #Kread
	| SWRITE LPAR (intargs | STRLIT) RPAR #Swrite
	;
