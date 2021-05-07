class SinhVien {
    constructor(masv, hoten, email, sodt, cmnd, toan, ly, hoa) {
        this.MaSV = masv;
        this.HoTen = hoten;
        this.Email = email;
        this.SoDT = sodt;
        this.CMND = cmnd;
        this.DiemToan = toan;
        this.DiemLy = ly;
        this.DiemHoa = hoa;
        this.DTB = '';
        this.Loai = '';
    }
    TinhDTB = () => {
        this.DTB = ((Number(this.DiemToan) + Number(this.DiemLy) + Number(this.DiemHoa)) / 3).toFixed(2);
    }
    XepLoai = () => {
        if (this.DTB <= 10 && this.DTB >= 8) {
            this.Loai = "Xếp loại Giỏi";
        }
        else if (this.DTB < 8 && this.DTB >= 6.5) {
            this.Loai = "Xếp loại Khá";
        }
        else if (this.DTB < 6.5 && this.DTB >= 5) {
            this.Loai = "Xếp loại Trung Bình";
        }
        else {
            this.Loai = "Xếp loại yếu";
        }
    }
}
export {SinhVien};