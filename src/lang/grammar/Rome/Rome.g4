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
KREAD: 'keyboardRead';
SWRITE: 'consoleWrite';
WRITE: 'write';
NAME: 'name';

IMP: 'import';
IO: 'IO';

IF: 'if';
IS: 'is';
NOT: 'not';
EQL: 'equal';
LESS: 'less';
GRE: 'greater';
AND: 'and';
OR: 'or';

MOVE: 'move';
RIGHT: 'next';
LEFT: 'last';

LOOP: 'loop';

STYLE: 'style';
PAINT: 'paint';
TEXT_COLOR: 'text_color';
TEXT_SIZE: 'text_size';
TEXT_ALIGN: 'text_align';
BOLD: 'bold';
ITALIC: 'italic';
UNDERLINE: 'underline';

COLOR: 'black' | 'white' | 'blue' | 'brown' | 'gray' | 'grey' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';
SIZE: 'xx-large' | 'x-large' | 'larger' | 'large' | 'medium' | 'small' | 'smaller' | 'x-small' | 'xx-small';
ALIGN_PROP: 'left' | 'center' | 'right';

NEWLINE: '\n';

WS: ' ';

BOOLEAN_PROP: 'true' | 'false';

IDENTIFIER: [a-zA-Z]+;

NUMBER: ('0' .. '9')+;

STRLIT: '"' ~ ["\r\n]* '"';

ONE_LINE_COMMENT: '#' (~ '\n')* '\n'? -> skip ;

WHILE: 'while';

ADD: 'add';
MINUS: 'minus';

// Rules

strargs : STRLIT #Str ;

imp:  IMP '(' IO ')' # Io ;

mem: MEM '(' (intargs | strargs) ')';

intargs: NUMBER # Num
	| mem # Memory
	;

r: START NEWLINE (imp NEWLINE)* expressions* END NEWLINE*;

expressions: expression NEWLINE;

conditional: (IS | NOT) WS (LESS | GRE | EQL) WS (intargs| STRLIT) # Cond;

whileConditional: (IS | NOT) WS (LESS | GRE | EQL) WS (intargs| STRLIT) WS (ADD | MINUS) # whileCond;

stylingExpressions: stylingExpression NEWLINE;

stylingExpression: PAINT '(' COLOR ')' 	# Paint
	| TEXT_COLOR '(' COLOR ')' 			# TextColor
	| TEXT_SIZE '(' SIZE ')'			# TextSize
	| TEXT_ALIGN '(' ALIGN_PROP ')'		# TextAlign
	| BOLD '(' BOOLEAN_PROP ')'			# Bold
	| ITALIC '(' BOOLEAN_PROP ')'		# Italic
	| UNDERLINE '(' BOOLEAN_PROP ')'	# Underline 
	;
	
// NOTE :: For multiple conds, add this: ((AND | OR) WS conditional)*

expression:
	SET '(' (NUM | LET) ')'								# Set
	| FREE													# Free
	| MOVE '(' (RIGHT | LEFT) ')'							# Move
	| IF '(' conditional ')' '{' NEWLINE expressions* '}'	# If
	| LOOP '(' intargs ')' '{' NEWLINE expressions* '}'	# Loop
	| WHILE '(' whileConditional ')' '{' NEWLINE expressions* '}'	# While	
	| WRITE '(' (intargs | STRLIT) ')'					# Write
	| KREAD													# Kread
	| SWRITE '(' (intargs | STRLIT) ')'					# Swrite
	| NAME '(' (STRLIT |  mem) ')' 						# Name
	| STYLE '{' NEWLINE stylingExpressions* '}'			# Style
	;
