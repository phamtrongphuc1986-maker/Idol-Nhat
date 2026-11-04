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
  }

  // Thêm hồ sơ mới: sao chép một khối { ... } ở trên xuống đây,
  // sửa slug + các trường, và tạo thư mục images/<slug>/, videos/<slug>/.
];
