// ============================================================
// DỮ LIỆU HỒ SƠ — idol-nhat
// ------------------------------------------------------------
// QUY TẮC DỮ LIỆU (bắt buộc):
// - CHỈ điền thông tin CÔNG KHAI CHÍNH THỨC: tên, ngày sinh, quê quán
//   (mức tỉnh/thành), nơi sinh sống hiện tại (mức tỉnh/thành phố nếu
//   được công khai), chiều cao, cân nặng, số đo 3 vòng (chỉ khi có
//   nguồn công khai chính thức), nghề nghiệp, nhóm/công ty quản lý,
//   link mạng xã hội CHÍNH THỨC, tiểu sử ngắn.
// - TUYỆT ĐỐI KHÔNG thêm các trường: địa chỉ nhà, địa chỉ thường trú,
//   địa chỉ tạm trú chi tiết, số điện thoại cá nhân. Mẫu dữ liệu này
//   cố ý KHÔNG có các trường đó.
// - Trường nào chưa có dữ liệu: để "" (chuỗi rỗng) hoặc [] — giao diện
//   sẽ tự ẩn, không hiện dòng trống.
// - ngaySinh ghi dạng "YYYY-MM-DD" (ví dụ "2000-04-01") để web tự
//   tính tuổi.
// - ngheNghiep: một trong "Idol" | "Diễn viên" | "Người mẫu".
// - slug: chữ thường, không dấu, nối bằng dấu "-" (ví dụ "sakura-sato").
//   Slug cũng là tên thư mục ảnh/video: images/<slug>/ và videos/<slug>/.
// - nguon: mảng URL nguồn công khai dùng để tra cứu hồ sơ (trường nội
//   bộ phục vụ kiểm chứng, giao diện không bắt buộc hiển thị).
// - maSo: mã số của hồ sơ trong danh mục nguồn do user trích xuất
//   (đợt 3 có các mã #206–#238); không phải hồ sơ nào cũng có trường này.
// - soVideo: số lượng video của hồ sơ trong danh mục nguồn do user
//   trích xuất (bắt đầu xuất hiện ở đợt 4); không phải hồ sơ nào cũng
//   có trường này.
// - maSoThem: mảng các mã số PHỤ trong danh mục nguồn trỏ về cùng một
//   người dưới nghệ danh khác (bắt đầu xuất hiện ở đợt 6); chỉ hồ sơ
//   nào bị trùng người mới có trường này.
// - Các lưu ý về mâu thuẫn giữa các nguồn: xem GHI-CHU-DU-LIEU.md.
// ============================================================

