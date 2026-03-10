import React from "react";
import ContentSection from "../ContentSection";
import Blockquote from "../Blockquote";
import Cite from "../Cite";

export default function SectionDanNhap() {
    return (
        <ContentSection id="dan-nhap">
            <h2>Dẫn Nhập: Bước Ngoặt Nhận Thức Luận Trong Thần Học Ba Ngôi</h2>
            <p className="dropcap">
                Trong suốt chiều dài lịch sử tư tưởng Kitô giáo, mầu nhiệm Thiên Chúa Ba Ngôi luôn được xem là tâm điểm tuyệt đối của đức tin và đời sống tín hữu, một mầu nhiệm vượt quá khả năng thấu triệt của lý trí nhân loại hữu hạn.<Cite ids={[1]} /> Tuy nhiên, trong một thời gian dài kéo dài nhiều thế kỷ, thần học kinh viện (<em>Scholasticism</em>) phương Tây thường có xu hướng tiếp cận mầu nhiệm này dưới lăng kính của triết học bản thể luận (<em>ontology</em>) mang tính trừu tượng. Cách tiếp cận này đã tạo ra một sự phân chia giả tạo giữa sự hiểu biết về &ldquo;Thiên Chúa duy nhất&rdquo; (<em>De Deo Uno</em>) và &ldquo;Thiên Chúa Ba Ngôi&rdquo; (<em>De Deo Trino</em>), đồng thời tách biệt đời sống nội tại vĩnh cửu của Thiên Chúa khỏi những hành động can thiệp của Ngài trong lịch sử cứu độ.<Cite ids={[4]} />
            </p>
            <p>
                Bước sang thế kỷ 20, trước những thảm kịch kinh hoàng của nhân loại như hai cuộc Thế chiến và sự kiện diệt chủng Holocaust, nền thần học đương đại đã chứng kiến một cuộc phục hưng mạnh mẽ về tư tưởng Ba Ngôi. Cuộc chuyển mình này được dẫn dắt bởi các học giả lỗi lạc như Karl Barth, Karl Rahner, Jürgen Moltmann và Hans Urs von Balthasar.<Cite ids={[7]} /> Chìa khóa nhận thức luận (<em>epistemological key</em>) định hình lại toàn bộ hệ thống thần học này chính là việc đặt biến cố Thập giá của Đức Giêsu Kitô vào ngay tâm điểm của mặc khải Ba Ngôi.<Cite ids={[7]} />
            </p>
            <p>
                Thập giá không chỉ đơn thuần là một biến cố cứu độ luận (<em>soteriology</em>) nơi một cá nhân gánh vác hình phạt thay cho nhân loại. Sâu xa và vĩ đại hơn, Thập giá chính là một &ldquo;biến cố Ba Ngôi&rdquo; (<em>Trinitarian event</em>) nơi đời sống nội tại, bản tính sâu thẳm và tình yêu vĩnh cửu của Thiên Chúa được bộc lộ một cách trọn vẹn và khốc liệt nhất.<Cite ids={[4]} /> Dưới bóng Thập giá, những định đề triết học cổ điển về sự bất biến (<em>immutability</em>) và tính vô cảm (<em>impassibility/apatheia</em>) của Thượng Đế bị thách thức một cách triệt để, nhường chỗ cho hình ảnh một Thiên Chúa Ba Ngôi hiện hữu trong sự hiệp thông, tự hủy (<em>kenosis</em>) và chia sẻ trọn vẹn nỗi đau của thế giới thụ tạo.<Cite ids={[5]} />
            </p>
        </ContentSection>
    );
}
