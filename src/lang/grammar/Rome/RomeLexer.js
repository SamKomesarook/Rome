// Generated from Rome.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00024\u0209\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0005\'\u017c\n\'\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005(\u01b9\n(\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0005)\u01ca\n)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u01d9\n,\u0003",
    "-\u0006-\u01dc\n-\r-\u000e-\u01dd\u0003.\u0006.\u01e1\n.\r.\u000e.\u01e2",
    "\u0003/\u0003/\u0007/\u01e7\n/\f/\u000e/\u01ea\u000b/\u0003/\u0003/",
    "\u00030\u00030\u00070\u01f0\n0\f0\u000e0\u01f3\u000b0\u00030\u00050",
    "\u01f6\n0\u00030\u00030\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "2\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00033\u0002",
    "\u00024\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$",
    "G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4\u0003\u0002\u0005\u0004\u0002C\\c",
    "|\u0005\u0002\f\f\u000f\u000f$$\u0003\u0002\f\f\u0002\u0223\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002",
    "\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002",
    "K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003",
    "\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002",
    "\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002",
    "\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002",
    "\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002",
    "a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003",
    "\u0002\u0002\u0002\u0003g\u0003\u0002\u0002\u0002\u0005i\u0003\u0002",
    "\u0002\u0002\u0007k\u0003\u0002\u0002\u0002\tm\u0003\u0002\u0002\u0002",
    "\u000bo\u0003\u0002\u0002\u0002\ru\u0003\u0002\u0002\u0002\u000fy\u0003",
    "\u0002\u0002\u0002\u0011}\u0003\u0002\u0002\u0002\u0013\u0085\u0003",
    "\u0002\u0002\u0002\u0015\u008d\u0003\u0002\u0002\u0002\u0017\u0092\u0003",
    "\u0002\u0002\u0002\u0019\u0099\u0003\u0002\u0002\u0002\u001b\u00a6\u0003",
    "\u0002\u0002\u0002\u001d\u00b3\u0003\u0002\u0002\u0002\u001f\u00b9\u0003",
    "\u0002\u0002\u0002!\u00be\u0003\u0002\u0002\u0002#\u00c5\u0003\u0002",
    "\u0002\u0002%\u00c8\u0003\u0002\u0002\u0002\'\u00cb\u0003\u0002\u0002",
    "\u0002)\u00ce\u0003\u0002\u0002\u0002+\u00d2\u0003\u0002\u0002\u0002",
    "-\u00d8\u0003\u0002\u0002\u0002/\u00dd\u0003\u0002\u0002\u00021\u00e5",
    "\u0003\u0002\u0002\u00023\u00e9\u0003\u0002\u0002\u00025\u00ec\u0003",
    "\u0002\u0002\u00027\u00f1\u0003\u0002\u0002\u00029\u00f6\u0003\u0002",
    "\u0002\u0002;\u00fb\u0003\u0002\u0002\u0002=\u0100\u0003\u0002\u0002",
    "\u0002?\u0106\u0003\u0002\u0002\u0002A\u010c\u0003\u0002\u0002\u0002",
    "C\u0117\u0003\u0002\u0002\u0002E\u0121\u0003\u0002\u0002\u0002G\u012c",
    "\u0003\u0002\u0002\u0002I\u0131\u0003\u0002\u0002\u0002K\u0138\u0003",
    "\u0002\u0002\u0002M\u017b\u0003\u0002\u0002\u0002O\u01b8\u0003\u0002",
    "\u0002\u0002Q\u01c9\u0003\u0002\u0002\u0002S\u01cb\u0003\u0002\u0002",
    "\u0002U\u01cd\u0003\u0002\u0002\u0002W\u01d8\u0003\u0002\u0002\u0002",
    "Y\u01db\u0003\u0002\u0002\u0002[\u01e0\u0003\u0002\u0002\u0002]\u01e4",
    "\u0003\u0002\u0002\u0002_\u01ed\u0003\u0002\u0002\u0002a\u01f9\u0003",
    "\u0002\u0002\u0002c\u01ff\u0003\u0002\u0002\u0002e\u0203\u0003\u0002",
    "\u0002\u0002gh\u0007*\u0002\u0002h\u0004\u0003\u0002\u0002\u0002ij\u0007",
    "+\u0002\u0002j\u0006\u0003\u0002\u0002\u0002kl\u0007}\u0002\u0002l\b",
    "\u0003\u0002\u0002\u0002mn\u0007\u007f\u0002\u0002n\n\u0003\u0002\u0002",
    "\u0002op\u0007u\u0002\u0002pq\u0007v\u0002\u0002qr\u0007c\u0002\u0002",
    "rs\u0007t\u0002\u0002st\u0007v\u0002\u0002t\f\u0003\u0002\u0002\u0002",
    "uv\u0007g\u0002\u0002vw\u0007p\u0002\u0002wx\u0007f\u0002\u0002x\u000e",
    "\u0003\u0002\u0002\u0002yz\u0007u\u0002\u0002z{\u0007g\u0002\u0002{",
    "|\u0007v\u0002\u0002|\u0010\u0003\u0002\u0002\u0002}~\u0007p\u0002\u0002",
    "~\u007f\u0007w\u0002\u0002\u007f\u0080\u0007o\u0002\u0002\u0080\u0081",
    "\u0007d\u0002\u0002\u0081\u0082\u0007g\u0002\u0002\u0082\u0083\u0007",
    "t\u0002\u0002\u0083\u0084\u0007u\u0002\u0002\u0084\u0012\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007n\u0002\u0002\u0086\u0087\u0007g\u0002",
    "\u0002\u0087\u0088\u0007v\u0002\u0002\u0088\u0089\u0007v\u0002\u0002",
    "\u0089\u008a\u0007g\u0002\u0002\u008a\u008b\u0007t\u0002\u0002\u008b",
    "\u008c\u0007u\u0002\u0002\u008c\u0014\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007h\u0002\u0002\u008e\u008f\u0007t\u0002\u0002\u008f\u0090",
    "\u0007g\u0002\u0002\u0090\u0091\u0007g\u0002\u0002\u0091\u0016\u0003",
    "\u0002\u0002\u0002\u0092\u0093\u0007o\u0002\u0002\u0093\u0094\u0007",
    "g\u0002\u0002\u0094\u0095\u0007o\u0002\u0002\u0095\u0096\u0007q\u0002",
    "\u0002\u0096\u0097\u0007t\u0002\u0002\u0097\u0098\u0007{\u0002\u0002",
    "\u0098\u0018\u0003\u0002\u0002\u0002\u0099\u009a\u0007m\u0002\u0002",
    "\u009a\u009b\u0007g\u0002\u0002\u009b\u009c\u0007{\u0002\u0002\u009c",
    "\u009d\u0007d\u0002\u0002\u009d\u009e\u0007q\u0002\u0002\u009e\u009f",
    "\u0007c\u0002\u0002\u009f\u00a0\u0007t\u0002\u0002\u00a0\u00a1\u0007",
    "f\u0002\u0002\u00a1\u00a2\u0007T\u0002\u0002\u00a2\u00a3\u0007g\u0002",
    "\u0002\u00a3\u00a4\u0007c\u0002\u0002\u00a4\u00a5\u0007f\u0002\u0002",
    "\u00a5\u001a\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007e\u0002\u0002",
    "\u00a7\u00a8\u0007q\u0002\u0002\u00a8\u00a9\u0007p\u0002\u0002\u00a9",
    "\u00aa\u0007u\u0002\u0002\u00aa\u00ab\u0007q\u0002\u0002\u00ab\u00ac",
    "\u0007n\u0002\u0002\u00ac\u00ad\u0007g\u0002\u0002\u00ad\u00ae\u0007",
    "Y\u0002\u0002\u00ae\u00af\u0007t\u0002\u0002\u00af\u00b0\u0007k\u0002",
    "\u0002\u00b0\u00b1\u0007v\u0002\u0002\u00b1\u00b2\u0007g\u0002\u0002",
    "\u00b2\u001c\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007y\u0002\u0002",
    "\u00b4\u00b5\u0007t\u0002\u0002\u00b5\u00b6\u0007k\u0002\u0002\u00b6",
    "\u00b7\u0007v\u0002\u0002\u00b7\u00b8\u0007g\u0002\u0002\u00b8\u001e",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007p\u0002\u0002\u00ba\u00bb",
    "\u0007c\u0002\u0002\u00bb\u00bc\u0007o\u0002\u0002\u00bc\u00bd\u0007",
    "g\u0002\u0002\u00bd \u0003\u0002\u0002\u0002\u00be\u00bf\u0007k\u0002",
    "\u0002\u00bf\u00c0\u0007o\u0002\u0002\u00c0\u00c1\u0007r\u0002\u0002",
    "\u00c1\u00c2\u0007q\u0002\u0002\u00c2\u00c3\u0007t\u0002\u0002\u00c3",
    "\u00c4\u0007v\u0002\u0002\u00c4\"\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0007K\u0002\u0002\u00c6\u00c7\u0007Q\u0002\u0002\u00c7$\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0007k\u0002\u0002\u00c9\u00ca\u0007h\u0002",
    "\u0002\u00ca&\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007k\u0002\u0002",
    "\u00cc\u00cd\u0007u\u0002\u0002\u00cd(\u0003\u0002\u0002\u0002\u00ce",
    "\u00cf\u0007p\u0002\u0002\u00cf\u00d0\u0007q\u0002\u0002\u00d0\u00d1",
    "\u0007v\u0002\u0002\u00d1*\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007",
    "g\u0002\u0002\u00d3\u00d4\u0007s\u0002\u0002\u00d4\u00d5\u0007w\u0002",
    "\u0002\u00d5\u00d6\u0007c\u0002\u0002\u00d6\u00d7\u0007n\u0002\u0002",
    "\u00d7,\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007n\u0002\u0002\u00d9",
    "\u00da\u0007g\u0002\u0002\u00da\u00db\u0007u\u0002\u0002\u00db\u00dc",
    "\u0007u\u0002\u0002\u00dc.\u0003\u0002\u0002\u0002\u00dd\u00de\u0007",
    "i\u0002\u0002\u00de\u00df\u0007t\u0002\u0002\u00df\u00e0\u0007g\u0002",
    "\u0002\u00e0\u00e1\u0007c\u0002\u0002\u00e1\u00e2\u0007v\u0002\u0002",
    "\u00e2\u00e3\u0007g\u0002\u0002\u00e3\u00e4\u0007t\u0002\u0002\u00e4",
    "0\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007c\u0002\u0002\u00e6\u00e7",
    "\u0007p\u0002\u0002\u00e7\u00e8\u0007f\u0002\u0002\u00e82\u0003\u0002",
    "\u0002\u0002\u00e9\u00ea\u0007q\u0002\u0002\u00ea\u00eb\u0007t\u0002",
    "\u0002\u00eb4\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007o\u0002\u0002",
    "\u00ed\u00ee\u0007q\u0002\u0002\u00ee\u00ef\u0007x\u0002\u0002\u00ef",
    "\u00f0\u0007g\u0002\u0002\u00f06\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0007p\u0002\u0002\u00f2\u00f3\u0007g\u0002\u0002\u00f3\u00f4\u0007",
    "z\u0002\u0002\u00f4\u00f5\u0007v\u0002\u0002\u00f58\u0003\u0002\u0002",
    "\u0002\u00f6\u00f7\u0007n\u0002\u0002\u00f7\u00f8\u0007c\u0002\u0002",
    "\u00f8\u00f9\u0007u\u0002\u0002\u00f9\u00fa\u0007v\u0002\u0002\u00fa",
    ":\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007n\u0002\u0002\u00fc\u00fd",
    "\u0007q\u0002\u0002\u00fd\u00fe\u0007q\u0002\u0002\u00fe\u00ff\u0007",
    "r\u0002\u0002\u00ff<\u0003\u0002\u0002\u0002\u0100\u0101\u0007u\u0002",
    "\u0002\u0101\u0102\u0007v\u0002\u0002\u0102\u0103\u0007{\u0002\u0002",
    "\u0103\u0104\u0007n\u0002\u0002\u0104\u0105\u0007g\u0002\u0002\u0105",
    ">\u0003\u0002\u0002\u0002\u0106\u0107\u0007r\u0002\u0002\u0107\u0108",
    "\u0007c\u0002\u0002\u0108\u0109\u0007k\u0002\u0002\u0109\u010a\u0007",
    "p\u0002\u0002\u010a\u010b\u0007v\u0002\u0002\u010b@\u0003\u0002\u0002",
    "\u0002\u010c\u010d\u0007v\u0002\u0002\u010d\u010e\u0007g\u0002\u0002",
    "\u010e\u010f\u0007z\u0002\u0002\u010f\u0110\u0007v\u0002\u0002\u0110",
    "\u0111\u0007a\u0002\u0002\u0111\u0112\u0007e\u0002\u0002\u0112\u0113",
    "\u0007q\u0002\u0002\u0113\u0114\u0007n\u0002\u0002\u0114\u0115\u0007",
    "q\u0002\u0002\u0115\u0116\u0007t\u0002\u0002\u0116B\u0003\u0002\u0002",
    "\u0002\u0117\u0118\u0007v\u0002\u0002\u0118\u0119\u0007g\u0002\u0002",
    "\u0119\u011a\u0007z\u0002\u0002\u011a\u011b\u0007v\u0002\u0002\u011b",
    "\u011c\u0007a\u0002\u0002\u011c\u011d\u0007u\u0002\u0002\u011d\u011e",
    "\u0007k\u0002\u0002\u011e\u011f\u0007|\u0002\u0002\u011f\u0120\u0007",
    "g\u0002\u0002\u0120D\u0003\u0002\u0002\u0002\u0121\u0122\u0007v\u0002",
    "\u0002\u0122\u0123\u0007g\u0002\u0002\u0123\u0124\u0007z\u0002\u0002",
    "\u0124\u0125\u0007v\u0002\u0002\u0125\u0126\u0007a\u0002\u0002\u0126",
    "\u0127\u0007c\u0002\u0002\u0127\u0128\u0007n\u0002\u0002\u0128\u0129",
    "\u0007k\u0002\u0002\u0129\u012a\u0007i\u0002\u0002\u012a\u012b\u0007",
    "p\u0002\u0002\u012bF\u0003\u0002\u0002\u0002\u012c\u012d\u0007d\u0002",
    "\u0002\u012d\u012e\u0007q\u0002\u0002\u012e\u012f\u0007n\u0002\u0002",
    "\u012f\u0130\u0007f\u0002\u0002\u0130H\u0003\u0002\u0002\u0002\u0131",
    "\u0132\u0007k\u0002\u0002\u0132\u0133\u0007v\u0002\u0002\u0133\u0134",
    "\u0007c\u0002\u0002\u0134\u0135\u0007n\u0002\u0002\u0135\u0136\u0007",
    "k\u0002\u0002\u0136\u0137\u0007e\u0002\u0002\u0137J\u0003\u0002\u0002",
    "\u0002\u0138\u0139\u0007w\u0002\u0002\u0139\u013a\u0007p\u0002\u0002",
    "\u013a\u013b\u0007f\u0002\u0002\u013b\u013c\u0007g\u0002\u0002\u013c",
    "\u013d\u0007t\u0002\u0002\u013d\u013e\u0007n\u0002\u0002\u013e\u013f",
    "\u0007k\u0002\u0002\u013f\u0140\u0007p\u0002\u0002\u0140\u0141\u0007",
    "g\u0002\u0002\u0141L\u0003\u0002\u0002\u0002\u0142\u0143\u0007d\u0002",
    "\u0002\u0143\u0144\u0007n\u0002\u0002\u0144\u0145\u0007c\u0002\u0002",
    "\u0145\u0146\u0007e\u0002\u0002\u0146\u017c\u0007m\u0002\u0002\u0147",
    "\u0148\u0007y\u0002\u0002\u0148\u0149\u0007j\u0002\u0002\u0149\u014a",
    "\u0007k\u0002\u0002\u014a\u014b\u0007v\u0002\u0002\u014b\u017c\u0007",
    "g\u0002\u0002\u014c\u014d\u0007d\u0002\u0002\u014d\u014e\u0007n\u0002",
    "\u0002\u014e\u014f\u0007w\u0002\u0002\u014f\u017c\u0007g\u0002\u0002",
    "\u0150\u0151\u0007d\u0002\u0002\u0151\u0152\u0007t\u0002\u0002\u0152",
    "\u0153\u0007q\u0002\u0002\u0153\u0154\u0007y\u0002\u0002\u0154\u017c",
    "\u0007p\u0002\u0002\u0155\u0156\u0007i\u0002\u0002\u0156\u0157\u0007",
    "t\u0002\u0002\u0157\u0158\u0007c\u0002\u0002\u0158\u017c\u0007{\u0002",
    "\u0002\u0159\u015a\u0007i\u0002\u0002\u015a\u015b\u0007t\u0002\u0002",
    "\u015b\u015c\u0007g\u0002\u0002\u015c\u017c\u0007{\u0002\u0002\u015d",
    "\u015e\u0007i\u0002\u0002\u015e\u015f\u0007t\u0002\u0002\u015f\u0160",
    "\u0007g\u0002\u0002\u0160\u0161\u0007g\u0002\u0002\u0161\u017c\u0007",
    "p\u0002\u0002\u0162\u0163\u0007q\u0002\u0002\u0163\u0164\u0007t\u0002",
    "\u0002\u0164\u0165\u0007c\u0002\u0002\u0165\u0166\u0007p\u0002\u0002",
    "\u0166\u0167\u0007i\u0002\u0002\u0167\u017c\u0007g\u0002\u0002\u0168",
    "\u0169\u0007r\u0002\u0002\u0169\u016a\u0007k\u0002\u0002\u016a\u016b",
    "\u0007p\u0002\u0002\u016b\u017c\u0007m\u0002\u0002\u016c\u016d\u0007",
    "r\u0002\u0002\u016d\u016e\u0007w\u0002\u0002\u016e\u016f\u0007t\u0002",
    "\u0002\u016f\u0170\u0007r\u0002\u0002\u0170\u0171\u0007n\u0002\u0002",
    "\u0171\u017c\u0007g\u0002\u0002\u0172\u0173\u0007t\u0002\u0002\u0173",
    "\u0174\u0007g\u0002\u0002\u0174\u017c\u0007f\u0002\u0002\u0175\u0176",
    "\u0007{\u0002\u0002\u0176\u0177\u0007g\u0002\u0002\u0177\u0178\u0007",
    "n\u0002\u0002\u0178\u0179\u0007n\u0002\u0002\u0179\u017a\u0007q\u0002",
    "\u0002\u017a\u017c\u0007y\u0002\u0002\u017b\u0142\u0003\u0002\u0002",
    "\u0002\u017b\u0147\u0003\u0002\u0002\u0002\u017b\u014c\u0003\u0002\u0002",
    "\u0002\u017b\u0150\u0003\u0002\u0002\u0002\u017b\u0155\u0003\u0002\u0002",
    "\u0002\u017b\u0159\u0003\u0002\u0002\u0002\u017b\u015d\u0003\u0002\u0002",
    "\u0002\u017b\u0162\u0003\u0002\u0002\u0002\u017b\u0168\u0003\u0002\u0002",
    "\u0002\u017b\u016c\u0003\u0002\u0002\u0002\u017b\u0172\u0003\u0002\u0002",
    "\u0002\u017b\u0175\u0003\u0002\u0002\u0002\u017cN\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0007z\u0002\u0002\u017e\u017f\u0007z\u0002\u0002",
    "\u017f\u0180\u0007/\u0002\u0002\u0180\u0181\u0007n\u0002\u0002\u0181",
    "\u0182\u0007c\u0002\u0002\u0182\u0183\u0007t\u0002\u0002\u0183\u0184",
    "\u0007i\u0002\u0002\u0184\u01b9\u0007g\u0002\u0002\u0185\u0186\u0007",
    "z\u0002\u0002\u0186\u0187\u0007/\u0002\u0002\u0187\u0188\u0007n\u0002",
    "\u0002\u0188\u0189\u0007c\u0002\u0002\u0189\u018a\u0007t\u0002\u0002",
    "\u018a\u018b\u0007i\u0002\u0002\u018b\u01b9\u0007g\u0002\u0002\u018c",
    "\u018d\u0007n\u0002\u0002\u018d\u018e\u0007c\u0002\u0002\u018e\u018f",
    "\u0007t\u0002\u0002\u018f\u0190\u0007i\u0002\u0002\u0190\u0191\u0007",
    "g\u0002\u0002\u0191\u01b9\u0007t\u0002\u0002\u0192\u0193\u0007n\u0002",
    "\u0002\u0193\u0194\u0007c\u0002\u0002\u0194\u0195\u0007t\u0002\u0002",
    "\u0195\u0196\u0007i\u0002\u0002\u0196\u01b9\u0007g\u0002\u0002\u0197",
    "\u0198\u0007o\u0002\u0002\u0198\u0199\u0007g\u0002\u0002\u0199\u019a",
    "\u0007f\u0002\u0002\u019a\u019b\u0007k\u0002\u0002\u019b\u019c\u0007",
    "w\u0002\u0002\u019c\u01b9\u0007o\u0002\u0002\u019d\u019e\u0007u\u0002",
    "\u0002\u019e\u019f\u0007o\u0002\u0002\u019f\u01a0\u0007c\u0002\u0002",
    "\u01a0\u01a1\u0007n\u0002\u0002\u01a1\u01b9\u0007n\u0002\u0002\u01a2",
    "\u01a3\u0007u\u0002\u0002\u01a3\u01a4\u0007o\u0002\u0002\u01a4\u01a5",
    "\u0007c\u0002\u0002\u01a5\u01a6\u0007n\u0002\u0002\u01a6\u01a7\u0007",
    "n\u0002\u0002\u01a7\u01a8\u0007g\u0002\u0002\u01a8\u01b9\u0007t\u0002",
    "\u0002\u01a9\u01aa\u0007z\u0002\u0002\u01aa\u01ab\u0007/\u0002\u0002",
    "\u01ab\u01ac\u0007u\u0002\u0002\u01ac\u01ad\u0007o\u0002\u0002\u01ad",
    "\u01ae\u0007c\u0002\u0002\u01ae\u01af\u0007n\u0002\u0002\u01af\u01b9",
    "\u0007n\u0002\u0002\u01b0\u01b1\u0007z\u0002\u0002\u01b1\u01b2\u0007",
    "z\u0002\u0002\u01b2\u01b3\u0007/\u0002\u0002\u01b3\u01b4\u0007u\u0002",
    "\u0002\u01b4\u01b5\u0007o\u0002\u0002\u01b5\u01b6\u0007c\u0002\u0002",
    "\u01b6\u01b7\u0007n\u0002\u0002\u01b7\u01b9\u0007n\u0002\u0002\u01b8",
    "\u017d\u0003\u0002\u0002\u0002\u01b8\u0185\u0003\u0002\u0002\u0002\u01b8",
    "\u018c\u0003\u0002\u0002\u0002\u01b8\u0192\u0003\u0002\u0002\u0002\u01b8",
    "\u0197\u0003\u0002\u0002\u0002\u01b8\u019d\u0003\u0002\u0002\u0002\u01b8",
    "\u01a2\u0003\u0002\u0002\u0002\u01b8\u01a9\u0003\u0002\u0002\u0002\u01b8",
    "\u01b0\u0003\u0002\u0002\u0002\u01b9P\u0003\u0002\u0002\u0002\u01ba",
    "\u01bb\u0007n\u0002\u0002\u01bb\u01bc\u0007g\u0002\u0002\u01bc\u01bd",
    "\u0007h\u0002\u0002\u01bd\u01ca\u0007v\u0002\u0002\u01be\u01bf\u0007",
    "e\u0002\u0002\u01bf\u01c0\u0007g\u0002\u0002\u01c0\u01c1\u0007p\u0002",
    "\u0002\u01c1\u01c2\u0007v\u0002\u0002\u01c2\u01c3\u0007g\u0002\u0002",
    "\u01c3\u01ca\u0007t\u0002\u0002\u01c4\u01c5\u0007t\u0002\u0002\u01c5",
    "\u01c6\u0007k\u0002\u0002\u01c6\u01c7\u0007i\u0002\u0002\u01c7\u01c8",
    "\u0007j\u0002\u0002\u01c8\u01ca\u0007v\u0002\u0002\u01c9\u01ba\u0003",
    "\u0002\u0002\u0002\u01c9\u01be\u0003\u0002\u0002\u0002\u01c9\u01c4\u0003",
    "\u0002\u0002\u0002\u01caR\u0003\u0002\u0002\u0002\u01cb\u01cc\u0007",
    "\f\u0002\u0002\u01ccT\u0003\u0002\u0002\u0002\u01cd\u01ce\u0007\"\u0002",
    "\u0002\u01ceV\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007v\u0002\u0002",
    "\u01d0\u01d1\u0007t\u0002\u0002\u01d1\u01d2\u0007w\u0002\u0002\u01d2",
    "\u01d9\u0007g\u0002\u0002\u01d3\u01d4\u0007h\u0002\u0002\u01d4\u01d5",
    "\u0007c\u0002\u0002\u01d5\u01d6\u0007n\u0002\u0002\u01d6\u01d7\u0007",
    "u\u0002\u0002\u01d7\u01d9\u0007g\u0002\u0002\u01d8\u01cf\u0003\u0002",
    "\u0002\u0002\u01d8\u01d3\u0003\u0002\u0002\u0002\u01d9X\u0003\u0002",
    "\u0002\u0002\u01da\u01dc\t\u0002\u0002\u0002\u01db\u01da\u0003\u0002",
    "\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd\u01db\u0003\u0002",
    "\u0002\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01deZ\u0003\u0002",
    "\u0002\u0002\u01df\u01e1\u00042;\u0002\u01e0\u01df\u0003\u0002\u0002",
    "\u0002\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u01e0\u0003\u0002\u0002",
    "\u0002\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\\\u0003\u0002\u0002",
    "\u0002\u01e4\u01e8\u0007$\u0002\u0002\u01e5\u01e7\n\u0003\u0002\u0002",
    "\u01e6\u01e5\u0003\u0002\u0002\u0002\u01e7\u01ea\u0003\u0002\u0002\u0002",
    "\u01e8\u01e6\u0003\u0002\u0002\u0002\u01e8\u01e9\u0003\u0002\u0002\u0002",
    "\u01e9\u01eb\u0003\u0002\u0002\u0002\u01ea\u01e8\u0003\u0002\u0002\u0002",
    "\u01eb\u01ec\u0007$\u0002\u0002\u01ec^\u0003\u0002\u0002\u0002\u01ed",
    "\u01f1\u0007%\u0002\u0002\u01ee\u01f0\n\u0004\u0002\u0002\u01ef\u01ee",
    "\u0003\u0002\u0002\u0002\u01f0\u01f3\u0003\u0002\u0002\u0002\u01f1\u01ef",
    "\u0003\u0002\u0002\u0002\u01f1\u01f2\u0003\u0002\u0002\u0002\u01f2\u01f5",
    "\u0003\u0002\u0002\u0002\u01f3\u01f1\u0003\u0002\u0002\u0002\u01f4\u01f6",
    "\u0007\f\u0002\u0002\u01f5\u01f4\u0003\u0002\u0002\u0002\u01f5\u01f6",
    "\u0003\u0002\u0002\u0002\u01f6\u01f7\u0003\u0002\u0002\u0002\u01f7\u01f8",
    "\b0\u0002\u0002\u01f8`\u0003\u0002\u0002\u0002\u01f9\u01fa\u0007y\u0002",
    "\u0002\u01fa\u01fb\u0007j\u0002\u0002\u01fb\u01fc\u0007k\u0002\u0002",
    "\u01fc\u01fd\u0007n\u0002\u0002\u01fd\u01fe\u0007g\u0002\u0002\u01fe",
    "b\u0003\u0002\u0002\u0002\u01ff\u0200\u0007c\u0002\u0002\u0200\u0201",
    "\u0007f\u0002\u0002\u0201\u0202\u0007f\u0002\u0002\u0202d\u0003\u0002",
    "\u0002\u0002\u0203\u0204\u0007o\u0002\u0002\u0204\u0205\u0007k\u0002",
    "\u0002\u0205\u0206\u0007p\u0002\u0002\u0206\u0207\u0007w\u0002\u0002",
    "\u0207\u0208\u0007u\u0002\u0002\u0208f\u0003\u0002\u0002\u0002\f\u0002",
    "\u017b\u01b8\u01c9\u01d8\u01dd\u01e2\u01e8\u01f1\u01f5\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RomeLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RomeLexer.prototype = Object.create(antlr4.Lexer.prototype);
