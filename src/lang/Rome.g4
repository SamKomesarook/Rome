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
KREAD:'k_read';
SWRITE:'s_write';
WRITE:'write';

IMP:'import';
NET:'network';
IO:'IO';

IF:'if';
IS:'is';
NOT:'not';
EQL:'equal';
LESS:'less';
GRE:'greater';
AND:'and';
OR:'or';

SNET:'n_write';
RNET:'n_read';

MOVE:'move';
RIGHT:'next';
LEFT:'last';

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


STRLIT : '"' ~ ["\r\n]* '"';

// Rules

imp
	: IMP SPACE NET # Net
	| IMP SPACE IO # Io
	;

intargs
	: NUMBER # Num
	| MEM LPAR intargs RPAR # Mem
	;


r : START NEWLINE (imp NEWLINE)* expressions* END NEWLINE*;

expressions : expression NEWLINE;

conditional : (IS | NOT) SPACE (LESS | GRE | EQL) SPACE (intargs | STRLIT) # Cond;


// NOTE :: For multiple conds, add this: ((AND | OR) SPACE conditional)* 


expression
	: SET LPAR (NUM | LET) RPAR # Set
	| FREE # Free
	| MOVE LPAR (RIGHT | LEFT) RPAR # Move
	| IF LPAR conditional RPAR LSQ NEWLINE expressions* RSQ # If
	| LOOP LPAR intargs RPAR LSQ NEWLINE  expressions* RSQ # Loop
	| WRITE LPAR (intargs | STRLIT) RPAR # Write
	| SNET LPAR (intargs | STRLIT) RPAR #Snet
	| RNET  #Rnet
	| KREAD #Kread
	| SWRITE LPAR (intargs | STRLIT) RPAR #Swrite
	;
