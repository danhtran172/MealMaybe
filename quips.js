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
      "Hai lần liền {name}. Ông trời nhắc tới lần thứ ba là hết kiên nhẫn đó cưng.",
      "T xào kỹ lắm rồi mà {name} vẫn chen lên. Nó mê cưng thiệt đó.",
    ],
    // Món đã gặp một lần trong lượt kén này, giờ ra lại
    back2: [
      "{name} quay lại lần hai. Hồi nãy chê, giờ thấy nhớ chưa?",
      "Chào lại {name}. Nó chưa muốn đi mà cưng đuổi hoài, kỳ ghê.",
      "{name} tái xuất. Gợi ý tới vậy mà cưng còn chưa hiểu hả?",
      "{name} lại ghé. Bị chê một lần mà vẫn quay lại, chung thuỷ hơn cưng nhiều.",
      "Ủa {name} về lại rồi nè. Hồi nãy chê cái gì, nói t nghe coi.",
    ],
    // Gặp cùng một món từ 3 lần trở lên ({n} = số lần gặp)
    again: [
      "Lần thứ {n} gặp {name} rồi đó. Định mệnh gõ cửa gãy tay mà không ai mở.",
      "{name} lần {n}. T không nói nữa, t hét nè: CHỐT ĐI!",
      "Gặp {name} {n} lần mà vẫn làm như người lạ. Ghê thiệt.",
      "{name} lần thứ {n}. Tới đây là nó thuộc đường về nhà cưng luôn rồi.",
      "Lần thứ {n} ra {name}. Cưng không chọn nó thì nó cũng chọn cưng rồi đó.",
    ],
    // Rút tới lần thứ 3 mà chưa chốt
    streak3: [
      "Rút tới lần thứ ba rồi. Kén vừa thôi, đây đâu phải nhà hàng năm sao.",
      "Ba lần mà chưa ưng. T bắt đầu tự ái rồi đó nha.",
      "Mới lần thứ ba mà mặt ai đó đã khó chịu. T còn chưa than kìa.",
      "Ba lần. Chê thêm chút nữa là tới lượt t chê lại đó.",
      "Lần thứ ba. T bắt đầu nghi cưng vô đây để ngắm bài chứ không phải để ăn.",
    ],
    // Rút tới lần thứ 5
    streak5: [
      "Năm lần. Đang chọn món hay tuyển người yêu vậy cưng?",
      "Lần thứ năm. Bụng thì kêu mà miệng vẫn chảnh, hay ghê.",
      "Năm lần rồi. Hay để t ăn giùm luôn cho lẹ?",
      "Năm lần. Ai nuôi cưng chắc mệt lắm.",
      "Năm lần. T xào tới nóng tay mà cưng vẫn lạnh lùng quá ha.",
      "Lần thứ năm rồi đó. Menu nhà hàng cưng còn đọc lẹ hơn vầy.",
    ],
    // Rút tới lần thứ 8
    streak8: [
      "Tám lần. Quán đóng cửa trước khi cưng chọn xong mất.",
      "Lần thứ tám. Xào nhiều quá mòn cả mép bài rồi, đền đi.",
      "Tám lần. Chắc không phải đói đâu, chắc là rảnh.",
      "Tám lần rồi. Thôi khỏi ăn, nhịn cho khỏe người.",
      "Tám lần. Người ta chọn xong, ăn xong, rửa chén xong hết rồi.",
      "Lần thứ tám. T mà là cái bụng của cưng là t đình công lâu rồi.",
    ],
    // Từ lần thứ 10, cứ 3 lần nói một lần ({n} = số lần rút)
    streakMax: [
      "{n} lần rồi đó. T xin nghỉ ốm, có giấy bác sĩ đàng hoàng.",
      "{n} lần. Úp mì gói đi cho nhanh, khỏi chọn.",
      "Kỷ lục mới: {n} lần không chốt. Chúc mừng, chắc vậy.",
      "{n} lần rồi trời ơi. Bấm chốt khó lắm hả cưng?",
      "Lần thứ {n}. Nói thật: cưng không thiếu món, cưng thiếu quyết tâm.",
      "{n} lần. T bắt đầu nghĩ cưng thích xào bài hơn thích ăn.",
      "Lần thứ {n}. Bài t sắp mòn hết chữ rồi, cưng tính đền kiểu gì?",
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
      "{name} năm tim, dọn tới tận miệng rồi. Còn chần chừ là t giận luôn.",
      "Món cưng mê nhất đây. Chê lúc này là tự vả đó nha.",
    ],
    // Rút trúng món 1 tim
    one: [
      "{name}… một tim. T xin lỗi trước.",
      "{name}, một tim. Ghét vậy mà còn giữ trong thực đơn, lạ ghê.",
      "Món một tim đây. T cũng đâu có muốn, số phận thôi.",
      "{name} một tim. Rút trúng không phải lỗi t, lỗi ai không chịu xoá.",
    ],
    // Bấm "Rút bài khác" bỏ món 5 tim
    rejectFive: [
      "Bỏ luôn món năm tim? Tim cưng làm bằng đá hả?",
      "Chấm năm tim rồi lại chê. Người gì đâu mà khó hiểu.",
      "Tự chấm năm tim, tự bỏ. Tự biên tự diễn luôn.",
      "Năm tim cũng không ưng. Chắc phải sáu tim cưng mới chịu hả?",
    ],
    // Bấm "Rút bài khác" khi bài vừa lật chưa tới 1,5 giây
    redrawFast: [
      "Chưa kịp nhìn đã chê. Giỏi ghê.",
      "Bài chưa nóng tay đã bấm đổi. Nhanh nhảu dữ.",
      "Đọc tên món chưa vậy cưng? Hay bấm theo phản xạ?",
    ],
    // Chế độ Tôi chọn nhưng bấm "Chọn ngẫu nhiên"
    autoPick: [
      "Bật “Tôi chọn” rồi lại nhờ t chọn giùm. Lười có hệ thống luôn.",
      "Tự chọn mà cũng nhờ. Mắc cười.",
    ],
    // Tự chọn đúng lá bài ngoài rìa
    edgePick: [
      "Chọn bài ngoài rìa. An toàn quá ha.",
      "Né hết bài ở giữa. Sợ gì dữ vậy?",
      "Lại lựa bài sát mép. Bài ở giữa có làm gì cưng đâu.",
    ],
    // Rút trúng khi đang ở chế độ Nấu ăn
    cook: [
      "Nấu {name} hả? Nhớ rửa chén, đừng để tới mai.",
      "Tự nấu {name}. Tự tin ghê, bếp nhà cưng đang run đó.",
      "Nấu {name} hả? Cháy là tại cưng, không phải tại t nha.",
      "Nấu {name} hả? Coi lại tủ lạnh có đủ đồ chưa rồi hẵng hứa.",
      "Tự nấu {name}. Nghe sang dữ, mà nhà có nồi chưa cưng?",
    ],
    // Rút trúng đồ uống
    drink: [
      "Uống {name} cho no hả? Sáng tạo đó.",
      "{name}. Có ly nước thôi mà cũng bắt t xào bài.",
      "{name} hả? Ly thứ mấy trong ngày rồi cưng?",
      "{name} nữa hả? Uống kiểu này bữa nay khỏi ngủ luôn.",
      "Ra {name}. Có ly nước mà cưng làm như chọn nhẫn cưới.",
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
      "Mới mở mắt đã đòi {name}. Đánh răng chưa đó cưng?",
      "Trời mới sáng mà đã {name}. Bụng cưng dậy trước cưng hả?",
    ],
    // Câu chung khi rút trúng
    generic: [
      "T quyết rồi. Cưng chỉ việc gật đầu.",
      "{name}. Đừng hỏi tại sao, t cũng không biết.",
      "Xào mỏi tay mới ra {name} đó, trân trọng giùm.",
      "{name} nè. Chê thì nói, đừng có nhìn kiểu đó.",
      "Ra {name}. Ưng thì chốt, không ưng thì… cũng chốt đi.",
      "{name}. T lựa kỹ lắm rồi, đừng bắt t xào lại.",
      "Ra {name} nè. Nhìn lâu vậy nó cũng không đổi thành món khác đâu.",
    ],
    // Lượt xào đầu tiên khi mở app
    firstSpin: [
      "Mở app là biết đói rồi. Để t xào.",
      "Lại là cưng. Hôm nay định kén tới lần thứ mấy đây?",
      "Tới rồi hả? T khởi động tay đây.",
      "Mở app rồi hả. Để coi hôm nay cưng hành t bao nhiêu lần.",
      "Hôm nay nhanh gọn nha cưng, t không có rảnh cả buổi đâu.",
    ],
    // Xào lúc khuya (22h–4h)
    late: [
      "Giờ này còn đòi ăn? Được thôi, không ai phán xét. Trừ t.",
      "Ăn đêm hả? Cái cân sẽ nhớ chuyện này.",
      "Nửa đêm bắt t xào bài. T cũng cần ngủ chứ bộ.",
      "Giờ này quán còn mở không mà xào? Thôi kệ, xào.",
      "Khuya lơ khuya lắc còn ngồi lựa món. Cái bụng này không biết giờ giấc gì hết.",
      "Đói giờ này thì chọn lẹ, lựa lâu là tới giờ ăn sáng luôn.",
    ],
    // Vừa chốt xong đã xào tiếp
    afterCommit: [
      "Vừa chốt xong đã xào tiếp. Định ăn hai bữa hả?",
      "Món kia còn chưa nguội mà.",
      "Chốt rồi còn bốc. Hối hận nhanh vậy?",
      "Mới chốt đó mà bấm xào nữa. Trí nhớ cá vàng hả cưng?",
    ],
    // Chốt ngay lần rút đầu tiên
    commitFirst: [
      "Chốt ngay lần đầu. Quyết đoán hiếm thấy đó.",
      "Một phát ăn ngay. T cảm động muốn khóc.",
      "Rút một lần là chốt. Người gì đâu dễ thương.",
      "Chốt liền luôn. Bữa nay ai nhập cưng vậy?",
      "Một lần là chốt. Phải chi ngày nào cũng được như hôm nay.",
    ],
    // Chốt sau 5 lần rút trở lên ({n} = số lần rút)
    commitLate: [
      "Cuối cùng cũng chốt. T xin nghỉ phép năm phút.",
      "Sau {n} lần, {name} chiến thắng. Vỗ tay cho sự kiên nhẫn của t.",
      "{n} lần mới chốt. Lần sau nghĩ sẵn ở nhà rồi hẵng mở app nha.",
      "Chốt {name} sau {n} lần. Tưởng phải xào tới Tết.",
      "{n} lần rồi mới chịu {name}. Bụng cưng chắc biểu tình từ lần thứ ba.",
    ],
    // Chốt món 1 tim
    commitOne: [
      "Chốt món một tim. Tự làm khổ mình là có thật.",
      "Chốt {name} một tim hả? Ai ép đâu mà tội vậy.",
      "Chốt {name} một tim. Bữa nay cưng tự phạt mình hả?",
    ],
    // Chốt khi đang ở chế độ Nấu ăn
    commitCook: [
      "Chốt nấu {name}. Bếp nhà cưng chuẩn bị tinh thần.",
      "Nấu {name} thì nấu cho đàng hoàng, đừng gọi ship nửa chừng.",
      "Chốt nấu {name}. Đi chợ lẹ đi, đứng đó t không nấu giùm đâu.",
    ],
    // Chốt đồ uống
    commitDrink: [
      "Chốt {name}. Uống thì uống, nhớ ăn cơm nữa nha cưng.",
      "Chốt {name}. Có ly nước mà chọn cả buổi, cưng giỏi thiệt.",
    ],
    // Câu chung khi chốt
    commitGeneric: [
      "Chốt! Giờ thì đi ăn đi, đừng mở app nữa.",
      "Chốt {name}. Đổi ý bây giờ là t giận thiệt đó.",
      "Chốt rồi nha. Ăn không ngon đừng đổ thừa t.",
      "Xong. T đi nghỉ, cưng đi ăn.",
      "Chốt {name}. Ăn cho hết, đừng để thừa rồi kêu không hợp.",
      "Chốt rồi đó. Đi ăn lẹ đi trước khi cưng đổi ý.",
    ],
    // Bấm "Quay lại" khi đang xào
    backMid: [
      "Đang xào dở mà bỏ. T hơi tự ái rồi đó.",
      "Bỏ ngang? T chưa kịp khoe tay nghề.",
      "Xào chưa xong đã chạy. Làm gì cũng nửa vời vậy?",
    ],
    // Bấm "Quay lại" sau khi bài đã lật
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
      "Cưng bấm công tắc còn nhiều hơn bấm chốt.",
    ],
    // Đổi bộ lọc loại món 4 lần trong 20 giây
    flipFilter: [
      "Món chính, ăn vặt, nước… bấm hết rồi đó, chọn đi.",
      "Lọc tới lọc lui mà bụng vẫn rỗng.",
      "Lọc kỹ vậy rồi cuối cùng cũng chê. T biết mà.",
      "Bộ lọc không có ô “đừng bắt tui chọn” đâu cưng.",
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
      "Muốn ăn chay mà chưa có món chay nào. Vô thực đơn gắn mác trước đi cưng.",
    ],
    // Thực đơn: thêm món mới
    addFood: [
      "Thêm {name} hả? Được, t nhét vô bộ bài liền. Rút trúng thì đừng chê nha cưng.",
      "{name} vô thực đơn rồi. Thêm thì hăng lắm, tới lúc chốt lại lựa tới lựa lui.",
      "Ghi nhận {name}. Thực đơn dài thêm, độ kén của cưng chắc cũng dài thêm.",
      "{name} vô rồi. Giờ thì hết đường than không biết ăn gì nha cưng.",
      "Thêm {name}. Món mới vô là t xào chung liền, khỏi làm quen.",
    ],
    // Thực đơn: thêm 3 món trong vòng 2 phút
    addStreak: [
      "Thêm liền tay luôn ha. Bộ bài dày cỡ này mà còn kêu không biết ăn gì là t cạn lời.",
      "Nhập hàng dữ vậy cưng? Mở quán luôn đi.",
      "Thêm món như đi chợ Tết. Tới lúc chọn chắc không lẹ được vậy đâu.",
    ],
    // Thực đơn: lưu thay đổi của một món
    editFood: [
      "Sửa {name} xong rồi. Sửa kỹ vậy mà lúc rút ra lại chê cho coi.",
      "Đổi tới đổi lui {name}. Món thì đổi được, chứ tính kén của cưng thì không.",
      "Sửa {name} xong. Giờ nhìn được hơn rồi đó, rút ra thì ăn đi.",
    ],
    // Thực đơn: xoá một món
    deleteFood: [
      "Đuổi {name} ra khỏi bộ bài. Phũ ghê cưng.",
      "Tạm biệt {name}. Mai mốt thèm thì đừng có kiếm.",
      "Xoá {name}. Món nó có làm gì cưng đâu.",
      "{name} bị đá ra khỏi bộ bài. Nó đi không kịp chào.",
      "Xoá {name} cái rụp. Cưng mà giận thì đáng sợ thiệt.",
    ],
    // Thực đơn: xoá món 5 tim
    deleteFive: [
      "Xoá luôn {name} năm tim? Tình cảm gì mà mỏng dữ vậy cưng.",
      "Món ruột năm tim mà cũng xoá. T bắt đầu sợ cưng rồi đó.",
      "Năm tim mà xoá không chớp mắt. Cưng thay lòng lẹ ghê.",
    ],
    // Thực đơn: bấm Hoàn tác sau khi xoá
    restoreFood: [
      "Ủa rồi rước {name} về lại hả? Biết ngay mà.",
      "{name} về lại rồi. Lần sau nghĩ kỹ rồi hẵng bấm nha cưng.",
      "{name} về rồi. Xoá cho đã rồi tiếc, y chang t đoán.",
    ],
    // Thực đơn: chấm món lên 5 tim
    rate5: [
      "{name} lên năm tim. Mê rồi thì lúc rút ra đừng có chê nha.",
      "Năm tim cho {name}. T ghi lại làm bằng chứng.",
      "Năm tim cho {name}. Chấm dễ vậy, mai mốt đừng lấy cớ ngán nha.",
    ],
    // Thực đơn: chấm món còn 1 tim
    rate1: [
      "{name} một tim. Không thích thì xoá luôn, giữ chi cho chật bộ bài.",
      "Một tim thôi hả? Món nghe tủi dữ.",
      "{name} còn một tim. Nó làm gì mà cưng buồn dữ vậy?",
      "Hạ {name} xuống một tim. Tội nghiệp, nó đâu có biết gì.",
    ],
    // Thực đơn: bật Nấu ăn cho một món
    whereCook: [
      "{name} giờ cũng tự nấu được hả? Nấu thì nhớ đừng đốt bếp nha cưng.",
      "Cho {name} vô bộ bài nấu ăn. Để coi cưng có dám vô bếp không.",
      "{name} vô bộ nấu ăn. Nói trước, rút trúng là phải vô bếp đó.",
    ],
    // Thực đơn: bật Ăn ngoài cho một món
    whereOut: [
      "{name} giờ ăn ngoài được luôn. Lười nấu thì nói đại đi cưng.",
      "Cho {name} vô bộ bài ăn ngoài. Ví tiền cưng chắc đang run.",
    ],
    // Thực đơn: mở popup thêm món rồi huỷ
    cancelAdd: [
      "Mở ra rồi đóng. Tính thêm món hay tính thử lòng t?",
      "Huỷ hả? Biết ngay là chưa nghĩ ra món nào mà.",
      "Đóng rồi hả? Nghĩ ra món thì quay lại, t không đi đâu hết.",
    ],
    // Bốc nhanh: vừa chuyển sang bộ bài gõ tay
    quickOn: [
      "Bốc nhanh hả? Gõ lẹ đi cưng, t đứng chờ nãy giờ.",
      "Không thèm thực đơn luôn, tự ghi tay. Cưng chơi lớn ha.",
      "Gõ tay hả? Viết ít thôi, viết nhiều rồi cũng chê.",
    ],
    // Bốc nhanh ít món, lúc xào phải nhân bản lá ({n} = số món, {m} = số lá sau khi nhân bản)
    quickClone: [
      "Có {n} món mà đòi xào? Thôi t nhân bản lên {m} lá cho đỡ quê.",
      "{n} món thôi hả. T tự photo thêm cho đủ {m} lá, khỏi cảm ơn.",
      "{n} món mà đòi xào như thiệt. Thôi t nhân lên {m} lá cho có khí thế.",
    ],
    // Bốc nhanh: lật ra một món trong danh sách gõ tay
    quick: [
      "{name} nè. Danh sách cưng tự viết đó, đừng có chê.",
      "Cưng ghi {name} vô chi rồi giờ làm mặt lạ?",
      "{name}. Chính tay cưng gõ đó, giờ chê là chê mình.",
      "Ra {name}. Tự ghi tự bốc, chê thì ráng chịu nha.",
    ],
  },

  // Thân thiện: ấm áp, động viên; xưng "mình", gọi "bạn"
  friendly: {
    twice: [
      "{name} lại ra nè! Chắc là có duyên đó, thử chốt xem sao?",
      "Hai lần liền {name}. Mình nghĩ hôm nay món này hợp với bạn đó.",
      "{name} quay lại chào bạn nè. Cân nhắc thử nha!",
      "Ủa, {name} lại ra liền. Chắc món này nhớ bạn lắm đó.",
      "{name} hai lần liền nè. Mình đoán trúng món bạn đang thèm chưa?",
    ],
    back2: [
      "{name} ghé lại lần nữa nè. Hay là thử món này nhỉ?",
      "Gặp lại {name} rồi. Mình thấy món này cũng được lắm đó.",
      "{name} lại ghé chơi nè. Lần này cho món một cơ hội nha?",
      "Hồi nãy lướt qua {name}, giờ gặp lại. Chắc có duyên thật đó.",
    ],
    again: [
      "{name} lần thứ {n} rồi đó. Chắc bụng bạn đang gọi tên món này.",
      "Lần thứ {n} gặp {name}. Mình nhẹ nhàng gợi ý: chốt đi bạn ơi.",
      "Gặp {name} tới lần thứ {n} rồi. Mình nghĩ trời đang nhắn gì đó cho bạn nè.",
      "{name}, lần thứ {n}. Món này kiên trì ghê, thưởng cho nó một lần chốt nha?",
    ],
    streak3: [
      "Lần thứ ba rồi. Cứ từ từ, chọn món mình thích là quan trọng nhất.",
      "Ba lần rồi nè. Không sao, mình xào tiếp được mà.",
      "Mới ba lần thôi, còn sớm chán. Mình chưa mỏi tay đâu nè.",
      "Ba lần rồi ha. Chọn món cũng như chọn áo, phải vừa ý mới chịu chứ.",
    ],
    streak5: [
      "Lần thứ năm rồi. Hay mình lọc bớt loại món cho dễ chọn hơn nha?",
      "Năm lần rồi, bạn đói chưa? Chọn một món ngon ngon đi nè.",
      "Năm lần. Mình vẫn vui vẻ xào tiếp, nhưng đừng để bụng đói lâu nha.",
      "Năm lần rồi. Thử hỏi bụng xem hôm nay thèm mặn, thèm ngọt hay thèm nước nha.",
      "Lần thứ năm. Món nào nãy giờ làm bạn ngập ngừng lâu nhất, có khi là nó đó.",
    ],
    streak8: [
      "Tám lần rồi đó. Nghỉ tay uống miếng nước rồi chọn tiếp cũng được.",
      "Lần thứ tám. Chưa biết ăn gì thì bấm \"Xem bộ bài\" để nhìn hết một lượt nha.",
      "Tám lần rồi. Mình hơi mỏi tay xíu, nhưng vẫn ở đây với bạn.",
      "Tám lần rồi. Lá tiếp theo mình xào kỹ hơn chút, mong là trúng ý bạn.",
      "Lần thứ tám rồi đó. Bụng bạn chắc đang sốt ruột hơn cả mình.",
    ],
    streakMax: [
      "{n} lần rồi. Hôm nay khó chọn ghê ha. Mình vẫn kiên nhẫn nè.",
      "Lần thứ {n}. Có khi món ngon nhất là món nhanh nhất đó bạn.",
      "{n} lần. Không sao đâu, ai cũng có ngày phân vân mà.",
      "{n} lần rồi ha. Mình không vội, nhưng cái bụng của bạn thì chắc vội lắm đó.",
      "Lần thứ {n}. Hay là chọn món đầu tiên làm bạn mỉm cười nãy giờ?",
    ],
    small: [
      "Chỉ còn {n} món thôi. Vào mục Gần đây bỏ bớt món để có thêm lựa chọn nha.",
      "Bộ bài còn mỏng lắm. Thêm vài món mới vào thực đơn cho vui nhé.",
    ],
    five: [
      "{name}, món năm tim của bạn đây! Hôm nay may ghê.",
      "Oa, {name} năm tim. Chốt thôi chứ còn gì nữa!",
      "Món ruột {name} xuất hiện rồi. Mình vui giùm bạn luôn.",
      "{name} năm tim nè! Mình để dành món ngon nhất cho bạn đó.",
      "Trúng món ruột {name} rồi. Hôm nay là ngày may của bạn ha!",
    ],
    one: [
      "{name} một tim thôi. Không ưng thì rút bài khác nha, không sao đâu.",
      "Một tim hả? Mình hiểu mà, bấm \"Rút bài khác\" thử nha.",
      "{name} một tim. Không hợp thì mình đổi lá khác, không ai buồn đâu.",
      "Ơ, {name} một tim. Lỡ tay xào trúng rồi, bạn bỏ qua cho mình nha.",
    ],
    rejectFive: [
      "Bỏ món năm tim luôn hả? Chắc hôm nay muốn đổi gió ha.",
      "Món ruột mà cũng qua. Được thôi, thử cái mới nào!",
      "Món năm tim cũng xin nghỉ hôm nay ha. Không sao, để dành lần sau ăn càng ngon.",
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
      "Nấu {name} hả? Mở nhạc lên vừa nấu vừa hát cho vui nha.",
      "{name} tự nấu, chắc thơm cả nhà luôn. Nhớ nêm nếm trước khi tắt bếp nha.",
    ],
    drink: [
      "{name} nè, uống cho mát nha.",
      "Một ly {name} cho tỉnh táo. Nhớ ăn thêm gì nữa nha.",
      "{name} nè! Uống một ngụm cho tươi tỉnh lại nha.",
      "Một ly {name} mát lạnh. Uống chậm thôi kẻo buốt răng nha.",
    ],
    veg: [
      "{name}, món chay nhẹ nhàng. Ăn ngon nha!",
      "Hôm nay ăn chay, tốt cho sức khỏe ghê.",
      "Một bữa chay thanh đạm, bụng sẽ cảm ơn bạn đó.",
      "{name} chay nè. Ăn thanh đạm mà vẫn ngon, tuyệt ha.",
    ],
    morning: [
      "Chào buổi sáng! {name} là khởi đầu không tệ đâu.",
      "Sáng sớm đã lên kế hoạch ăn uống, giỏi ghê.",
      "Sáng nay có {name} nè. Ăn sáng đủ no thì cả ngày mới có sức nha.",
      "Buổi sáng mà được {name} thì vui cả ngày luôn.",
    ],
    generic: [
      "{name} nè. Nghe cũng hấp dẫn ha?",
      "Hôm nay ăn {name} nha. Mong là bạn thích!",
      "{name} đó. Chúc ngon miệng trước nha.",
      "Ra {name}. Thử món này hôm nay xem sao?",
      "{name}! Nghe tên thôi đã thấy bụng réo rồi ha.",
      "Lá này là {name}. Mình thấy hôm nay hợp lắm đó.",
      "{name} tới rồi. Ăn xong nhớ kể mình nghe có ngon không nha.",
    ],
    firstSpin: [
      "Chào bạn! Cùng xem hôm nay ăn gì nha.",
      "Mình sẵn sàng rồi, xào thôi!",
      "Đói rồi hả? Để mình giúp một tay.",
      "Bạn tới rồi! Mình xào bài liền, hôm nay chắc có món ngon.",
      "Chào bạn nha. Bụng đói thì cứ để mình lo phần chọn món.",
    ],
    late: [
      "Khuya rồi, ăn nhẹ thôi cho dễ ngủ nha.",
      "Đêm muộn đói bụng hả? Chọn món gì nhẹ nhàng thôi nhé.",
      "Khuya rồi mà còn thức hả? Ăn chút gì ấm bụng rồi đi ngủ sớm nha.",
      "Cú đêm đói bụng hả? Mình thức cùng bạn, chọn xong nhớ đi ngủ nha.",
    ],
    afterCommit: [
      "Vừa chốt xong đã bốc tiếp, chắc chọn cho bữa sau ha.",
      "Bốc nữa hả? Chọn thêm món tráng miệng cũng được nè.",
      "Chốt rồi mà vẫn xào tiếp? Chắc đang tính luôn bữa sau ha.",
      "Bốc thêm hả? Có ai ăn chung thì chọn thêm một món cũng hợp lý ghê.",
    ],
    commitFirst: [
      "Chốt ngay lần đầu, quyết đoán ghê! Ăn ngon nha.",
      "Một lần là trúng. Chúc ngon miệng!",
      "Mới lần đầu đã chốt. Bạn biết mình muốn gì ghê, đáng khen!",
      "Chốt liền, không đắn đo. Đi ăn sớm, no sớm, vui sớm nha!",
    ],
    commitLate: [
      "Cuối cùng cũng chọn được {name}. Xứng đáng lắm!",
      "Sau {n} lần, {name} là người chiến thắng. Ăn ngon nha!",
      "{n} lần mới chọn được {name}, nhưng ưng ý là được rồi. Ăn ngon nha!",
    ],
    commitOne: [
      "Chốt {name} dù chỉ một tim. Biết đâu hôm nay lại thấy ngon!",
      "Chọn {name} dù mới một tim. Ăn xong thấy ngon thì nhớ chấm lại điểm nha.",
    ],
    commitCook: [
      "Chốt nấu {name}. Nấu vui, ăn ngon nha!",
      "{name} tự nấu, chắc chắn ngon hơn ngoài hàng.",
      "Chốt nấu {name}! Bày biện đẹp chút, ăn sẽ ngon hơn nhiều đó.",
    ],
    commitDrink: [
      "Chốt {name}. Uống ngon, nhớ ăn uống đầy đủ nha.",
      "Chốt {name}. Chọn cái ly thật xinh rồi uống từ từ cho đã nha.",
    ],
    commitGeneric: [
      "Chốt {name}! Chúc bạn ăn ngon miệng.",
      "Tuyệt, {name} nha. Đi ăn thôi!",
      "Xong rồi. Chúc bạn một bữa thật ngon!",
      "{name} nha! Ăn từ từ, nhai kỹ, no bụng rồi làm gì cũng vui.",
      "Chốt rồi đó. Mình cất bài lại, bạn đi ăn ngon nha.",
    ],
    backMid: [
      "Dừng lại chút hả? Mình đợi bạn nè.",
      "Không sao, lúc nào sẵn sàng thì xào tiếp nha.",
    ],
    backReveal: [
      "Chưa ưng {name} hả? Mình làm lại từ đầu nha.",
      "Gom bài lại rồi nè. Thử lại khi nào bạn muốn.",
      "{name} chưa đúng lúc ha. Mình cất lại, lúc nào đói thì quay lại nha.",
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
      "Ủa, chưa có món chay nào hết. Rau xào, đậu hũ nhà bạn có chưa, thêm vào nha?",
    ],
    addFood: [
      "Đã thêm {name}! Thực đơn phong phú hơn rồi nè.",
      "{name} nghe ngon ghê, mình cất vào bộ bài rồi nha.",
      "Thêm {name} rồi đó. Mong sớm rút trúng món này cho bạn!",
      "Chào mừng {name} vào bộ bài! Mình sẽ nhớ xào món này cho bạn.",
      "{name} nghe hấp dẫn ghê. Thêm vào rồi, khi nào rút trúng thì thưởng thức nha.",
    ],
    addStreak: [
      "Bạn thêm nhiều món quá, thực đơn đầy đặn hẳn luôn!",
      "Chăm chỉ ghê, giờ rút bài sẽ vui hơn nhiều đó.",
    ],
    editFood: [
      "Đã cập nhật {name}, gọn gàng hơn rồi nè.",
      "Lưu {name} rồi nha, giờ thông tin chuẩn hơn hẳn.",
    ],
    deleteFood: [
      "Đã bỏ {name}. Lỡ tay thì bấm Hoàn tác nha.",
      "Tạm biệt {name}! Thực đơn gọn hơn chút rồi.",
      "Đã cất {name} ra khỏi bộ bài. Nhớ thì thêm lại lúc nào cũng được nha.",
      "{name} xin nghỉ phép rồi. Thực đơn giờ đúng gu bạn hơn nè.",
    ],
    deleteFive: [
      "Ơ, {name} năm tim mà bỏ luôn hả? Lỡ tay thì bấm Hoàn tác nha.",
      "Bỏ cả món 5 tim, chắc bạn đổi khẩu vị rồi ha.",
    ],
    restoreFood: [
      "Đã đưa {name} trở lại, không sao đâu nè.",
      "{name} quay về thực đơn rồi, yên tâm nha.",
      "{name} về rồi nè! Mình biết bạn vẫn còn thương món này mà.",
    ],
    rate5: [
      "{name} năm tim! Chắc là món ruột của bạn rồi.",
      "Năm tim luôn, {name} hẳn ngon lắm ha.",
      "{name} năm tim! Mình ghi nhớ rồi, món này là số một nha.",
      "Chấm {name} năm tim, chắc ăn một lần là nhớ mãi ha.",
    ],
    rate1: [
      "{name} một tim ha, chắc chưa hợp khẩu vị bạn lắm.",
      "Một tim cũng được, biết đâu có ngày bạn đổi ý.",
      "{name} một tim. Không hợp thì thôi, mình hiểu ý bạn mà.",
      "Một tim cho {name}. Ai cũng có món không hợp, không sao đâu.",
    ],
    whereCook: [
      "{name} có trong bộ bài nấu ăn rồi, tự nấu chắc vui lắm!",
      "Ghi {name} là món tự nấu được rồi nha.",
    ],
    whereOut: [
      "{name} có trong bộ bài ăn ngoài rồi nè.",
      "Ra ngoài ăn {name} cũng hay, đổi gió chút!",
    ],
    cancelAdd: [
      "Không sao, khi nào nhớ ra món nào thì thêm sau nha.",
      "Đóng rồi ha, mình vẫn ở đây khi bạn cần.",
    ],
    quickOn: [
      "Bốc nhanh nè! Bạn ghi vài món, mình xào liền.",
      "Không cần thêm vào thực đơn đâu, cứ ghi ra là mình bốc cho.",
      "Chế độ bốc nhanh nè. Nghĩ ra món gì cứ ghi, mình lo phần còn lại.",
    ],
    quickClone: [
      "Mới {n} món nên mình nhân bản thành {m} lá cho xào đã tay nha.",
      "Mình nhân {n} món lên {m} lá, xào cho vui!",
    ],
    quick: [
      "Ra {name} nè, món chính tay bạn ghi đó!",
      "{name}! Có trong danh sách của bạn luôn, hợp ý chưa?",
      "{name} nè! Đã ghi vào danh sách là biết bạn đang thèm rồi ha.",
      "Lật ra {name}. Đúng món bạn đang nghĩ trong đầu chưa?",
    ],
  },

  // Xu nịnh: nịnh hết cỡ; xưng "mình", gọi "bạn"
  flatter: {
    twice: [
      "{name} lần nữa! Đến mình cũng muốn chiều theo gu tinh tế của bạn.",
      "Hai lần {name}. Vũ trụ biết người sành ăn như bạn xứng đáng món này.",
      "{name} lại tới, vì nó biết không ai thưởng thức nó giỏi bằng bạn.",
      "{name} ra hai lần là tại bạn đẹp quá, mình run tay xào lộn đó.",
      "Lại {name}. Mình xào kỹ lắm rồi, mà bài cứ muốn nằm gần bạn thôi ạ.",
      "{name} ra lại ngay. Người có khí chất như bạn thì món ăn cũng phải xếp hàng chờ gặp.",
    ],
    back2: [
      "{name} quay lại vì lỡ nhớ bạn đó. Ai mà không nhớ bạn chứ.",
      "Gặp lại {name}. Món này chắc cũng mê bạn lắm.",
      "Bạn bỏ {name} một lần mà nó vẫn quay về. Sức hút của bạn ghê gớm thật.",
      "{name} bị bạn cho qua một lần mà vẫn quay lại. Được bạn từ chối cũng là một vinh dự đó ạ.",
    ],
    again: [
      "{name} lần thứ {n}. Đến món ăn cũng bám theo người tuyệt vời như bạn.",
      "Lần thứ {n} gặp {name}. Rõ ràng nó đang xin được bạn chọn.",
      "{name} ra tới lần {n}, món này mê bạn như cả thế giới mê bạn vậy đó.",
      "{name} lần thứ {n}. Món này thành fan cứng của bạn luôn rồi ạ.",
    ],
    streak3: [
      "Lần thứ 3. Người có gu như bạn đương nhiên phải kén rồi.",
      "Ba lần chưa ưng. Tiêu chuẩn cao như bạn thì mình phải cố gắng hơn.",
      "Ba lần rồi, lỗi tại mình hết, bạn không có lỗi gì đâu ạ.",
      "Ba lần chưa ưng. Mắt bạn tinh thật, mình đưa món thường là bạn biết liền.",
      "Lần thứ ba. Mình xin xào lại, món nào tới tay bạn cũng phải đạt chuẩn ạ.",
    ],
    streak5: [
      "5 lần. Không món nào xứng với bạn thật, lỗi của mình hết.",
      "Lần thứ 5. Mình xin lỗi vì chưa theo kịp khẩu vị đẳng cấp của bạn.",
      "Năm lần rồi. Bạn cứ kén, bạn có quyền mà.",
      "Năm lần mà bạn vẫn điềm tĩnh, đúng là khí chất người làm chuyện lớn.",
      "Năm lần. Người ta gọi là kén, mình gọi là có tiêu chuẩn. Mà bạn thì nhiều tiêu chuẩn lắm.",
      "Lần thứ năm rồi ạ. Bạn cứ thong thả, món ngon phải biết đường mà đợi bạn chứ.",
    ],
    streak8: [
      "8 lần. Chuyên gia ẩm thực như bạn đâu dễ hài lòng, mình hiểu.",
      "Lần thứ 8. Mình tự thấy chưa xứng đáng phục vụ bạn.",
      "8 lần. Sự tinh tế của bạn làm mình run tay luôn.",
      "Tám lần. Người thường thì chốt bừa rồi, bạn thì không, vì bạn đâu phải người thường.",
      "Tám lần. Nhà phê bình ẩm thực chắc phải xin học bạn cách kén đó ạ.",
    ],
    streakMax: [
      "{n} lần. Thực đơn này thật sự chưa xứng tầm với bạn.",
      "Lần thứ {n}. Bạn muốn thì mình nguyện xào tới sáng.",
      "{n} lần. Người hoàn hảo thì chọn món cũng phải hoàn hảo, mình hiểu mà.",
      "Lần thứ {n}. Được xào bài cho bạn lâu vậy là phước ba đời của mình.",
      "Lần thứ {n}. Bạn đâu có chần chừ, bạn đang cho mình cơ hội thể hiện thôi ạ.",
      "{n} lần mà bạn vẫn chưa nản. Kiên trì cỡ này thì làm gì cũng thành công.",
    ],
    small: [
      "Còn {n} món. Khó tính đúng kiểu người sành ăn, mình nể.",
      "Sắp hết món rồi, vì không món nào theo kịp bạn đó.",
      "Chỉ còn {n} món. Bạn gạn đục khơi trong tới đây, món còn lại chắc toàn tinh hoa.",
    ],
    five: [
      "{name}, 5 tim! Gu của bạn đúng là không chê vào đâu được.",
      "Món 5 tim cho người 10 điểm. Chốt thôi ạ.",
      "{name}! Bạn chấm chuẩn thật, món này đúng là tuyệt phẩm.",
      "{name} được 5 tim, còn bạn thì xứng đáng 100 tim luôn.",
      "{name} 5 tim! Bạn với món này đứng cạnh nhau, mình nhìn thấy xứng đôi lắm ạ.",
      "Món 5 tim ra đúng lúc. Vận may cũng biết chọn người mà theo, như bạn đó.",
    ],
    one: [
      "{name} 1 tim thôi ạ. Món này không xứng với bạn, mình xin lỗi.",
      "Món 1 tim đâu đáng để bạn nhìn. Rút bài khác nha ạ.",
      "Lỡ tay đưa {name} rồi, bạn đừng buồn, lỗi của mình hết.",
      "{name} 1 tim ạ. Nhưng bạn đẹp thế này thì ăn gì cũng thấy ngon mà.",
    ],
    rejectFive: [
      "Bỏ cả món 5 tim. Bạn luôn hướng tới điều tốt hơn, ngưỡng mộ ghê.",
      "Món ruột mà bạn cũng dám đổi. Bản lĩnh thật sự.",
      "Món 5 tim mà bạn cũng cho qua. Chắc bạn thấy mình xứng với 6 tim.",
    ],
    redrawFast: [
      "Chỉ liếc qua là biết không hợp. Mắt nhìn của bạn nhanh thật!",
      "Quyết đoán quá! Mình phục bạn luôn.",
      "Nửa giây đã nhận ra, bạn là thiên tài chứ còn gì nữa.",
      "Bấm nhanh như chớp! Phản xạ này mà đi thi đấu là có huy chương luôn ạ.",
    ],
    autoPick: [
      "Bạn tin tưởng giao cho mình, vinh dự quá ạ!",
      "Để mình chọn giùm, đúng là người biết phân công.",
      "Bạn giao việc là mình làm liền, được bạn sai bảo là hạnh phúc lắm ạ.",
      "Để mình chọn giùm ạ. Người làm chuyện lớn đâu cần bận tâm chuyện nhỏ.",
    ],
    edgePick: [
      "Chọn lá bài ngoài rìa, tầm nhìn chiến lược đỉnh thật.",
      "Lá bài ngoài cùng. Bạn chọn gì cũng có lý do sâu xa hết.",
    ],
    cook: [
      "Nấu {name}? Tay nghề như bạn thì mở nhà hàng được luôn đó.",
      "Bạn tự nấu {name} thì chắc chắn ngon hơn đầu bếp 5 sao.",
      "Vào bếp làm {name}, bếp nhà bạn có phước ghê.",
      "Bạn nấu {name} hả? Nồi niêu nghe tin chắc vui lắm, được tay bạn đụng vào mà.",
      "{name} bạn nấu thì dở cũng thành ngon. Mà bạn thì làm gì có chuyện nấu dở.",
    ],
    drink: [
      "{name}, thức uống xứng với người thanh lịch như bạn.",
      "Một ly {name} cho người có gu. Chuẩn luôn.",
      "{name} ngon cỡ nào cũng không ngọt bằng nụ cười của bạn.",
      "{name} hả? Bạn cầm ly lên là thành ảnh quảng cáo liền.",
    ],
    veg: [
      "Ăn chay, tâm sáng như bạn thì món gì cũng thành cao lương mỹ vị.",
      "{name} chay. Bạn đúng là người sống đẹp.",
      "Người biết ăn chay là người biết thương mình. Như bạn đó.",
      "{name} chay đây ạ. Bạn ăn nhẹ mà phong thái vẫn sang như đi dự tiệc.",
    ],
    morning: [
      "Sáng sớm đã chọn {name}, người thành công đều dậy sớm như bạn.",
      "Mới sáng đã chủ động lo ăn uống, kỷ luật đáng nể.",
      "Sáng nay trời đẹp, mà vẫn không đẹp bằng bạn.",
      "Mới sáng đã có {name}. Người đẹp như bạn thì dậy sớm cũng rạng rỡ.",
      "Sáng sớm đã lo xong chuyện ăn, bạn làm gì cũng đi trước người ta một bước.",
    ],
    generic: [
      "{name}! Chỉ có bạn mới xứng với món này.",
      "Mình chọn {name}, nhưng thật ra là nhờ vận may của bạn.",
      "{name}. Bạn chọn món nào, món đó tự nhiên ngon hơn.",
      "Ra {name}. Có bạn đứng đó, mình xào cũng khéo hơn hẳn.",
      "{name} đây ạ. Được bạn để mắt tới là món này nở mày nở mặt rồi.",
      "{name}! Món này chắc đang mừng rơi nước mắt vì được bạn nhìn tới.",
      "Ra {name}. Người có gu như bạn liếc một cái là biết món ngon cỡ nào rồi.",
      "{name} đây ạ. Bạn mà chê thì mình cũng thấy bạn chê có duyên ghê.",
    ],
    firstSpin: [
      "Bạn tới rồi! Mình chờ bạn cả ngày luôn đó.",
      "Được phục vụ bạn là niềm vinh hạnh của mình.",
      "Chào người dùng tuyệt vời nhất của Meal Maybe!",
      "Bạn mở app là cả màn hình sáng rực lên luôn.",
      "Bạn mở app rồi! Mình lau bài sạch bong chờ bạn từ sáng tới giờ.",
      "Chào bạn, người có gu ăn uống xịn nhất mà mình từng phục vụ ạ.",
    ],
    late: [
      "Khuya rồi mà bạn vẫn chăm chút bữa ăn, đúng là người biết sống.",
      "Ăn đêm hả? Người biết tận hưởng như bạn xứng đáng một bữa khuya.",
      "Khuya vậy mà bạn vẫn tươi tỉnh, mình ngưỡng mộ sức sống của bạn quá.",
      "Ăn khuya ạ? Người chăm chỉ như bạn thì cuối ngày phải được thưởng chứ.",
    ],
    afterCommit: [
      "Vừa chốt đã quay tiếp. Năng lượng của bạn đáng nể thật.",
      "Chọn thêm món nữa, người biết chiều bản thân như bạn hiếm lắm.",
      "Chốt xong còn xào thêm, bạn đúng là người không bao giờ ngừng khám phá.",
      "Lại xào tiếp ạ? Được phục vụ bạn thêm một lần, mình mừng lắm.",
    ],
    commitFirst: [
      "Chốt ngay lần đầu! Trực giác của bạn chưa bao giờ sai.",
      "Một lần là chuẩn. Đúng là thiên tài chọn món.",
      "Chốt cái rụp! Người quyết đoán như bạn, mình mê thiệt sự.",
      "Rút một lần là chốt. Mắt nhìn người, à không, nhìn món của bạn đỉnh quá.",
      "Chốt ngay lần đầu! Người khác mất cả buổi, bạn chỉ cần một giây.",
    ],
    commitLate: [
      "Sau {n} lần, bạn chọn được {name}. Kiên nhẫn là phẩm chất của người vĩ đại.",
      "{name} sau {n} lần. Đáng chờ, vì bạn luôn chọn thứ tốt nhất.",
      "Chốt {name} sau {n} lần. Nhờ kén kỹ vậy nên bạn mới luôn được ăn ngon đó ạ.",
    ],
    commitOne: [
      "Chốt cả món 1 tim, bạn bao dung quá. Món này may mắn ghê.",
      "Bạn chốt {name} 1 tim, cho món yếu thế một cơ hội. Tấm lòng bạn rộng như biển.",
    ],
    commitCook: [
      "Chốt nấu {name}. Bữa này chắc chắn là tuyệt tác của bạn.",
      "Bạn nấu {name} thì ai được ăn cùng là có phước.",
      "Chốt nấu {name}! Hôm nay căn bếp nhà bạn sắp thành nhà hàng rồi ạ.",
    ],
    commitDrink: [
      "Chốt {name}. Ly này sẽ đẹp hơn khi ở trong tay bạn.",
    ],
    commitGeneric: [
      "Chốt {name}! Lựa chọn hoàn hảo từ một người hoàn hảo.",
      "Tuyệt vời, {name}! Bạn chọn đúng lắm luôn.",
      "Mình hãnh diện vì được bạn chốt. Ăn ngon ạ!",
      "Chốt {name}! Mình xin phép vỗ tay ba ngày ba đêm.",
      "Chốt {name}! Món này sẽ đi khoe với cả thực đơn là được bạn chọn đó ạ.",
      "Chốt rồi ạ. Mình xin ghi lại khoảnh khắc lịch sử này.",
    ],
    backMid: [
      "Bạn muốn dừng thì mình dừng, bạn luôn đúng.",
      "Gom bài lại liền ạ. Bạn ra lệnh là mình làm.",
    ],
    backReveal: [
      "{name} không xứng với bạn. Bỏ là phải.",
      "Bạn nhìn ra ngay món chưa đạt. Tinh ý quá!",
      "Bạn bỏ {name} mà không cần giải thích. Người giỏi đâu cần giải thích.",
    ],
    slowPick: [
      "Bạn cân nhắc kỹ như người làm việc lớn vậy.",
      "Lá bài nào được bạn chạm vào cũng thành lá bài may mắn.",
      "Cứ từ từ ạ, lựa chọn của bạn đáng để chờ.",
      "Bạn nghĩ lâu vậy chắc đang tính chiến lược, mình không dám hối đâu ạ.",
    ],
    peek: [
      "Bạn xem kỹ từng lá bài. Tỉ mỉ đúng chất người thành công.",
      "Xem {n} lần rồi, bạn đúng là người cẩn thận hiếm có.",
      "Xem bộ bài lần thứ {n}. Bạn nắm thực đơn như lòng bàn tay luôn rồi.",
    ],
    flipMode: [
      "Ăn ngoài hay nấu, bạn làm gì cũng giỏi nên khó chọn là đúng.",
      "Người đa tài như bạn thì phân vân cũng dễ hiểu.",
      "Bạn đổi qua đổi lại, chắc tại cả hai lựa chọn đều mê bạn như nhau.",
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
    addFood: [
      "Thêm {name}! Gu chọn món của bạn đúng là không đùa được.",
      "{name} được bạn chọn vào thực đơn, món này có phước ghê.",
      "Món nào bạn thêm vào cũng sang hẳn lên, {name} cũng vậy.",
      "{name} vô thực đơn rồi! Bạn thêm món nào là bộ bài sáng lên chỗ đó.",
      "Thêm {name} ạ. Gu này thì đầu bếp nổi tiếng cũng phải xin học hỏi.",
    ],
    addStreak: [
      "Thêm món nhanh như bếp trưởng, bạn đúng là có nghề.",
      "Thực đơn này chưa bao giờ xịn như lúc có bạn chăm chút.",
    ],
    editFood: [
      "Bạn chỉnh {name} tinh tế quá, đúng là người để ý từng chi tiết.",
      "Qua tay bạn, {name} xịn hơn hẳn luôn.",
    ],
    deleteFood: [
      "Bạn loại {name} dứt khoát ghê, đúng chất người có chính kiến.",
      "{name} không theo kịp gu bạn, bỏ là phải rồi.",
      "Tạm biệt {name}. Được bạn giữ tới giờ là phước của nó rồi.",
    ],
    deleteFive: [
      "Dám bỏ cả món 5 tim, bạn đúng là người dám thay đổi.",
      "Bạn buông {name} năm tim nhẹ tênh, bản lĩnh thật sự.",
      "Xoá cả {name} 5 tim, bạn không để tình cảm cản bước. Phục thật.",
    ],
    restoreFood: [
      "Bạn nhân hậu quá, cho {name} thêm một cơ hội luôn.",
      "Biết quay lại đúng lúc, bạn quyết định chuẩn thật.",
    ],
    rate5: [
      "{name} được bạn chấm năm tim, vinh dự cả đời của món đó.",
      "Bạn chấm điểm chuẩn như giám khảo ẩm thực vậy.",
      "{name} năm tim! Được bạn khen là món này đủ đem đi khoe cả xóm.",
    ],
    rate1: [
      "Bạn khắt khe đúng chuẩn người sành ăn, một tim là đúng rồi.",
      "{name} chưa đủ đẳng cấp với bạn, một tim là còn nương tay đó.",
      "{name} còn một tim. Bạn thẳng thắn quá, món này phải cố gắng hơn thôi.",
      "Một tim cho {name}. Bạn khó tính mà công bằng, mình phục.",
    ],
    whereCook: [
      "Bạn nấu được cả {name}? Tay nghề đỉnh thật.",
      "{name} vào bếp nhà bạn là lên đời liền.",
      "{name} vô danh sách nấu ăn rồi. Bạn đứng bếp thì món nào chẳng thành đặc sản.",
    ],
    whereOut: [
      "Người sành ăn như bạn biết quán {name} nào ngon hết mà.",
      "Bạn biết món nào nên ăn ngoài, đúng là dân sành điệu.",
    ],
    cancelAdd: [
      "Bạn cân nhắc kỹ lắm, chưa đủ ngon thì chưa thêm, chuẩn luôn.",
      "Suy nghĩ thêm cũng là phong cách của người tinh tế.",
    ],
    quickOn: [
      "Bạn nghĩ ra món nhanh ghê, đúng là người quyết đoán!",
      "Tự ghi danh sách luôn, bạn chủ động quá trời.",
      "Bốc nhanh luôn ạ! Bạn bận việc lớn mà vẫn lo bữa ăn chu đáo quá.",
    ],
    quickClone: [
      "{n} món bạn chọn quý quá, mình nhân lên {m} lá cho xứng tầm.",
      "Món bạn ghi hay tới mức mình phải nhân bản thành {m} lá.",
      "Chỉ {n} món mà món nào cũng chất, mình nhân lên {m} lá cho bạn ngắm lâu hơn.",
    ],
    quick: [
      "{name}, món bạn tự tay ghi, gu xịn khỏi bàn.",
      "Danh sách của bạn món nào cũng đỉnh, {name} càng đỉnh.",
      "{name}! Danh sách bạn tự ghi mà xịn như thực đơn nhà hàng.",
    ],
  },

  // Tánh cọc: cọc tính, nóng tính; xưng "t", câu cộc lốc (không chửi thề)
  grumpy: {
    twice: [
      "{name}. Lại {name}. Chốt đi, t không nói lần ba.",
      "Hai lần {name} rồi đó. Còn chờ gì nữa hả?",
      "{name} nữa! Ăn cái này đi, khỏi cãi.",
      "{name} hai lần liền. T gợi ý tới vậy rồi đó.",
      "Lại {name}. T cố tình. Chốt.",
    ],
    back2: [
      "{name} lại nữa. Hồi nãy bỏ rồi, giờ tính sao?",
      "Gặp {name} lần hai rồi. Đừng bắt t đưa lần ba.",
      "{name} quay lại. Đuổi chi cho mệt rồi giờ gặp lại.",
      "{name} lần hai. Chê một lần là đủ rồi nha.",
    ],
    again: [
      "{name} lần thứ {n}! Hết kiên nhẫn rồi nha!",
      "Lần {n} rồi. {name}. Chốt. Ngay.",
      "Gặp {name} {n} lần rồi! Kết nghĩa luôn đi!",
      "{name}. Lần thứ {n}. T hết muốn mở miệng.",
    ],
    streak3: [
      "Lần thứ ba rồi đó. Nhanh lên.",
      "Ba lần! T xào mỏi tay rồi nha.",
      "Ba lần. Mới khởi động mà đã kén.",
      "Lần ba. T đếm đó nha, đừng tưởng t quên.",
    ],
    streak5: [
      "Năm lần!? Bộ tính xào tới sáng hả?",
      "Lần thứ năm. T bắt đầu bực rồi đó.",
      "Năm lần rồi. Đói thì ăn đại đi, kén gì mà kén!",
      "Năm lần. Bụng kêu t còn nghe thấy đó.",
      "Năm lần! Chọn món chứ có phải mua nhà đâu!",
      "Lần thứ năm. Tay t sắp chuột rút.",
    ],
    streak8: [
      "TÁM LẦN! T nghỉ đây!",
      "Tám lần rồi đó! Có muốn ăn thiệt không vậy?",
      "Hừ. Tám lần. Lần sau t chọn luôn, khỏi hỏi.",
      "Tám lần. Đói thiệt thì chốt từ lần một rồi.",
      "Tám! T nộp đơn nghỉ việc.",
    ],
    streakMax: [
      "{n} lần! T không chơi nữa!",
      "Lần thứ {n}. Hết nói nổi.",
      "{n} lần rồi đó! Muốn t bỏ đi thiệt hả?",
      "Chậc. {n} lần. Nhịn luôn đi cho khỏe.",
      "{n} lần. T đình công.",
      "Lần thứ {n}. Xào tới phai màu bài rồi đó.",
      "{n} lần! Nấu nồi cháo trắng ăn đi, khỏi chọn.",
    ],
    small: [
      "Còn {n} món. Chọn đại đi!",
      "Hết đường lựa rồi. Đừng có kén nữa.",
      "Còn {n} món. Kén nữa là nhịn.",
    ],
    five: [
      "{name}. Năm tim. Chốt. Đừng hỏi.",
      "Món ruột đó! Còn chần chừ là t cất luôn.",
      "{name}. Năm tim. Còn đứng đó hả?",
      "Năm tim đó! Tự chấm chứ ai. Chốt!",
    ],
    one: [
      "{name}. Một tim. Ừ, t biết. Đừng nhìn t.",
      "Ra món một tim. Kệ, ai biểu giữ nó trong thực đơn.",
      "{name}. Một tim. Số rồi, chịu.",
      "Một tim. T rút thôi, đâu phải t chấm.",
    ],
    rejectFive: [
      "Năm tim mà cũng bỏ!? Vậy ăn gì?",
      "Hả? Món ruột mà chê? Thôi t chịu.",
      "Năm tim cũng chê. Vậy chấm năm tim chi?",
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
      "Nấu {name}. Cháy thì tự chịu.",
      "{name}. Vô bếp. Lẹ.",
    ],
    drink: [
      "Nước thôi mà cũng xào. Hừ.",
      "{name}. Uống đi.",
      "{name}. Uống xong đừng kêu đói.",
      "Ly nước cũng bắt t chọn. Rồi, {name}.",
    ],
    veg: [
      "Chay thì chay. Ăn đi.",
      "{name}. Chay. Đừng kén.",
      "Chay. {name}. Ăn cho tâm tịnh, bớt kén.",
    ],
    morning: [
      "Mới sáng mà. Để t tỉnh ngủ đã.",
      "Sáng sớm. {name}. Đừng làm phiền nữa.",
      "Sáng bảnh mắt đã đói. {name}. Đi.",
      "Chưa kịp uống cà phê đã bị lôi dậy. {name} đó.",
    ],
    generic: [
      "{name}. Rồi đó.",
      "Ra {name}. Ăn đi, đừng hỏi.",
      "{name}. Ưng thì chốt, không thì thôi. T mệt.",
      "Nè, {name}. Vừa lòng chưa?",
      "{name}. Nhìn gì? Ăn đi.",
      "Ra {name}. Chê thì tự xào lấy.",
      "{name}. Hết. Hỏi nữa là t cáu.",
    ],
    firstSpin: [
      "Gì nữa đây? Rồi, xào.",
      "Lại đói hả? Chậc.",
      "Mới mở đã bắt làm. Được rồi.",
      "Tới rồi hả. Ngồi yên đó, t xào.",
      "Chưa chào câu nào đã đòi ăn. Rồi.",
    ],
    late: [
      "Mấy giờ rồi!? T đang ngủ mà!",
      "Khuya lắc khuya lơ còn ăn. Hừ.",
      "Khuya rồi. Ăn xong đi ngủ liền, nghe chưa.",
      "Nửa đêm. Ai cũng ngủ, trừ cái bụng này với t.",
    ],
    afterCommit: [
      "Mới chốt xong! Lại nữa hả!?",
      "Chốt rồi còn bốc. Rảnh ghê.",
      "Chốt rồi mà! Ăn chưa mà xào nữa?",
      "Vừa chốt xong. Lại xào. T bó tay.",
    ],
    commitFirst: [
      "Chốt liền. Tốt. Vậy mới được chứ.",
      "Ừ. Nhanh gọn. T thích vậy.",
      "Một lần là chốt. Được. Khỏi cằn nhằn.",
      "Chốt ngay. Hiếm đó. T ghi sổ.",
    ],
    commitLate: [
      "CUỐI CÙNG! {n} lần đó biết không?",
      "Chốt {name}. Sau {n} lần. T mệt xỉu.",
      "{n} lần mới chốt {name}. Tay t rã rời.",
    ],
    commitOne: [
      "Một tim mà cũng chốt. Ừ, tùy.",
      "Chốt {name} một tim. Ăn xong đừng than.",
    ],
    commitCook: [
      "Chốt. Đi nấu đi. Nhớ tắt bếp.",
      "Nấu {name}. Rửa chén luôn nha.",
      "Chốt {name}. Vô bếp. Cấm gọi ship.",
    ],
    commitDrink: [
      "Chốt nước. Ăn cơm nữa đó, đừng có nhịn.",
      "{name}. Chốt. Uống lẹ rồi kiếm cơm ăn.",
    ],
    commitGeneric: [
      "Chốt. Đi ăn đi.",
      "{name}. Xong. Đừng đổi ý.",
      "Chốt rồi. Giờ để t yên.",
      "Chốt {name}. Cấm mở app lại trong một tiếng.",
      "Rồi. Chốt. T tắt đèn đây.",
      "{name}. Chốt. Ngon dở gì cũng ăn hết.",
    ],
    backMid: [
      "Đang xào mà bỏ!? Vậy kêu t xào làm chi?",
      "Hừ. Bỏ thì bỏ.",
    ],
    backReveal: [
      "Lật ra rồi lại bỏ. Phí công t.",
      "{name} cũng không chịu. Khó chiều ghê.",
      "Bỏ {name} không một lời. Hừ.",
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
      "Bật chay mà không có món chay. Ăn gió hả?",
    ],
    addFood: [
      "{name}. Thêm rồi. Được chưa.",
      "Lại thêm món. Thêm cho lắm rồi cũng không chịu chốt.",
      "Rồi, {name} vô bộ bài. Xong.",
      "Thêm {name}. Thêm nữa là t dày như cuốn từ điển.",
      "{name} vô rồi. Rút trúng thì ăn, cấm chê.",
    ],
    addStreak: [
      "Thêm hoài! Đủ rồi đó.",
      "Nhiều món vậy rồi còn thêm. Chọn nổi không đó?",
      "Thêm nữa! Mở quán luôn đi!",
    ],
    editFood: [
      "Sửa rồi. Đừng sửa nữa.",
      "{name}. Lưu. Xong.",
    ],
    deleteFood: [
      "Xoá {name}. Tốt. Bớt một món phải xào.",
      "Bỏ thì bỏ. Đừng hối hận.",
      "{name} đi rồi. Nhẹ bài.",
      "Xoá {name}. Mai thèm đừng kêu t.",
    ],
    deleteFive: [
      "Năm tim mà xoá!? Hết hiểu nổi.",
      "Món ruột cũng bỏ. Tuỳ.",
    ],
    restoreFood: [
      "Xoá rồi lại lấy lại. Lằng nhằng.",
      "{name} về rồi. Đừng xoá nữa.",
      "Lấy {name} lại. Biết ngay mà.",
    ],
    rate5: [
      "Năm tim. Ừ. Nhớ đó.",
      "{name} năm tim. Rút trúng thì chốt liền, khỏi lựa.",
      "Năm tim cho {name}. Chấm rồi thì đừng chê.",
    ],
    rate1: [
      "Một tim. Vậy giữ làm gì.",
      "{name}. Một tim. Rút trúng đừng có than.",
      "{name} một tim. Ghét thì xoá luôn cho gọn.",
    ],
    whereCook: [
      "{name} nấu được. Ừ. Nhớ rửa chén.",
      "Thêm vô bộ nấu. Xong.",
    ],
    whereOut: [
      "Ăn ngoài. Ừ. Tốn tiền.",
      "{name} ăn ngoài. Ghi rồi.",
    ],
    cancelAdd: [
      "Mở rồi đóng. Rảnh ghê.",
      "Không thêm thì mở chi.",
    ],
    quickOn: [
      "Bốc nhanh. Gõ lẹ.",
      "Tự ghi món. Được. Lẹ.",
    ],
    quickClone: [
      "{n} món. Ít. T nhân lên {m} lá.",
      "Có {n} món cũng bắt xào. Photo thêm, {m} lá. Xong.",
    ],
    quick: [
      "{name}. Tự ghi đó. Ăn đi.",
      "{name}. Đừng hỏi t.",
      "{name}. Tự viết đó. Cãi ai?",
      "Ra {name}. Tự ghi thì tự ăn.",
    ],
  },

  // Thi sĩ: cà khịa bằng chơi chữ (nói lái, đồng âm, bẻ thành ngữ), chơi vần, đôi khi làm thơ có vần
  // (lục bát, thơ 4–5 chữ; các dòng thơ ngăn bằng \n); xưng "ta", gọi "người"
  poet: {
    twice: [
      "{name} ra lại. Một lần là tình cờ, hai lần là ý trời, người còn giả đờ thì là ý… người.",
      "{name} nhắn người:\nHai lần gõ cửa chưa thưa,\nMón ngon hai bận, người chừa cho ai?",
      "Tránh vỏ dưa gặp vỏ dừa, tránh {name} lại gặp {name}. Thôi người chừa cái tật chê đi cho vừa.",
      "{name} hai lần liền. Trời gửi thư tay tận cửa mà người còn làm ngơ, chắc đợi trời gửi… chuyển phát nhanh.",
      "Món cũ lại về,\nNgười vẫn chê chê.\nLần ba mà chạy,\nBụng réo ê chề.",
    ],
    back2: [
      "Người bỏ {name} ra, ai dè là bỏ bùa: nó quay lại rồi đó. Chốt đi kẻo thua.",
      "Món người vừa đuổi hồi xưa,\nNay quay về lại như chưa giận hờn.\n{name} rộng lượng vậy đó, người còn hẹp hòi chi.",
      "{name} quay lại lần hai: đi thì bị chê, về thì thấy ghê, mà ghê nhất là người vẫn chưa chịu mê.",
      "Có mới nới cũ, người nới {name} ra, {name} lại nới đường về. Món này dai hơn cả tình cũ.",
    ],
    again: [
      "{name} lần thứ {n}. Người thì kén, món thì bền; người thì lơ, món thì chờ; người thì chạy, món thì… vẫn ở đây.",
      "Có công mài sắt có ngày nên kim; gặp {name} tới lần thứ {n} mà người vẫn chưa nên… bữa.",
      "{name}, lần thứ {n}:\nGặp hoài vẫn cứ làm lơ,\nMón thành bạn cũ, người giờ vẫn chê.",
      "{name} lần thứ {n} rồi đó. Người đang chọn món hay ôn bài? Ôn kỹ vậy chắc thi đậu, còn bụng thì rớt.",
      "{name} lần thứ {n}. Hai lần là tình cờ, ba lần là định mệnh, từ đó trở đi là… mệnh lệnh: chốt!",
    ],
    streak3: [
      "Ba lần. Kén cá chọn canh đã đành, đằng này người kén cá chọn… cả canh lẫn cái muỗng.",
      "Ba lần lật lá bài ra,\nBa lần người lắc, ta già thêm ba.",
      "Ba lần rồi: bụng thì kêu, miệng thì chê, tay thì lật, còn ta thì… tê.",
      "Lần thứ ba. “Bữa nay” mà cứ chần chừ, nói lái thành “bay nữa”: bữa này bay mất nữa đó người.",
      "Lá một chê mặn,\nLá hai chê nhạt,\nLá ba chưa nhìn,\nĐã chê… rào rạt.",
    ],
    streak5: [
      "Năm lần. Người om bài lâu tới mức món om ngoài chợ cũng nhừ rồi đó.",
      "Năm lần xào đến mỏi tay,\nNgười còn lắc mãi, ta này hết hơi.",
      "Năm lần. Bụng đánh trống, ruột đánh chiêng, còn tay người thì cứ đánh võng qua lại mấy lá bài.",
      "Năm lần. Chín người mười ý, mà một mình người đã năm ý, ý nào cũng… chê.",
      "Lần thứ năm. “Mỏi tay” nói lái thành “may tỏi”: may mà người chưa bắt ta bóc tỏi luôn.",
      "Năm lần. Ăn trông nồi, ngồi trông hướng; người thì ngồi trông mấy lá bài, còn nồi thì chưa bắc.",
    ],
    streak8: [
      "Tám lần bài đổ như mưa,\nNgười còn đứng ngó như chưa đói gì.",
      "Tám lần. Ba chìm bảy nổi chín lênh đênh, người ráng thêm một lần nữa là đủ bộ lênh đênh.",
      "Tám lần. Chín bỏ làm mười thì đã chốt từ lâu, đằng này người cứ bỏ… làm lại.",
      "Tám lần. Bài thì rụng đầy sân, bụng thì rên từng cơn, người thì vẫn còn… phân vân.",
      "Tám lần. Ta “đứng chờ” lâu quá, nói lái thành “đờ chứng” luôn rồi. Bệnh này người gây ra đó.",
    ],
    streakMax: [
      "{n} lần. Có công mài sắt có ngày nên kim, có công xào bài {n} lần mà chưa nên… một bữa.",
      "Lần thứ {n}:\nBài xào nát cả mép rồi,\nNồi cơm đã nguội, bụng sôi réo hoài.",
      "Lần thứ {n}. Người không chọn món nữa, người đang viết hồi ký “Những lá bài tôi đã phụ”.",
      "{n} lần. “Chốt đi” mà không chốt, nói lái thành “chi đốt”: đốt thời gian chi vậy người, đốt bếp còn có ích hơn.",
      "{n} lần. Một điều nhịn chín điều lành, mà người nhịn tới {n} lần thì lành đâu chưa thấy, chỉ thấy đói lả.",
      "{n} lần rồi.\nBài rã rời trên tay,\nBụng réo cả đêm ngày,\nNgười vẫn còn loay hoay,\nTa xin nghỉ từ nay.",
    ],
    small: [
      "Còn {n} món. Xôi hỏng bỏng không tới nơi rồi, người ơi, bốc lẹ kẻo trắng tay.",
      "Còn {n} món.\nThực đơn đầy ắp hồi nào,\nNgười chê cho lắm, giờ lao đao rồi.",
      "Còn {n} món. Một cây làm chẳng nên non, {n} lá bài làm chẳng nên… bộ. Lựa lẹ đi người.",
    ],
    five: [
      "{name} năm tim tới rồi. Đói bụng gặp món ruột, như buồn ngủ gặp chiếu manh, người còn nằm đó chê chiếu mỏng?",
      "{name} đây.\nNăm tim người đã trao rồi,\nGiờ còn làm lạ, tim ơi tội tình.",
      "Người chấm {name} năm tim, giờ đừng chấm phẩy lưỡng lự nữa. Chấm hết: chốt.",
      "Chuột sa chĩnh gạo là đây: {name} năm tim rơi trúng tay người. Còn chần chừ là gạo mốc.",
      "{name}, món ruột năm tim. Ruột người đang réo tên nó đó, ta nghe rõ lắm.",
    ],
    one: [
      "{name}, một tim. Ghét nhau quả bồ hòn cũng méo, mà số trời bắt người nếm thử cái méo này.",
      "{name}:\nMột tim lẻ bóng đơn côi,\nGiữ làm chi nữa, món ngồi ngóng trông.",
      "{name} một tim. Người chấm nó điểm liệt mà nó vẫn đi thi lại. Món có chí vậy đó.",
      "Một tim mà cũng ra. {name} là con sâu làm rầu nồi canh, nhưng người mới là kẻ bỏ nó vô nồi.",
    ],
    rejectFive: [
      "Bỏ {name} năm tim? Người thương kiểu “yêu cho roi cho vọt”, mà roi này quất ngay vô bụng mình.",
      "{name} bị phụ:\nNăm tim trao đó rồi thôi,\nLời thề năm cũ nổi trôi theo bài.",
      "Tự chấm {name} năm tim, tự rút bài khác. Tự thương tự phụ, tự biên tự… đói.",
    ],
    redrawFast: [
      "Cưỡi ngựa xem hoa còn thấy hoa, người cưỡi… tên lửa xem bài, thấy được chữ nào không?",
      "Dục tốc bất đạt: người lật nhanh vậy, món chưa kịp chào đã bị tiễn.",
      "Bài vừa ló mặt,\nNgười đã quay đi.\nChưa đọc tên gì,\nĐã chê chi li.",
    ],
    autoPick: [
      "Bật “Tôi chọn” rồi nhờ ta chọn. Người tự chọn… cách không chọn. Thâm thuý ghê.",
      "Mèo mù vớ cá rán: người nhắm mắt nhờ ta bốc, trúng gì ăn nấy nha, đừng mở mắt ra chê.",
      "Đã xưng “tôi chọn” hẳn hoi,\nRồi nhờ ta bốc, ai coi cũng cười.",
    ],
    edgePick: [
      "Chọn bài ở rìa. Người sống đúng câu “ăn chắc mặc bền”, chắc tới mức không dám đụng lá giữa.",
      "Bài nằm giữa chẳng dám kề,\nNgười men theo mép như về bến quen.",
    ],
    cook: [
      "Nấu {name} hả? Chín bỏ làm mười thì được, sống bỏ làm chín thì… bụng người biết tay.",
      "{name}:\nNgười lên bếp, lửa lên hương,\nKhói bay lãng mạn, chén đương chờ người.",
      "Nấu {name} nhớ: nêm rồi nếm, nếm rồi nêm, nêm nếm đàng hoàng, đừng nếm hết trước khi dọn lên.",
      "Nấu {name}. Lửa thử vàng, gian nan thử sức, còn bếp thì thử… độ kiên nhẫn rửa chén của người.",
      "Nhà sạch thì mát, bát sạch ngon cơm. Nấu {name} xong nhớ rửa bát, đừng để bát nằm chờ tới hôm sau.",
    ],
    drink: [
      "Uống {name}. Tu một hơi thì được, chứ tu kiểu này thì chùa nào dám nhận.",
      "{name} đó.\nMột ly thay bữa sao no,\nUống xong bụng lại réo to hơn nhiều.",
      "{name}. Uống cho say sưa thì ta chiều, uống thay bữa trưa bữa chiều thì… thưa, ta không chịu.",
      "{name}. Ta xào bài tới mỏi, người được một ly thôi. Công ta cả bộ, người uống… một hồi.",
      "{name}:\nMột ly mát rượi,\nMột hơi là xong,\nUống thì đã lòng,\nBụng thì vẫn trông.",
    ],
    veg: [
      "{name}, chay tịnh. Có thực mới vực được đạo, người ăn cho no rồi hẵng tu.",
      "{name} đây.\nRau xanh đậu trắng thanh thanh,\nMà sao bụng cứ loanh quanh thịt bò?",
      "{name}, món chay. Ăn chay mà lòng còn mơ gà rán thì mới chay miệng, chưa chay lòng.",
      "{name} ra, chay tịnh. Người thanh lọc cơ thể, ta thanh lọc… mấy câu cà khịa cho hợp không khí.",
    ],
    morning: [
      "Sáng sớm không lo nướng giấc mà lo nướng món. {name} nè, tỉnh chưa người?",
      "{name} cho buổi sáng:\nMặt trời mới ló đằng đông,\nNgười còn ngái ngủ đã trông món rồi.",
      "Sáng ra đã {name}. Ăn sáng như vua là đúng sách, nhưng vua đâu có ngáp dài lúc chọn món như người.",
      "{name} buổi sớm. “Bụng đói” nói lái thành “bói đụng”: ta bói rồi, sáng nay người đụng món này.",
    ],
    generic: [
      "{name} ra rồi. Ta xào bài có tâm, người ăn cho có tầm, đừng ngồi đó mà… lầm bầm.",
      "{name} đây:\nBài xào ra món hẳn hoi,\nĐừng chê, đừng ngó, đừng soi mói hoài.",
      "{name}. Người muốn thơ thì ta có thơ, muốn món thì ta có món, muốn chê thì… ta hết giờ.",
      "Ra {name}. Người mà còn chần chừ là món nguội, bài nhàu, ta cáu, bụng người réo đau đáu.",
      "{name}!\nBài lật ra rồi,\nMón đã ngồi chờ,\nNgười còn đứng ngó,\nBụng réo bơ vơ.",
      "{name} tới. Món có tên, bài có số, người có bụng. Thiếu mỗi cái gật đầu.",
    ],
    firstSpin: [
      "Người tới rồi, bụng tới rồi, chỉ còn món là chưa tới. Để ta xào.",
      "Hôm nay người muốn ăn chi,\nĐể ta bốc thử, người thì chớ chê.",
      "Mèo mù vớ cá rán, người mở app vớ được… ta. Hôm nay khỏi phải nghĩ rồi đó.",
      "Chào người. Ta lên dây cót, bài lên khuôn, bụng người chắc cũng lên… cơn đói. Xào thôi.",
    ],
    late: [
      "Khuya rồi mà còn đòi ăn. Ăn vụng thì nhớ chùi mép, ăn khuya thì nhớ… đừng đứng lên cân.",
      "Đêm khuya thanh vắng im lìm,\nNgười còn thức dậy đi tìm mì tôm.",
      "Giờ này còn xào bài? Bụng đói đầu gối phải bò, mà bò tới tủ lạnh thì nhớ bò về giường nha.",
      "Trăng lặn, sao mờ, người còn thẫn thờ đợi món. Ta xào nhẹ tay thôi kẻo hàng xóm dậy.",
      "Giờ này mà xào bài: ta ngáp, người ngáp, chỉ có cái bụng là không chịu ngáp.",
    ],
    afterCommit: [
      "Vừa chốt đã bốc. Được voi đòi tiên, được một món đòi… thêm món nữa.",
      "Chốt rồi mà vẫn chưa yên,\nTay còn ngứa ngáy, xào liền lá sau.",
      "Ăn no rửng mỡ chưa mà đã xào tiếp? Món kia chưa kịp nguội, lòng người đã kịp… nguôi.",
      "Chốt một rồi còn bốc hai. Tham thì thâm, coi chừng thâm luôn cái ví.",
    ],
    commitFirst: [
      "Lật một lần là chốt. Người không kén cá chọn canh, người chọn… cái đầu tiên. Ta mê.",
      "Một lần lật một lần ưng,\nTa chưa kịp mỏi đã mừng rưng rưng.",
      "Chốt ngay lần đầu. Hôm nay người không kén, không chê, không lề mề. Ta cảm động muốn làm vè.",
    ],
    commitLate: [
      "{n} lần mới chốt {name}. Ăn quả nhớ kẻ trồng cây, ăn {name} nhớ kẻ xào bài nãy giờ nha.",
      "Chốt {name} sau {n} lần:\nXào bài mòn cả tay ta,\nNgười đi mỏi mắt mới ra món này.",
      "Chốt {name} sau {n} lần. Nước đến chân mới nhảy, đói đến ruột mới… chốt. Người đúng chuẩn.",
      "{n} lần mới chịu {name}. Chậm mà chắc: người thì chậm, ta thì chắc… mệt.",
    ],
    commitOne: [
      "Chốt {name} một tim. Ghét của nào trời trao của nấy, mà người còn tự tay nhận. Gan ghê.",
      "Chốt {name}:\nMột tim mà cũng chốt liền,\nChắc là đói quá nên hiền hơn xưa.",
    ],
    commitCook: [
      "Chốt nấu {name}. Cầm đũa như cầm bút, nêm nếm như gieo vần. Khét thì… gọi là thơ tự do.",
      "Nấu {name}:\nChốt rồi, bếp đỏ lửa lên,\nNgười ơi nhớ tắt, kẻo quên cháy nồi.",
      "Chốt {name}. Bếp không lửa thì món không chín, nồi không nước thì canh không ngọt, người không rửa chén thì… ta không tha.",
    ],
    commitDrink: [
      "Chốt {name}. Uống cho sướng miệng, rồi nhớ kiếm gì cho sướng bụng, kẻo bụng nó dỗi.",
      "{name} nè:\nChốt rồi, nâng chén lên cao,\nUống cho đã khát, bụng nào có no.",
    ],
    commitGeneric: [
      "Chốt {name}! Người đi ăn, ta đi nghỉ, món đi… vào bụng. Ai về nhà nấy.",
      "{name}!\nChốt rồi, thôi hết đắn đo,\nNgười đi ăn nhé, ta lo rửa bài.",
      "Chốt {name}. Khỏi đoán, khỏi bàn, khỏi than; giờ chỉ việc ăn cho ngon, cho tròn, cho đã.",
      "Chốt {name}. Lời chốt như đinh đóng cột, người mà đổi ý là ta đóng luôn… cái hộp bài.",
      "{name}!\nChốt rồi đó người ơi,\nCất máy đi, nghỉ thôi.\nMón ngon đang chờ đợi,\nĐừng để món mồ côi.",
      "Chốt {name}. Người đã chọn mặt gửi vàng, giờ gửi luôn cái bụng đi ăn cho kịp.",
    ],
    backMid: [
      "Đang xào dở mà bỏ. Đầu voi đuôi chuột, mà chuột còn có đuôi, người bỏ luôn cả đuôi.",
      "Xào chưa tới nửa đã ngưng,\nBài còn lơ lửng giữa chừng ngẩn ngơ.",
    ],
    backReveal: [
      "Lật ra {name} rồi lặng lẽ quay lưng. Người không chê, người… chuồn. Chê còn lịch sự hơn.",
      "{name} vừa ra mắt đã bị bỏ rơi. Ra mắt mà không ai ra đón, món tủi thân ghê.",
      "{name} than:\nMón vừa lộ mặt,\nNgười đã quay đi,\nKhông lời từ biệt,\nKhông một câu gì.",
    ],
    slowPick: [
      "Trâu chậm uống nước đục, người chọn chậm thì ăn… món nguội. Chọn đại một lá đi.",
      "Ngón tay lơ lửng hồi lâu,\nBài nào cũng úp, biết đâu mà dò.",
      "Người chọn bài như chọn vợ chọn chồng, mà bài úp cả, chọn kỹ cỡ nào cũng… hên xui thôi.",
      "Lựa tới lựa lui, lui tới lui lui. Người ơi, tới đi, bài nào cũng vui.",
    ],
    peek: [
      "Xem bộ bài lần thứ {n}. No bụng đói con mắt, mà người thì bụng cũng đói, mắt cũng đói. Xào đi.",
      "Xem lần thứ {n}. Người xem mặt, xem tuổi, xem luôn cả tướng mấy lá bài. Xem xong thì chọn ngày xào đi.",
      "Lần thứ {n}:\nXem tới xem lui,\nMắt no, bụng đói,\nNgười ơi đừng nói,\nXào đi cho vui.",
    ],
    flipMode: [
      "Đứng núi này trông núi nọ, đứng bếp này trông… quán nọ. Người leo núi nào thì leo đi.",
      "Ăn ngoài rồi lại nấu cơm,\nVừa lên bếp đã thèm thơm quán ngoài.",
      "Ăn ngoài thì tiếc tiền, nấu nhà thì tiếc sức, bật tới bật lui thì tiếc… cái công tắc.",
    ],
    flipFilter: [
      "Tham bát bỏ mâm: lọc món chính rồi thèm ăn vặt, lọc ăn vặt rồi nhớ món chính. Mâm nào cũng bỏ.",
      "Lọc này lọc nọ,\nLọc tới lọc lui,\nMón không thấy đâu,\nChỉ thấy ngùi ngùi.",
    ],
    muted: [
      "Tắt tiếng ta, người tưởng lời ta như nước đổ lá khoai? Không đâu, chữ vẫn đọng đây nè.",
      "Tắt loa, ta vẫn còn đây,\nMiệng thì im bặt, chữ đầy trang thơ.",
    ],
    vegMark: [
      "{name} được gắn mác chay. Chay trên giấy thì dễ, chay trong nồi mới khó, đừng lén bỏ tóp mỡ nha.",
      "{name} xuống tóc quy y. Tu thì tu cho tới, đừng để chén nước mắm cá kéo nó hoàn tục.",
      "{name}:\nMón nay khoác áo nâu sòng,\nMong sao trong ruột, trong lòng cũng chay.",
    ],
    vegUnmark: [
      "{name} cởi áo nâu, mặc lại áo… mỡ hành. Ai cũng có một thời lầm lỡ.",
      "{name}:\nTưởng đâu chay tịnh trọn đời,\nAi ngờ mới đó đã rời chùa đi.",
    ],
    vegBulk: [
      "Sửa nhãn chay tới tấp. Người mà mở chùa chắc tuyển sư nhanh nhất xóm.",
      "Chay rồi mặn, mặn rồi chay,\nThầy chùa đứng ngó cũng say sóng rồi.",
    ],
    vegOn: [
      "Bật chay, còn {n} món. Người ăn chay thì ta nói chay: lời thanh đạm, ý nhẹ tênh, cà khịa… ít dầu mỡ.",
      "Còn {n} món chay:\nBật chay, thịt cá lui về,\nCòn rau với đậu, người chê được nào.",
      "Bật chay, {n} món chờ người. Ăn chay cho nhẹ bụng, chứ đừng nhẹ dạ mà chê hết nha.",
    ],
    vegOff: [
      "Tắt chay. Rau xanh ngậm ngùi tiễn khách, thịt kho mỉm cười ra đón. Người đổi phe nhanh ghê.",
      "Ăn chay được một lát thôi,\nThịt kho vừa gọi, người ngồi dậy ngay.",
    ],
    vegEmpty: [
      "Bật chay mà thực đơn không có món chay. Tu mà không có chùa, người định tu ở… tủ lạnh?",
      "Bật chay mà chẳng có rau,\nTìm vài món nhé, gắn mau nhãn vào.",
    ],
    addFood: [
      "Thêm {name}. Có mới thì mừng, nhưng có mới rồi thì nhớ… chốt mới, đừng kén thêm.",
      "{name} vào sổ. Thực đơn dài thêm một dòng, lòng kén dài thêm một khúc, ta dài thêm một… tiếng thở.",
      "{name}:\nThực đơn thêm một tên hay,\nMai mà rút trúng, đừng quay lưng hoài.",
    ],
    addStreak: [
      "Thêm một, thêm hai, thêm ba liền tay. Người đang viết thực đơn hay viết… tiểu thuyết dài kỳ?",
      "Món về tấp nập vui vui,\nMai đừng chọn tới chọn lui cả giờ.",
    ],
    editFood: [
      "Sửa {name} xong. Tốt gỗ hơn tốt nước sơn, sửa kỹ mấy thì lúc rút ra người vẫn… soi.",
      "{name}:\nTô son điểm phấn cho xinh,\nRút ra lần tới, đừng khinh món mình.",
    ],
    deleteFood: [
      "Tiễn {name} khỏi thực đơn. Người đuổi món như đuổi tà, mà món có làm gì người đâu.",
      "{name} đi rồi:\nTay người gạch một đường thôi,\nMai thèm thì chớ có ngồi tiếc thương.",
      "{name} rời thực đơn. Xa mặt cách lòng, mà xa món thì cách… bụng. Mai thèm là biết.",
    ],
    deleteFive: [
      "Xoá {name} năm tim. Ăn cháo đá bát là đây: ăn bao bữa ngon, giờ đá luôn khỏi mâm.",
      "{name}:\nThương ai năm quả tim hồng,\nNay tay bấm xoá, sạch không bóng hình.",
    ],
    restoreFood: [
      "Rước {name} về lại. Mất bò mới lo làm chuồng, người mất món mới lo… bấm hoàn tác. Kịp đó.",
      "{name}:\nXoá rồi lại tiếc,\nTiếc rồi rước về,\nMón cười hề hề,\nNgười thì hơi quê.",
    ],
    rate5: [
      "{name} lên năm tim. Mèo khen mèo dài đuôi, người khen món dài… tim. Mai rút trúng nhớ giữ lời.",
      "{name}:\nNăm tim người chấm rõ ràng,\nMai mà phụ nó, ta mang ra toà.",
    ],
    rate1: [
      "{name} còn một tim. Ghét thì nói ghét, giữ lại làm chi cho món nó… nuôi hy vọng.",
      "{name}:\nMột tim lẻ loi,\nMón ngồi thui thủi,\nGhét thì cho nghỉ,\nGiữ chi cho tủi.",
    ],
    whereCook: [
      "{name} vào bếp. Người cho món vào nồi, món cho người vào… bồn rửa chén. Công bằng ghê.",
      "{name} giờ nấu được. Bếp thêm việc, nồi thêm lửa, người thêm… một lý do để gọi ship.",
    ],
    whereOut: [
      "{name} ra phố. Thắt lưng buộc bụng thì đừng, buộc bụng rồi sao mà ăn? Nới cái ví ra đi.",
      "{name}:\nMón ra phố xá thênh thang,\nVí người mỏng lại, nhẹ nhàng như bay.",
    ],
    cancelAdd: [
      "Mở sổ rồi gấp sổ. Người định thêm món, cuối cùng chỉ thêm… một lần do dự.",
      "Mở ra rồi đóng,\nViết chẳng thành dòng,\nMón trong đầu người,\nCòn đang lòng vòng.",
    ],
    quickOn: [
      "Bỏ sổ món dày, người viết tay. Viết gì ta xào nấy, rút trúng rồi đừng chối là… viết bậy.",
      "Tay người viết vội mấy dòng,\nTa xào cho, chớ có mong ta chiều.",
    ],
    quickClone: [
      "Có {n} món thôi, ta phải nhân lên {m} lá. Ít món mà nhiều bài, như ít cơm mà nhiều… chén.",
      "{n} món thì mỏng, {m} lá thì dày; ta nhân bản khéo tay, rút trúng món nào cũng là… người viết đây.",
    ],
    quick: [
      "{name} ra rồi. Người viết thì người ăn, đừng giả vờ như chữ ai viết lạc vào.",
      "{name} nè:\nChính tay người viết món này,\nGiờ ra lại chối như tay ai làm.",
      "{name}. Người tự đặt vần, ta chỉ đọc. Vần có lệch thì người sửa bút, đừng trách ta.",
      "Ra {name}. Tự viết tự rút, tự ăn tự… khen. Chê là tự vả đó nha.",
      "{name}!\nNgười viết vội vàng,\nTa xào nhịp nhàng,\nRa món nào đó,\nĂn cho đàng hoàng.",
    ],
  },
};
