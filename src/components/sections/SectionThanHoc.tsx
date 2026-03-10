import React from "react";
import ContentSection from "../ContentSection";
import Blockquote from "../Blockquote";
import ComparisonTable from "../ComparisonTable";
import Cite from "../Cite";

export default function SectionThanHoc() {
    return (
        <ContentSection id="quan-diem-than-hoc">
            <h2>Các Quan Điểm Thần Học Hệ Thống Về Thập Giá Và Mầu Nhiệm Ba Ngôi</h2>
            <p>
                Sự phong phú của các bản văn Kinh Thánh đã cung cấp chất liệu dồi dào cho các cuộc tranh luận thần học hệ thống sâu sắc trong thế kỷ 20. Bốn khuôn mặt vĩ đại — Karl Rahner, Jürgen Moltmann, Hans Urs von Balthasar, và Karl Barth — đã xây dựng những hệ thống lý luận phức tạp, dù có nhiều điểm khác biệt nhưng đều hội tụ ở một điểm chung: khẳng định tính bất khả phân ly giữa mầu nhiệm Thập giá và hữu thể Thiên Chúa Ba Ngôi.
            </p>

            <ContentSection id="karl-rahner">
                <h3>1. Karl Rahner Và Tiên Đề Về Sự Đồng Nhất Giữa Ba Ngôi Nhiệm Cục Và Nội Tại</h3>
                <Blockquote variant="magisterium" source="Karl Rahner">
                    <p>&ldquo;Ba Ngôi nhiệm cục là Ba Ngôi nội tại, và Ba Ngôi nội tại là Ba Ngôi nhiệm cục.&rdquo;</p>
                </Blockquote>
                <p>
                    Nhà thần học Công giáo vĩ đại Karl Rahner được xem là người đã gỡ bỏ tảng băng phong kín học thuyết Ba Ngôi trong nhiều thế kỷ bằng việc thiết lập tiên đề (<em>Rahner&#39;s axiom</em>) nổi tiếng trên.<Cite ids={[4]} /> Rahner bác bỏ sự phân đôi cứng nhắc giữa &ldquo;Ba Ngôi nội tại&rdquo; và &ldquo;Ba Ngôi nhiệm cục&rdquo;, lập luận rằng sự tự thông truyền (<em>self-communication</em>) của Thiên Chúa trong lịch sử — đạt đến đỉnh cao trong biến cố Nhập thể và Thập giá — chính là sự bộc lộ chân thực bản tính nội tại của Ngài.<Cite ids={[4]} />
                </p>
                <p>
                    Cái chết trên Thập giá không thể bị thu hẹp thành một sự kiện chỉ liên quan đến nhân tính của Chúa Giêsu, mà nó phản ánh và mặc khải mầu nhiệm tự hiến thẳm sâu vốn đã tồn tại từ đời đời trong Ba Ngôi.<Cite ids={[9]} />
                </p>
            </ContentSection>

            <ContentSection id="moltmann">
                <h3>2. Jürgen Moltmann: Thập Giá Như Sự Hình Thành Lịch Sử Ba Ngôi</h3>
                <p>
                    Nhà thần học Cải Cách người Đức Jürgen Moltmann, qua tác phẩm kinh điển <em>Thượng Đế Bị Đóng Đinh</em> (<em>The Crucified God</em> 1974), đã tạo ra một cơn địa chấn thần học khi đưa biến cố Thập giá vào tận tâm điểm của hữu thể Thiên Chúa.<Cite ids={[4]} />
                </p>
                <Blockquote variant="magisterium" source="Jürgen Moltmann">
                    <p>&ldquo;Một Thượng đế không thể đau khổ là một Thượng đế không thể yêu thương, và do đó, một Thượng đế không thể yêu thương là một Thượng đế chết.&rdquo;</p>
                </Blockquote>
                <p>
                    Theo Moltmann, Thập giá là &ldquo;một biến cố trong Ba Ngôi&rdquo; (<em>a Trinitarian event</em>).<Cite ids={[4]} /> Nơi đây:
                </p>
                <ul className="list-none space-y-3 my-4 ml-4">
                    <li className="flex gap-3">
                        <span className="text-[var(--color-crimson)] font-bold shrink-0">✦</span>
                        <span><strong>Chúa Con:</strong> Chịu sự đau khổ của cái chết và nỗi kinh hoàng của việc bị bỏ rơi (<em>abandonment</em>).<Cite ids={[4]} /></span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[var(--color-crimson)] font-bold shrink-0">✦</span>
                        <span><strong>Chúa Cha:</strong> Không phải là một quan tòa thờ ơ Chúa Cha cũng chịu đau khổ sâu sắc. Nỗi đau của Chúa Cha là nỗi đau của người mất Con (<em>Patricompassianism</em>).<Cite ids={[4]} /></span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-[var(--color-crimson)] font-bold shrink-0">✦</span>
                        <span><strong>Chúa Thánh Thần:</strong> Là quyền năng vô tận nối kết Chúa Cha và Chúa Con, biến hai hành vi tự hiến thành một chuyển động thần linh duy nhất.<Cite ids={[4]} /></span>
                    </li>
                </ul>
                <p>
                    Tuy nhiên, hệ thống của Moltmann đã đối mặt với những chỉ trích: nguy cơ rơi vào tam thần luận (<em>tritheism</em>), làm suy yếu tính siêu việt vĩnh cửu của Thiên Chúa, và xóa nhòa ranh giới giữa Đấng Tạo Hóa và thụ tạo.<Cite ids={[6]} />
                </p>
            </ContentSection>

            <ContentSection id="balthasar">
                <h3>3. Hans Urs von Balthasar: Sự Tự Hủy Vĩnh Cửu Và Khoảng Cách Trong Ba Ngôi</h3>
                <p>
                    Nhà thần học Công giáo Thụy Sĩ Hans Urs von Balthasar đã trình bày một hệ thống lý luận tráng lệ, dựa trên sự tự hủy (<em>kenosis</em>) và bản thể luận tình yêu.<Cite ids={[6]} />
                </p>
                <p>
                    <strong>Sự Tự Hủy Nguyên Thủy (<em>Primordial Kenosis</em>):</strong> Balthasar lật ngược mệnh đề của Moltmann — không phải Thập giá làm cho Ba Ngôi trở nên khả thể, mà chính bản tính vĩnh cửu của Ba Ngôi là điều kiện tiên quyết làm cho Thập giá trở nên khả thể.<Cite ids={[6]} />
                </p>
                <p>
                    <strong>Khoảng Cách Vô Tận (<em>Infinite Distance</em>):</strong> Hành động tự trao ban của Chúa Cha tạo ra một khoảng cách vô hạn giữa Cha và Con đủ để bao hàm mọi khoảng cách do tội lỗi và cái chết gây ra. Chúa Thánh Thần là Bản thể Tình Yêu (<em>Essence of Love</em>), niêm phong sự khác biệt này và làm cầu nối hiệp nhất vĩnh cửu.<Cite ids={[6]} />
                </p>
                <p>
                    <strong>Thứ Bảy Tuần Thánh (<em>Holy Saturday</em>):</strong> Balthasar nhấn mạnh việc Đức Kitô đi xuống ngục tổ tông, nếm trải trạng thái vắng mặt hoàn toàn của Thiên Chúa. Bằng cách đi vào sự cô lập tuyệt đối này, tình yêu Ba Ngôi thâm nhập và chinh phục tận cùng cõi chết từ bên trong.<Cite ids={[37]} />
                </p>
            </ContentSection>

            <ContentSection id="karl-barth">
                <h3>4. Karl Barth: Sự Tự Do Lựa Chọn Của Thiên Chúa Trong Mặc Khải</h3>
                <p>
                    Karl Barth tiếp cận mầu nhiệm Ba Ngôi từ góc độ của sự Mặc khải (<em>Revelation</em>).<Cite ids={[40]} /> Barth cấu trúc học thuyết: Chúa Cha là <strong>Đấng Mặc khải</strong> (<em>Revealer</em>), Chúa Con là <strong>Sự Mặc khải</strong> (<em>Revelation</em>), và Chúa Thánh Thần là <strong>Sự hiệu lực của Mặc khải</strong> (<em>Revealedness</em>).<Cite ids={[40]} />
                </p>
                <p>
                    Đối với Barth, Thập giá là điểm quy tụ vĩ đại của sự mặc khải. Thiên Chúa, trong sự sống đời đời, đã tự do lựa chọn bản thân Ngài cho nhân loại — sẵn sàng bước vào thân phận của kẻ bị nguyền rủa để thực hiện công trình hòa giải.<Cite ids={[41]} />
                </p>
            </ContentSection>

            <ContentSection id="bang-so-sanh-1">
                <ComparisonTable
                    title="Bảng 1: So Sánh Quan Điểm Thần Học Moltmann vs. Balthasar"
                    columns={[
                        { header: "Tiêu Chí Phân Tích", key: "criteria", width: "22%" },
                        { header: "Jürgen Moltmann (Thần học Cải Cách)", key: "moltmann", width: "39%" },
                        { header: "Hans Urs von Balthasar (Thần học Công giáo)", key: "balthasar", width: "39%" },
                    ]}
                    rows={[
                        {
                            criteria: <strong>Bản chất của Thập giá</strong>,
                            moltmann: "Kiến tạo lịch sử: Thập giá cấu thành nên bản thể Ba Ngôi trong lịch sử.",
                            balthasar: "Hiển lộ vĩnh hằng: Thập giá là sự biểu lộ của bản thể Ba Ngôi vĩnh cửu.",
                        },
                        {
                            criteria: <strong>Nền tảng Hiệp Nhất</strong>,
                            moltmann: "Hiệp nhất Cánh chung (Eschatological): Đạt được trọn vẹn vào thời cùng tận.",
                            balthasar: "Hiệp nhất Bản thể (Ontological): Luôn hiệp nhất vĩnh cửu bởi Chúa Thánh Thần.",
                        },
                        {
                            criteria: <strong>Ba Ngôi Nhiệm Cục & Nội Tại</strong>,
                            moltmann: "Đồng nhất và Tiến hóa: Thiên Chúa chịu sự ràng buộc của tiến trình lịch sử.",
                            balthasar: "Nguồn mạch và Tự do: Ba Ngôi nội tại là nguồn mạch hữu thể, Thiên Chúa tự do hành động.",
                        },
                        {
                            criteria: <strong>Đau Khổ của Thiên Chúa</strong>,
                            moltmann: "Sự liên đới (Solidarity): Thiên Chúa chịu đau khổ trong bản thể Ngài.",
                            balthasar: "Sự cứu chuộc (Atonement): Đau khổ là sự mở rộng của tình yêu tự hủy đời đời.",
                        },
                        {
                            criteria: <strong>Nguy cơ / Phê bình</strong>,
                            moltmann: "Nguy cơ rơi vào Tam thần luận (Tritheism); mất đi sự siêu việt và bất biến.",
                            balthasar: "Nguy cơ phóng chiếu sự tha hóa và đau khổ vào Bản thể vĩnh cửu.",
                        },
                    ]}
                    caption="Nguồn: Tổng hợp từ các tài liệu thần học hệ thống [6]"
                />
                <p>
                    Dù có những khác biệt sâu sắc, cả hai nhà thần học đều hướng tới một chân lý chung vô giá: Thiên Chúa không phải là một Đấng xa lạ, cách biệt với lịch sử đẫm nước mắt của nhân loại. Ngài đã tự nguyện đón nhận tận cùng của nỗi đau ấy vào trong chính cõi lòng của mầu nhiệm Ba Ngôi.
                </p>
            </ContentSection>
        </ContentSection>
    );
}
