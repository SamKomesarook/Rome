// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002(\u0117\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003$\u0006$\u00fa\n$\r$\u000e$\u00fb\u0003%\u0006",
    "%\u00ff\n%\r%\u000e%\u0100\u0003&\u0003&\u0007&\u0105\n&\f&\u000e&\u0108",
    "\u000b&\u0003&\u0003&\u0003\'\u0003\'\u0007\'\u010e\n\'\f\'\u000e\'",
    "\u0111\u000b\'\u0003\'\u0005\'\u0114\n\'\u0003\'\u0003\'\u0002\u0002",
    "(\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'",
    "M(\u0003\u0002\u0005\u0004\u0002C\\c|\u0005\u0002\f\f\u000f\u000f$$",
    "\u0003\u0002\f\f\u0002\u011b\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003",
    "\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002",
    "\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002",
    "\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002",
    "\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002",
    "M\u0003\u0002\u0002\u0002\u0003O\u0003\u0002\u0002\u0002\u0005Q\u0003",
    "\u0002\u0002\u0002\u0007S\u0003\u0002\u0002\u0002\tU\u0003\u0002\u0002",
    "\u0002\u000bW\u0003\u0002\u0002\u0002\r]\u0003\u0002\u0002\u0002\u000f",
    "a\u0003\u0002\u0002\u0002\u0011e\u0003\u0002\u0002\u0002\u0013m\u0003",
    "\u0002\u0002\u0002\u0015u\u0003\u0002\u0002\u0002\u0017z\u0003\u0002",
    "\u0002\u0002\u0019\u0081\u0003\u0002\u0002\u0002\u001b\u0088\u0003\u0002",
    "\u0002\u0002\u001d\u0090\u0003\u0002\u0002\u0002\u001f\u0096\u0003\u0002",
    "\u0002\u0002!\u009b\u0003\u0002\u0002\u0002#\u00a2\u0003\u0002\u0002",
    "\u0002%\u00aa\u0003\u0002\u0002\u0002\'\u00ad\u0003\u0002\u0002\u0002",
    ")\u00b0\u0003\u0002\u0002\u0002+\u00b3\u0003\u0002\u0002\u0002-\u00b7",
    "\u0003\u0002\u0002\u0002/\u00bd\u0003\u0002\u0002\u00021\u00c2\u0003",
    "\u0002\u0002\u00023\u00ca\u0003\u0002\u0002\u00025\u00ce\u0003\u0002",
    "\u0002\u00027\u00d1\u0003\u0002\u0002\u00029\u00d9\u0003\u0002\u0002",
    "\u0002;\u00e0\u0003\u0002\u0002\u0002=\u00e5\u0003\u0002\u0002\u0002",
    "?\u00ea\u0003\u0002\u0002\u0002A\u00ef\u0003\u0002\u0002\u0002C\u00f4",
    "\u0003\u0002\u0002\u0002E\u00f6\u0003\u0002\u0002\u0002G\u00f9\u0003",
    "\u0002\u0002\u0002I\u00fe\u0003\u0002\u0002\u0002K\u0102\u0003\u0002",
    "\u0002\u0002M\u010b\u0003\u0002\u0002\u0002OP\u0007*\u0002\u0002P\u0004",
    "\u0003\u0002\u0002\u0002QR\u0007+\u0002\u0002R\u0006\u0003\u0002\u0002",
    "\u0002ST\u0007}\u0002\u0002T\b\u0003\u0002\u0002\u0002UV\u0007\u007f",
    "\u0002\u0002V\n\u0003\u0002\u0002\u0002WX\u0007u\u0002\u0002XY\u0007",
    "v\u0002\u0002YZ\u0007c\u0002\u0002Z[\u0007t\u0002\u0002[\\\u0007v\u0002",
    "\u0002\\\f\u0003\u0002\u0002\u0002]^\u0007g\u0002\u0002^_\u0007p\u0002",
    "\u0002_`\u0007f\u0002\u0002`\u000e\u0003\u0002\u0002\u0002ab\u0007u",
    "\u0002\u0002bc\u0007g\u0002\u0002cd\u0007v\u0002\u0002d\u0010\u0003",
    "\u0002\u0002\u0002ef\u0007p\u0002\u0002fg\u0007w\u0002\u0002gh\u0007",
    "o\u0002\u0002hi\u0007d\u0002\u0002ij\u0007g\u0002\u0002jk\u0007t\u0002",
    "\u0002kl\u0007u\u0002\u0002l\u0012\u0003\u0002\u0002\u0002mn\u0007n",
    "\u0002\u0002no\u0007g\u0002\u0002op\u0007v\u0002\u0002pq\u0007v\u0002",
    "\u0002qr\u0007g\u0002\u0002rs\u0007t\u0002\u0002st\u0007u\u0002\u0002",
    "t\u0014\u0003\u0002\u0002\u0002uv\u0007h\u0002\u0002vw\u0007t\u0002",
    "\u0002wx\u0007g\u0002\u0002xy\u0007g\u0002\u0002y\u0016\u0003\u0002",
    "\u0002\u0002z{\u0007o\u0002\u0002{|\u0007g\u0002\u0002|}\u0007o\u0002",
    "\u0002}~\u0007q\u0002\u0002~\u007f\u0007t\u0002\u0002\u007f\u0080\u0007",
    "{\u0002\u0002\u0080\u0018\u0003\u0002\u0002\u0002\u0081\u0082\u0007",
    "m\u0002\u0002\u0082\u0083\u0007a\u0002\u0002\u0083\u0084\u0007t\u0002",
    "\u0002\u0084\u0085\u0007g\u0002\u0002\u0085\u0086\u0007c\u0002\u0002",
    "\u0086\u0087\u0007f\u0002\u0002\u0087\u001a\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0007u\u0002\u0002\u0089\u008a\u0007a\u0002\u0002\u008a",
    "\u008b\u0007y\u0002\u0002\u008b\u008c\u0007t\u0002\u0002\u008c\u008d",
    "\u0007k\u0002\u0002\u008d\u008e\u0007v\u0002\u0002\u008e\u008f\u0007",
    "g\u0002\u0002\u008f\u001c\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "y\u0002\u0002\u0091\u0092\u0007t\u0002\u0002\u0092\u0093\u0007k\u0002",
    "\u0002\u0093\u0094\u0007v\u0002\u0002\u0094\u0095\u0007g\u0002\u0002",
    "\u0095\u001e\u0003\u0002\u0002\u0002\u0096\u0097\u0007p\u0002\u0002",
    "\u0097\u0098\u0007c\u0002\u0002\u0098\u0099\u0007o\u0002\u0002\u0099",
    "\u009a\u0007g\u0002\u0002\u009a \u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0007k\u0002\u0002\u009c\u009d\u0007o\u0002\u0002\u009d\u009e\u0007",
    "r\u0002\u0002\u009e\u009f\u0007q\u0002\u0002\u009f\u00a0\u0007t\u0002",
    "\u0002\u00a0\u00a1\u0007v\u0002\u0002\u00a1\"\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0007p\u0002\u0002\u00a3\u00a4\u0007g\u0002\u0002\u00a4",
    "\u00a5\u0007v\u0002\u0002\u00a5\u00a6\u0007y\u0002\u0002\u00a6\u00a7",
    "\u0007q\u0002\u0002\u00a7\u00a8\u0007t\u0002\u0002\u00a8\u00a9\u0007",
    "m\u0002\u0002\u00a9$\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007K\u0002",
    "\u0002\u00ab\u00ac\u0007Q\u0002\u0002\u00ac&\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0007k\u0002\u0002\u00ae\u00af\u0007h\u0002\u0002\u00af",
    "(\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007k\u0002\u0002\u00b1\u00b2",
    "\u0007u\u0002\u0002\u00b2*\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "p\u0002\u0002\u00b4\u00b5\u0007q\u0002\u0002\u00b5\u00b6\u0007v\u0002",
    "\u0002\u00b6,\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007g\u0002\u0002",
    "\u00b8\u00b9\u0007s\u0002\u0002\u00b9\u00ba\u0007w\u0002\u0002\u00ba",
    "\u00bb\u0007c\u0002\u0002\u00bb\u00bc\u0007n\u0002\u0002\u00bc.\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007n\u0002\u0002\u00be\u00bf\u0007",
    "g\u0002\u0002\u00bf\u00c0\u0007u\u0002\u0002\u00c0\u00c1\u0007u\u0002",
    "\u0002\u00c10\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007i\u0002\u0002",
    "\u00c3\u00c4\u0007t\u0002\u0002\u00c4\u00c5\u0007g\u0002\u0002\u00c5",
    "\u00c6\u0007c\u0002\u0002\u00c6\u00c7\u0007v\u0002\u0002\u00c7\u00c8",
    "\u0007g\u0002\u0002\u00c8\u00c9\u0007t\u0002\u0002\u00c92\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0007c\u0002\u0002\u00cb\u00cc\u0007p\u0002",
    "\u0002\u00cc\u00cd\u0007f\u0002\u0002\u00cd4\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007q\u0002\u0002\u00cf\u00d0\u0007t\u0002\u0002\u00d0",
    "6\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007p\u0002\u0002\u00d2\u00d3",
    "\u0007a\u0002\u0002\u00d3\u00d4\u0007y\u0002\u0002\u00d4\u00d5\u0007",
    "t\u0002\u0002\u00d5\u00d6\u0007k\u0002\u0002\u00d6\u00d7\u0007v\u0002",
    "\u0002\u00d7\u00d8\u0007g\u0002\u0002\u00d88\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0007p\u0002\u0002\u00da\u00db\u0007a\u0002\u0002\u00db",
    "\u00dc\u0007t\u0002\u0002\u00dc\u00dd\u0007g\u0002\u0002\u00dd\u00de",
    "\u0007c\u0002\u0002\u00de\u00df\u0007f\u0002\u0002\u00df:\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0007o\u0002\u0002\u00e1\u00e2\u0007q\u0002",
    "\u0002\u00e2\u00e3\u0007x\u0002\u0002\u00e3\u00e4\u0007g\u0002\u0002",
    "\u00e4<\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007p\u0002\u0002\u00e6",
    "\u00e7\u0007g\u0002\u0002\u00e7\u00e8\u0007z\u0002\u0002\u00e8\u00e9",
    "\u0007v\u0002\u0002\u00e9>\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007",
    "n\u0002\u0002\u00eb\u00ec\u0007c\u0002\u0002\u00ec\u00ed\u0007u\u0002",
    "\u0002\u00ed\u00ee\u0007v\u0002\u0002\u00ee@\u0003\u0002\u0002\u0002",
    "\u00ef\u00f0\u0007n\u0002\u0002\u00f0\u00f1\u0007q\u0002\u0002\u00f1",
    "\u00f2\u0007q\u0002\u0002\u00f2\u00f3\u0007r\u0002\u0002\u00f3B\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0007\f\u0002\u0002\u00f5D\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0007\"\u0002\u0002\u00f7F\u0003\u0002\u0002",
    "\u0002\u00f8\u00fa\t\u0002\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002",
    "\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002",
    "\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fcH\u0003\u0002\u0002",
    "\u0002\u00fd\u00ff\u00042;\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002",
    "\u0100\u0101\u0003\u0002\u0002\u0002\u0101J\u0003\u0002\u0002\u0002",
    "\u0102\u0106\u0007$\u0002\u0002\u0103\u0105\n\u0003\u0002\u0002\u0104",
    "\u0103\u0003\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106",
    "\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107",
    "\u0109\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0007$\u0002\u0002\u010aL\u0003\u0002\u0002\u0002\u010b\u010f",
    "\u0007%\u0002\u0002\u010c\u010e\n\u0004\u0002\u0002\u010d\u010c\u0003",
    "\u0002\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f\u010d\u0003",
    "\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u0113\u0003",
    "\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112\u0114\u0007",
    "\f\u0002\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0113\u0114\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\b",
    "\'\u0002\u0002\u0116N\u0003\u0002\u0002\u0002\b\u0002\u00fb\u0100\u0106",
    "\u010f\u0113\u0003\b\u0002\u0002"].join("");


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
RomeLexer.NET = 17;
RomeLexer.IO = 18;
RomeLexer.IF = 19;
RomeLexer.IS = 20;
RomeLexer.NOT = 21;
RomeLexer.EQL = 22;
RomeLexer.LESS = 23;
RomeLexer.GRE = 24;
RomeLexer.AND = 25;
RomeLexer.OR = 26;
RomeLexer.NWRITE = 27;
RomeLexer.NREAD = 28;
RomeLexer.MOVE = 29;
RomeLexer.RIGHT = 30;
RomeLexer.LEFT = 31;
RomeLexer.LOOP = 32;
RomeLexer.NEWLINE = 33;
RomeLexer.WS = 34;
RomeLexer.IDENTIFIER = 35;
RomeLexer.NUMBER = 36;
RomeLexer.STRLIT = 37;
RomeLexer.ONE_LINE_COMMENT = 38;

RomeLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RomeLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RomeLexer.prototype.literalNames = [ null, "'('", "')'", "'{'", "'}'", "'start'", 
                                     "'end'", "'set'", "'numbers'", "'letters'", 
                                     "'free'", "'memory'", "'k_read'", "'s_write'", 
                                     "'write'", "'name'", "'import'", "'network'", 
                                     "'IO'", "'if'", "'is'", "'not'", "'equal'", 
                                     "'less'", "'greater'", "'and'", "'or'", 
                                     "'n_write'", "'n_read'", "'move'", 
                                     "'next'", "'last'", "'loop'", "'\n'", 
                                     "' '" ];

RomeLexer.prototype.symbolicNames = [ null, null, null, null, null, "START", 
                                      "END", "SET", "NUM", "LET", "FREE", 
                                      "MEM", "KREAD", "SWRITE", "WRITE", 
                                      "NAME", "IMP", "NET", "IO", "IF", 
                                      "IS", "NOT", "EQL", "LESS", "GRE", 
                                      "AND", "OR", "NWRITE", "NREAD", "MOVE", 
                                      "RIGHT", "LEFT", "LOOP", "NEWLINE", 
                                      "WS", "IDENTIFIER", "NUMBER", "STRLIT", 
                                      "ONE_LINE_COMMENT" ];

RomeLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "START", 
                                  "END", "SET", "NUM", "LET", "FREE", "MEM", 
                                  "KREAD", "SWRITE", "WRITE", "NAME", "IMP", 
                                  "NET", "IO", "IF", "IS", "NOT", "EQL", 
                                  "LESS", "GRE", "AND", "OR", "NWRITE", 
                                  "NREAD", "MOVE", "RIGHT", "LEFT", "LOOP", 
                                  "NEWLINE", "WS", "IDENTIFIER", "NUMBER", 
                                  "STRLIT", "ONE_LINE_COMMENT" ];

RomeLexer.prototype.grammarFileName = "Rome.g4";



exports.RomeLexer = RomeLexer;

