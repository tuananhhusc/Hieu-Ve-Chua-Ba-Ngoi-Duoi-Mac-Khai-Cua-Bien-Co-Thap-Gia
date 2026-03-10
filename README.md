# Hiểu Về Chúa Ba Ngôi Dưới Mặc Khải Của Biến Cố Thập Giá

Một trang tĩnh (Static Site) dạng ấn phẩm học thuật (Academic Publication) được xây dựng bằng Next.js, trình bày báo cáo nghiên cứu thần học chuyên sâu về mầu nhiệm Thiên Chúa Ba Ngôi thông qua điểm nhìn của biến cố Thập giá.

Dự án này được thiết kế như một "cuốn sách kỹ thuật số" (Digital Book) với giao diện chuẩn mực, tối ưu hóa trải nghiệm đọc cho các nội dung học thuật dài hạn, kết hợp với các kỹ thuật UI/UX hiện đại nhưng vẫn giữ được nét cổ điển, trang trọng của môi trường thần học Công giáo.

## 🌟 Tính Năng Nổi Bật (Key Features)

### 1. Trải Nghiệm Đọc Thư Giãn (Immersive Reading Experience)
- **Thiết kế Cổ Điện (Parchment & Crimson):** Sử dụng các gam màu giấy da sáp (Parchment) làm nền tảng, kết hợp với màu đỏ dâu (Crimson) đặc trưng của thần học và màu vàng Kim (Gold/Bronze) cho các điểm nhấn.
- **Typography Chuẩn Học Thuật:** Kết hợp 4 bộ font chuyên biệt: `Playfair Display` & `Cinzel` (Tiêu đề uy nghi), `Source Serif 4` (Nội dung đọc sâu êm mắt), và `Inter` (Cho các Navigation/Menu hiện đại). Có cả hiệu ứng chữ Hoa lớn (Dropcap) khởi đầu mỗi chương ngữ.
- **Thanh Tiến Độ Cuộn (Reading Progress Bar):** Một dải băng Vàng mỏng chạy ngang sát viền trên cùng khung hình giúp người đọc kiểm soát được tiến độ tiếp thu lượng kiến thức lớn.

### 2. Định Vị & Điều Hướng (Navigation)
- **Bảng Mục Lục Bám Dính (Sticky TOC):** Cấu trúc cây tự động theo dõi và highlight chương/mục đang đọc (Sử dụng Intersection Observer API).
- **Mục Lục Di Động (Mobile Drawer TOC):** Nút FAB (Floating Action Button) ẩn bên phải góc màn hình giúp mở menu điều hướng nhanh gọn trên điện thoại.

### 3. Tương Tác Học Thuật Học (Academic Interactions)
- **Tooltip Trích Dẫn Thông Minh (Hover Footnotes):** Lấy cảm hứng từ hệ thống ghi chú của Wikipedia hay các tạp chí y khoa. Khi rê chuột (hover) vào số thứ tự (`[1]`, `[2]`), một Pop-up hiện ra hiển thị ngay tác giả và tựa sách (Chuẩn APA), không cần cuộn liên tục xuống cuối bài. (Trên điện thoại, chúng sẽ biến thành các thông báo bong bóng dưới đáy màn hình).
- **Trực Quan Hóa (Image Lightbox):** Tích hợp công cụ Lightbox cho phép click để phóng to toàn màn hình các "Linh Ảnh" & "Kỹ Thuật Không Gian" trong mục V, đem lại góc nhìn chiêm ngắm nghệ thuật.

### 4. Tối Ưu Hóa Giao Diện (UI/UX Optimizations)
- **Công Tắc Chế Độ Tối (Academic Dark Mode):** Cấp quyền chuyển đổi nền tối bảo vệ mắt (vẫn duy trì hệ tương phản và màu sắc hoàng gia) nhờ vào `next-themes`.
- **Chế Độ In Tuyệt Đối (Print Stylesheet):** Tính năng tự động dọn dẹp (xóa toàn bộ các nút bấm, nút Dark mode, biểu tượng) khi người dùng thao tác lệnh IN (Ctrl+P / Cmd+P) trình duyệt. Trang web sẽ ngay lập tức biến thành một văn bản Word/PDF trắng đen thuần túy hoàn hảo.
- **Giao Diện Không Cuộn Ngang (Zero Horizontal-Scroll):** Ứng dụng `overflow-x: clip` để cắt đứt các lỗi tràn lề trên Mobile mà vẫn duy trì được cơ chế khóa Bảng so sánh (Responsive Tables) lướt ngang riêng biệt.

