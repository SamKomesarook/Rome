grammar Rome;

options {
	language = JavaScript;
}

// Tokens

START: 'start';
END: 'end';

SET: 'set';
INT: 'integer';
LONG: 'long';
CHAR: 'character';
STR: 'string';
FLO: 'float';

FREE: 'clear';
MEM: 'memory';
KREAD: 'keyboardRead';
SWRITE: 'consoleWrite';
WRITE: 'write';
NAME: 'name';

IMP: 'import';
IO: 'IO';
MATH: 'math';

IF: 'if';
IS: 'is';
NOT: 'not';
EQL: 'equal';
LESS: 'less';
GRE: 'greater';
AND: 'and';
OR: 'or';
RANDOM: 'rand';

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

IDENTIFIER: [a-zA-Z]+;

NUMBER: '-'?('0' .. '9')+;

FLOAT: '-'?('0' .. '9')+ '.' ('0' .. '9')+;

CHARACTER : '\'' ~ ["\r\n]* '\'' | '\u2018' ~ ["\r\n]* '\u2019';
STRLIT: '"' ~ ["\r\n]* '"' | '\u201C' ~ ["\r\n]* '\u201D';

ONE_LINE_COMMENT: '#' (~ '\n')* '\n'? -> skip ;

// Rules

strargs : STRLIT #Str ;

imp:  IMP '(' IO ')' # Io
    | IMP '(' MATH ')' # Math
    ;

mem: MEM '(' (intargs | strargs) ')';

floatargs: FLOAT #Float;

intargs: NUMBER # Num
	| mem # Memory
	;

r: START NEWLINE (imp NEWLINE)* expressions* END NEWLINE*;

expressions: expression NEWLINE;

conditional: (IS | NOT) WS (LESS | GRE | EQL) WS (intargs| STRLIT |floatargs) # Cond;

stylingExpressions: stylingExpression NEWLINE;

stylingExpression: 
	PAINT '(' COLOR ')' 				# Paint
	| TEXT_COLOR '(' COLOR ')' 			# TextColor
	| TEXT_SIZE '(' SIZE ')'			# TextSize
	| TEXT_ALIGN '(' ALIGN_PROP ')'		# TextAlign
	| BOLD 								# Bold
	| ITALIC 							# Italic
	| UNDERLINE 						# Underline 
	;
	
// NOTE :: For multiple conds, add this: ((AND | OR) WS conditional)*

expression:
	SET '(' (INT | LONG | CHAR | STR | FLO) ')'						# Set
	| FREE															# Free
	| MOVE '(' (RIGHT | LEFT) ')'									# Move
	| IF '(' conditional ')' '{' NEWLINE expressions* '}'			# If
	| LOOP '(' intargs ')' '{' NEWLINE expressions* '}'				# Loop
	| WRITE '(' (intargs | floatargs | STRLIT | CHARACTER) ')'		# Write
	| KREAD															# Kread
	| SWRITE '(' (intargs | floatargs | STRLIT | CHARACTER) ')'		# Swrite
	| NAME '(' (STRLIT |  mem) ')' 									# Name
	| STYLE '{' NEWLINE stylingExpressions* '}'						# Style
	| RANDOM '(' intargs ')'										# Random
	;
