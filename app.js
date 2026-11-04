"use strict";

// ===== Cấu hình thư viện ảnh/video =====
const NHOM_TRANG_PHUC = [
  { key: "mua-he", ten: "Trang phục mùa hè" },
  { key: "mua-thu", ten: "Trang phục mùa thu" },
  { key: "mua-dong", ten: "Trang phục mùa đông" },
  { key: "do-boi", ten: "Đồ bơi" }
];
const ANH_MOI_NHOM = 5; // 4 nhóm x 5 ảnh = 20 ảnh mỗi hồ sơ
const VIDEO_TOI_DA = 6; // dò video-01 .. video-06
const DUOI_ANH = ["jpg", "png", "webp"];
const DUOI_VIDEO = ["mp4", "webm"];

const app = document.getElementById("app");
const boLoc = { tuKhoa: "", tuoiMin: 18, tuoiMax: 70, nghe: "", que: "" };

// ===== Tiện ích =====
function tinhTuoi(ngaySinh) {
  if (!ngaySinh) return null;
  const sinh = new Date(ngaySinh + "T00:00:00");
  if (isNaN(sinh.getTime())) return null;
  const nay = new Date();
  let tuoi = nay.getFullYear() - sinh.getFullYear();
  const lechThang = nay.getMonth() - sinh.getMonth();
  if (lechThang < 0 || (lechThang === 0 && nay.getDate() < sinh.getDate())) tuoi--;
  return tuoi;
}

function dinhDangNgay(ngaySinh) {
  const p = String(ngaySinh).split("-");
  if (p.length !== 3) return ngaySinh;
  return p[2] + "/" + p[1] + "/" + p[0];
}

