# Hướng dẫn Cộng tác (Contributing Guidelines)

Chào mừng bạn đến với **Design Patterns Atlas**! Chúng tôi rất trân trọng sự quan tâm và đóng góp của bạn để làm cho bộ tài liệu này ngày càng hoàn thiện hơn.

Để đảm bảo chất lượng nội dung và tính nhất quán của mã nguồn, vui lòng dành chút thời gian đọc kỹ hướng dẫn dưới đây trước khi bắt đầu đóng góp.

---

## Bạn có thể đóng góp những gì?

1. **Sửa lỗi chính tả & Câu chữ**: Sửa các lỗi chính tả, cải thiện câu từ tiếng Việt sao cho tự nhiên, mượt mà và dễ hiểu hơn.
2. **Cải tiến mã nguồn mẫu**: Tối ưu hóa các ví dụ mã nguồn Java, bổ sung thêm chú thích hoặc sửa các lỗi logic (nếu có).
3. **Cập nhật hình ảnh/UML**: Cải tiến các sơ đồ thành phần Mermaid UML giúp trực quan hóa cấu trúc lớp tốt hơn.
4. **Báo cáo lỗi**: Tạo issue báo cáo các lỗi về hiển thị, lỗi điều hướng, hoặc lỗi tìm kiếm trên trang tài liệu.

---

## Quy trình đóng góp

### Bước 1: Fork và Clone dự án

1. Nhấp vào nút **Fork** ở góc trên bên phải trang repository này để tạo bản sao trên tài khoản cá nhân của bạn.
2. Clone bản fork về máy của bạn:
    ```bash
    git clone https://github.com/YOUR_USERNAME/design-patterns-learning.git
    cd design-patterns-learning
    ```

### Bước 2: Thiết lập môi trường và chạy thử

Dự án yêu cầu cài đặt sẵn **Node.js (phiên bản 20 trở lên)** và trình quản lý gói **pnpm** (hoặc `npm`).

1. Cài đặt các gói phụ thuộc:
    ```bash
    pnpm install
    ```
2. Khởi chạy máy chủ phát triển cục bộ:
    ```bash
    pnpm dev
    ```
3. Truy cập địa chỉ `http://localhost:3001` trên trình duyệt để kiểm tra giao diện.

### Bước 3: Tạo nhánh mới (Branch)

Hãy tạo một nhánh riêng biệt cho tính năng hoặc sửa lỗi của bạn:

```bash
git checkout -b feature/add-new-pattern
# hoặc
git checkout -b fix/typo-singleton
```

### Bước 4: Chỉnh sửa tài liệu MDX & Mã nguồn

Khi chỉnh sửa hoặc viết mới một bài mẫu thiết kế trong thư mục `content/`:

- Hãy đặt tên tệp tin bằng quy chuẩn `kebab-case` (ví dụ: `template-method.mdx`).
- Đảm bảo tất cả các bài viết đều tuân thủ cấu trúc chuẩn gồm 9 phần (xem chi tiết cấu trúc tại `README.md`).
- Các ví dụ mã nguồn mẫu bắt buộc viết bằng **Java** kèm chú thích tiếng Việt đầy đủ.
- Mọi sơ đồ lớp phải được vẽ bằng công cụ tích hợp **Mermaid block**.

**Cú pháp cấu hình Frontmatter chuẩn:**

```yaml
---
title: Tên Mẫu Thiết Kế Pattern
summary: Mô tả ngắn gọn ý nghĩa của mẫu bằng tiếng Việt.
category: creational | structural | behavioral
level: beginner | intermediate | advanced
tags:
    - creational
    - thread-safe
related:
    - Factory Method Pattern
date: 2026-05-22
---
```

### Bước 5: Kiểm tra chất lượng và định dạng

Trước khi commit mã nguồn, bạn bắt buộc phải chạy các công cụ kiểm tra của dự án để đảm bảo không xảy ra lỗi biên dịch hoặc lỗi cú pháp:

1. **Tự động định dạng code (`Prettier`)**:
    ```bash
    pnpm format
    ```
2. **Kiểm tra lỗi tĩnh (`ESLint`)**:
    ```bash
    pnpm lint
    ```
3. **Kiểm tra kiểu dữ liệu TypeScript**:
    ```bash
    pnpm typecheck
    ```
4. **Biên dịch thử sản phẩm tĩnh**:
    ```bash
    pnpm build
    ```

### Bước 6: Commit và tạo Pull Request

1. Commit các thay đổi với thông điệp rõ ràng, tuân thủ Conventional Commits (ví dụ: `docs: fix typo in singleton pattern` hoặc `feat: add bridge pattern docs`):
    ```bash
    git add .
    git commit -m "docs: fix typo in singleton mdx"
    ```
2. Push nhánh của bạn lên bản fork trên GitHub:
    ```bash
    git push origin fix/typo-singleton
    ```
3. Truy cập repository gốc trên GitHub, nhấp vào nút **Compare & pull request** và mô tả chi tiết các thay đổi của bạn để ban quản trị tiến hành kiểm tra và gộp (merge) mã nguồn.

Cảm ơn những đóng góp tuyệt vời của bạn!
