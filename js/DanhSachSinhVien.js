class DanhSachSinhVien {
    constructor() {
        this.DSSV = [];
    }
    themSinhVien = function(svThem){
        this.DSSV.push(svThem);
    }
    xoaSinhVien = function(arrayXoa){
        for (let value of arrayXoa) {
            for (let index in this.DSSV) {
                if (value === this.DSSV[index].MaSV) {
                    this.DSSV.splice(index, 1);
                }
            }
        }
    }
    timSinhVien = function(id){
        for (let value of this.DSSV) {
            if (value.MaSV === id) {
                return value;
            }
        }
        return null;
    }
    suaSinhVien = function(object){
        for (let value of this.DSSV) {
            if (value.MaSV === object.MaSV) {

                value.HoTen = object.HoTen;
                value.Email = object.Email;
                value.SoDT = object.SoDT;
                value.CMND = object.CMND;
                value.DiemToan = object.DiemToan;
                value.DiemLy = object.DiemLy;
                value.DiemHoa = object.DiemHoa;
                value.DTB = object.DTB;
                value.Loai = object.Loai;
            }
        }
    }
    timKiemSinhVien = function(tukhoa){
        //List kết quả tìm kiếm : DanhSachSinhVien
        let lstKetQuaTimKiem = new DanhSachSinhVien();
        for(let value of this.DSSV){
            if(value.HoTen.toLowerCase().search(String(tukhoa.toLowerCase().trim())) != -1){
                lstKetQuaTimKiem.themSinhVien(value);
            }
        }
        return lstKetQuaTimKiem;
    }
    
}
export { DanhSachSinhVien };