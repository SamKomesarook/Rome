grammar Rome;

prog: syntax+;

syntax:
	ENTRY (LOOP_COND | IF_COND | MOVE_COND | MEM_COND | IO_COND)+ EXIT;

ENTRY: 'START';
EXIT: 'END';

LOOP_COND: 'LOOP' RSQ CONDITION LSQ RPAR NUMBER LPAR;
IF_COND: 'IF' RSQ CONDITION LSQ;
MOVE_COND: 'MOVE' MOVE_CMD;
MEM_COND: MEM_CMD NUMBER;
IO_COND: IO_CMD;

GNERAL_CMD: 'IF' | 'LOOP';
MOVE_CMD: 'RIGHT' | 'LEFT';
COMPARE_CMD: 'IS' | 'NOT' | 'EQUAL' | 'LESS' | 'GREATER';
MEM_CMD: 'MEM' | 'FREE';
IO_CMD: 'READ' | 'WRITE' | 'PRINT';

fragment RPAR: '(';
fragment LPAR: ')';
fragment RSQ: '[';
fragment LSQ: ']';
fragment QUOTE: '\'';

GENERAL_TOKEN: RPAR | LPAR | RSQ | LSQ | QUOTE;
MATH_TOKEN: 'PLUS' | 'MINUS' | 'MULT' | 'DIV';
BOOL_TOKEN: 'TRUE' | 'FALSE';

CONDITION: (STRING | NUMBER) COMPARE_CMD NUMBER; // TODO: create more condition grammar

STRING: [A-Za-z]+;
NUMBER: [0-9]+;
NEWLINE: '\r'? '\n';

WS: [ \t]+ -> skip;

