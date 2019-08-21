grammar Rome;

prog: stat+;

stat: 'START' NEWLINE | COMMAND '(' TOKEN ')' | 'END' EOF;

COMMAND:
	'MOVE'
	| 'RIGHT'
	| 'LEFT'
	| 'READ'
	| 'WRITE'
	| 'PRINT'
	| 'MEM'
	| 'START'
	| 'END'
	| 'FREE'
	| 'IF'
	| 'IS'
	| 'NOT'
	| 'EQUAL'
	| 'LESS'
	| 'GREATER';

TOKEN:
	'RPAR'
	| 'PLUS'
	| 'MINUS'
	| 'MULT'
	| 'DIV'
	| 'LPAR'
	| 'RSQ'
	| 'LSQ'
	| 'NUMBER'
	| 'STRING'
	| 'WS'
	| 'NEWLINE'
	| 'QUOTE';

STRING: [A-Za-z]+;
INT: [0-9]+;
NEWLINE: '\r'? '\n';

WS: [ \t]+ -> skip;

