export interface Reference {
    id: number;
    text: string;
    url?: string;
}

export const rawReferences: Reference[] = [
    { id: 1, text: "Catechism - 253 - The Catholic Cross Reference", url: "https://www.catholiccrossreference.online/catechism/#!/search/253" },
    { id: 2, text: "Trinity from the catechism of the Roman Catholic Church", url: "https://adosc.org/wp-content/uploads/2018/04/class_2_bct_handout_trinity_catholic_catechism.pdf" },
    { id: 3, text: "Bài 134 - Đôi điều về mầu nhiệm Chúa Ba Ngôi", url: "https://hdgmvietnam.com/chi-tiet/giai-dap-thac-mac-cho-nguoi-tre-bai-133---doi-dieu-ve-mau-nhiem-chua-ba-ngoi" },
    { id: 4, text: "Hiểu về Chúa Ba Ngôi dưới mặc khải của biến cố Thập Giá Dòng Tên", url: "https://dongten.net/hieu-ve-chua-ba-ngoi-duoi-mac-khai-cua-bien-co-thap-gia/" },
    { id: 5, text: "The Crucified God Jürgen Moltmann", url: "https://matlana.wordpress.com/wp-content/uploads/2015/10/jurgen_moltmann_the_crucified_god_the_cross_of_bookfi-org.pdf" },
    { id: 6, text: "Reviewing the Trinitarian Theology of Moltmann and Balthasar", url: "http://lifemessenger.org/trinitarian-theology-jurgen-moltmann-hans-urs-von-balthasar-discussion-comparison/" },
    { id: 7, text: "A Trinitarian View of the Cross Ministry Magazine", url: "https://www.ministrymagazine.org/archive/2009/02/a-trinitarian-view-of-the-cross" },
    { id: 8, text: "A Critical Reflection On The Doctrine Of The Trinity In Jürgen Moltmann", url: "https://repository.up.ac.za/bitstreams/197e57df-322b-4c34-8f4d-edd34a331a0f/download" },
    { id: 9, text: "Thập Giá, Đỉnh Cao Của Mặc Khải Chúa Ba Ngôi Giáo phận Thanh Hóa", url: "https://giaophanthanhhoa.net/than-hoc/thap-gia-dinh-cao-cua-mac-khai-chua-ba-ngoi-43112.html" },
    { id: 10, text: "A Trinitarian View of the Cross: Relational Dynamics Evangel", url: "http://www.evangel.edu/wp-content/uploads/2023/08/A-Trinitarian-View-of-the-Cross-Relational-Dynamics-With-the-Godhead-by-John-Johnson.pdf" },
    { id: 11, text: "Christ's Passion Reveals Glory of the Trinity Catholic Culture", url: "https://www.catholicculture.org/culture/library/view.cfm?RecNum=2778" },
    { id: 12, text: "What does Hebrews 9:14 mean to you? Reddit", url: "https://www.reddit.com/r/AskAChristian/comments/v7ar9s/what_does_hebrews_914_mean_to_you/" },
    { id: 13, text: "Hebrews 9:9-14 How do you purify your conscience?", url: "https://www.christianstudylibrary.org/article/hebrews-99-14-how-do-you-purify-your-conscience" },
    { id: 14, text: "Hebrews 9:14 Verse-by-Verse Bible Commentary StudyLight.org", url: "https://www.studylight.org/commentary/hebrews/9-14.html" },
    { id: 15, text: "Hebrews 9:13-14 Commentary Precept Austin", url: "https://www.preceptaustin.org/hebrews_913-14" },
    { id: 16, text: "Did God Abandon Jesus on the Cross? Catholic Answers", url: "https://www.catholic.com/audio/sp/did-god-abandon-jesus-on-the-cross" },
    { id: 17, text: "Why did God the Father allow His Son to die on the cross?", url: "https://stjosephtheworker.weconnect.com/blog/pastors-desk/why-did-god-the-father-allow-his-son-to-die-on-the-cross" },
    { id: 18, text: "New Interpretation of John 19:30 Scribd", url: "https://www.scribd.com/document/950243343/CRUMP-Who-Gets-What" },
    { id: 19, text: "John 19:30 Commentary Precept Austin", url: "https://www.preceptaustin.org/john_1930_commentary" },
    { id: 20, text: "John 19:34 meaning JCGM", url: "https://jcgm.org/bible-verse/john-19-34" },
    { id: 21, text: "Chúa Giêsu Bị Lưỡi Đòng Đâm Thâu Cạnh Sườn", url: "https://dongthuongkho.com/blogs/thanh-gia/chua-giesu-bi-luoi-dong-dam-thau-canh-suon" },
    { id: 22, text: "The Symbology of αἷμα καὶ ὕδωρ in John 19,34", url: "https://repositorio.ucp.pt/bitstreams/aba9a614-54b2-461a-ad33-c7e71b530eb8/download" },
    { id: 23, text: "Máu cùng nước chảy ra HĐGM Việt Nam", url: "https://hdgmvietnam.com/chi-tiet/mau-cung-nuoc-chay-ra-8-6-2018-thu-sau-le-thanh-tam-chua-giesu--32633" },
    { id: 24, text: "Jesus, John the Theologian, and the Jewish Roots of the Filioque", url: "https://newressourcement.wordonfire.org/articles/13" },
    { id: 25, text: "Why does John 19:34 have blood and water coming from Jesus Reddit", url: "https://www.reddit.com/r/AcademicBiblical/comments/13xg54g/why_does_john_1934_have_blood_and_water_coming/" },
    { id: 26, text: "Hiệp Hành Cùng Thánh Tâm Chúa Giêsu GP Cần Thơ", url: "https://gpcantho.com/hiep-hanh-cung-thanh-tam-chua-giesu/" },
    { id: 27, text: "Mối liên hệ giữa Ba Ngôi nhiệm cục và nội tại theo Karl Rahner", url: "https://chungvienthanhhoa.net/moi-lien-he%CC%A3-giu%CC%83a-chua-ba-ngoi-nhiem-cuc-va-chua-ba-ngoi-noi-tai-theo-karl-rahner/" },
    { id: 28, text: "Thập giá, đỉnh cao mặc khải Ba Ngôi Karl Rahner và Moltmann", url: "https://chungvienthanhhoa.net/thap-gia-dinh-cao-cua-mac-khai-chua-ba-ngoi-mot-loi-nhin-cua-karl-rahner-va-hoan-thanh-voi-jurgen-moltmann/" },
    { id: 29, text: "The Suffering God Moltmann's Theology ResearchGate", url: "https://www.researchgate.net/publication/376207257_The_Suffering_God_and_Its_Relevance_to_the_Understanding_of_Human_Suffering_in_Jurgen_Moltmann%27s_Theology" },
    { id: 30, text: "Divine Impassibility and Our Suffering God Modern Reformation", url: "https://www.modernreformation.org/resources/articles/divine-impassibility-and-our-suffering-god" },
    { id: 31, text: "Moltmann's Crucified God University of Divinity Repository", url: "https://repository.divinity.edu.au/bitstreams/54b9715f-33cb-479e-9694-c8216d52bc2b/download" },
    { id: 32, text: "Suffering and The Crucified God ResearchOnline@ND", url: "https://researchonline.nd.edu.au/cgi/viewcontent.cgi?article=1004&context=theses" },
    { id: 33, text: "The Function of the Trinity in Moltmann's Ecological Doctrine", url: "https://scispace.com/pdf/the-function-of-the-trinity-in-moltmann-s-ecological-1ee6mbljxo.pdf" },
    { id: 34, text: "A Critique of Moltmann's Staurocentric Trinitarianism Tyndale Bulletin", url: "https://www.tyndalebulletin.org/article/30272-the-theology-of-the-cross-as-theology-of-the-trinity-a-critique-of-jurgen-moltmann-s-staurocentric-trinitarianism.pdf" },
    { id: 35, text: "Distance in von Balthasar's Trinitarian Theology Marquette", url: "https://epublications.marquette.edu/cgi/viewcontent.cgi?article=1566&context=dissertations_mu" },
    { id: 36, text: "The Dazzling Darkness of God's Triune Love TGC", url: "https://www.thegospelcoalition.org/themelios/article/the-dazzling-darkness-of-gods-triune-love-introducing-evangelicals-to-the-t/" },
    { id: 37, text: "The Trinity and Theodicy: von Balthasar TGC", url: "https://www.thegospelcoalition.org/themelios/review/the-trinity-and-theodicy-the-trinitarian-theology-of-von-balthasar-and-the/" },
    { id: 38, text: "Balthasar and the Trinity (Chapter 4) Cambridge", url: "https://www.cambridge.org/core/books/cambridge-companion-to-hans-urs-von-balthasar/balthasar-and-the-trinity/42506F3C6B3B57D7CEC63707FF57F480" },
    { id: 39, text: "Trinity An Open Orthodoxy", url: "https://anopenorthodoxy.wordpress.com/category/trinity/" },
    { id: 40, text: "Karl Barth, Hòa Giải Và Thiên Chúa Ba Ngôi HĐGM", url: "https://hdgmvietnam.com/chi-tiet/karl-barth-hoa-giai-va-thien-chua-ba-ngoi-46518" },
    { id: 41, text: "Trinitarian perspectives in Barth and von Balthasar", url: "https://mondodomani.org/reportata/bergoglio02.htm" },
    { id: 42, text: "CCC Magisterium AI", url: "https://www.magisterium.com/docs/0583c069-d4bf-42dd-97de-c19f0b80150f/ref/319" },
    { id: 43, text: "Giáo Lý Công Giáo Augustinô", url: "https://augustino.net/giao-ly-cong-giao" },
    { id: 44, text: "Chúa Nhật 11 Thường Niên Chúa Ba Ngôi GP Long Xuyên", url: "https://giaophanlongxuyen.org/tin-tuc/-chua-nhat-15062025-chua-nhat-11-thuong-nien-chua-ba-ngoi-nam-c-le-trong-biet-tat-ca-su-that.html" },
    { id: 45, text: "CCC 253-256 The Catholic Cross Reference", url: "https://www.catholiccrossreference.online/catechism/#!/search/253-256" },
    { id: 46, text: "Explaining the Trinity Catholic Answers", url: "https://www.catholic.com/magazine/online-edition/explaining-the-trinity" },
    { id: 47, text: "SGLHTCG Phần I, Đoạn II: CCC 595-623", url: "https://giaolyductin.net/sach-giao-ly-hoi-thanh-cong-giao-phan-i-doan-ii-chuong-ii-muc-4-tiet-2-595-623.html" },
    { id: 48, text: "CCC 1023-1026 The Catholic Cross Reference", url: "https://www.catholiccrossreference.online/catechism/#!/search/11023-1026/fn/1070:6" },
    { id: 49, text: "CCC 1020-1060 The Catholic Cross Reference", url: "https://www.catholiccrossreference.online/catechism/#!/search/1020-1060" },
    { id: 50, text: "Catechism of the Catholic Church Catholic Culture", url: "https://www.catholicculture.org/culture/library/catechism/index.cfm?recnum=3241" },
    { id: 51, text: "Salvifici Doloris (1984) The Holy See", url: "https://www.vatican.va/content/john-paul-ii/en/apost_letters/1984/documents/hf_jp-ii_apl_11021984_salvifici-doloris.html" },
    { id: 52, text: "Salvifici Doloris Totus Tuus", url: "http://www.totus2us.co.uk/teaching/apostolic-letters/salvifici-doloris/" },
    { id: 53, text: "Salvifici Doloris Catholic Culture", url: "https://www.catholicculture.org/culture/library/view.cfm?id=3384" },
    { id: 54, text: "Mầu Nhiệm Ba Ngôi Trong SGLHTCG GP Đà Lạt", url: "https://giaophandalat.com/mau-nhiem-thien-chua-ba-ngoi-trong-sach-giao-ly-cua-hoi-thanh-cong-giao.html" },
    { id: 55, text: "II World Day of the Sick, 1994 The Holy See", url: "https://www.vatican.va/content/john-paul-ii/en/messages/sick/documents/hf_jp-ii_mes_08121993_world-day-of-the-sick-1994.html" },
    { id: 56, text: "Excerpt from Salvifici doloris Archdiocese of Kansas City", url: "https://archkck.org/wp-content/uploads/2025/08/Excerpt-from-Salvifici-doloris-On-the-Christian-meaning-of-human-suffering-1984-Apostolic-Letter-of-Pope-Saint-John-Paul-II-.pdf" },
    { id: 57, text: "Suffering Love Center for Action and Contemplation", url: "https://cac.org/daily-meditations/suffering-love-2017-04-28/" },
    { id: 58, text: "Deus caritas est (2005) The Holy See", url: "https://www.vatican.va/content/benedict-xvi/en/encyclicals/documents/hf_ben-xvi_enc_20051225_deus-caritas-est.html" },
    { id: 59, text: "Rev. Klaus Baumann TN KUL", url: "https://ojs.tnkul.pl/index.php/rt/article/download/9156/8847/" },
    { id: 60, text: "We Have Come To Know the Love God Has for Us Catholic Culture", url: "https://www.catholicculture.org/culture/library/view.cfm?recnum=10158" },
    { id: 61, text: "They Shall Look on Him Whom They Have Pierced Catholic Culture", url: "https://www.catholicculture.org/culture/library/view.cfm?id=7406" },
    { id: 62, text: "Pope Benedict XVI, Deus Caritas Est St. Bart", url: "https://st-bart.org/documents/2015/5/Deus%20Caritas%20Est.pdf" },
    { id: 63, text: "The Trinity in art Wikipedia", url: "https://en.wikipedia.org/wiki/The_Trinity_in_art" },
    { id: 64, text: "The Theology of the Icon SAET", url: "https://www.saet.ac.uk/Christianity/TheologyoftheIcon" },
    { id: 65, text: "Iconography of the Holy Trinity The Throne of Grace", url: "http://imaginemdei.blogspot.com/2020/06/the-holy-trinity-throne-of-grace.html" },
    { id: 66, text: "The Iconography of the Trinity in England Kent", url: "https://kar.kent.ac.uk/73607/1/SKelly%2C%20Vol%20I%2C%20Imagining%20the%20Unimaginable.pdf" },
    { id: 67, text: "Hans Multscher: Holy Trinity ArtWay.eu", url: "https://www.artway.eu/posts/hans-multscher-holy-trinity" },
    { id: 68, text: "O Mystic Marvel: 'The Holy Trinity' by Masaccio Indian Catholic Matters", url: "https://www.indiancatholicmatters.org/o-mystic-marvel-the-holy-trinity-by-masaccio-1425/" },
    { id: 69, text: "Bài 16: Mặc khải về Ba Ngôi TGP Sài Gòn", url: "https://tgpsaigon.net/bai-viet/bai-16-mac-khai-ve-ba-ngoi-%7C-duoi-anh-sang-loi-chua-68920" },
    { id: 70, text: "Andrei Rublev: The Holy Trinity ArtWay.eu", url: "https://www.artway.eu/posts/andrei-rublev-the-holy-trinity" },
    { id: 71, text: "Suy niệm thần học về Mầu Nhiệm Ba Ngôi GP Nha Trang", url: "https://giaophannhatrang.org/vi/news/triet-than-hoc-tu-duc/suy-niem-than-hoc-va-tu-duc-ve-mau-nhiem-ba-ngoi-23278.html" },
    { id: 72, text: "Chiêm ngắm Thiên Chúa Ba Ngôi Dòng Tên", url: "https://dongten.net/chiem-ngam-thien-chua-ba-ngoi/" },
    { id: 73, text: "Thiên Chúa và con người trong huyền nhiệm thập giá GP Hà Tĩnh", url: "https://giaophanhatinh.com/thien-chua-va-con-nguoi-trong-huyen-nhiem-thap-gia.htdiocese" },
    { id: 74, text: "The Importance of the Trinity Kregel Academic", url: "https://kregelacademicblog.com/biblical-studies/the-importance-of-the-trinity/" },
    { id: 75, text: "Taking up one's cross with hope St. Mary's Univ.", url: "https://commons.stmarytx.edu/cgi/viewcontent.cgi?article=1023&context=theses" },
    { id: 76, text: "Moltmann's Trinitarian theology (part 2 of 2)", url: "https://luminousdarkcloud.wordpress.com/2012/11/13/jurgen-moltmanns-trinitarian-theology-part-2-of-2/" },
    { id: 77, text: "The Practical Implications of a Trinitarian Theology", url: "https://www.bobcornwall.com/2015/02/the-practical-implications-of.html" },
    { id: 78, text: "The very practical doctrine of the Trinity GoThereFor.com", url: "https://gotherefor.com/offer.php?intid=15193" },
    { id: 79, text: "Love received and given Caritas", url: "https://www.caritas.org/wordpress/wp-content/uploads/2017/06/LoveReceivedAndGiven-2.pdf" },
    { id: 80, text: "What Is Love? Pope Benedict XVI Reminds Us Word on Fire", url: "https://www.wordonfire.org/articles/fellows/what-is-love-pope-benedict-xvi-reminds-us/" },
    { id: 81, text: "Catechism of the Catholic Church The Holy See", url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM" },
    { id: 82, text: "Máu và nước từ Thánh Tâm Chúa Giêsu Đa Minh Tam Hiệp", url: "https://daminhtamhiep.net/2017/06/mau-va-nuoc-tu-thanh-tam-chua-giesu/" },
    { id: 83, text: "Thiên Chúa và con người trong huyền nhiệm thập giá HĐGM", url: "https://hdgmvietnam.com/chi-tiet/thien-chua-va-con-nguoi-trong-huyen-nhiem-thap-gia-50549" },
    { id: 84, text: "Dấu Thánh Ba Ngôi Legio Mariae", url: "https://legiomariaevn.com/chi-tiet-tin-tuc/2356/dau-thanh-ba-ngoi.html" },
    { id: 85, text: "Các Bài Suy Niệm Lễ Chúa Ba Ngôi GP Cần Thơ", url: "https://gpcantho.com/cac-bai-suy-niem-le-chua-ba-ngoi/" },
    { id: 86, text: "The Mass for Millennials: Sign of the Cross Church Life Journal", url: "https://churchlifejournal.nd.edu/articles/the-mass-for-millennials-sign-of-the-cross/" },
];

export function formatAPA(text: string, url?: string) {
    const parts = text.split(/ - | /);
    let title = text;
    let authorOrSource = "Various Authors";
    let year = "n.d.";

    if (parts.length > 1) {
        title = parts[0].trim();
        authorOrSource = parts.slice(1).join(" - ").trim();

        if (authorOrSource.includes("Moltmann")) {
            authorOrSource = "Moltmann, J.";
            title = parts[0];
        }
    }

    return { authorOrSource, year, title };
}
