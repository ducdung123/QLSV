import { Validation } from './Validation.js';
import { SinhVien } from './SinhVien.js';
import { DanhSachSinhVien } from './DanhSachSinhVien.js';
let validate = new Validation();
let danhSachSinhVien = new DanhSachSinhVien();

let ThemSinhVien = () => {
    let loi = 0;
    let masv = document.getElementById('masv').value;
    let hoten = document.getElementById('hoten').value;
    let cmnd = document.getElementById('cmnd').value;
    let sdt = document.getElementById('sdt').value;
    let email = document.getElementById('email').value;
    let Toan = document.getElementById('Toan').value;
    let Ly = document.getElementById('Ly').value;
    let Hoa = document.getElementById('Hoa').value;

    if (KiemTraRong(masv, 'masv')) {
        loi++;
    }
    if (KiemTraRong(hoten, 'hoten')) {
        loi++;
    }
    if (KiemTraRong(cmnd, 'cmnd')) {
        loi++;
    }
    if (KiemTraRong(Toan, 'Toan')) {
        loi++;
    }
    if (KiemTraRong(Ly, 'Ly')) {
        loi++;
    }
    if (KiemTraRong(Hoa, 'Hoa')) {
        loi++;
    }
    if (validate.kiemTraEmail(email)) {
        document.getElementById('email').style.borderColor = "green";
    }
    else {
        document.getElementById('email').style.borderColor = "red";
        loi++;
    }
    if (validate.kiemTraSoDT(sdt)) {
        document.getElementById('sdt').style.borderColor = "green";
    }
    else {
        document.getElementById('sdt').style.borderColor = "red";
        loi++;
    }
    if (loi != 0) {
        return;
    }
    let sinhVien = new SinhVien(masv, hoten, email, sdt, cmnd, Toan, Ly, Hoa);
    sinhVien.TinhDTB();
    sinhVien.XepLoai();
    danhSachSinhVien.themSinhVien(sinhVien);
    // console.log(danhSachSinhVien);
    CapNhatDanhSachSV(danhSachSinhVien);
}
let KiemTraRong = (value, id) => {
    if (validate.kiemTraRong(value)) {
        document.getElementById(id).style.borderColor = "red";
        return true;
    }
    else {
        document.getElementById(id).style.borderColor = "green";
        return false;
    }

}
let CapNhatDanhSachSV = (dssv) => {
    let trbody = "";
    for (let value of dssv.DSSV) {
        //console.log(value.masv)
        trbody += `
        <tr data-id="${value.MaSV}" onclick="FixSinhVien()">
            <td><input type="checkbox" id="${value.MaSV}"></td>
            <td>${value.MaSV}</td>
            <td>${value.HoTen}</td>
            <td>${value.Email}</td>
            <td>${value.CMND}</td>
            <td>${value.SoDT}</td>
            <td>${value.DTB}</td>
            <td>${value.Loai}</td>
        </tr> `
    }
    document.getElementById('tbodySinhVien').innerHTML = trbody;
}

let SetStorage = () => {

    let jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);

    localStorage.setItem("DanhSachSV", jsonDanhSachSinhVien);
}


let GetStorage = () => {

    let jsonDanhSachSinhVien = localStorage.getItem("DanhSachSV");
    let mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    danhSachSinhVien.DSSV = mangDSSV;
    CapNhatDanhSachSV(danhSachSinhVien);
    // console.log(danhSachSinhVien.DSSV)
}
let XoaSinhVien = () => {
    let arrayInput = document.getElementById('tbodySinhVien').querySelectorAll('input');
    let arrayCheckInput = [];
    for (let value of arrayInput) {
        if (value.checked) {
            arrayCheckInput.push(value.id)
        }
    }
    danhSachSinhVien.xoaSinhVien(arrayCheckInput);
    CapNhatDanhSachSV(danhSachSinhVien);
}
GetStorage();
let FixSinhVien = () => {
    // console.log(event)
    let svFix = danhSachSinhVien.timSinhVien(event.path[1].getAttribute('data-id'));
    //console.log(svFix)
    if (svFix != null) {
        document.getElementById('masv').value = svFix.MaSV;
        document.getElementById('masv').setAttribute('disabled', 'true')
        document.getElementById('hoten').value = svFix.HoTen;
        document.getElementById('cmnd').value = svFix.CMND;
        document.getElementById('sdt').value = svFix.SoDT;
        document.getElementById('email').value = svFix.Email;
        document.getElementById('Toan').value = svFix.DiemToan;
        document.getElementById('Ly').value = svFix.DiemLy;
        document.getElementById('Hoa').value = svFix.DiemHoa;
    }
}
let LuuSinhVien = () => {
    let loi = 0;
    let masv = document.getElementById('masv').value;
    let hoten = document.getElementById('hoten').value;
    let cmnd = document.getElementById('cmnd').value;
    let sdt = document.getElementById('sdt').value;
    let email = document.getElementById('email').value;
    let Toan = document.getElementById('Toan').value;
    let Ly = document.getElementById('Ly').value;
    let Hoa = document.getElementById('Hoa').value;

    if (KiemTraRong(masv, 'masv')) {
        loi++;
    }
    if (KiemTraRong(hoten, 'hoten')) {
        loi++;
    }
    if (KiemTraRong(cmnd, 'cmnd')) {
        loi++;
    }
    if (KiemTraRong(Toan, 'Toan')) {
        loi++;
    }
    if (KiemTraRong(Ly, 'Ly')) {
        loi++;
    }
    if (KiemTraRong(Hoa, 'Hoa')) {
        loi++;
    }
    if (validate.kiemTraEmail(email)) {
        document.getElementById('email').style.borderColor = "green";
    }
    else {
        document.getElementById('email').style.borderColor = "red";
        loi++;
    }
    if (validate.kiemTraSoDT(sdt)) {
        document.getElementById('sdt').style.borderColor = "green";
    }
    else {
        document.getElementById('sdt').style.borderColor = "red";
        loi++;
    }
    if (loi != 0) {
        return;
    }
    let sinhVien = new SinhVien(masv, hoten, email, sdt, cmnd, Toan, Ly, Hoa);
    sinhVien.TinhDTB();
    sinhVien.XepLoai();
    danhSachSinhVien.suaSinhVien(sinhVien);
    CapNhatDanhSachSV(danhSachSinhVien);
    document.getElementById('masv').removeAttribute('disabled');
    document.getElementById('masv').value = "";
    document.getElementById('hoten').value = "";
    document.getElementById('cmnd').value = "";
    document.getElementById('sdt').value = "";
    document.getElementById('email').value = "";
    document.getElementById('Toan').value = "";
    document.getElementById('Ly').value = "";
    document.getElementById('Hoa').value = "";
}
let TimKiemSinhVien = ()=>{
    let key = document.getElementById('tukhoa').value;
    let dssvNew = danhSachSinhVien.timKiemSinhVien(key);
    console.log(dssvNew)
    CapNhatDanhSachSV(dssvNew);
}
document.getElementById('themSV').onclick = ThemSinhVien;
document.getElementById('setStorage').onclick = SetStorage;
document.getElementById('getStorage').onclick = GetStorage;
document.getElementById('xoaSV').onclick = XoaSinhVien;
document.getElementById('luuSV').onclick = LuuSinhVien;
window.FixSinhVien = FixSinhVien;
window.TimKiemSinhVien = TimKiemSinhVien;