RomeLexer.prototype.constructor = RomeLexer;

Object.defineProperty(RomeLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RomeLexer.EOF = antlr4.Token.EOF;
RomeLexer.T__0 = 1;
RomeLexer.T__1 = 2;
RomeLexer.T__2 = 3;
RomeLexer.T__3 = 4;
RomeLexer.START = 5;
RomeLexer.END = 6;
RomeLexer.SET = 7;
RomeLexer.NUM = 8;
RomeLexer.LET = 9;
RomeLexer.FREE = 10;
RomeLexer.MEM = 11;
RomeLexer.KREAD = 12;
RomeLexer.SWRITE = 13;
RomeLexer.WRITE = 14;
RomeLexer.NAME = 15;
RomeLexer.IMP = 16;
RomeLexer.IO = 17;
RomeLexer.IF = 18;
RomeLexer.IS = 19;
RomeLexer.NOT = 20;
RomeLexer.EQL = 21;
RomeLexer.LESS = 22;
RomeLexer.GRE = 23;
RomeLexer.AND = 24;
RomeLexer.OR = 25;
RomeLexer.MOVE = 26;
RomeLexer.RIGHT = 27;
RomeLexer.LEFT = 28;
RomeLexer.LOOP = 29;
RomeLexer.STYLE = 30;
RomeLexer.PAINT = 31;
RomeLexer.TEXT_COLOR = 32;
RomeLexer.TEXT_SIZE = 33;
RomeLexer.TEXT_ALIGN = 34;
RomeLexer.BOLD = 35;
RomeLexer.ITALIC = 36;
RomeLexer.UNDERLINE = 37;
RomeLexer.COLOR = 38;
RomeLexer.SIZE = 39;
RomeLexer.ALIGN_PROP = 40;
RomeLexer.NEWLINE = 41;
RomeLexer.WS = 42;
RomeLexer.BOOLEAN_PROP = 43;
RomeLexer.IDENTIFIER = 44;
RomeLexer.NUMBER = 45;
RomeLexer.STRLIT = 46;
RomeLexer.ONE_LINE_COMMENT = 47;
RomeLexer.WHILE = 48;
RomeLexer.ADD = 49;
RomeLexer.MINUS = 50;

RomeLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RomeLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RomeLexer.prototype.literalNames = [ null, "'('", "')'", "'{'", "'}'", "'start'", 
                                     "'end'", "'set'", "'numbers'", "'letters'", 
                                     "'free'", "'memory'", "'keyboardRead'", 
                                     "'consoleWrite'", "'write'", "'name'", 
                                     "'import'", "'IO'", "'if'", "'is'", 
                                     "'not'", "'equal'", "'less'", "'greater'", 
                                     "'and'", "'or'", "'move'", "'next'", 
                                     "'last'", "'loop'", "'style'", "'paint'", 
                                     "'text_color'", "'text_size'", "'text_align'", 
                                     "'bold'", "'italic'", "'underline'", 
                                     null, null, null, "'\n'", "' '", null, 
                                     null, null, null, null, "'while'", 
                                     "'add'", "'minus'" ];

RomeLexer.prototype.symbolicNames = [ null, null, null, null, null, "START", 
                                      "END", "SET", "NUM", "LET", "FREE", 
                                      "MEM", "KREAD", "SWRITE", "WRITE", 
                                      "NAME", "IMP", "IO", "IF", "IS", "NOT", 
                                      "EQL", "LESS", "GRE", "AND", "OR", 
                                      "MOVE", "RIGHT", "LEFT", "LOOP", "STYLE", 
                                      "PAINT", "TEXT_COLOR", "TEXT_SIZE", 
                                      "TEXT_ALIGN", "BOLD", "ITALIC", "UNDERLINE", 
                                      "COLOR", "SIZE", "ALIGN_PROP", "NEWLINE", 
                                      "WS", "BOOLEAN_PROP", "IDENTIFIER", 
                                      "NUMBER", "STRLIT", "ONE_LINE_COMMENT", 
                                      "WHILE", "ADD", "MINUS" ];

RomeLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "START", 
                                  "END", "SET", "NUM", "LET", "FREE", "MEM", 
                                  "KREAD", "SWRITE", "WRITE", "NAME", "IMP", 
                                  "IO", "IF", "IS", "NOT", "EQL", "LESS", 
                                  "GRE", "AND", "OR", "MOVE", "RIGHT", "LEFT", 
                                  "LOOP", "STYLE", "PAINT", "TEXT_COLOR", 
                                  "TEXT_SIZE", "TEXT_ALIGN", "BOLD", "ITALIC", 
                                  "UNDERLINE", "COLOR", "SIZE", "ALIGN_PROP", 
                                  "NEWLINE", "WS", "BOOLEAN_PROP", "IDENTIFIER", 
                                  "NUMBER", "STRLIT", "ONE_LINE_COMMENT", 
                                  "WHILE", "ADD", "MINUS" ];

RomeLexer.prototype.grammarFileName = "Rome.g4";


exports.RomeLexer = RomeLexer;