const HO_SO = [
  {
    slug: "oshikawa-yuri",
    tenDayDu: "Oshikawa Yūri (推川ゆうり)",
    tenThuongGoi: "Yuri Oshikawa",
    ngaySinh: "1990-06-13",
    queQuan: "Suita, Osaka",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "93–60–90", // cúp F, số liệu công khai năm 2013
    mangXaHoi: [],
    tieuSu: "Diễn viên AV, cựu gravure idol, từng là thành viên nhóm Ebisu Muscats khóa 7. Nghệ danh cũ: Oshikawa Yuika (押川唯香).",
    nguon: [
      "https://zh.wikipedia.org/wiki/推川悠里"
    ]
  },
  {
    slug: "takeuchi-rie",
    tenDayDu: "Takeuchi Rie (竹内梨恵)",
    tenThuongGoi: "Rie Takeuchi",
    ngaySinh: "1971-07-11", // theo Wikipedia JA/Wikidata — biến thể khác xem GHI-CHU-DU-LIEU.md
    queQuan: "Kanagawa",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Five Promotion",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–59–86",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV, debut năm 2008. Takeuchi Rie là nghệ danh khác của Hatori Sumika (羽鳥澄香).",
    nguon: [
      "https://ja.wikipedia.org/wiki/羽鳥澄香",
      "https://www.wikidata.org/wiki/Q11610417"
    ]
  },
  {
    slug: "enami-ryu",
    maSo: 173, // mã số trong danh mục nguồn — user đối chiếu ở đợt 4, hồ sơ này đã có từ đợt 1
    soVideo: 95, // số video trong danh mục nguồn
    tenDayDu: "Enami Ryū (江波りゅう)",
    tenThuongGoi: "Ryu Enami",
    ngaySinh: "1982-07-16",
    queQuan: "Saitama",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "D-BOX (trước đây thuộc &M)",
    chieuCao: 164, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–60–90", // cúp D
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/ryu_enami" },
      { ten: "Instagram", url: "https://www.instagram.com/ryu_emami" }
    ],
    tieuSu: "Diễn viên, gravure idol và diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/RYU_(AV女優)"
    ]
  },
  {
    slug: "shoda-chisato",
    tenDayDu: "Shōda Chisato (翔田千里)",
    tenThuongGoi: "Chisato Shoda",
    ngaySinh: "1968-04-11",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Rhythm Promotion",
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "86–63–90",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/chisato_shoda" }
    ],
    tieuSu: "Diễn viên AV, debut năm 2005.",
    nguon: [
      "https://ja.wikipedia.org/wiki/翔田千里"
    ]
  },
  {
    slug: "suzuki-satomi",
    tenDayDu: "Suzuki Satomi (鈴木さとみ)",
    tenThuongGoi: "Satomi Suzuki",
    ngaySinh: "1988-09-09",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LINX (từ năm 2018)",
    chieuCao: 151, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "85–58–82", // cúp F
    mangXaHoi: [],
    tieuSu: "Diễn viên AV, debut năm 2006.",
    nguon: [
      "https://ja.wikipedia.org/wiki/鈴木さとみ",
      "https://www.wikidata.org/wiki/Q6133720"
    ]
  },
  {
    slug: "sena-hikari",
    tenDayDu: "Sena Hikari (瀬名ひかり)",
    tenThuongGoi: "Hikari Sena",
    ngaySinh: "1999-07-02",
    queQuan: "Okinawa",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "ACT Entertainment",
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "95–61–86", // cúp G — biến thể ở CSDL khác xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Diễn viên AV, debut năm 2020.",
    nguon: [
      "https://actenter.com/"
    ]
  },
  {
    slug: "yamaguchi-juri",
    tenDayDu: "Yamaguchi Juri (山口珠理)",
    tenThuongGoi: "Juri Yamaguchi",
    ngaySinh: "1967-07-02",
    queQuan: "", // nguồn ghi Niigata yếu — để trống, xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Office Nanbara",
    chieuCao: 164, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–64–90", // cúp F
    mangXaHoi: [],
    tieuSu: "Diễn viên AV dòng jukujo, debut năm 2006 tại hãng Madonna.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn tổng hợp từ CSDL fan, chưa có Wikipedia
    nguon: []
  },

  // ================= ĐỢT 2 =================
  {
    slug: "hashimoto-rina",
    tenDayDu: "Hashimoto Rina (橋本梨菜)",
    tenThuongGoi: "Rina Hashimoto",
    ngaySinh: "1993-09-13",
    queQuan: "Hirakata, Osaka",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "sherbet",
    chieuCao: 158, // cm
    canNang: "", // không rõ
    soDo: "88–58–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/rinasketch" },
      { ten: "Instagram", url: "https://www.instagram.com/hashimoto_rina_" }
    ],
    tieuSu: "Gravure idol, tarento và YouTuber; thành viên sáng lập nhóm sherbet.",
    nguon: [
      "https://www.newsonjapan.com/article/151054.php",
      "https://www.animenewsnetwork.com/encyclopedia/people.php?id=142473"
    ]
  },
  {
    slug: "inudo-minori",
    tenDayDu: "Inudo Minori (犬童美乃梨)",
    tenThuongGoi: "Minori Inudo",
    ngaySinh: "1994-05-06",
    queQuan: "Nishio, Aichi",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "",
    chieuCao: 158, // cm
    canNang: "", // không rõ
    soDo: "88–59–84", // cúp G
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/minorin656" },
      { ten: "Instagram", url: "https://www.instagram.com/minudo" }
    ],
    tieuSu: "Cựu gravure idol và race queen; giải nghệ ngày 31/12/2021.",
    nguon: [
      "https://ja.wikipedia.org/wiki/犬童美乃梨",
      "https://www.oricon.co.jp/news/2169668/full/"
    ]
  },
  {
    slug: "morisaki-tomomi",
    tenDayDu: "Morisaki Tomomi (森咲智美)",
    tenThuongGoi: "Tomomi Morisaki",
    ngaySinh: "1992-08-12",
    queQuan: "Nagoya, Aichi",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Lip (R・I・P)",
    chieuCao: 160, // cm
    canNang: "", // không rõ
    soDo: "89–58–88", // cúp G
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/morisakitomomi" }
    ],
    tieuSu: "Tarento, diễn viên và YouTuber; trước đây hoạt động gravure idol.",
    nguon: [
      "https://ja.wikipedia.org/wiki/森咲智美",
      "https://www.oricon.co.jp/prof/603122/"
    ]
  },
  {
    slug: "nanoka",
    tenDayDu: "Nanoka (菜乃花)",
    tenThuongGoi: "Nanoka",
    ngaySinh: "1989-07-07",
    queQuan: "Fukuyama, Hiroshima",
    noiSong: "",
    ngheNghiep: "Người mẫu",
    nhomHoacCongTy: "", // hoạt động tự do
    chieuCao: 160, // cm
    canNang: "", // không rõ
    soDo: "90–58–86", // cúp I
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/nnk_77" },
      { ten: "Instagram", url: "https://www.instagram.com/nanoka0707" }
    ],
    tieuSu: "Tarento, người mẫu; cựu gravure idol, hiện hoạt động tự do (freelance).",
    nguon: [
      "https://ja.wikipedia.org/wiki/菜乃花",
      "https://en.wikipedia.org/wiki/Nanoka"
    ]
  },
  {
    slug: "takahashi-rin",
    tenDayDu: "Takahashi Rin (高橋凛)",
    tenThuongGoi: "Rin Takahashi",
    ngaySinh: "1990-08-09",
    queQuan: "Niigata",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "Arving",
    chieuCao: 160, // cm
    canNang: "", // không rõ
    soDo: "91–58–90",
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/rin_takahashi0809" }
    ],
    tieuSu: "Gravure idol, diễn viên và người mẫu. Tên hoạt động trước đây: Tachibana Rin.",
    nguon: [
      "https://en.namu.wiki/w/高橋凛"
    ]
  },
  {
    slug: "kakei-miwako",
    tenDayDu: "Kakei Miwako (筧美和子)",
    tenThuongGoi: "Miwako Kakei",
    ngaySinh: "1994-03-06",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Platinum Production",
    chieuCao: 164, // cm
    canNang: "", // không rõ
    soDo: "89–60–85", // cúp F
    mangXaHoi: [],
    tieuSu: "Diễn viên, người mẫu và tarento.",
    nguon: [
      "https://en.wikipedia.org/wiki/Miwako_Kakei"
    ]
  },
  {
    slug: "wachi-minami",
    tenDayDu: "Wachi Minami (わちみなみ)",
    tenThuongGoi: "Minami Wachi",
    ngaySinh: "1995-01-07",
    queQuan: "Fukuoka",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "Horipro",
    chieuCao: 165, // cm
    canNang: "", // không rõ
    soDo: "90–60–87",
    mangXaHoi: [],
    tieuSu: "Tarento và gravure idol.",
    nguon: [
      "https://ja.wikipedia.org/wiki/わちみなみ",
      "https://www.oricon.co.jp/prof/712541"
    ]
  },
  {
    slug: "hirata-rina",
    tenDayDu: "Hirata Rina (平田梨奈)",
    tenThuongGoi: "Rina Hirata",
    ngaySinh: "1998-07-16",
    queQuan: "Kurume, Fukuoka", // quê quán; nơi sinh là Phoenix, Arizona (Mỹ) — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "Dundle, Inc.",
    chieuCao: 160, // cm
    canNang: "", // không rõ
    soDo: "", // không công bố
    mangXaHoi: [],
    tieuSu: "Cựu thành viên AKB48 (Team A); hiện là gravure talent và diễn viên. Sinh tại Phoenix, Arizona (Mỹ), quê quán Kurume, Fukuoka.",
    nguon: [
      "https://48plus.org/wiki/Hirata_Rina"
    ]
  },
  {
    slug: "iori-io",
    tenDayDu: "Iori Io (伊織いお)",
    tenThuongGoi: "Io Iori",
    ngaySinh: "1998-08-13",
    queQuan: "Kanagawa",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "Zeroichi Familia",
    chieuCao: 151, // cm
    canNang: "", // không rõ
    soDo: "90–55–90", // cúp J, công bố năm 2022
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/iocos69" }
    ],
    tieuSu: "Gravure idol và cosplayer.",
    nguon: [
      "https://ja.wikipedia.org/wiki/伊織いお"
    ]
  },
  {
    slug: "teramoto-rio",
    tenDayDu: "Teramoto Rio (寺本莉緒)",
    tenThuongGoi: "Rio Teramoto",
    ngaySinh: "2001-11-05",
    queQuan: "Hiroshima",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LesPros Entertainment",
    chieuCao: 150, // cm — theo hồ sơ chính thức (photobook); Wikipedia EN ghi 154, xem GHI-CHU-DU-LIEU.md
    canNang: "", // không rõ
    soDo: "88–60–88", // cúp G
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/lespros_t_rio" },
      { ten: "Instagram", url: "https://www.instagram.com/lespros_rio" }
    ],
    tieuSu: "Diễn viên và gravure model; đạt danh hiệu Miss Young Magazine 2018.",
    nguon: [
      "https://en.wikipedia.org/wiki/Rio_Teramoto"
    ]
  },
  {
    slug: "ramu",
    tenDayDu: "RaMu (らむ)",
    tenThuongGoi: "RaMu",
    ngaySinh: "1997-07-31",
    queQuan: "Saitama",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "Magnify Entertainment",
    chieuCao: 148, // cm
    canNang: 37, // kg
    soDo: "90–56–80", // cúp H, số liệu năm 2023
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/dpandaramu" }
    ],
    tieuSu: "Gravure idol, tarento và YouTuber.",
    nguon: [
      "https://ja.wikipedia.org/wiki/RaMu"
    ]
  },
  {
    slug: "meguri",
    tenDayDu: "Meguri (めぐり)",
    tenThuongGoi: "Meguri",
    ngaySinh: "1989-05-04", // hồ sơ cũ ghi biến thể sinh 1990/quê Ibaraki — không dùng, xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-Powers", // chưa kiểm chứng trực tiếp — xem GHI-CHU-DU-LIEU.md
    chieuCao: 155, // cm
    canNang: "", // không rõ
    soDo: "95–60–88", // cúp G
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/meguri0504" }
    ],
    tieuSu: "Gravure idol, diễn viên, cựu diễn viên AV và YouTuber; cựu thành viên nhóm Ebisu Muscats. Tên cũ: Fujiura Megu.",
    nguon: [
      "https://ja.wikipedia.org/wiki/めぐり_(AV女優)"
    ]
  },
  {
    slug: "shinoda-yu",
    tenDayDu: "Shinoda Yū (篠田ゆう)",
    tenThuongGoi: "Yu Shinoda",
    ngaySinh: "1991-07-21",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 155, // cm
    canNang: "", // không rõ
    soDo: "88–60–88", // cúp F
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV (hoạt động 2010–2023); hiện là YouTuber.",
    nguon: [
      "https://ja.wikipedia.org/wiki/篠田ゆう"
    ]
  },
  {
    slug: "asuka-kirara",
    tenDayDu: "Asuka Kirara (明日花キララ)",
    tenThuongGoi: "Kirara Asuka",
    ngaySinh: "1988-10-02",
    queQuan: "Asahikawa, Hokkaido", // theo Wikipedia JA; Wikipedia EN ghi Tokyo — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Người mẫu",
    nhomHoacCongTy: "TOP RANK MANAGEMENT",
    chieuCao: 162, // cm
    canNang: 44, // kg
    soDo: "90–58–85", // cúp G
    mangXaHoi: [],
    tieuSu: "Tarento, người mẫu, diễn viên và ca sĩ; cựu diễn viên AV.",
    nguon: [
      "https://ja.wikipedia.org/wiki/明日花キララ",
      "https://en.wikipedia.org/wiki/Kirara_Asuka"
    ]
  },
  {
    slug: "mishima-natsuko",
    tenDayDu: "Mishima Natsuko (三島奈津子)",
    tenThuongGoi: "Natsuko Mishima",
    ngaySinh: "1982-11-30",
    queQuan: "", // không rõ — nguồn ghi Chiba không đáng tin, xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Prime Agency",
    chieuCao: 163, // cm
    canNang: "", // không rõ
    soDo: "103–60–95", // cúp I
    mangXaHoi: [],
    tieuSu: "Cựu tarento, cựu diễn viên AV và YouTuber.",
    nguon: [
      "https://www.ask-oracle.com/birth-chart/natsuko-mishima/"
    ]
  },
  {
    slug: "shiraishi-marina",
    tenDayDu: "Shiraishi Marina (白石茉莉奈)",
    tenThuongGoi: "Marina Shiraishi",
    ngaySinh: "1986-08-10",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 154, // cm
    canNang: "", // không rõ
    soDo: "90–60–90", // cúp G
    mangXaHoi: [],
    tieuSu: "Diễn viên AV và nhân vật truyền thông (media personality); thành viên nhóm Ebisu Muscats.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn tổng hợp hạng trung — xem GHI-CHU-DU-LIEU.md
    nguon: []
  },
  {
    slug: "shibuya-kaho",
    tenDayDu: "Shibuya Kaho (澁谷果歩)",
    tenThuongGoi: "Kaho Shibuya",
    ngaySinh: "1991-05-20",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 151, // cm
    canNang: "", // không rõ
    soDo: "93–60–90", // cúp K
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/shibukaho" },
      { ten: "Twitch", url: "https://www.twitch.tv/Shibuya_Kaho" }
    ],
    tieuSu: "Cosplayer, streamer và nhà văn; cựu diễn viên AV.",
    nguon: [
      "https://en.wikipedia.org/wiki/Kaho_Shibuya"
    ]
  },
  {
    slug: "shibuya-yuri",
    tenDayDu: "Shibuya Yuri (渋谷ゆり)",
    tenThuongGoi: "Yuri Shibuya",
    ngaySinh: "1989-10-18",
    queQuan: "Minato, Tokyo",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "",
    chieuCao: 163, // cm
    canNang: "", // không rõ
    soDo: "90–59–88", // số liệu năm 2015
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/shibuya_yuri" }
    ],
    tieuSu: "Cựu gravure idol (giải nghệ năm 2015); hiện là huấn luyện viên fitness và doanh nhân.",
    nguon: [
      "https://ja.wikipedia.org/wiki/渋谷ゆり"
    ]
  },
  {
    slug: "hirajima-natsumi",
    tenDayDu: "Hirajima Natsumi (平嶋夏海)",
    tenThuongGoi: "Natsumi Hirajima",
    ngaySinh: "1992-05-28",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "One Eight Promotion",
    chieuCao: 154, // cm
    canNang: "", // không rõ
    soDo: "88–60–88",
    mangXaHoi: [],
    tieuSu: "Tarento và diễn viên; cựu thành viên AKB48 thế hệ đầu tiên.",
    nguon: [
      "https://en.wikipedia.org/wiki/Natsumi_Hirajima"
    ]
  },
  {
    slug: "kamiya-erina",
    tenDayDu: "Kamiya Erina (上矢えり奈)",
    tenThuongGoi: "Erina Kamiya",
    ngaySinh: "1991-10-15",
    queQuan: "Iwata, Shizuoka",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 153, // cm
    canNang: "", // không rõ
    soDo: "86–60–85", // cúp G, số liệu năm 2021
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/kamiya_erina" }
    ],
    tieuSu: "Tarento, diễn viên và YouTuber; cựu gravure idol, cựu thành viên Kamen Joshi. Trước đây viết tên là 神谷えりな, đổi cách viết kanji sang 上矢えり奈 năm 2019 — vẫn là cùng một người.",
    nguon: [
      "https://ja.wikipedia.org/wiki/上矢えり奈",
      "https://en.wikipedia.org/wiki/Erina_Kamiya_(actress)",
      "https://www.oricon.co.jp/prof/655075"
    ]
  },
  {
    slug: "koike-rina",
    tenDayDu: "Koike Rina (小池里奈)",
    tenThuongGoi: "Rina Koike",
    ngaySinh: "1993-09-03",
    queQuan: "Oyama, Tochigi",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Twin Planet Entertainment",
    chieuCao: 156, // cm
    canNang: "", // không rõ
    soDo: "81–56–87", // số liệu hồ sơ trưởng thành
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/KoikeRina0903" },
      { ten: "Instagram", url: "https://www.instagram.com/koike_rina_93" }
    ],
    tieuSu: "Diễn viên, gravure idol, tarento và YouTuber; debut năm 2004.",
    nguon: [
      "https://en.wikipedia.org/wiki/Rina_Koike",
      "https://www.oricon.co.jp/news/2297497/full/",
      "https://www.tp-e.jp/talent/koikerina/"
    ]
  },
  {
    slug: "sakikichi",
    tenDayDu: "Wako Saki (和光幸希)",
    tenThuongGoi: "Sakikichi",
    ngaySinh: "1990-04-11",
    queQuan: "Yamanashi",
    noiSong: "Tokyo", // nguồn công khai nêu rõ — xem GHI-CHU-DU-LIEU.md
    ngheNghiep: "Người mẫu",
    nhomHoacCongTy: "Kiii",
    chieuCao: 160, // cm
    canNang: 39, // kg
    soDo: "", // không công bố
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/sakikichi1201" }
    ],
    tieuSu: "YouTuber, influencer và người mẫu thuộc agency Kiii; chủ kênh nấu ăn \"SAKI's kitchen\". Nghệ danh Sakikichi (サキ吉); tên thật Wako Saki do cô tự công khai.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn thứ cấp — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://prtimes.jp/main/html/rd/p/000000004.000048661.html",
      "https://pentanews.net/saki_kitchen/",
      "https://youtube-walker.com/youtuber/sakikichi/profile-225/"
    ]
  },
  {
    slug: "otawa-sakura",
    tenDayDu: "Otawa Sakura (太田和さくら)",
    tenThuongGoi: "Sakura Otawa",
    ngaySinh: "2000-02-03",
    queQuan: "Chiba",
    noiSong: "",
    ngheNghiep: "Người mẫu",
    nhomHoacCongTy: "Liver",
    chieuCao: 165, // cm
    canNang: 47.6, // kg
    soDo: "86–59–87",
    mangXaHoi: [],
    tieuSu: "Tarento, gravure model và YouTuber; cựu đội trưởng nhóm KissBee. Biệt danh: Sakupomu.",
    nguon: [
      "https://ja.wikipedia.org/wiki/太田和さくら",
      "https://mdpr.jp/interview/detail/2741263"
    ]
  },
  {
    slug: "hamada-shoko",
    tenDayDu: "Hamada Shōko (浜田翔子)",
    tenThuongGoi: "Shoko Hamada",
    ngaySinh: "1986-01-01",
    queQuan: "Kyotango, Kyoto",
    noiSong: "",
    ngheNghiep: "Idol",
    nhomHoacCongTy: "babyboo",
    chieuCao: 157, // cm
    canNang: 44, // kg
    soDo: "80–54–83", // số liệu năm 2013
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/shokohamada" },
      { ten: "Instagram", url: "https://www.instagram.com/shoko_hamada" }
    ],
    tieuSu: "Tarento và YouTuber; cựu gravure idol và race queen.",
    nguon: [
      "https://ja.wikipedia.org/wiki/浜田翔子_(タレント)",
      "https://en.wikipedia.org/wiki/Shoko_Hamada_(entertainer)",
      "https://www.oricon.co.jp/prof/332824/"
    ]
  },
  {
    slug: "hayashi-yume",
    tenDayDu: "Hayashi Yume (林ゆめ)",
    tenThuongGoi: "Yume Hayashi",
    ngaySinh: "1995-10-18",
    queQuan: "Furano, Hokkaido",
    noiSong: "",
    ngheNghiep: "Người mẫu",
    nhomHoacCongTy: "", // hoạt động tự do từ 05/2025
    chieuCao: 168, // cm
    canNang: "", // không rõ
    soDo: "84–53–87", // cúp F
    mangXaHoi: [],
    tieuSu: "Gravure model, tarento và YouTuber; cựu race queen. Hoạt động tự do từ tháng 05/2025 (trước đó thuộc Zeroichi Familia).",
    nguon: [
      "https://ja.wikipedia.org/wiki/林ゆめ"
    ]
  },
  {
    slug: "kazama-yumi",
    maSo: 228, // mã số trong danh mục nguồn — user đối chiếu ở đợt 3, hồ sơ này đã có từ đợt 2
    tenDayDu: "Kazama Yumi (風間ゆみ)",
    tenThuongGoi: "Kazama Yumi (biến thể: Yume Kazama)",
    ngaySinh: "1979-01-31", // theo Wikipedia JA; blog chính thức ghi biến thể 1979-02-22 — xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Capsule Agency",
    chieuCao: 160, // cm
    canNang: "", // không rõ
    soDo: "98–65–90", // cúp G, số liệu năm 2022
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/yumikazama" }
    ],
    tieuSu: "Diễn viên AV kỳ cựu, hoạt động từ năm 1997. Tên user gửi \"Yume Kazama\" là cách viết biến thể của Kazama Yumi.",
    nguon: [
      "https://ja.wikipedia.org/wiki/風間ゆみ",
      "https://www.grajapa.shueisha.co.jp/talent/1105/風間ゆみ"
    ]
  },

  // ================= ĐỢT 3 =================
  {
    slug: "narimiya-harua",
    maSo: 206,
    tenDayDu: "Narimiya Harua (成宮はるあ)",
    tenThuongGoi: "Harua Narimiya",
    ngaySinh: "1991-07-30", // theo Wikipedia JA; Wikidata/FANZA Guide ghi biến thể 1992-07-30 — xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LIGHT",
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "97–58–87",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/nogiHARU_LIGHT" }
    ],
    tieuSu: "Diễn viên AV. Tên hoạt động hiện tại: Nogi Haruka (乃木はるか).",
    nguon: [
      "https://ja.wikipedia.org/wiki/成宮はるあ"
    ]
  },
  {
    slug: "minami-airi",
    maSo: 208,
    tenDayDu: "Minami Airi (みなみ愛梨)",
    tenThuongGoi: "Airi Minami",
    ngaySinh: "1991-07-20",
    queQuan: "Fukuoka",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "kawaii*",
    chieuCao: 155, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "86–56–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn FANZA Guide + TMDB, chưa có Wikipedia — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://fanza-guide.jp/actress/minami_airi",
      "https://www.themoviedb.org/person/1300983"
    ]
  },
  {
    slug: "kisaki-aya",
    maSo: 211,
    tenDayDu: "Kisaki Aya (希咲あや)",
    tenThuongGoi: "Aya Kisaki",
    ngaySinh: "1989-11-26",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Cielo",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "87–56–88",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/kisaki_aya" },
      { ten: "Instagram", url: "https://www.instagram.com/kisaki_aya" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/希咲あや"
    ]
  },
  {
    slug: "anjo-anna",
    maSo: 213,
    tenDayDu: "Anjo Anna (安城アンナ)",
    tenThuongGoi: "Anna Anjo",
    ngaySinh: "1991-11-01",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Sunpro",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "86–58–83",
    mangXaHoi: [], // tài khoản MXH cũ đã xóa
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/安城アンナ"
    ]
  },
  {
    slug: "nakajima-kyoko",
    maSo: 214,
    tenDayDu: "Nakajima Kyoko (中島京子)",
    tenThuongGoi: "Kyoko Nakajima",
    ngaySinh: "1983-03-12",
    queQuan: "Saitama",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "h.m.p / Million",
    chieuCao: 152, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–58–86",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/kyonnakajima" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/中島京子_(AV女優)"
    ]
  },
  {
    slug: "sakazaki-miho",
    maSo: 215,
    tenDayDu: "Sakazaki Miho (坂咲みほ)",
    tenThuongGoi: "Mihono",
    ngaySinh: "1994-07-20",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LINX",
    chieuCao: 158, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "82–56–84",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/sakazakimiho" }
    ],
    tieuSu: "Diễn viên AV. Chuỗi nghệ danh: Sakaguchi Mihono (坂口みほの) → Mihono (みほの, từ năm 2015) → Sakazaki Miho (坂咲みほ).",
    nguon: [
      "https://ja.wikipedia.org/wiki/坂咲みほ",
      "https://pub.linx.live/contents/model/4689/"
    ]
  },
  {
    slug: "oda-mako",
    maSo: 216,
    tenDayDu: "Oda Mako (織田真子)",
    tenThuongGoi: "Mako Oda",
    ngaySinh: "1983-12-17",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-Powers",
    chieuCao: 152, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "92–61–89",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/odamako1217" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://www.t-powers.co.jp/talent/織田真子/",
      "https://ja.wikipedia.org/wiki/織田真子"
    ]
  },
  {
    slug: "ninomiya-nana",
    maSo: 217,
    tenDayDu: "Ninomiya Nana (二宮ナナ)",
    tenThuongGoi: "Nana Ninomiya",
    ngaySinh: "1992-05-10",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-Powers",
    chieuCao: 154, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–57–83",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/二宮ナナ"
    ]
  },
  {
    slug: "tomoda-ayaka",
    maSo: 218,
    tenDayDu: "Tomoda Ayaka (友田彩也香)",
    tenThuongGoi: "Ayaka Tomoda",
    ngaySinh: "1988-09-14",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Diaz Group",
    chieuCao: 160, // cm
    canNang: 45, // kg
    soDo: "85–60–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/tomodaayaka" },
      { ten: "Instagram", url: "https://www.instagram.com/ayaka_tomoda0914" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/友田彩也香"
    ]
  },
  {
    slug: "omomo-risa",
    maSo: 219,
    tenDayDu: "Ōmomo Risa (大桃りさ)",
    tenThuongGoi: "Risa Oomomo",
    ngaySinh: "1992-08-23",
    queQuan: "", // chưa có nguồn chính thức xác nhận quê quán — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Bambi Promotion",
    chieuCao: 143, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "80–55–82",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/大桃りさ"
    ]
  },
  {
    slug: "hara-chitose",
    maSo: 220,
    tenDayDu: "Hara Chitose (原ちとせ)",
    tenThuongGoi: "Chitose Hara",
    ngaySinh: "1977-04-21",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Diana Production",
    chieuCao: 159, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "83–60–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/原ちとせ"
    ]
  },
  {
    slug: "hayakawa-mizuki",
    maSo: 221,
    tenDayDu: "Hayakawa Mizuki (早川瑞希)",
    tenThuongGoi: "Wakamiya Hazuki",
    ngaySinh: "1993-11-09",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Bambi Promotion",
    chieuCao: 162, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–60–88", // bộ số liệu thời Hayakawa Mizuki; bộ công bố lại thời Wakamiya xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/wakamiyahazuki" },
      { ten: "X (Twitter) — tài khoản cũ", url: "https://x.com/MizukiHayakawa" }
    ],
    tieuSu: "Diễn viên AV. Đổi nghệ danh thành Wakamiya Hazuki (若宮はずき) vào tháng 07/2020 — cùng một người; số liệu trong hồ sơ là bộ thời Hayakawa Mizuki.",
    nguon: [
      "https://ja.wikipedia.org/wiki/若宮はずき"
    ]
  },
  {
    slug: "otowa-reon",
    maSo: 222,
    tenDayDu: "Otowa Reon (音羽レオン)",
    tenThuongGoi: "Reon Otowa",
    ngaySinh: "1990-01-11",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Grants Pro",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–58–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://fanza-guide.jp/actress/otowa_reon"
    ]
  },
  {
    slug: "mihara-honoka",
    maSo: 223,
    tenDayDu: "Mihara Honoka (三原ほのか)",
    tenThuongGoi: "Honoka Mihara",
    ngaySinh: "1994-05-01",
    queQuan: "Saitama",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "New Gate",
    chieuCao: 156, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–58–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/miharahonoka" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/三原ほのか"
    ]
  },
  {
    slug: "motozawa-tomomi",
    maSo: 224,
    tenDayDu: "Motozawa Tomomi (本澤朋美)",
    tenThuongGoi: "Tomomi Motozawa",
    ngaySinh: "1992-11-28",
    queQuan: "", // không công bố quê quán — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Life Promotion",
    chieuCao: 153, // cm
    canNang: 56, // kg
    soDo: "80–58–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/本澤朋美"
    ]
  },
  {
    slug: "aizawa-karin",
    maSo: 225,
    tenDayDu: "Aizawa Karin (愛沢かりん)",
    tenThuongGoi: "Karin Aizawa",
    ngaySinh: "1993-12-26",
    queQuan: "Nara",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "", // chưa rõ công ty quản lý công khai
    chieuCao: 157, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–57–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://fanza-guide.jp/actress/aizawa_karin"
    ]
  },
  {
    slug: "ayase-tiara",
    maSo: 226,
    tenDayDu: "Ayase Tiara (綾瀬ティアラ)",
    tenThuongGoi: "Tiara Ayase",
    ngaySinh: "1991-03-03",
    queQuan: "", // Wikipedia JA chỉ ghi Nhật Bản, không nêu tỉnh/thành — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "h.m.p",
    chieuCao: 167, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–59–87",
    mangXaHoi: [
      { ten: "Blog (Ameblo)", url: "https://ameblo.jp/tiara-ayase/" }
    ],
    tieuSu: "Cựu diễn viên AV. Nghệ danh sau năm 2012: Kurosaki Cecil (黒崎セシル).",
    nguon: [
      "https://ja.wikipedia.org/wiki/綾瀬ティアラ"
    ]
  },
  {
    slug: "yuuki-aoi",
    maSo: 227,
    tenDayDu: "Yuuki Aoi (優木あおい)",
    tenThuongGoi: "Aoi Yuuki",
    ngaySinh: "1988-03-09",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Cheeseburger",
    chieuCao: 158, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "83–58–83",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/bussan0309" }
    ],
    tieuSu: "Diễn viên AV người Nhật. Lưu ý: không phải diễn viên lồng tiếng Aoi Yūki (悠木碧) — đây là hai người khác nhau.",
    nguon: [
      "https://ja.wikipedia.org/wiki/優木あおい"
    ]
  },
  {
    slug: "ozawa-alice",
    maSo: 230,
    tenDayDu: "Ozawa Alice (小沢アリス)",
    tenThuongGoi: "Alice Ozawa",
    ngaySinh: "1990-10-20",
    queQuan: "Hyogo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "FUNIT! Entertainment",
    chieuCao: 167, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "100–61–89",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/ozawaalice" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn EverybodyWiki + AV DB, chưa có Wikipedia JA chính thức — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://ja.everybodywiki.com/小沢アリス",
      "https://av-db.net/actress/ozawaarisu"
    ]
  },
  {
    slug: "akino-chihiro",
    maSo: 236,
    tenDayDu: "Akino Chihiro (秋野千尋)",
    tenThuongGoi: "Chihiro Akino",
    ngaySinh: "1973-02-07",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Wave Promotion",
    chieuCao: 153, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–59–85", // Wikipedia JA tự gắn cờ số đo thiếu nguồn rõ ràng — xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/秋野千尋"
    ]
  },
  {
    slug: "julia",
    maSo: 237,
    tenDayDu: "JULIA (ジュリア)",
    tenThuongGoi: "Julia Boin",
    ngaySinh: "1987-05-25",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "C-more Entertainment",
    chieuCao: 158, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "101–55–84",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/JULIA_1stid" },
      { ten: "Instagram", url: "https://www.instagram.com/JULIA_official.account" }
    ],
    tieuSu: "Diễn viên AV. \"Boin\" trong tên user gửi (\"Julia Boin\") là nhãn series Boin Box của hãng Mousouzoku, không phải họ; một số CSDL AV ghi \"Julia Boin\" như biệt danh của JULIA.",
    nguon: [
      "https://ja.wikipedia.org/wiki/JULIA_(AV女優)",
      "https://cmore.jp/julia/profile.html"
    ]
  },
  {
    slug: "kinoshita-himari",
    maSo: 238,
    tenDayDu: "Kinoshita Himari (木下ひまり)",
    tenThuongGoi: "Himari Kinoshita",
    ngaySinh: "1996-05-21",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "ACT Entertainment",
    chieuCao: 169, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–60–85", // bộ số liệu của agency ACT hiện hành; bộ Wikipedia năm 2020 là 88–57–88 — xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/0521himari" },
      { ten: "Instagram", url: "https://www.instagram.com/himari_kinoshita" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/木下ひまり",
      "https://actentertainment.jp/himari-kinosita/"
    ]
  },

  // ================= ĐỢT 4 =================
  {
    slug: "ohara-reina",
    maSo: 174,
    soVideo: 20,
    tenDayDu: "Ohara Reina (大原伶菜)",
    tenThuongGoi: "Reina Ohara",
    ngaySinh: "2005-10-30", // khớp IMDb + hậu tố 1030 của Instagram; ReleaseIndex ghi biến thể 2005-04-07 — xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Idea Pocket",
    chieuCao: 167, // cm — nguồn khác ghi 168, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "", // không công bố
    mangXaHoi: [
      { ten: "Instagram", url: "https://www.instagram.com/reinaohara_1030" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn tổng hợp hạng trung — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://www.topstarlist.in/2026/09/reina-ohara-biography-age-height-real-name-instagram-reinaohara.html",
      "https://releaseindex.app/performer/reina-ohara"
    ]
  },
  {
    slug: "mizuno-asahi",
    maSo: 175,
    soVideo: 12,
    tenDayDu: "Mizuno Asahi (水野朝陽)",
    tenThuongGoi: "Asahi Mizuno",
    ngaySinh: "1990-11-12",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "C-more Entertainment",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–58–96",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/mizuno_asahi" },
      { ten: "Instagram", url: "https://www.instagram.com/asahi_mizuno_" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/水野朝陽"
    ]
  },
  {
    slug: "sayama-ai",
    maSo: 177,
    soVideo: 1,
    tenDayDu: "Sayama Ai (佐山愛)",
    tenThuongGoi: "Ai Sayama",
    ngaySinh: "1989-01-08",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "98–61–90",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/aisayama" },
      { ten: "Instagram", url: "https://www.instagram.com/ai_sayama0108" }
    ],
    tieuSu: "Diễn viên AV người Nhật. Tuyên bố giải nghệ vào tháng 09/2025.",
    nguon: [
      "https://ja.wikipedia.org/wiki/佐山愛"
    ]
  },
  {
    slug: "sakata-mikage",
    maSo: 179,
    soVideo: 19,
    tenDayDu: "Sakata Mikage (坂田美影)",
    tenThuongGoi: "Mikage Sakata",
    ngaySinh: "1981-05-16",
    queQuan: "Kanagawa",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Bardo Agency",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–63–90",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/坂田美影"
    ]
  },
  {
    slug: "saionji-reo",
    maSo: 180,
    soVideo: 51,
    tenDayDu: "Saionji Reo (西園寺れお)",
    tenThuongGoi: "Reo Saionji",
    ngaySinh: "1991-09-14",
    queQuan: "Chiba",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Style One",
    chieuCao: 157, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "82–58–82",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/西園寺れお"
    ]
  },
  {
    slug: "onodera-risa",
    maSo: 184,
    soVideo: 17,
    tenDayDu: "Onodera Risa (小野寺梨紗)",
    tenThuongGoi: "Risa Onodera",
    ngaySinh: "1997-01-25",
    queQuan: "Ibaraki",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "MMR合同",
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "83–58–90",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/RisaOnodera" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/小野寺梨紗"
    ]
  },
  {
    slug: "tojo-natsu",
    maSo: 185,
    soVideo: 173,
    tenDayDu: "Tojo Natsu (東條なつ)",
    tenThuongGoi: "Natsu Tojo",
    ngaySinh: "1999-08-19",
    queQuan: "Tochigi",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LINX",
    chieuCao: 156, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "78–55–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/_tojo_natsu" },
      { ten: "Instagram", url: "https://www.instagram.com/tojonatsu" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/東條なつ"
    ]
  },
  {
    slug: "maisaki-mikuni",
    maSo: 190,
    soVideo: 78,
    tenDayDu: "Maisaki Mikuni (舞咲みくに)",
    tenThuongGoi: "Mikuni Maisaki",
    ngaySinh: "1991-09-02", // fan wiki ghi biến thể 1991-07-20 — không dùng, xem GHI-CHU-DU-LIEU.md
    queQuan: "Hyogo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Idea Pocket",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "85–59–87",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/mikuni0920" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/舞咲みくに"
    ]
  },
  {
    slug: "uchimura-rina",
    maSo: 193,
    soVideo: 43,
    tenDayDu: "Uchimura Rina (内村りな)",
    tenThuongGoi: "Rina Uchimura",
    ngaySinh: "1993-05-08",
    queQuan: "Chiba",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "All Promotion",
    chieuCao: 154, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–58–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/uchimura_rina" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/内村りな"
    ]
  },
  {
    slug: "otsuka-saki",
    maSo: 194,
    soVideo: 65,
    tenDayDu: "Otsuka Saki (大塚咲)",
    tenThuongGoi: "Saki Otsuka",
    ngaySinh: "1984-10-01",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "", // chưa rõ công ty quản lý công khai
    chieuCao: 158, // cm
    canNang: 49, // kg
    soDo: "90–58–85",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật. Hiện làm nhiếp ảnh gia, họa sĩ và người mẫu, hoạt động trên note với tên otsukasaki.",
    nguon: [
      "https://www.weblio.jp/content/大塚咲"
    ]
  },
  {
    slug: "mihoshi-ruka",
    maSo: 195,
    soVideo: 59,
    tenDayDu: "Mihoshi Ruka (美星るか)",
    tenThuongGoi: "Ruka Mihoshi",
    ngaySinh: "1994-11-06",
    queQuan: "", // không công bố quê quán — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "kawaii*",
    chieuCao: 157, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "76–56–80",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn Seesaa Wiki + trang tổng hợp — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://seesaawiki.jp/av_neme/d/%c8%fe%c0%b1%a4%eb%a4%ab",
      "https://javrate.com/actor/detail/17c024f0-7bc6-4e7b-9b10-1d2287ad92c7.html"
    ]
  },
  {
    slug: "shino-megumi",
    maSo: 196,
    soVideo: 197,
    tenDayDu: "Shino Megumi (篠めぐみ)",
    tenThuongGoi: "Aoi Shino",
    ngaySinh: "1990-09-08",
    queQuan: "Tochigi",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "WAVE Promotion",
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "80–58–85",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/shino_aoi0908" }
    ],
    tieuSu: "Diễn viên AV người Nhật. Từ năm 2012 đổi nghệ danh thành Aoi Shino (碧しの); giải nghệ vào tháng 11/2019.",
    nguon: [
      "https://ja.wikipedia.org/wiki/碧しの"
    ]
  },
  {
    slug: "suzuha-miu",
    maSo: 197,
    soVideo: 102,
    tenDayDu: "Suzuha Miu (鈴羽みう)",
    tenThuongGoi: "Miu Suzuha",
    ngaySinh: "1989-09-25",
    queQuan: "Saitama",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 148, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "", // không công bố
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/鈴羽みう"
    ]
  },
  {
    slug: "kimijima-mio",
    maSo: 199,
    soVideo: 123,
    tenDayDu: "Kimijima Mio (君島みお)",
    tenThuongGoi: "Mio Kimijima",
    ngaySinh: "1988-04-25", // hồ sơ thời tên cũ Kyōmoto Kaede ghi biến thể khác — xem GHI-CHU-DU-LIEU.md
    queQuan: "Tochigi",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 162, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "92–55–88",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/mio_kimijima" },
      { ten: "Instagram", url: "https://www.instagram.com/mio.kimijima_" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/君島みお"
    ]
  },
  {
    slug: "yokoyama-mirei",
    maSo: 200,
    soVideo: 81,
    tenDayDu: "Yokoyama Mirei (横山みれい)",
    tenThuongGoi: "Mirei Yokoyama",
    ngaySinh: "1985-11-23", // nguồn Trung Quốc ghi biến thể 1983 — không dùng, xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Tự do",
    chieuCao: 162, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "93–57–83",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/mirei_y" },
      { ten: "Instagram", url: "https://www.instagram.com/mireichan66" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/横山みれい"
    ]
  },
  {
    slug: "tachibana-mary",
    maSo: 203,
    soVideo: 58,
    tenDayDu: "Tachibana Mary (橘メアリー)",
    tenThuongGoi: "Mary Tachibana",
    ngaySinh: "1993-07-07",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "LIGHT",
    chieuCao: 168, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "99–63–94",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/mary_tachibana" },
      { ten: "Instagram", url: "https://www.instagram.com/tachibanamary" }
    ],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/橘メアリー"
    ]
  },
  {
    slug: "kuroki-kotone",
    maSo: 204,
    soVideo: 51,
    tenDayDu: "Kuroki Kotone (黒木琴音)",
    tenThuongGoi: "Kotone Kuroki",
    ngaySinh: "1972-07-30", // theo Wikidata; Seesaa Wiki ghi biến thể 1972-06-10 — xem GHI-CHU-DU-LIEU.md
    queQuan: "", // không công bố quê quán — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "", // chưa rõ công ty quản lý công khai
    chieuCao: 160, // cm — nguồn khác ghi 166, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "95–60–93",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn Seesaa Wiki + Wikidata, có lệch dữ kiện — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://seesaawiki.jp/av_video/d/%b9%f5%cc%da%b6%d7%b2%bb",
      "https://m.wikidata.org/wiki/Q20038353"
    ]
  },
  {
    slug: "hazuki-mion",
    maSo: 205,
    soVideo: 36,
    tenDayDu: "Hazuki Mion (葉月美音)",
    tenThuongGoi: "Mion Hazuki",
    ngaySinh: "1990-10-24",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "GG",
    chieuCao: 145, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "93–59–90",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/MionHazuki" },
      { ten: "Instagram", url: "https://www.instagram.com/mion_hazuki" }
    ],
    tieuSu: "Diễn viên AV người Nhật. Tên cũ: Natsukawa Yuka, Yamagishi Yuka.",
    nguon: [
      "https://ja.wikipedia.org/wiki/葉月美音"
    ]
  },
  {
    slug: "koizumi-nozomi",
    maSo: 167,
    soVideo: 69,
    tenDayDu: "Koizumi Nozomi (小泉のぞみ)",
    tenThuongGoi: "Nozomi Koizumi",
    ngaySinh: "1990-07-28",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "", // chưa rõ công ty quản lý công khai
    chieuCao: 163, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–57–88",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật, debut đầu năm 2012 tại Tokyo-Hot. Còn hoạt động dưới các tên Sugisaki Haruka (杉崎晴香) và Nakagawa Shiori (那珂川詩織).",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn trang tổng hợp + hồ sơ hãng — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://kutikomiya.jp/av-idol/koizumi-nozomi/",
      "https://ryoseiki.jp/movie/tonetsu06.html",
      "https://www.javrate.com/actor/movie/6726d16d-bae2-4200-b603-47785d4b0e6e.html"
    ]
  },
  {
    slug: "sakuragi-rin",
    maSo: 168,
    soVideo: 51,
    tenDayDu: "Sakuragi Rin (桜木凛)",
    tenThuongGoi: "Rino Sakuragi",
    ngaySinh: "1989-03-03",
    queQuan: "Hyogo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Prime Agency",
    chieuCao: 158, // cm
    canNang: "", // số 46 kg chỉ có trên trang tổng hợp — không dùng, xem GHI-CHU-DU-LIEU.md
    soDo: "83–57–82",
    mangXaHoi: [
      { ten: "X (Twitter)", url: "https://x.com/rin0303rin" }
    ],
    tieuSu: "Cựu diễn viên AV người Nhật, cựu thành viên nhóm Ebisu Muscats thế hệ 2, giải nghệ AV năm 2017.",
    nguon: [
      "https://ja.wikipedia.org/wiki/桜木凛",
      "https://thetv.jp/person/1000071695/"
    ]
  },
  {
    slug: "tanaka-nene",
    maSo: 171,
    soVideo: 87,
    tenDayDu: "Tanaka Nene (田中ねね)",
    tenThuongGoi: "Nene Tanaka",
    ngaySinh: "1999-09-20",
    queQuan: "", // chỉ nguồn phụ ghi Tokyo — không dùng, xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "KRONE",
    chieuCao: 151, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "97–60–90",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật, debut năm 2020 tại SOD Create. Biệt danh khác: Maeda Neo (前田音緒).",
    nguon: [
      "https://ja.wikipedia.org/wiki/田中ねね",
      "https://fanza-actress.com/actress/1060480"
    ]
  },
  {
    slug: "orihara-honoka",
    maSo: 172,
    soVideo: 101,
    maSoThem: [28], // mục #28 "Akai Mitsuki" trong danh mục nguồn là chính cô thời 2012–2014 — gộp, xem GHI-CHU đợt 6
    tenDayDu: "Orihara Honoka (折原ほのか)",
    tenThuongGoi: "Honoka Orihara",
    ngaySinh: "1992-09-22",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Alvirosso",
    chieuCao: 154, // cm — nguồn phụ ghi 153, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "92–60–95",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật, xuất thân gravure idol. Debut AV năm 2012 dưới tên Akai Mitsuki (赤井美月), đổi tên thành Orihara Honoka năm 2015; từ năm 2020 còn hoạt động dưới tên Kannazuki Rena (神無月れな).",
    nguon: [
      "https://ja.wikipedia.org/wiki/折原ほのか",
      "https://www.wikidata.org/wiki/Q22130039"
    ]
  },

  // ================= ĐỢT 6 =================
  {
    slug: "hatano-yui",
    maSo: 4,
    soVideo: 321,
    tenDayDu: "Hatano Yui (波多野結衣)",
    tenThuongGoi: "Yui Hatano",
    ngaySinh: "1988-05-24",
    queQuan: "Kyoto", // theo hồ sơ chính thức — cô từng chia sẻ thực tế là Okayama, xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 163, // cm
    canNang: 48, // kg, số liệu Wikipedia 2026
    soDo: "93–59–103", // theo hồ sơ agency hiện hành — số đo cũ 88–59–85, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Diễn viên AV kỳ cựu người Nhật, debut năm 2008, hơn 3.000 tác phẩm; thành viên nhóm T♡Project.",
    nguon: [
      "https://ja.wikipedia.org/wiki/波多野結衣",
      "https://www.t-powers.co.jp/talent/波多野結衣/"
    ]
  },
  {
    slug: "ichinose-suzu",
    maSo: 8,
    soVideo: 79,
    tenDayDu: "Ichinose Suzu (一之瀬すず)",
    tenThuongGoi: "Suzu Ichinose",
    ngaySinh: "1995-03-29",
    queQuan: "Akita", // chỉ có ở Wikipedia bản Trung, bản Nhật không ghi — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Hustler",
    chieuCao: 149, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "73–56–82",
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV người Nhật, hoạt động 2013–2014, đã giải nghệ.",
    nguon: [
      "https://ja.wikipedia.org/wiki/一之瀬すず"
    ]
  },
  {
    slug: "ohashi-miku",
    maSo: 14,
    soVideo: 74,
    tenDayDu: "Ohashi Miku (大橋未久)",
    tenThuongGoi: "Miku Ohashi",
    ngaySinh: "1987-12-24",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 158, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "86–58–85",
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV người Nhật, debut năm 2007 tại kawaii*, sau là trụ cột của MOODYZ, giải nghệ năm 2014.",
    nguon: [
      "https://ja.wikipedia.org/wiki/大橋未久"
    ]
  },
  {
    slug: "fukada-eimi",
    maSo: 16,
    soVideo: 28,
    tenDayDu: "Fukada Eimi (深田えいみ)",
    tenThuongGoi: "Eimi Fukada",
    ngaySinh: "1998-03-18",
    queQuan: "Tochigi", // vài nguồn ghi Saitama — xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Mine's",
    chieuCao: 158, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–59–91", // theo agency Mine's — số đo thực đo 2020 là 87.8–63.5–91.1, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [
      { ten: "Website chính thức", url: "https://fukadaeimi.com" }
    ],
    tieuSu: "Diễn viên AV, YouTuber và doanh nhân người Nhật; cựu idol dưới tên Amami Kokoro (天海こころ).",
    nguon: [
      "https://ja.wikipedia.org/wiki/深田えいみ",
      "http://mines-pro.jp/model/10953"
    ]
  },
  {
    slug: "rae-lil-black",
    maSo: 18,
    soVideo: 146,
    tenDayDu: "Rae Lil Black",
    tenThuongGoi: "",
    ngaySinh: "1996-08-17",
    queQuan: "Osaka",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: "", // không có nguồn chính thức — xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "", // không có nguồn chính thức — xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV người Nhật hoạt động quốc tế, nay là influencer/streamer với tên Nuray Istiqbal. Tên thật chưa từng được cô công khai chính thức nên hồ sơ chỉ dùng nghệ danh; chiều cao và số đo không có nguồn chính thức nên để trống.",
    doTinCay: "trung-binh", // cờ nội bộ: không có Wikipedia/agency Nhật, ngày sinh + quê Osaka thống nhất trên nhiều nguồn tiếng Anh — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://www.thecityceleb.com/biography/celebrity/actress/rae-lil-black-biography-age-height-net-worth-religion-ethnicity-real-name-boyfriend/"
    ]
  },
  {
    slug: "kobayakawa-reiko",
    maSo: 22,
    soVideo: 97,
    tenDayDu: "Kobayakawa Reiko (小早川怜子)",
    tenThuongGoi: "Reiko Kobayakawa",
    ngaySinh: "1982-11-17",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Capsule Agency",
    chieuCao: 166, // cm — nhiều CSDL ghi 165, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–60–95", // theo Wikipedia — nhiều CSDL ghi 88–60–89, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Diễn viên AV dòng trưởng thành người Nhật, debut chính thức năm 2012.",
    nguon: [
      "https://ja.wikipedia.org/wiki/小早川怜子"
    ]
  },
  {
    slug: "ichiki-miho",
    maSo: 23,
    soVideo: 62,
    tenDayDu: "Ichiki Miho (市来美保)",
    tenThuongGoi: "Miho Ichiki",
    ngaySinh: "1992-11-29",
    queQuan: "Kanagawa",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 164, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "105–56–86",
    mangXaHoi: [
      { ten: "X", url: "https://x.com/himenoyuuri1" } // tài khoản dưới nghệ danh đầu Himeno Yuuri — gộp tên đợt 7, xem GHI-CHU-DU-LIEU.md
    ],
    tieuSu: "Cựu diễn viên AV người Nhật. Chuỗi nghệ danh: Himeno Yuuri (姫野ゆうり) → Ichiki Miho → Okina Anna (奥菜アンナ) → Azumi Nakama (仲間あずみ). Hồ sơ Wikipedia nằm dưới tên Okina Anna.",
    nguon: [
      "https://www.weblio.jp/content/奥菜アンナ",
      "https://kutikomiya.jp/av-idol/ichiki-miho/"
    ]
  },
  {
    slug: "kimura-tsuna",
    maSo: 24,
    soVideo: 77,
    tenDayDu: "Kimura Tsuna (木村つな)",
    tenThuongGoi: "Tuna Kimura",
    ngaySinh: "1993-03-15",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 151, // cm theo FANZA Guide — đa số CSDL ghi 149, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "81–58–86",
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV người Nhật, debut năm 2012, ngừng hoạt động khoảng 2017. \"Tuna Kimura\" trong danh mục nguồn là cách đọc chệch romaji của Tsuna. Sau này dùng tên Kirimiya Ten (霧宮てん) trong cosplay.",
    doTinCay: "trung-binh", // cờ nội bộ: nguồn FANZA Guide + TMDB, chưa có Wikipedia — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://fanza-guide.jp/actress/kimura_tuna",
      "https://www.themoviedb.org/person/2364545"
    ]
  },
  {
    slug: "saeki-yukina",
    maSo: 27,
    soVideo: 55,
    tenDayDu: "Saeki Yukina (佐伯ゆきな)",
    tenThuongGoi: "Yukina Saeki",
    ngaySinh: "1993-08-24",
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-POWERS",
    chieuCao: 175, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "94–58–88",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật, debut năm 2014, từng độc quyền h.m.p và E-BODY.",
    nguon: [
      "https://ja.wikipedia.org/wiki/佐伯ゆきな",
      "https://www.wikidata.org/wiki/Q22128651"
    ]
  },
  {
    slug: "natsuki-maron",
    maSo: 30,
    soVideo: 119,
    tenDayDu: "Natsuki Maron (夏希まろん)",
    tenThuongGoi: "Maron Natsuki",
    ngaySinh: "1996-12-25",
    queQuan: "Tokyo", // theo Wikipedia — nguồn phụ ghi Fukuoka, xem GHI-CHU-DU-LIEU.md
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Tự do",
    chieuCao: 164, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–58–88", // theo đa số CSDL — Wikipedia ghi 88–53–88, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật, cựu vũ công; từng qua T-POWERS, Krone, ARROWS (từng đổi tên Natsuyo Eru) và NAX, từ 08/2024 hoạt động tự do.",
    nguon: [
      "https://ja.wikipedia.org/wiki/夏希まろん"
    ]
  },

  // ================= ĐỢT 7 =================
  {
    slug: "tachikawa-rie",
    tenDayDu: "Tachikawa Rie (立川理恵)",
    tenThuongGoi: "Rie Tachikawa",
    ngaySinh: "1993-03-07", // theo Wikipedia JA + FANZA Guide — trang phụ ghi 07/04/1993, xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 160, // cm — trang phụ ghi 155, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "90–57–88",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/立川理恵",
      "https://fanza-guide.jp/actress/tatikawa_rie"
    ]
  },
  {
    slug: "kanae-ruka",
    tenDayDu: "Kanae Ruka (佳苗るか)",
    tenThuongGoi: "Ruka Kanae",
    ngaySinh: "1993-03-04",
    queQuan: "Nagano",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "T-Powers",
    chieuCao: 150, // cm theo Wikipedia JA — Wikidata ghi 147, xem GHI-CHU-DU-LIEU.md
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "84–59–85",
    mangXaHoi: [],
    tieuSu: "Cựu diễn viên AV người Nhật, nay là tarento, biên kịch và doanh nhân. Có kênh YouTube \"佳苗るかのるーちゃんねる\".",
    nguon: [
      "https://ja.wikipedia.org/wiki/佳苗るか",
      "https://www.wikidata.org/wiki/Q11385442"
    ]
  },
  {
    slug: "shimizu-risa",
    tenDayDu: "Shimizu Risa (清水理紗)",
    tenThuongGoi: "Risa Shimizu",
    ngaySinh: "1993-08-08", // thân bài Wikipedia JA + đa số CSDL — infobox Wikipedia tự ghi 1994, xem GHI-CHU-DU-LIEU.md
    queQuan: "Gifu",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "KRONE",
    chieuCao: 166, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "88–58–86",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật. KHÁC người với diễn viên lồng tiếng Shimizu Risa (清水利沙).",
    nguon: [
      "https://ja.wikipedia.org/wiki/清水理紗",
      "https://av-joyu-db.com/actresses/shimizu-risa/"
    ]
  },
  {
    slug: "kitajima-rei",
    tenDayDu: "Kitajima Rei (北島玲)",
    tenThuongGoi: "Rei Kitajima",
    ngaySinh: "1982-12-18", // theo Wikipedia JA — Wikidata ghi 1978, xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Meito",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "96–60–89",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/北島玲",
      "https://kutikomiya.jp/av-idol/kitajima-rei/"
    ]
  },
  {
    slug: "okita-anri",
    tenDayDu: "Okita Anri (沖田杏梨)",
    tenThuongGoi: "Anri Okita",
    ngaySinh: "1986-10-28",
    queQuan: "Birmingham, Anh", // nơi sinh — quốc tịch Nhật
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 168, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "101–59–92", // bộ thời AV — số đo thay đổi mạnh theo thời kỳ, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [
      { ten: "X", url: "https://x.com/AnriOkita_real" },
      { ten: "Instagram", url: "https://www.instagram.com/anri_okita" }
    ],
    tieuSu: "Diễn viên AV người Nhật, sinh tại Birmingham, Anh và mang quốc tịch Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/沖田杏梨",
      "https://fanza-guide.jp/actress/okita_anri"
    ]
  },
  {
    slug: "hojo-maki",
    tenDayDu: "Hojo Maki (北条麻妃)",
    tenThuongGoi: "Maki Houjo",
    ngaySinh: "1976-12-21", // trang phụ ghi 1978/1973 — không dùng, xem GHI-CHU-DU-LIEU.md
    queQuan: "Tokyo",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Madonna",
    chieuCao: 168, // cm
    canNang: 50, // kg
    soDo: "86–59–88",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật. Debut năm 2006 với tên Shiraishi Sayuri (白石さゆり), đổi tên thành Hojo Maki năm 2009. Quê gốc Ishikawa; thông tin công khai đổi thành Tokyo từ năm 2010.",
    nguon: [
      "https://www.weblio.jp/content/北条麻妃",
      "https://zh.wikipedia.org/zh-tw/北条麻妃"
    ]
  },
  {
    slug: "hamasaki-mao",
    tenDayDu: "Hamasaki Mao (浜崎真緒)",
    tenThuongGoi: "Mao Hamasaki",
    ngaySinh: "1993-10-20",
    queQuan: "Chiba",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Funstar Promotion",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "85–59–84", // nhiều CSDL ghi 87–59–86, xem GHI-CHU-DU-LIEU.md
    mangXaHoi: [
      { ten: "X", url: "https://x.com/Hamasaki_mao" }
    ],
    tieuSu: "Diễn viên AV người Nhật, giải nghệ AV năm 2024, nay hoạt động là DJ với tên \"DJ Mao\".",
    doTinCay: "trung-binh", // cờ nội bộ — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://www.themoviedb.org/person/1701406",
      "https://av-joyu-db.com/actresses/hamasa-kimao/"
    ]
  },
  {
    slug: "okazaki-emiri",
    tenDayDu: "Okazaki Emiri (丘咲エミリ)",
    tenThuongGoi: "Emiri Okazaki",
    ngaySinh: "1991-04-10", // ngày sinh trong hồ sơ AV — ngày sinh thật cô tự công khai là 11/01/1989, xem GHI-CHU-DU-LIEU.md
    queQuan: "Kanagawa",
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "",
    chieuCao: 165, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "87–56–87",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV người Nhật. Ngày sinh trong hồ sơ AV là 10/04/1991; ngày sinh thật cô tự công khai sau này là 11/01/1989.",
    doTinCay: "trung-binh", // cờ nội bộ — xem GHI-CHU-DU-LIEU.md
    nguon: [
      "https://www.wikidata.org/wiki/Q11362569",
      "https://en.namu.wiki/w/오카자키_에미리"
    ]
  },
  {
    slug: "takigawa-sofia",
    tenDayDu: "Takigawa Sofia (滝川ソフィア)",
    tenThuongGoi: "Sofia Takigawa",
    ngaySinh: "1988-10-10",
    queQuan: "Bồ Đào Nha", // nơi sinh
    noiSong: "",
    ngheNghiep: "Diễn viên",
    nhomHoacCongTy: "Grand Production",
    chieuCao: 160, // cm
    canNang: "", // chưa có nguồn công khai đáng tin
    soDo: "104–58–87",
    mangXaHoi: [],
    tieuSu: "Diễn viên AV sinh tại Bồ Đào Nha, cha người Bồ Đào Nha, mẹ người Nhật, hoạt động tại Nhật.",
    nguon: [
      "https://ja.wikipedia.org/wiki/滝川ソフィア",
      "https://www.idolnest.com/ja/actress/sofia-takigawa/"
    ]
  }

  // Thêm hồ sơ mới: sao chép một khối { ... } ở trên xuống đây,
  // sửa slug + các trường, và tạo thư mục images/<slug>/, videos/<slug>/.
];
