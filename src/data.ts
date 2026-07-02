export interface Suggestion {
  id: string;
  name: string;
  category: string;
  tier: string;
  reason: string;
  slogan?: string;
  votes: number;
}

export const paintCategories = [
  { id: 'all', name: 'Tất Cả Nhóm', value: '' },
  { id: 'interior', name: 'Sơn Nội Thất', value: 'Nội thất' },
  { id: 'exterior', name: 'Sơn Ngoại Thất', value: 'Ngoại thất' },
  { id: 'waterproof', name: 'Sơn Chống Thấm', value: 'Chống thấm' },
  { id: 'putty', name: 'Bột Trét & Matit', value: 'Bột trét/Matit' },
  { id: 'decorative', name: 'Sơn Trang Trí', value: 'Sơn trang trí' }
];

export const paintTiers = [
  { id: 'all', name: 'Tất Cả Phân Khúc', value: '' },
  { id: 'premium', name: 'Cao Cấp (Premium)', value: 'Cao cấp' },
  { id: 'strategic', name: 'Chiến Lược (Strategic)', value: 'Chiến lược' },
  { id: 'basic', name: 'Cơ Bản (Basic)', value: 'Cơ bản' }
];

export const suggestionsData: Suggestion[] = [
  {
    id: 's1',
    name: 'GAMA Care',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Chăm sóc tổ ấm',
    votes: 0
  },
  {
    id: 's2',
    name: 'GAMA Vision',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Tầm nhìn kiến trúc vững chãi',
    votes: 0
  },
  {
    id: 's3',
    name: 'GAMA AquaMatrix',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Mạng lưới kháng nước',
    votes: 0
  },
  {
    id: 's4',
    name: 'GAMA Layer',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Độ bám dính tốt',
    votes: 0
  },
  {
    id: 's5',
    name: 'GAMA Sparkle',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Lấp lánh, độc đáo',
    votes: 0
  },
  {
    id: 's6',
    name: 'GAMA LUXOR',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ánh sáng và sự sang trọng',
    votes: 0
  },
  {
    id: 's7',
    name: 'GAMA SORA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Bầu trời không gian rộng mở',
    votes: 0
  },
  {
    id: 's8',
    name: 'GAMA VISTA',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tầm nhìn mở rộng',
    votes: 0
  },
  {
    id: 's9',
    name: 'GAMA ELARA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Dẫn lối đến những chân trời mới',
    votes: 0
  },
  {
    id: 's10',
    name: 'GAMA EVORA',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Tiến hóa không ngừng',
    votes: 0
  },
  {
    id: 's11',
    name: 'GAMA KAIRO',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Thời điểm vàng để bứt phá',
    votes: 0
  },
  {
    id: 's12',
    name: 'GAMA AQUALUXA',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Giải pháp chống thấm cao cấp, mang đến sự bảo vệ toàn diện và bền vững cho mọi công trình.',
    votes: 0
  },
  {
    id: 's13',
    name: 'GAMA VALORA',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Giá trị tạo nên sức hút',
    votes: 0
  },
  {
    id: 's14',
    name: 'GAMA AVIRA',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Khát vọng vươn cao',
    votes: 0
  },
  {
    id: 's15',
    name: 'GAMA LUMIA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chạm đến vẻ đẹp tinh tế',
    votes: 0
  },
  {
    id: 's16',
    name: 'GAMA Luxury',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Sang trọng và tinh tế',
    votes: 0
  },
  {
    id: 's17',
    name: 'GAMA Canvas',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Nghệ thuật và tự do sáng tạo cuộc sống (Định vị bức tường nhà bạn chính là một tác phẩm nghệ thuật, màng sơn mịn màng như lớp nền hoàn hảo để gia đình tự do trang trí cuộc sống)',
    votes: 0
  },
  {
    id: 's18',
    name: 'GAMA Prime',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Giá trị nền tảng, che phủ tối ưu và bảo vệ thiết yếu với chi phí tiết kiệm',
    votes: 0
  },
  {
    id: 's19',
    name: 'GAMA Helios',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Helios (nguồn gốc Hy Lạp) là Thần Mặt Trời trong thần thoại Hy Lạp, đại diện cho: Mang ý nghĩa " Dòng sơn mang sức mạnh ánh mặt trời, bảo vệ công trình trước thời tiết khắc nghiệt."',
    votes: 0
  },
  {
    id: 's20',
    name: 'GAMA MaxPaint',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'MaxPaint lấy từ ghép Max (Maximum) → tối đa, vượt trội, mạnh mẽ Paint → sơn, lớp phủ bề mặt. Mang ý nghĩa “Dòng sơn tối ưu – hiệu quả phủ và bảo vệ ở mức cao nhất.”',
    votes: 0
  },
  {
    id: 's21',
    name: 'GAMA Publica',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Publica → gợi từ Public (cộng đồng, phổ biến, dành cho nhiều người) và âm hưởng Latin/hiện đại → gần gũi, dễ tiếp cận, ứng dụng rộng rãi. Mang ý nghĩa "Dòng sơn phổ biến, phù hợp cho nhiều công trình và nhu cầu sử dụng.”',
    votes: 0
  },
  {
    id: 's22',
    name: 'GAMA AquaLong',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Long → Long-lasting → độ bền kéo dài, duy trì hiệu quả lâu hơn. Mang ý nghĩa "Lớp màng bảo vệ kéo dài tuổi thọ công trình."',
    votes: 0
  },
  {
    id: 's23',
    name: 'GAMA Nuvia',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Nuvia từ ý niệm new + via → con đường mới, lớp nền mới. Mang ý nghĩa "Nền mịn hoàn hảo, khởi đầu cho vẻ đẹp bền lâu."',
    votes: 0
  },
  {
    id: 's24',
    name: 'GAMA Fina',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: '“Fina” gợi từ Fine (tiếng Anh/Ý) → mịn, tinh tế, hoàn thiện cao. Mang ý nghĩa "Lớp nền mịn hoàn hảo – tạo nên bề mặt sơn đẹp và tinh tế"',
    votes: 0
  },
  {
    id: 's25',
    name: 'GAMA Flora',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Flora (gốc Latin): nghĩa là hoa cỏ, cây cối, vẻ đẹp tự nhiên, sự sinh trưởng và nở rộ. Mang ý nghĩa "“Sắc màu nở rộ, kiến tạo không gian sống”.',
    votes: 0
  },
  {
    id: 's26',
    name: 'GAMA Proin',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Đại diện cho "Professional + Interior " Nội thất với các tính năng vượt trội, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ',
    votes: 0
  },
  {
    id: 's27',
    name: 'GAMA InBright',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Đại diện cho "Interior + Bright" Nội thất tươi sáng đánh mạnh vào tính năng màu tươi sáng, bền màu',
    votes: 0
  },
  {
    id: 's28',
    name: 'GAMA Ineasy',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Đại diện cho "Interior + Easy" Nội thất dễ dàng thi công và đơn giản, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ',
    votes: 0
  },
  {
    id: 's29',
    name: 'GAMA Proex',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Đại diện cho "Professional + Exterior " Ngoại thất với các tính năng vượt trội, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ',
    votes: 0
  },
  {
    id: 's30',
    name: 'GAMA ExBright',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Đại diện cho "Exterior + Bright" Ngoại thất tươi sáng đánh mạnh vào tính năng màu tươi sáng, bền màu',
    votes: 0
  },
  {
    id: 's31',
    name: 'GAMA ExEasy',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Đại diện cho "Exterior + Eassy" Sơn ngoại thất dễ mua, dễ dùng, dễ thi công',
    votes: 0
  },
  {
    id: 's32',
    name: 'GAMA AquaDry',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Dry" ý nghĩa khô ráo khả năng chống thấm tốt, từ tiếng anh phổ thông dễ nhận diện và dễ nhớ',
    votes: 0
  },
  {
    id: 's33',
    name: 'GAMA ProSkim',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: '"Skim" là ngôn ngữ kỹ thuật dành cho lớp bột trét bên ngoài trước khi sơn',
    votes: 0
  },
  {
    id: 's34',
    name: 'GAMA Skim',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: '"Skim" là ngôn ngữ kỹ thuật dành cho lớp bột trét bên ngoài trước khi sơn',
    votes: 0
  },
  {
    id: 's35',
    name: 'GAMA Art',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: '"Art" mang ý nghĩa về nghệ thuật, tiêu biểu cho dòng sơn trang trí mang tính thẩm mỹ',
    votes: 0
  },
  {
    id: 's36',
    name: 'GAMA Crystal',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Crystal nghĩa là pha lê. Tên gọi mang ý nghĩa "Bề mặt sáng trong, bóng đẹp, tinh khiết và sang trọng."',
    votes: 0
  },
  {
    id: 's37',
    name: 'GAMA Sunny',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Sunny nghĩa là nắng ấm, tươi sáng, rạng rỡ. Tên gọi mang đến "Không gian sống tươi sáng, ấm áp và tràn đầy năng lượng."',
    votes: 0
  },
  {
    id: 's38',
    name: 'GAMA Smart',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Smart mang ý nghĩa Thông minh, tối ưu, lựa chọn hiệu quả. Tên gọi truyền tải thông điệp "Lựa chọn thông minh cho mọi công trình."',
    votes: 0
  },
  {
    id: 's39',
    name: 'GAMA Polaris',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Polaris Là tên của Sao Bắc Cực – ngôi sao sáng dùng để định hướng trong hàng nghìn năm qua. Tên mang ý nghĩa "Tỏa sáng và bền vững trước mọi thử thách thời tiết như Sao Bắc Cực."',
    votes: 0
  },
  {
    id: 's40',
    name: 'GAMA SunPro',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sun" gợi ánh sáng và màu sắc rực rỡ, còn "Pro" tạo cảm giác chất lượng cao, đáng tin cậy. SunPro - Mang thông điệp "Giúp bảo vệ công trình trước tác động của ánh nắng và thời tiết, đồng thời duy trì vẻ đẹp tươi sáng lâu dài.',
    votes: 0
  },
  {
    id: 's41',
    name: 'GAMA Eco',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Eco nghĩa là kinh tế, tên gọi truyền tải thông điệp "Giải pháp ngoại thất kinh tế, bền đẹp cho mọi công trình." Tên gọi gắn ngọn, dễ nhớ, dễ đọc.',
    votes: 0
  },
  {
    id: 's42',
    name: 'GAMA AquaMax',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Max nghĩa là Tối đa, vượt trội. Tên gọi truyền tải thông điệp "Khả năng chống thấm tối đa, bảo vệ công trình bền vững." Tên dễ nhớ, dễ đọc.',
    votes: 0
  },
  {
    id: 's43',
    name: 'GAMA Master',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Master nghĩa là Bậc thầy, chuyên gia. Tên gọi mang ý nghĩa "Bột trét cao cấp với chất lượng vượt trội, tạo nền tường hoàn hảo như được hoàn thiện bởi những chuyên gia."',
    votes: 0
  },
  {
    id: 's44',
    name: 'GAMA Plus',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Plus nghĩa là Nâng cấp, cộng thêm giá trị, tốt hơn tissue thông thường. Mang thông điệp "Bột trét chất lượng ổn định, mang lại giá trị gia tăng cho mọi công trình."',
    votes: 0
  },
  {
    id: 's45',
    name: 'GAMA Velora',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Velora viết tắt từ các từ Velvet (nhung) → mềm mại, sang trọng. Valor (giá trị, đẳng cấp). Hậu tố -ora → thường xuất hiện trong các thương hiệu cao cấp, tạo cảm giác tinh tế và quốc tế. Velora tên gọi mang ý nghĩa "Nghệ thuật kiến tạo vẻ đẹp đẳng cấp cho không gian sống."',
    votes: 0
  },
  {
    id: 's46',
    name: 'GAMA Royal',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Royal: Trong tiếng Anh nghĩa là Hoàng gia, Vương giả, Cao quý. Mang ý nghĩa Đẳng cấp hoàng gia, vẻ đẹp vượt thời gian.',
    votes: 0
  },
  {
    id: 's47',
    name: 'GAMA Joy',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Joy: Trong tiếng Anh nghĩa là niềm vui, sự hân hoan, hạnh phúc. Mang ý nghĩa "Tô điểm niềm vui cho tổ ấm."',
    votes: 0
  },
  {
    id: 's48',
    name: 'GAMA One',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'One: Số 1, duy nhất, lựa chọn hàng đầu. Mang ý nghĩa "Một lựa chọn đáng tin cậy cho mọi công trình."',
    votes: 0
  },
  {
    id: 's49',
    name: 'GAMA King',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'King: Nhà vua, người đứng đầu, quyền lực và uy tín. Mang ý nghĩa "Dòng sơn ngoại thất cao cấp khẳng định vị thế dẫn đầu."',
    votes: 0
  },
  {
    id: 's50',
    name: 'GAMA Liva',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Liva là tên hiện đại, ngắn gọn, dễ đọc. Tên này gợi liên tưởng đến: Live = Cuộc sống. Life = Sự sống. Viva = Sức sống, năng lượng. Ý nghĩa "Mang sức sống mới đến mọi không gian."',
    votes: 0
  },
  {
    id: 's51',
    name: 'GAMA Value',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Value: Giá trị, đáng giá, hiệu quả đầu tư. Mang ý nghĩa "Giá trị bền vững cho mọi công trình"',
    votes: 0
  },
  {
    id: 's52',
    name: 'GAMA Aquatech',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Aqua + Technology" Công nghệ chống thấm. Thể hiện sự chuyên nghiệp và uy tín.',
    votes: 0
  },
  {
    id: 's53',
    name: 'GAMA Core',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Core: Trong tiếng Anh nghĩa là cốt lõi, nền tảng, phần quan trọng nhất. Mang ý nghĩa "Nền tảng vững chắc cho mọi lớp sơn hoàn hảo."',
    votes: 0
  },
  {
    id: 's54',
    name: 'GAMA First',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'First: Đầu tiên, khởi đầu, nền tảng. Mang ý nghĩa "Nền tảng đầu tiên cho bề mặt hoàn hảo."',
    votes: 0
  },
  {
    id: 's55',
    name: 'GAMA Fresco',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: '"Freso" mang tính nghệ thuật cảm hứng cao về thẩm mỹ',
    votes: 0
  },
  {
    id: 's56',
    name: 'GAMA ILUVA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Đại diện cho không gian sống sang trọng, ngập tràn ánh sáng và giá trị bền vững',
    votes: 0
  },
  {
    id: 's57',
    name: 'GAMA LUMIS',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ánh sáng lan tỏa, tạo cảm giác tươi sáng',
    votes: 0
  },
  {
    id: 's58',
    name: 'GAMA ELORA',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Mang ý nghĩa thanh lịch, sáng sủa và gần gũi với mọi gia đình',
    votes: 0
  },
  {
    id: 's59',
    name: 'GAMA ALTIS',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: '"Altis" gợi sự vững chắc và tầm cao',
    votes: 0
  },
  {
    id: 's60',
    name: 'GAMA TERVON',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Thể hiện khả năng thích nghi và bảo vệ công trình trong nhiều điều kiện môi trường',
    votes: 0
  },
  {
    id: 's61',
    name: 'GAMA KAVORA',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Biểu tượng cho nền tảng vững chắc, mang lại sự bền đẹp lâu dài cho công trình',
    votes: 0
  },
  {
    id: 's62',
    name: 'GAMA HYDROMAX',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Hydro" là nước, "Max" là tối đa. Thể hiện khả năng chống thấm mạnh mẽ, bảo vệ công trình ở mức cao nhất.',
    votes: 0
  },
  {
    id: 's63',
    name: 'GAMA SILKCORE',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bề mặt mịn như lụa',
    votes: 0
  },
  {
    id: 's64',
    name: 'GAMA FINECOAT',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Lớp nền hoàn hảo',
    votes: 0
  },
  {
    id: 's65',
    name: 'GAMA LUSTRIA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Sự óng ánh, lấp lánh và sang trọng',
    votes: 0
  },
  {
    id: 's66',
    name: 'GAMA Aura',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Chữ Aura gợi lên hào quang, thần thái sang trọng, tinh tế và một không gian sống đầy năng lượng.',
    votes: 0
  },
  {
    id: 's67',
    name: 'GAMA Cozy',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Chữ Cozy gợi cảm giác tổ ấm gia đình ấm cúng, thoải mái, phù hợp với dòng sơn bền màu và dễ vệ sinh hằng ngày.',
    votes: 0
  },
  {
    id: 's68',
    name: 'GAMA Neo',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Chữ Neo mang ý nghĩa là sự mới mẻ, tối giản và hiện đại; ngắn gọn chỉ với 1 âm tiết, rất dễ đọc cho thợ thi công và gợi một khởi đầu mới mẻ, sạch sẽ cho ngôi nhà với mức chi phí kinh tế.',
    votes: 0
  },
  {
    id: 's69',
    name: 'GAMA Apex',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Men sứ công nghệ Nano + Chữ Apex mang ý nghĩa là đỉnh cao; khẳng định chất lượng vượt trội giúp nâng tầm đẳng cấp cho ngôi nhà, mang lại vẻ đẹp siêu bóng sang trọng và bền bỉ bất chấp thời tiết.',
    votes: 0
  },
  {
    id: 's70',
    name: 'GAMA Armor',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Chữ Armor có nghĩa là áo giáp, thể hiện vai trò bảo vệ ngôi nhà luôn tươi sáng trước ánh nắng mặt trời.',
    votes: 0
  },
  {
    id: 's71',
    name: 'GAMA Block',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Chữ Block tạo cảm giác vững chãi như khối bê tông, ngắn gọn, dễ đọc và dễ nhớ đối với thợ thi công',
    votes: 0
  },
  {
    id: 's72',
    name: 'GAMA AquaForce',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Từ "Force" gợi lên sức mạnh, sự kiên cố và khả năng chống chịu áp lực nước mạnh mẽ, rất phù hợp cho đặc tính chịu tải trọng và chống thấm chuyên dụng của bề mặt sàn.',
    votes: 0
  },
  {
    id: 's73',
    name: 'GAMA Opal',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ Opal (ngọc thạch anh) mang lại cảm giác quý phái, lấp lánh; gợi tả một lớp nền hoàn hảo, mịn màng và quý giá như ngọc, giúp tôn lên tối đa vẻ đẹp và sự sang trọng cho các lớp sơn phủ tiếp theo của ngôi nhà',
    votes: 0
  },
  {
    id: 's74',
    name: 'GAMA Crest',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ Crest mang ý nghĩa là đỉnh cao hoặc biểu tượng của sự thành đạt; mang lại cho gia chủ cảm giác về một không gian sống được chăm chút từ lớp nền chuẩn mực, giúp ngôi nhà giữ được vẻ đẹp hoàn hảo dài lâu cùng mức chi phí hợp lý.',
    votes: 0
  },
  {
    id: 's75',
    name: 'GAMA Luxe',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chữ Luxe (Luxury) mang lại cảm giác xa hoa, đẳng cấp, tôn lên vẻ đẹp độc đáo của các dòng sơn hiệu ứng và nhũ vàng',
    votes: 0
  },
  {
    id: 's76',
    name: 'GAMA Lisse',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Tạo sự bóng mượt cho không gian của bạn',
    votes: 0
  },
  {
    id: 's77',
    name: 'GAMA Niveau',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Đẳng cấp của sự sang trọng',
    votes: 0
  },
  {
    id: 's78',
    name: 'GAMA Facile',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Facile dễ lau chùi " Giữ sạch ngôi nhà bạn"',
    votes: 0
  },
  {
    id: 's79',
    name: 'GAMA Vit-mode',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Vitalite: sức sống Moderne hiện tại " Sức sống hiện đại cho công trình"',
    votes: 0
  },
  {
    id: 's80',
    name: 'GAMA Solie',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Tỏa sáng cho mọi công trình',
    votes: 0
  },
  {
    id: 's81',
    name: 'GAMA Colorfast',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Bền màu with thời gian',
    votes: 0
  },
  {
    id: 's82',
    name: 'GAMA Lasting',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Bảo vệ ngôi nhà lâu dài, bền bỉ with thời gian',
    votes: 0
  },
  {
    id: 's83',
    name: 'GAMA Durable',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Thời gian sử dụng lâu không bong tróc',
    votes: 0
  },
  {
    id: 's84',
    name: 'GAMA aye',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Mãi mãi bền chặt with công trình',
    votes: 0
  },
  {
    id: 's85',
    name: 'GAMA Joie',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Joie tiếng Pháp có nghĩa: niềm vui "dòng sơn trang trí, mang niềm vui đến mọi nhà"',
    votes: 0
  },
  {
    id: 's86',
    name: 'GAMA LUMIER',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện độ trắng sáng, bề mặt hoàn thiện tinh tế, sang trọng và không gian sống cao cấp.',
    votes: 0
  },
  {
    id: 's87',
    name: 'GAMA VELA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Phù hợp dòng sơn có màu sắc tươi sáng, bền màu và tạo cảm giác trẻ trung cho không gian.',
    votes: 0
  },
  {
    id: 's88',
    name: 'GAMA NESTA',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Hướng đến sự gần gũi, thân thiện, đáp ứng nhu cầu hoàn thiện không gian sống',
    votes: 0
  },
  {
    id: 's89',
    name: 'GAMA VORTEX',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện khả năng chống chịu thời tiết khắc nghiệt, độ',
    votes: 0
  },
  {
    id: 's90',
    name: 'GAMA Bond',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Chữ Bond có nghĩa là gắn kết, thể hiện tính năng liên kết chặt chẽ with bề mặt tường, dễ thi công và mang lại hi',
    votes: 0
  },
  {
    id: 's91',
    name: 'GAMA FORTE',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Thể hiện độ bền cơ bản, khả năng bảo vệ bề mặt công trình',
    votes: 0
  },
  {
    id: 's92',
    name: 'GAMA TERRASEA',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Nhấn mạnh khả năng ngăn nước xâm nhập, bảo vệ kết cấu và kéo dài tuổi thọ',
    votes: 0
  },
  {
    id: 's93',
    name: 'GAMA SATIN',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Gợi bề mặt hoàn thiện mịn đẹp, đồng đều và nâng cao chất lượng lớp sơn',
    votes: 0
  },
  {
    id: 's94',
    name: 'GAMA PRIMO',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Thể hiện khả năng thi công ổn định, hiệu quả kinh tế và chất lượng',
    votes: 0
  },
  {
    id: 's95',
    name: 'GAMA ALURA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Tạo điểm nhấn thẩm mỹ và đẳng cấp.',
    votes: 0
  },
  {
    id: 's96',
    name: 'GAMA AirPure',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Tinh khiết, nhẹ nhàng, không mùi độc hại',
    votes: 0
  },
  {
    id: 's97',
    name: 'GAMA Silk',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Màng sơn mịn màng, che phủ khuyết điểm hiệu quả.',
    votes: 0
  },
  {
    id: 's98',
    name: 'GAMA Prima',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Nền tảng đầu tiên, chất lượng chuẩn mực, dễ tiếp cận.',
    votes: 0
  },
  {
    id: 's99',
    name: 'GAMA Stone',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Kiên cố như đá tự nhiên, giữ màu sắc nguyên bản.',
    votes: 0
  },
  {
    id: 's100',
    name: 'GAMA Forest',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Như cánh rừng xanh, làm mát và điều hòa bề mặt tường.',
    votes: 0
  },
  {
    id: 's101',
    name: 'GAMA AquaBlock',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Khóa nước thông minh, an toàn cho nguồn nước sinh hoạt.',
    votes: 0
  },
  {
    id: 's102',
    name: 'GAMA Smooth',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Trơn láng tự nhiên, tạo bước đệm hoàn hảo cho lớp sơn phủ.',
    votes: 0
  },
  {
    id: 's103',
    name: 'GAMA WallFix',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Sửa chữa bề mặt tường, lành tính và dễ sử dụng.',
    votes: 0
  },
  {
    id: 's104',
    name: 'GAMA Metallic',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Hiệu ứng ánh kim lấp lánh, thời thượng.',
    votes: 0
  },
  {
    id: 's105',
    name: 'GAMA Home Elite',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'GAMA Home đề cập chung đến dòng sơn nội thất, Elite truyền tải cấp độ tinh hoa, chọn lọc của sản phẩm dành cho cuộc sống thượng lưu',
    votes: 0
  },
  {
    id: 's106',
    name: 'GAMA Home Gold+',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'GAMA Home đề cập chung đến dòng sơn nội thất, Gold+ truyền tải chất lượng vượt trội của sản phẩm',
    votes: 0
  },
  {
    id: 's107',
    name: 'GAMA Home Light',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'GAMA Home đề cập chung đến dòng sơn nội thất, Light gợi mở yếu tố cơ bản, đơn giản, tươi sáng',
    votes: 0
  },
  {
    id: 's108',
    name: 'GAMA Shield Eternal',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'GAMA Shield đề cập chung đến dòng sơn ngoại thất, Eternal gợi nhắc sự trường tồn vĩnh cữu theo thời gian, cho thấy chất lượng bền bỉ của sản phẩm',
    votes: 0
  },
  {
    id: 's109',
    name: 'GAMA Shield Extreme',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'GAMA Shield đề cập chung đến dòng sơn ngoại thất, Extreme gợi mở tính năng vượt trội của sản phẩm',
    votes: 0
  },
  {
    id: 's110',
    name: 'GAMA Shield 360',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'GAMA Shield đề cập chung đến dòng sơn ngoại thất, 360 gợi mở tính năng bảo vệ toàn diện ở mọi góc độ',
    votes: 0
  },
  {
    id: 's111',
    name: 'GAMA AquaSeal',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Nêu bật khả năng ngăn chặn nước',
    votes: 0
  },
  {
    id: 's112',
    name: 'GAMA Matit Expert',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Nêu bật công năng ngay trong cái tên và ở cấp độ cao cấp',
    votes: 0
  },
  {
    id: 's113',
    name: 'GAMA Matit Smooth',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Nêu bật công năng ngay trong cái tên, không cần phải mô tả nhiều bằng lời nói',
    votes: 0
  },
  {
    id: 's114',
    name: 'GAMA Signature',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Thể hiện dấu ấn riêng, sự tinh tế độc bản dành cho mỗi người dùng',
    votes: 0
  },
  {
    id: 's115',
    name: 'GAMA Noblesse',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: '(Mang ý nghĩa quý phái, đẳng cấp)',
    votes: 0
  },
  {
    id: 's116',
    name: 'GAMA Vento',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: '(Gió tạo cảm giác nhẹ nhàng, thông thoáng)',
    votes: 0
  },
  {
    id: 's117',
    name: 'GAMA Premo',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: '(Viết tắt của Premium Cao cấp)',
    votes: 0
  },
  {
    id: 's118',
    name: 'GAMA NanoShield',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: '(Công nghệ phân tử bảo vệ)',
    votes: 0
  },
  {
    id: 's119',
    name: 'GAMA Royal Shield',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: '(Bảo vệ hoàng gia)',
    votes: 0
  },
  {
    id: 's120',
    name: 'GAMA Vina Shield',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: '(Gắn with thiên nhiên: Gần gũi, tin cậy nhưng vẫn mang âm hưởng hiện đại.',
    votes: 0
  },
  {
    id: 's121',
    name: 'GAMA AquaPro Shield',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '(Chống thấm đa lớp, chịu nhiệt tốt)',
    votes: 0
  },
  {
    id: 's122',
    name: 'GAMA PERMACOAT',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Gợi sự bền bỉ, lớp áo bảo vệ vĩnh viễn cho công trình',
    votes: 0
  },
  {
    id: 's123',
    name: 'GAMA Palace',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: '(Cung điện)',
    votes: 0
  },
  {
    id: 's124',
    name: 'GAMA CleanMax',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Dòng sơn chống bám bẩn, dễ lau chùi',
    votes: 0
  },
  {
    id: 's125',
    name: 'GAMA Satin',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Độ bóng nhẹ, hiện đại , tinh tế',
    votes: 0
  },
  {
    id: 's126',
    name: 'GAMA Shield',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Khiên chắn bảo vệ ngôi nhà khỏi nắng mưa',
    votes: 0
  },
  {
    id: 's127',
    name: 'GAMA WeatherMax',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Tối ưu hoá khả năng chống chịu thời tiết khắc nghiệt',
    votes: 0
  },
  {
    id: 's128',
    name: 'GAMA Titan',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Mang lại cảm giác cứng cáp, bền bỉ như kim loại Titan',
    votes: 0
  },
  {
    id: 's129',
    name: 'GAMA Premium',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Dòng sơn cao cấp dành cho biệt thự, căn hộ sang trọng',
    votes: 0
  },
  {
    id: 's130',
    name: 'GAMA SilkFill',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Mịn màng như lụa và lắp đầy',
    votes: 0
  },
  {
    id: 's131',
    name: 'GAMA Perfect Wall',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Mang lại những bức tường hoàn hảo',
    votes: 0
  },
  {
    id: 's132',
    name: 'GAMA DecoArt',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Dòng sơn chuyên dụng để trang trí và tạo tác nghệ thuật',
    votes: 0
  },
  {
    id: 's133',
    name: 'GAMA SILK',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mịn màng như lụa, lau chùi tối ưu',
    votes: 0
  },
  {
    id: 's134',
    name: 'GAMA MATTE',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Mờ hiện đại, che lấp khuyết điểm',
    votes: 0
  },
  {
    id: 's135',
    name: 'GAMA ECO',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Kinh tế, an toàn cho sức khỏe',
    votes: 0
  },
  {
    id: 's136',
    name: 'GAMA ARMOR',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Armor nghĩa là áo giáp thép, bảo vệ ngôi nhà kiên cố trước mọi thời tiết',
    votes: 0
  },
  {
    id: 's137',
    name: 'GAMA MAX',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Tối ưu chi phí, độ phủ tối đa',
    votes: 0
  },
  {
    id: 's138',
    name: 'GAMA AQUA',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Kháng nước tuyệt đối, màng sơn đanh chắc',
    votes: 0
  },
  {
    id: 's139',
    name: 'GAMA PRO',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Siêu mịn, dễ xả nhám, chuẩn thợ',
    votes: 0
  },
  {
    id: 's140',
    name: 'GAMA BASE',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Nền móng vững chắc, bám dính cao',
    votes: 0
  },
  {
    id: 's141',
    name: 'GAMA LUX',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Hiệu ứng sang trọng, đẳng cấp',
    votes: 0
  },
  {
    id: 's142',
    name: 'GAMA AVIORA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ánh sáng ở đỉnh cao, dành cho không gian đẳng cấp.',
    votes: 0
  },
  {
    id: 's143',
    name: 'GAMA LUREON',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ánh sáng bền bỉ, cân bằng giữa hiệu năng và giá trị.',
    votes: 0
  },
  {
    id: 's144',
    name: 'GAMA ORIEN',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Bình minh của một không gian mới, giải pháp đáng tin cậy cho mọi gia đình.',
    votes: 0
  },
  {
    id: 's145',
    name: 'GAMA AEVON',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Trường tồn theo thời gian.',
    votes: 0
  },
  {
    id: 's146',
    name: 'GAMA VIVARO',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Không gian sống tràn đầy năng lượng.',
    votes: 0
  },
  {
    id: 's147',
    name: 'GAMA ARVO',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Giá trị cốt lõi cho mọi ngôi nhà.',
    votes: 0
  },
  {
    id: 's148',
    name: 'GAMA Waterproof',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chống thấm chuẩn mới, bền vững dài lâu.',
    votes: 0
  },
  {
    id: 's149',
    name: 'GAMA NOVIX',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Khởi tạo chuẩn màu mới.',
    votes: 0
  },
  {
    id: 's150',
    name: 'GAMA PREMIUM',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Cao cấp, sang trọng',
    votes: 0
  },
  {
    id: 's151',
    name: 'GAMA PLUS',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Diểm cộng cho sự vượt trội',
    votes: 0
  },
  {
    id: 's152',
    name: 'GAMA SUNSHINE',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sáng như ánh mặt trời',
    votes: 0
  },
  {
    id: 's153',
    name: 'GAMA HIGHLIGHT',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Điểm nhấn hoàn hảo cho ngôi nhà của bạn',
    votes: 0
  },
  {
    id: 's154',
    name: 'GAMA Terra',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Terra: gốc của nhiều từ ngữ tiếng anh chỉ về đất/bề mặt. Nếu Gama là cây xanh, cần đất mẹ Terra nuôi dưỡng nó. Terraco là tên cả hãng sơn đối thủ - biết đâu là một dòng sơn của Gama',
    votes: 0
  },
  {
    id: 's155',
    name: 'GAMA ORIGIN',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mang tinh thần kiến tạo, xây dựng từ gốc rễ chứ không đơn thuần là một lthùng sơn',
    votes: 0
  },
  {
    id: 's156',
    name: 'GAMA NOVA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ngôi sao mới bùng sáng. Đại diện cho sức sống mới, màu sắc tươi sáng, hiện đại.',
    votes: 0
  },
  {
    id: 's157',
    name: 'GAMA NIDO',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Trong tiếng Ý nghĩa là tổ ấm. Gợi sự gần gũi, phù hợp phân khúc phổ thông.',
    votes: 0
  },
  {
    id: 's158',
    name: 'GAMA ATLAS',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Vị thần nâng đỡ bầu trời. Tượng trưng cho khả năng bảo vệ công trình vượt thời gian.',
    votes: 0
  },
  {
    id: 's159',
    name: 'GAMA NEXA',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Thể hiện tinh thần kết nối của thương hiệu, đồng thời là lớp liên kết bảo vệ công trình trước nắng/mưa/thời tiết khắc nghiệt',
    votes: 0
  },
  {
    id: 's160',
    name: 'GAMA ROOT',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Đại diện cho nền tảng vững chắc, giá trị cốt lõi và độ bền lâu dài.',
    votes: 0
  },
  {
    id: 's161',
    name: 'GAMA Aqua Nova',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Một chuẩn mực mới trong giải pháp chống thấm, truyền tải tinh thần đổi mới, hiện đại và nâng tầm giá trị công trình.',
    votes: 0
  },
  {
    id: 's162',
    name: 'GAMA VELO',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Lấy cảm hứng từ Velvet (nhung mịn), thể hiện độ mịn cao cấp của bề mặt. bột trét khi phủ lên tường',
    votes: 0
  },
  {
    id: 's163',
    name: 'GAMA ALTO',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Nghĩa là nâng cao. Tạo nền tảng hoàn thiện công trình tốt hơn.',
    votes: 0
  },
  {
    id: 's164',
    name: 'GAMA AUREA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Nghĩa là vàng kim. Phù hợp dòng sơn nhũ vàng, giả đá, giả gỗ,....',
    votes: 0
  },
  {
    id: 's165',
    name: 'GAMA MIA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Gần gũi, cá nhân hóa tổ ấm',
    votes: 0
  },
  {
    id: 's166',
    name: 'GAMA ZEN',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Yên bình, tối giản',
    votes: 0
  },
  {
    id: 's167',
    name: 'GAMA OASIS',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Không gian nghỉ dưỡng',
    votes: 0
  },
  {
    id: 's168',
    name: 'GAMA LUMI',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ánh sáng, không gian sáng đẹp',
    votes: 0
  },
  {
    id: 's169',
    name: 'GAMA SHIELD',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Lớp bảo vệ',
    votes: 0
  },
  {
    id: 's170',
    name: 'GAMA VIVO',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Sức sống lâu dài',
    votes: 0
  },
  {
    id: 's171',
    name: 'GAMA AQUA MAX',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '→ bảo vệ tối đa',
    votes: 0
  },
  {
    id: 's172',
    name: 'GAMA BOND',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: '→ liên kết chắc chắn',
    votes: 0
  },
  {
    id: 's173',
    name: 'GAMA GRIP',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: '→ bám chắc',
    votes: 0
  },
  {
    id: 's174',
    name: 'GAMA MUSE',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Nguồn cảm hứng nghệ thuật',
    votes: 0
  },
  {
    id: 's175',
    name: 'GAMA AUREO',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Liên tưởng sắc vàng cao cấp',
    votes: 0
  },
  {
    id: 's176',
    name: 'GAMA FRESHA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Gợi sự tươi mới và sạch sẽ',
    votes: 0
  },
  {
    id: 's177',
    name: 'GAMA SMOOTH',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Gợi tính chất bề mặt mịn',
    votes: 0
  },
  {
    id: 's178',
    name: 'GAMA NANOVIA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ghép ý Nano + Value',
    votes: 0
  },
  {
    id: 's179',
    name: 'GAMA SOLARA',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Gợi nhớ đến mặt trời, chống nắng',
    votes: 0
  },
  {
    id: 's180',
    name: 'GAMA SURECOAT',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Lớp phủ đáng tin cậy',
    votes: 0
  },
  {
    id: 's181',
    name: 'GAMA AQUADURIS',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chống thấm bền lâu',
    votes: 0
  },
  {
    id: 's182',
    name: 'GAMA PRIMEFILL',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Thể hiện sự cao cấp',
    votes: 0
  },
  {
    id: 's183',
    name: 'GAMA EASYFILL',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Dễ thi công',
    votes: 0
  },
  {
    id: 's184',
    name: 'GAMA VENERA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Gợi vẻ đẹp và thẩm mỹ',
    votes: 0
  },
  {
    id: 's185',
    name: 'GAMA EasyPro',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Dễ lau chùi vết bẩn, dễ thi công (độ phủ tốt), dễ mua vì giá hợp lý. Pro chuyên nghiệp, có ý hơn một số sản phẩm easy khác',
    votes: 0
  },
  {
    id: 's186',
    name: 'GAMA Skim Pro',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Từ thuật ngữ "Skimcoat" (bột trét/bột bả), từ ngữ ngắn gọn, nghe qua là hiểu công năng.',
    votes: 0
  },
  {
    id: 's187',
    name: 'GAMA Gold',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Phản ánh đặc tính nhũ vàng/ánh vàng, nghe qua biết tạo hiệu ứng giả kim sang trọng.',
    votes: 0
  },
  {
    id: 's188',
    name: 'GAMA BriPas',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Bright & Bridge Passion Cầu nối đam mê bằng sắc màu rạng rỡ.',
    votes: 0
  },
  {
    id: 's189',
    name: 'GAMA VisTek',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Vission Technology > Tek (cách viết biến thể) Kiến tạo sắc màu bằng công nghệ hiện đại và tầm nhìn bền vững.',
    votes: 0
  },
  {
    id: 's190',
    name: 'GAMA CoPas',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Color Passion Khơi nguồn đam mê bằng sắc màu.',
    votes: 0
  },
  {
    id: 's191',
    name: 'GAMA CrePas',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Create Passion Khơi nguồn sáng tạo, kiến tạo giá trị bằng đam mê.',
    votes: 0
  },
  {
    id: 's192',
    name: 'GAMA FuGreen',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Fu: Funny Future Green Kiến tạo sắc màu cho những công trình tương lai bằng tinh thần "Xanh" thân thiện.',
    votes: 0
  },
  {
    id: 's193',
    name: 'GAMA StanPer',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Standard & Perfect Chuẩn mực hoàn hảo cho vẻ ngoài của mọi công trình.',
    votes: 0
  },
  {
    id: 's194',
    name: 'GAMA Aqua Dino',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Diamond Nano Dinosour khủng long Chống thấm mạnh mẽ, bảo vệ công trình bền bỉ trước mọi thời tiết.',
    votes: 0
  },
  {
    id: 's195',
    name: 'GAMA BeFound',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Better & Foundation Lớp nền tốt hơn cho màu sơn bền đẹp hơn.',
    votes: 0
  },
  {
    id: 's196',
    name: 'GAMA ReFound',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Real Realiability & Foundation Lớp nền vững chắc, đáng tin cậy.',
    votes: 0
  },
  {
    id: 's197',
    name: 'GAMA SunFlo',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Sunny Sun Flow Dòng chảy ánh sáng kết nối không gian.',
    votes: 0
  },
  {
    id: 's198',
    name: 'GAMA Jade',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ngọc Bích là đại diện hoàn hảo nhất cho tone màu xanh lá đậm của thương hiệu. Tên gọi gợi lên bề mặt tường láng mịn, mát mẻ, phản chiếu ánh sáng có chiều sâu và vô cùng quyền quý.',
    votes: 0
  },
  {
    id: 's199',
    name: 'GAMA Lotus',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Mượn hình ảnh quốc hoa Việt Nam. Cánh sen có độ mịn như nhung và sở hữu màng bảo vệ tự làm sạch tự nhiên. Tên gọi này nhấn mạnh tính năng chống bám bẩn, dễ lau chùi, giữ cho tổ ấm luôn thanh tao.',
    votes: 0
  },
  {
    id: 's200',
    name: 'GAMA Cove',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Câu chuyện cảm hứng từ những vịnh biển nhỏ êm đềm, khuất gió của Việt Nam (như Vĩnh Hy, Lăng Cô). Một cái tên mang lại sự êm ái, bảo bọc, tạo nên tổ ấm bình yên.',
    votes: 0
  },
  {
    id: 's201',
    name: 'GAMA Citadel',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Gợi nhớ đến sự kiên cố trường tồn hàng thế kỷ của các vòng thành cổ (như Hoàng thành Thăng Long, Đại Nội Huế). Tên gọi là lời khẳng định về một lớp khiên bảo vệ ngôi nhà khỏi mọi khắc nghiệt của thời tiết.',
    votes: 0
  },
  {
    id: 's202',
    name: 'GAMA Basalt',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Lấy từ chất đá bazan cứng cáp, bền bỉ của vùng đất Tây Nguyên đầy nắng gió. Đại diện cho khả năng bám màu sâu, chống phai dưới tia UV gay gắt.',
    votes: 0
  },
  {
    id: 's203',
    name: 'GAMA Dune',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Lấy cảm hứng từ những đồi cát Nam Trung Bộ luôn dẻo dai vươn mình trong nắng gió. Dòng sơn mang tính che phủ tốt, mộc mạc nhưng bền bỉ.',
    votes: 0
  },
  {
    id: 's204',
    name: 'GAMA Monsoon',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Khí hậu nhiệt dới "gió mùa" với những cơn mưa lớn dầm dề là đặc trưng lớn nhất tại Việt Nam. Tên gọi này khẳng định dòng sơn thấu hiểu và trị đứt điểm bài toán thấm dột do thời tiết bản địa gây ra.',
    votes: 0
  },
  {
    id: 's205',
    name: 'GAMA Celadon',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Lấy cảm hứng từ dòng gốm men ngọc (Celadon) thời Lý - Trần (đỉnh cao mỹ thuật Việt). Bột trét tạo ra một lớp nền trắng láng, mịn màng không tì vết, chuẩn bị cho một lớp sơn hoàn mỹ.',
    votes: 0
  },
  {
    id: 's206',
    name: 'GAMA Grain',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Những hạt phù sa mang tính bồi đắp lớp nền móng vững chắc. Nhấn mạnh đặc tính bột dẻo dai, độ bám dính cao và rất dễ thi công.',
    votes: 0
  },
  {
    id: 's207',
    name: 'GAMA Lacquer',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Sơn mài là quốc bảo của mỹ thuật Việt Nam với bề mặt có chiều sâu hun hút và biến ảo. Dòng sơn hiệu ứng này biến mỗi mảng tường thành một tác phẩm nghệ thuật đắt giá, độc nhất vô nhị.',
    votes: 0
  },
  {
    id: 's208',
    name: 'GAMA SilkLux',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Kết hợp giữa Silk (Lụa) và Luxury (Sang trọng). Mang ý nghĩa màng sơn mịn màng, bóng bẩy như lụa cao cấp, mang lại vẻ đẹp đẳng cấp và bền vững cho không gian sống thượng lưu.',
    votes: 0
  },
  {
    id: 's209',
    name: 'GAMA CleanMax',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Sự kết hợp giữa Clean (Sạch sẽ) và Maximum (Tối đa). Nhấn mạnh tính năng lau chùi vượt trội, kháng khuẩn tối đa, là giải pháp bảo vệ tối ưu cho các gia đình có trẻ nhỏ.',
    votes: 0
  },
  {
    id: 's210',
    name: 'GAMA MatteFresh',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Kết hợp giữa Matte (Bề mặt mờ) và Fresh (Tươi mới). Mang ý nghĩa dòng sơn kinh tế, cho bề mặt mịn mờ hiện đại, độ che phủ tốt và giữ không gian nhà cửa luôn tươi mới, thông thoáng.',
    votes: 0
  },
  {
    id: 's211',
    name: 'GAMA DuraShield',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ghép từ Durable (Bền bỉ) và Shield (Tấm khiên). Có ý nghĩa như một "tấm khiên công nghệ" kiên cố, bảo vệ ngôi nhà khỏi tia UV, nhiệt độ cao và giữ màu sắc bền đẹp lên đến hàng chục năm.',
    votes: 0
  },
  {
    id: 's212',
    name: 'GAMA WeatherGard',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Cách điệu từ Weather Guard (Bảo vệ trước thời tiết). Đây là dòng sản phẩm chủ lực với tính năng chống bám bẩn, chống rêu mốc và chịu được sự thay đổi thất thường của khí hậu nhiệt đới.',
    votes: 0
  },
  {
    id: 's213',
    name: 'GAMA EcoCoat',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Kết hợp giữa Ecology/Economy (Kinh tế/Thân thiện) và Coat (Lớp phủ). Mang ý nghĩa lớp phủ bảo vệ cơ bản, tiết kiệm chi phí nhưng vẫn đảm bảo khả năng chống phai màu và bong tróc tiêu chuẩn.',
    votes: 0
  },
  {
    id: 's214',
    name: 'GAMA AquaStop Ultra',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'AquaStop (Chặn nước) + Ultra (Vượt trội). Khẳng định khả năng chống thấm ngược, thấm thuận tuyệt đối nhờ công nghệ liên kết hóa học siêu việt, đàn hồi cao, không nứt nẻ.',
    votes: 0
  },
  {
    id: 's215',
    name: 'GAMA NanoSmooth',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Nano(Công nghệ siêu nhỏ) + Smooth (Mượt mà). Thể hiện hạt bột siêu mịn, lấp đầy mọi khe nứt nhỏ nhất, tạo ra bề mặt phẳng mịn hoàn hảo như gương trước khi sơn.',
    votes: 0
  },
  {
    id: 's216',
    name: 'GAMA FlexBond',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Ghép từ Flexible (Dẻo dai) và Bond (Sự liên kết). Nhấn mạnh đặc tính bột dẻo, dễ bả, độ bám dính cực cao, chống rạn nứt chân chim hiệu quả cho cả trong và ngoài trời.',
    votes: 0
  },
  {
    id: 's217',
    name: 'GAMA BaseFill',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Kết hợp giữa Base (Nền tảng) và Fill (Lấp đầy). Mang ý nghĩa là lớp bột nền tiêu chuẩn, giúp lấp đầy các khoảng lồi lõm của tường gạch thô một cách nhanh chóng, dễ thi công và kinh tế.',
    votes: 0
  },
  {
    id: 's218',
    name: 'GAMA Luxury Pearl',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện sự tinh tế, sang trọng, quý, đẳng cấp (Luxury), Pearl sáng bóng kiểu nhẹ nhàng, quý phái tựa như ngọc trai. Do đó sẽ toát lên được chất lượng cao cấp, khẳng định sự đẳng cấp/sang trọng mà cũng rất nhẹ nhàng, phù hợp cho dòng sơn nội thất ở phân khúc cao cấp/siêu cao cấp',
    votes: 0
  },
  {
    id: 's219',
    name: 'GAMA MaxOpacity',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Liên tưởng đến độ che lấp, độ che phủ (Opacity) của sản phẩm và có hiệu quả cao (Max). Và đây là tính năng cần thiết đối với các dòng sơn trung cấp G11 & G12 2. Riêng G15: GAMA Celling White - Để thể hiện dòng sơn trắng chuyên dụng dành riêng cho trần nhà/hoặc tường nội thất',
    votes: 0
  },
  {
    id: 's220',
    name: 'GAMA Eco Smooth',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Smooth gợi lên màng sơn phẳng, láng mịn của dòng sơn mịn kinh tế nói chung. Đồng thời Eco là sinh thái sẽ toát lên tính chất thân thiện/an toàn với người sử dụng và nó còn mang ý nghĩa tiết kiệm/kinh tế (Economic)',
    votes: 0
  },
  {
    id: 's221',
    name: 'GAMA Platinum',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện sự đẳng cấp, sang trọng, chất lượng vượt trội của dòng sơn ngoại thất cao cấp. Ví von chất lượng sản phẩm đỉnh, cứng/bền/đẹp và tươi sáng mãi mãi như Bạch kim 2. Hoặc GAMA Sapphire 3. Hoặc GAMA Ruby- Sapphire và Ruby là đá quý nói lên sự đẳng cấp, quý phái vương giả, sang trọng và chất lượng thì vĩnh cửu siêu việt. Như vậy sẽ toát lên được ý nghĩa của dòng sơn ngoại thất có định vị phân khúc cao cấp này, bền/đẹp và có giá trị vĩnh cửu/trường tồn theo thời gian.',
    votes: 0
  },
  {
    id: 's222',
    name: 'GAMA Classic',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Toát lên một vẻ đẹp cổ điển (Classic), nét thanh lịch của một dòng sơn trang trí bóng mờ sang trọng và không bị lỗi thời',
    votes: 0
  },
  {
    id: 's223',
    name: 'GAMA Easy Silk',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Silk thể hiện dòng sơn mờ và có bề mặt mịn/mượt như lụa, đồng thời toát lên sự tinh tế, lụa còn là chất lượng. Easy là mang ý nghĩa đơn giản, dễ sử dụng, dễ dàng thi công, một yếu tố quan trọng của dòng sơn mịn, và còn có nghĩa liên tưởng đến lau chùi/làm sạch dễ dàng',
    votes: 0
  },
  {
    id: 's224',
    name: 'GAMA Aqua-Lock',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Lock mang ý nghĩa chốt chặn, giữ lại, khoá lại. Như vậy thể hiện tính năng chống thấm nước (Aqua) cần phải có của dòng sơn chống thấm 2 thành phần pha xi măng G50 & G54. Đồng thời từ ngữ ngắn gọn, dễ hiểu, súc tích nên rất dễ nhớ và tạo ấn tượng gần giũ cho người sử dụng. 2. Và GAMA Aqua-Resistant Colour - Toát lên được ngay tính năng ưu việt là sản phẩm sơn màu (colour) và có tính năng chống/kháng nước cao (Resistant). Tính năng vốn phải có của dòng sản phẩm chống thấm màu G51 & G53 3. Và GAMA Multi RoofPaint - Thể hiện sơn chống thấm đa/chuyên dụng/đặc dụng của dòng chống thấm lộ thiên G55. Như vậy sẽ tránh gây sự nhầm lẫn giữa các dòng chống thấm do có mục đích/đặc tính/và cách ứng dụng là khác nhau',
    votes: 0
  },
  {
    id: 's225',
    name: 'GAMA Pro Putty',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Putty là chỉ ý nghĩa bột trét tường, bột bả, Mastic nói chung. Do đó sẽ súc tích ngắn gọn dễ hiểu cho người đọc/nhìn không gây hiểu nhầm và hiểu ngay tính năng của sản phẩm. Pro để chỉ thể hiện sản phẩm đẳng cấp, chất lượng. Có chữ Pro để phân biệt with dòng chiến lược có chữ Easy',
    votes: 0
  },
  {
    id: 's226',
    name: 'GAMA Easy Putty',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Putty là chỉ ý nghĩa bột trét tường, bột bả, Mastic nói chung. Do đó sẽ súc tích ngắn gọn dễ hiểu cho người đọc/nhìn không gây hiểu nhầm và hiểu ngay tính năng của sản phẩm. Easy nói lên tính chất dễ thi công/dễ sử dụng và phù hợp with định vị phân cấp sản phẩm và đồng thời để phân biệt with dòng cao cấp có chữ Pro',
    votes: 0
  },
  {
    id: 's227',
    name: 'GAMA Metallic Color',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Color là chỉ lớp sơn/lớp phủ có màu sắc. Metallic là ánh kim loại, thể hiện được sự sáng, sự lấp lánh ánh kim loại của sản phẩm sơn nhũ (giống ánh nhũ kim tuyến). Đồng thời còn nói lên tính nghệ thuật/đẳng cấp về màu sắc của dòng sản phẩm mang lại',
    votes: 0
  },
  {
    id: 's228',
    name: 'GAMA Royale',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện đẳng cấp "Hoàng gia". Dành cho những công trình biệt thự, căn hộ cao cấp đòi hỏi tính thẩm mỹ và độ bền màu cao nhất.',
    votes: 0
  },
  {
    id: 's229',
    name: 'GAMA Easy Clean',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Nhấn mạnh tính năng "Dễ lau chùi" vượt trội. Đánh bay vết bẩn bút bi, thức ăn dễ dàng, là lựa chọn số 1 cho gia đình có trẻ nhỏ.',
    votes: 0
  },
  {
    id: 's230',
    name: 'GAMA Econo',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Rút gọn từ "Economy" (Kinh tế). Định vị rõ ràng đây là dòng sơn giúp tiết kiệm tối đa ngân sách thi công.',
    votes: 0
  },
  {
    id: 's231',
    name: 'GAMA Ghost Shield',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Lớp bảo vệ ẩn mình, giữ nguyên vẹn 100% màu sắc và đường nét ban đầu của công trình.',
    votes: 0
  },
  {
    id: 's232',
    name: 'GAMA Glass Coat',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Trong suốt như kính, ngăn chặn mọi tác động bên ngoài mà không để lại dấu vết màu sắc.',
    votes: 0
  },
  {
    id: 's233',
    name: 'GAMA nvisible Guard',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Tên gọi trực diện, dễ nhớ, khẳng định tính năng bảo vệ tối đa nhưng không lộ diện.',
    votes: 0
  },
  {
    id: 's234',
    name: 'GAMA AQUA StormGuard',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chữ "Storm" (Bão tố) và "Guard" (Vệ sĩ/Bảo vệ). Lý do: Khẳng định sức mạnh siêu việt của màng sơn, được thiết kế đặc biệt để đương đầu with những điều kiện khí hậu nhiệt dới gió mùa, mưa bão khắc nghiệt nhất.',
    votes: 0
  },
  {
    id: 's235',
    name: 'GAMA Perfecta',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ "Perfecta" gợi sự hoàn hảo. Tượng trưng cho khả năng tạo ra một bề mặt tường láng mịn tuyệt đối, không một tì vết trước khi lăn sơn',
    votes: 0
  },
  {
    id: 's236',
    name: 'GAMA Flex',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ "Flex" (linh hoạt/co giãn). Nhấn mạnh khả năng đàn hồi tốt, thích ứng được with sự thay đổi nhiệt độ của thời tiết nhiệt đới để hạn chế nứt nẻ.',
    votes: 0
  },
  {
    id: 's237',
    name: 'GAMA Aurum',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chữ "Aurum" trong tiếng Latin có nghĩa là vàng ròng. Lý do: Cái tên này khẳng định đẳng cấp siêu cao cấp, gợi lên sự vương giả, quyền lực. màng sơn mang lại hiệu ứng lấp lánh ánh kim loại quý giá, giúp tôn vinh kiến trúc của những không gian xa hoa nhất.',
    votes: 0
  },
  {
    id: 's238',
    name: 'GAMA super life',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: '(Siêu Vòng Đời / Cuộc Sống Tuyệt Vời) là một cái tên mang thiên hướng cảm xúc, nhân văn và có tầm nhìn dài hạn. Khác with những cái tên mang tính kỹ thuật xơ cứng, "Super Life" hướng thẳng tới lợi ích cốt lõi của người tiêu dùng: Một sản phẩm mang lại tuổi thọ siêu dài cho công trình và kiến tạo một không gian sống tuyệt vời cho gia chủ.',
    votes: 0
  },
  {
    id: 's239',
    name: 'GAMA MaxLife',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ý Nghĩa: "Chạm Đỉnh Tuổi Thọ Công Trình"Lời cam kết về độ bền vững: Từ "Max" (Tối đa) đi liền with "Life" (Tuổi thọ/Vòng đời) là một lời khẳng định đanh thép rằng: Đây là sản phẩm giúp kéo dài tuổi thọ của bức tường và ngôi nhà đến mức tối đa. Sơn hoặc trét bột một lần, bảo vệ mười năm.Tối ưu hóa chi phí: Khách hàng nhìn vào tên sẽ cảm nhận được giá trị kinh tế dài hạn. Sản phẩm giúp họ tiết kiệm chi phí sửa chữa, sơn lại nhà trong tương lai nhờ độ bền bỉ vượt thời gian.',
    votes: 0
  },
  {
    id: 's240',
    name: 'GAMA EcoLife',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Ý Nghĩa: "Sơn Xanh Cho Cuộc Sống An Lành"Bảo vệ sức khỏe gia đình: Đây là lời cam kết mạnh mẽ về một dòng sơn an toàn. Sơn lên tường không để lại mùi nồng hắc độc hại, hàm lượng chất hữu cơ bay hơi cực thấp (Low VOC), không chứa chì hay thủy ngân. Giúp chủ nhà có thể dọn vào ở ngay mà không lo ảnh hưởng đến hệ hô hấp của người già và trẻ nhỏ.Thân thiện with thiên nhiên: Khẳng định quy trình sản xuất áp dụng công nghệ xanh, nguyên liệu tự nhiên, giảm thiểu khí thải carbon và đóng góp vào việc bảo vệ hệ sinh thái chung.',
    votes: 0
  },
  {
    id: 's241',
    name: 'GAMA Super SunBright',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ý Nghĩa: Bảo Vệ Và Tỏa Sáng Siêu Cấp"Định vị phân khúc 5 sao: Chữ "Super" ngay lập tức phân loại sản phẩm này vào nhóm Premium (Cao cấp) hoặc Luxury (Sang trọng). Khách hàng nhìn vào sẽ hiểu ngay đây là dòng sơn tốt nhất, bền nhất của hãng.Vẻ đẹp thách thức thời gian: "Super SunBright" mang ý nghĩa về một ngôi nhà luôn giữ được vẻ đẹp rực rỡ, tươi mới và sáng bóng như ngày đầu, bất chấp sự tàn phá của ánh nắng và thời tiết.',
    votes: 0
  },
  {
    id: 's242',
    name: 'GAMA MAX SunBright',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Ý Nghĩa: "Sức Mạnh Và Độ Tỏa Sáng Chạm Đỉnh"Tối đa hóa mọi tính năng: Chữ "MAX" khẳng định sản phẩm đã đạt đến giới hạn cao nhất về chất lượng. Đây là lời cam kết của bạn with khách hàng rằng: Sản phẩm này mang lại độ bền màu cao nhất, chống nóng tốt nhất và độ bóng đẹp nhất.Năng lượng công nghệ: Khác with từ "Super" mang tính truyền thống, từ "MAX" gợi liên tưởng đến các sản phẩm công nghệ thế hệ mới (như iPhone Pro Max, Max Speed). Nó định vị dòng sơn của bạn ứng dụng công nghệ tiên tiến, hiện đại.',
    votes: 0
  },
  {
    id: 's243',
    name: 'GAMA ECO SunBright',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ý Nghĩa: "Rực Rỡ Như Ánh Mặt Trời "Bền màu dưới nắng: Tên gọi này ngầm khẳng định chất lượng sơn có khả năng chống tia UV cực tốt, không bị phai màu hay ố vàng dù bị ánh nắng mặt trời chiếu trực tiếp hàng ngày.Tươi sáng và sống động: Gợi lên một không gian sống tràn ngập ánh sáng, năng lượng tích cực, giúp ngôi nhà luôn trông như mới và nổi bật giữa khu phố.',
    votes: 0
  },
  {
    id: 's244',
    name: 'GAMA AQUA ARMOR',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Áo Giáp Chống Nước"Cái tên này tạo ra một liên tưởng hình ảnh vô cùng trực quan và đáng tin cậy:Tấm khiên chắn nước: Biến bức tường thành một lớp áo giáp kiên cố, ngăn chặn hoàn toàn sự xâm nhập của nước mưa, hơi ẩm và nguồn nước ngầm.Bảo vệ tuyệt đối: Giống như một chiến binh mặc giáp lặn xuống nước mà không bị ướt, ngôi nhà của bạn sẽ hoàn toàn "bất tử" trước mùa mưa bão.',
    votes: 0
  },
  {
    id: 's245',
    name: 'GAMA SUPER SatinFiller',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bề mặt siêu láng mịn: Khả năng che phủ hoàn hảo, không để lại vết gợn, giúp bức tường mịn màng như dải lụa satin.Chất lượng cao cấp: Từ "Satin" gợi cảm giác sang trọng, quý phái, định vị đây là dòng sản phẩm có chất lượng vượt trội.Hỗ trợ sơn tối đa: Bề mặt tường sau khi xả nhám sẽ phẳng mịn tuyệt đối, giúp lớp sơn phủ lên màu đều, bóng đẹp và tiết kiệm sơn hơn.',
    votes: 0
  },
  {
    id: 's246',
    name: 'GAMA SatinFiller',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Bề mặt siêu láng mịn: Khả năng che phủ hoàn hảo, không để lại vết gợn, giúp bức tường mịn màng như dải lụa satin.Chất lượng cao cấp: Từ "Satin" gợi cảm giác sang trọng, quý phái, định vị đây là dòng sản phẩm có chất lượng vượt trội.Hỗ trợ sơn tối đa: Bề mặt tường sau khi xả nhám sẽ phẳng mịn tuyệt đối, giúp lớp sơn phủ lên màu đều, bóng đẹp và tiết kiệm sơn hơn.',
    votes: 0
  },
  {
    id: 's247',
    name: 'GAMA CANVAS COAT',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: '"Lớp áo sắc màu biến bức tường thành tranh".Ưu điểm: Từ này chuẩn chuyên ngành sơn, phát âm tiếng Anh nghe cực kỳ thuận miệng, sang trọng và có nhịp điệu dứt khoát (Can-vas-Coat).',
    votes: 0
  },
  {
    id: 's248',
    name: 'GAMA Pearl',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: '"Ngọc trai" lấp lánh nhẹ nhàng. Định vị một vẻ đẹp quý phái, đồng thời màng sơn trơn láng giúp chống bám bẩn hoàn hảo.',
    votes: 0
  },
  {
    id: 's249',
    name: 'GAMA SmartSpace',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: '"Không gian thông minh". Giải pháp tối ưu tích hợp 3 trong 1: che phủ vết nứt, lau chùi dễ dàng và lên màu sắc nét.',
    votes: 0
  },
  {
    id: 's250',
    name: 'GAMA Project',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Dòng sơn thiết kế chuyên dụng cho "Dự án". Phù hợp cho nhà ở xã hội, chung cư đại chúng cần tối ưu chi phí vật tư hàng loạt.',
    votes: 0
  },
  {
    id: 's251',
    name: 'GAMA ShieldMax',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Kết hợp giữa "Shield" (khiên) và "Max" (tối đa). Tượng trưng cho lớp khiên bảo vệ tối thượng cho mặt tiền ngôi nhà trước mưa bão, nắng gắt.',
    votes: 0
  },
  {
    id: 's252',
    name: 'GAMA ColorPlus',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: '"Color" (màu sắc) và "Plus" (cộng thêm). Tập trung vào bộ sưu tập màu sắc ngoại thất đa dạng, tươi sáng và công nghệ khóa màu bền bỉ hơn.',
    votes: 0
  },
  {
    id: 's253',
    name: 'GAMA EasyCoat',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: '"Easy" (dễ dàng). Tập trung vào tính tiện dụng: dễ pha trộn, dễ lăn, thi công mượt mà giúp tiết kiệm cả vật tư lẫn nhân công.',
    votes: 0
  },
  {
    id: 's254',
    name: 'GAMA HydroShield',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Ý tưởng: Chữ "Hydro" (Nước) và "Shield" (Cái khiên). Lý do: Tạo hình ảnh một chiếc khiên chắn nước kiên cố, vô hiệu hóa hoàn toàn sự tấn công của nước mưa, bảo vệ kết cấu tường bên trong luôn bền vững.',
    votes: 0
  },
  {
    id: 's255',
    name: 'GAMA UltraBond',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ "Ultra" (siêu) và "Bond" (liên kết). Thể hiện khả năng bám dính cực kỳ mạnh mẽ vào bề mặt xi măng, loại bỏ hoàn toàn rủi ro bong tróc hay phồng rộp.',
    votes: 0
  },
  {
    id: 's256',
    name: 'GAMA MaxCover',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ "Max" (tối đa) và "Cover" (độ phủ). Ý tưởng nhấn mạnh vào lợi ích kinh tế: bột trét rất dôi, che lấp tốt, thi công được diện tích lớn hơn trên mỗi bao.',
    votes: 0
  },
  {
    id: 's257',
    name: 'GAMA Radiant',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Ý tưởng: Chữ "Radiant" mang ý nghĩa rực rỡ, tỏa sáng từ bên trong. Lý do: Thể hiện khả năng bắt sáng tuyệt vời của các hạt nhũ siêu mịn, giúp không gian luôn rạng rỡ, tràn ngập năng lượng và sự sống động bất kể ngày hay đêm.',
    votes: 0
  },
  {
    id: 's258',
    name: 'GAMA Lumina',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ánh sáng của không gian và cảm giác rộng mở cho ngôi nhà.',
    votes: 0
  },
  {
    id: 's259',
    name: 'GAMA Harmony',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Sự hài hòa giữa chất lượng và giá trị. Phù hợp cho gia đình hiện đại muốn không gian ấm cúng, bền đẹp',
    votes: 0
  },
  {
    id: 's260',
    name: 'GAMA Green Smooth',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Thể hiện sinh thái, sống xanh, an toàn cho môi trường sống/người sử dụng, một xu hướng thời đại. Và Smooth là mịn, mượt đồng thời còn chỉ sự nhẹ nhàng/tinh tế cho không gian sống. Như vậy sẽ thể hiện/tôn lên được giá trị, an toàn của dòng sơn mịn.',
    votes: 0
  },
  {
    id: 's261',
    name: 'GAMA TITAN',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Titan có ý nghĩa mạnh mẽ, to lớn, bền bỉ,... Thể hiện bảo vệ công trình trước thời tiết khắc nghiệt, giữ màu bền lâu.',
    votes: 0
  },
  {
    id: 's262',
    name: 'GAMA Fortress',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Vẻ đẹp vượt thời gian. Dòng sơn cân bằng giữa độ bền, thẩm mỹ và chi phí đầu tư.',
    votes: 0
  },
  {
    id: 's263',
    name: 'GAMA Protect',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Protect là bảo vệ, ý chỉ sản phẩm mang lại sự bảo vệ ngôi nhà ở của bạn và bảo vệ tổ ấm càng thêm vững chãi, hạnh phúc',
    votes: 0
  },
  {
    id: 's264',
    name: 'GAMA Prime',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Nền tường hoàn hảo cho lớp sơn đẳng cấp. Tạo bề mặt phẳng mịn và chắc chắn.',
    votes: 0
  },
  {
    id: 's265',
    name: 'GAMA Standard',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Dễ thi công, dễ hoàn thiện. Giúp bề mặt tường đẹp và đồng đều với chi phí hợp lý.',
    votes: 0
  },
  {
    id: 's266',
    name: 'GAMA ArtMetal',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Hiệu ứng ánh kim sang trọng. Tạo điểm nhấn độc đáo, nâng tầm giá trị không gian.',
    votes: 0
  },
  {
    id: 's267',
    name: 'GAMA Elegance',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Tập trung vào sự "Thanh lịch". Phù hợp with kiến trúc tối giản hiện đại, nơi các sắc độ màu lên chuẩn xác và tinh tế nhất.',
    votes: 0
  },
  {
    id: 's268',
    name: 'GAMA Chroma',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Chuyên về "Màu sắc". Tập trung vào công nghệ khóa màu, mang đến bộ sưu tập màu sắc phong phú, rực rỡ và tươi trẻ cho không gian.',
    votes: 0
  },
  {
    id: 's269',
    name: 'GAMA Pure Keep',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Tôn vinh và lưu giữ vẻ đẹp thô mộc, nguyên bản nhất của vật liệu xây dựng.',
    votes: 0
  },
  {
    id: 's270',
    name: 'GAMA Origin Shine',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Giúp bề mặt tường có độ bóng nhẹ, làm nổi bật các đường vân đá, vân gỗ tự nhiên.',
    votes: 0
  },
  {
    id: 's271',
    name: 'GAMA Crystal Coat',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Trong vắt và lấp lánh như pha lê. Tên gọi mang lại cảm giác sang trọng, nâng tầm thẩm mỹ cho các mảng tường đá tự nhiên.',
    votes: 0
  },
  {
    id: 's272',
    name: 'GAMA AQUA EverDry',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chữ "Ever" (Mãi mãi) và "Dry" (Khô ráo). Lý do: Nhấn mạnh vào kết quả cuối cùng mà mọi gia chủ đều mong muốn: một ngôi nhà luôn trong trạng thái khô ráo, an toàn và sạch sẽ bất chấp mưa bão qua nhiều năm tháng.',
    votes: 0
  },
  {
    id: 's273',
    name: 'GAMA ArmorBase',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ "Armor" (áo giáp) và "Base" (lớp nền). Định vị lớp bột trét như một chiếc áo giáp kiên cố bảo vệ cốt tường từ bên trong, chống thấm và kiềm hóa xuất sắc.',
    votes: 0
  },
  {
    id: 's274',
    name: 'GAMA SmartBase',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ "Smart" (thông minh) và "Base" (nền tảng). Giải pháp xử lý bề mặt thông minh, mang lại sự cân bằng hoàn hảo giữa chất lượng thi công và chi phí đầu tư.',
    votes: 0
  },
  {
    id: 's275',
    name: 'GAMA Nacre',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chữ "Nacre" mang nghĩa là xà cừ. Lý do: Tên gọi xuất phát từ hiệu ứng ánh nhũ ngọc trai lấp lánh, có khả năng chuyển đổi màu sắc tinh tế dưới ánh sáng. Nó mang lại chiều sâu nghệ thuật và vẻ đẹp lộng lẫy, kiêu sa cho bề mặt tường.',
    votes: 0
  },
  {
    id: 's276',
    name: 'GAMA Pristine',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mang nghĩa "Nguyên bản, Hoàn mỹ". Lớp màng siêu liên kết chống trầy xước, giúp bức tường nội thất luôn giữ vẻ đẹp như ngày đầu.',
    votes: 0
  },
  {
    id: 's277',
    name: 'GAMA Active',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Hướng tới sự "Năng động". Màng sơn dẻo gia, chịu được các va chạm sinh hoạt thường ngày mà không để lại vệt xước.',
    votes: 0
  },
  {
    id: 's278',
    name: 'GAMA SwiftIn',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Màng sơn "Nhanh khô" ở điều kiện trong nhà. Giúp rút ngắn thời gian bàn giao, dọn vào ở được ngay mà không phải chờ đợi.',
    votes: 0
  },
  {
    id: 's279',
    name: 'GAMA Time Lock',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Đóng băng vẻ đẹp của ngôi nhà tại thời điểm mới hoàn thiện, ngăn chặn sự lão hóa, bạc màu do thời gian.',
    votes: 0
  },
  {
    id: 's280',
    name: 'GAMA Poly Guard',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Gợi liên tưởng đến gốc nhựa Polyurethane cao cấp, tạo lớp màng bảo vệ siêu dẻo dai, chống nứt nẻ cho tường ngoài trời.',
    votes: 0
  },
  {
    id: 's281',
    name: 'GAMA Diamond Drop',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ví lớp sơn trong suốt như những giọt kim cương lỏng, khi khô lại sẽ hóa thành lớp màng siêu cứng, chống trầy xước ngoại thất.',
    votes: 0
  },
  {
    id: 's282',
    name: 'GAMA Standard',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Standard" (tiêu chuẩn). Cái tên thể hiện sự minh bạch: cung cấp chính xác những tiêu chuẩn bảo vệ thiết yếu nhất cho bề mặt ngoài trời',
    votes: 0
  },
  {
    id: 's283',
    name: 'GAMA Diamond',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ "Diamond" (kim cương). Gợi lên chất lượng thượng hạng, độ bền vĩnh cửu và bề mặt hoàn thiện sắc sảo dành cho các công trình biệt thự cao cấp.',
    votes: 0
  },
  {
    id: 's284',
    name: 'GAMA Prime',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ "Prime" (ưu tiên/hàng đầu). Tự tin định vị đây sẽ là sự lựa chọn ưu tiên hàng ngày của đại đa số thợ sơn nhờ đặc tính dễ làm và giá thành phải chăng.',
    votes: 0
  },
  {
    id: 's285',
    name: 'GAMA Lusso',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chữ "Lusso" trong tiếng Ý nghĩa là sự xa xỉ (Luxury). Lý do: Một cái tên ngắn gọn, mang đậm âm hưởng Châu Âu, sinh ra để định vị phân khúc thượng lưu. Lớp sơn ánh nhũ ở đây không chỉ là vật liệu mà còn là một tuyên',
    votes: 0
  },
  {
    id: 's286',
    name: 'GAMA Fresh',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Từ "Tươi mới". Tích hợp tính năng khử mùi và chống nấm mốc, giữ cho không khí trong nhà luôn thoáng đãng, dễ chịu.',
    votes: 0
  },
  {
    id: 's287',
    name: 'GAMA Vital',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa "Thiết yếu, Sức sống". Thổi hồn vào những bức tường xi măng thô cứng trở nên sinh động và ngập tràn năng lượng.',
    votes: 0
  },
  {
    id: 's288',
    name: 'GAMA Essential',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Sản phẩm "Thiết yếu". Cung cấp đúng những gì một bức tường cơ bản cần: màng sơn sáng sủa, sạch sẽ và giá thành siêu rẻ.',
    votes: 0
  },
  {
    id: 's289',
    name: 'GAMA EverGuard',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: '"Ever" (mãi mãi) và "Guard" (bảo vệ). Gợi lên sự bảo vệ bền vững, không phai màu và giữ được vẻ đẹp nguyên bản qua nhiều năm tháng.',
    votes: 0
  },
  {
    id: 's290',
    name: 'GAMA Lotus',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: '"Lotus" (hoa sen). Gợi sự liên tưởng đến hiệu ứng lá sen, giúp màng sơn ngoại thất có khả năng tự làm sạch, chống thấm nước cực tốt khi trời mưa.',
    votes: 0
  },
  {
    id: 's291',
    name: 'GAMA EcoBasic',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: '"Eco" (kinh tế/tiết kiệm) và "Basic" (cơ bản). Thông điệp rõ ràng về một giải pháp sơn ngoại thất tiết kiệm nhất, phù hợp with mọi túi tiền.',
    votes: 0
  },
  {
    id: 's292',
    name: 'GAMA AQUA NanoPel',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chữ "Nano" (Công nghệ siêu nhỏ) và "Repel" (Đẩy lùi).Lý do: Phản ánh công nghệ chống thấm tiên tiến từ hạt nano, len lỏi sâu vào gốc tường để đẩy lùi phân tử nước, mang lại cảm giác công nghệ cao và đắt tiền cho sản phẩm.',
    votes: 0
  },
  {
    id: 's293',
    name: 'GAMA Supreme',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Chữ "Supreme" nghĩa là tối thượng. Tuyên ngôn về chất lượng bột trét dẫn đầu, mang lại trải nghiệm thi công đẳng cấp nhất.',
    votes: 0
  },
  {
    id: 's294',
    name: 'GAMA ProBuild',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Chữ "Pro" và "Build" (xây dựng). Lựa chọn tối ưu, đáp ứng các tiêu chuẩn kỹ thuật khắt khe của các nhà thầu dự án, chung cư và khu đô thị.',
    votes: 0
  },
  {
    id: 's295',
    name: 'GAMA Starlight',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chữ "Starlight" gợi ánh sáng của muôn ngàn vì sao. Lý do: Gợi liên tưởng trực quan đến màng sơn chứa hàng vạn hạt nhũ li ti tỏa sáng. Tên gọi này biến bức tường thành một bầu trời đêm lấp lánh, tạo điểm nhấn đầy lãng mạn, tinh tế và huyền ảo.',
    votes: 0
  },
  {
    id: 's296',
    name: 'GAMA PRESTIGE',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Chất lượng cao cho những công trình đòi hỏi . Ý nghĩa: Prestige tượng trưng cho uy tín và giá trị cao cấp.',
    votes: 0
  },
  {
    id: 's297',
    name: 'GAMA ADVANCE',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Công nghệ tiên tiến, chất lượng ổn định. Ý nghĩa: Advance thể hiện sự cải tiến và phát triển.',
    votes: 0
  },
  {
    id: 's298',
    name: 'GAMA BASIC',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Chất lượng ổn định cho công trình phổ thông. Ý nghĩa: Basic thể hiện phân khúc nền tảng, dễ hiểu.',
    votes: 0
  },
  {
    id: 's299',
    name: 'GAMA IMPERIAL',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Sang trọng và bền bỉ cho công trình. Ý nghĩa: Imperial gợi sự uy nghi.',
    votes: 0
  },
  {
    id: 's300',
    name: 'GAMA DURA',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Bền chắc trước mọi điều kiện thời tiết. Ý nghĩa: Dura viết tắt của Durable (bền bỉ), dễ nhớ và dễ nhận diện.',
    votes: 0
  },
  {
    id: 's301',
    name: 'GAMA EVEREST',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Chinh phục mọi điều kiện thời tiết. Ý nghĩa: Everest biểu tượng của sức mạnh và độ bền.',
    votes: 0
  },
  {
    id: 's302',
    name: 'GAMA HYDRO SHIELD',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Lá chắn chống thấm toàn diện, bảo vệ công trình trước mọi điều kiện thời tiết. Ý nghĩa: Hydro (nước) kết hợp Shield (lá chắn), truyền tải ngay công năng chống thấm.',
    votes: 0
  },
  {
    id: 's303',
    name: 'GAMA PERFECT BASE',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Nền tường hoàn hảo – Tạo bề mặt mịn đẹp cho mọi lớp sơn. Ý nghĩa: "Perfect Base" nhấn mạnh vai trò tạo nền hoàn hảo, phù hợp sản phẩm cao cấp.',
    votes: 0
  },
  {
    id: 's304',
    name: 'GAMA PRIME PUTTY',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Bột trét chất lượng ổn định cho mọi công trình. Ý nghĩa: Prime là dòng chủ lực, dễ phát triển thị trường.',
    votes: 0
  },
  {
    id: 's305',
    name: 'GAMA MASTERPIECE',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Biến mỗi công trình thành một tác phẩm nghệ thuật. Ý nghĩa: Masterpiece truyền tải thông điệp về sự hoàn mỹ và sáng tạo.',
    votes: 0
  },
  {
    id: 's306',
    name: 'GAMA Ombria',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Sự che chở và bền vững , giúp công trình luôn tươi sáng , đẹp và ổn định theo thời gian.',
    votes: 0
  },
  {
    id: 's307',
    name: 'GAMA Elyra',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Gợi vẻ đẹp thanh lịch và tinh tế, đại diện cho không gian sống hiện đại, sang trọng và bền đẹp theo thời gian.',
    votes: 0
  },
  {
    id: 's308',
    name: 'GAMA Norvia',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Bền vững, đáng tin cậy, phù hợp cho mọi gia đình with hiệu quả và chi phí tối ưu.',
    votes: 0
  },
  {
    id: 's309',
    name: 'GAMA Caelor',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Không gian thoáng sáng, dễ chịu và gần gũi.',
    votes: 0
  },
  {
    id: 's310',
    name: 'GAMA Virexa',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Sức sống mạnh mẽ, khả năng bảo vệ công trình trước nắng mưa và thời tiết khắc nghiệt.',
    votes: 0
  },
  {
    id: 's311',
    name: 'GAMA Ombria',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sự che chở và bền vững, giúp công trình luôn đẹp và ổn định theo thời gian.',
    votes: 0
  },
  {
    id: 's312',
    name: 'GAMA Tectora',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Bảo vệ bề mặt công trình hiệu quả.',
    votes: 0
  },
  {
    id: 's313',
    name: 'GAMA Hydrion',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Khả năng chống nước và chống ẩm vượt trội.',
    votes: 0
  },
  {
    id: 's314',
    name: 'GAMA Plenza',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Thể hiện bề mặt phẳng mịn, tạo nền hoàn hảo trước khi sơn phủ.',
    votes: 0
  },
  {
    id: 's315',
    name: 'GAMA Mavique',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Sự chắc chắn, dễ thi công, tăng độ bám dính cho lớp sơn hoàn thiện.',
    votes: 0
  },
  {
    id: 's316',
    name: 'GAMA Ornexa',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Tôn vinh vẻ đẹp và giá trị thẩm mỹ cho không gian.',
    votes: 0
  },
  {
    id: 's317',
    name: 'GAMA Onyx',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Tượng trưng cho sức mạnh, sự sang trọng và bền bỉ.',
    votes: 0
  },
  {
    id: 's318',
    name: 'GAMA Quartz',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Biểu tượng của sự tinh khiết và ổn định.',
    votes: 0
  },
  {
    id: 's319',
    name: 'GAMA Flint',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tượng trưng cho sự bền chắc và khởi đầu.',
    votes: 0
  },
  {
    id: 's320',
    name: 'GAMA Aegis',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Bảo vệ tối đa trước nắng mưa',
    votes: 0
  },
  {
    id: 's321',
    name: 'GAMA Valor',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sức mạnh và sự kiên cường trước thời tiết',
    votes: 0
  },
  {
    id: 's322',
    name: 'GAMA Boreal',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Gợi không khí trong lành và sự bền bỉ.',
    votes: 0
  },
  {
    id: 's323',
    name: 'GAMA Invicta',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Có nghĩa là "không thể bị chinh phục". Thể hiện khả năng chống thấm bền bỉ trong thời gian dài.',
    votes: 0
  },
  {
    id: 's324',
    name: 'GAMA Silvanta',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Hoàn thiện tinh luyện, bề mặt mịn cao cấp',
    votes: 0
  },
  {
    id: 's325',
    name: 'GAMA Gravix',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Nền tảng ổn định, làm phẳng cơ bản',
    votes: 0
  },
  {
    id: 's326',
    name: 'GAMA lumen',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Ánh sáng ấm áp lan tỏa trong không gian sống, tạo cảm giác dễ chịu, thân thuộc cho ngôi nhà',
    votes: 0
  },
  {
    id: 's327',
    name: 'GAMA MAX',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Đại diện cho chất lượng tối đa, khả năng che phủ vượt trội, bền màu, lau chùi tốt và mang đến không gian sống đẳng cấp.',
    votes: 0
  },
  {
    id: 's328',
    name: 'GAMA PRO',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Thể hiện sự chuyên nghiệp, cân bằng giữa chất lượng, độ bền và giá trị, phù hợp cho đa số công trình và nhà ở.',
    votes: 0
  },
  {
    id: 's329',
    name: 'GAMA GO',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tượng trưng cho sự khởi đầu, đáp ứng đầy đủ các nhu cầu sơn nội thất hằng ngày with chất lượng ổn định và chi phí hợp lý.',
    votes: 0
  },
  {
    id: 's330',
    name: 'GAMA Elite Pro',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện chuẩn chuyên nghiệp, bền đẹp vượt trội và bảo vệ tối ưu.',
    votes: 0
  },
  {
    id: 's331',
    name: 'GAMA Strong',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Là dòng sơn ngoại thất chiến lược, bền chắc, bảo vệ tối ưu và giữ màu dài lâu.',
    votes: 0
  },
  {
    id: 's332',
    name: 'GAMA Home',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Là lớp sơn giúp bảo vệ tường khỏi nắng, mưa và rêu mốc, đồng thời giữ màu bền đẹp, tăng tính thẩm mỹ và kéo dài tuổi thọ công trình.',
    votes: 0
  },
  {
    id: 's333',
    name: 'GAMA Dry',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Là dòng sơn chống thấm cao cấp, giúp bề mặt luôn khô ráo, ngăn nước thấm hiệu quả và bảo vệ công trình bền vững theo thời gian.',
    votes: 0
  },
  {
    id: 's334',
    name: 'GAMA Smooth Pro',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bột trét cao cấp, mịn đẹp vượt trội, bám dính tốt và hoàn thiện bề mặt chuyên nghiệp.',
    votes: 0
  },
  {
    id: 's335',
    name: 'GAMA Finish',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Tối ưu bề mặt nền, nâng cao chất lượng hoàn thiện và đảm bảo độ bền cho toàn hệ sơn.',
    votes: 0
  },
  {
    id: 's336',
    name: 'GAMA Style',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Tôn vinh phong cách riêng, mang lại không gian sống thẩm mỹ và hiện đại.',
    votes: 0
  },
  {
    id: 's337',
    name: 'GAMA Zenith',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Biểu tượng cho đỉnh cao, chất lượng vượt trội',
    votes: 0
  },
  {
    id: 's338',
    name: 'GAMA Horizon',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Biểu tượng của sự cân bằng , tầm nhìn và phát triển',
    votes: 0
  },
  {
    id: 's339',
    name: 'GAMA Dawn',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Biểu tượng cho sự tươi mới, hy vọng và năng lượng',
    votes: 0
  },
  {
    id: 's340',
    name: 'GAMA Stratus',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Tầng mây bao phủ, gợi khả năng che chở và bảo vệ ngôi nhà',
    votes: 0
  },
  {
    id: 's341',
    name: 'GAMA Cirrus',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Biểu tượng của sự nhẹ nhàng và thanh thoát',
    votes: 0
  },
  {
    id: 's342',
    name: 'GAMA Skara',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Tạo cảm giác bền bỉ và tinh tế',
    votes: 0
  },
  {
    id: 's343',
    name: 'GAMA Virelia',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Mịn tinh xảo , tái tạo bề mặt',
    votes: 0
  },
  {
    id: 's344',
    name: 'GAMA Nerix',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Liên kết bề mặt, che khuyết điểm',
    votes: 0
  },
  {
    id: 's345',
    name: 'GAMA HOMELIA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Gợi sự mềm mại, gắn kết và lan tỏa',
    votes: 0
  },
  {
    id: 's346',
    name: 'GAMA GOOD VALUE',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Giá trị xứng đáng Ý nghĩa: Đáng đồng tiền bát gạo',
    votes: 0
  },
  {
    id: 's347',
    name: 'GAMA FRIEND LINES',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Gần gũi và thân thiện Ý nghĩa: Tạo nên sự kết nối ấm áp',
    votes: 0
  },
  {
    id: 's348',
    name: 'GAMA Mịn Đẹp',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mịn như nhung, đẹp hoàn hảo. Bề mặt siêu mịn, lau chùi >10.000 lần, kháng khuẩn, mùi gần như = 0',
    slogan: 'Mịn Đẹp - Mịn như nhung, sang như ý.',
    votes: 0
  },
  {
    id: 's349',
    name: 'GAMA An Nhà',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'An toàn cho cả gia đình .Tầm trung, không mùi, dễ lau chùi',
    slogan: 'An Nhà - An tâm trong từng hơi thở.',
    votes: 0
  },
  {
    id: 's350',
    name: 'GAMA Sáng Nhà',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Sáng nhà, giá hợp lý , thấp nhất , độ phủ tốt, màu trắng sáng, giá mềm',
    slogan: 'Sáng Nhà - Bừng sáng mọi góc.',
    votes: 0
  },
  {
    id: 's351',
    name: 'GAMA Trường Sơn',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Trường Sơn vững chắc như núi, trường tồn. Sản phẩm cao nhất, chống tia UV, đàn hồi chống nứt, chống bám bụi nano. Thợ thầu công trình xịn dùng',
    slogan: 'Trường Sơn - Vững bền vượt nắng mưa.',
    votes: 0
  },
  {
    id: 's352',
    name: 'GAMA Bền Màu',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Bền màu, không phai. Sản phẩm tầm trung. Chống phai màu, chống rêu mốc, chống thấm',
    slogan: 'Bền Màu - Đẹp bền cùng năm tháng.',
    votes: 0
  },
  {
    id: 's353',
    name: 'GAMA Khiên Vàng',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Lá chắn bảo vệ tường.Chống thấm, chống kiềm tốt. Giá mềm dể đấu thầu, nhà giá rẻ',
    slogan: 'Khiên Vàng - Lá chắn cho tổ ấm.',
    votes: 0
  },
  {
    id: 's354',
    name: 'GAMA Aqua khóa thấm',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Khóa kín chân lông tường, chống thấm ngược, thấm sàn',
    slogan: 'Khóa Sàn - Khô sàn, chắc nhà.',
    votes: 0
  },
  {
    id: 's355',
    name: 'GAMA Mịn Lì',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bề mặt mịn lì, không tì vết, xả nhẹ như phấn',
    slogan: 'Mịn Lì - Nền phẳng như gương.',
    votes: 0
  },
  {
    id: 's356',
    name: 'GAMA Phẳng Nhà',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Dễ trét, dễ xả, phẳng nhanh',
    slogan: 'Phẳng Nhà - Trét tới đâu phẳng tới đó.',
    votes: 0
  },
  {
    id: 's357',
    name: 'GAMA nghệ thuật',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: '',
    slogan: 'Nghệ thuật tô vẽ cảm hứng cho ngôi nhà bạn.',
    votes: 0
  },
  {
    id: 's358',
    name: 'GAMA Pink',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Pink: Sắc hồng thanh lịch, mang đến không gian sống ấm áp, tinh tế và đầy cảm hứng',
    votes: 0
  },
  {
    id: 's359',
    name: 'GAMA Red',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Red: Gam đỏ rực rỡ, mang đến nguồn năng lượng tích cực và may mắn cho không gian sống.',
    votes: 0
  },
  {
    id: 's360',
    name: 'GAMA Yellow',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Yelellow: Sắc vàng tươi sáng, biểu trưng cho sự giàu có, thịnh vượng và hạnh phúc.',
    votes: 0
  },
  {
    id: 's361',
    name: 'GAMA Green',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Green: Sắc xanh tươi mát, mang đến cuộc sống yêu đời và tràn đầy sức sống.',
    votes: 0
  },
  {
    id: 's362',
    name: 'GAMA Blue',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Blue: Sắc xanh thanh bình, nâng tầm không gian sống, cho cuộc sống luôn xanh tươi và tràn đầy cảm hứng',
    votes: 0
  },
  {
    id: 's363',
    name: 'GAMA Purple',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Purple: Sắc tím thủy chung, đồng hành cùng những bức tường bền đẹp của ngôi nhà bạn.',
    votes: 0
  },
  {
    id: 's364',
    name: 'GAMA AquaWhite',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'White: Sắc trắng tinh khôi, kiến tạo không gian sống tươi sáng, thanh lịch và tràn đầy sức sống.',
    votes: 0
  },
  {
    id: 's365',
    name: 'GAMA GLOSCOAT US',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa - Độ bóng bẩy của sơn',
    votes: 0
  },
  {
    id: 's366',
    name: 'GAMA TOPCOAT US',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa - Lớp phủ tươi sáng',
    votes: 0
  },
  {
    id: 's367',
    name: 'GAMA DUARAPOL US',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Ý nghĩa - Độ bóng, độ cứng, độ bền',
    votes: 0
  },
  {
    id: 's368',
    name: 'GAMA AUREX',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ánh vàng, sang trọng, cao cấp',
    votes: 0
  },
  {
    id: 's369',
    name: 'GAMA LIVORA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Mang lại không gian sống',
    votes: 0
  },
  {
    id: 's370',
    name: 'GAMA LIVIO',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tổ ấm, thân thiện',
    votes: 0
  },
  {
    id: 's371',
    name: 'GAMA FORTEX',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Bền vững như pháo đài.',
    votes: 0
  },
  {
    id: 's372',
    name: 'GAMA DURON',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Độ bền cao',
    votes: 0
  },
  {
    id: 's373',
    name: 'GAMA CLADIA',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Bao phủ, bảo vệ',
    votes: 0
  },
  {
    id: 's374',
    name: 'GAMA HYDROX',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Chuyên chống thấm nước',
    votes: 0
  },
  {
    id: 's375',
    name: 'GAMA SMOOTEX',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bề mặt mịn',
    votes: 0
  },
  {
    id: 's376',
    name: 'GAMA FILLON',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Lấp đầy khuyết điểm',
    votes: 0
  },
  {
    id: 's377',
    name: 'GAMA ELORIA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Vẻ đẹp tinh tế, đẳng cấp',
    votes: 0
  },
  {
    id: 's378',
    name: 'GAMA EPOCH',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Ý Nghĩa - Kỷ nguyên mới. Tạo cảm giác thương hiệu lớn, có tầm nhìn.',
    votes: 0
  },
  {
    id: 's379',
    name: 'GAMA Tô Dấu Thời Gian',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tên như ý nghĩa',
    votes: 0
  },
  {
    id: 's380',
    name: 'GAMA LEGACY',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa - Di sản để lại, giá trị vượt thời gian, một lần chọn, mãi tin dùng',
    votes: 0
  },
  {
    id: 's381',
    name: 'GAMA FORTIS',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa - Mạnh mẽ, bền bỉ, trường tồn.',
    votes: 0
  },
  {
    id: 's382',
    name: 'GAMA Crafted for Life',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ý nghĩa - (Được tạo ra cho cuộc sống)',
    votes: 0
  },
  {
    id: 's383',
    name: 'GAMA Noble',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa - Cao quý, đẳng cấp.',
    votes: 0
  },
  {
    id: 's384',
    name: 'GAMA CORIUM',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa -  Lấy cảm hứng từ lớp lõi bền chắc (tên sáng tạo, nghe quốc tế). - GAMA HARMONY',
    votes: 0
  },
  {
    id: 's385',
    name: 'GAMA Foundation',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa -  Một nền tảng tốt không cần thay thế.',
    votes: 0
  },
  {
    id: 's386',
    name: 'GAMA VANTA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa -  Hiện đại, độc đáo, dễ nhớ.',
    votes: 0
  },
  {
    id: 's387',
    name: 'GAMA An',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Không gian sống an yên, an toàn và đẳng cấp. Dòng sơn cao cấp dành cho tổ ấm.',
    votes: 0
  },
  {
    id: 's388',
    name: 'GAMA Hòa',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Màu sắc hài hòa, không gian cân bằng, mang lại cảm giác dễ chịu và gần gũi.',
    votes: 0
  },
  {
    id: 's389',
    name: 'GAMA Mộc',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Gần gũi thiên nhiên, mộc mạc và chân thực. Phù hợp cho mọi công trình.',
    votes: 0
  },
  {
    id: 's390',
    name: 'GAMA Trường',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Bảo vệ công trình trường tồn trước thời gian và thời tiết.',
    votes: 0
  },
  {
    id: 's391',
    name: 'GAMA Kiên',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Kiên cố, bền vững trước nắng mưa và môi trường khắc nghiệt.',
    votes: 0
  },
  {
    id: 's392',
    name: 'GAMA Phong',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Chịu nắng gió, hòa cùng thiên nhiên.',
    votes: 0
  },
  {
    id: 's393',
    name: 'GAMA Giáp',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Lớp giáp bảo vệ',
    votes: 0
  },
  {
    id: 's394',
    name: 'GAMA Mịn',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Bề mặt mịn, hoàn thiện cao.',
    votes: 0
  },
  {
    id: 's395',
    name: 'GAMA Phẳng',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Tạo nền phẳng, dễ thi công.',
    votes: 0
  },
  {
    id: 's396',
    name: 'GAMA Nét',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Tạo nét riêng cho không gian.',
    votes: 0
  },
  {
    id: 's397',
    name: 'GAMA LUCEN',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Dòng sơn cao cấp thì thiên về độ sáng. Ý nghĩa: Mang đến không gian sáng bừng, sạch sẽ và hiện đại. Thông điệp hướng đến: Ánh sáng mang đến giá trị ngôi nhà bạn.',
    votes: 0
  },
  {
    id: 's398',
    name: 'GAMA FERON',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Mang thiên hướng sức mạnh như sắt thép, lớp sơn cao cấp như tượng đài kiên cố bảo vệ bên ngoài ngôi nhà của bạn',
    votes: 0
  },
  {
    id: 's399',
    name: 'GAMA MATCHA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: '\'\'Không gian sống xanh\'\'- Hướng đến sự trẻ trung, tươi mát và thanh lịch cho ngôi nhà bạn.',
    votes: 0
  },
  {
    id: 's400',
    name: 'GAMA Supa',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Toát lên được nét đẹp siêu cấp, khẳng định tầm chiến lược trên thương trường.',
    votes: 0
  },
  {
    id: 's401',
    name: 'GAMA BOSSCA',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tạo cảm giác gần gũi, dễ nhớ với người dùng nhưng vẫn thể hiện được sự đẳng cấp vượt trội về mặt chất lượng của dòng sơn.',
    votes: 0
  },
  {
    id: 's402',
    name: 'GAMA RAINCA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Vượt qua mọi thời tiết nắng-mưa- gió, bảo vệ vững chắc ngôi nhà bạn.',
    votes: 0
  },
  {
    id: 's403',
    name: 'GAMA RUMBO',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Thể hiện được đẳng cấp mang xu hướng châu âu, cam kết sự kiên cố-vững chãi-thách thức thời tiết của dòng sơn.',
    votes: 0
  },
  {
    id: 's404',
    name: 'GAMA BERRU',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Mang lại cảm giác màng sơn đanh chắc, bám dính siêu cường và bền bỉ trước nắng mưa',
    votes: 0
  },
  {
    id: 's405',
    name: 'GAMA AQUAKING',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Thể hiện được khả năng chống thấm nước cực tốt cho dòng sơn.',
    votes: 0
  },
  {
    id: 's406',
    name: 'GAMA COSTO',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Thể hiện được một năng lượng tích cực, hoàn hảo cho bột trét tường – cam kết độ đanh chắc, liên kết siêu cường và làm phẳng bề mặt khi thi công.',
    votes: 0
  },
  {
    id: 's407',
    name: 'GAMA LINDO',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Khẳng định được độ mịn, dẻo dai và bám dính cực tốt.',
    votes: 0
  },
  {
    id: 's408',
    name: 'GAMA KITANA',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Thể hiện được sự uyển chuyển, mềm mại trong nghệ thuật. Giúp hình dung ra được cái đẹp, sự tinh tí màu sắc trong ngành sơn trang trí.',
    votes: 0
  },
  {
    id: 's409',
    name: 'GAMA LƯU SẮC',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Thể hiện lưu giữ màu sắc theo thơi gian',
    votes: 0
  },
  {
    id: 's410',
    name: 'GAMA GO!',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Chúng tôi đã sẵn sàng tân trang ngôi nhà cùng bạn',
    votes: 0
  },
  {
    id: 's411',
    name: 'GAMA Refined',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện tính thẩm mỹ cao, bề mặt láng bóng/mịn màng (lớp sơn sau khi hoàn thiện mang vẻ đẹp tinh tế, láng mịn, cao cấp và có độ che phủ tốt).',
    votes: 0
  },
  {
    id: 's412',
    name: 'GAMA Emerald',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Thể hiện sự tươi mới, sinh sôi nảy nở và hòa hợp với thiên nhiên.',
    votes: 0
  },
  {
    id: 's413',
    name: 'GAMA Luminous',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Dùng để miêu tả màu sắc nổi bật, phát ra ánh sáng hoặc phản chiếu ánh sáng rực rỡ',
    votes: 0
  },
  {
    id: 's414',
    name: 'GAMA Vera',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: '“Tôn vinh vẻ đẹp thật của mọi không gian.”',
    votes: 0
  },
  {
    id: 's415',
    name: 'GAMA Gia Sắc',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Màu của mái ấm',
    votes: 0
  },
  {
    id: 's416',
    name: 'GAMA Veliora',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Nơi màu sắc đạt đến đẳng cấp ánh sáng',
    votes: 0
  },
  {
    id: 's417',
    name: 'GAMA Ký Sắc',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: '“Chọn màu sơn, là chọn ký ức bạn muốn giữ”',
    votes: 0
  },
  {
    id: 's418',
    name: 'GAMA Anvia',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Khởi nguồn bình yên từ sắc màu.',
    votes: 0
  },
  {
    id: 's419',
    name: 'GAMA Heritage Home',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '“Nơi lưu giữ giá trị gia đình qua nhiều thế hệ.”',
    votes: 0
  },
  {
    id: 's420',
    name: 'GAMA Haven',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Nơi bình yên bắt đầu từ sắc màu',
    votes: 0
  },
  {
    id: 's421',
    name: 'GAMA THỊNH VƯỢNG',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Cái tên này mang lời chúc tốt đẹp về sự giàu sang, may mắn và phát đạt cho chủ nhà. Khi thợ sơn hay đại lý tư vấn tên này, khách hàng sẽ rất thích vì ai cũng muốn ngôi nhà của mình mang lại sự "Thịnh Vượng". Đẳng cấp giàu sang',
    votes: 0
  },
  {
    id: 's422',
    name: 'GAMA AN GIA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'An" là an tâm, an toàn; "Gia" là nhà. Ý nghĩa là dòng sơn quốc dân, mang lại sự bảo vệ an tâm cho mọi ngôi nhà với chi phí tối ưu. Bảo vệ tổ ấm',
    votes: 0
  },
  {
    id: 's423',
    name: 'GAMA Sơ Tâm',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Sơ" là ban đầu, yếu tố đầu tiên. Tên gọi gợi cảm giác mộc mạc, tinh khôi và là bước khởi đầu không thể thiếu. Khởi đầu vững chắc',
    votes: 0
  },
  {
    id: 's424',
    name: 'GAMA OPTIMA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Dòng sơn cao cấp tối ưu hóa mọi tính năng ( như chống UV, phai màu, dễ lâu chùi... )',
    votes: 0
  },
  {
    id: 's425',
    name: 'GAMA PLATFORM',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sản phẩm nền tảng, chiến lược',
    votes: 0
  },
  {
    id: 's426',
    name: 'GAMA PURE',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ý nghĩa là dòng sơn cơ bản, mộc mạc và tinh tế, chỉ cần một bề mặt sơn mịn màng, tinh khôi và tiết kiệm chi phí.',
    votes: 0
  },
  {
    id: 's427',
    name: 'GAMA TITAN',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa - Cực kỳ cứng cáp, mạnh mẽ, không thể bị phá hủy.',
    votes: 0
  },
  {
    id: 's428',
    name: 'GAMA VITAL',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Vital" mang nghĩa là sống còn, cực kỳ trọng yếu, thiếu nó thì không thể tồn tại. Từ này nghe rất sang và mang tính kỹ thuật cao.',
    votes: 0
  },
  {
    id: 's429',
    name: 'GAMA MUST',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: '"Must have" là thuật ngữ chỉ một sản phẩm bắt buộc phải sở hữu, không thể thay thế. Tên này tạo sự tò mò, độc lạ',
    votes: 0
  },
  {
    id: 's430',
    name: 'GAMA FLASH',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Dòng sơn khiến không gian bừng sáng ngay lập tức, tạo hiệu ứng thu hút sự chú ý của người nhìn vào bức tường trang trí.',
    votes: 0
  },
  {
    id: 's431',
    name: 'GAMA Bridget',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Lớp sơn thể hiện quyền lực, sức mạnh và sự độc lập của người sử dụng',
    votes: 0
  },
  {
    id: 's432',
    name: 'GAMA Purity',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Lớp sơn mang vẻ đẹp tự nhiên, trong sáng',
    votes: 0
  },
  {
    id: 's433',
    name: 'GAMA Swiftness',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Sơn nhanh chóng, tiện lợi phù hợp đại đa số nhu cầu KH',
    votes: 0
  },
  {
    id: 's434',
    name: 'GAMA Vibrant color',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Những màu rực rỡ và tràn đầy năng lượng, thường gợi cảm giác sống động, bắt mắt, truyền tải sự năng động, nhiệt huyết, niềm vui và sự hiện đại.',
    votes: 0
  },
  {
    id: 's435',
    name: 'GAMA SunShield',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Tấm chắn, bảo bệ trước ánh nắng mặt trời',
    votes: 0
  },
  {
    id: 's436',
    name: 'GAMA WaterLock',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Khóa nước chức năng chống thấm nước',
    votes: 0
  },
  {
    id: 's437',
    name: 'GAMA SunGold',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Màu vàng rực rỡ',
    votes: 0
  },
  {
    id: 's438',
    name: 'GAMA EcoShield',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Lớp sơn bảo vệ thân thiện với môi trường',
    votes: 0
  },
  {
    id: 's439',
    name: 'GAMA SuperShield',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Sơn siêu bền bỉ bất chấp mọi thời tiết',
    votes: 0
  },
  {
    id: 's440',
    name: 'GAMA Laura',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Gợi hình ảnh nhẹ nhàng, sang trọng, tính tế, sức sống bền bỉ như cây nguyệt quế',
    votes: 0
  },
  {
    id: 's441',
    name: 'GAMA Liora',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Gợi ánh sáng, vẻ đẹp tinh tế, gợi không gian sáng đẹp, tràn đầy sống',
    votes: 0
  },
  {
    id: 's442',
    name: 'GAMA Sonila',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Gợi hình ảnh ánh sáng, vẻ đẹp, sự tinh tế, không gian ấm áp',
    votes: 0
  },
  {
    id: 's443',
    name: 'GAMA EverColor',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Nơi màu sắc luôn tỏa sáng, bền vững theo thời gian Ever: nghĩa là "mãi mãi", "luôn luôn", "bền vững", "không ngừng". Color: nghĩa là "màu sắc".',
    votes: 0
  },
  {
    id: 's444',
    name: 'GAMA Walllora',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Giải pháp lớp phủ dành cho những bức tường đẹp, Mang màu sắc, độ bền và sự tinh tế đến mọi công trình.',
    votes: 0
  },
  {
    id: 's445',
    name: 'GAMA Aqualis',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Thể hiện sự tinh khiết, bảo vệ bền vững, lớp phủ mượt mà, bền đẹp theo thời gian, vừa chống thấm, vừa tinh tế',
    votes: 0
  },
  {
    id: 's446',
    name: 'GAMA Elina',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Gợi hình ảnh tinh tế, thanh khiết, dịu dàng và cao cấp.',
    votes: 0
  },
  {
    id: 's447',
    name: 'GAMA PureShield',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Sơn bảo vệ, thân thiện môi trường Pure: tinh khiết, sạch, thuần khiết, trong lành. Shield: lá chắn, sự bảo vệ.',
    votes: 0
  },
  {
    id: 's448',
    name: 'GAMA Luxora Coatings',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Nơi vẻ đẹp trường tồn',
    votes: 0
  },
  {
    id: 's449',
    name: 'GAMA UltraShine',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Tươi sáng, bền màu',
    votes: 0
  },
  {
    id: 's450',
    name: 'GAMA Reigns',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Đẳng cấp hoàng gia',
    votes: 0
  },
  {
    id: 's451',
    name: 'GAMA Regal',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: '"Regal" mang tính chất hoàng gia. Tên gọi này gợi cảm giác về một không gian sống lộng lẫy, quý phái và bền vững theo thời gian.',
    votes: 0
  },
  {
    id: 's452',
    name: 'GAMAWISE',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Lựa chọn thông minh cho mọi không gian sống.',
    votes: 0
  },
  {
    id: 's453',
    name: 'GAMAGOOD',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Tiêu chuẩn tốt trong từng lớp sơn.',
    votes: 0
  },
  {
    id: 's454',
    name: 'GAMA ZETA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa thương hiệu cam kết cung cấp các sản phẩm bảo vệ công trình bền vững, vững chãi như núi non và hiện đạ',
    votes: 0
  },
  {
    id: 's455',
    name: 'GAMA INFINITY',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Mang ý nghĩa vẻ đẹp bền vững theo thời gian, không giới hạn khả năng sáng tạo cho mọi không gian sống.',
    votes: 0
  },
  {
    id: 's456',
    name: 'GAMA POWER',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'POWER nhấn mạnh sự sức mạnh bảo vệ và hiệu năng của sản phẩm',
    votes: 0
  },
  {
    id: 's457',
    name: 'GAMA ELITE',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'ELITE bền bỉ và hiện đại nhất cho các công trình',
    votes: 0
  },
  {
    id: 's458',
    name: 'GAME DURABLE',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Durable nhằm nhấn mạnh tiêu chuẩn chất lượng: tạo ra lớp nền vững chãi, bảo vệ bề mặt công trình luôn phẳng mịn và kéo dài tuổi thọ cho lớp sơn hoàn thiện.',
    votes: 0
  },
  {
    id: 's459',
    name: 'GAMA PIONEER',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'PIONEER thể hiện đặc tính ưu việt của vật liệu, mang lại bề mặt nhẵn mịn tuyệt đối và làm lớp nền hoàn hảo cho sơn phủ',
    votes: 0
  },
  {
    id: 's460',
    name: 'GAMA NEON',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Là sự kết hợp giữa nền tảng vững chắc (bảo vệ ngôi nhà) và phong cách đột phá (thể hiện cá tính nổi bật, gu thẩm mỹ hiện đại của gia chủ).',
    votes: 0
  },
  {
    id: 's461',
    name: 'GAMA Titan',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Mạnh mẽ như titan, độ bền vượt trội',
    votes: 0
  },
  {
    id: 's462',
    name: 'GAMA Spread',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Lan tỏa chất sơn cho Ngôi nhà chất hơn',
    votes: 0
  },
  {
    id: 's463',
    name: 'GAMAELLE',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Nền tảng bền vững + sự tinh tế của không gian sống',
    votes: 0
  },
  {
    id: 's464',
    name: 'GAMAELLE CANVASA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Nội thất nghệ thuật cao cấp',
    votes: 0
  },
  {
    id: 's465',
    name: 'GAMA Aurora',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Bình minh, vẻ đẹp và hy vọng.',
    votes: 0
  },
  {
    id: 's466',
    name: 'GAMA LEGACY LOUNGE',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ngôi nhà lưu giữ di sản và ký ức.',
    votes: 0
  },
  {
    id: 's467',
    name: 'GAMA Endurance',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Sự bền bỉ, kiên cường.',
    votes: 0
  },
  {
    id: 's468',
    name: 'GAMA Timeless',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Không bị giới hạn bởi thời gian.',
    votes: 0
  },
  {
    id: 's469',
    name: 'GAMA Everlasting',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Bền vững mãi mãi.',
    votes: 0
  },
  {
    id: 's470',
    name: 'GAMA Aurelia',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ánh vàng quý giá',
    votes: 0
  },
  {
    id: 's471',
    name: 'GAMA IronWall',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Bức tường sắt.',
    votes: 0
  },
  {
    id: 's472',
    name: 'GAMA PUREVA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Không gian tinh khiết, sống trọn an tâm',
    votes: 0
  },
  {
    id: 's473',
    name: 'GAMA SOLARIS',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'SOLARIS gợi từ Solar / Sol = Mặt trời, ánh sáng mặt trời, lấy cảm hứng từ mặt trời đại diện cho độ bền, vẻ đẹp và khả năng bảo vệ vượt trội cho công trình ngoại thất, SOLARIS: nghe phù hợp dòng cao cấp, dễ build bao bì, dễ phân cấp sản phẩm',
    votes: 0
  },
  {
    id: 's474',
    name: 'GAMA Anora',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Sơn nội thất, ấm áp từng góc nhà',
    votes: 0
  },
  {
    id: 's475',
    name: 'GAMA Forta',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ngoại thất sáng trong bền vững theo thời gian',
    votes: 0
  },
  {
    id: 's476',
    name: 'GAMA Gam',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Đa dạng màu sắc định hình phong cách của bạn',
    votes: 0
  },
  {
    id: 's477',
    name: 'GAMA Sun',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Lớp áo giáp bảo vệ bên ngoài',
    votes: 0
  },
  {
    id: 's478',
    name: 'GAMA Mino',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Thể hiện độ mịn màng bề mặt che lắp đi khuyết điểm',
    votes: 0
  },
  {
    id: 's479',
    name: 'GAMA Premia',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Thể hiện vị thế cao cấp, chất lượng vượt trội.',
    votes: 0
  },
  {
    id: 's480',
    name: 'GAMA Aureum',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Từ Latin nghĩa là "vàng", biểu tượng của sự thịnh vượng, đẳng cấp và giá trị bền vững.',
    votes: 0
  },
  {
    id: 's481',
    name: 'GAMA Primora',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Đẳng cấp hàng đầu.',
    votes: 0
  },
  {
    id: 's482',
    name: 'GAMA dreamers',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Mang ý nghĩa người mơ mộng. -Chỉ những người có hoài bão lớn, dám nghĩ dám làm và kiên trì theo đuổi ước mơ -người có trí tưởng tượng phong phú',
    votes: 0
  },
  {
    id: 's483',
    name: 'GAMA Velvet',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mịn như nhung, đẳng cấp vượt trội+"Velvet" nghĩa là nhung – biểu tượng của sự mềm mại và sang trọng. Tên GAMA Velvet thể hiện bề mặt sơn mịn đẹp, tinh tế, giúp không gian trở nên đẳng cấp và hiện đại hơn.',
    votes: 0
  },
  {
    id: 's484',
    name: 'GAMA EverCoat',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Lớp phủ bảo vệ trường tồn, khả năng che phủ tối đa, bền đẹp theo thời gian',
    votes: 0
  },
  {
    id: 's485',
    name: 'GAMA Silvora',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Silver (bạc, sáng bóng, cao cấp) Hậu tố -ora (thường dùng trong tên thương hiệu, tạo cảm giác hiện đại, sang trọng',
    votes: 0
  },
  {
    id: 's486',
    name: 'GAMA AVORA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Chữ AVORA được lấy cảm hứng từ “Aura” (hào quang), gợi sắc trắng tinh khiết, vẻ đẹp tinh khôi và sự sang trọng của không gian sống hiện đại.',
    votes: 0
  },
  {
    id: 's487',
    name: 'GAMA Aurelis',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Mang vẻ đẹp sang trọng như ánh vàng (Aure gợi ý từ từ : Aurum = vàng: Giá trị và tinh khiết) hướng đến không gian tinh tế và nghệ thuật sống hiện đại, Sang ngầm trong từng lớp sơn',
    votes: 0
  },
  {
    id: 's488',
    name: 'GAMA Sunvexa',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'SUN = Mặt trời, tia UV + VEXA (cảm hứng từ : Vex/Vexation - Khống chế, vô hiệu hóa & Apex - Đỉnh cao công nghệ). => Ý nghĩa: Công nghệ bảo vệ đỉnh cao cho ngoại thất CAO CẤP, giúp lớp sơn bền màu, chống nắng nóng và giữu vẻ đẹp lâu dài “Kiêu hãnh, bền bỉ, độc bản dưới ánh mặt trời.”',
    votes: 0
  },
  {
    id: 's489',
    name: 'GAMA Aqua Sealvex',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Seal khóa chặt, bít kín + Vex (Công nghệ/ kiểm soát)/ Vexillum (che chắn,bảo vệ) Khóa nước - bảo vệ công trình khỏi ẩm thấm từ mọi khe hở, bền vững theo thời gian',
    votes: 0
  },
  {
    id: 's490',
    name: 'GAMA CLASSY',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'ĐẲNG CẤP, THANH LỊCH ,THẨM MỶ',
    votes: 0
  },
  {
    id: 's491',
    name: 'GAMA ECOSAVER',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'TIẾT KIỆM HIỆU QUẢ',
    votes: 0
  },
  {
    id: 's492',
    name: 'GAMA AQUAPROOF',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'NGĂN CHẶN NƯỚC VỮNG CHẮC',
    votes: 0
  },
  {
    id: 's493',
    name: 'GAMA Cosmos',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Sang trọng, bí ẩn',
    votes: 0
  },
  {
    id: 's494',
    name: 'GAMA Calm Space',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Không gian bình yên, nơi để về',
    votes: 0
  },
  {
    id: 's495',
    name: 'GAMA Aegis',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Che chắn, bảo vệ, phòng thủ',
    votes: 0
  },
  {
    id: 's496',
    name: 'GAMA Promise',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Sự bảo chứng',
    votes: 0
  },
  {
    id: 's497',
    name: 'GAMA Elite',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Elite = Tinh hoa, ưu tú. * Đại diện cho dòng sơn cao cấp with công nghệ, độ bền và tính thẩm mỹ nổi bật.',
    votes: 0
  },
  {
    id: 's498',
    name: 'GAMA Home',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Home = Ngôi nhà. * Thể hiện dòng sơn dành cho mọi gia đình, đáp ứng nhu cầu sử dụng mọi nhà',
    votes: 0
  },
  {
    id: 's499',
    name: 'GAMA Plus',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Ý nghĩa nhiều hơn tốt hơn',
    votes: 0
  },
  {
    id: 's500',
    name: 'GAMA Core',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Đại diện cho dòng sản phẩm chất lượng ổn định, đáp ứng các nhu cầu cơ bản của khách hàng.',
    votes: 0
  },
  {
    id: 's501',
    name: 'GAMA Ultra',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Ultra = Vượt trội, cao hơn mức thông thường.',
    votes: 0
  },
  {
    id: 's502',
    name: 'GAMA EcoPlus Nano',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Nâng tầm ngôi nhà bạn lên chuẩn công nghệ tương lai',
    votes: 0
  },
  {
    id: 's503',
    name: 'GAMA ELYSIA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Là vùng đất thiên nhiên trong thần thoại Hy Lạp, nơi dành cho những con người ưu tú.Ý nghĩa: kiến tạo không gian đáng sống,đẳng cấp,bình yên và hoàn mỹ.',
    votes: 0
  },
  {
    id: 's504',
    name: 'GAMA LYRA',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa là cây đàn của thần Apollo,biểu tượng của nghệ thuật,hài hòa.Thông điệp:hài hòa trong từng gam màu',
    votes: 0
  },
  {
    id: 's505',
    name: 'GAMA AURA',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Hào quang,luồng năng lượng bao quanh mọi vật.Ý nghĩa:đơn giản nhưng luôn tạo cảm giác tươi mới.',
    votes: 0
  },
  {
    id: 's506',
    name: 'GAMA AEGIS',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Tấm khiên bảo vệ thần Zeus.Ý nghĩa: lá chắn bảo vệ công trình,bảo vệ bền vững.',
    votes: 0
  },
  {
    id: 's507',
    name: 'GAMA POSEIDON',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa thần biển cả,khống chế nước,chống lại sự xâm nhập của nước,làm chủ sức mạnh của nước.',
    votes: 0
  },
  {
    id: 's508',
    name: 'GAMA GAIA',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa mẹ của trái đất,mọi công trình đều bắt đầu từ nền móng vững chắc,nền móng tạo nên sự hoàn hảo.',
    votes: 0
  },
  {
    id: 's509',
    name: 'GAMA KRONOS',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Ý nghĩa TITAN của thời gian,độ bền theo thời gian,bền đẹp theo năm tháng.',
    votes: 0
  },
  {
    id: 's510',
    name: 'GAMA APOLLO',
    category: 'Sơn trang trí',
    tier: 'Cao cấp',
    reason: 'Ý nghĩa là thần ánh sáng,nghệ thuật và cái đẹp. Đưa nghệ thuật vào từng bức tường,tỏa sáng không gian sống.',
    votes: 0
  },
  {
    id: 's511',
    name: 'GAMA EMPEROR',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Cấp bậc cao nhất trong hệ thống hoàng gia, tượng trưng cho sự hoàn hảo, quyền lực và đẳng cấp tối thượng. Thông điệp: "Đỉnh cao vẻ đẹp cho không gian sống."',
    votes: 0
  },
  {
    id: 's512',
    name: 'GAMA KING',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'King" là Quốc Vương người cai trị vương quốc bằng sự ổn định, uy tín và đáng tin cậy. Thông điệp:"Chất lượng vững vàng cho mọi tổ ấm.',
    votes: 0
  },
  {
    id: 's513',
    name: 'GAMA PRINCE',
    category: 'Nội thất',
    tier: 'Cơ bản',
    reason: 'Prince" là Hoàng Tử biểu tượng của sự trẻ trung, năng động và dễ tiếp cận. Thông điệp: "Giải pháp kinh tế cho mọi công trình.',
    votes: 0
  },
  {
    id: 's514',
    name: 'GAMA IMPERIAL SHIELD',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'Imperial" đại diện cho Hoàng Gia tối cao. "Shield" là tấm khiên bảo vệ. Thông điệp: "Lá chắn hoàng gia cho mọi công trình.',
    votes: 0
  },
  {
    id: 's515',
    name: 'GAMA ROYAL GUARD',
    category: 'Ngoại thất',
    tier: 'Chiến lược',
    reason: 'Royal Guard" là đội cận vệ Hoàng Gia – luôn bảo vệ lâu đài và vương quốc. Thông điệp: "Bảo vệ bền bỉ theo năm tháng.',
    votes: 0
  },
  {
    id: 's516',
    name: 'GAMA KNIGHT',
    category: 'Ngoại thất',
    tier: 'Cơ bản',
    reason: 'Knight" là Hiệp Sĩ người bảo vệ trung thành và mạnh mẽ. Thông điệp: "Bền bỉ mỗi ngày, tiết kiệm chi phí.',
    votes: 0
  },
  {
    id: 's517',
    name: 'GAMA BASTION',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: '"Bastion" là thành lũy phòng thủ, lớp bảo vệ đầu tiên của một pháo đài. Thông điệp: "Lớp thành lũy vững chắc cho ngôi nhà.',
    votes: 0
  },
  {
    id: 's518',
    name: 'GAMA CROWN BASE',
    category: 'Bột trét/Matit',
    tier: 'Cao cấp',
    reason: 'Crown" là Vương Miện – biểu tượng của sự hoàn hảo. "Base" là nền tảng.Thông điệp: "Nền tảng hoàn hảo cho lớp sơn đẳng cấp.',
    votes: 0
  },
  {
    id: 's519',
    name: 'GAMA NOBLE BASE',
    category: 'Bột trét/Matit',
    tier: 'Chiến lược',
    reason: 'Noble" là tầng lớp quý tộc – ổn định, đáng tin cậy.Thông điệp: "Nền chắc vững vàng cho mọi công trình.',
    votes: 0
  },
  {
    id: 's520',
    name: 'GAMA Shield',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Shield tượng trưng cho lớp bảo vệ như lá chắn, ngăn nước',
    votes: 0
  },
  {
    id: 's521',
    name: 'GAMA VERA',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'VERA gợi sự chân thật, bền vững,ngắn gọn dễ đọc',
    votes: 0
  },
  {
    id: 's522',
    name: 'GAMA ENDURA',
    category: 'Ngoại thất',
    tier: 'Cao cấp',
    reason: 'ENDURA truyền tải thông điệp " bền bỉ theo thời gian",chuyên gia về độ bền',
    votes: 0
  },
  {
    id: 's523',
    name: 'GAMA AQUAFORTIS',
    category: 'Chống thấm',
    tier: 'Cao cấp',
    reason: 'Tên nổi bật, truyền tải thông điệp bảo vệ kiên cố, bền vững và chống chọi with mọi điều kiện thời tiết.',
    votes: 0
  },
  {
    id: 's524',
    name: 'GAMA Vĩnh Cửu',
    category: 'Nội thất',
    tier: 'Cao cấp',
    reason: 'Vĩnh Cửu mang thông điệp "Màu sơn Gama vĩnh cửu theo thời gian."',
    votes: 0
  },
  {
    id: 's525',
    name: 'GAMA ColorVN',
    category: 'Nội thất',
    tier: 'Chiến lược',
    reason: 'Color nghĩa là màu sắc, VN là Việt Nam. Mang ý nghĩa " Màu sơn Gama của Việt Nam mãi mãi đỉnh".',
    votes: 0
  }
];
