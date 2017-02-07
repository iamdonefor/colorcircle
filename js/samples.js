// init values
CURR_SAMPLES = ['indigo', 'darkolivegreen', 'hotpink', 'lightcyan', 'fuchsia', 'chocolate', 'darkslateblue', 'wheat'];

SAMPLES = [
    new Object({ 'id':'aliceblue', 'color': '#F0F8FF', 'colors':[0xf0,0xf8,0xff] }),
    new Object({ 'id':'antiquewhite', 'color': '#FAEBD7', 'colors':[0xfa,0xeb,0xd7] }),
    new Object({ 'id':'aqua', 'color': '#00FFFF', 'colors':[0x0,0xff,0xff] }),
    new Object({ 'id':'aquamarine', 'color': '#7FFFD4', 'colors':[0x7f,0xff,0xd4] }),
    new Object({ 'id':'azure', 'color': '#F0FFFF', 'colors':[0xf0,0xff,0xff] }),
    new Object({ 'id':'beige', 'color': '#F5F5DC', 'colors':[0xf5,0xf5,0xdc] }),
    new Object({ 'id':'bisque', 'color': '#FFE4C4', 'colors':[0xff,0xe4,0xc4] }),
    new Object({ 'id':'black', 'color': '#000000', 'colors':[0x0,0x0,0x0] }),
    new Object({ 'id':'blanchedalmond', 'color': '#FFEBCD', 'colors':[0xff,0xeb,0xcd] }),
    new Object({ 'id':'blue', 'color': '#0000FF', 'colors':[0x0,0x0,0xff] }),
    new Object({ 'id':'blueviolet', 'color': '#8A2BE2', 'colors':[0x8a,0x2b,0xe2] }),
    new Object({ 'id':'brown', 'color': '#A52A2A', 'colors':[0xa5,0x2a,0x2a] }),
    new Object({ 'id':'burlywood', 'color': '#DEB887', 'colors':[0xde,0xb8,0x87] }),
    new Object({ 'id':'cadetblue', 'color': '#5F9EA0', 'colors':[0x5f,0x9e,0xa0] }),
    new Object({ 'id':'chartreuse', 'color': '#7FFF00', 'colors':[0x7f,0xff,0x0] }),
    new Object({ 'id':'chocolate', 'color': '#D2691E', 'colors':[0xd2,0x69,0x1e] }),
    new Object({ 'id':'coral', 'color': '#FF7F50', 'colors':[0xff,0x7f,0x50] }),
    new Object({ 'id':'cornflowerblue', 'color': '#6495ED', 'colors':[0x64,0x95,0xed] }),
    new Object({ 'id':'cornsilk', 'color': '#FFF8DC', 'colors':[0xff,0xf8,0xdc] }),
    new Object({ 'id':'crimson', 'color': '#DC143C', 'colors':[0xdc,0x14,0x3c] }),
    new Object({ 'id':'cyan', 'color': '#00FFFF', 'colors':[0x0,0xff,0xff] }),
    new Object({ 'id':'darkblue', 'color': '#00008B', 'colors':[0x0,0x0,0x8b] }),
    new Object({ 'id':'darkcyan', 'color': '#008B8B', 'colors':[0x0,0x8b,0x8b] }),
    new Object({ 'id':'darkgoldenrod', 'color': '#B8860B', 'colors':[0xb8,0x86,0xb] }),
    new Object({ 'id':'darkgray', 'color': '#A9A9A9', 'colors':[0xa9,0xa9,0xa9] }),
    new Object({ 'id':'darkgrey', 'color': '#A9A9A9', 'colors':[0xa9,0xa9,0xa9] }),
    new Object({ 'id':'darkgreen', 'color': '#006400', 'colors':[0x0,0x64,0x0] }),
    new Object({ 'id':'darkkhaki', 'color': '#BDB76B', 'colors':[0xbd,0xb7,0x6b] }),
    new Object({ 'id':'darkmagenta', 'color': '#8B008B', 'colors':[0x8b,0x0,0x8b] }),
    new Object({ 'id':'darkolivegreen', 'color': '#556B2F', 'colors':[0x55,0x6b,0x2f] }),
    new Object({ 'id':'darkorange', 'color': '#FF8C00', 'colors':[0xff,0x8c,0x0] }),
    new Object({ 'id':'darkorchid', 'color': '#9932CC', 'colors':[0x99,0x32,0xcc] }),
    new Object({ 'id':'darkred', 'color': '#8B0000', 'colors':[0x8b,0x0,0x0] }),
    new Object({ 'id':'darksalmon', 'color': '#E9967A', 'colors':[0xe9,0x96,0x7a] }),
    new Object({ 'id':'darkseagreen', 'color': '#8FBC8F', 'colors':[0x8f,0xbc,0x8f] }),
    new Object({ 'id':'darkslateblue', 'color': '#483D8B', 'colors':[0x48,0x3d,0x8b] }),
    new Object({ 'id':'darkslategray', 'color': '#2F4F4F', 'colors':[0x2f,0x4f,0x4f] }),
    new Object({ 'id':'darkslategrey', 'color': '#2F4F4F', 'colors':[0x2f,0x4f,0x4f] }),
    new Object({ 'id':'darkturquoise', 'color': '#00CED1', 'colors':[0x0,0xce,0xd1] }),
    new Object({ 'id':'darkviolet', 'color': '#9400D3', 'colors':[0x94,0x0,0xd3] }),
    new Object({ 'id':'deeppink', 'color': '#FF1493', 'colors':[0xff,0x14,0x93] }),
    new Object({ 'id':'deepskyblue', 'color': '#00BFFF', 'colors':[0x0,0xbf,0xff] }),
    new Object({ 'id':'dimgray', 'color': '#696969', 'colors':[0x69,0x69,0x69] }),
    new Object({ 'id':'dimgrey', 'color': '#696969', 'colors':[0x69,0x69,0x69] }),
    new Object({ 'id':'dodgerblue', 'color': '#1E90FF', 'colors':[0x1e,0x90,0xff] }),
    new Object({ 'id':'firebrick', 'color': '#B22222', 'colors':[0xb2,0x22,0x22] }),
    new Object({ 'id':'floralwhite', 'color': '#FFFAF0', 'colors':[0xff,0xfa,0xf0] }),
    new Object({ 'id':'forestgreen', 'color': '#228B22', 'colors':[0x22,0x8b,0x22] }),
    new Object({ 'id':'fuchsia', 'color': '#FF00FF', 'colors':[0xff,0x0,0xff] }),
    new Object({ 'id':'gainsboro', 'color': '#DCDCDC', 'colors':[0xdc,0xdc,0xdc] }),
    new Object({ 'id':'ghostwhite', 'color': '#F8F8FF', 'colors':[0xf8,0xf8,0xff] }),
    new Object({ 'id':'gold', 'color': '#FFD700', 'colors':[0xff,0xd7,0x0] }),
    new Object({ 'id':'goldenrod', 'color': '#DAA520', 'colors':[0xda,0xa5,0x20] }),
    new Object({ 'id':'gray', 'color': '#808080', 'colors':[0x80,0x80,0x80] }),
    new Object({ 'id':'grey', 'color': '#808080', 'colors':[0x80,0x80,0x80] }),
    new Object({ 'id':'green', 'color': '#008000', 'colors':[0x0,0x80,0x0] }),
    new Object({ 'id':'greenyellow', 'color': '#ADFF2F', 'colors':[0xad,0xff,0x2f] }),
    new Object({ 'id':'honeydew', 'color': '#F0FFF0', 'colors':[0xf0,0xff,0xf0] }),
    new Object({ 'id':'hotpink', 'color': '#FF69B4', 'colors':[0xff,0x69,0xb4] }),
    new Object({ 'id':'indianred', 'color': '#CD5C5C', 'colors':[0xcd,0x5c,0x5c] }),
    new Object({ 'id':'indigo', 'color': '#4B0082', 'colors':[0x4b,0x0,0x82] }),
    new Object({ 'id':'ivory', 'color': '#FFFFF0', 'colors':[0xff,0xff,0xf0] }),
    new Object({ 'id':'khaki', 'color': '#F0E68C', 'colors':[0xf0,0xe6,0x8c] }),
    new Object({ 'id':'lavender', 'color': '#E6E6FA', 'colors':[0xe6,0xe6,0xfa] }),
    new Object({ 'id':'lavenderblush', 'color': '#FFF0F5', 'colors':[0xff,0xf0,0xf5] }),
    new Object({ 'id':'lawngreen', 'color': '#7CFC00', 'colors':[0x7c,0xfc,0x0] }),
    new Object({ 'id':'lemonchiffon', 'color': '#FFFACD', 'colors':[0xff,0xfa,0xcd] }),
    new Object({ 'id':'lightblue', 'color': '#ADD8E6', 'colors':[0xad,0xd8,0xe6] }),
    new Object({ 'id':'lightcoral', 'color': '#F08080', 'colors':[0xf0,0x80,0x80] }),
    new Object({ 'id':'lightcyan', 'color': '#E0FFFF', 'colors':[0xe0,0xff,0xff] }),
    new Object({ 'id':'lightgoldenrodyellow', 'color': '#FAFAD2', 'colors':[0xfa,0xfa,0xd2] }),
    new Object({ 'id':'lightgray', 'color': '#D3D3D3', 'colors':[0xd3,0xd3,0xd3] }),
    new Object({ 'id':'lightgrey', 'color': '#D3D3D3', 'colors':[0xd3,0xd3,0xd3] }),
    new Object({ 'id':'lightgreen', 'color': '#90EE90', 'colors':[0x90,0xee,0x90] }),
    new Object({ 'id':'lightpink', 'color': '#FFB6C1', 'colors':[0xff,0xb6,0xc1] }),
    new Object({ 'id':'lightsalmon', 'color': '#FFA07A', 'colors':[0xff,0xa0,0x7a] }),
    new Object({ 'id':'lightseagreen', 'color': '#20B2AA', 'colors':[0x20,0xb2,0xaa] }),
    new Object({ 'id':'lightskyblue', 'color': '#87CEFA', 'colors':[0x87,0xce,0xfa] }),
    new Object({ 'id':'lightslategray', 'color': '#778899', 'colors':[0x77,0x88,0x99] }),
    new Object({ 'id':'lightslategrey', 'color': '#778899', 'colors':[0x77,0x88,0x99] }),
    new Object({ 'id':'lightsteelblue', 'color': '#B0C4DE', 'colors':[0xb0,0xc4,0xde] }),
    new Object({ 'id':'lightyellow', 'color': '#FFFFE0', 'colors':[0xff,0xff,0xe0] }),
    new Object({ 'id':'lime', 'color': '#00FF00', 'colors':[0x0,0xff,0x0] }),
    new Object({ 'id':'limegreen', 'color': '#32CD32', 'colors':[0x32,0xcd,0x32] }),
    new Object({ 'id':'linen', 'color': '#FAF0E6', 'colors':[0xfa,0xf0,0xe6] }),
    new Object({ 'id':'magenta', 'color': '#FF00FF', 'colors':[0xff,0x0,0xff] }),
    new Object({ 'id':'maroon', 'color': '#800000', 'colors':[0x80,0x0,0x0] }),
    new Object({ 'id':'mediumaquamarine', 'color': '#66CDAA', 'colors':[0x66,0xcd,0xaa] }),
    new Object({ 'id':'mediumblue', 'color': '#0000CD', 'colors':[0x0,0x0,0xcd] }),
    new Object({ 'id':'mediumorchid', 'color': '#BA55D3', 'colors':[0xba,0x55,0xd3] }),
    new Object({ 'id':'mediumpurple', 'color': '#9370DB', 'colors':[0x93,0x70,0xdb] }),
    new Object({ 'id':'mediumseagreen', 'color': '#3CB371', 'colors':[0x3c,0xb3,0x71] }),
    new Object({ 'id':'mediumslateblue', 'color': '#7B68EE', 'colors':[0x7b,0x68,0xee] }),
    new Object({ 'id':'mediumspringgreen', 'color': '#00FA9A', 'colors':[0x0,0xfa,0x9a] }),
    new Object({ 'id':'mediumturquoise', 'color': '#48D1CC', 'colors':[0x48,0xd1,0xcc] }),
    new Object({ 'id':'mediumvioletred', 'color': '#C71585', 'colors':[0xc7,0x15,0x85] }),
    new Object({ 'id':'midnightblue', 'color': '#191970', 'colors':[0x19,0x19,0x70] }),
    new Object({ 'id':'mintcream', 'color': '#F5FFFA', 'colors':[0xf5,0xff,0xfa] }),
    new Object({ 'id':'mistyrose', 'color': '#FFE4E1', 'colors':[0xff,0xe4,0xe1] }),
    new Object({ 'id':'moccasin', 'color': '#FFE4B5', 'colors':[0xff,0xe4,0xb5] }),
    new Object({ 'id':'navajowhite', 'color': '#FFDEAD', 'colors':[0xff,0xde,0xad] }),
    new Object({ 'id':'navy', 'color': '#000080', 'colors':[0x0,0x0,0x80] }),
    new Object({ 'id':'oldlace', 'color': '#FDF5E6', 'colors':[0xfd,0xf5,0xe6] }),
    new Object({ 'id':'olive', 'color': '#808000', 'colors':[0x80,0x80,0x0] }),
    new Object({ 'id':'olivedrab', 'color': '#6B8E23', 'colors':[0x6b,0x8e,0x23] }),
    new Object({ 'id':'orange', 'color': '#FFA500', 'colors':[0xff,0xa5,0x0] }),
    new Object({ 'id':'orangered', 'color': '#FF4500', 'colors':[0xff,0x45,0x0] }),
    new Object({ 'id':'orchid', 'color': '#DA70D6', 'colors':[0xda,0x70,0xd6] }),
    new Object({ 'id':'palegoldenrod', 'color': '#EEE8AA', 'colors':[0xee,0xe8,0xaa] }),
    new Object({ 'id':'palegreen', 'color': '#98FB98', 'colors':[0x98,0xfb,0x98] }),
    new Object({ 'id':'paleturquoise', 'color': '#AFEEEE', 'colors':[0xaf,0xee,0xee] }),
    new Object({ 'id':'palevioletred', 'color': '#DB7093', 'colors':[0xdb,0x70,0x93] }),
    new Object({ 'id':'papayawhip', 'color': '#FFEFD5', 'colors':[0xff,0xef,0xd5] }),
    new Object({ 'id':'peachpuff', 'color': '#FFDAB9', 'colors':[0xff,0xda,0xb9] }),
    new Object({ 'id':'peru', 'color': '#CD853F', 'colors':[0xcd,0x85,0x3f] }),
    new Object({ 'id':'pink', 'color': '#FFC0CB', 'colors':[0xff,0xc0,0xcb] }),
    new Object({ 'id':'plum', 'color': '#DDA0DD', 'colors':[0xdd,0xa0,0xdd] }),
    new Object({ 'id':'powderblue', 'color': '#B0E0E6', 'colors':[0xb0,0xe0,0xe6] }),
    new Object({ 'id':'purple', 'color': '#800080', 'colors':[0x80,0x0,0x80] }),
    new Object({ 'id':'rebeccapurple', 'color': '#663399', 'colors':[0x66,0x33,0x99] }),
    new Object({ 'id':'red', 'color': '#FF0000', 'colors':[0xff,0x0,0x0] }),
    new Object({ 'id':'rosybrown', 'color': '#BC8F8F', 'colors':[0xbc,0x8f,0x8f] }),
    new Object({ 'id':'royalblue', 'color': '#4169E1', 'colors':[0x41,0x69,0xe1] }),
    new Object({ 'id':'saddlebrown', 'color': '#8B4513', 'colors':[0x8b,0x45,0x13] }),
    new Object({ 'id':'salmon', 'color': '#FA8072', 'colors':[0xfa,0x80,0x72] }),
    new Object({ 'id':'sandybrown', 'color': '#F4A460', 'colors':[0xf4,0xa4,0x60] }),
    new Object({ 'id':'seagreen', 'color': '#2E8B57', 'colors':[0x2e,0x8b,0x57] }),
    new Object({ 'id':'seashell', 'color': '#FFF5EE', 'colors':[0xff,0xf5,0xee] }),
    new Object({ 'id':'sienna', 'color': '#A0522D', 'colors':[0xa0,0x52,0x2d] }),
    new Object({ 'id':'silver', 'color': '#C0C0C0', 'colors':[0xc0,0xc0,0xc0] }),
    new Object({ 'id':'skyblue', 'color': '#87CEEB', 'colors':[0x87,0xce,0xeb] }),
    new Object({ 'id':'slateblue', 'color': '#6A5ACD', 'colors':[0x6a,0x5a,0xcd] }),
    new Object({ 'id':'slategray', 'color': '#708090', 'colors':[0x70,0x80,0x90] }),
    new Object({ 'id':'slategrey', 'color': '#708090', 'colors':[0x70,0x80,0x90] }),
    new Object({ 'id':'snow', 'color': '#FFFAFA', 'colors':[0xff,0xfa,0xfa] }),
    new Object({ 'id':'springgreen', 'color': '#00FF7F', 'colors':[0x0,0xff,0x7f] }),
    new Object({ 'id':'steelblue', 'color': '#4682B4', 'colors':[0x46,0x82,0xb4] }),
    new Object({ 'id':'tan', 'color': '#D2B48C', 'colors':[0xd2,0xb4,0x8c] }),
    new Object({ 'id':'teal', 'color': '#008080', 'colors':[0x0,0x80,0x80] }),
    new Object({ 'id':'thistle', 'color': '#D8BFD8', 'colors':[0xd8,0xbf,0xd8] }),
    new Object({ 'id':'tomato', 'color': '#FF6347', 'colors':[0xff,0x63,0x47] }),
    new Object({ 'id':'turquoise', 'color': '#40E0D0', 'colors':[0x40,0xe0,0xd0] }),
    new Object({ 'id':'violet', 'color': '#EE82EE', 'colors':[0xee,0x82,0xee] }),
    new Object({ 'id':'wheat', 'color': '#F5DEB3', 'colors':[0xf5,0xde,0xb3] }),
    new Object({ 'id':'white', 'color': '#FFFFFF', 'colors':[0xff,0xff,0xff] }),
    new Object({ 'id':'whitesmoke', 'color': '#F5F5F5', 'colors':[0xf5,0xf5,0xf5] }),
    new Object({ 'id':'yellow', 'color': '#FFFF00', 'colors':[0xff,0xff,0x0] }),
    new Object({ 'id':'yellowgreen', 'color': '#9ACD32', 'colors':[0x9a,0xcd,0x32] })
];