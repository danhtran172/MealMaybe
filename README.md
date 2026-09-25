# Meal Maybe

App chọn món ngẫu nhiên: xào bài, rút một lá, chốt món. HTML/CSS/JS thuần, không cần build.

## Chạy

- **Shortcut Windows:** `powershell -ExecutionPolicy Bypass -File install-shortcut.ps1` tạo "Meal Maybe" trên Desktop và Start Menu (mở bằng Edge/Chrome ở chế độ cửa sổ app). Gỡ: thêm `-Remove`.
- **Qua localhost (để cài PWA):** `node tools/serve.mjs` rồi mở http://localhost:5310, bấm "Cài đặt ứng dụng" trên thanh địa chỉ. Bản PWA có shortcut khi bấm chuột phải/nhấn giữ icon: Quay món chính, Quay ăn vặt, Quay đồ uống, Thêm món.
- Link nhanh: `index.html?spin=main|snack|drink|all`, `index.html?view=menu|recent|add`.

## Tính năng

- Thực đơn: thêm/sửa/xoá món (tên, ảnh tự cắt vuông và nén còn ~20–25KB (320px, WebP; Safari dùng JPEG), loại: Món chính / Ăn vặt / Nước), xoá có Hoàn tác.
- **Kho 100 món gợi ý** (`dishes.js`: 50 món chính, 28 ăn vặt, 22 đồ uống, đã gắn loại, ăn ngoài/nấu ăn, chay). Máy cài mới có sẵn 116 món; máy đang dùng được gộp thêm một lần các món chưa có (so theo tên), có Hoàn tác. Muốn thêm món cho mọi máy: thêm vào `dishes.js` rồi tăng `MEAL_DISHES_VERSION`.
- **Thực đơn dạng lá bài:** mỗi món hiện như một lá trên bộ bài (chất bài, hình, tên, tim, 🌿 nếu chay). Bấm lá (hoặc Tab + Enter) để sửa, bấm tim trên lá để chấm nhanh; dưới lá có nút 🛵 Ngoài · 🍳 Nấu · 🥬 Chay · 🗑 Xoá. Món đang nghỉ có nhãn ở đỉnh lá.
- **Nhóm theo** (Thực đơn, dropdown dùng được bằng bàn phím ↑ ↓ Enter Esc): Không nhóm, Loại món, Chay / Mặn, Ăn ngoài / Nấu ăn (Chỉ ăn ngoài · Chỉ nấu ăn · Cả hai). Khi đang lọc một loại (vd. tab Nước) thì không có lựa chọn Loại món. Lựa chọn được nhớ lại.
- **Số tim 1–5:** mỗi món có độ thích từ 1 đến 5 tim (chọn trong form hoặc bấm nhanh trên dòng món; món cũ mặc định 3 tim). Mặt lá bài hiện hàng tim thay cho tên loại món; loại món vẫn thấy qua ký hiệu ở góc lá và màu ô ảnh.
- **Món chay:** đánh dấu 🥬 Chay cho món (trong form hoặc bấm nhanh trên dòng món; món mẫu không thịt/hải sản/trứng được đánh dấu sẵn). Nút **🥬 Chay** ở màn Quay chỉ xào món chay, kết hợp được với Ăn ngoài/Nấu ăn và bộ lọc loại món, và được nhớ qua các lần mở app. Lá chay có dấu 🌿 ở góc.
- **Ăn ngoài / Nấu ăn:** mỗi món tick 🛵 Ăn ngoài, 🍳 Nấu ăn hoặc cả hai (trong form, hoặc bấm nhanh ngay trên dòng món). Màn Quay có công tắc chọn bộ bài; mỗi lần mở app mặc định là Ăn ngoài. Link nhanh: thêm `&mode=cook` (VD `index.html?spin=main&mode=cook`).
- **Chất bài:** mỗi loại món có một chất riêng (icon gốc ở `icons/suits/`, nhúng thẳng vào `styles.css` để chạy được cả khi mở bằng shortcut `file://`; tô bằng màu của loại): lồng bàn đỏ = Món chính, kem + ly vàng = Ăn vặt, ly nước chanh xanh = Nước. Trên lá, chất nằm ở góc trên trái và góc dưới phải (lộn ngược), in nhạt trên mặt giấy có vân với hạt mực lấm tấm (bản `icons/suits/*-ink.png`); tim ở góc trên phải, 🌿 ở góc dưới trái, ảnh và tên nằm giữa không chồng lên góc. Chất cũng thay emoji loại món ở chip lọc, ô chọn loại, tiêu đề nhóm, ảnh mặc định của món không có ảnh.
- Quay theo loại; hiệu ứng xào bài kiểu riffle → xoè bài → lướt chọn → rút & lật lá.
- 7 món gần nhất, tách riêng Ăn ngoài và Nấu ăn (mỗi bên 7 món): chỉ ghi khi bấm **Chốt**; món trong danh sách nào thì chỉ nghỉ ở bộ bài của chế độ đó; xem/bỏ từng món; nút "Xoá lịch sử ăn ngoài / nấu ăn" luôn nằm ở đầu mỗi danh sách. Điện thoại chuyển qua lại bằng nút gạt, desktop hiện hai cột.
- "Rút lá khác" không trả lại lá vừa từ chối.
- **Bộ bài biết nói:** bong bóng lời bình dưới lá bài (ở màn khác thì nổi trên thanh tab) cho 41 tình huống, gồm cả khi đánh dấu / bỏ nhãn món chay và bật / tắt nút Chay: rút nhiều lá không chốt (lá 3, 5, 8, rồi cứ 3 lá từ lá 10), cùng món ra liên tiếp hoặc gặp lại nhiều lần, món 5 tim / 1 tim, bỏ món 5 tim, chê khi lá vừa lật, nhờ máy chọn giùm, chọn lá rìa, chọn lá quá lâu, chốt ngay lá đầu / chốt sau rất lâu / vừa chốt đã quay tiếp, bỏ ngang, mở Xem bộ bài hoài, đổi chế độ hoặc bộ lọc liên tục, tắt loa, ăn đêm, ăn sáng sớm, bộ bài sắp cạn, món nấu, đồ uống… Ba tính cách, chọn ở khung “Bộ bài biết nói” trong Custom bộ bài: **😏 Cá tính** (mặc định, đanh đá), **😊 Thân thiện**, **🥰 Xu nịnh**. Không nói lại câu vừa nói; câu phụ chỉ bật theo xác suất. Bấm vào bong bóng để tắt; bật/tắt hẳn cũng ở khung đó. Câu thoại nằm trong `quips.js`, chia theo tính cách.
- **Âm thanh:** tiếng chia bài, riffle (mỗi lá rơi một tiếng, khớp với hình), gõ bộ bài, xoè, lướt chọn, rút & lật, chuông khi lộ mặt, tiếng dập khi chốt. Tự tổng hợp bằng Web Audio, không dùng file. Bật/tắt bằng nút loa ở góc phải bộ bài.
- **Về bộ bài:** trong lúc xào, chọn lá hoặc sau khi lật, nút "Về bộ bài" (hoặc phím Esc) huỷ lượt đó và gom bài về bộ úp.
- **Xem bộ bài:** trước khi xào, xem ngửa mặt mọi lá có thể rút trúng (và các lá đang nghỉ).
- **Máy rút / Tự chọn lá:** ở chế độ tự chọn, máy vẫn xào rồi xoè bài, người chơi rê chuột/chạm để nhấc lá và bấm để rút (bàn phím: ← → rồi Enter). Có nút "Để máy chọn giùm".
- **Custom bộ bài → Lưng bài:** kiểu vân (Caro chéo, Sọc chéo, Kẻ ô, Chấm bi, Kim cương, Vảy cá, Tia nắng, Trơn), màu vân (Tự động, Không màu, Trắng, Đen, Kem, Vàng kim, 3 màu gợi ý tính theo màu bộ bài, màu tuỳ chọn; cảnh báo khi vân gần trùng màu nền) và độ đậm vân; màu bộ bài (Không màu = ảnh giữ màu gốc / giấy trơn, Trắng, 7 màu có sẵn, màu tuỳ chọn; vân và khung tự đổi sáng/tối cho dễ nhìn). Cả hai bảng màu có ô gõ mã hex và nhớ 5 màu tự chọn gần nhất, đặt ảnh lưng bài (vân bài vẫn phủ lên ảnh), hiệu ứng Cầu vồng (vòng cung hologram xoay + vệt bóng, chạy theo chuột ở lá xem trước) / Vệt sáng / Lấp lánh (bụi nhũ, chấm sáng nhấp nháy, sao ✦) / Viền sáng (tia sáng chạy quanh khung lá); tự đổi màu và cách hoà màu cho bộ bài màu sáng; chỉ chạy ở lá đang nhìn thấy (lá trên cùng của chồng bài, cả quạt khi xoè, lá xem trước). Link nhanh: `index.html?view=deck`.
- Giao diện co giãn: điện thoại có thanh tab dưới; từ 640px thực đơn thành lưới thẻ; từ 960px thành web app có sidebar, bộ bài to hơn, form thêm món dính bên trái danh sách.
- Dữ liệu lưu trong trình duyệt (IndexedDB, dự phòng localStorage). Mở bằng shortcut và mở qua localhost là hai kho dữ liệu riêng.
- **Sao lưu / Khôi phục** (cuối màn Thực đơn): xuất toàn bộ món, ảnh, lịch sử và kiểu bài ra file `.json`, khôi phục thì thay hết dữ liệu trên máy. Trên điện thoại, nút sao lưu mở bảng chia sẻ (lưu vào Tệp, Drive, Zalo...). Trên iPhone, tab Safari và app đã cài là hai kho riêng: sao lưu ở bên này rồi khôi phục ở bên kia để chuyển dữ liệu.
- Khi thêm món hoặc sao lưu, app xin trình duyệt giữ dữ liệu (`navigator.storage.persist()`) để không bị tự dọn khi máy thiếu chỗ.

## Icon

`icons/icon.svg` là bản gốc. Sửa xong chạy `powershell -File tools/build-icons.ps1` để tạo lại PNG và `.ico`.
