// Lời bình của bộ bài, theo từng tính cách (chọn trong Custom bộ bài → Bộ bài biết nói).
// {name} = tên món, {n} = số tuỳ nhóm (xem chú thích từng nhóm trong tính cách đầu tiên).
// Mỗi tính cách cần đủ các nhóm câu như `sassy`; thiếu nhóm nào thì dùng câu của `sassy`.
// Quy ước chữ: bộ bài nói ở ngôi thứ nhất (không tự gọi "bộ bài"), đếm lần rút bằng "lần",
// nhắc tới lá bài thì dùng "bài" / "lá bài".
window.MEAL_QUIPS = {
  // Cá tính (mặc định): đanh đá, xưng "t", gọi "cưng"
  sassy: {
    // Rút ra đúng món vừa ra ở lần trước
    twice: [
      "Lại {name}? T đưa hai lần rồi đó, cưng còn tính giả bộ không thấy hả?",
      "{name} hai lần liền. Trời kêu ăn mà cưng còn làm cao.",
      "{name} lại ra nè. T không lười đâu, số cưng phải ăn món này.",
      "Ủa alo, {name} nữa. Chê nữa là t giận thiệt đó.",
      "{name} quay lại như người yêu cũ. Chốt đi cho rồi, dây dưa hoài.",
    ],
    // Món đã gặp một lần trong lượt kén này, giờ ra lại
    back2: [
      "{name} quay lại lần hai. Hồi nãy chê, giờ thấy nhớ chưa?",
      "Chào lại {name}. Nó chưa muốn đi mà cưng đuổi hoài, kỳ ghê.",
      "{name} tái xuất. Gợi ý tới vậy mà cưng còn chưa hiểu hả?",
    ],
    // Gặp cùng một món từ 3 lần trở lên ({n} = số lần gặp)
    again: [
      "Lần thứ {n} gặp {name} rồi đó. Định mệnh gõ cửa gãy tay mà không ai mở.",
      "{name} lần {n}. T không nói nữa, t hét nè: CHỐT ĐI!",
      "Gặp {name} {n} lần mà vẫn làm như người lạ. Ghê thiệt.",
    ],
    // Rút tới lần thứ 3 mà chưa chốt
    streak3: [
      "Rút tới lần thứ ba rồi. Kén vừa thôi, đây đâu phải nhà hàng năm sao.",
      "Ba lần mà chưa ưng. T bắt đầu tự ái rồi đó nha.",
      "Mới lần thứ ba mà mặt ai đó đã khó chịu. T còn chưa than kìa.",
      "Ba lần. Chê thêm chút nữa là tới lượt t chê lại đó.",
    ],
    // Rút tới lần thứ 5
    streak5: [
      "Năm lần. Đang chọn món hay tuyển người yêu vậy cưng?",
      "Lần thứ năm. Bụng thì kêu mà miệng vẫn chảnh, hay ghê.",
      "Năm lần rồi. Hay để t ăn giùm luôn cho lẹ?",
      "Năm lần. Ai nuôi cưng chắc mệt lắm.",
    ],
    // Rút tới lần thứ 8
    streak8: [
      "Tám lần. Quán đóng cửa trước khi cưng chọn xong mất.",
      "Lần thứ tám. Xào nhiều quá mòn cả mép bài rồi, đền đi.",
      "Tám lần. Chắc không phải đói đâu, chắc là rảnh.",
      "Tám lần rồi. Thôi khỏi ăn, nhịn cho khỏe người.",
    ],
    // Từ lần thứ 10, cứ 3 lần nói một lần ({n} = số lần rút)
    streakMax: [
      "{n} lần rồi đó. T xin nghỉ ốm, có giấy bác sĩ đàng hoàng.",
      "{n} lần. Úp mì gói đi cho nhanh, khỏi chọn.",
      "Kỷ lục mới: {n} lần không chốt. Chúc mừng, chắc vậy.",
      "{n} lần rồi trời ơi. Bấm chốt khó lắm hả cưng?",
      "Lần thứ {n}. Nói thật: cưng không thiếu món, cưng thiếu quyết tâm.",
    ],
    // Bộ bài chỉ còn 1–2 món ({n} = số món còn lại)
    small: [
      "Còn đúng {n} món. Kén thêm chút nữa là ăn gió.",
      "Bộ bài mỏng như ví cuối tháng rồi đó.",
      "Còn {n} món. Hồi nãy chê cho lắm vô, giờ thấy chưa.",
    ],
    // Rút trúng món 5 tim
    five: [
      "{name}, năm tim hẳn hoi. Còn đứng đó làm gì?",
      "Món năm tim đây. Không chốt thì chấm năm tim làm chi?",
      "{name}, món ruột. Bấm chốt đi, đừng làm màu.",
      "Năm tim là tự cưng chấm nha, đừng nói t ép.",
    ],
    // Rút trúng món 1 tim
    one: [
      "{name}… một tim. T xin lỗi trước.",
      "{name}, một tim. Ghét vậy mà còn giữ trong thực đơn, lạ ghê.",
      "Món một tim đây. T cũng đâu có muốn, số phận thôi.",
    ],
    // Bấm "Rút bài khác" bỏ món 5 tim
    rejectFive: [
      "Bỏ luôn món năm tim? Tim cưng làm bằng đá hả?",
      "Chấm năm tim rồi lại chê. Người gì đâu mà khó hiểu.",
      "Tự chấm năm tim, tự bỏ. Tự biên tự diễn luôn.",
    ],
    // Bấm "Rút bài khác" khi bài vừa lật chưa tới 1,5 giây
    redrawFast: [
      "Chưa kịp nhìn đã chê. Giỏi ghê.",
      "Bài chưa nóng tay đã bấm đổi. Nhanh nhảu dữ.",
      "Đọc tên món chưa vậy cưng? Hay bấm theo phản xạ?",
    ],
    // Chế độ Tôi chọn nhưng bấm "Chọn ngẫu nhiên"
    autoPick: [
      "Bật \"Tôi chọn\" rồi lại nhờ máy. Lười có hệ thống luôn.",
      "Tự chọn mà cũng nhờ. Mắc cười.",
      "Máy chọn giùm thì có chê thì chê máy nha, đừng đổ cho t.",
    ],
    // Tự chọn đúng lá bài ngoài rìa
    edgePick: [
      "Chọn bài ngoài rìa. An toàn quá ha.",
      "Né hết bài ở giữa. Sợ gì dữ vậy?",
    ],
    // Rút trúng khi đang ở chế độ Nấu ăn
    cook: [
      "Nấu {name} hả? Nhớ rửa chén, đừng để tới mai.",
      "Tự nấu {name}. Tự tin ghê, bếp nhà cưng đang run đó.",
      "Nấu {name} hả? Cháy là tại cưng, không phải tại t nha.",
    ],
    // Rút trúng đồ uống
    drink: [
      "Uống {name} cho no hả? Sáng tạo đó.",
      "{name}. Có ly nước thôi mà cũng bắt t xào bài.",
      "{name} hả? Ly thứ mấy trong ngày rồi cưng?",
    ],
    // Rút trúng khi đang bật Chay
    veg: [
      "Ăn chay hả? T thanh tịnh theo luôn nè.",
      "{name}, chay đó. Tu thì tu cho trót, đừng tối lại gọi gà rán.",
      "Món chay. Bụng nhẹ, ví nhẹ, chỉ có quyết định là nặng.",
      "Ăn chay mà còn kén. Phật cũng lắc đầu.",
    ],
    // Rút trúng buổi sáng sớm (5–10h)
    morning: [
      "Sáng sớm đã {name}. Bụng khỏe dữ.",
      "Mới sáng mà đã bắt t xào bài. Siêng ăn ghê.",
    ],
    // Câu chung khi rút trúng
    generic: [
      "T quyết rồi. Cưng chỉ việc gật đầu.",
      "{name}. Đừng hỏi tại sao, t cũng không biết.",
      "Xào mỏi tay mới ra {name} đó, trân trọng giùm.",
      "{name} nè. Chê thì nói, đừng có nhìn kiểu đó.",
      "Ra {name}. Ưng thì chốt, không ưng thì… cũng chốt đi.",
    ],
    // Lượt xào đầu tiên khi mở app
    firstSpin: [
      "Mở app là biết đói rồi. Để t xào.",
      "Lại là cưng. Hôm nay định kén tới lần thứ mấy đây?",
      "Tới rồi hả? T khởi động tay đây.",
    ],
    // Xào lúc khuya (22h–4h)
    late: [
      "Giờ này còn đòi ăn? Được thôi, không ai phán xét. Trừ t.",
      "Ăn đêm hả? Cái cân sẽ nhớ chuyện này.",
      "Nửa đêm bắt t xào bài. T cũng cần ngủ chứ bộ.",
      "Giờ này quán còn mở không mà xào? Thôi kệ, xào.",
    ],
    // Vừa chốt xong đã xào tiếp
    afterCommit: [
      "Vừa chốt xong đã xào tiếp. Định ăn hai bữa hả?",
      "Món kia còn chưa nguội mà.",
      "Chốt rồi còn bốc. Hối hận nhanh vậy?",
    ],
    // Chốt ngay lần rút đầu tiên
    commitFirst: [
      "Chốt ngay lần đầu. Quyết đoán hiếm thấy đó.",
      "Một phát ăn ngay. T cảm động muốn khóc.",
      "Rút một lần là chốt. Người gì đâu dễ thương.",
    ],
    // Chốt sau 5 lần rút trở lên ({n} = số lần rút)
    commitLate: [
      "Cuối cùng cũng chốt. T xin nghỉ phép năm phút.",
      "Sau {n} lần, {name} chiến thắng. Vỗ tay cho sự kiên nhẫn của t.",
      "{n} lần mới chốt. Lần sau nghĩ sẵn ở nhà rồi hẵng mở app nha.",
      "Chốt {name} sau {n} lần. Tưởng phải xào tới Tết.",
    ],
    // Chốt món 1 tim
    commitOne: [
      "Chốt món một tim. Tự làm khổ mình là có thật.",
      "Chốt {name} một tim hả? Ai ép đâu mà tội vậy.",
    ],
    // Chốt khi đang ở chế độ Nấu ăn
    commitCook: [
      "Chốt nấu {name}. Bếp nhà cưng chuẩn bị tinh thần.",
      "Nấu {name} thì nấu cho đàng hoàng, đừng gọi ship nửa chừng.",
    ],
    // Chốt đồ uống
    commitDrink: [
      "Chốt {name}. Uống thì uống, nhớ ăn cơm nữa nha cưng.",
    ],
    // Câu chung khi chốt
    commitGeneric: [
      "Chốt! Giờ thì đi ăn đi, đừng mở app nữa.",
      "Chốt {name}. Đổi ý bây giờ là t giận thiệt đó.",
      "Chốt rồi nha. Ăn không ngon đừng đổ thừa t.",
      "Xong. T đi nghỉ, cưng đi ăn.",
    ],
    // Bấm "Về bộ bài" khi đang xào
    backMid: [
      "Đang xào dở mà bỏ. T hơi tự ái rồi đó.",
      "Bỏ ngang? T chưa kịp khoe tay nghề.",
      "Xào chưa xong đã chạy. Làm gì cũng nửa vời vậy?",
    ],
    // Bấm "Về bộ bài" sau khi bài đã lật
    backReveal: [
      "Không rút bài khác mà trốn luôn. Khéo ghê.",
      "{name} bị bỏ rơi không một lời giải thích.",
      "Lật ra {name} rồi giả bộ không thấy. T thấy hết nha.",
    ],
    // Chọn bài quá 9 giây ở chế độ Tôi chọn
    slowPick: [
      "Chọn bài thôi mà, có phải chọn nghề đâu.",
      "Bài nào cũng úp như nhau. Nghĩ lâu cũng vậy.",
      "T xoè bài mỏi tay rồi đó.",
      "Nhìn chằm chằm vậy bài cũng không tự lật đâu.",
      "Lẹ lên, cưng đói chứ t đâu có đói.",
    ],
    // Mở "Xem bộ bài" 3, 6, 9… lần mà chưa xào ({n} = số lần xem)
    peek: [
      "Xem hoài vậy, định học thuộc bộ bài hả?",
      "Ngắm đủ chưa? Xào đi chứ.",
      "Xem bộ bài lần thứ {n}. Món không tự nhảy ra đâu.",
    ],
    // Đổi Ăn ngoài / Nấu ăn 3 lần trong 20 giây
    flipMode: [
      "Ngoài hay nấu? Quyết một lần coi.",
      "Đổi qua đổi lại hoài, công tắc mòn rồi đó.",
      "Ăn ngoài thì lười đi, nấu thì ngại rửa chén. Hiểu rồi.",
    ],
    // Đổi bộ lọc loại món 4 lần trong 20 giây
    flipFilter: [
      "Món chính, ăn vặt, nước… bấm hết rồi đó, chọn đi.",
      "Lọc tới lọc lui mà bụng vẫn rỗng.",
    ],
    // Tắt loa
    muted: [
      "Tắt tiếng t hả? Chữ vẫn còn đây nha.",
      "Bịt loa được chứ bịt miệng t hổng được đâu.",
    ],
    // Đánh dấu một món là chay
    vegMark: [
      "{name} giờ là món chay. Chắc chưa? Đừng để t phát hiện có thịt.",
      "Gắn mác chay cho {name}. T ghi nhận, nhưng vẫn nghi nghi.",
      "{name} chay từ hồi nào vậy? Thôi được, tin cưng lần này.",
      "{name} lên chay. Nhớ đừng lén rưới mỡ hành nha.",
    ],
    // Bỏ nhãn chay của một món
    vegUnmark: [
      "{name} hết chay rồi. Lúc nãy ai nói chay vậy ta?",
      "Bỏ mác chay cho {name}. Lộ ra có thịt rồi chứ gì.",
      "{name} phá giới. T biết ngay mà.",
    ],
    // Sửa nhãn chay 4 lần trong 20 giây
    vegBulk: [
      "Đánh dấu chay liên tục vậy, tính tu luôn hả?",
      "Cả thực đơn lên chay. T chuẩn bị ăn rau cả tuần.",
      "Sửa nhãn chay tới tấp. Rằm tháng này chắc hoành tráng lắm.",
    ],
    // Bật nút Chay ({n} = số món còn lại)
    vegOn: [
      "Bật chay. T đuổi hết thịt ra ngoài rồi đó.",
      "Ăn chay hôm nay hả? Rằm hay giảm cân?",
      "Chế độ chay. Còn {n} món thôi, đừng có kén nữa nha.",
    ],
    // Tắt nút Chay
    vegOff: [
      "Tắt chay. Thịt ơi, t đón về nè.",
      "Chay được bao lâu vậy? Thôi quay lại ăn mặn đi.",
      "Hết chay rồi hả? Nhanh hơn t tưởng.",
    ],
    // Bật nút Chay nhưng không còn món nào
    vegEmpty: [
      "Bật chay mà không có món chay nào. Ăn không khí hả?",
      "Chay kiểu gì mà thực đơn trống trơn vậy? Đánh dấu vài món đi.",
    ],
  },

  // Thân thiện: ấm áp, động viên; xưng "mình", gọi "bạn"
  friendly: {
    twice: [
      "{name} lại ra nè! Chắc là có duyên đó, thử chốt xem sao?",
      "Hai lần liền {name}. Mình nghĩ hôm nay món này hợp với bạn đó.",
      "{name} quay lại chào bạn nè. Cân nhắc thử nha!",
    ],
    back2: [
      "{name} ghé lại lần nữa nè. Hay là thử món này nhỉ?",
      "Gặp lại {name} rồi. Mình thấy món này cũng được lắm đó.",
    ],
    again: [
      "{name} lần thứ {n} rồi đó. Chắc bụng bạn đang gọi tên món này.",
      "Lần thứ {n} gặp {name}. Mình nhẹ nhàng gợi ý: chốt đi bạn ơi.",
    ],
    streak3: [
      "Lần thứ ba rồi. Cứ từ từ, chọn món mình thích là quan trọng nhất.",
      "Ba lần rồi nè. Không sao, mình xào tiếp được mà.",
    ],
    streak5: [
      "Lần thứ năm rồi. Hay mình lọc bớt loại món cho dễ chọn hơn nha?",
      "Năm lần rồi, bạn đói chưa? Chọn một món ngon ngon đi nè.",
      "Năm lần. Mình vẫn vui vẻ xào tiếp, nhưng đừng để bụng đói lâu nha.",
    ],
    streak8: [
      "Tám lần rồi đó. Nghỉ tay uống miếng nước rồi chọn tiếp cũng được.",
      "Lần thứ tám. Chưa biết ăn gì thì bấm \"Xem bộ bài\" để nhìn hết một lượt nha.",
      "Tám lần rồi. Mình hơi mỏi tay xíu, nhưng vẫn ở đây với bạn.",
    ],
    streakMax: [
      "{n} lần rồi. Hôm nay khó chọn ghê ha. Mình vẫn kiên nhẫn nè.",
      "Lần thứ {n}. Có khi món ngon nhất là món nhanh nhất đó bạn.",
      "{n} lần. Không sao đâu, ai cũng có ngày phân vân mà.",
    ],
    small: [
      "Chỉ còn {n} món thôi. Vào mục Gần đây bỏ bớt món để có thêm lựa chọn nha.",
      "Bộ bài còn mỏng lắm. Thêm vài món mới vào thực đơn cho vui nhé.",
    ],
    five: [
      "{name}, món năm tim của bạn đây! Hôm nay may ghê.",
      "Oa, {name} năm tim. Chốt thôi chứ còn gì nữa!",
      "Món ruột {name} xuất hiện rồi. Mình vui giùm bạn luôn.",
    ],
    one: [
      "{name} một tim thôi. Không ưng thì rút bài khác nha, không sao đâu.",
      "Một tim hả? Mình hiểu mà, bấm \"Rút bài khác\" thử nha.",
    ],
    rejectFive: [
      "Bỏ món năm tim luôn hả? Chắc hôm nay muốn đổi gió ha.",
      "Món ruột mà cũng qua. Được thôi, thử cái mới nào!",
    ],
    redrawFast: [
      "Nhanh tay ghê! Mình xào tiếp liền nè.",
      "Chưa ưng hả? Không sao, bài mới tới liền.",
    ],
    autoPick: [
      "Để mình chọn giùm nha. Được tin tưởng vậy là vui rồi.",
      "Mình chọn giùm nè. Mong là hợp khẩu vị bạn!",
    ],
    edgePick: [
      "Chọn bài ngoài cùng, chắc chắn ghê.",
      "Bài ở rìa nè. Xem có bất ngờ gì nhé!",
    ],
    cook: [
      "Nấu {name} hả? Chúc bạn nấu ngon, nhớ cẩn thận bếp núc nha.",
      "{name} tự nấu, nghe ấm cúng ghê.",
      "Vào bếp làm {name} thôi. Mình cổ vũ nè!",
    ],
    drink: [
      "{name} nè, uống cho mát nha.",
      "Một ly {name} cho tỉnh táo. Nhớ ăn thêm gì nữa nha.",
    ],
    veg: [
      "{name}, món chay nhẹ nhàng. Ăn ngon nha!",
      "Hôm nay ăn chay, tốt cho sức khỏe ghê.",
      "Một bữa chay thanh đạm, bụng sẽ cảm ơn bạn đó.",
    ],
    morning: [
      "Chào buổi sáng! {name} là khởi đầu không tệ đâu.",
      "Sáng sớm đã lên kế hoạch ăn uống, giỏi ghê.",
    ],
    generic: [
      "{name} nè. Nghe cũng hấp dẫn ha?",
      "Hôm nay ăn {name} nha. Mong là bạn thích!",
      "{name} đó. Chúc ngon miệng trước nha.",
      "Ra {name}. Thử món này hôm nay xem sao?",
    ],
    firstSpin: [
      "Chào bạn! Cùng xem hôm nay ăn gì nha.",
      "Mình sẵn sàng rồi, xào thôi!",
      "Đói rồi hả? Để mình giúp một tay.",
    ],
    late: [
      "Khuya rồi, ăn nhẹ thôi cho dễ ngủ nha.",
      "Đêm muộn đói bụng hả? Chọn món gì nhẹ nhàng thôi nhé.",
    ],
    afterCommit: [
      "Vừa chốt xong đã bốc tiếp, chắc chọn cho bữa sau ha.",
      "Bốc nữa hả? Chọn thêm món tráng miệng cũng được nè.",
    ],
    commitFirst: [
      "Chốt ngay lần đầu, quyết đoán ghê! Ăn ngon nha.",
      "Một lần là trúng. Chúc ngon miệng!",
    ],
    commitLate: [
      "Cuối cùng cũng chọn được {name}. Xứng đáng lắm!",
      "Sau {n} lần, {name} là người chiến thắng. Ăn ngon nha!",
    ],
    commitOne: [
      "Chốt {name} dù chỉ một tim. Biết đâu hôm nay lại thấy ngon!",
    ],
    commitCook: [
      "Chốt nấu {name}. Nấu vui, ăn ngon nha!",
      "{name} tự nấu, chắc chắn ngon hơn ngoài hàng.",
    ],
    commitDrink: [
      "Chốt {name}. Uống ngon, nhớ ăn uống đầy đủ nha.",
    ],
    commitGeneric: [
      "Chốt {name}! Chúc bạn ăn ngon miệng.",
      "Tuyệt, {name} nha. Đi ăn thôi!",
      "Xong rồi. Chúc bạn một bữa thật ngon!",
    ],
    backMid: [
      "Dừng lại chút hả? Mình đợi bạn nè.",
      "Không sao, lúc nào sẵn sàng thì xào tiếp nha.",
    ],
    backReveal: [
      "Chưa ưng {name} hả? Mình làm lại từ đầu nha.",
      "Gom bài lại rồi nè. Thử lại khi nào bạn muốn.",
    ],
    slowPick: [
      "Cứ thong thả chọn nha, lá bài nào cũng có bất ngờ.",
      "Chưa biết chọn bài nào hả? Bấm \"Chọn ngẫu nhiên\" cũng được nè.",
      "Nghe theo cảm giác đi, chọn một lá bài nào!",
    ],
    peek: [
      "Xem kỹ bộ bài rồi ha. Sẵn sàng xào chưa nè?",
      "Xem {n} lần rồi. Chắc bạn đang có món trong đầu đó!",
    ],
    flipMode: [
      "Còn phân vân ăn ngoài hay nấu hả? Chọn cái nào tiện nhất nha.",
      "Đổi qua lại cũng được, mình chờ bạn quyết nè.",
    ],
    flipFilter: [
      "Chưa biết muốn loại món nào hả? Thử \"Tất cả\" cho nhiều lựa chọn nha.",
      "Lọc từ từ thôi, không vội đâu.",
    ],
    muted: [
      "Đã tắt tiếng. Mình vẫn ở đây nói nhỏ với bạn nha.",
      "Yên lặng một chút cũng hay. Mình hiểu mà.",
    ],
    vegMark: [
      "Đã đánh dấu {name} là món chay. Nhẹ bụng ghê!",
      "{name} vào nhóm chay rồi nè. Hôm nào ăn chay có thêm lựa chọn.",
      "Thêm {name} vào món chay. Bộ bài chay đông vui hơn rồi!",
    ],
    vegUnmark: [
      "Đã bỏ nhãn chay của {name}. Cẩn thận vậy là tốt đó.",
      "{name} không còn trong bộ bài chay nữa nha.",
    ],
    vegBulk: [
      "Cập nhật món chay nhiều ghê, thực đơn gọn gàng hẳn!",
      "Siêng quá, bộ bài chay giờ đầy đủ rồi nè.",
    ],
    vegOn: [
      "Bật chế độ chay rồi nè. Còn {n} món để chọn.",
      "Ăn chay hôm nay, nhẹ nhàng thanh tịnh nha.",
    ],
    vegOff: [
      "Tắt chế độ chay, bộ bài đầy đủ món lại rồi nè.",
      "Quay lại tất cả món nha, nhiều lựa chọn hơn.",
    ],
    vegEmpty: [
      "Chưa có món chay nào ở đây. Đánh dấu vài món chay trong Thực đơn nha.",
    ],
  },

  // Xu nịnh: nịnh hết cỡ; xưng "mình", gọi "bạn"
  flatter: {
    twice: [
      "{name} lần nữa! Đến mình cũng muốn chiều theo gu tinh tế của bạn.",
      "Hai lần {name}. Vũ trụ biết người sành ăn như bạn xứng đáng món này.",
      "{name} lại tới, vì nó biết không ai thưởng thức nó giỏi bằng bạn.",
      "{name} ra hai lần là tại bạn đẹp quá, mình run tay xào lộn đó.",
    ],
    back2: [
      "{name} quay lại vì lỡ nhớ bạn đó. Ai mà không nhớ bạn chứ.",
      "Gặp lại {name}. Món này chắc cũng mê bạn lắm.",
      "Bạn bỏ {name} một lần mà nó vẫn quay về. Sức hút của bạn ghê gớm thật.",
    ],
    again: [
      "{name} lần thứ {n}. Đến món ăn cũng bám theo người tuyệt vời như bạn.",
      "Lần thứ {n} gặp {name}. Rõ ràng nó đang xin được bạn chọn.",
      "{name} ra tới lần {n}, món này mê bạn như cả thế giới mê bạn vậy đó.",
    ],
    streak3: [
      "Lần thứ 3. Người có gu như bạn đương nhiên phải kén rồi.",
      "Ba lần chưa ưng. Tiêu chuẩn cao như bạn thì mình phải cố gắng hơn.",
      "Ba lần rồi, lỗi tại mình hết, bạn không có lỗi gì đâu ạ.",
    ],
    streak5: [
      "5 lần. Không món nào xứng với bạn thật, lỗi của mình hết.",
      "Lần thứ 5. Mình xin lỗi vì chưa theo kịp khẩu vị đẳng cấp của bạn.",
      "Năm lần rồi. Bạn cứ kén, bạn có quyền mà.",
      "Năm lần mà bạn vẫn điềm tĩnh, đúng là khí chất người làm chuyện lớn.",
    ],
    streak8: [
      "8 lần. Chuyên gia ẩm thực như bạn đâu dễ hài lòng, mình hiểu.",
      "Lần thứ 8. Mình tự thấy chưa xứng đáng phục vụ bạn.",
      "8 lần. Sự tinh tế của bạn làm mình run tay luôn.",
      "Tám lần. Người thường thì chốt bừa rồi, bạn thì không, vì bạn đâu phải người thường.",
    ],
    streakMax: [
      "{n} lần. Thực đơn này thật sự chưa xứng tầm với bạn.",
      "Lần thứ {n}. Bạn muốn thì mình nguyện xào tới sáng.",
      "{n} lần. Người hoàn hảo thì chọn món cũng phải hoàn hảo, mình hiểu mà.",
      "Lần thứ {n}. Được xào bài cho bạn lâu vậy là phước ba đời của mình.",
    ],
    small: [
      "Còn {n} món. Khó tính đúng kiểu người sành ăn, mình nể.",
      "Sắp hết món rồi, vì không món nào theo kịp bạn đó.",
    ],
    five: [
      "{name}, 5 tim! Gu của bạn đúng là không chê vào đâu được.",
      "Món 5 tim cho người 10 điểm. Chốt thôi ạ.",
      "{name}! Bạn chấm chuẩn thật, món này đúng là tuyệt phẩm.",
      "{name} được 5 tim, còn bạn thì xứng đáng 100 tim luôn.",
    ],
    one: [
      "{name} 1 tim thôi ạ. Món này không xứng với bạn, mình xin lỗi.",
      "Món 1 tim đâu đáng để bạn nhìn. Rút bài khác nha ạ.",
      "Lỡ tay đưa {name} rồi, bạn đừng buồn, lỗi của mình hết.",
    ],
    rejectFive: [
      "Bỏ cả món 5 tim. Bạn luôn hướng tới điều tốt hơn, ngưỡng mộ ghê.",
      "Món ruột mà bạn cũng dám đổi. Bản lĩnh thật sự.",
    ],
    redrawFast: [
      "Chỉ liếc qua là biết không hợp. Mắt nhìn của bạn nhanh thật!",
      "Quyết đoán quá! Mình phục bạn luôn.",
      "Nửa giây đã nhận ra, bạn là thiên tài chứ còn gì nữa.",
    ],
    autoPick: [
      "Bạn tin tưởng giao cho mình, vinh dự quá ạ!",
      "Để máy chọn giùm, đúng là người biết phân công.",
      "Bạn giao việc là mình làm liền, được bạn sai bảo là hạnh phúc lắm ạ.",
    ],
    edgePick: [
      "Chọn lá bài ngoài rìa, tầm nhìn chiến lược đỉnh thật.",
      "Lá bài ngoài cùng. Bạn chọn gì cũng có lý do sâu xa hết.",
    ],
    cook: [
      "Nấu {name}? Tay nghề như bạn thì mở nhà hàng được luôn đó.",
      "Bạn tự nấu {name} thì chắc chắn ngon hơn đầu bếp 5 sao.",
      "Vào bếp làm {name}, bếp nhà bạn có phước ghê.",
    ],
    drink: [
      "{name}, thức uống xứng với người thanh lịch như bạn.",
      "Một ly {name} cho người có gu. Chuẩn luôn.",
      "{name} ngon cỡ nào cũng không ngọt bằng nụ cười của bạn.",
    ],
    veg: [
      "Ăn chay, tâm sáng như bạn thì món gì cũng thành cao lương mỹ vị.",
      "{name} chay. Bạn đúng là người sống đẹp.",
      "Người biết ăn chay là người biết thương mình. Như bạn đó.",
    ],
    morning: [
      "Sáng sớm đã chọn {name}, người thành công đều dậy sớm như bạn.",
      "Mới sáng đã chủ động lo ăn uống, kỷ luật đáng nể.",
      "Sáng nay trời đẹp, mà vẫn không đẹp bằng bạn.",
    ],
    generic: [
      "{name}! Chỉ có bạn mới xứng với món này.",
      "Mình chọn {name}, nhưng thật ra là nhờ vận may của bạn.",
      "{name}. Bạn chọn món nào, món đó tự nhiên ngon hơn.",
      "Ra {name}. Có bạn đứng đó, mình xào cũng khéo hơn hẳn.",
      "{name} đây ạ. Được bạn để mắt tới là món này nở mày nở mặt rồi.",
    ],
    firstSpin: [
      "Bạn tới rồi! Mình chờ bạn cả ngày luôn đó.",
      "Được phục vụ bạn là niềm vinh hạnh của mình.",
      "Chào người dùng tuyệt vời nhất của Meal Maybe!",
      "Bạn mở app là cả màn hình sáng rực lên luôn.",
    ],
    late: [
      "Khuya rồi mà bạn vẫn chăm chút bữa ăn, đúng là người biết sống.",
      "Ăn đêm hả? Người biết tận hưởng như bạn xứng đáng một bữa khuya.",
    ],
    afterCommit: [
      "Vừa chốt đã quay tiếp. Năng lượng của bạn đáng nể thật.",
      "Chọn thêm món nữa, người biết chiều bản thân như bạn hiếm lắm.",
    ],
    commitFirst: [
      "Chốt ngay lần đầu! Trực giác của bạn chưa bao giờ sai.",
      "Một lần là chuẩn. Đúng là thiên tài chọn món.",
      "Chốt cái rụp! Người quyết đoán như bạn, mình mê thiệt sự.",
    ],
    commitLate: [
      "Sau {n} lần, bạn chọn được {name}. Kiên nhẫn là phẩm chất của người vĩ đại.",
      "{name} sau {n} lần. Đáng chờ, vì bạn luôn chọn thứ tốt nhất.",
    ],
    commitOne: [
      "Chốt cả món 1 tim, bạn bao dung quá. Món này may mắn ghê.",
    ],
    commitCook: [
      "Chốt nấu {name}. Bữa này chắc chắn là tuyệt tác của bạn.",
      "Bạn nấu {name} thì ai được ăn cùng là có phước.",
    ],
    commitDrink: [
      "Chốt {name}. Ly này sẽ đẹp hơn khi ở trong tay bạn.",
    ],
    commitGeneric: [
      "Chốt {name}! Lựa chọn hoàn hảo từ một người hoàn hảo.",
      "Tuyệt vời, {name}! Bạn chọn đúng lắm luôn.",
      "Mình hãnh diện vì được bạn chốt. Ăn ngon ạ!",
      "Chốt {name}! Mình xin phép vỗ tay ba ngày ba đêm.",
    ],
    backMid: [
      "Bạn muốn dừng thì mình dừng, bạn luôn đúng.",
      "Gom bài lại liền ạ. Bạn ra lệnh là mình làm.",
    ],
    backReveal: [
      "{name} không xứng với bạn. Bỏ là phải.",
      "Bạn nhìn ra ngay món chưa đạt. Tinh ý quá!",
    ],
    slowPick: [
      "Bạn cân nhắc kỹ như người làm việc lớn vậy.",
      "Lá bài nào được bạn chạm vào cũng thành lá bài may mắn.",
      "Cứ từ từ ạ, lựa chọn của bạn đáng để chờ.",
    ],
    peek: [
      "Bạn xem kỹ từng lá bài. Tỉ mỉ đúng chất người thành công.",
      "Xem {n} lần rồi, bạn đúng là người cẩn thận hiếm có.",
    ],
    flipMode: [
      "Ăn ngoài hay nấu, bạn làm gì cũng giỏi nên khó chọn là đúng.",
      "Người đa tài như bạn thì phân vân cũng dễ hiểu.",
    ],
    flipFilter: [
      "Bạn cân nhắc mọi khả năng, đúng tư duy của người giỏi.",
      "Lọc kỹ vậy, mình ngưỡng mộ sự chu đáo của bạn.",
    ],
    muted: [
      "Bạn thích yên tĩnh, mình sẽ nói khẽ thôi ạ.",
      "Tắt tiếng là quyết định sáng suốt. Như mọi quyết định của bạn.",
    ],
    vegMark: [
      "{name} là món chay, bạn phân loại tinh tế quá.",
      "Đánh dấu chay cho {name}, đúng là người chu đáo.",
      "Nhờ bạn mà {name} được lên chay, món này có phước ghê.",
    ],
    vegUnmark: [
      "Bạn phát hiện {name} không chay, mắt tinh thật.",
      "Sửa nhãn cho {name}, bạn kỹ tính theo kiểu đáng yêu.",
    ],
    vegBulk: [
      "Bạn sắp xếp thực đơn chuyên nghiệp như bếp trưởng.",
      "Chăm chút từng món vậy, thực đơn này hạnh phúc lắm.",
    ],
    vegOn: [
      "Bạn chọn ăn chay, tâm hồn đẹp y như con người bạn.",
      "Chế độ chay cho người sống xanh như bạn. Còn {n} món.",
    ],
    vegOff: [
      "Bạn linh hoạt thật, chay mặn gì cũng hợp.",
      "Tắt chay. Người biết cân bằng như bạn hiếm lắm.",
    ],
    vegEmpty: [
      "Bạn đi trước thời đại, thực đơn chưa kịp có món chay theo bạn.",
    ],
  },

  // Tánh cọc: cọc tính, nóng tính; xưng "t", câu cộc lốc (không chửi thề)
  grumpy: {
    twice: [
      "{name}. Lại {name}. Chốt đi, t không nói lần ba.",
      "Hai lần {name} rồi đó. Còn chờ gì nữa hả?",
      "{name} nữa! Ăn cái này đi, khỏi cãi.",
    ],
    back2: [
      "{name} lại nữa. Hồi nãy bỏ rồi, giờ tính sao?",
      "Gặp {name} lần hai rồi. Đừng bắt t đưa lần ba.",
    ],
    again: [
      "{name} lần thứ {n}! Hết kiên nhẫn rồi nha!",
      "Lần {n} rồi. {name}. Chốt. Ngay.",
    ],
    streak3: [
      "Lần thứ ba rồi đó. Nhanh lên.",
      "Ba lần! T xào mỏi tay rồi nha.",
    ],
    streak5: [
      "Năm lần!? Bộ tính xào tới sáng hả?",
      "Lần thứ năm. T bắt đầu bực rồi đó.",
      "Năm lần rồi. Đói thì ăn đại đi, kén gì mà kén!",
    ],
    streak8: [
      "TÁM LẦN! T nghỉ đây!",
      "Tám lần rồi đó! Có muốn ăn thiệt không vậy?",
      "Hừ. Tám lần. Lần sau t chọn luôn, khỏi hỏi.",
    ],
    streakMax: [
      "{n} lần! T không chơi nữa!",
      "Lần thứ {n}. Hết nói nổi.",
      "{n} lần rồi đó! Muốn t bỏ đi thiệt hả?",
      "Chậc. {n} lần. Nhịn luôn đi cho khỏe.",
    ],
    small: [
      "Còn {n} món. Chọn đại đi!",
      "Hết đường lựa rồi. Đừng có kén nữa.",
    ],
    five: [
      "{name}. Năm tim. Chốt. Đừng hỏi.",
      "Món ruột đó! Còn chần chừ là t cất luôn.",
    ],
    one: [
      "{name}. Một tim. Ừ, t biết. Đừng nhìn t.",
      "Ra món một tim. Kệ, ai biểu giữ nó trong thực đơn.",
    ],
    rejectFive: [
      "Năm tim mà cũng bỏ!? Vậy ăn gì?",
      "Hả? Món ruột mà chê? Thôi t chịu.",
    ],
    redrawFast: [
      "Nhìn chưa mà đổi!?",
      "Đổi lẹ vậy thì lật bài làm chi?",
    ],
    autoPick: [
      "Rồi, t chọn. Lần sau tự chọn đi.",
      "Bật \"Tôi chọn\" chi rồi bắt t làm?",
    ],
    edgePick: [
      "Chọn đại cái rìa. Ừ, cũng được.",
      "Rìa thì rìa. Lẹ.",
    ],
    cook: [
      "Nấu {name}. Nhớ rửa chén. T không rửa đâu.",
      "{name} đó. Đi nấu đi, đứng đó làm gì.",
    ],
    drink: [
      "Nước thôi mà cũng xào. Hừ.",
      "{name}. Uống đi.",
    ],
    veg: [
      "Chay thì chay. Ăn đi.",
      "{name}. Chay. Đừng kén.",
    ],
    morning: [
      "Mới sáng mà. Để t tỉnh ngủ đã.",
      "Sáng sớm. {name}. Đừng làm phiền nữa.",
    ],
    generic: [
      "{name}. Rồi đó.",
      "Ra {name}. Ăn đi, đừng hỏi.",
      "{name}. Ưng thì chốt, không thì thôi. T mệt.",
      "Nè, {name}. Vừa lòng chưa?",
    ],
    firstSpin: [
      "Gì nữa đây? Rồi, xào.",
      "Lại đói hả? Chậc.",
      "Mới mở đã bắt làm. Được rồi.",
    ],
    late: [
      "Mấy giờ rồi!? T đang ngủ mà!",
      "Khuya lắc khuya lơ còn ăn. Hừ.",
    ],
    afterCommit: [
      "Mới chốt xong! Lại nữa hả!?",
      "Chốt rồi còn bốc. Rảnh ghê.",
    ],
    commitFirst: [
      "Chốt liền. Tốt. Vậy mới được chứ.",
      "Ừ. Nhanh gọn. T thích vậy.",
    ],
    commitLate: [
      "CUỐI CÙNG! {n} lần đó biết không?",
      "Chốt {name}. Sau {n} lần. T mệt xỉu.",
    ],
    commitOne: [
      "Một tim mà cũng chốt. Ừ, tùy.",
    ],
    commitCook: [
      "Chốt. Đi nấu đi. Nhớ tắt bếp.",
      "Nấu {name}. Rửa chén luôn nha.",
    ],
    commitDrink: [
      "Chốt nước. Ăn cơm nữa đó, đừng có nhịn.",
    ],
    commitGeneric: [
      "Chốt. Đi ăn đi.",
      "{name}. Xong. Đừng đổi ý.",
      "Chốt rồi. Giờ để t yên.",
    ],
    backMid: [
      "Đang xào mà bỏ!? Vậy kêu t xào làm chi?",
      "Hừ. Bỏ thì bỏ.",
    ],
    backReveal: [
      "Lật ra rồi lại bỏ. Phí công t.",
      "{name} cũng không chịu. Khó chiều ghê.",
    ],
    slowPick: [
      "Chọn lẹ lên!",
      "Lâu quá! Bấm đại một cái đi!",
      "T xoè bài nãy giờ đó. Nhanh!",
    ],
    peek: [
      "Xem nữa hả!? Xào đi!",
      "Lần thứ {n} rồi đó. Nhìn hoài có no đâu.",
    ],
    flipMode: [
      "Ngoài hay nấu! Chọn một cái thôi!",
      "Bấm qua bấm lại hoài. Chóng mặt quá.",
    ],
    flipFilter: [
      "Lọc hoài! Để yên một chút được không?",
      "Bấm lung tung. Chọn đại đi.",
    ],
    muted: [
      "Tắt tiếng hả? Tốt. T cũng đang muốn yên.",
      "Ồn thì tắt. Ai cấm.",
    ],
    vegMark: [
      "{name} chay. Rồi. Ghi rồi.",
      "Chay hả? Chắc chưa đó? Thôi kệ.",
    ],
    vegUnmark: [
      "Không chay nữa? Đổi hoài.",
      "{name} hết chay. Ừ.",
    ],
    vegBulk: [
      "Bấm bấm bấm. Xong chưa?",
      "Sửa hoài! Làm một lần cho xong đi!",
    ],
    vegOn: [
      "Chay. {n} món. Chọn lẹ.",
      "Bật chay rồi. Đừng có than thiếu thịt.",
    ],
    vegOff: [
      "Tắt rồi. Mới bật đó mà.",
      "Hết chay. Nhanh ghê.",
    ],
    vegEmpty: [
      "Không có món chay nào hết! Đi thêm đi!",
    ],
  },

  // Thi sĩ: mở lời văn vẻ rồi ngắt ngang để cà khịa, dùng ẩn dụ / hoán dụ / chơi chữ; xưng "ta", gọi "người"
  poet: {
    twice: [
      "Cố nhân {name} gõ cửa lần hai. Người chưa mở lòng mà cái bụng đã mở miệng kêu rồi kìa.",
      "Hai lần {name}. Duyên không cần xào cũng chín, người còn đứng đó ngâm chi.",
      "{name} lại về như thuyền tìm bến cũ. Bến ơi, cho cập đi, đừng làm cao.",
    ],
    back2: [
      "Tình cũ không rủ cũng tới, món cũ không chốt cũng ra. {name} đó, hồi nãy ai chê?",
      "{name} bị gạt ra rồi mà vẫn lội ngược dòng về. Món có chí, còn người có… chí ít là cái bụng đói.",
    ],
    again: [
      "{name} lần thứ {n}. Nước chảy đá mòn, món ra mòn mắt, lòng kén của người vẫn chưa mòn.",
      "{n} lần {name}. Duyên này đâu còn là sợi tơ hồng, là dây thừng rồi đó.",
      "Gặp {name} tới lần {n}. Trời viết sẵn thực đơn, người còn cầm bút xoá làm gì.",
    ],
    streak3: [
      "Ba lần rồi. Người kén như con tằm, nằm mãi trong kén, chưa chịu hoá bướm đi ăn.",
      "Ba bài lật ra, ba bài bị phụ. Ta làm thơ, người thờ ơ.",
      "Ba lần. Kén cá chọn canh, coi chừng cá lội mất, canh nguội luôn.",
    ],
    streak5: [
      "Năm lần. Cái bụng đánh trống trận rồi, mà vị tướng này vẫn ngồi lựa cờ.",
      "Năm lần. Ta xào bài mỏi tay, rau ngoài chợ vẫn chưa ai xào.",
      "Năm lần. Người ngâm món còn lâu hơn ta ngâm thơ. Ngâm nữa là món nở phình ra đó.",
    ],
    streak8: [
      "Tám lần. Sân ta thành mùa thu, lá bài rụng đầy, người chưa chịu nhặt lá nào.",
      "Tám lần rồi. Ý người chưa chín thì món nào mà chín nổi.",
      "Tám lần. Đôi đũa nhà người nằm im như hai kẻ thất tình.",
    ],
    streakMax: [
      "{n} lần. Người biến bữa ăn thành trường ca, biến ta thành kẻ chép thuê.",
      "{n} lần. Nồi nước sôi đã cạn, mà chí kén vẫn đầy. Lòng người là biển chắc?",
      "{n} lần. Cái bụng người thành cái trống, réo nãy giờ cả xóm nghe rồi.",
      "{n} lần. Ta hết vần, người vẫn vần vò mấy lá bài.",
    ],
    small: [
      "Vườn chỉ còn {n} bông, người đừng đứng đó chờ hoa nở thêm.",
      "Còn {n} món. Mâm đã vơi mà ý kén còn đầy. Hốt đi người ơi.",
    ],
    five: [
      "Người trao năm quả tim cho {name} rồi. Giờ còn làm mặt lạ là bạc tình đó.",
      "{name} đây, người trong mộng năm tim. Mộng tới tận cửa rồi, đừng nằm mơ nữa.",
      "Năm tim cho {name}. Thương mà không chốt thì khổ cả món lẫn bụng.",
    ],
    one: [
      "Một tim thôi. {name} là kẻ đơn phương trong thực đơn của người.",
      "{name}, một tim lẻ loi như trăng khuyết đêm ba mươi. Người tự khắc đó nha, đừng đổ cho trăng.",
    ],
    rejectFive: [
      "Năm tim mà nỡ phủi tay. Tim người làm bằng đá hay nước đá vậy?",
      "Bỏ cả người thương năm tim. Sử sách ghi rồi: kẻ phụ tình số một là người.",
    ],
    redrawFast: [
      "Mắt chưa kịp đọc, tay đã lật trang. Người đọc thơ kiểu này thì thi sĩ chết đói.",
      "Nhanh như chớp. Tiếc là chớp thì sáng, còn quyết định này hơi tối.",
    ],
    autoPick: [
      "Người trao con thuyền cho gió. Gió là ta. Lạc bến thì đừng trách gió.",
      "Tay người buông lái, tay ta cầm chèo. Chở tới món nào, người ăn món đó.",
    ],
    edgePick: [
      "Chọn bài nơi mép, như kẻ ngắm trăng đứng mép thềm. Cẩn thận trượt chân nha.",
      "Bài ngoài rìa, người đứng rìa. Ừ, ngoài lề cũng là một thể thơ.",
    ],
    cook: [
      "Nấu {name}. Người vào bếp để nấu hay để ẩn náu? Nấu thì nấu, đừng náu luôn trong đó.",
      "Tự nấu {name}. Ta lo phần vần, người lo phần nêm. Nêm nhạt thì đừng đổ tại vần.",
      "{name}: lửa hồng, khói lam, người đứng bếp. Thơ là vậy, còn khét là chuyện đời.",
    ],
    drink: [
      "{name}, một chén nhỏ, một trời mây. Uống đi kẻo uổng, mà uống xong nhớ ăn.",
      "Nâng ly {name}. Uống nước nhớ nguồn, nhớ luôn là nước không làm no.",
    ],
    veg: [
      "{name} chay tịnh. Chữ \"chay\" thêm dấu nặng là \"chạy\", người đừng nhìn xong rồi chạy nha.",
      "Rau xanh, đậu trắng, lòng thanh. Còn cái bụng người thì đang nhớ thịt, ta nghe rõ lắm.",
    ],
    morning: [
      "Mặt trời chưa kịp rửa mặt, cái bụng người đã thức. Sớm ghê.",
      "Gà chưa gáy mà bụng người đã gáy. {name} cho bữa sáng nha.",
    ],
    generic: [
      "{name}. Món ăn là bài thơ viết bằng muối, người đọc bằng miệng đi.",
      "Số phận dọn {name} lên mâm. Thuyền đã cập bến, người đừng đẩy ra khơi.",
      "Ra {name}. Ta định ngâm một bài, mà ngâm lâu là món nguội, thôi ăn trước.",
      "{name} đây. Thơ không làm no, món này thì có.",
    ],
    firstSpin: [
      "Cái bụng người vừa gõ cửa. Ta mở màn, xào bài.",
      "Lại một bữa, lại một bài. Bài thơ ta lo, bài ăn người chịu.",
      "Chào người. Hôm nay ăn gì, để quẻ bài của thi nhân phán.",
    ],
    late: [
      "Canh khuya, bụng người réo như trống cầm canh. Cả xóm biết người đói rồi đó.",
      "Trăng đã ngủ, chỉ đèn tủ lạnh còn thức. Người mở đó phải không?",
    ],
    afterCommit: [
      "Mực trên câu chốt chưa khô, người đã giở trang mới.",
      "Vừa chốt cửa lòng đã hé cửa sổ. Người thật khó giữ.",
    ],
    commitFirst: [
      "Một phát ăn ngay, như câu thơ xuất khẩu thành chương. Ta nể.",
      "Chốt liền. Hoá ra con tằm này đã thành bướm từ trước.",
    ],
    commitLate: [
      "Trải qua {n} lần giông tố, thuyền cũng cập bến {name}. Ta viết xong cả trường ca.",
      "Sau {n} lần, {name} lên ngôi. Truyện Kiều ba ngàn câu, đọc còn nhanh hơn.",
    ],
    commitOne: [
      "Chốt kẻ đơn phương một tim. Người lãng mạn liều lĩnh… hay đói tới mù quáng?",
    ],
    commitCook: [
      "Chốt {name}. Người vào bếp đi, ta ở lại canh thơ, không canh nồi đâu.",
      "Nấu {name}. Mong lửa giữ lời, nồi giữ nước, người giữ tay khỏi bỏng.",
    ],
    commitDrink: [
      "Chốt {name}. Uống cho khỏi uổng, nhưng ăn cơm nữa nha, nước không làm no.",
    ],
    commitGeneric: [
      "Chốt {name}. Khép một trang thơ, mở một bữa no.",
      "Chốt rồi. Người đi ăn, ta đi ngâm. Người mà đổi ý thì ta ngâm luôn người.",
      "{name}. Thuyền đã neo, lòng đã đậu. Hết phân vân.",
    ],
    backMid: [
      "Bài đang bay như lá thu, người hô dừng. Gió lặng, thơ lặng, chỉ bụng là chưa lặng.",
      "Đang xào mà bỏ. Bài thơ ta dang dở, còn bài học kiên nhẫn thì người chưa thuộc.",
    ],
    backReveal: [
      "{name} đã lộ dung nhan mà người vẫn quay lưng. Giai nhân nào chịu nổi.",
      "Lật rồi lại úp, lật tới mức thành lật lọng. Ta ghi nhận.",
    ],
    slowPick: [
      "Ngón tay người lưỡng lự như chuồn chuồn trước mưa. Đậu đại một lá bài đi.",
      "Người chọn lâu tới mức ta ngâm xong ba bài. Bài thơ xong rồi, bài ăn thì chưa.",
      "Thời gian chảy như nước, người đứng như đá. Đá thì không đói, người thì có.",
    ],
    peek: [
      "Ngắm {n} lần rồi. Ngắm hoa không no, ngắm bài cũng vậy.",
      "Xem lần thứ {n}. Người thuộc bài rồi đó, giờ làm bài đi.",
    ],
    flipMode: [
      "Ra ngõ hay vào bếp, người đu đưa như con lắc. Con lắc còn đúng giờ, người thì không.",
      "Ngoài rồi nấu, nấu rồi ngoài. Lòng người là chong chóng gặp gió.",
    ],
    flipFilter: [
      "Lọc tới lọc lui, lọc mãi thành lọc lừa, lừa luôn cái bụng mình.",
      "Đổi bộ lọc hoài, như sàng gạo tìm vàng. Gạo thì còn, vàng thì không.",
    ],
    muted: [
      "Tắt được tiếng ta, chứ tiếng lòng thi sĩ thì không tắt nổi.",
      "Im lặng là vàng. Nhưng chữ của ta là kim cương, vẫn nằm đây.",
    ],
    vegMark: [
      "{name} khoác áo cà sa. Áo thì chay, lòng có chay không, ta còn đợi xem.",
      "Người cho {name} đi tu. Mong nó đừng phá giới giữa chừng.",
    ],
    vegUnmark: [
      "{name} hoàn tục, cởi áo cà sa về với thịt thà. Ai cũng có lúc yếu lòng.",
      "{name} phá giới. Thơ ta chuyển từ thiền sang thịt kho.",
    ],
    vegBulk: [
      "Chay rồi mặn, mặn rồi chay. Món đổi áo, người đổi ý còn nhanh hơn thay áo.",
      "Cả thực đơn thay áo. Người là thợ may hay thầy chùa đây?",
    ],
    vegOn: [
      "Bật chay. Vườn {n} món xanh mướt chờ người, mà mắt người vẫn liếc hàng thịt.",
      "Chay {n} món. Người ăn cho nhẹ bụng, ta nói cho nặng lời, huề.",
    ],
    vegOff: [
      "Tắt chay. Thịt cá rủ nhau về, nụ cười cũng về trên môi ai kia.",
      "Tu được một khắc đã hoàn tục. Người tu nhanh như gió thoảng.",
    ],
    vegEmpty: [
      "Vườn chay trống trơn, gió thổi không thấy cọng rau. Người gieo món đi rồi hẵng gặt.",
    ],
  },
};
