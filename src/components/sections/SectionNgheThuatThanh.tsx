import React from "react";
import ContentSection from "../ContentSection";
import ComparisonTable from "../ComparisonTable";
import Cite from "../Cite";
import ImageLightbox from "../ImageLightbox";

export default function SectionNgheThuatThanh() {
    return (
        <ContentSection id="nghe-thuat-thanh">
            <h2>Biểu Đạt Thần Học Qua Nghệ Thuật Thánh Và Linh Ảnh</h2>
            <p>
                Chân lý thần học không chỉ được diễn đạt bằng ngôn từ phức tạp, mà còn được cụ thể hóa, thăng hoa và đi vào lòng người qua nghệ thuật thánh (<em>Sacred Art</em>) và linh ảnh (<em>Iconography</em>). Biến cố Thập giá như một cánh cửa mở ra mầu nhiệm Ba Ngôi đã trở thành một chủ đề vô tận khơi nguồn cảm hứng cho các nghệ nhân từ thời Trung Cổ.<Cite ids={[63]} />
            </p>

            <ContentSection id="gnadenstuhl">
                <h3>1. Hình Tượng &ldquo;Ngai Tòa Ân Sủng&rdquo; (<em>Throne of Grace / Gnadenstuhl</em>)</h3>
                <p>
                    Từ thế kỷ 12, hình tượng <em>Gnadenstuhl</em> đã trở thành công cụ trực quan đắc lực để biểu đạt thần học Ba Ngôi qua biến cố Thập giá.<Cite ids={[63]} /> Trong cấu trúc đồ họa đặc trưng, Chúa Cha thường được mô tả là một bậc trưởng thượng uy nghi, đôi tay vươn ra đỡ lấy cây thập giá hoặc thân xác mềm rũ của Chúa Con. Ở vị trí trung gian là hình ảnh chim bồ câu tỏa sáng hiện thân của Chúa Thánh Thần.<Cite ids={[63]} />
                </p>
                <p>
                    <strong>Giá trị thần học:</strong> Hình tượng này đã đánh đổ sự hiểu lầm lệch lạc về một vị Thiên Chúa Cha độc tài. Thay vào đó, nó trình bày cái chết của Đức Kitô như một hành động của sự hiệp thông nội tại trong Ba Ngôi. Cánh tay của Chúa Cha vươn ra đỡ lấy Thập giá diễn tả sự nâng đỡ, đón nhận hiến lễ, và chia sẻ nỗi đau tột cùng.<Cite ids={[65]} />
                </p>
            </ContentSection>

            <ContentSection id="bang-nghe-thuat">
                <ComparisonTable
                    title="Bảng 2: Các Đặc Trưng Thần Học Trong Nghệ Thuật Thập Giá Ba Ngôi"
                    columns={[
                        { header: "Tác Phẩm / Thể Loại", key: "work", width: "25%" },
                        { header: "Hình Thức Biểu Đạt", key: "form", width: "35%" },
                        { header: "Ý Nghĩa Ba Ngôi", key: "meaning", width: "40%" },
                    ]}
                    rows={[
                        {
                            work: <><strong>Gnadenstuhl</strong><br /><span className="text-xs text-[var(--color-slate-medium)]">Nghệ thuật Trung Cổ Phương Tây</span></>,
                            form: "Chúa Cha ngồi trên ngai, dùng hai tay đỡ lấy Thập giá có Chúa Con bị đóng đinh. Thánh Thần (chim bồ câu) ở giữa.",
                            meaning: "Sự hiệp thông cứu độ. Chúa Cha không phải là đao phủ, mà là Đấng chia sẻ nỗi đau và đón nhận hiến lễ tình yêu.",
                        },
                        {
                            work: <><strong>Bích họa Masaccio</strong><br /><span className="text-xs text-[var(--color-slate-medium)]">Phục Hưng, 1425</span></>,
                            form: "Chúa Cha đứng trên gờ đá, đưa Thập giá ra phía trước. Bố cục không gian La Mã 3D, với bộ xương (Memento mori) phía dưới.",
                            meaning: "Nhấn mạnh tính lịch sử và nhân bản. Ba Ngôi can thiệp trực tiếp vào thực tại cái chết để ban ơn cứu độ.",
                        },
                        {
                            work: <><strong>Troitsa Andrei Rublev</strong><br /><span className="text-xs text-[var(--color-slate-medium)]">Linh ảnh Đông Phương, TK 15</span></>,
                            form: "Ba vị thiên sứ ngồi quanh bàn có chén lễ. Bố cục tạo thành hình chén thánh bao bọc Ngôi Lời ở giữa.",
                            meaning: "Sự tương tại (Perichoresis) vĩnh cửu. Thập giá ẩn tàng trong hình bóng chén lễ Hội đồng Ba Ngôi đã quyết định mầu nhiệm hiến tế từ thuở đời đời.",
                        },
                    ]}
                    caption="Nguồn: Tổng hợp từ nghiên cứu nghệ thuật thánh [63, 65, 68, 69, 70]"
                />
            </ContentSection>

            <ContentSection id="masaccio">
                <h3>2. Bích Họa &ldquo;Chúa Ba Ngôi&rdquo; Của Masaccio (1425)</h3>
                <ImageLightbox
                    src="/Hieu-Ve-Chua-Ba-Ngoi-Duoi-Mac-Khai-Cua-Bien-Co-Thap-Gia/images/masaccio.jpg"
                    alt="Chúa Ba Ngôi bởi Masaccio (1425), Vương cung thánh đường Santa Maria Novella, Florence"
                    caption="Masaccio, Holy Trinity (1425) Đỉnh cao của nghệ thuật phối cảnh không gian La Mã."
                />
                <p>
                    Tại Vương cung thánh đường Santa Maria Novella (Florence), bức bích họa xuất chúng của Masaccio đánh dấu một bước ngoặt vĩ đại của nghệ thuật Phục hưng.<Cite ids={[68]} /> Masaccio đặt &ldquo;Ngai Tòa Ân Sủng&rdquo; vào trong một không gian kiến trúc vòm La Mã với luật xa gần (<em>perspective</em>) chân thực tột độ.
                </p>
                <p>
                    Đặc biệt, dưới chân Thập giá là hình ảnh bộ xương người với dòng chữ <em>Memento mori</em>: &ldquo;<em>Những gì bạn đang là, tôi đã từng là; những gì tôi đang là, bạn rồi sẽ là.</em>&rdquo;<Cite ids={[68]} /> Bố cục nhấn mạnh: tiến trình mặc khải Ba Ngôi liên tục tuôn đổ để thánh hóa lịch sử, biến đổi cái chết thành con đường bước vào sự sống vĩnh cửu.
                </p>
            </ContentSection>

            <ContentSection id="rublev">
                <h3>3. Linh Ảnh &ldquo;Troitsa&rdquo; Của Andrei Rublev</h3>
                <ImageLightbox
                    src="/Hieu-Ve-Chua-Ba-Ngoi-Duoi-Mac-Khai-Cua-Bien-Co-Thap-Gia/images/rublev.jpg"
                    alt="Linh Ảnh Troitsa bởi Andrei Rublev (TK 15), Bảo tàng Tretyakov, Moscow"
                    caption="Andrei Rublev, Troitsa (Đầu thế kỷ 15) Biểu tượng tuyệt đối của sự hiệp thông Ba Ngôi."
                />
                <p>
                    Trong truyền thống Chính thống giáo Đông phương, linh ảnh <em>Troitsa</em> của đan sĩ Andrei Rublev (đầu thế kỷ 15) được xem là đỉnh cao tuyệt đối của nghệ thuật biểu đạt thần học.<Cite ids={[69]} /> Ba vị thiên sứ ngồi quanh chiếc bàn, trên đó đặt một chén lễ. Hình thể của hai vị thiên sứ hai bên cùng với khoảng không gian ở giữa tạo thành hình bóng của một chiếc chén thánh lớn ôm trọn lấy vị thiên sứ ở giữa Chúa Con.<Cite ids={[70]} />
                </p>
                <p>
                    Sự tương tác qua ánh mắt và thế nghiêng đầu tạo nên một vòng tròn chuyển động không ngừng, biểu đạt sự tương tại (<em>perichoresis</em>) vĩnh cửu. Bức tranh diễn tả Hội đồng Ba Ngôi từ thuở đời đời đã quyết định kế hoạch Nhập thể và Thập giá vì tình yêu dành cho thụ tạo.<Cite ids={[70]} />
                </p>
            </ContentSection>
        </ContentSection>
    );
}