function chuanHoaChuoi(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function tenHienThi(p) {
  return p.tenThuongGoi || p.tenDayDu || "";
}

// Huy hiệu thứ hạng XVideos (danh mục châu Á) gắn trên ảnh chính:
// hạng tăng so với lần ghi trước -> mũi tên xanh lá chỉ lên; giảm -> mũi tên đỏ chỉ xuống.
function huyHieuHang(p) {
  if (!p.hangXV) return "";
  let muiTen = "";
  if (p.hangXVTruoc) {
    if (p.hangXV < p.hangXVTruoc) muiTen = '<span class="mui-len">▲</span> ';
    else if (p.hangXV > p.hangXVTruoc) muiTen = '<span class="mui-xuong">▼</span> ';
  }
  return '<span class="huy-hang" title="Thứ hạng tại danh mục XVideos châu Á">' + muiTen + "#" + p.hangXV + "</span>";
}

// Nạp ảnh lần lượt qua các đuôi file; gọi khiXong khi nạp được, khiThatBai khi mọi đuôi đều lỗi.
function napAnh(img, dsNguon, khiXong, khiThatBai) {
  let i = 0;
  img.onload = function () {
    img.onload = img.onerror = null;
    if (khiXong) khiXong();
  };
  img.onerror = function () {
    i++;
    if (i < dsNguon.length) {
      img.src = dsNguon[i];
    } else {
      img.onload = img.onerror = null;
      if (khiThatBai) khiThatBai();
    }
  };
  img.src = dsNguon[0];
}

const GOC_ANH_VPS = "https://gia.hialo.vn/anh-idol/";

function nguonAnh(p, tenKhongDuoi) {
  const ds = DUOI_ANH.map(function (d) {
    return "images/" + p.slug + "/" + tenKhongDuoi + "." + d;
  });
  DUOI_ANH.forEach(function (d) {
    ds.push(GOC_ANH_VPS + p.slug + "/" + tenKhongDuoi + "." + d);
  });
  return ds;
}

// ===== Trang chủ: lưới + tìm kiếm + bộ lọc =====
function hienTrangChu() {
  window.scrollTo(0, 0);
  app.innerHTML =
    '<section class="bo-loc">' +
      '<input id="f-tim" type="search" placeholder="🔎 Tìm theo tên...">' +
      '<div class="hang-loc">' +
        '<label>Nghề nghiệp<select id="f-nghe"></select></label>' +
        '<label>Quê quán<select id="f-que"></select></label>' +
      "</div>" +
      '<div class="hang-loc">' +
        '<label>Tuổi từ <strong id="f-tuoi-min-hien"></strong>' +
          '<input id="f-tuoi-min" type="range" min="18" max="70" step="1"></label>' +
        '<label>đến <strong id="f-tuoi-max-hien"></strong>' +
          '<input id="f-tuoi-max" type="range" min="18" max="70" step="1"></label>' +
      "</div>" +
      '<p id="ket-qua" class="ket-qua"></p>' +
    "</section>" +
    '<section id="luoi" class="luoi-the"></section>';

  const inpTim = document.getElementById("f-tim");
  const selNghe = document.getElementById("f-nghe");
  const selQue = document.getElementById("f-que");
  const rgMin = document.getElementById("f-tuoi-min");
  const rgMax = document.getElementById("f-tuoi-max");

  inpTim.value = boLoc.tuKhoa;

  const cacNghe = Array.from(new Set(HO_SO.map(function (p) { return p.ngheNghiep; }).filter(Boolean)));
  selNghe.innerHTML = '<option value="">Tất cả</option>' + cacNghe.map(function (n) {
    return '<option value="' + n + '"' + (n === boLoc.nghe ? " selected" : "") + ">" + n + "</option>";
  }).join("");

  const cacQue = Array.from(new Set(HO_SO.map(function (p) { return p.queQuan; }).filter(Boolean))).sort();
  selQue.innerHTML = '<option value="">Tất cả</option>' + cacQue.map(function (q) {
    return '<option value="' + q + '"' + (q === boLoc.que ? " selected" : "") + ">" + q + "</option>";
  }).join("");

  rgMin.value = boLoc.tuoiMin;
  rgMax.value = boLoc.tuoiMax;
  document.getElementById("f-tuoi-min-hien").textContent = boLoc.tuoiMin;
  document.getElementById("f-tuoi-max-hien").textContent = boLoc.tuoiMax;

  inpTim.addEventListener("input", function () { boLoc.tuKhoa = inpTim.value; veLuoi(); });
  selNghe.addEventListener("change", function () { boLoc.nghe = selNghe.value; veLuoi(); });
  selQue.addEventListener("change", function () { boLoc.que = selQue.value; veLuoi(); });
  rgMin.addEventListener("input", function () {
    boLoc.tuoiMin = parseInt(rgMin.value, 10);
    if (boLoc.tuoiMin > boLoc.tuoiMax) { boLoc.tuoiMax = boLoc.tuoiMin; rgMax.value = boLoc.tuoiMax; document.getElementById("f-tuoi-max-hien").textContent = boLoc.tuoiMax; }
    document.getElementById("f-tuoi-min-hien").textContent = boLoc.tuoiMin;
    veLuoi();
  });
  rgMax.addEventListener("input", function () {
    boLoc.tuoiMax = parseInt(rgMax.value, 10);
    if (boLoc.tuoiMax < boLoc.tuoiMin) { boLoc.tuoiMin = boLoc.tuoiMax; rgMin.value = boLoc.tuoiMin; document.getElementById("f-tuoi-min-hien").textContent = boLoc.tuoiMin; }
    document.getElementById("f-tuoi-max-hien").textContent = boLoc.tuoiMax;
    veLuoi();
  });

  veLuoi();
}

function veLuoi() {
  const tuKhoa = chuanHoaChuoi(boLoc.tuKhoa);
  const ds = HO_SO.filter(function (p) {
    if (tuKhoa) {
      const ten = chuanHoaChuoi((p.tenDayDu || "") + " " + (p.tenThuongGoi || ""));
      if (ten.indexOf(tuKhoa) === -1) return false;
    }
    if (boLoc.nghe && p.ngheNghiep !== boLoc.nghe) return false;
    if (boLoc.que && p.queQuan !== boLoc.que) return false;
    const tuoi = tinhTuoi(p.ngaySinh);
    if (tuoi !== null && (tuoi < boLoc.tuoiMin || tuoi > boLoc.tuoiMax)) return false;
    return true;
  });

  document.getElementById("ket-qua").textContent = "Hiển thị " + ds.length + " / " + HO_SO.length + " hồ sơ";
  const luoi = document.getElementById("luoi");
  luoi.innerHTML = "";
  if (!ds.length) {
    luoi.innerHTML = '<p class="trong">Không tìm thấy hồ sơ phù hợp. Thử nới lỏng bộ lọc.</p>';
    return;
  }
  ds.forEach(function (p) { luoi.appendChild(taoThe(p)); });
}

function taoThe(p) {
  const tuoi = tinhTuoi(p.ngaySinh);
  const a = document.createElement("a");
  a.className = "the";
  a.href = "#/idol/" + encodeURIComponent(p.slug);
  a.innerHTML =
    '<div class="the-anh"><span class="chu-cai">' + (tenHienThi(p).trim().charAt(0) || "?") + "</span>" + huyHieuHang(p) + "</div>" +
    (p.hoSoMau ? '<span class="nhan-mau">MẪU</span>' : "") +
    '<div class="the-than">' +
      "<h3>" + (p.tenDayDu || "") + "</h3>" +
      (p.tenThuongGoi ? '<p class="ten-goi">' + p.tenThuongGoi + "</p>" : "") +
      '<p class="the-dong">' +
        (p.ngheNghiep ? '<span class="nhan-nghe">' + p.ngheNghiep + "</span>" : "") +
        (tuoi !== null ? "<span>" + tuoi + " tuổi</span>" : "") +
      "</p>" +
      (p.queQuan ? '<p class="the-que">📍 ' + p.queQuan + "</p>" : "") +
    "</div>";

  const khung = a.querySelector(".the-anh");
  const img = new Image();
  img.alt = p.tenDayDu || "";
  img.loading = "lazy";
  napAnh(img, nguonAnh(p, "avatar"),
    function () {
      const chu = khung.querySelector(".chu-cai");
      if (chu) chu.remove();
    },
    function () { img.remove(); });
  khung.prepend(img);
  return a;
}

// ===== Trang chi tiết =====
function hienChiTiet(slug) {
  window.scrollTo(0, 0);
  const p = HO_SO.find(function (x) { return x.slug === slug; });
  if (!p) {
    app.innerHTML = '<p class="trong">Không tìm thấy hồ sơ này.</p><p><a class="nut" href="#/">← Quay lại danh sách</a></p>';
    return;
  }

  const tuoi = tinhTuoi(p.ngaySinh);
  const dong = [];
  function themDong(nhan, giaTri) {
    if (giaTri !== undefined && giaTri !== null && String(giaTri).trim() !== "") dong.push([nhan, giaTri]);
  }
  themDong("Tên đầy đủ", p.tenDayDu);
  themDong("Tên thường gọi", p.tenThuongGoi);
  themDong("Ngày sinh", p.ngaySinh ? dinhDangNgay(p.ngaySinh) + (tuoi !== null ? " (" + tuoi + " tuổi)" : "") : "");
  themDong("Quê quán", p.queQuan);
  themDong("Nơi sinh sống hiện tại", p.noiSong);
  themDong("Nghề nghiệp", p.ngheNghiep);
  themDong("Nhóm / Công ty quản lý", p.nhomHoacCongTy);
  themDong("Chiều cao", p.chieuCao ? p.chieuCao + " cm" : "");
  themDong("Cân nặng", p.canNang ? p.canNang + " kg" : "");
  themDong("Số đo 3 vòng", p.soDo);
  themDong("Thứ hạng (XVideos châu Á)", p.hangXV ? "#" + p.hangXV : "");

  const mxh = (p.mangXaHoi || []).filter(function (m) { return m && m.url; });

  app.innerHTML =
    '<p><a class="nut" href="#/">← Quay lại danh sách</a></p>' +
    (p.hoSoMau ? '<div class="canh-bao-mau">⚠️ HỒ SƠ MẪU — NHÂN VẬT HƯ CẤU. Mọi tên gọi và số liệu đều là bịa đặt để xem bố cục, không phải người thật.</div>' : "") +
    '<div class="chi-tiet-dau">' +
      '<div class="chi-tiet-anh"><span class="chu-cai">' + (tenHienThi(p).trim().charAt(0) || "?") + "</span>" + huyHieuHang(p) + "</div>" +
      '<div class="chi-tiet-ten">' +
        "<h2>" + (p.tenDayDu || "") + "</h2>" +
        (p.tenThuongGoi ? '<p class="ten-goi">' + p.tenThuongGoi + "</p>" : "") +
        '<p class="the-dong">' +
          (p.ngheNghiep ? '<span class="nhan-nghe">' + p.ngheNghiep + "</span>" : "") +
          (tuoi !== null ? "<span>" + tuoi + " tuổi</span>" : "") +
        "</p>" +
        (p.queQuan ? '<p class="the-que">📍 ' + p.queQuan + "</p>" : "") +
      "</div>" +
    "</div>" +
    (dong.length ?
      '<dl class="bang-thong-tin">' + dong.map(function (d) {
        return '<div class="dong"><dt>' + d[0] + "</dt><dd>" + d[1] + "</dd></div>";
      }).join("") + "</dl>" : "") +
    (p.tieuSu ? '<div class="tieu-su">' + p.tieuSu + "</div>" : "") +
    (mxh.length ?
      '<div class="mxh">' + mxh.map(function (m) {
        return '<a href="' + m.url + '" target="_blank" rel="noopener noreferrer">' + (m.ten || "Mạng xã hội") + " ↗</a>";
      }).join("") + "</div>" : "") +
    "<h3>🖼️ Thư viện ảnh (20 ảnh)</h3>" +
    '<div id="thu-vien"></div>' +
    "<h3>🎬 Video</h3>" +
    '<div id="khung-video" class="khung-video"><p class="trong">Đang kiểm tra video...</p></div>';

  // Ảnh đại diện ở đầu trang chi tiết
  const khungAnh = app.querySelector(".chi-tiet-anh");
  const imgDaiDien = new Image();
  imgDaiDien.alt = p.tenDayDu || "";
  napAnh(imgDaiDien, nguonAnh(p, "avatar"),
    function () {
      const chu = khungAnh.querySelector(".chu-cai");
      if (chu) chu.remove();
    },
    function () { imgDaiDien.remove(); });
  khungAnh.prepend(imgDaiDien);

  // Thư viện 20 ảnh: 4 nhóm x 5 ô; ô nào chưa có ảnh thì hiện tên file cần đặt
  const thuVien = document.getElementById("thu-vien");
  NHOM_TRANG_PHUC.forEach(function (nhom) {
    const muc = document.createElement("section");
    muc.className = "nhom-anh";
    muc.innerHTML = "<h3>" + nhom.ten + ' <span class="dem-anh">(0/' + ANH_MOI_NHOM + ")</span></h3>";
    const luoiAnh = document.createElement("div");
    luoiAnh.className = "luoi-anh";
    let daCo = 0;
    for (let i = 1; i <= ANH_MOI_NHOM; i++) {
      const so = String(i).padStart(2, "0");
      const tenGoc = nhom.key + "-" + so;
      const o = document.createElement("div");
      o.className = "o-anh";
      o.innerHTML = '<div class="o-trong"><span>images/' + p.slug + "/" + tenGoc + '.jpg</span><small>Chưa có ảnh — đặt file vào đây</small></div>';
      const img = new Image();
      img.alt = (p.tenDayDu || "") + " — " + nhom.ten + " " + so;
      img.loading = "lazy";
      (function (oEl, imgEl, mucEl) {
        napAnh(imgEl, nguonAnh(p, tenGoc), function () {
          oEl.innerHTML = "";
          oEl.appendChild(imgEl);
          daCo++;
          mucEl.querySelector(".dem-anh").textContent = "(" + daCo + "/" + ANH_MOI_NHOM + ")";
          imgEl.addEventListener("click", function () { moLightbox(imgEl.src); });
        }, function () { /* giữ ô trống giữ chỗ */ });
      })(o, img, muc);
      luoiAnh.appendChild(o);
    }
    muc.appendChild(luoiAnh);
    thuVien.appendChild(muc);
  });

  // Video: dò video-01..06 trong videos/<slug>/
  napVideo(p, document.getElementById("khung-video"));
}

function thuTaiVideo(src) {
  return new Promise(function (resolve) {
    const v = document.createElement("video");
    let xong = false;
    const ketThuc = function (kq) {
      if (xong) return;
      xong = true;
      v.removeAttribute("src");
      try { v.load(); } catch (e) { /* bỏ qua */ }
      resolve(kq);
    };
    v.preload = "metadata";
    v.onloadedmetadata = function () { ketThuc(true); };
    v.onerror = function () { ketThuc(false); };
    setTimeout(function () { ketThuc(false); }, 5000);
    v.src = src;
  });
}

async function napVideo(p, khung) {
  const timThay = [];
  for (let i = 1; i <= VIDEO_TOI_DA; i++) {
    const so = String(i).padStart(2, "0");
    for (let j = 0; j < DUOI_VIDEO.length; j++) {
      const src = "videos/" + p.slug + "/video-" + so + "." + DUOI_VIDEO[j];
      // Dò lần lượt để tránh bắn quá nhiều yêu cầu cùng lúc
      const ok = await thuTaiVideo(src);
      if (ok) { timThay.push(src); break; }
    }
  }
  if (!timThay.length) {
    khung.innerHTML = '<p class="trong">Chưa có video. Đặt file vào thư mục <code>videos/' + p.slug + '/</code> với tên <code>video-01.mp4</code>, <code>video-02.mp4</code>… (tối đa ' + VIDEO_TOI_DA + " video).</p>";
    return;
  }
  khung.innerHTML = "";
  timThay.forEach(function (src) {
    const v = document.createElement("video");
    v.className = "video-phat";
    v.controls = true;
    v.preload = "metadata";
    v.src = src;
    khung.appendChild(v);
  });
}

// ===== Lightbox =====
const hopLightbox = document.getElementById("lightbox");
const anhLightbox = document.getElementById("lightbox-img");
function moLightbox(src) {
  anhLightbox.src = src;
  hopLightbox.hidden = false;
}
hopLightbox.addEventListener("click", function () {
  hopLightbox.hidden = true;
  anhLightbox.src = "";
});

// ===== Định tuyến theo hash =====
function dinhTuyen() {
  const hash = location.hash || "#/";
  const m = hash.match(/^#\/idol\/(.+)$/);
  if (m) {
    hienChiTiet(decodeURIComponent(m[1]));
  } else {
    hienTrangChu();
  }
}
window.addEventListener("hashchange", dinhTuyen);
dinhTuyen();
