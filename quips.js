// Lời bình của bộ bài, theo từng tính cách (chọn trong tab Custom bộ bài).
// {name} = tên món, {n} = số lá đã rút / số lần gặp / số lá còn lại tuỳ ngữ cảnh.
// Mỗi tính cách cần đủ các nhóm câu như `sassy`; thiếu nhóm nào thì dùng câu của `sassy`.
window.MEAL_QUIPS = {
  // Cá tính (mặc định): đanh đá, mỉa mai
  sassy: {
      // Rút ra món vừa ra ở lá trước
      twice: [
        'Lại {name}? Bộ bài biết bạn muốn gì rồi đó, đừng giả bộ.',
        '{name} hai lần liên tiếp. Tín hiệu vũ trụ đó, đừng làm như không thấy.',
        '{name} quay lại như người yêu cũ. Chốt đi cho xong, dây dưa hoài.',
        'Ủa alo, {name} nữa nè. Bộ bài hết kiên nhẫn chứ đâu có hết bài.',
        '{name} lần nữa. Không phải bộ bài lười, là số bạn phải ăn món này.',
        'Ra {name} hai lần mà còn chê thì bộ bài chịu, bó tay.',
      ],
      // Món đã gặp 1 lần trong lượt kén này, giờ ra lại
      back2: [
        '{name} quay lại lần 2. Gợi ý tới vậy mà còn chưa hiểu hả?',
        'Chào lại {name}. Nó chưa muốn đi, bạn đuổi hoài coi kỳ ghê.',
        '{name} lại nữa. Lúc nãy chê, giờ thấy nhớ chưa?',
        '{name} tái xuất. Có duyên dữ chưa.',
      ],
      // Gặp cùng một món từ 3 lần trở lên
      again: [
        'Lần thứ {n} gặp {name}. Định mệnh gõ cửa gãy tay rồi mà không ai mở.',
        '{name} lần {n}. Bộ bài không nói nữa, bộ bài hét nè: CHỐT ĐI!',
        '{name}, lần thứ {n}. Vũ trụ nói nhỏ mà bạn cứ bịt tai.',
        'Gặp {name} {n} lần rồi mà vẫn làm như người lạ. Ghê thiệt.',
      ],
      streak3: [
        'Lá thứ 3 rồi. Kén vừa thôi, đây đâu phải nhà hàng 5 sao.',
        '3 lá mà chưa ưng. Bộ bài bắt đầu tự ái rồi đó nha.',
        'Mới lá thứ 3 mà mặt ai đó đã khó chịu rồi.',
        'Ba lá. Chê thêm chút nữa là tới lượt bộ bài chê lại.',
      ],
      streak5: [
        '5 lá. Đang chọn món hay tuyển người yêu vậy?',
        'Lá thứ 5. Bụng thì kêu mà miệng vẫn chảnh, hay ghê.',
        '5 lần rồi. Hay để bộ bài ăn giùm luôn cho lẹ?',
        'Năm lá. Ai nuôi bạn chắc mệt lắm.',
        '5 lá rồi đó. Xào tới nóng tay mà không ai cảm ơn một câu.',
      ],
      streak8: [
        '8 lá. Quán đóng cửa trước khi bạn chọn xong mất.',
        'Lá thứ 8. Xào nhiều quá mòn cả mép bài rồi, đền đi.',
        '8 lần. Chắc không phải đói đâu, chắc là rảnh.',
        '8 lá. Thôi khỏi ăn, nhịn cho khỏe người.',
        'Tám lá. Bộ bài mà có chân là bỏ đi luôn rồi đó.',
      ],
      streakMax: [
        '{n} lá. Bộ bài xin nghỉ ốm, có giấy bác sĩ đàng hoàng.',
        '{n} lần rồi đó. Úp mì gói đi cho nhanh, khỏi chọn.',
        'Kỷ lục mới: {n} lá không chốt. Chúc mừng, chắc vậy.',
        '{n} lá. Tới đây thì nhịn luôn cũng được, bộ bài ủng hộ.',
        '{n} lá rồi trời ơi. Bấm chốt khó lắm hả?',
        'Lá thứ {n}. Nói thật: bạn không thiếu món ăn, bạn thiếu quyết tâm.',
        '{n} lá. Bộ bài đang tính tự xào mình vô sọt rác.',
      ],
      small: [
        'Còn đúng {n} lá. Kén thêm chút nữa là ăn gió.',
        'Bộ bài mỏng như ví cuối tháng rồi.',
        'Chỉ còn {n} lá. Chọn đại đi, hết đường lựa rồi.',
        '{n} lá cuối. Hồi nãy chê cho lắm vô, giờ thấy chưa.',
      ],
      five: [
        '{name}, 5 tim hẳn hoi. Còn đứng đó làm gì?',
        'Món 5 tim đây. Không chốt thì chấm 5 tim làm chi?',
        '{name}, món ruột. Bấm chốt đi, đừng làm màu.',
        '5 tim tự chấm đó nha, đừng nói bộ bài ép.',
      ],
      one: [
        '{name}… 1 tim. Bộ bài xin lỗi trước.',
        '1 tim thôi à? Chắc hôm nay là ngày thử thách.',
        '{name}, 1 tim. Ghét vậy mà còn để trong thực đơn, lạ ghê.',
        'Món 1 tim đây. Bộ bài cũng đâu có muốn, số phận thôi.',
      ],
      rejectFive: [
        'Bỏ luôn món 5 tim? Tim bạn làm bằng đá hả?',
        'Chấm 5 tim rồi lại chê. Người gì đâu mà khó hiểu.',
        '5 tim mà cũng đá. Vậy món nào mới vừa lòng?',
        'Tự chấm 5 tim, tự bỏ. Tự biên tự diễn luôn.',
      ],
      // Bấm "Rút lá khác" khi lá vừa lật chưa tới 1,5 giây
      redrawFast: [
        'Chưa kịp nhìn đã chê. Giỏi ghê.',
        'Lá chưa nóng tay đã bấm đổi. Nhanh nhảu dữ.',
        'Nhìn kỹ chưa mà chê? Bộ bài thấy bị xem thường.',
        'Đọc tên món chưa vậy? Hay bấm theo phản xạ?',
      ],
      // Chế độ tự chọn lá nhưng bấm "Để máy chọn giùm"
      autoPick: [
        'Bật tự chọn rồi lại nhờ máy. Lười có hệ thống luôn.',
        'Tự chọn mà cũng nhờ. Mắc cười.',
        'Máy chọn giùm thì chê là chê máy nha, đừng đổ cho bộ bài.',
      ],
      // Tự chọn đúng lá ngoài rìa
      edgePick: [
        'Chọn lá ngoài cùng. An toàn quá ha.',
        'Lá rìa. Không dám mạo hiểm ở giữa hả?',
        'Né hết mấy lá giữa. Sợ gì dữ vậy?',
      ],
      cook: [
        'Nấu {name} à? Nhớ rửa bát, đừng để mai.',
        '{name} tự nấu. Tự tin ghê.',
        'Tự nấu {name}. Bếp nhà bạn đang run đó.',
        'Nấu {name} hả? Cháy là tại bạn, không phải tại bài nha.',
      ],
      drink: [
        'Uống {name} cho no hả? Sáng tạo đó.',
        '{name}. Nước thôi mà cũng phải xào bài.',
        '{name} hả? Ly thứ mấy trong ngày rồi?',
      ],
      morning: [
        'Sáng sớm đã {name}. Bụng khỏe dữ.',
        'Mới sáng đã xào bài. Siêng ăn ghê.',
      ],
      generic: [
        'Bộ bài đã quyết. Bạn chỉ việc gật đầu.',
        '{name}. Đừng hỏi tại sao, bộ bài cũng không biết.',
        'Xào mỏi tay mới ra {name} đó, trân trọng giùm.',
        '{name} nè. Chê thì nói, đừng có nhìn kiểu đó.',
        'Ra {name}. Ưng thì chốt, không ưng thì… cũng chốt đi.',
        '{name}. Bộ bài chọn, bộ bài chịu trách nhiệm. Chắc vậy.',
      ],
      firstSpin: [
        'Mở app là biết đói rồi. Xào nè.',
        'Lại là bạn. Hôm nay định kén tới lá thứ mấy?',
        'Tới rồi hả? Bộ bài khởi động tay đây.',
      ],
      late: [
        'Giờ này còn đòi ăn? Được thôi, không ai phán xét. Trừ bộ bài.',
        'Ăn đêm hả? Cái cân sẽ nhớ chuyện này.',
        'Nửa đêm xào bài. Bộ bài cũng cần ngủ chứ bộ.',
        'Giờ này quán còn mở không mà xào? Thôi kệ, xào.',
      ],
      afterCommit: [
        'Vừa chốt xong đã xào tiếp. Định ăn hai bữa à?',
        'Món kia còn chưa nguội mà.',
        'Chốt rồi còn quay. Hối hận nhanh vậy?',
        'Ăn gì mà ăn liên tục vậy trời.',
      ],
      commitFirst: [
        'Chốt ngay lá đầu. Quyết đoán hiếm thấy.',
        'Một phát ăn ngay. Bộ bài cảm động muốn khóc.',
        'Lá đầu đã chốt. Người gì đâu dễ thương.',
      ],
      commitLate: [
        'Cuối cùng cũng chốt. Bộ bài xin nghỉ phép 5 phút.',
        'Sau {n} lá, {name} chiến thắng. Vỗ tay cho sự kiên nhẫn của bộ bài.',
        '{n} lá mới chốt. Lần sau nghĩ sẵn ở nhà rồi hẵng mở app nha.',
        'Chốt {name} sau {n} lá. Tưởng phải xào tới Tết.',
      ],
      commitOne: [
        'Chốt món 1 tim. Tự làm khổ mình là có thật.',
        'Chốt {name} 1 tim hả? Ai ép đâu mà tội vậy.',
      ],
      commitCook: [
        'Chốt nấu {name}. Bếp nhà bạn chuẩn bị tinh thần.',
        'Nấu {name} thì nấu cho đàng hoàng, đừng gọi ship nửa chừng.',
      ],
      commitDrink: [
        'Chốt {name}. Uống thì uống, nhớ ăn cơm nữa.',
      ],
      commitGeneric: [
        'Chốt! Giờ thì đi ăn đi, đừng mở app nữa.',
        'Chốt {name}. Đổi ý bây giờ là bộ bài giận thật đó.',
        'Chốt rồi nha. Ăn không ngon đừng đổ thừa bộ bài.',
        'Xong. Bộ bài đi nghỉ, bạn đi ăn.',
      ],
      backMid: [
        'Đang xào dở mà bỏ. Bộ bài hơi tự ái.',
        'Bỏ ngang? Bài chưa kịp khoe tay nghề.',
        'Xào chưa xong đã chạy. Làm gì cũng nửa vời vậy?',
      ],
      backReveal: [
        'Không rút lá khác mà trốn luôn. Khéo ghê.',
        '{name} bị bỏ rơi không một lời giải thích.',
        'Lật ra {name} rồi giả bộ không thấy. Bộ bài thấy hết nha.',
      ],
      slowPick: [
        'Chọn lá thôi mà, có phải chọn nghề đâu.',
        'Lá nào cũng úp như nhau. Nghĩ lâu cũng vậy.',
        'Bộ bài xoè mỏi tay rồi đó.',
        'Nhìn chằm chằm vậy lá cũng không tự lật đâu.',
        'Lẹ lên, bụng bạn đói chứ bộ bài đâu có đói.',
      ],
      // Mở "Xem bộ bài" nhiều lần mà chưa xào
      peek: [
        'Xem hoài vậy, định học thuộc bộ bài à?',
        'Ngắm đủ chưa? Xào đi chứ.',
        'Xem bộ bài lần thứ {n}. Món không tự nhảy ra đâu.',
      ],
      flipMode: [
        'Ngoài hay nấu? Quyết một lần coi.',
        'Đổi qua đổi lại hoài, công tắc mòn rồi đó.',
        'Ăn ngoài thì lười đi, nấu thì ngại rửa. Hiểu rồi.',
      ],
      flipFilter: [
        'Món chính, ăn vặt, nước… bấm hết rồi đó, chọn đi.',
        'Lọc tới lọc lui mà bụng vẫn rỗng.',
      ],
      muted: [
        'Tắt tiếng bộ bài hả? Chữ vẫn còn đây nha.',
        'Bịt loa được chứ bịt miệng bộ bài hổng được đâu.',
      ],
  },

  // Thân thiện: ấm áp, động viên, gợi ý nhẹ nhàng
  friendly: {
    twice: [
      '{name} lại ra nè! Chắc là duyên đó, thử chốt xem sao?',
      'Hai lần liền {name}. Bộ bài nghĩ món này hợp với bạn hôm nay đó.',
      '{name} quay lại chào bạn nè. Cân nhắc thử nha!',
    ],
    back2: [
      '{name} ghé lại lần nữa nè. Hay là thử món này nhỉ?',
      'Gặp lại {name} rồi. Bộ bài thấy món này cũng được lắm đó.',
    ],
    again: [
      '{name} lần thứ {n} rồi đó. Chắc bụng bạn đang gọi tên món này.',
      'Lần thứ {n} gặp {name}. Bộ bài nhẹ nhàng gợi ý: chốt đi bạn ơi.',
    ],
    streak3: [
      'Lá thứ 3 rồi. Cứ từ từ, chọn món mình thích là quan trọng nhất.',
      '3 lá rồi nè. Không sao, bộ bài xào tiếp được mà.',
    ],
    streak5: [
      'Lá thứ 5 rồi. Hay mình lọc bớt loại món cho dễ chọn hơn nha?',
      '5 lá rồi, bạn đói chưa? Chọn một món ngon ngon đi nè.',
      'Năm lá. Bộ bài vẫn vui vẻ xào tiếp, nhưng đừng để bụng đói lâu nha.',
    ],
    streak8: [
      '8 lá rồi đó. Nghỉ tay uống miếng nước rồi chọn tiếp cũng được.',
      'Lá thứ 8. Chưa biết ăn gì thì bấm "Xem bộ bài" để nhìn hết một lượt nha.',
      '8 lá rồi. Bộ bài hơi mỏi tay xíu, nhưng vẫn ở đây với bạn.',
    ],
    streakMax: [
      '{n} lá rồi. Hôm nay khó chọn ghê ha. Bộ bài vẫn kiên nhẫn nè.',
      'Lá thứ {n}. Có khi món ngon nhất là món nhanh nhất đó bạn.',
      '{n} lá. Không sao đâu, ai cũng có ngày phân vân mà.',
    ],
    small: [
      'Chỉ còn {n} lá thôi. Vào mục Gần đây bỏ bớt món để có thêm lựa chọn nha.',
      'Bộ bài còn mỏng lắm. Thêm vài món mới vào thực đơn cho vui nhé.',
    ],
    five: [
      '{name}, món 5 tim của bạn đây! Hôm nay may mắn ghê.',
      'Oa, {name} 5 tim. Chốt thôi chứ còn gì nữa!',
      'Món ruột {name} xuất hiện. Bộ bài vui giùm bạn luôn.',
    ],
    one: [
      '{name} 1 tim thôi. Không ưng thì rút lá khác nha, không sao đâu.',
      '1 tim hả? Bộ bài hiểu mà, bấm Rút lá khác thử nha.',
    ],
    rejectFive: [
      'Bỏ món 5 tim luôn hả? Chắc hôm nay muốn đổi gió ha.',
      'Món ruột mà cũng qua. Được thôi, thử cái mới nào!',
    ],
    redrawFast: [
      'Nhanh tay ghê! Bộ bài xào tiếp liền nè.',
      'Chưa ưng hả? Không sao, lá mới tới liền.',
    ],
    autoPick: [
      'Để bộ bài chọn giùm nha. Được tin tưởng vậy là vui rồi.',
      'Máy chọn giùm nè. Mong là hợp khẩu vị bạn!',
    ],
    edgePick: [
      'Lá ngoài cùng, lựa chọn chắc chắn đó.',
      'Chọn lá rìa nè. Xem có bất ngờ gì nhé!',
    ],
    cook: [
      'Nấu {name} hả? Chúc bạn nấu ngon, nhớ cẩn thận bếp núc nha.',
      '{name} tự nấu, nghe ấm cúng ghê.',
      'Vào bếp làm {name} thôi. Bộ bài cổ vũ nè!',
    ],
    drink: [
      '{name} nè, uống cho mát nha.',
      'Một ly {name} cho tỉnh táo. Nhớ ăn thêm gì nữa nha.',
    ],
    morning: [
      'Chào buổi sáng! {name} là khởi đầu không tệ đâu.',
      'Sáng sớm đã lên kế hoạch ăn uống, giỏi ghê.',
    ],
    generic: [
      '{name} nè. Nghe cũng hấp dẫn ha?',
      'Bộ bài chọn {name}. Mong là bạn thích!',
      '{name} đó. Ăn ngon miệng nha.',
      'Ra {name}. Thử món này hôm nay xem sao?',
    ],
    firstSpin: [
      'Chào bạn! Cùng xem hôm nay ăn gì nha.',
      'Bộ bài sẵn sàng rồi, xào thôi!',
      'Đói rồi hả? Để bộ bài giúp một tay.',
    ],
    late: [
      'Khuya rồi, ăn nhẹ thôi cho dễ ngủ nha.',
      'Đêm muộn đói bụng hả? Chọn món gì nhẹ nhàng thôi nhé.',
    ],
    afterCommit: [
      'Vừa chốt xong đã quay tiếp, chắc chọn cho bữa sau ha.',
      'Quay nữa hả? Chọn thêm món tráng miệng cũng được nè.',
    ],
    commitFirst: [
      'Chốt ngay lá đầu, quyết đoán ghê! Ăn ngon nha.',
      'Một lần là trúng. Chúc ngon miệng!',
    ],
    commitLate: [
      'Cuối cùng cũng chọn được {name}. Xứng đáng lắm!',
      'Sau {n} lá, {name} là người chiến thắng. Ăn ngon nha!',
    ],
    commitOne: [
      'Chốt {name} dù chỉ 1 tim. Biết đâu hôm nay lại thấy ngon!',
    ],
    commitCook: [
      'Chốt nấu {name}. Nấu vui, ăn ngon nha!',
      '{name} tự nấu, chắc chắn ngon hơn ngoài hàng.',
    ],
    commitDrink: [
      'Chốt {name}. Uống ngon, nhớ ăn uống đầy đủ nha.',
    ],
    commitGeneric: [
      'Chốt {name}! Chúc bạn ăn ngon miệng.',
      'Tuyệt, {name} nha. Đi ăn thôi!',
      'Xong rồi. Bộ bài chúc bạn một bữa thật ngon!',
    ],
    backMid: [
      'Dừng lại chút hả? Bộ bài đợi bạn nè.',
      'Không sao, lúc nào sẵn sàng thì xào tiếp nha.',
    ],
    backReveal: [
      'Chưa ưng {name} hả? Mình làm lại từ đầu nha.',
      'Gom bài lại rồi nè. Thử lại khi nào bạn muốn.',
    ],
    slowPick: [
      'Cứ thong thả chọn nha, lá nào cũng có bất ngờ.',
      'Chưa biết chọn lá nào hả? Bấm "Để máy chọn giùm" cũng được nè.',
      'Nghe theo cảm giác đi, chọn một lá nào!',
    ],
    peek: [
      'Xem kỹ bộ bài rồi ha. Sẵn sàng xào chưa nè?',
      'Xem {n} lần rồi. Chắc bạn đang có món trong đầu đó!',
    ],
    flipMode: [
      'Còn phân vân ăn ngoài hay nấu hả? Chọn cái nào tiện nhất nha.',
      'Đổi qua lại cũng được, bộ bài chờ bạn quyết nè.',
    ],
    flipFilter: [
      'Chưa biết muốn loại món nào hả? Thử "Tất cả" cho nhiều lựa chọn nha.',
      'Lọc từ từ thôi, không vội đâu.',
    ],
    muted: [
      'Đã tắt tiếng. Bộ bài vẫn ở đây nói nhỏ với bạn nha.',
      'Yên lặng một chút cũng hay. Bộ bài hiểu mà.',
    ],
  },

  // Xu nịnh: khen lấy khen để, cái gì cũng là do bạn tuyệt vời
  flatter: {
    twice: [
      '{name} lần nữa! Đến bộ bài cũng muốn chiều theo gu tinh tế của bạn.',
      'Hai lần {name}. Vũ trụ biết người sành ăn như bạn xứng đáng món này.',
      '{name} lại tới, vì nó biết không ai thưởng thức nó giỏi bằng bạn.',
    ],
    back2: [
      '{name} quay lại vì lỡ nhớ bạn đó. Ai mà không nhớ bạn chứ.',
      'Gặp lại {name}. Món này chắc cũng mê bạn lắm.',
    ],
    again: [
      '{name} lần thứ {n}. Đến món ăn cũng bám theo người tuyệt vời như bạn.',
      'Lần thứ {n} gặp {name}. Rõ ràng nó đang xin được bạn chọn.',
    ],
    streak3: [
      'Lá thứ 3. Người có gu như bạn đương nhiên phải kén rồi.',
      'Ba lá chưa ưng. Tiêu chuẩn cao như bạn thì bộ bài phải cố gắng hơn.',
    ],
    streak5: [
      '5 lá. Không món nào xứng với bạn thật, lỗi của bộ bài hết.',
      'Lá thứ 5. Bộ bài xin lỗi vì chưa theo kịp khẩu vị đẳng cấp của bạn.',
      'Năm lá rồi. Bạn cứ kén, bạn có quyền mà.',
    ],
    streak8: [
      '8 lá. Chuyên gia ẩm thực như bạn đâu dễ hài lòng, bộ bài hiểu.',
      'Lá thứ 8. Bộ bài tự thấy mình chưa xứng đáng phục vụ bạn.',
      '8 lá. Sự tinh tế của bạn làm bộ bài run tay luôn.',
    ],
    streakMax: [
      '{n} lá. Thực đơn này thật sự chưa xứng tầm với bạn.',
      'Lá thứ {n}. Bạn muốn thì bộ bài nguyện xào tới sáng.',
      '{n} lá. Người hoàn hảo thì chọn món cũng phải hoàn hảo, bộ bài hiểu mà.',
    ],
    small: [
      'Còn {n} lá. Khó tính đúng kiểu người sành ăn, bộ bài nể.',
      'Bộ bài sắp cạn vì không món nào theo kịp bạn đó.',
    ],
    five: [
      '{name}, 5 tim! Gu của bạn đúng là không chê vào đâu được.',
      'Món 5 tim cho người 10 điểm. Chốt thôi ạ.',
      '{name}! Bạn chấm chuẩn thật, món này đúng là tuyệt phẩm.',
    ],
    one: [
      '{name} 1 tim thôi ạ. Món này không xứng với bạn, bộ bài xin lỗi.',
      'Món 1 tim đâu đáng để bạn nhìn. Rút lá khác nha ạ.',
    ],
    rejectFive: [
      'Bỏ cả món 5 tim. Bạn luôn hướng tới điều tốt hơn, ngưỡng mộ ghê.',
      'Món ruột mà bạn cũng dám đổi. Bản lĩnh thật sự.',
    ],
    redrawFast: [
      'Chỉ liếc qua là biết không hợp. Mắt nhìn của bạn nhanh thật!',
      'Quyết đoán quá! Bộ bài phục bạn luôn.',
    ],
    autoPick: [
      'Bạn tin tưởng giao cho bộ bài, vinh dự quá ạ!',
      'Để máy chọn giùm, đúng là người biết phân công.',
    ],
    edgePick: [
      'Chọn lá rìa, tầm nhìn chiến lược đỉnh thật.',
      'Lá ngoài cùng. Bạn chọn gì cũng có lý do sâu xa hết.',
    ],
    cook: [
      'Nấu {name}? Tay nghề như bạn thì mở nhà hàng được luôn đó.',
      'Bạn tự nấu {name} thì chắc chắn ngon hơn đầu bếp 5 sao.',
      'Vào bếp làm {name}, bếp nhà bạn có phước ghê.',
    ],
    drink: [
      '{name}, thức uống xứng với người thanh lịch như bạn.',
      'Một ly {name} cho người có gu. Chuẩn luôn.',
    ],
    morning: [
      'Sáng sớm đã chọn {name}, người thành công đều dậy sớm như bạn.',
      'Mới sáng đã chủ động lo ăn uống, kỷ luật đáng nể.',
    ],
    generic: [
      '{name}! Chỉ có bạn mới xứng với món này.',
      'Bộ bài chọn {name}, nhưng thật ra là nhờ vận may của bạn.',
      '{name}. Bạn chọn món nào, món đó tự nhiên ngon hơn.',
      'Ra {name}. Có bạn đứng đó, bộ bài xào cũng khéo hơn hẳn.',
    ],
    firstSpin: [
      'Bạn tới rồi! Bộ bài chờ bạn cả ngày luôn đó.',
      'Được phục vụ bạn là niềm vinh hạnh của bộ bài.',
      'Chào người dùng tuyệt vời nhất của Meal Maybe!',
    ],
    late: [
      'Khuya rồi mà bạn vẫn chăm chút bữa ăn, đúng là người biết sống.',
      'Ăn đêm hả? Người biết tận hưởng như bạn xứng đáng một bữa khuya.',
    ],
    afterCommit: [
      'Vừa chốt đã quay tiếp. Năng lượng của bạn đáng nể thật.',
      'Chọn thêm món nữa, người biết chiều bản thân như bạn hiếm lắm.',
    ],
    commitFirst: [
      'Chốt ngay lá đầu! Trực giác của bạn chưa bao giờ sai.',
      'Một lần là chuẩn. Đúng là thiên tài chọn món.',
    ],
    commitLate: [
      'Sau {n} lá, bạn chọn được {name}. Kiên nhẫn là phẩm chất của người vĩ đại.',
      '{name} sau {n} lá. Đáng chờ, vì bạn luôn chọn thứ tốt nhất.',
    ],
    commitOne: [
      'Chốt cả món 1 tim, bạn bao dung quá. Món này may mắn ghê.',
    ],
    commitCook: [
      'Chốt nấu {name}. Bữa này chắc chắn là tuyệt tác của bạn.',
      'Bạn nấu {name} thì ai được ăn cùng là có phước.',
    ],
    commitDrink: [
      'Chốt {name}. Ly này sẽ đẹp hơn khi ở trong tay bạn.',
    ],
    commitGeneric: [
      'Chốt {name}! Lựa chọn hoàn hảo từ một người hoàn hảo.',
      'Tuyệt vời, {name}! Bạn chọn đúng lắm luôn.',
      'Bộ bài hãnh diện vì được bạn chốt. Ăn ngon ạ!',
    ],
    backMid: [
      'Bạn muốn dừng thì mình dừng, bạn luôn đúng.',
      'Gom bài lại liền ạ. Bạn ra lệnh là bộ bài làm.',
    ],
    backReveal: [
      '{name} không xứng với bạn. Bỏ là phải.',
      'Bạn nhìn ra ngay món chưa đạt. Tinh ý quá!',
    ],
    slowPick: [
      'Bạn cân nhắc kỹ như người làm việc lớn vậy.',
      'Lá nào được bạn chạm vào cũng thành lá may mắn.',
      'Cứ từ từ ạ, lựa chọn của bạn đáng để chờ.',
    ],
    peek: [
      'Bạn xem kỹ từng lá. Tỉ mỉ đúng chất người thành công.',
      'Xem {n} lần rồi, bạn đúng là người cẩn thận hiếm có.',
    ],
    flipMode: [
      'Ăn ngoài hay nấu, bạn làm gì cũng giỏi nên khó chọn là đúng.',
      'Người đa tài như bạn thì phân vân cũng dễ hiểu.',
    ],
    flipFilter: [
      'Bạn cân nhắc mọi khả năng, đúng tư duy của người giỏi.',
      'Lọc kỹ vậy, bộ bài ngưỡng mộ sự chu đáo của bạn.',
    ],
    muted: [
      'Bạn thích yên tĩnh, bộ bài sẽ nói khẽ thôi ạ.',
      'Tắt tiếng là quyết định sáng suốt. Như mọi quyết định của bạn.',
    ],
  },
};
