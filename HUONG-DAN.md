# Hướng dẫn quản trị website Idol Nhật Bản

Website tĩnh (HTML/CSS/JS thuần), chạy được trên GitHub Pages hoặc bất kỳ máy chủ tĩnh nào. Không cần cơ sở dữ liệu, không cần đăng nhập.

## 1. Cấu trúc thư mục

```
idol-nhat/
├── index.html        ← khung trang (đầu trang, chân trang, hộp xem ảnh)
├── style.css         ← giao diện
├── app.js            ← logic: lưới hồ sơ, tìm kiếm, bộ lọc, trang chi tiết
├── data.js           ← DỮ LIỆU HỒ SƠ (sửa file này để thêm người)
├── HUONG-DAN.md      ← file này
├── images/
│   └── <slug>/       ← ảnh của từng người (xem mục 3)
└── videos/
    └── <slug>/       ← video của từng người (xem mục 4)
```

`<slug>` là mã định danh viết thường, không dấu, nối bằng dấu `-`, ví dụ: `sakura-sato`. Slug phải trùng khớp ở 3 nơi: trường `slug` trong `data.js`, thư mục `images/<slug>/`, thư mục `videos/<slug>/`.

## 2. Quy tắc dữ liệu (rất quan trọng)

- Hồ sơ **chỉ** chứa thông tin **công khai chính thức**: tên đầy đủ, tên thường gọi, ngày tháng năm sinh, quê quán (mức tỉnh/thành), nơi sinh sống hiện tại (chỉ mức tỉnh/thành phố và chỉ khi được công khai), chiều cao, cân nặng, số đo 3 vòng (**chỉ** khi có nguồn công khai chính thức — không có thì để trống), nghề nghiệp, nhóm/công ty quản lý, link mạng xã hội **chính thức**, tiểu sử ngắn.
- **Không bao giờ** thêm vào hồ sơ: địa chỉ nhà, địa chỉ thường trú/tạm trú chi tiết, số điện thoại cá nhân. Mẫu dữ liệu cố ý không có các trường này.
- Trường nào chưa có dữ liệu: để `""` (chuỗi rỗng) hoặc `[]` — giao diện tự ẩn trường đó.

**Quy trình điền dữ liệu:** user gửi danh sách tên thật (tên thường gọi) cho Muse → Muse tra cứu và điền thông tin công khai từ nguồn chính thức vào `data.js`. Ảnh và video do **user tự cung cấp** (Muse không tự tìm/tải ảnh của người thật).

## 3. Cách thêm 1 người mới

### Bước 1 — Thêm mục trong `data.js`

Sao chép khối hồ sơ mẫu trong mảng `HO_SO` rồi sửa (ngày sinh dạng `YYYY-MM-DD`):

```js
{
  slug: "sakura-sato",
  tenDayDu: "Sato Sakura",
  tenThuongGoi: "Sakura",
  ngaySinh: "2001-04-02",
  queQuan: "Osaka",
  noiSong: "Tokyo",
  ngheNghiep: "Idol",            // "Idol" | "Diễn viên" | "Người mẫu"
  nhomHoacCongTy: "Tên nhóm / công ty quản lý",
  chieuCao: 160,                 // cm — chưa có thì để ""
  canNang: "",                   // kg — chưa có thì để ""
  soDo: "",                      // chỉ điền khi có nguồn công khai chính thức
  mangXaHoi: [
    { ten: "Instagram", url: "https://www.instagram.com/...chinh-thuc..." }
  ],
  tieuSu: "Tiểu sử ngắn từ nguồn công khai."
}
```

Tuổi được web **tự tính** từ `ngaySinh`, không cần điền.

### Bước 2 — Tạo thư mục ảnh và video

```
images/sakura-sato/
videos/sakura-sato/
```

### Bước 3 — Đặt ảnh theo đúng tên (mục 4) và mở lại trang để kiểm tra.

## 4. Quy ước đặt tên file ảnh (20 ảnh/người)

Ảnh đại diện (hiện trên thẻ ở trang chủ và đầu trang chi tiết):

```
images/<slug>/avatar.jpg
```

Thư viện 20 ảnh chia 4 nhóm trang phục, mỗi nhóm 5 ảnh, đánh số `01`–`05`:

| Nhóm | Tên file |
|---|---|
| Mùa hè | `images/<slug>/mua-he-01.jpg` … `mua-he-05.jpg` |
| Mùa thu | `images/<slug>/mua-thu-01.jpg` … `mua-thu-05.jpg` |
| Mùa đông | `images/<slug>/mua-dong-01.jpg` … `mua-dong-05.jpg` |
| Đồ bơi | `images/<slug>/do-boi-01.jpg` … `do-boi-05.jpg` |

- Chấp nhận đuôi `.jpg`, `.png`, `.webp` (web thử theo thứ tự đó).
- Chưa có ảnh ở ô nào, trang chi tiết hiện ô trống ghi rõ tên file cần đặt — cứ đặt thêm file vào là ảnh tự hiện, **không cần sửa code**.
- Bấm vào ảnh trong thư viện để xem phóng to.

## 5. Quy ước đặt tên file video

```
videos/<slug>/video-01.mp4
videos/<slug>/video-02.mp4
... tối đa video-06.mp4
```

- Chấp nhận `.mp4` (ưu tiên) và `.webm`.
- Web tự dò `video-01` → `video-06`. Chưa có file nào thì mục Video hiện dòng "Chưa có video" kèm hướng dẫn.

## 6. Xem thử và xuất bản

- Xem thử nhanh: mở `index.html` bằng trình duyệt. Muốn chuẩn nhất, chạy máy chủ tĩnh cục bộ trong thư mục này: `python3 -m http.server 8000` rồi mở `http://localhost:8000`.
- Xuất bản: đẩy cả thư mục lên một kho GitHub và bật GitHub Pages (nhánh `main`, thư mục gốc). Ảnh/video dung lượng lớn nên cân nhắc giới hạn của GitHub (file lẻ tối đa 100 MB, kho nên dưới ~1 GB).

## 7. Hồ sơ mẫu

`data.js` đang có đúng 1 hồ sơ mẫu đánh dấu rõ **"HỒ SƠ MẪU — NHÂN VẬT HƯ CẤU"** (slug `mau-hu-cau`, kèm thư mục `images/mau-hu-cau/` và `videos/mau-hu-cau/` để xem quy ước). Khi bắt đầu nhập người thật có thể xóa khối mẫu này và 2 thư mục mẫu.
