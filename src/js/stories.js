let allStories = [
    {'title': '世界的构成', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '造物主', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '盘古与盘瓠', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '女娲的功绩', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '婚姻之神的女娲', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '女娲与伏羲', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '天梯', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '伏羲与燧人', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '廪君与盐水女神', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '填海、追日', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': ' 断首、触山', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '归墟五神山', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '发现药草的神农', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '炎帝和他的后裔', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '炎帝诸女', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '黄帝和昆仑山', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '视肉、离朱', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '神国最高统治者', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '黄炎之争', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '炎帝与灶神', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '炎帝与灶神', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '战神蚩尤', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '黄帝神话的仙话化', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '黄帝制器', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '蚕桑的神话', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '牛郎织女', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '牛女神话的近亲和旁支', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '少昊鸟国', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '少昊神话的西移', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '颛顼“绝地天通”', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '人神之间的颛顼', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '疫神帝颛顼', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '《山海经》所有怪物', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '帝俊的出现', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '创造发明者', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '使四鸟', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '帝俊、帝喾和舜', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '始祖的诞生', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '尧射日及其他', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '沉湮的丹朱神话', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '舜服野象', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '鸟工、龙裳', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '舜的亲属', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '羿射日除害', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '“十日”始末', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '羿“射河伯，妻雒嫔”', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '河伯杂评', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '嫦娥奔月', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '西王母', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '仙人不死', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '逢蒙杀羿', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '尧洪水', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '神国的叛逆者', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '禹承父业', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '禹逐共工', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '助禹治水的诸神', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '无支祁', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '涂山氏', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '禹游历九州万国', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '大人国和小人国', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '长寿国', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '异形国和异禀国', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '神性英雄的堕落', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '益与启的斗争', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '有穷后羿', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '孔甲畜龙', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '空桑中的婴儿', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '成汤伐夏', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '桀与妹喜', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '傅说星', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '羑里之囚', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '太公遇文王', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '武王伐纣', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '纣与妲己', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '穆王西游', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '徐偃王', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '檿弧萁服', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '苌弘之死', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '仙人王子乔', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '老子与关令尹喜', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '眉间尺', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '韩朋鸟', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '鲁班的传说', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '秦始皇', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '蜀开国者', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '杜宇与鳖灵', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '五丁开路', 'content': '神话数据库有待完善...<br>敬请期待'},
    {'title': '李冰斗江神', 'content': '神话数据库有待完善...<br>敬请期待'}
];

let material_colors = ["red", "pink", "purple", "deep-purple",
    "indigo", "blue", "light-blue", "cyan", "teal",
    "green", "light-green", "lime", "amber", "orange",
    "deep-orange", "brown", "blue-grey", "grey"];

let story_titles = ["世界的构成", "造物主", "盘古与盘瓠", "女娲的功绩", "婚姻之神的女娲", "女娲与伏羲", "天梯",
    "伏羲与燧人", "廪君与盐水女神", "填海、追日", " 断首、触山", "归墟五神山", "发现药草的神农",
    "炎帝和他的后裔", "炎帝诸女", "黄帝和昆仑山", "视肉、离朱", "神国最高统治者", "黄炎之争", "炎帝与灶神",
    "炎帝与灶神", "战神蚩尤", "黄帝神话的仙话化", "黄帝制器", "蚕桑的神话", "牛郎织女", "牛女神话的近亲和旁支",
    "少昊鸟国", "少昊神话的西移", "颛顼“绝地天通”", "人神之间的颛顼", "疫神帝颛顼", "《山海经》所有怪物",
    "帝俊的出现", "创造发明者", "使四鸟", "帝俊、帝喾和舜", "始祖的诞生", "尧射日及其他", "沉湮的丹朱神话",
    "舜服野象","鸟工、龙裳","舜的亲属","羿射日除害","“十日”始末","羿“射河伯，妻雒嫔”","河伯杂评","嫦娥奔月",
    "西王母","仙人不死","逢蒙杀羿","尧洪水","神国的叛逆者","禹承父业","禹逐共工","助禹治水的诸神","无支祁",
    "涂山氏","禹游历九州万国","大人国和小人国","长寿国","异形国和异禀国","神性英雄的堕落","益与启的斗争",
    "有穷后羿","孔甲畜龙","空桑中的婴儿","成汤伐夏","桀与妹喜","傅说星","羑里之囚","太公遇文王","武王伐纣",
    "纣与妲己","穆王西游","徐偃王","檿弧萁服","苌弘之死","仙人王子乔","老子与关令尹喜","眉间尺","韩朋鸟",
    "鲁班的传说","秦始皇","蜀开国者","杜宇与鳖灵","五丁开路","李冰斗江神"];

export
{
    allStories,
    material_colors,
    story_titles
}