## 🛠 Nền Tảng Công Nghệ (Tech Stack)

*   **Bộ Não / Khung Sườn:** [Next.js 15+](https://nextjs.org/) (App Router, React 19)
*   **Ngôn Ngữ:** TypeScript
*   **Hệ Stylus & Giao Diện:** Tailwind CSS (v4)
*   **Biểu Tượng (Icons):** Lucide React
*   **Quản Lý Trạng Thái Theme:** next-themes

## 📁 Cấu Trúc Thư Mục (Folder Structure)

```text
d:\thienchua3ngoi\
├── public/                 # Các tài nguyên tĩnh ngoài (Hình ảnh nghệ thuật .jpg)
├── src/
│   ├── app/
│   │   ├── globals.css     # Định nghĩa màu hệ thống (CSS Variables), Typography, và Print Mode (@media print)
│   │   ├── layout.tsx      # Lõi khung chứa ThemeProvider, Progress Bar và Toggle Nền tối
│   │   └── page.tsx        # Trang ghép nối chính, chứa Main Content & Sidebar TOC
│   ├── components/         # Yếu tố UI độc lập (Widgets)
│   │   ├── BackToTop.tsx   # Nút cuộn ngược thiết kế Gradient
│   │   ├── Bibliography.tsx# Trình tạo danh sách tài liệu chuẩn APA
│   │   ├── Cite.tsx        # Logic phân giải & Popovers xuất thông tin số trỏ chuột
│   │   ├── ImageLightbox.tsx# Cơ chế phóng to các Bức Bích Họa (Masaccio & Rublev)
│   │   ├── TableOfContents.tsx # Menu danh mục có theo dõi khung nhìn người dùng
│   │   └── sections/       # Nội dung các chương thần học được cắt nhỏ
│   │       ├── SectionDanNhap.tsx
│   │       ├── ...
│   └── data/
│       └── references.ts   # Database chứa Object thô tham chiếu & Hàm parser formatAPA()
```

## 🚀 Hướng Dẫn Cài Đặt (Installation & Development)

1.  **Cài Đặt Node.js:** Đảm bảo máy tính của bạn đã có NodeJS cài đặt.
2.  **Cài Đặt Thư Viện (Dependencies):** Mở Terminal tại thư mục gốc và chạy lệnh tải gói:
    ```bash
    npm install
    ```
3.  **Khởi Động Môi Trường Dev:** Chạy giả lập hệ thống gốc qua liên kết Localhost:
    ```bash
    npm run dev
    ```
    Mở trình duyệt truy cập `http://localhost:3000`.

## 📦 Đóng Gói (Production Build & Deploy)

Dự án này là hoàn toàn Static. Nó hoàn hảo để triển khai miễn phí trên **Vercel** hay **GitHub Pages** chỉ với vài cái nhấp chuột.

Để tự build source tinh gọn cho server chạy (Kiểm thử lỗi kĩ xảo):
```bash
npm run build
npm run start
```

## 💡 Tư Duy Thiết Kế (Design Rationale)
Đồ án này đã giải quyết một câu hỏi khó trong thiết kế UI/UX Học thuật: *"Làm sao để một người đọc một bản báo cáo 10.000 chữ trên điện thoại mà không thấy áp lực hay nhàm chán?"* 
Bằng cách loại bỏ hoàn toàn các khung viền rườm rà, đặt lề cực rộng, căn chỉnh lại chữ cái Đầu (Dropcap), và chia nhỏ các tương tác tham chiếu qua Tooltip Popovers thay vì chèn ép văn bản; thiết kế đã mang lại một cảm thức vừa "Thiêng Liêng" như đang đọc một văn kiện giáo hoàng, vừa "Công Nghệ" cực kỳ tiện lợi.
