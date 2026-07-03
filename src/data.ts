export interface Suggestion {
  id: string;
  name: string;
  category: string;
  tier: string;
  reason: string;
  categoryClass: string;
  tierClass: string;
}

export const paintCategories = [
  { id: 'all', name: 'Tất cả', value: 'all' },
  { id: 'interior', name: 'Sơn nội thất', value: 'Sơn nội thất' },
  { id: 'exterior', name: 'Sơn ngoại thất', value: 'Sơn ngoại thất' },
  { id: 'waterproof', name: 'Sơn chống thấm', value: 'Sơn chống thấm' },
  { id: 'putty', name: 'Bột trét', value: 'Bột trét' },
  { id: 'decorative', name: 'Sơn trang trí', value: 'Sơn trang trí' },
];

export const paintTiers = [
  { id: 'all', name: 'Tất cả' },
  { id: 'premium', name: 'Cao cấp' },
  { id: 'strategic', name: 'Chiến lược' },
  { id: 'basic', name: 'Cơ bản' }
];

export const suggestionsData: Suggestion[] = [
  {
    "id": "gama-001",
    "name": "GAMA Care",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Chăm sóc tổ ấm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-002",
    "name": "GAMA Vision",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Tầm nhìn kiến trúc vững chãi",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-003",
    "name": "GAMA AquaMatrix",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Mạng lưới kháng nước",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-004",
    "name": "GAMA Layer",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Độ bám dính tốt",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-005",
    "name": "GAMA Sparkle",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Lấp lánh, độc đáo",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-006",
    "name": "GAMA Luxor",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ánh sáng và sự sang trọng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-007",
    "name": "GAMA Sora",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Bầu trời không gian rộng mở",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-008",
    "name": "GAMA Vista",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tầm nhìn mở rộng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-009",
    "name": "GAMA Elara",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Dẫn lối đến những chân trời mới",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-010",
    "name": "GAMA Evora",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Tiến hóa không ngừng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-011",
    "name": "GAMA Kairo",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Thời điểm vàng để bứt phá",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-012",
    "name": "GAMA Aqualuxa",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Giải pháp chống thấm cao cấp, mang đến sự bảo vệ toàn diện và bền vững cho mọi công trình.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-013",
    "name": "GAMA Valora",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Giá trị tạo nên sức hút",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-014",
    "name": "GAMA Avira",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Khát vọng vươn cao",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-015",
    "name": "GAMA Lumia",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chạm đến vẻ đẹp tinh tế",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-016",
    "name": "GAMA Luxury",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Sang trọng và tinh tế",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-017",
    "name": "GAMA Canvas",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Nghệ thuật và tự do sáng tạo cuộc sống (Định vị bức tường nhà bạn chính là một tác phẩm nghệ thuật, màng sơn mịn màng như lớp nền hoàn hảo để gia đình tự do trang trí cuộc sống)",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-018",
    "name": "GAMA Prime",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Giá trị nền tảng, che phủ tối ưu và bảo vệ thiết yếu với chi phí tiết kiệm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-019",
    "name": "GAMA Helios",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Helios (nguồn gốc Hy Lạp) là Thần Mặt Trời trong thần thoại Hy Lạp, đại diện cho: Mang ý nghĩa \" Dòng sơn mang sức mạnh ánh mặt trời, bảo vệ công trình trước thời tiết khắc nghiệt.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-020",
    "name": "GAMA MaxPaint",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "MaxPaint lấy từ ghép Max (Maximum) → tối đa, vượt trội, mạnh mẽ Paint → sơn, lớp phủ bề mặt. Mang ý nghĩa “Dòng sơn tối ưu – hiệu quả phủ và bảo vệ ở mức cao nhất.”",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-021",
    "name": "GAMA Publica",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Publica → gợi từ Public (cộng đồng, phổ biến, dành cho nhiều người) và âm hưởng Latin/hiện đại → gần gũi, dễ tiếp cận, ứng dụng rộng rãi. Mang ý nghĩa \"Dòng sơn phổ biến, phù hợp cho nhiều công trình và nhu cầu sử dụng.”",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-022",
    "name": "GAMA AquaLong",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Long → Long-lasting → độ bền kéo dài, duy trì hiệu quả lâu hơn. Mang ý nghĩa \"Lớp màng bảo vệ kéo dài tuổi thọ công trình.\"",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-023",
    "name": "GAMA Nuvia",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Nuvia từ ý niệm new + via → con đường mới, lớp nền mới. Mang ý nghĩa \"Nền mịn hoàn hảo, khởi đầu cho vẻ đẹp bền lâu.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-024",
    "name": "GAMA Fina",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "“Fina” gợi từ Fine (tiếng Anh/Ý) → mịn, tinh tế, hoàn thiện cao. Mang ý nghĩa \"Lớp nền mịn hoàn hảo – tạo nên bề mặt sơn đẹp và tinh tế\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-025",
    "name": "GAMA Flora",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Flora (gốc Latin): nghĩa là hoa cỏ, cây cối, vẻ đẹp tự nhiên, sự sinh trưởng và nở rộ. Mang ý nghĩa \"“Sắc màu nở rộ, kiến tạo không gian sống”.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-026",
    "name": "GAMA Proin",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Đại diện cho \"Professional + Interior \" Nội thất với các tính năng vượt trội, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-027",
    "name": "GAMA InBright",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Đại diện cho \"Interior + Bright\" Nội thất tươi sáng đánh mạnh vào tính năng màu tươi sáng, bền màu",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-028",
    "name": "GAMA Ineasy",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Đại diện cho \"Interior + Easy\" Nội thất dễ dàng thi công và đơn giản, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-029",
    "name": "GAMA Proex",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Đại diện cho \"Professional + Exterior \" Ngoại thất với các tính năng vượt trội, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-030",
    "name": "GAMA ExBright",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Đại diện cho \"Exterior + Bright\" Ngoại thất tươi sáng đánh mạnh vào tính năng màu tươi sáng, bền màu",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-031",
    "name": "GAMA ExEasy",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Đại diện cho \"Exterior + Eassy\" Sơn ngoại thất dễ mua, dễ dùng, dễ thi công",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-032",
    "name": "GAMA AquaDry",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Dry\" ý nghĩa khô ráo khả năng chống thấm tốt, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-033",
    "name": "GAMA ProSkim",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "\"Skim\" là ngôn ngữ kỹ thuật dành cho lớp bột trét bên ngoài trước khi sơn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-034",
    "name": "GAMA Skim",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "\"Skim\" là ngôn ngữ kỹ thuật dành cho lớp bột trét bên ngoài trước khi sơn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-035",
    "name": "GAMA Art",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "\"Art\" mang ý nghĩa về nghệ thuật, tiêu biểu cho dòng sơn trang trí mang tính thẩm mỹ",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-036",
    "name": "GAMA Crystal",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Crystal nghĩa là pha lê. Tên gọi mang ý nghĩa \"Bề mặt sáng trong, bóng đẹp, tinh khiết và sang trọng.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-037",
    "name": "GAMA Sunny",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Sunny nghĩa là nắng ấm, tươi sáng, rạng rỡ. Tên gọi mang đến \"Không gian sống tươi sáng, ấm áp và tràn đầy năng lượng.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-038",
    "name": "GAMA Smart",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Smart mang ý nghĩa Thông minh, tối ưu, lựa chọn hiệu quả. Tên gọi truyền tải thông điệp \"Lựa chọn thông minh cho mọi công trình.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-039",
    "name": "GAMA Polaris",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Polaris Là tên của Sao Bắc Cực – ngôi sao sáng dùng để định hướng trong hàng nghìn năm qua. Tên mang ý nghĩa \"Tỏa sáng và bền vững trước mọi thử thách thời tiết như Sao Bắc Cực.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-040",
    "name": "GAMA SunPro",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "\"Sun\" gợi ánh sáng và màu sắc rực rỡ, còn \"Pro\" tạo cảm giác chất lượng cao, đáng tin cậy. SunPro - Mang thông điệp \"Giúp bảo vệ công trình trước tác động của ánh nắng và thời tiết, đồng thời duy trì vẻ đẹp tươi sáng lâu dài.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-041",
    "name": "GAMA Eco",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Eco nghĩa là kinh tế, tên gọi truyền tải thông điệp \"Giải pháp ngoại thất kinh tế, bền đẹp cho mọi công trình.\" Tên gọi gắn ngọn, dễ nhớ, dễ đọc.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-042",
    "name": "GAMA AquaMax",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Max nghĩa là Tối đa, vượt trội. Tên gọi truyền tải thông điệp \"Khả năng chống thấm tối đa, bảo vệ công trình bền vững.\" Tên dễ nhớ, dễ đọc.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-043",
    "name": "GAMA Master",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Master nghĩa là Bậc thầy, chuyên gia. Tên gọi mang ý nghĩa \"Bột trét cao cấp với chất lượng vượt trội, tạo nền tường hoàn hảo như được hoàn thiện bởi những chuyên gia.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-044",
    "name": "GAMA Plus",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Plus nghĩa là Nâng cấp, cộng thêm giá trị, tốt hơn tiêu chuẩn thông thường. Mang thông điệp \"Bột trét chất lượng ổn định, mang lại giá trị gia tăng cho mọi công trình.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-045",
    "name": "GAMA Velora",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Velora viết tắt từ các từ Velvet (nhung) → mềm mại, sang trọng. Valor (giá trị, đẳng cấp). Hậu tố -ora → thường xuất hiện trong các thương hiệu cao cấp, tạo cảm giác tinh tế và quốc tế. Velora tên gọi mang ý nghĩa \"Nghệ thuật kiến tạo vẻ đẹp đẳng cấp cho không gian sống.\"",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-046",
    "name": "GAMA Royal",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Royal: Trong tiếng Anh nghĩa là Hoàng gia, Vương giả, Cao quý. Mang ý nghĩa Đẳng cấp hoàng gia, vẻ đẹp vượt thời gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-047",
    "name": "GAMA Joy",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Joy: Trong tiếng Anh nghĩa là niềm vui, sự hân hoan, hạnh phúc. Mang ý nghĩa \"Tô điểm niềm vui cho tổ ấm.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-048",
    "name": "GAMA One",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "One: Số 1, duy nhất, lựa chọn hàng đầu. Mang ý nghĩa \"Một lựa chọn đáng tin cậy cho mọi công trình.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-049",
    "name": "GAMA King",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "King: Nhà vua, người đứng đầu, quyền lực và uy tín. Mang ý nghĩa \"Dòng sơn ngoại thất cao cấp khẳng định vị thế dẫn đầu.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-050",
    "name": "GAMA Liva",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Liva là tên hiện đại, ngắn gọn, dễ đọc. Tên này gợi liên tưởng đến: Live = Cuộc sống. Life = Sự sống. Viva = Sức sống, năng lượng. Ý nghĩa \"Mang sức sống mới đến mọi không gian.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-051",
    "name": "GAMA Value",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Value: Giá trị, đáng giá, hiệu quả đầu tư. Mang ý nghĩa \"Giá trị bền vững cho mọi công trình\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-052",
    "name": "GAMA Aquatech",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Aqua + Technology\" Công nghệ chống thấm. Thể hiện sự chuyên nghiệp và uy tín.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-053",
    "name": "GAMA Core",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Core: Trong tiếng Anh nghĩa là cốt lõi, nền tảng, phần quan trọng nhất. Mang ý nghĩa \"Nền tảng vững chắc cho mọi lớp sơn hoàn hảo.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-054",
    "name": "GAMA First",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "First: Đầu tiên, khởi đầu, nền tảng. Mang ý nghĩa \"Nền tảng đầu tiên cho bề mặt hoàn hảo.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-055",
    "name": "GAMA Fresco",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "\"Freso\" mang tính nghệ thuật cảm hứng cao về thẩm mỹ",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-056",
    "name": "GAMA Iluva",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Đại diện cho không gian sống sang trọng, ngập tràn ánh sáng và giá trị bền vững",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-057",
    "name": "GAMA Lumis",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ánh sáng lan tỏa, tạo cảm giác tươi sáng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-058",
    "name": "GAMA Elora",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Mang ý nghĩa thanh lịch, sáng sủa và gần gũi với mọi gia đình",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-059",
    "name": "GAMA Altis",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "\"Altis\" gợi sự vững chắc và tầm cao",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-060",
    "name": "GAMA Tervon",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Thể hiện khả năng thích nghi và bảo vệ công trình trong nhiều điều kiện môi trường",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-061",
    "name": "GAMA Kavora",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Biểu tượng cho nền tảng vững chắc, mang lại sự bền đẹp lâu dài cho công trình",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-062",
    "name": "GAMA Hydromax",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Hydro\" là nước, \"Max\" là tối đa. Thể hiện khả năng chống thấm mạnh mẽ, bảo vệ công trình ở mức cao nhất.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-063",
    "name": "GAMA Silkcore",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bề mặt mịn như lụa",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-064",
    "name": "GAMA Finecoat",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Lớp nền hoàn hảo",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-065",
    "name": "GAMA Lustria",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Sự óng ánh, lấp lánh và sang trọng",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-066",
    "name": "GAMA Aura",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Chữ Aura gợi lên hào quang, thần thái sang trọng, tinh tế và một không gian sống đầy năng lượng.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-067",
    "name": "GAMA Cozy",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Chữ Cozy gợi cảm giác tổ ấm gia đình ấm cúng, thoải mái, phù hợp với dòng sơn bền màu và dễ vệ sinh hằng ngày.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-068",
    "name": "GAMA Neo",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Chữ Neo mang ý nghĩa là sự mới mẻ, tối giản và hiện đại; ngắn gọn chỉ với 1 âm tiết, rất dễ đọc cho thợ thi công và gợi một khởi đầu mới mẻ, sạch sẽ cho ngôi nhà với mức chi phí kinh tế.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-069",
    "name": "GAMA Apex",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Men sứ công nghệ Nano + Chữ Apex mang ý nghĩa là đỉnh cao; khẳng định chất lượng vượt trội giúp nâng tầm đẳng cấp cho ngôi nhà, mang lại vẻ đẹp siêu bóng sang trọng và bền bỉ bất chấp thời tiết.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-070",
    "name": "GAMA Armor",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Chữ Armor có nghĩa là áo giáp, thể hiện vai trò bảo vệ ngôi nhà luôn tươi sáng trước ánh nắng mặt trời.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-071",
    "name": "GAMA Block",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Chữ Block tạo cảm giác vững chãi như khối bê tông, ngắn gọn, dễ đọc và dễ nhớ đối với thợ thi công",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-072",
    "name": "GAMA AquaForce",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Từ \"Force\" gợi lên sức mạnh, sự kiên cố và khả năng chống chịu áp lực nước mạnh mẽ, rất phù hợp cho đặc tính chịu tải trọng và chống thấm chuyên dụng của bề mặt sàn.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-073",
    "name": "GAMA Opal",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ Opal (ngọc thạch anh) mang lại cảm giác quý phái, lấp lánh; gợi tả một lớp nền hoàn hảo, mịn màng và quý giá như ngọc, giúp tôn lên tối đa vẻ đẹp và sự sang trọng cho các lớp sơn phủ tiếp theo của ngôi nhà",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-074",
    "name": "GAMA Crest",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ Crest mang ý nghĩa là đỉnh cao hoặc biểu tượng của sự thành đạt; mang lại cho gia chủ cảm giác về một không gian sống được chăm chút từ lớp nền chuẩn mực, giúp ngôi nhà giữ được vẻ đẹp hoàn hảo dài lâu cùng mức chi phí hợp lý.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-075",
    "name": "GAMA Luxe",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chữ Luxe (Luxury) mang lại cảm giác xa hoa, đẳng cấp, tôn lên vẻ đẹp độc đáo của các dòng sơn hiệu ứng và nhũ vàng",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-076",
    "name": "GAMA Lisse",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "\"Tạo sự bóng mượt cho không gian của bạn\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-077",
    "name": "GAMA Niveau",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "\"Đẳng cấp của sự sang trọng\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-078",
    "name": "GAMA Facile",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Facile dễ lau chùi \" Giữ sạch ngôi nhà bạn\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-079",
    "name": "GAMA Vit-mode",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Vitalite: sức sống Moderne hiện tại \" Sức sống hiện đại cho công trình\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-080",
    "name": "GAMA Solie",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "\"Tỏa sáng cho mọi công trình\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-081",
    "name": "GAMA Colorfast",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "\"Bền màu với thời gian\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-082",
    "name": "GAMA Lasting",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Bảo vệ ngôi nhà lâu dài, bền bỉ với thời gian\"",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-083",
    "name": "GAMA Durable",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "\"thời gian sử dụng lâu không bong tróc \"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-084",
    "name": "GAMA Aye",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "\"Mãi mãi bền chặt với công trình\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-085",
    "name": "GAMA Joie",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Joie tiếng Pháp có nghĩa: niềm vui \"dòng sơn trang trí, mang niềm vui đến mọi nhà\"",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-086",
    "name": "GAMA Lumier",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "\"Thể hiện độ trắng sáng, bề mặt hoàn thiện tinh tế, sang trọng và không gian sống cao cấp.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-087",
    "name": "GAMA Vela",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "\"Phù hợp dòng sơn có màu sắc tươi sáng, bền màu và tạo cảm giác trẻ trung cho không gian.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-088",
    "name": "GAMA Nesta",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Hướng đến sự gần gũi, thân thiện, đáp ứng nhu cầu hoàn thiện không gian sống",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-089",
    "name": "GAMA Vortex",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện khả năng chống chịu thời tiết khắc nghiệt, độ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-090",
    "name": "GAMA Bond",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Chữ Bond có nghĩa là gắn kết, thể hiện tính năng liên kết chặt chẽ với bề mặt tường, dễ thi công và mang lại hi",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-091",
    "name": "GAMA Forte",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Thể hiện độ bền cơ bản, khả năng bảo vệ bề mặt công trình",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-092",
    "name": "GAMA Terrasea",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Nhấn mạnh khả năng ngăn nước xâm nhập, bảo vệ kết cấu và kéo dài tuổi thọ",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-093",
    "name": "GAMA Satin",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Gợi bề mặt hoàn thiện mịn đẹp, đồng đều và nâng cao chất lượng lớp sơn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-094",
    "name": "GAMA Primo",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Thể hiện khả năng thi công ổn định, hiệu quả kinh tế và chất lượng",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-095",
    "name": "GAMA Alura",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Tạo điểm nhấn thẩm mỹ và đẳng cấp.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-096",
    "name": "GAMA AirPure",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Tinh khiết, nhẹ nhàng, không mùi độc hại",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-097",
    "name": "GAMA Silk",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Màng sơn mịn màng, che phủ khuyết điểm hiệu quả.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-098",
    "name": "GAMA Prima",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Nền tảng đầu tiên, chất lượng chuẩn mực, dễ tiếp cận.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-099",
    "name": "GAMA Stone",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Kiên cố như đá tự nhiên, giữ màu sắc nguyên bản.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-100",
    "name": "GAMA Forest",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Như cánh rừng xanh, làm mát và điều hòa bề mặt tường.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-101",
    "name": "GAMA AquaBlock",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Khóa nước thông minh, an toàn cho nguồn nước sinh hoạt.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-102",
    "name": "GAMA Smooth",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Trơn láng tự nhiên, tạo bước đệm hoàn hảo cho lớp sơn phủ.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-103",
    "name": "GAMA WallFix",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Sửa chữa bề mặt tường, lành tính và dễ sử dụng.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-104",
    "name": "GAMA Metallic",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Hiệu ứng ánh kim lấp lánh, thời thượng.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-105",
    "name": "GAMA Home Elite",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "GAMA Home đề cập chung đến dòng sơn nội thất, Elite truyền tải cấp độ tinh hoa, chọn lọc của sản phẩm dành cho cuộc sống thượng lưu",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-106",
    "name": "GAMA Home Gold+",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "GAMA Home đề cập chung đến dòng sơn nội thất, Gold+ truyền tải chất lượng vượt trội của sản phẩm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-107",
    "name": "GAMA Home Light",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "GAMA Home đề cập chung đến dòng sơn nội thất, Light gợi mở yếu tố cơ bản, đơn giản, tươi sáng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-108",
    "name": "GAMA Shield Eternal",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "GAMA Shield đề cập chung đến dòng sơn ngoại thất, Eternal gợi nhắc sự trường tồn vĩnh cữu theo thời gian, cho thấy chất lượng bền bỉ của sản phẩm",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-109",
    "name": "GAMA Shield Extreme",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "GAMA Shield đề cập chung đến dòng sơn ngoại thất, Extreme gợi mở tính năng vượt trội của sản phẩm",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-110",
    "name": "GAMA Shield 360",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "GAMA Shield đề cập chung đến dòng sơn ngoại thất, 360 gợi mở tính năng bảo vệ toàn diện ở mọi góc độ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-111",
    "name": "GAMA AquaSeal",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Nêu bật khả năng ngăn chặn nước",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-112",
    "name": "GAMA Matit Expert",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Nêu bật công năng ngay trong cái tên và ở cấp độ cao cấp",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-113",
    "name": "GAMA Matit Smooth",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Nêu bật công năng ngay trong cái tên, không cần phải mô tả nhiều bằng lời nói",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-114",
    "name": "GAMA Signature",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Thể hiện dấu ấn riêng, sự tinh tế độc bản dành cho mỗi người dùng",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-115",
    "name": "GAMA Noblesse",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "(Mang ý nghĩa quý phái, đẳng cấp)",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-116",
    "name": "GAMA Vento",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "(Gió tạo cảm giác nhẹ nhàng, thông thoáng)",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-117",
    "name": "GAMA Premo",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "(Viết tắt của Premium Cao cấp)",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-118",
    "name": "GAMA NanoShield",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "(Công nghệ phân tử bảo vệ)",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-119",
    "name": "GAMA Royal Shield",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "(Bảo vệ hoàng gia)",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-120",
    "name": "GAMA Vina Shield",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "(Gắn với thiên nhiên: Gần gũi, tin cậy nhưng vẫn mang âm hưởng hiện đại.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-121",
    "name": "GAMA AquaPro Shield",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "(Chống thấm đa lớp, chịu nhiệt tốt)",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-122",
    "name": "GAMA Permacoat",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Gợi sự bền bỉ, lớp áo bảo vệ vĩnh viễn cho công trình",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-123",
    "name": "GAMA Palace",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "(Cung điện)",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-124",
    "name": "GAMA CleanMax",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Dòng sơn chống bám bẩn, dễ lau chùi",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-125",
    "name": "GAMA Satin",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Độ bóng nhẹ, hiện đại , tinh tế",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-126",
    "name": "GAMA Shield",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Khiên chắn bảo vệ ngôi nhà khỏi nắng mưa",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-127",
    "name": "GAMA WeatherMax",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Tối ưu hoá khả năng chống chịu thời tiết khắc nghiệt",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-128",
    "name": "GAMA Titan",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Mang lại cảm giác cứng cáp, bền bỉ như kim loại Titan",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-129",
    "name": "GAMA Premium",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Dòng sơn cao cấp dành cho biệt thự, căn hộ sang trọng",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-130",
    "name": "GAMA SilkFill",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Mịn màng như lụa và lắp đầy",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-131",
    "name": "GAMA Perfect Wall",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Mang lại những bức tường hoàn hảo",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-132",
    "name": "GAMA DecoArt",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Dòng sơn chuyên dụng để trang trí và tạo tác nghệ thuật",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-133",
    "name": "GAMA Silk",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mịn màng như lụa, lau chùi tối ưu",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-134",
    "name": "GAMA Matte",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Mờ hiện đại, che lấp khuyết điểm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-135",
    "name": "GAMA Eco",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Kinh tế, an toàn cho sức khỏe",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-136",
    "name": "GAMA Armor",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Armor nghĩa là áo giáp thép, bảo vệ ngôi nhà kiên cố trước mọi thời tiết",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-137",
    "name": "GAMA Max",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Tối ưu chi phí, độ phủ tối đa",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-138",
    "name": "GAMA Aqua",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Kháng nước tuyệt đối, màng sơn đanh chắc",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-139",
    "name": "GAMA Pro",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Siêu mịn, dễ xả nhám, chuẩn thợ",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-140",
    "name": "GAMA Base",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Nền móng vững chắc, bám dính cao",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-141",
    "name": "GAMA Lux",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Hiệu ứng sang trọng, đẳng cấp",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-142",
    "name": "GAMA Aviora",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ánh sáng ở đỉnh cao, dành cho không gian đẳng cấp.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-143",
    "name": "GAMA Lureon",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ánh sáng bền bỉ, cân bằng giữa hiệu năng và giá trị.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-144",
    "name": "GAMA Orien",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Bình minh của một không gian mới, giải pháp đáng tin cậy cho mọi gia đình.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-145",
    "name": "GAMA Aevon",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Trường tồn theo thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-146",
    "name": "GAMA Vivaro",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Không gian sống tràn đầy năng lượng.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-147",
    "name": "GAMA Arvo",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Giá trị cốt lõi cho mọi ngôi nhà.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-148",
    "name": "GAMA Waterproof",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chống thấm chuẩn mới, bền vững dài lâu.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-149",
    "name": "GAMA Novix",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Khởi tạo chuẩn màu mới.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-150",
    "name": "GAMA Premium",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Cao cấp, sang trọng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-151",
    "name": "GAMA Plus",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Diểm cộng cho sự vượt trội",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-152",
    "name": "GAMA Sunshine",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Sáng như ánh mặt trời",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-153",
    "name": "GAMA Highlight",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Điểm nhấn hoàn hảo cho ngôi nhà của bạn",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-154",
    "name": "GAMA Terra",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Terra: gốc của nhiều từ ngữ tiếng anh chỉ về đất/bề mặt. Nếu Gama là cây xanh, cần đất mẹ Terra nuôi dưỡng nó. Terraco là tên cả hãng sơn đối thủ - biết đâu là một dòng sơn của Gama",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-155",
    "name": "GAMA Origin",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mang tinh thần kiến tạo, xây dựng từ gốc rễ chứ không đơn thuần là một lthùng sơn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-156",
    "name": "GAMA Nova",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ngôi sao mới bùng sáng. Đại diện cho sức sống mới, màu sắc tươi sáng, hiện đại.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-157",
    "name": "GAMA Nido",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Trong tiếng Ý nghĩa là tổ ấm. Gợi sự gần gũi, phù hợp phân khúc phổ thông.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-158",
    "name": "GAMA Atlas",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Vị thần nâng đỡ bầu trời. Tượng trưng cho khả năng bảo vệ công trình vượt thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-159",
    "name": "GAMA Nexa",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Thể hiện tinh thần kết nối của thương hiệu, đồng thời là lớp liên kết bảo vệ công trình trước nắng/mưa/thời tiết khắc nghiệt",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-160",
    "name": "GAMA Root",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Đại diện cho nền tảng vững chắc, giá trị cốt lõi và độ bền lâu dài.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-161",
    "name": "GAMA Aqua Nova",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Một chuẩn mực mới trong giải pháp chống thấm, truyền tải tinh thần đổi mới, hiện đại và nâng tầm giá trị công trình.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-162",
    "name": "GAMA Velo",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Lấy cảm hứng từ Velvet (nhung mịn), thể hiện độ mịn cao cấp của bề mặt. bột trét khi phủ lên tường",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-163",
    "name": "GAMA Alto",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Nghĩa là nâng cao. Tạo nền tảng hoàn thiện công trình tốt hơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-164",
    "name": "GAMA Aurea",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Nghĩa là vàng kim. Phù hợp dòng sơn nhũ vàng, giả đá, giả gỗ,....",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-165",
    "name": "GAMA Mia",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Gần gũi, cá nhân hóa tổ ấm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-166",
    "name": "GAMA Zen",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Yên bình, tối giản",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-167",
    "name": "GAMA Oasis",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Không gian nghỉ dưỡng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-168",
    "name": "GAMA Lumi",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ánh sáng, không gian sáng đẹp",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-169",
    "name": "GAMA Shield",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Lớp bảo vệ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-170",
    "name": "GAMA Vivo",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Sức sống lâu dài",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-171",
    "name": "GAMA Aqua Max",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "→ bảo vệ tối đa",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-172",
    "name": "GAMA Bond",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "→ liên kết chắc chắn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-173",
    "name": "GAMA Grip",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "→ bám chắc",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-174",
    "name": "GAMA Muse",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Nguồn cảm hứng nghệ thuật",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-175",
    "name": "GAMA Aureo",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Liên tưởng sắc vàng cao cấp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-176",
    "name": "GAMA Fresha",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Gợi sự tươi mới và sạch sẽ",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-177",
    "name": "GAMA Smooth",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Gợi tính chất bề mặt mịn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-178",
    "name": "GAMA Nanovia",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ghép ý Nano + Value",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-179",
    "name": "GAMA Solara",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Gợi nhớ đến mặt trời, chống nắng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-180",
    "name": "GAMA Surecoat",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Lớp phủ đáng tin cậy",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-181",
    "name": "GAMA Aquaduris",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chống thấm bền lâu",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-182",
    "name": "GAMA Primefill",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Thể hiện sự cao cấp",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-183",
    "name": "GAMA Easyfill",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Dễ thi công",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-184",
    "name": "GAMA Venera",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Gợi vẻ đẹp và thẩm mỹ",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-185",
    "name": "GAMA EasyPro",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Dễ lau chùi vết bẩn, dễ thi công (độ phủ tốt), dễ mua vì giá hợp lý. Pro chuyên nghiệp, có ý hơn một số sản phẩm easy khác",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-186",
    "name": "GAMA Skim Pro",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Từ thuật ngữ \"Skimcoat\" (bột trét/bột bả), từ ngữ ngắn gọn, nghe qua là hiểu công năng.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-187",
    "name": "GAMA Gold",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Phản ánh đặc tính nhũ vàng/ánh vàng, nghe qua biết tạo hiệu ứng giả kim sang trọng.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-188",
    "name": "GAMA BriPas",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Bright & Bridge Passion Cầu nối đam mê bằng sắc màu rạng rỡ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-189",
    "name": "GAMA VisTek",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Vission Technology > Tek (cách viết biến thể) Kiến tạo sắc màu bằng công nghệ hiện đại và tầm nhìn bền vững.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-190",
    "name": "GAMA CoPas",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Color Passion Khơi nguồn đam mê bằng sắc màu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-191",
    "name": "GAMA CrePas",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Create Passion Khơi nguồn sáng tạo, kiến tạo giá trị bằng đam mê.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-192",
    "name": "GAMA FuGreen",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Fu: Funny Future Green Kiến tạo sắc màu cho những công trình tương lai bằng tinh thần \"Xanh\" thân thiện.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-193",
    "name": "GAMA StanPer",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Standard & Perfect Chuẩn mực hoàn hảo cho vẻ ngoài của mọi công trình.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-194",
    "name": "GAMA Aqua Dino",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Diamond Nano Dinosour khủng long Chống thấm mạnh mẽ, bảo vệ công trình bền bỉ trước mọi thời tiết.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-195",
    "name": "GAMA BeFound",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Better & Foundation Lớp nền tốt hơn cho màu sơn bền đẹp hơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-196",
    "name": "GAMA ReFound",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Real Realiability & Foundation Lớp nền vững chắc, đáng tin cậy.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-197",
    "name": "GAMA SunFlo",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Sunny Sun Flow Dòng chảy ánh sáng kết nối không gian.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-198",
    "name": "GAMA Jade",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ngọc Bích là đại diện hoàn hảo nhất cho tone màu xanh lá đậm của thương hiệu. Tên gọi gợi lên bề mặt tường láng mịn, mát mẻ, phản chiếu ánh sáng có chiều sâu và vô cùng quyền quý.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-199",
    "name": "GAMA Lotus",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Mượn hình ảnh quốc hoa Việt Nam. Cánh sen có độ mịn như nhung và sở hữu màng bảo vệ tự làm sạch tự nhiên. Tên gọi này nhấn mạnh tính năng chống bám bẩn, dễ lau chùi, giữ cho tổ ấm luôn thanh tao.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-200",
    "name": "GAMA Cove",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Câu chuyện cảm hứng từ những vịnh biển nhỏ êm đềm, khuất gió của Việt Nam (như Vĩnh Hy, Lăng Cô). Một cái tên mang lại sự êm ái, bảo bọc, tạo nên tổ ấm bình yên.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-201",
    "name": "GAMA Citadel",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Gợi nhớ đến sự kiên cố trường tồn hàng thế kỷ của các vòng thành cổ (như Hoàng thành Thăng Long, Đại Nội Huế). Tên gọi là lời khẳng định về một lớp khiên bảo vệ ngôi nhà khỏi mọi khắc nghiệt của thời tiết.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-202",
    "name": "GAMA Basalt",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Lấy từ chất đá bazan cứng cáp, bền bỉ của vùng đất Tây Nguyên đầy nắng gió. Đại diện cho khả năng bám màu sâu, chống phai dưới tia UV gay gắt.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-203",
    "name": "GAMA Dune",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Lấy cảm hứng từ những đồi cát Nam Trung Bộ luôn dẻo dai vươn mình trong nắng gió. Dòng sơn mang tính che phủ tốt, mộc mạc nhưng bền bỉ.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-204",
    "name": "GAMA Monsoon",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Khí hậu nhiệt đới \"gió mùa\" với những cơn mưa lớn dầm dề là đặc trưng lớn nhất tại Việt Nam. Tên gọi này khẳng định dòng sơn thấu hiểu và trị đứt điểm bài toán thấm dột do thời tiết bản địa gây ra.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-205",
    "name": "GAMA Celadon",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Lấy cảm hứng từ dòng gốm men ngọc (Celadon) thời Lý - Trần (đỉnh cao mỹ thuật Việt). Bột trét tạo ra một lớp nền trắng láng, mịn màng không tì vết, chuẩn bị cho một lớp sơn hoàn mỹ.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-206",
    "name": "GAMA Grain",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Những hạt phù sa mang tính bồi đắp lớp nền móng vững chắc. Nhấn mạnh đặc tính bột dẻo dai, độ bám dính cao và rất dễ thi công.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-207",
    "name": "GAMA Lacquer",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Sơn mài là quốc bảo của mỹ thuật Việt Nam với bề mặt có chiều sâu hun hút và biến ảo. Dòng sơn hiệu ứng này biến mỗi mảng tường thành một tác phẩm nghệ thuật đắt giá, độc nhất vô nhị.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-208",
    "name": "GAMA SilkLux",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Kết hợp giữa Silk (Lụa) và Luxury (Sang trọng). Mang ý nghĩa màng sơn mịn màng, bóng bẩy như lụa cao cấp, mang lại vẻ đẹp đẳng cấp và bền vững cho không gian sống thượng lưu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-209",
    "name": "GAMA CleanMax",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Sự kết hợp giữa Clean (Sạch sẽ) và Maximum (Tối đa). Nhấn mạnh tính năng lau chùi vượt trội, kháng khuẩn tối đa, là giải pháp bảo vệ tối ưu cho các gia đình có trẻ nhỏ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-210",
    "name": "GAMA MatteFresh",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Kết hợp giữa Matte (Bề mặt mờ) và Fresh (Tươi mới). Mang ý nghĩa dòng sơn kinh tế, cho bề mặt mịn mờ hiện đại, độ che phủ tốt và giữ không gian nhà cửa luôn tươi mới, thông thoáng.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-211",
    "name": "GAMA DuraShield",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ghép từ Durable (Bền bỉ) và Shield (Tấm khiên). Có ý nghĩa như một \"tấm khiên công nghệ\" kiên cố, bảo vệ ngôi nhà khỏi tia UV, nhiệt độ cao và giữ màu sắc bền đẹp lên đến hàng chục năm.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-212",
    "name": "GAMA WeatherGard",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Cách điệu từ Weather Guard (Bảo vệ trước thời tiết). Đây là dòng sản phẩm chủ lực với tính năng chống bám bẩn, chống rêu mốc và chịu được sự thay đổi thất thường của khí hậu nhiệt đới.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-213",
    "name": "GAMA EcoCoat",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Kết hợp giữa Ecology/Economy (Kinh tế/Thân thiện) và Coat (Lớp phủ). Mang ý nghĩa lớp phủ bảo vệ cơ bản, tiết kiệm chi phí nhưng vẫn đảm bảo khả năng chống phai màu và bong tróc tiêu chuẩn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-214",
    "name": "GAMA AquaStop Ultra",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "AquaStop (Chặn nước) + Ultra (Vượt trội). Khẳng định khả năng chống thấm ngược, thấm thuận tuyệt đối nhờ công nghệ liên kết hóa học siêu việt, đàn hồi cao, không nứt nẻ.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-215",
    "name": "GAMA NanoSmooth",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Nano(Công nghệ siêu nhỏ) + Smooth (Mượt mà). Thể hiện hạt bột siêu mịn, lấp đầy mọi khe nứt nhỏ nhất, tạo ra bề mặt phẳng mịn hoàn hảo như gương trước khi sơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-216",
    "name": "GAMA FlexBond",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Ghép từ Flexible (Dẻo dai) và Bond (Sự liên kết). Nhấn mạnh đặc tính bột dẻo, dễ bả, độ bám dính cực cao, chống rạn nứt chân chim hiệu quả cho cả trong và ngoài trời.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-217",
    "name": "GAMA BaseFill",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Kết hợp giữa Base (Nền tảng) và Fill (Lấp đầy). Mang ý nghĩa là lớp bột nền tiêu chuẩn, giúp lấp đầy các khoảng lồi lõm của tường gạch thô một cách nhanh chóng, dễ thi công và kinh tế.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-218",
    "name": "GAMA Luxury Pearl",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện sự tinh tế, sang trọng, quý, đẳng cấp (Luxury), Pearl sáng bóng kiểu nhẹ nhàng, quý phái tựa như ngọc trai. Do đó sẽ toát lên được chất lượng cao cấp, khẳng định sự đẳng cấp/sang trọng mà cũng rất nhẹ nhàng, phù hợp cho dòng sơn nội thất ở phân khúc cao cấp/siêu cao cấp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-219",
    "name": "GAMA MaxOpacity",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Liên tưởng đến độ che lấp, độ che phủ (Opacity) của sản phẩm và có hiệu quả cao (Max). Và đây là tính năng cần thiết đối với các dòng sơn trung cấp G11 & G12 2. Riêng G15: GAMA Celling White - Để thể hiện dòng sơn trắng chuyên dụng dành riêng cho trần nhà/hoặc tường nội thất",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-220",
    "name": "GAMA Eco Smooth",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Smooth gợi lên màng sơn phẳng, láng mịn của dòng sơn mịn kinh tế nói chung. Đồng thời Eco là sinh thái sẽ toát lên tính chất thân thiện/an toàn với người sử dụng và nó còn mang ý nghĩa tiết kiệm/kinh tế (Economic)",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-221",
    "name": "GAMA Platinum",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện sự đẳng cấp, sang trọng, chất lượng vượt trội của dòng sơn ngoại thất cao cấp. Ví von chất lượng sản phẩm đỉnh, cứng/bền/đẹp và tươi sáng mãi mãi như Bạch kim 2. Hoặc GAMA Sapphire 3. Hoặc GAMA Ruby- Sapphire và Ruby là đá quý nói lên sự đẳng cấp, quý phái vương giả, sang trọng và chất lượng thì vĩnh cửu siêu việt. Như vậy sẽ toát lên được ý nghĩa của dòng sơn ngoại thất có định vị phân khúc cao cấp này, bền/đẹp và có giá trị vĩnh cửu/trường tồn theo thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-222",
    "name": "GAMA Classic",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Toát lên một vẻ đẹp cổ điển (Classic), nét thanh lịch của một dòng sơn trang trí bóng mờ sang trọng và không bị lỗi thời",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-223",
    "name": "GAMA Easy Silk",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Silk thể hiện dòng sơn mờ và có bề mặt mịn/mượt như lụa, đồng thời toát lên sự tinh tế, lụa còn là chất lượng. Easy là mang ý nghĩa đơn giản, dễ sử dụng, dễ dàng thi công, một yếu tố quan trọng của dòng sơn mịn, và còn có nghĩa liên tưởng đến lau chùi/làm sạch dễ dàng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-224",
    "name": "GAMA Aqua-Lock",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Lock mang ý nghĩa chốt chặn, giữ lại, khoá lại. Như vậy thể hiện tính năng chống thấm nước (Aqua) cần phải có của dòng sơn chống thấm 2 thành phần pha xi măng G50 & G54. Đồng thời từ ngữ ngắn gọn, dễ hiểu, súc tích nên rất dễ nhớ và tạo ấn tượng gần giũ cho người sử dụng. 2. Và GAMA Aqua-Resistant Colour - Toát lên được ngay tính năng ưu việt là sản phẩm sơn màu (colour) và có tính năng chống/kháng nước cao (Resistant). Tính năng vốn phải có của dòng sản phẩm chống thấm màu G51 & G53 3. Và GAMA Multi RoofPaint - Thể hiện sơn chống thấm đa/chuyên dụng/đặc dụng của dòng chống thấm lộ thiên G55. Như vậy sẽ tránh gây sự nhầm lẫn giữa các dòng chống thấm do có mục đích/đặc tính/và cách ứng dụng là khác nhau",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-225",
    "name": "GAMA Pro Putty",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Putty là chỉ ý nghĩa bột trét tường, bột bả, Mastic nói chung. Do đó sẽ súc tích ngắn gọn dễ hiểu cho người đọc/nhìn không gây hiểu nhầm và hiểu ngay tính năng của sản phẩm. Pro để chỉ thể hiện sản phẩm đẳng cấp, chất lượng. Có chữ Pro để phân biệt với dòng chiến lược có chữ Easy",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-226",
    "name": "GAMA Easy Putty",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Putty là chỉ ý nghĩa bột trét tường, bột bả, Mastic nói chung. Do đó sẽ súc tích ngắn gọn dễ hiểu cho người đọc/nhìn không gây hiểu nhầm và hiểu ngay tính năng của sản phẩm. Easy nói lên tính chất dễ thi công/dễ sử dụng và phù hợp với định vị phân cấp sản phẩm và đồng thời để phân biệt với dòng cao cấp có chữ Pro",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-227",
    "name": "GAMA Metallic Color",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Color là chỉ lớp sơn/lớp phủ có màu sắc. Metallic là ánh kim loại, thể hiện được sự sáng, sự lấp lánh ánh kim loại của sản phẩm sơn nhũ (giống ánh nhũ kim tuyến). Đồng thời còn nói lên tính nghệ thuật/đẳng cấp về màu sắc của dòng sản phẩm mang lại",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-228",
    "name": "GAMA Royale",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện đẳng cấp \"Hoàng gia\". Dành cho những công trình biệt thự, căn hộ cao cấp đòi hỏi tính thẩm mỹ và độ bền màu cao nhất.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-229",
    "name": "GAMA Easy Clean",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Nhấn mạnh tính năng \"Dễ lau chùi\" vượt trội. Đánh bay vết bẩn bút bi, thức ăn dễ dàng, là lựa chọn số 1 cho gia đình có trẻ nhỏ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-230",
    "name": "GAMA Econo",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Rút gọn từ \"Economy\" (Kinh tế). Định vị rõ ràng đây là dòng sơn giúp tiết kiệm tối đa ngân sách thi công.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-231",
    "name": "GAMA Ghost Shield",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Lớp bảo vệ ẩn mình, giữ nguyên vẹn 100% màu sắc và đường nét ban đầu của công trình.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-232",
    "name": "GAMA Glass Coat",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Trong suốt như kính, ngăn chặn mọi tác động bên ngoài mà không để lại dấu vết màu sắc.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-233",
    "name": "GAMA nvisible Guard",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Tên gọi trực diện, dễ nhớ, khẳng định tính năng bảo vệ tối đa nhưng không lộ diện.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-234",
    "name": "GAMA AQUA StormGuard",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chữ \"Storm\" (Bão tố) và \"Guard\" (Vệ sĩ/Bảo vệ). Lý do: Khẳng định sức mạnh siêu việt của màng sơn, được thiết kế đặc biệt để đương đầu với những điều kiện khí hậu nhiệt đới gió mùa, mưa bão khắc nghiệt nhất.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-235",
    "name": "GAMA Perfecta",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ \"Perfecta\" gợi sự hoàn hảo. Tượng trưng cho khả năng tạo ra một bề mặt tường láng mịn tuyệt đối, không một tì vết trước khi lăn sơn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-236",
    "name": "GAMA Flex",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ \"Flex\" (linh hoạt/co giãn). Nhấn mạnh khả năng đàn hồi tốt, thích ứng được với sự thay đổi nhiệt độ của thời tiết nhiệt đới để hạn chế nứt nẻ.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-237",
    "name": "GAMA Aurum",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chữ \"Aurum\" trong tiếng Latin có nghĩa là vàng ròng. Lý do: Cái tên này khẳng định đẳng cấp siêu cao cấp, gợi lên sự vương giả, quyền lực. Màng sơn mang lại hiệu ứng lấp lánh ánh kim loại quý giá, giúp tôn vinh kiến trúc của những không gian xa hoa nhất.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-238",
    "name": "GAMA Super Life",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "(Siêu Vòng Đời / Cuộc Sống Tuyệt Vời) là một cái tên mang thiên hướng cảm xúc, nhân văn và có tầm nhìn dài hạn. Khác với những cái tên mang tính kỹ thuật xơ cứng, \"Super Life\" hướng thẳng tới lợi ích cốt lõi của người tiêu dùng: Một sản phẩm mang lại tuổi thọ siêu dài cho công trình và kiến tạo một không gian sống tuyệt vời cho gia chủ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-239",
    "name": "GAMA MaxLife",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ý Nghĩa: \"Chạm Đỉnh Tuổi Thọ Công Trình\"Lời cam kết về độ bền vững: Từ \"Max\" (Tối đa) đi liền với \"Life\" (Tuổi thọ/Vòng đời) là một lời khẳng định đanh thép rằng: Đây là sản phẩm giúp kéo dài tuổi thọ của bức tường và ngôi nhà đến mức tối đa. Sơn hoặc trét bột một lần, bảo vệ mười năm.Tối ưu hóa chi phí: Khách hàng nhìn vào tên sẽ cảm nhận được giá trị kinh tế dài hạn. Sản phẩm giúp họ tiết kiệm chi phí sửa chữa, sơn lại nhà trong tương lai nhờ độ bền bỉ vượt thời gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-240",
    "name": "GAMA EcoLife",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Ý Nghĩa: \"Sơn Xanh Cho Cuộc Sống An Lành\"Bảo vệ sức khỏe gia đình: Đây là lời cam kết mạnh mẽ về một dòng sơn an toàn. Sơn lên tường không để lại mùi nồng hắc độc hại, hàm lượng chất hữu cơ bay hơi cực thấp (Low VOC), không chứa chì hay thủy ngân. Giúp chủ nhà có thể dọn vào ở ngay mà không lo ảnh hưởng đến hệ hô hấp của người già và trẻ nhỏ.Thân thiện với thiên nhiên: Khẳng định quy trình sản xuất áp dụng công nghệ xanh, nguyên liệu tự nhiên, giảm thiểu khí thải carbon và đóng góp vào việc bảo vệ hệ sinh thái chung.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-241",
    "name": "GAMA Super SunBright",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ý Nghĩa: Bảo Vệ Và Tỏa Sáng Siêu Cấp\"Định vị phân khúc 5 sao: Chữ \"Super\" ngay lập tức phân loại sản phẩm này vào nhóm Premium (Cao cấp) hoặc Luxury (Sang trọng). Khách hàng nhìn vào sẽ hiểu ngay đây là dòng sơn tốt nhất, bền nhất của hãng.Vẻ đẹp thách thức thời gian: \"Super SunBright\" mang ý nghĩa về một ngôi nhà luôn giữ được vẻ đẹp rực rỡ, tươi mới và sáng bóng như ngày đầu, bất chấp sự tàn phá của ánh nắng và thời tiết.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-242",
    "name": "GAMA MAX SunBright",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Ý Nghĩa: \"Sức Mạnh Và Độ Tỏa Sáng Chạm Đỉnh\"Tối đa hóa mọi tính năng: Chữ \"MAX\" khẳng định sản phẩm đã đạt đến giới hạn cao nhất về chất lượng. Đây là lời cam kết của bạn với khách hàng rằng: Sản phẩm này mang lại độ bền màu cao nhất, chống nóng tốt nhất và độ bóng đẹp nhất.Năng lượng công nghệ: Khác với từ \"Super\" mang tính truyền thống, từ \"MAX\" gợi liên tưởng đến các sản phẩm công nghệ thế hệ mới (như iPhone Pro Max, Max Speed). Nó định vị dòng sơn của bạn ứng dụng công nghệ tiên tiến, hiện đại.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-243",
    "name": "GAMA ECO SunBright",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ý Nghĩa: \"Rực Rỡ Như Ánh Mặt Trời \"Bền màu dưới nắng: Tên gọi này ngầm khẳng định chất lượng sơn có khả năng chống tia UV cực tốt, không bị phai màu hay ố vàng dù bị ánh nắng mặt trời chiếu trực tiếp hàng ngày.Tươi sáng và sống động: Gợi lên một không gian sống tràn ngập ánh sáng, năng lượng tích cực, giúp ngôi nhà luôn trông như mới và nổi bật giữa khu phố.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-244",
    "name": "GAMA Aqua Armor",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Áo Giáp Chống Nước\"Cái tên này tạo ra một liên tưởng hình ảnh vô cùng trực quan và đáng tin cậy:Tấm khiên chắn nước: Biến bức tường thành một lớp áo giáp kiên cố, ngăn chặn hoàn toàn sự xâm nhập của nước mưa, hơi ẩm và nguồn nước ngầm.Bảo vệ tuyệt đối: Giống như một chiến binh mặc giáp lặn xuống nước mà không bị ướt, ngôi nhà của bạn sẽ hoàn toàn \"bất tử\" trước mùa mưa bão.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-245",
    "name": "GAMA SUPER SatinFiller",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bề mặt siêu láng mịn: Khả năng che phủ hoàn hảo, không để lại vết gợn, giúp bức tường mịn màng như dải lụa satin.Chất lượng cao cấp: Từ \"Satin\" gợi cảm giác sang trọng, quý phái, định vị đây là dòng sản phẩm có chất lượng vượt trội.Hỗ trợ sơn tối đa: Bề mặt tường sau khi xả nhám sẽ phẳng mịn tuyệt đối, giúp lớp sơn phủ lên màu đều, bóng đẹp và tiết kiệm sơn hơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-246",
    "name": "GAMA SatinFiller",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Bề mặt siêu láng mịn: Khả năng che phủ hoàn hảo, không để lại vết gợn, giúp bức tường mịn màng như dải lụa satin.Chất lượng cao cấp: Từ \"Satin\" gợi cảm giác sang trọng, quý phái, định vị đây là dòng sản phẩm có chất lượng vượt trội.Hỗ trợ sơn tối đa: Bề mặt tường sau khi xả nhám sẽ phẳng mịn tuyệt đối, giúp lớp sơn phủ lên màu đều, bóng đẹp và tiết kiệm sơn hơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-247",
    "name": "GAMA Canvas Coat",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "\"Lớp áo sắc màu biến bức tường thành tranh\".Ưu điểm: Từ này chuẩn chuyên ngành sơn, phát âm tiếng Anh nghe cực kỳ thuận miệng, sang trọng và có nhịp điệu dứt khoát (Can-vas-Coat).",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-248",
    "name": "GAMA Pearl",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "\"Ngọc trai\" lấp lánh nhẹ nhàng. Định vị một vẻ đẹp quý phái, đồng thời màng sơn trơn láng giúp chống bám bẩn hoàn hảo.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-249",
    "name": "GAMA SmartSpace",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "\"Không gian thông minh\". Giải pháp tối ưu tích hợp 3 trong 1: che phủ vết nứt, lau chùi dễ dàng và lên màu sắc nét.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-250",
    "name": "GAMA Project",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Dòng sơn thiết kế chuyên dụng cho \"Dự án\". Phù hợp cho nhà ở xã hội, chung cư đại chúng cần tối ưu chi phí vật tư hàng loạt.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-251",
    "name": "GAMA ShieldMax",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Kết hợp giữa \"Shield\" (khiên) và \"Max\" (tối đa). Tượng trưng cho lớp khiên bảo vệ tối thượng cho mặt tiền ngôi nhà trước mưa bão, nắng gắt.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-252",
    "name": "GAMA ColorPlus",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "\"Color\" (màu sắc) và \"Plus\" (cộng thêm). Tập trung vào bộ sưu tập màu sắc ngoại thất đa dạng, tươi sáng và công nghệ khóa màu bền bỉ hơn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-253",
    "name": "GAMA EasyCoat",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "\"Easy\" (dễ dàng). Tập trung vào tính tiện dụng: dễ pha trộn, dễ lăn, thi công mượt mà giúp tiết kiệm cả vật tư lẫn nhân công.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-254",
    "name": "GAMA HydroShield",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Ý tưởng: Chữ \"Hydro\" (Nước) và \"Shield\" (Cái khiên). Lý do: Tạo hình ảnh một chiếc khiên chắn nước kiên cố, vô hiệu hóa hoàn toàn sự tấn công của nước mưa, bảo vệ kết cấu tường bên trong luôn bền vững.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-255",
    "name": "GAMA UltraBond",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ \"Ultra\" (siêu) và \"Bond\" (liên kết). Thể hiện khả năng bám dính cực kỳ mạnh mẽ vào bề mặt xi măng, loại bỏ hoàn toàn rủi ro bong tróc hay phồng rộp.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-256",
    "name": "GAMA MaxCover",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ \"Max\" (tối đa) và \"Cover\" (độ phủ). Ý tưởng nhấn mạnh vào lợi ích kinh tế: bột trét rất dôi, che lấp tốt, thi công được diện tích lớn hơn trên mỗi bao.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-257",
    "name": "GAMA Radiant",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Ý tưởng: Chữ \"Radiant\" mang ý nghĩa rực rỡ, tỏa sáng từ bên trong. Lý do: Thể hiện khả năng bắt sáng tuyệt vời của các hạt nhũ siêu mịn, giúp không gian luôn rạng rỡ, tràn ngập năng lượng và sự sống động bất kể ngày hay đêm.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-258",
    "name": "GAMA Lumina",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ánh sáng của không gian và cảm giác rộng mở cho ngôi nhà.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-259",
    "name": "GAMA Harmony",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Sự hài hòa giữa chất lượng và giá trị. Phù hợp cho gia đình hiện đại muốn không gian ấm cúng, bền đẹp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-260",
    "name": "GAMA Green Smooth",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Thể hiện sinh thái, sống xanh, an toàn cho môi trường sống/người sử dụng, một xu hướng thời đại. Và Smooth là mịn, mượt đồng thời còn chỉ sự nhẹ nhàng/tinh tế cho không gian sống. Như vậy sẽ thể hiện/tôn lên được giá trị, an toàn của dòng sơn mịn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-261",
    "name": "GAMA Titan",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Titan có ý nghĩa mạnh mẽ, to lớn, bền bỉ,... Thể hiện bảo vệ công trình trước thời tiết khắc nghiệt, giữ màu bền lâu.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-262",
    "name": "GAMA Fortress",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Vẻ đẹp vượt thời gian. Dòng sơn cân bằng giữa độ bền, thẩm mỹ và chi phí đầu tư.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-263",
    "name": "GAMA Protect",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Protect là bảo vệ, ý chỉ sản phẩm mang lại sự bảo vệ ngôi nhà ở của bạn và bảo vệ tổ ấm càng thêm vững chãi, hạnh phúc",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-264",
    "name": "GAMA Prime",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Nền tường hoàn hảo cho lớp sơn đẳng cấp. Tạo bề mặt phẳng mịn và chắc chắn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-265",
    "name": "GAMA Standard",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Dễ thi công, dễ hoàn thiện. Giúp bề mặt tường đẹp và đồng đều với chi phí hợp lý.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-266",
    "name": "GAMA ArtMetal",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Hiệu ứng ánh kim sang trọng. Tạo điểm nhấn độc đáo, nâng tầm giá trị không gian.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-267",
    "name": "GAMA Elegance",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Tập trung vào sự \"Thanh lịch\". Phù hợp với kiến trúc tối giản hiện đại, nơi các sắc độ màu lên chuẩn xác và tinh tế nhất.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-268",
    "name": "GAMA Chroma",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Chuyên về \"Màu sắc\". Tập trung vào công nghệ khóa màu, mang đến bộ sưu tập màu sắc phong phú, rực rỡ và tươi trẻ cho không gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-269",
    "name": "GAMA Pure Keep",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Tôn vinh và lưu giữ vẻ đẹp thô mộc, nguyên bản nhất của vật liệu xây dựng.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-270",
    "name": "GAMA Origin Shine",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Giúp bề mặt tường có độ bóng nhẹ, làm nổi bật các đường vân đá, vân gỗ tự nhiên.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-271",
    "name": "GAMA Crystal Coat",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Trong vắt và lấp lánh như pha lê. Tên gọi mang lại cảm giác sang trọng, nâng tầm thẩm mỹ cho các mảng tường đá tự nhiên.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-272",
    "name": "GAMA AQUA EverDry",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chữ \"Ever\" (Mãi mãi) và \"Dry\" (Khô ráo). Lý do: Nhấn mạnh vào kết quả cuối cùng mà mọi gia chủ đều mong muốn: một ngôi nhà luôn trong trạng thái khô ráo, an toàn và sạch sẽ bất chấp mưa bão qua nhiều năm tháng.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-273",
    "name": "GAMA ArmorBase",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ \"Armor\" (áo giáp) và \"Base\" (lớp nền). Định vị lớp bột trét như một chiếc áo giáp kiên cố bảo vệ cốt tường từ bên trong, chống thấm và kiềm hóa xuất sắc.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-274",
    "name": "GAMA SmartBase",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ \"Smart\" (thông minh) và \"Base\" (nền tảng). Giải pháp xử lý bề mặt thông minh, mang lại sự cân bằng hoàn hảo giữa chất lượng thi công và chi phí đầu tư.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-275",
    "name": "GAMA Nacre",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chữ \"Nacre\" mang nghĩa là xà cừ. Lý do: Tên gọi xuất phát từ hiệu ứng ánh nhũ ngọc trai lấp lánh, có khả năng chuyển đổi màu sắc tinh tế dưới ánh sáng. Nó mang lại chiều sâu nghệ thuật và vẻ đẹp lộng lẫy, kiêu sa cho bề mặt tường.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-276",
    "name": "GAMA Pristine",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mang nghĩa \"Nguyên bản, Hoàn mỹ\". Lớp màng siêu liên kết chống trầy xước, giúp bức tường nội thất luôn giữ vẻ đẹp như ngày đầu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-277",
    "name": "GAMA Active",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Hướng tới sự \"Năng động\". Màng sơn dẻo dai, chịu được các va chạm sinh hoạt thường ngày mà không để lại vệt xước.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-278",
    "name": "GAMA SwiftIn",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Màng sơn \"Nhanh khô\" ở điều kiện trong nhà. Giúp rút ngắn thời gian bàn giao, dọn vào ở được ngay mà không phải chờ đợi.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-279",
    "name": "GAMA Time Lock",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Đóng băng vẻ đẹp của ngôi nhà tại thời điểm mới hoàn thiện, ngăn chặn sự lão hóa, bạc màu do thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-280",
    "name": "GAMA Poly Guard",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Gợi liên tưởng đến gốc nhựa Polyurethane cao cấp, tạo lớp màng bảo vệ siêu dẻo dai, chống nứt nẻ cho tường ngoài trời.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-281",
    "name": "GAMA Diamond Drop",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ví lớp sơn trong suốt như những giọt kim cương lỏng, khi khô lại sẽ hóa thành lớp màng siêu cứng, chống trầy xước ngoại thất.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-282",
    "name": "GAMA Standard",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"Standard\" (tiêu chuẩn). Cái tên thể hiện sự minh bạch: cung cấp chính xác những tiêu chuẩn bảo vệ thiết yếu nhất cho bề mặt ngoài trời",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-283",
    "name": "GAMA Diamond",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ \"Diamond\" (kim cương). Gợi lên chất lượng thượng hạng, độ bền vĩnh cửu và bề mặt hoàn thiện sắc sảo dành cho các công trình biệt thự cao cấp.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-284",
    "name": "GAMA Prime",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ \"Prime\" (ưu tiên/hàng đầu). Tự tự tin định vị đây sẽ là sự lựa chọn ưu tiên hàng ngày của đại đa số thợ sơn nhờ đặc tính dễ làm và giá thành phải chăng.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-285",
    "name": "GAMA Lusso",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chữ \"Lusso\" trong tiếng Ý nghĩa là sự xa xỉ (Luxury). Lý do: Một cái tên ngắn gọn, mang đậm âm hưởng Châu Âu, sinh ra để định vị phân khúc thượng lưu. Lớp sơn ánh nhũ ở đây không chỉ là vật liệu mà còn là một tuyên",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-286",
    "name": "GAMA Fresh",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Từ \"Tươi mới\". Tích hợp tính năng khử mùi và chống nấm mốc, giữ cho không khí trong nhà luôn thoáng đãng, dễ chịu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-287",
    "name": "GAMA Vital",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa \"Thiết yếu, Sức sống\". Thổi hồn vào những bức tường xi măng thô cứng trở nên sinh động và ngập tràn năng lượng.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-288",
    "name": "GAMA Essential",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Sản phẩm \"Thiết yếu\". Cung cấp đúng những gì một bức tường cơ bản cần: màng sơn sáng sủa, sạch sẽ và giá thành siêu rẻ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-289",
    "name": "GAMA EverGuard",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "\"Ever\" (mãi mãi) và \"Guard\" (bảo vệ). Gợi lên sự bảo vệ bền vững, không phai màu và giữ được vẻ đẹp nguyên bản qua nhiều năm tháng.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-290",
    "name": "GAMA Lotus",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "\"Lotus\" (hoa sen). Gợi sự liên tưởng đến hiệu ứng lá sen, giúp màng sơn ngoại thất có khả năng tự làm sạch, chống thấm nước cực tốt khi trời mưa.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-291",
    "name": "GAMA EcoBasic",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "\"Eco\" (kinh tế/tiết kiệm) và \"Basic\" (cơ bản). Thông điệp rõ ràng về một giải pháp sơn ngoại thất tiết kiệm nhất, phù hợp với mọi túi tiền.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-292",
    "name": "GAMA AQUA NanoPel",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chữ \"Nano\" (Công nghệ siêu nhỏ) và \"Repel\" (Đẩy lùi).Lý do: Phản ánh công nghệ chống thấm tiên tiến từ hạt nano, len lỏi sâu vào gốc tường để đẩy lùi phân tử nước, mang lại cảm giác công nghệ cao và đắt tiền cho sản phẩm.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-293",
    "name": "GAMA Supreme",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Chữ \"Supreme\" nghĩa là tối thượng. Tuyên ngôn về chất lượng bột trét dẫn đầu, mang lại trải nghiệm thi công đẳng cấp nhất.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-294",
    "name": "GAMA ProBuild",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Chữ \"Pro\" và \"Build\" (xây dựng). Lựa chọn tối ưu, đáp ứng các tiêu chuẩn kỹ thuật khắt khe của các nhà thầu dự án, chung cư và khu đô thị.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-295",
    "name": "GAMA Starlight",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chữ \"Starlight\" gợi ánh sáng của muôn ngàn vì sao. Lý do: Gợi liên tưởng trực quan đến màng sơn chứa hàng vạn hạt nhũ li ti tỏa sáng. Tên gọi này biến bức tường thành một bầu trời đêm lấp lánh, tạo điểm nhấn đầy lãng mạn, tinh tế và huyền ảo.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-296",
    "name": "GAMA Prestige",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Chất lượng cao cho những công trình đòi hỏi . Ý nghĩa: Prestige tượng trưng cho uy tín và giá trị cao cấp.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-297",
    "name": "GAMA Advance",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Công nghệ tiên tiến, chất lượng ổn định. Ý nghĩa: Advance thể hiện sự cải tiến và phát triển.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-298",
    "name": "GAMA Basic",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Chất lượng ổn định cho công trình phổ thông. Ý nghĩa: Basic thể hiện phân khúc nền tảng, dễ hiểu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-299",
    "name": "GAMA Imperial",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Sang trọng và bền bỉ cho công trình. Ý nghĩa: Imperial gợi sự uy nghi.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-300",
    "name": "GAMA Dura",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Bền chắc trước mọi điều kiện thời tiết. Ý nghĩa: Dura viết tắt của Durable (bền bỉ), dễ nhớ và dễ nhận diện.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-301",
    "name": "GAMA Everest",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Chinh phục mọi điều kiện thời tiết. Ý nghĩa: Everest biểu tượng của sức mạnh và độ bền.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-302",
    "name": "GAMA Hydro Shield",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Lá chắn chống thấm toàn diện, bảo vệ công trình trước mọi điều kiện thời tiết. Ý nghĩa: Hydro (nước) kết hợp Shield (lá chắn), truyền tải ngay công năng chống thấm.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-303",
    "name": "GAMA Perfect Base",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Nền tường hoàn hảo – Tạo bề mặt mịn đẹp cho mọi lớp sơn. Ý nghĩa: \"Perfect Base\" nhấn mạnh vai trò tạo nền hoàn hảo, phù hợp sản phẩm cao cấp.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-304",
    "name": "GAMA Prime Putty",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Bột trét chất lượng ổn định cho mọi công trình. Ý nghĩa: Prime là dòng chủ lực, dễ phát triển thị trường.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-305",
    "name": "GAMA Masterpiece",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Biến mỗi công trình thành một tác phẩm nghệ thuật. Ý nghĩa: Masterpiece truyền tải thông điệp về sự hoàn mỹ và sáng tạo.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-306",
    "name": "GAMA Ombria",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Sự che chở và bền vững , giúp công trình luôn tươi sáng , đẹp và ổn định theo thời gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-307",
    "name": "GAMA Elyra",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Gợi vẻ đẹp thanh lịch và tinh tế, đại diện cho không gian sống hiện đại, sang trọng và bền đẹp theo thời gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-308",
    "name": "GAMA Norvia",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Bền vững, đáng tin cậy, phù hợp cho mọi gia đình với hiệu quả và chi phí tối ưu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-309",
    "name": "GAMA Caelor",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Không gian thoáng sáng, dễ chịu và gần gũi.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-310",
    "name": "GAMA Virexa",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Sức sống mạnh mẽ, khả năng bảo vệ công trình trước nắng mưa và thời tiết khắc nghiệt.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-311",
    "name": "GAMA Ombria",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Sự che chở và bền vững, giúp công trình luôn đẹp và ổn định theo thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-312",
    "name": "GAMA Tectora",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Bảo vệ bề mặt công trình hiệu quả.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-313",
    "name": "GAMA Hydrion",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Khả năng chống nước và chống ẩm vượt trội.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-314",
    "name": "GAMA Plenza",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Thể hiện bề mặt phẳng mịn, tạo nền hoàn hảo trước khi sơn phủ.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-315",
    "name": "GAMA Mavique",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Sự chắc chắn, dễ thi công, tăng độ bám dính cho lớp sơn hoàn thiện.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-316",
    "name": "GAMA Ornexa",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Tôn vinh vẻ đẹp và giá trị thẩm mỹ cho không gian.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-317",
    "name": "GAMA Onyx",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Tượng trưng cho sức mạnh, sự sang trọng và bền bỉ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-318",
    "name": "GAMA Quartz",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Biểu tượng của sự tinh khiết và ổn định.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-319",
    "name": "GAMA Flint",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tượng trưng cho sự bền chắc và khởi đầu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-320",
    "name": "GAMA Aegis",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Bảo vệ tối đa trước nắng mưa",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-321",
    "name": "GAMA Valor",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Sức mạnh và sự kiên cường trước thời tiết",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-322",
    "name": "GAMA Boreal",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Gợi không khí trong lành và sự bền bỉ.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-323",
    "name": "GAMA Invicta",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Có nghĩa là \"không thể bị chinh phục\". Thể hiện khả năng chống thấm bền bỉ trong thời gian dài.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-324",
    "name": "GAMA Silvanta",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Hoàn thiện tinh luyện, bề mặt mịn cao cấp",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-325",
    "name": "GAMA Gravix",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Nền tảng ổn định, làm phẳng cơ bản",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-326",
    "name": "GAMA Lumen",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Ánh sáng ấm áp lan tỏa trong không gian sống, tạo cảm giác dễ chịu, thân thuộc cho ngôi nhà",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-327",
    "name": "GAMA Max",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Đại diện cho chất lượng tối đa, khả năng che phủ vượt trội, bền màu, lau chùi tốt và mang đến không gian sống đẳng cấp.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-328",
    "name": "GAMA Pro",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Thể hiện sự chuyên nghiệp, cân bằng giữa chất lượng, độ bền và giá trị, phù hợp cho đa số công trình và nhà ở.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-329",
    "name": "GAMA Go",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tượng trưng cho sự khởi đầu, đáp ứng đầy đủ các nhu cầu sơn nội thất hằng ngày với chất lượng ổn định và chi phí hợp lý.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-330",
    "name": "GAMA Elite Pro",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện chuẩn chuyên nghiệp, bền đẹp vượt trội và bảo vệ tối ưu.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-331",
    "name": "GAMA Strong",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Là dòng sơn ngoại thất chiến lược, bền chắc, bảo vệ tối ưu và giữ màu dài lâu.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-332",
    "name": "GAMA Home",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Là lớp sơn giúp bảo vệ tường khỏi nắng, mưa và rêu mốc, đồng thời giữ màu bền đẹp, tăng tính thẩm mỹ và kéo dài tuổi thọ công trình.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-333",
    "name": "GAMA Dry",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Là dòng sơn chống thấm cao cấp, giúp bề mặt luôn khô ráo, ngăn nước thấm hiệu quả và bảo vệ công trình bền vững theo thời gian.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-334",
    "name": "GAMA Smooth Pro",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bột trét cao cấp, mịn đẹp vượt trội, bám dính tốt và hoàn thiện bề mặt chuyên nghiệp.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-335",
    "name": "GAMA Finish",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Tối ưu bề mặt nền, nâng cao chất lượng hoàn thiện và đảm bảo độ bền cho toàn hệ sơn.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-336",
    "name": "GAMA Style",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Tôn vinh phong cách riêng, mang lại không gian sống thẩm mỹ và hiện đại.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-337",
    "name": "GAMA Zenith",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Biểu tượng cho đỉnh cao, chất lượng vượt trội",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-338",
    "name": "GAMA Horizon",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Biểu tượng của sự cân bằng , tầm nhìn và phát triển",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-339",
    "name": "GAMA Dawn",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Biểu tượng cho sự tươi mới, hy vọng và năng lượng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-340",
    "name": "GAMA Stratus",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Tầng mây bao phủ, gợi khả năng che chở và bảo vệ ngôi nhà",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-341",
    "name": "GAMA Cirrus",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Biểu tượng của sự nhẹ nhàng và thanh thoát",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-342",
    "name": "GAMA Skara",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Tạo cảm giác bền bỉ và tinh tế",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-343",
    "name": "GAMA Virelia",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Mịn tinh xảo , tái tạo bề mặt",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-344",
    "name": "GAMA Nerix",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Liên kết bề mặt, che khuyết điểm",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-345",
    "name": "GAMA Homelia",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Gợi sự mềm mại, gắn kết và lan tỏa",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-346",
    "name": "GAMA Good Value",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Giá trị xứng đáng Ý nghĩa: Đáng đồng tiền bát gạo",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-347",
    "name": "GAMA Friend Lines",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Gần gũi và thân thiện Ý nghĩa: Tạo nên sự kết nối ấm áp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-348",
    "name": "GAMA Mịn Đẹp",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mịn như nhung, đẹp hoàn hảo. Bề mặt siêu mịn, lau chùi >10.000 lần, kháng khuẩn, mùi gần như = 0 **Slogan**: \"Mịn Đẹp - Mịn như nhung, sang như ý.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-349",
    "name": "GAMA An Nhà",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "An toàn cho cả gia đình .Tầm trung, không mùi, dễ lau chùi. **Slogan**: \"An Nhà - An tâm trong từng hơi thở.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-350",
    "name": "GAMA Sáng Nhà",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Sáng nhà, giá hợp lý , thấp nhất , độ phủ tốt, màu trắng sáng, giá mềm. **Slogan**: \"Sáng Nhà - Bừng sáng mọi góc.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-351",
    "name": "GAMA Trường Sơn",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Trường Sơn vững chắc như núi, trường tồn. Sản phẩm cao nhất, chống tia UV, đàn hồi chống nứt, chống bám bụi nano. Thợ thầu công trình xịn dùng. **Slogan**: \"Trường Sơn - Vững bền vượt nắng mưa.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-352",
    "name": "GAMA Bền Màu",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Bền màu, không phai. Sản phẩm tầm trung. Chống phai màu, chống rêu mốc, chống thấm. **Slogan**: \"Bền Màu - Đẹp bền cùng năm tháng.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-353",
    "name": "GAMA Khiên Vàng",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Lá chắn bảo vệ tường.Chống thấm, chống kiềm tốt. Giá mềm dể đấu thầu, nhà giá rẻ. **Slogan**: \"Khiên Vàng - Lá chắn cho tổ ấm.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-354",
    "name": "GAMA Aqua khóa thấm",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Khóa kín chân lông tường, chống thấm ngược, thấm sàn. **Slogan**: \"Khóa Sàn - Khô sàn, chắc nhà.\"",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-355",
    "name": "GAMA Mịn Lì",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bề mặt mịn lì, không tì vết, xả nhẹ như phấn. **Slogan**: \"Mịn Lì - Nền phẳng như gương.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-356",
    "name": "GAMA Phẳng Nhà",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Dễ trét, dễ xả, phẳng nhanh. **Slogan**: \"Phẳng Nhà - Trét tới đâu phẳng tới đó.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-357",
    "name": "GAMA Nghệ Thuật",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "**Slogan**\"Nghệ thuật tô vẽ cảm hứng cho ngôi nhà bạn.\"",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-358",
    "name": "GAMA Pink",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Pink: Sắc hồng thanh lịch, mang đến không gian sống ấm áp, tinh tế và đầy cảm hứng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-359",
    "name": "GAMA Red",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Red: Gam đỏ rực rỡ, mang đến nguồn năng lượng tích cực và may mắn cho không gian sống.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-360",
    "name": "GAMA Yellow",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Yelellow: Sắc vàng tươi sáng, biểu trưng cho sự giàu có, thịnh vượng và hạnh phúc.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-361",
    "name": "GAMA Green",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Green: Sắc xanh tươi mát, mang đến cuộc sống yêu đời và tràn đầy sức sống.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-362",
    "name": "GAMA Blue",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Blue: Sắc xanh thanh bình, nâng tầm không gian sống, cho cuộc sống luôn xanh tươi và tràn đầy cảm hứng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-363",
    "name": "GAMA Purple",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Purple: Sắc tím thủy chung, đồng hành cùng những bức tường bền đẹp của ngôi nhà bạn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-364",
    "name": "GAMA AquaWhite",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "White: Sắc trắng tinh khôi, kiến tạo không gian sống tươi sáng, thanh lịch và tràn đầy sức sống.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-365",
    "name": "GAMA Gloscoat Us",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa - Độ bóng bẩy của sơn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-366",
    "name": "GAMA Topcoat Us",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa - Lớp phủ tươi sáng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-367",
    "name": "GAMA Duarapol Us",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Ý nghĩa - Độ bóng, độ cứng, độ bền",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-368",
    "name": "GAMA Aurex",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ánh vàng, sang trọng, cao cấp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-369",
    "name": "GAMA Livora",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Mang lại không gian sống",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-370",
    "name": "GAMA Livio",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tổ ấm, thân thiện",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-371",
    "name": "GAMA Fortex",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Bền vững như pháo đài.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-372",
    "name": "GAMA Duron",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Độ bền cao",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-373",
    "name": "GAMA Cladia",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Bao phủ, bảo vệ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-374",
    "name": "GAMA Hydrox",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Chuyên chống thấm nước",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-375",
    "name": "GAMA Smootex",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bề mặt mịn",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-376",
    "name": "GAMA Fillon",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Lấp đầy khuyết điểm",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-377",
    "name": "GAMA Eloria",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Vẻ đẹp tinh tế, đẳng cấp",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-378",
    "name": "GAMA Epoch",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Ý Nghĩa - Kỷ nguyên mới. Tạo cảm giác thương hiệu lớn, có tầm nhìn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-379",
    "name": "GAMA Tô Dấu Thời Gian",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tên như ý nghĩa",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-380",
    "name": "GAMA Legacy",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa - Di sản để lại, giá trị vượt thời gian, một lần chọn, mãi tin dùng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-381",
    "name": "GAMA Fortis",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa - Mạnh mẽ, bền bỉ, trường tồn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-382",
    "name": "GAMA Crafted for Life",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ý nghĩa - (Được tạo ra cho cuộc sống)",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-383",
    "name": "GAMA Noble",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa - Cao quý, đẳng cấp.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-384",
    "name": "GAMA Corium",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa -  Lấy cảm hứng từ lớp lõi bền chắc (tên sáng tạo, nghe quốc tế). - GAMA HARMONY",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-385",
    "name": "GAMA Foundation",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa -  Một nền tảng tốt không cần thay thế.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-386",
    "name": "GAMA Vanta",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa - Hiện đại, độc đáo, dễ nhớ.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-387",
    "name": "GAMA An",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Không gian sống an yên, an toàn và đẳng cấp. Dòng sơn cao cấp dành cho tổ ấm.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-388",
    "name": "GAMA Hòa",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Màu sắc hài hòa, không gian cân bằng, mang lại cảm giác dễ chịu và gần gũi.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-389",
    "name": "GAMA Mộc",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Gần gũi thiên nhiên, mộc mạc và chân thực. Phù hợp cho mọi công trình.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-390",
    "name": "GAMA Trường",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Bảo vệ công trình trường tồn trước thời gian và thời tiết.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-391",
    "name": "GAMA Kiên",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Kiên cố, bền vững trước nắng mưa và môi trường khắc nghiệt.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-392",
    "name": "GAMA Phong",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Chịu nắng gió, hòa cùng thiên nhiên.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-393",
    "name": "GAMA Giáp",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Lớp giáp bảo vệ",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-394",
    "name": "GAMA Mịn",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Bề mặt mịn, hoàn thiện cao.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-395",
    "name": "GAMA Phẳng",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Tạo nền phẳng, dễ thi công.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-396",
    "name": "GAMA Nét",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Tạo nét riêng cho không gian.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-397",
    "name": "GAMA Lucen",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Dòng sơn cao cấp thì thiên về độ sáng. Ý nghĩa: Mang đến không gian sáng bừng, sạch sẽ và hiện đại. Thông điệp hướng đến: Ánh sáng mang đến giá trị ngôi nhà bạn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-398",
    "name": "GAMA Feron",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Mang thiên hướng sức mạnh như sắt thép, lớp sơn cao cấp như tượng đài kiên cố bảo vệ bên ngoài ngôi nhà của bạn",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-399",
    "name": "GAMA Matcha",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "''Không gian sống xanh''- Hướng đến sự trẻ trung, tươi mát và thanh lịch cho ngôi nhà bạn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-400",
    "name": "GAMA Supa",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Toát lên được nét đẹp siêu cấp, khẳng định tầm chiến lược trên thương trường.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-401",
    "name": "GAMA Bossca",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tạo cảm giác gần gũi, dễ nhớ với người dùng nhưng vẫn thể hiện được sự đẳng cấp vượt trội về mặt chất lượng của dòng sơn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-402",
    "name": "GAMA Rainca",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Vượt qua mọi thời tiết nắng-mưa- gió, bảo vệ vững chắc ngôi nhà bạn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-403",
    "name": "GAMA Rumbo",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Thể hiện được đẳng cấp mang xu hướng châu âu, cam kết sự kiên cố-vững chãi-thách thức thời tiết của dòng sơn.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-404",
    "name": "GAMA Berru",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Mang lại cảm giác màng sơn đanh chắc, bám dính siêu cường và bền bỉ trước nắng mưa",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-405",
    "name": "GAMA Aquaking",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Thể hiện được khả năng chống thấm nước cực tốt cho dòng sơn.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-406",
    "name": "GAMA Costo",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Thể hiện được một năng lượng tích cực, hoàn hảo cho bột trét tường – cam kết độ đanh chắc, liên kết siêu cường và làm phẳng bề mặt khi thi công.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-407",
    "name": "GAMA Lindo",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Khẳng định được độ mịn, dẻo dai và bám dính cực tốt.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-408",
    "name": "GAMA Kitana",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Thể hiện được sự uyển chuyển, mềm mại trong nghệ thuật. Giúp hình dung ra được cái đẹp, sự tinh tế màu sắc trong ngành sơn trang trí.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-409",
    "name": "GAMA Lưu Sắc",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Thể hiện lưu giữ màu sắc theo thơi gian",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-410",
    "name": "GAMA Go!",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Chúng tôi đã sẵn sàng tân trang ngôi nhà cùng bạn",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-411",
    "name": "GAMA Refined",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện tính thẩm mỹ cao, bề mặt láng bóng/mịn màng (lớp sơn sau khi hoàn thiện mang vẻ đẹp tinh tế, láng mịn, cao cấp và có độ che phủ tốt).",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-412",
    "name": "GAMA Emerald",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Thể hiện sự tươi mới, sinh sôi nảy nở và hòa hợp với thiên nhiên.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-413",
    "name": "GAMA Luminous",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Dùng để miêu tả màu sắc nổi bật, phát ra ánh sáng hoặc phản chiếu ánh sáng rực rỡ",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-414",
    "name": "GAMA Vera",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "“Tôn vinh vẻ đẹp thật của mọi không gian.”",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-415",
    "name": "GAMA Gia Sắc",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Màu của mái ấm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-416",
    "name": "GAMA Veliora",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Nơi màu sắc đạt đến đẳng cấp ánh sáng",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-417",
    "name": "GAMA Ký Sắc",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "“Chọn màu sơn, là chọn ký ức bạn muốn giữ”",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-418",
    "name": "GAMA Anvia",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Khởi nguồn bình yên từ sắc màu.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-419",
    "name": "GAMA Heritage Home",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "“Nơi lưu giữ giá trị gia đình qua nhiều thế hệ.”",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-420",
    "name": "GAMA Haven",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Nơi bình yên bắt đầu từ sắc màu",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-421",
    "name": "GAMA Thịnh Vượng",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Cái tên này mang lời chúc tốt đẹp về sự giàu sang, may mắn và phát đạt cho chủ nhà. Khi thợ sơn hay đại lý tư vấn tên này, khách hàng sẽ rất thích vì ai cũng muốn ngôi nhà của mình mang lại sự \"Thịnh Vượng\". Đẳng cấp giàu sang",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-422",
    "name": "GAMA An Gia",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "\"An\" là an tâm, an toàn; \"Gia\" là nhà. Ý nghĩa là dòng sơn quốc dân, mang lại sự bảo vệ an tâm cho mọi ngôi nhà với chi phí tối ưu. Bảo vệ tổ ấm \"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-423",
    "name": "GAMA Sơ Tâm",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "\"Sơ\" là ban đầu, yếu tố đầu tiên. Tên gọi gợi cảm giác mộc mạc, tinh khôi và là bước khởi đầu không thể thiếu. Khởi đầu vững chắc \"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-424",
    "name": "GAMA Optima",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Dòng sơn cao cấp tối ưu hóa mọi tính năng ( như chống UV, phai màu, dễ lâu chùi... )",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-425",
    "name": "GAMA Platform",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Sản phẩm nền tảng, chiến lược",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-426",
    "name": "GAMA Pure",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ý nghĩa là dòng sơn cơ bản, mộc mạc và tinh tế, chỉ cần một bề mặt sơn mịn màng, tinh khôi và tiết kiệm chi phí.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-427",
    "name": "GAMA Titan",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa - Cực kỳ cứng cáp, mạnh mẽ, không thể bị phá hủy.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-428",
    "name": "GAMA Vital",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "\"Vital\" mang nghĩa là sống còn, cực kỳ trọng yếu, thiếu nó thì không thể tồn tại. Từ này nghe rất sang và mang tính kỹ thuật cao.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-429",
    "name": "GAMA Must",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "\"Must have\" là thuật ngữ chỉ một sản phẩm bắt buộc phải sở hữu, không thể thay thế. Tên này tạo sự tò mò, độc lạ",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-430",
    "name": "GAMA Flash",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Dòng sơn khiến không gian bừng sáng ngay lập tức, tạo hiệu ứng thu hút sự chú ý của người nhìn vào bức tường trang trí.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-431",
    "name": "GAMA Bridget",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Lớp sơn thể hiện quyền lực, sức mạnh và sự độc lập của người sử dụng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-432",
    "name": "GAMA Purity",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Lớp sơn mang vẻ đẹp tự nhiên, trong sáng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-433",
    "name": "GAMA Swiftness",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Sơn nhanh chóng, tiện lợi phù hợp đại đa số nhu cầu KH",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-434",
    "name": "GAMA Vibrant color",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Những màu rực rỡ và tràn đầy năng lượng, thường gợi cảm giác sống động, bắt mắt, truyền tải sự năng động, nhiệt huyết, niềm vui và sự hiện đại.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-435",
    "name": "GAMA SunShield",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Tấm chắn, bảo bệ trước ánh nắng mặt trời",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-436",
    "name": "GAMA WaterLock",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Khóa nước chức năng chống thấm nước",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-437",
    "name": "GAMA SunGold",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Màu vàng rực rỡ",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-438",
    "name": "GAMA EcoShield",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Lớp sơn bảo vệ thân thiện với môi trường",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-439",
    "name": "GAMA SuperShield",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Sơn siêu bền bỉ bất chấp mọi thời tiết",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-440",
    "name": "GAMA Laura",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Gợi hình ảnh nhẹ nhàng, sang trọng, tính tế, sức sống bền bỉ như cây nguyệt quế",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-441",
    "name": "GAMA Liora",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Gợi ánh sáng, vẻ đẹp tinh tế, gợi không gian sáng đẹp, tràn đầy sức sống",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-442",
    "name": "GAMA Sonila",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Gợi hình ảnh ánh sáng, vẻ đẹp, sự tinh tế, không gian ấm áp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-443",
    "name": "GAMA EverColor",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Nơi màu sắc luôn tỏa sáng, bền vững theo thời gian Ever: nghĩa là \"mãi mãi\", \"luôn luôn\", \"bền vững\", \"không ngừng\". Color: nghĩa là \"màu sắc\".",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-444",
    "name": "GAMA Walllora",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Giải pháp lớp phủ dành cho những bức tường đẹp, Mang màu sắc, độ bền và sự tinh tế đến mọi công trình.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-445",
    "name": "GAMA Aqualis",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Thể hiện sự tinh khiết, bảo vệ bền vững, lớp phủ mượt mà, bền đẹp theo thời gian, vừa chống thấm, vừa tinh tế",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-446",
    "name": "GAMA Elina",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Gợi hình ảnh tinh tế, thanh khiết, dịu dàng và cao cấp.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-447",
    "name": "GAMA PureShield",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Sơn bảo vệ, thân thiện môi trường Pure: tinh khiết, sạch, thuần khiết, trong lành. Shield: lá chắn, sự bảo vệ.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-448",
    "name": "GAMA Luxora Coatings",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Nơi vẻ đẹp trường tồn",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-449",
    "name": "GAMA UltraShine",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Tươi sáng, bền màu",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-450",
    "name": "GAMA Reigns",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Đẳng cấp hoàng gia",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-451",
    "name": "GAMA Regal",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "\"Regal\" mang tính chất hoàng gia. Tên gọi này gợi cảm giác về một không gian sống lộng lẫy, quý phái và bền vững theo thời gian.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-452",
    "name": "GAMA Wise",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Lựa chọn thông minh cho mọi không gian sống.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-453",
    "name": "GAMA Good",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Tiêu chuẩn tốt trong từng lớp sơn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-454",
    "name": "GAMA Zeta",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa thương hiệu cam kết cung cấp các sản phẩm bảo vệ công trình bền vững, vững chãi như núi non và hiện đạ",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-455",
    "name": "GAMA Infinity",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Mang ý nghĩa vẻ đẹp bền vững theo thời gian, không giới hạn khả năng sáng tạo cho mọi không gian sống.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-456",
    "name": "GAMA Power",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "POWER nhấn mạnh sự sức mạnh bảo vệ và hiệu năng của sản phẩm",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-457",
    "name": "GAMA Elite",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "ELITE bền bỉ và hiện đại nhất cho các công trình",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-458",
    "name": "Game Durable",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Durable nhằm nhấn mạnh tiêu chuẩn chất lượng: tạo ra lớp nền vững chãi, bảo vệ bề mặt công trình luôn phẳng mịn và kéo dài tuổi thọ cho lớp sơn hoàn thiện.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-459",
    "name": "GAMA Pioneer",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "PIONEER thể hiện đặc tính ưu việt của vật liệu, mang lại bề mặt nhẵn mịn tuyệt đối và làm lớp nền hoàn hảo cho sơn phủ",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-460",
    "name": "GAMA Neon",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Là sự kết hợp giữa nền tảng vững chắc (bảo vệ ngôi nhà) và phong cách đột phá (thể hiện cá tính nổi bật, gu thẩm mỹ hiện đại của gia chủ).",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-461",
    "name": "GAMA Titan",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Mạnh mẽ như titan, độ bền vượt trội",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-462",
    "name": "GAMA Spread",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Lan tỏa chất sơn cho Ngôi nhà chất hơn",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-463",
    "name": "GAMA Elle",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Nền tảng bền vững + sự tinh tế của không gian sống",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-464",
    "name": "GAMA Elle Canvasa",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Nội thất nghệ thuật cao cấp",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-465",
    "name": "GAMA Aurora",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Bình minh, vẻ đẹp và hy vọng.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-466",
    "name": "GAMA Legacy Lounge",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ngôi nhà lưu giữ di sản và ký hướng",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-467",
    "name": "GAMA Endurance",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Sự bền bỉ, kiên cường.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-468",
    "name": "GAMA Timeless",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Không bị giới hạn bởi thời gian.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-469",
    "name": "GAMA Everlasting",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Bền vững mãi mãi.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-470",
    "name": "GAMA Aurelia",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ánh vàng quý giá",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-471",
    "name": "GAMA IronWall",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Bức tường sắt.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-472",
    "name": "GAMA Pureva",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Không gian tinh khiết, sống trọn an tâm",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-473",
    "name": "GAMA Solaris",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "SOLARIS gợi từ Solar / Sol = Mặt trời, ánh sáng mặt trời, lấy cảm hứng từ mặt trời đại diện cho độ bền, vẻ đẹp và khả năng bảo vệ vượt trội cho công trình ngoại thất, SOLARIS: nghe phù hợp dòng cao cấp, dễ build bao bì, dễ phân cấp sản phẩm",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-474",
    "name": "GAMA Anora",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Sơn nội thất, ấm áp từng góc nhà",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-475",
    "name": "GAMA Forta",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ngoại thất sáng trong bền vững theo thời gian",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-476",
    "name": "GAMA Gam",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Đa dạng màu sắc định hình phong cách của bạn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-477",
    "name": "GAMA Sun",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Lớp áo giáp bảo vệ bên ngoài",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-478",
    "name": "GAMA Mino",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Thể hiện độ mịn màng bề mặt che lắp đi khuyết điểm",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-479",
    "name": "GAMA Premia",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Thể hiện vị thế cao cấp, chất lượng vượt trội.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-480",
    "name": "GAMA Aureum",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Từ Latin nghĩa là \"vàng\", biểu tượng của sự thịnh vượng, đẳng cấp và giá trị bền vững.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-481",
    "name": "GAMA Primora",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Đẳng cấp hàng đầu.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-482",
    "name": "GAMA Dreamers",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "Mang ý nghĩa người mơ mộng. -Chỉ những người có hoài bão lớn, dám nghĩ dám làm và kiên trì theo đuổi ước mơ -người có trí tưởng tượng phong phú",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-483",
    "name": "GAMA Velvet",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mịn như nhung, đẳng cấp vượt trội+\"Velvet\" nghĩa là nhung – biểu tượng của sự mềm mại và sang trọng. Tên GAMA Velvet thể hiện bề mặt sơn mịn đẹp, tinh tế, giúp không gian trở nên đẳng cấp và hiện đại hơn.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-484",
    "name": "GAMA EverCoat",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "\"Lớp phủ bảo vệ trường tồn, khả năng che phủ tối đa, bền đẹp theo thời gian \"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-485",
    "name": "GAMA Silvora",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Silver (bạc, sáng bóng, cao cấp) Hậu tố -ora (thường dùng trong tên thương hiệu, tạo cảm giác hiện đại, sang trọng",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-486",
    "name": "GAMA Avora",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Chữ AVORA được lấy cảm hứng từ “Aura” (hào quang), gợi sắc trắng tinh khiết, vẻ đẹp tinh khôi và sự sang trọng của không gian sống hiện đại.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-487",
    "name": "GAMA Aurelis",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Mang vẻ đẹp sang trọng như ánh vàng (Aure gợi ý từ từ : Aurum = vàng: Giá trị và tinh khiết) hướng đến không gian tinh tế và nghệ thuật sống hiện đại, Sang ngầm trong từng lớp sơn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-488",
    "name": "GAMA Sunvexa",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "SUN = Mặt trời, tia UV + VEXA (cảm hứng từ : Vex/Vexation - Khống chế, vô hiệu hóa & Apex - Đỉnh cao công nghệ). => Ý nghĩa: Công nghệ bảo vệ đỉnh cao cho ngoại thất CAO CẤP, giúp lớp sơn bền màu, chống nắng nóng và giữu vẻ đẹp lâu dài “Kiêu hãnh, bền bỉ, độc bản dưới ánh mặt trời.”",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-489",
    "name": "GAMA Aqua Sealvex",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Seal khóa chặt, bít kín + Vex (Công nghệ/ kiểm soát)/ Vexillum (che chắn,bảo vệ) Khóa nước - bảo vệ công trình khỏi ẩm thấm từ mọi khe hở, bền vững theo thời gian",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-490",
    "name": "GAMA Classy",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "ĐẲNG CẤP, THANH LỊCH ,THẨM MỶ",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-491",
    "name": "GAMA Ecosaver",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "TIẾT KIỆM HIỆU QUẢ",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-492",
    "name": "GAMA Aquaproof",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "NGĂN CHẶN NƯỚC VỮNG CHẮC",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-493",
    "name": "GAMA Cosmos",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Sang trọng, bí ẩn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-494",
    "name": "GAMA Calm Space",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Không gian bình yên, nơi để về",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-495",
    "name": "GAMA Aegis",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Che chắn, bảo vệ, phòng thủ",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-496",
    "name": "GAMA Promise",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Sự bảo chứng",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-497",
    "name": "GAMA Elite",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Elite = Tinh hoa, ưu tú. * Đại diện cho dòng sơn cao cấp với công nghệ, độ bền và tính thẩm mỹ nổi bật.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-498",
    "name": "GAMA Home",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Home = Ngôi nhà. * Thể hiện dòng sơn dành cho mọi gia đình, đáp ứng nhu cầu sử dụng mọi nhà",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-499",
    "name": "GAMA Plus",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Ý nghĩa nhiều hơn tốt hơn",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-500",
    "name": "GAMA Core",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Đại diện cho dòng sản phẩm chất lượng ổn định, đáp ứng các nhu cầu cơ bản của khách hàng.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-501",
    "name": "GAMA Ultra",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "Ultra = Vượt trội, cao hơn mức thông thường.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-502",
    "name": "GAMA EcoPlus Nano",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Nâng tầm ngôi nhà bạn lên chuẩn công nghệ tương lai",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-503",
    "name": "GAMA Elysia",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Là vùng đất thiên nhiên trong thần thoại Hy Lạp, nơi dành cho những con người ưu tú.Ý nghĩa: kiến tạo không gian đáng sống,đẳng cấp,bình yên và hoàn mỹ.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-504",
    "name": "GAMA Lyra",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa là cây đàn của thần Apollo,biểu tượng của nghệ thuật,hài hòa.Thông điệp:hài hòa trong từng gam màu",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-505",
    "name": "GAMA Aura",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "Hào quang,luồng năng lượng bao quanh mọi vật.Ý nghĩa:đơn giản nhưng luôn tạo cảm giác tươi mới.",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-506",
    "name": "GAMA Aegis",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "Tấm khiên bảo vệ thần Zeus.Ý nghĩa: lá chắn bảo vệ công trình,bảo vệ bền vững.",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-507",
    "name": "GAMA Poseidon",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa thần biển cả,khống chế nước,chống lại sự xâm nhập của nước,làm chủ sức mạnh của nước.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-508",
    "name": "GAMA Gaia",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa mẹ của trái đất,mọi công trình đều bắt đầu từ nền móng vững chắc,nền móng tạo nên sự hoàn hảo.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-509",
    "name": "GAMA Kronos",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "Ý nghĩa TITAN của thời gian,độ bền theo thời gian,bền đẹp theo năm tháng.",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-510",
    "name": "GAMA Apollo",
    "category": "Sơn trang trí",
    "tier": "Cao cấp",
    "reason": "Ý nghĩa là thần ánh sáng,nghệ thuật và cái đẹp. Đưa nghệ thuật vào từng bức tường,tỏa sáng không gian sống.",
    "categoryClass": "bg-amber-100 text-amber-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-511",
    "name": "GAMA Emperor",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Cấp bậc cao nhất trong hệ thống hoàng gia, tượng trưng cho sự hoàn hảo, quyền lực và đẳng cấp tối thượng. Thông điệp: \"Đỉnh cao vẻ đẹp cho không gian sống.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-512",
    "name": "GAMA King",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "\"King\" là Quốc Vương người cai trị vương quốc bằng sự ổn định, uy tín và đáng tin cậy. Thông điệp:\"Chất lượng vững vàng cho mọi tổ ấm.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-513",
    "name": "GAMA Prince",
    "category": "Sơn nội thất",
    "tier": "Cơ bản",
    "reason": "\"Prince\" là Hoàng Tử biểu tượng của sự trẻ trung, năng động và dễ tiếp cận. Thông điệp: \"Giải pháp kinh tế cho mọi công trình.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-514",
    "name": "GAMA Imperial Shield",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "\"Imperial\" đại diện cho Hoàng Gia tối cao. \"Shield\" là tấm khiên bảo vệ. Thông điệp: \"Lá chắn hoàng gia cho mọi công trình.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-515",
    "name": "GAMA Royal Guard",
    "category": "Sơn ngoại thất",
    "tier": "Chiến lược",
    "reason": "\"Royal Guard\" là đội cận vệ Hoàng Gia – luôn bảo vệ lâu đài và vương quốc. Thông điệp: \"Bảo vệ bền bỉ theo năm tháng.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-516",
    "name": "GAMA Knight",
    "category": "Sơn ngoại thất",
    "tier": "Cơ bản",
    "reason": "\"Knight\" là Hiệp Sĩ người bảo vệ trung thành và mạnh mẽ. Thông điệp: \"Bền bỉ mỗi ngày, tiết kiệm chi phí.\"",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-slate-100 text-slate-800"
  },
  {
    "id": "gama-517",
    "name": "GAMA Bastion",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "\"\"Bastion\"\" là thành lũy phòng thủ, lớp bảo vệ đầu tiên của một pháo đài. Thông điệp: \"Lớp thành lũy vững chắc cho ngôi nhà.\"",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-518",
    "name": "GAMA Crown Base",
    "category": "Bột trét",
    "tier": "Cao cấp",
    "reason": "\"Crown\" là Vương Miện – biểu tượng của sự hoàn hảo. \"Base\" là nền tảng.Thông điệp: \"Nền tảng hoàn hảo cho lớp sơn đẳng cấp.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-519",
    "name": "GAMA Noble Base",
    "category": "Bột trét",
    "tier": "Chiến lược",
    "reason": "\"Noble\" là tầng lớp quý tộc – ổn định, đáng tin cậy.Thông điệp: \"Nền chắc vững vàng cho mọi công trình.\"",
    "categoryClass": "bg-stone-100 text-stone-800",
    "tierClass": "bg-blue-100 text-blue-800"
  },
  {
    "id": "gama-520",
    "name": "GAMA Shield",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Shield tượng trưng cho lớp bảo vệ như lá chắn, ngăn nước",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-521",
    "name": "GAMA Vera",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "VERA gợi sự chân thật, bền vững,ngắn gọn dễ đọc",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-522",
    "name": "GAMA Endura",
    "category": "Sơn ngoại thất",
    "tier": "Cao cấp",
    "reason": "ENDURA truyền tải thông điệp \" bền bỉ theo thời gian\",chuyên gia về độ bền",
    "categoryClass": "bg-sky-100 text-sky-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-523",
    "name": "GAMA Aquafortis",
    "category": "Sơn chống thấm",
    "tier": "Cao cấp",
    "reason": "Tên nổi bật, truyền tải thông điệp bảo vệ kiên cố, bền vững và chống chọi với mọi điều kiện thời tiết.",
    "categoryClass": "bg-indigo-100 text-indigo-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-524",
    "name": "GAMA Vĩnh Cửu",
    "category": "Sơn nội thất",
    "tier": "Cao cấp",
    "reason": "Vĩnh Cửu mang thông điệp \"Màu sơn Gama vĩnh cửu theo thời gian.\"",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-purple-100 text-purple-800"
  },
  {
    "id": "gama-525",
    "name": "GAMA ColorVN",
    "category": "Sơn nội thất",
    "tier": "Chiến lược",
    "reason": "Color nghĩa là màu sắc, VN là Việt Nam. Mang ý nghĩa \" Màu sơn Gama của Việt Nam mãi mãi đỉnh\".",
    "categoryClass": "bg-emerald-100 text-emerald-800",
    "tierClass": "bg-blue-100 text-blue-800"
  }
];
