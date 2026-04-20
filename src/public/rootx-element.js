// ============================================================================
// ROOTX CUSTOM ELEMENT — Las Amigas Incorporated
// Complete rewrite with Web Awesome components
// Design inspired by: aka1908.com, ncnw.org, sgrho1922.org
// ============================================================================
// made by Raju Haldar - rajuhaldarx@gmial.com
// ─── IMAGE URLS ─────────────────────────────────────────────────────────────
const IMG = {
  logo: 'https://static.wixstatic.com/media/fd8f92_34328d41c68541d6b564f5cd1d865153~mv2.png/v1/fill/w_200,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Las%20Amigas%20Logo.png',
  logoFooter: 'https://static.wixstatic.com/media/fd8f92_846af7446dc3460381fff4181e36c84e~mv2.png/v1/fill/w_160,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/revised%20las%20amigas%20logo%20wo%20trademark.png',
  president: 'https://static.wixstatic.com/media/fd8f92_419fe813c99c4b0f892c7367bd8b2c9a~mv2.jpg/v1/fill/w_600,h_900,al_c,q_85,enc_avif,quality_auto/CShepard.jpg',
  volunteers: 'https://static.wixstatic.com/media/11062b_642de97584a2403ea74706b85754a031~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/11062b_642de97584a2403ea74706b85754a031~mv2.jpg',
  conclaveBoard: 'https://static.wixstatic.com/media/c822f1_e4ffba8ba60d4d9eb9260dea592f0fb0~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,enc_avif,quality_auto/c822f1_e4ffba8ba60d4d9eb9260dea592f0fb0~mv2.jpg',
  honorary: 'https://static.wixstatic.com/media/fd8f92_40e867f3a8d9450f8bbd75140936a840~mv2.png/v1/fill/w_900,h_700,al_c,q_90,enc_avif,quality_auto/LAI%20Honorary%20Sisters_edited.png',
  harambe: 'https://static.wixstatic.com/media/c822f1_5f2b7567f6934abfbf5672e2d32c4dcb~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/c822f1_5f2b7567f6934abfbf5672e2d32c4dcb~mv2.jpg',
  orchid: 'https://static.wixstatic.com/media/c822f1_0c90594f7d09424ca9c8a0afd97068ad~mv2.png/v1/fill/w_200,h_184,al_c,q_85,enc_avif,quality_auto/c822f1_0c90594f7d09424ca9c8a0afd97068ad~mv2.png',
  doraMason: 'https://static.wixstatic.com/media/c822f1_36f07b032b5e43e7a71018938dc630d9~mv2.png/v1/fill/w_600,h_580,al_c,q_90,enc_avif,quality_auto/Dora%20Mason_edited.png',
  firstConclave: 'https://static.wixstatic.com/media/fd8f92_ddfabf16802149f987df2edd5d87e94e~mv2.png/v1/fill/w_800,h_500,al_c,q_90,enc_avif,quality_auto/fd8f92_ddfabf16802149f987df2edd5d87e94e~mv2.png',
  communityGarden: 'https://static.wixstatic.com/media/11062b_8a57254d09294cbd8082feb9124e6c8c~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/11062b_8a57254d09294cbd8082feb9124e6c8c~mv2.jpg',
  schoolTeacher: 'https://static.wixstatic.com/media/11062b_103d0a44850042e796ba0a251508354d~mv2.jpg/v1/fill/w_1400,h_800,al_c,q_85,enc_avif,quality_auto/11062b_103d0a44850042e796ba0a251508354d~mv2.jpg',
  modernOffice: 'https://static.wixstatic.com/media/11062b_d2a6aed985d04edb8f28192b9220204d~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/11062b_d2a6aed985d04edb8f28192b9220204d~mv2.jpg',
  foodBank: 'https://static.wixstatic.com/media/fd8f92_6bd5327464d84bd2aeefa74c31d2c944~mv2.png/v1/fill/w_800,h_400,al_c,q_90,enc_avif,quality_auto/fd8f92_6bd5327464d84bd2aeefa74c31d2c944~mv2.png',
  homelessCovid: 'https://static.wixstatic.com/media/fd8f92_d9f6aa913cf5420c8bd9dfe489ea55b6~mv2.jpg/v1/fill/w_800,h_860,al_c,q_85,enc_avif,quality_auto/fd8f92_d9f6aa913cf5420c8bd9dfe489ea55b6~mv2.jpg',
  charlotteDonation: 'https://static.wixstatic.com/media/c822f1_d45bf7a1ab944f7f87070eee89218ae7~mv2.jpg/v1/fill/w_700,h_525,al_c,q_80,enc_avif,quality_auto/Charlotte%20Donation.jpg',
  morvenWater: 'https://static.wixstatic.com/media/c822f1_063d8f18fa7d4ef1991787b474b70a5b~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,enc_avif,quality_auto/c822f1_063d8f18fa7d4ef1991787b474b70a5b~mv2.jpg',
  studying: 'https://static.wixstatic.com/media/11062b_1c4fdb4de2024132bdeff48f6af41a07~mv2.jpeg/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/Studying.jpeg',
  bookDrive: 'https://static.wixstatic.com/media/fd8f92_8fcfe6fe399141d98cc4ddfdfdc97b20~mv2.jpg/v1/fill/w_700,h_525,al_c,q_80,enc_avif,quality_auto/Mooresville%20book%20drive_edited.jpg',
  movingIn: 'https://static.wixstatic.com/media/11062b_1e2d7e578d07445c9302c087770d166e~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/11062b_1e2d7e578d07445c9302c087770d166e~mv2.jpg',
  charlotteSchool: 'https://static.wixstatic.com/media/c822f1_a2a6be0fb71d4eb3b4895aa011b28040~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/Charlotte%20School%20Supplies.jpg',
  thanksgivingDinner: 'https://static.wixstatic.com/media/c822f1_00a8a9e0d1d94cfea81dc258b3325c6b~mv2.jpg/v1/fill/w_700,h_660,al_c,q_80,enc_avif,quality_auto/12thanksgiving%20dinner_JPG.jpg',
  mooresvilleLibrary: 'https://static.wixstatic.com/media/c822f1_56ed0cd2893d4a209f05776710f82d70~mv2.jpg/v1/fill/w_1400,h_1050,al_c,q_85,enc_avif,quality_auto/c822f1_56ed0cd2893d4a209f05776710f82d70~mv2.jpg',
  gastoniaHospice: 'https://static.wixstatic.com/media/c822f1_d88f76c203f746219ab29891bae23617~mv2.jpg/v1/fill/w_700,h_640,al_c,q_80,enc_avif,quality_auto/Gastonia%20Hospice%20Donation_edited.jpg',
  doctorAppt: 'https://static.wixstatic.com/media/11062b_2690b6da871342489f3836ca33ee4ef3~mv2.jpeg/v1/fill/w_700,h_640,al_c,q_85,enc_avif,quality_auto/Doctor%27s%20Appointment.jpeg',
  vote: 'https://static.wixstatic.com/media/11062b_57bcc3ab112f40688a423b40a3aab1e1~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_85,enc_avif,quality_auto/11062b_57bcc3ab112f40688a423b40a3aab1e1~mv2.jpeg',
  voteBoxes: 'https://static.wixstatic.com/media/11062b_03be1a6798a341f4984b1104b3f4a14a~mv2.jpg/v1/fill/w_700,h_700,al_c,q_80,enc_avif,quality_auto/Vote%20Boxes.jpg',
  voters: 'https://static.wixstatic.com/media/11062b_d57524e9f04048b4ac7a3a4070890854~mv2.jpg/v1/fill/w_700,h_700,al_c,q_80,enc_avif,quality_auto/Voters.jpg',
  kidneyFoundation: 'https://static.wixstatic.com/media/fd8f92_35c109efc7cd4df89cbc9909481351a1~mv2.png/v1/fill/w_500,h_120,al_c,q_85,enc_avif,quality_auto/Kidney%20foundation_edited_edited.png',
  lupus: 'https://static.wixstatic.com/media/c822f1_f5a33629b1404345a97c1cc09ab2bd69~mv2.png/v1/fill/w_450,h_320,al_c,q_85,enc_avif,quality_auto/LUPUS_edited.png',
  habitat: 'https://static.wixstatic.com/media/fd8f92_5f4e997ef16c4701964877de5b692e47~mv2.png/v1/fill/w_550,h_250,al_c,q_85,enc_avif,quality_auto/Habitat%20for%20humanity_edited.png',
  ncnw: 'https://static.wixstatic.com/media/c822f1_852127cedc214b0fba1a427842038ac4~mv2.png/v1/fill/w_380,h_380,al_c,q_85,enc_avif,quality_auto/national%20council%20of%20negro%20women_edited.png',
  boneMarrow: 'https://static.wixstatic.com/media/c822f1_a9b9aab11b5848e6a18fcf6f4df13cb8~mv2.png/v1/fill/w_450,h_270,al_c,q_85,enc_avif,quality_auto/BONE%20MARROW%20FOUNDATION_edited.png',
  impactButterflies: 'https://static.wixstatic.com/media/c822f1_613d2f6ce5964c05a9b029bb02c4985c~mv2.png/v1/fill/w_500,h_325,al_c,q_85,enc_avif,quality_auto/beautifulbutterflies%20logo_edited.png',
  highPointChapter: 'https://static.wixstatic.com/media/fd8f92_7001876509974622a09dd4265bdd5722~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/High%20Point%20Chapter.jpg',
  happyBirthday: 'https://static.wixstatic.com/media/fd8f92_58cc4ab40e4f41cb8e1b81a39abb8938~mv2.png/v1/fill/w_700,h_900,al_c,q_90,enc_avif,quality_auto/Happy%20Birthday.png',
  highPointList: 'https://static.wixstatic.com/media/fd8f92_6a900548fe1f46508f14d41dfd436356~mv2.png/v1/fill/w_700,h_900,al_c,q_90,enc_avif,quality_auto/high%20point%20chapter%20list.png',
  programEconDev: 'https://static.wixstatic.com/media/c822f1_ccbc795cef724db9ba8c3c147473f846~mv2.jpg/v1/fill/w_600,h_500,al_c,q_80,enc_avif,quality_auto/dreams-need-to-be-nurtured.jpg',
  programEducation: 'https://static.wixstatic.com/media/c822f1_479eaf65829848a2a242f5708eff8ce6~mv2.png/v1/fill/w_600,h_500,al_c,q_85,enc_avif,quality_auto/5.png',
  programFamily: 'https://static.wixstatic.com/media/c822f1_3d0b06875ec640858ef5acd7cfc6d389~mv2.png/v1/fill/w_600,h_500,al_c,q_85,enc_avif,quality_auto/13.png',
  programHealth: 'https://static.wixstatic.com/media/fd8f92_3c3b315b7bda4bf5be50ce15376dea42~mv2.png/v1/fill/w_600,h_500,al_c,q_85,enc_avif,quality_auto/8.png',
  programPolitical: 'https://static.wixstatic.com/media/c822f1_55bcc387ee2847c0bed4b985f275f38f~mv2.png/v1/fill/w_600,h_500,al_c,q_85,enc_avif,quality_auto/14.png',
  conclaveFlyer: 'https://static.wixstatic.com/media/fd8f92_5d87e630b4754154a51baf9e4b77496b~mv2.png/v1/fill/w_800,h_1000,al_c,q_90,enc_avif,quality_auto/JW%20Mariott%20Flyer.png',
  // Values card images (About Us)
  valCommitment: 'https://static.wixstatic.com/media/c822f1_07c0160acdcc4bb9978df63c440759b3~mv2.png/v1/fill/w_360,h_246,al_c,q_85,enc_avif,quality_auto/8_edited.png',
  valCitizenship: 'https://static.wixstatic.com/media/c822f1_26c757bae2da4679b3d0c9ae08e2fd02~mv2.png/v1/fill/w_348,h_268,al_c,q_85,enc_avif,quality_auto/Copy%20of%20Copy.png',
  valIntegrity: 'https://static.wixstatic.com/media/c822f1_1048a76b427146f3a9a7532f4ecd5d6f~mv2.png/v1/fill/w_336,h_252,al_c,q_85,enc_avif,quality_auto/1_edited.png',
  valRespect: 'https://static.wixstatic.com/media/c822f1_8ae2926059aa47ad8c9c1ee4168336ff~mv2.png/v1/fill/w_312,h_262,al_c,q_85,enc_avif,quality_auto/7_edited.png',
  valService: 'https://static.wixstatic.com/media/c822f1_2380ce8a648b447f8ce37f65044cc395~mv2.png/v1/fill/w_372,h_324,al_c,q_85,enc_avif,quality_auto/4_edited.png',
  valTeamwork: 'https://static.wixstatic.com/media/c822f1_e918194306a442b8855c784a6ebca71b~mv2.png/v1/fill/w_396,h_274,al_c,q_85,enc_avif,quality_auto/6_edited.png',
  // Get Involved card images
  iconGive: 'https://static.wixstatic.com/media/c822f1_54d6a34daca643d0a6089b013fb10950~mv2.png/v1/fill/w_384,h_288,al_c,q_85,enc_avif,quality_auto/9_edited.png',
  iconSocial: 'https://static.wixstatic.com/media/c822f1_5d8bba996f1b4bd1afbbb88aa8d1ab1a~mv2.png/v1/fill/w_342,h_348,al_c,q_85,enc_avif,quality_auto/10_edited.png',
  iconVolunteer: 'https://static.wixstatic.com/media/c822f1_fc2c56f4b203413ead659985438f03f9~mv2.png/v1/fill/w_354,h_366,al_c,q_85,enc_avif,quality_auto/8_edited.png',
  iconSponsor: 'https://static.wixstatic.com/media/c822f1_f9706280568043c2afa6cb2f7ae73537~mv2.png/v1/fill/w_306,h_288,al_c,q_85,enc_avif,quality_auto/sponsor%20icon_edited.png',
  iconCorporate: 'https://static.wixstatic.com/media/c822f1_68d046413472425d95f55932190e1243~mv2.png/v1/fill/w_414,h_366,al_c,q_85,enc_avif,quality_auto/11_edited.png',
  // In Memoriam photos
  memDiggs: 'https://static.wixstatic.com/media/fd8f92_622e174f12024fb1840c2781589a35ff~mv2.webp/v1/fill/w_315,h_388,al_c,q_80,enc_avif,quality_auto/Dr_%20Edna%20L_%20Diggs.webp',
  memGoodner: 'https://static.wixstatic.com/media/fd8f92_4721ef00a3ee483e99f58a1daf59b948~mv2.png/v1/fill/w_315,h_388,al_c,q_85,enc_avif,quality_auto/Annlouise%20Goodner-Brown.png',
  memJamison: 'https://static.wixstatic.com/media/fd8f92_0b263184ccdb48b8a897f28b0e55d339~mv2.jpg/v1/fill/w_280,h_344,al_c,q_80,enc_avif,quality_auto/Barbara%20Jamison%20.jpg',
  // Our Impact photos
  impactPhoto1: 'https://static.wixstatic.com/media/fd8f92_4966bf6be96c4946afcb0934cabbb4bf~mv2.jpeg/v1/fill/w_500,h_667,al_c,q_80,enc_avif,quality_auto/IMG_4519.jpeg',
  impactPhoto2: 'https://static.wixstatic.com/media/fd8f92_ef6dc05bc8e841c3a2ad7e83802a09f0~mv2.jpeg/v1/fill/w_500,h_375,al_c,q_80,enc_avif,quality_auto/IMG_4007.jpeg',
  impactPhoto3: 'https://static.wixstatic.com/media/fd8f92_305da4ff069c42a692cb6d843add580b~mv2.jpeg/v1/fill/w_500,h_667,al_c,q_80,enc_avif,quality_auto/IMG_4009.jpeg',
  // Madam President Collage
  presidentCollage: 'https://static.wixstatic.com/media/c822f1_86d4f314318c4cc791a8240e86b6d8b0~mv2.png/v1/fill/w_600,h_260,al_c,q_85,enc_avif,quality_auto/c822f1_86d4f314318c4cc791a8240e86b6d8b0~mv2.png',
  // Gwinnett Chapter Induction
  gwinnettInduction: 'https://static.wixstatic.com/media/fd8f92_9cfb5e527dd2478896d7b6c8989a83e3~mv2.jpeg/v1/fill/w_1200,h_675,al_c,q_80,enc_avif,quality_auto/3E9D5155-623C-4DCD-B2E3-576C7B6E9587_heic.jpeg',
  // About Us: Ports Chapter with Firefighters
  portsChapter: 'https://static.wixstatic.com/media/c822f1_074adfbe3ea34d46b3dea73e98a03cc1~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/c822f1_074adfbe3ea34d46b3dea73e98a03cc1~mv2.jpg',
  // Humani magazine
  humaniMag: 'https://static.wixstatic.com/media/fd8f92_b5b2f8f653b84c8e9b608d31872a3822~mv2.png/v1/fill/w_600,h_777,al_c,q_90,enc_avif,quality_auto/Humani%20magazine.png',
  // Programmatic thrust cards (from crawl - higher quality)
  thrustEconDev: 'https://static.wixstatic.com/media/c822f1_02b9b3d20b20406ebf5448c8baa04449~mv2.png/v1/fill/w_600,h_336,al_c,q_85,enc_avif,quality_auto/13.png',
  thrustEducation: 'https://static.wixstatic.com/media/c822f1_479eaf65829848a2a242f5708eff8ce6~mv2.png/v1/fill/w_600,h_344,al_c,q_85,enc_avif,quality_auto/5.png',
  thrustFamily: 'https://static.wixstatic.com/media/c822f1_3d0b06875ec640858ef5acd7cfc6d389~mv2.png/v1/fill/w_600,h_338,al_c,q_85,enc_avif,quality_auto/13.png',
  thrustHealth: 'https://static.wixstatic.com/media/c822f1_58d5e7a73fab4906a385d62e9ac88aa2~mv2.png/v1/fill/w_600,h_335,al_c,q_85,enc_avif,quality_auto/8.png',
  thrustPolitical: 'https://static.wixstatic.com/media/c822f1_55bcc387ee2847c0bed4b985f275f38f~mv2.png/v1/fill/w_600,h_340,al_c,q_85,enc_avif,quality_auto/14.png',
  // Donate icon
  donateIcon: 'https://static.wixstatic.com/media/c822f1_24c43f780cd848c9a0e4e05b6fb35488~mv2.png/v1/fill/w_246,h_246,al_c,q_85,enc_avif,quality_auto/c822f1_24c43f780cd848c9a0e4e05b6fb35488~mv2.png',
  // Mary Moore portrait
  maryMoore: 'https://static.wixstatic.com/media/c822f1_13034aee31f444bb968ad0b1ccd4f1f4~mv2.png/v1/fill/w_600,h_580,al_c,q_90,enc_avif,quality_auto/Mary%20Moore_edited.png',
  // Regions banner
  regionsBanner: 'https://static.wixstatic.com/media/c822f1_81ced90c57e9475ca976f35f274c56b4~mv2.jpg/v1/fill/w_1400,h_580,al_c,q_85,enc_avif,quality_auto/c822f1_81ced90c57e9475ca976f35f274c56b4~mv2.jpg',
  // Programmatic thrusts banner (Blue Structure)
  blueStructure: 'https://static.wixstatic.com/media/11062b_38989b732cab40aea5bfabd4f3849033~mv2_d_3000_1687_s_2.jpg/v1/fill/w_1400,h_787,al_c,q_85,enc_avif,quality_auto/11062b_38989b732cab40aea5bfabd4f3849033~mv2_d_3000_1687_s_2.jpg',
  // Collaborating at Work (programmatic thrusts secondary)
  collaboratingWork: 'https://static.wixstatic.com/media/11062b_f16f404da81a4c65b25915cb334fe320~mv2.jpg/v1/fill/w_1400,h_933,al_c,q_85,enc_avif,quality_auto/11062b_f16f404da81a4c65b25915cb334fe320~mv2.jpg',
  // Education banner (3.png)
  educationBanner: 'https://static.wixstatic.com/media/c822f1_62299fa000c746d796fa6d7e9c657a12~mv2.png/v1/fill/w_1400,h_800,al_c,q_90,enc_avif,quality_auto/c822f1_62299fa000c746d796fa6d7e9c657a12~mv2.png',

  // ── Leader headshots: Central Region ──
  leaderFeliciaAndrews: 'https://static.wixstatic.com/media/fd8f92_e84537ec22734230b5e49a556bfdacbd~mv2.jpg/v1/crop/x_43,y_0,w_394,h_480/fill/w_443,h_540,al_c,lg_1,q_80,enc_avif,quality_auto/Felicia%20Andrews.jpg',
  leaderRonitaHemingway: 'https://static.wixstatic.com/media/fd8f92_e3a00e7be34e4538be910348942ad885~mv2.jpg/v1/crop/x_0,y_130,w_1428,h_1741/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/2_edited.jpg',
  leaderBiancaWoods: 'https://static.wixstatic.com/media/fd8f92_8c4ef782a98b437caae8ea896caf523d~mv2.jpg/v1/crop/x_63,y_0,w_1113,h_1357/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Bianca_edited.jpg',
  leaderRhondaWilson: 'https://static.wixstatic.com/media/fd8f92_592a6c980bcc4e29a08b8e972aeb4b7f~mv2.png/v1/fill/w_443,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited_edited_edited.png',
  // ── Leader headshots: Mid-Atlantic Region ──
  leaderKeishaShelton: 'https://static.wixstatic.com/media/fd8f92_1d2200a7c42d4acea8b26704b12fa974~mv2.jpg/v1/crop/x_0,y_0,w_828,h_1010/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Keisha%20Shelton_edited_edited.jpg',
  leaderKatrinaHarrison: 'https://static.wixstatic.com/media/fd8f92_592a6c980bcc4e29a08b8e972aeb4b7f~mv2.png/v1/crop/x_256,y_0,w_889,h_1081/fill/w_444,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited_edited_edited.png',
  leaderCarolynBonner: 'https://static.wixstatic.com/media/fd8f92_ca01e505cd614726adbc4ce63e7f6385~mv2.jpg/v1/crop/x_0,y_7,w_457,h_557/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Chesterfield%20Chp%20Pres_edited_edited_edit.jpg',
  leaderAngelaMoore: 'https://static.wixstatic.com/media/fd8f92_1a82b0c58c134ea88928cd4c715e96b9~mv2.jpg/v1/crop/x_0,y_211,w_1242,h_1511/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Angela%20Moore_edited_edited.jpg',
  leaderLeniceSudds: 'https://static.wixstatic.com/media/fd8f92_ff191b4ea7e94466ae4ffb63549bf435~mv2.png/v1/crop/x_420,y_0,w_1140,h_1387/fill/w_444,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited.png',
  leaderCarolineSamuels: 'https://static.wixstatic.com/media/fd8f92_ff191b4ea7e94466ae4ffb63549bf435~mv2.png/v1/crop/x_420,y_0,w_1140,h_1387/fill/w_444,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited.png',
  leaderJanetDennis: 'https://static.wixstatic.com/media/fd8f92_ec0e6afee9df4ad1b2b70e01f6fe37bb~mv2.jpg/v1/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Janet%20Dennis_edited_edited.jpg',
  leaderDarvinaTerry: 'https://static.wixstatic.com/media/fd8f92_986291f6b3844f789668db17606c6fa0~mv2.jpg/v1/crop/x_0,y_0,w_1177,h_1434/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Darvina%20Terry2_edited.jpg',
  leaderPearlieBlanks: 'https://static.wixstatic.com/media/fd8f92_22bd9629d75a450da08f94884f7e073c~mv2.jpg/v1/fill/w_444,h_540,al_c,q_80,enc_avif,quality_auto/Suffolk%20Chp%20President_edited_edited.jpg',
  // ── Leader headshots: Northeast Region ──
  leaderWillaMajors: 'https://static.wixstatic.com/media/fd8f92_ec2b394a403b4edcbba7ddc1d2ac373a~mv2.png/v1/crop/x_204,y_0,w_787,h_959/fill/w_443,h_540,al_c,q_85,enc_avif,quality_auto/Willa%20Majors%20Johnson_edited.png',
  leaderThelmaMurray: 'https://static.wixstatic.com/media/fd8f92_592a6c980bcc4e29a08b8e972aeb4b7f~mv2.png/v1/crop/x_257,y_0,w_887,h_1081/fill/w_443,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited_edited_edited.png',
  leaderSharonPetty: 'https://static.wixstatic.com/media/fd8f92_bcaf82ea8075412caa365624daff887f~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Floral%20Title%20Page%20Presentation%20(8_edited.jpg',
  leaderDeniAntoinette: 'https://static.wixstatic.com/media/fd8f92_bcaf82ea8075412caa365624daff887f~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Floral%20Title%20Page%20Presentation%20(8_edited.jpg',
  leaderEleanorJohnson: 'https://static.wixstatic.com/media/fd8f92_3400f9113de74dafac1752f24c9d202c~mv2.png/v1/crop/x_0,y_114,w_1980,h_2414/fill/w_443,h_540,al_c,q_85,enc_avif,quality_auto/Eleanor%20Johnson_edited_edited_edited_edi.png',
  leaderNicoleGaskin: 'https://static.wixstatic.com/media/fd8f92_90bb56fb304d4478801304f588063592~mv2.jpg/v1/crop/x_27,y_0,w_246,h_300/fill/w_344,h_420,al_c,lg_1,q_80,enc_avif,quality_auto/Dr%20Nicole%20Gaskins-Laniyan1_edited.jpg',
  leaderDanitaBerry: 'https://static.wixstatic.com/media/fd8f92_ff191b4ea7e94466ae4ffb63549bf435~mv2.png/v1/fill/w_443,h_540,al_c,q_85,enc_avif,quality_auto/orchid%20flower-02_edited_edited_edited.png',
  // ── Leader headshots: Southeast Region ──
  leaderWandaPugh: 'https://static.wixstatic.com/media/fd8f92_6b1d5798078f4eb997531293c0929133~mv2.jpg/v1/crop/x_135,y_0,w_1231,h_1500/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Wanda_Pugh-trice_edited.jpg',
  leaderSharonSimmons: 'https://static.wixstatic.com/media/fd8f92_d050cdf3e1b946b08451e5076af366dc~mv2.jpg/v1/crop/x_0,y_130,w_1428,h_1741/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/7_edited.jpg',
  leaderCarolRichardson: 'https://static.wixstatic.com/media/fd8f92_3306a770fea94690b2609736addad367~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/C%20Richardson3_edited.jpg',
  leaderTraciJones: 'https://static.wixstatic.com/media/fd8f92_8134b84e1836480daca9969eacb2b5c5~mv2.jpg/v1/crop/x_0,y_106,w_1274,h_1553/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Raeford%20Chapter%20President_edited.jpg',
  leaderXavierMcCutcheon: 'https://static.wixstatic.com/media/fd8f92_90a1374d5daa4a528e8aa11ea9976533~mv2.jpg/v1/crop/x_0,y_123,w_2259,h_2754/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Xavier%20McCutcheon_edited_edited.jpg',
  leaderEvelynJemison: 'https://static.wixstatic.com/media/fd8f92_94bf6ba6649c430cacff0c694985deb7~mv2.jpg/v1/crop/x_172,y_0,w_931,h_1136/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Red%20Springs%20Chpt_edited_edited.jpg',
  leaderReneeBeatty: 'https://static.wixstatic.com/media/fd8f92_6eda9eb5ea6b4aebb333f504d77add9e~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Renee%20Beaty%20Wilmington%20Chp%20President_edited.jpg',
  // ── Leader headshots: Southwest Region ──
  leaderMamieWatkins: 'https://static.wixstatic.com/media/fd8f92_bcfa62f2d315403e9e4056a1fad7c1cf~mv2.jpg/v1/crop/x_0,y_74,w_1921,h_2342/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/MWatkins%20v1_edited_edited_edited.jpg',
  leaderElizabethKersey: 'https://static.wixstatic.com/media/fd8f92_95460137186c40c08b443d216a795b87~mv2.jpg/v1/crop/x_0,y_130,w_1428,h_1741/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/9_edited.jpg',
  leaderSandraAnderson: 'https://static.wixstatic.com/media/fd8f92_3669a0c574de4085a39e3b5f4891b8f8~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/sandra%20anderson_edited.jpg',
  leaderCynthiaShepard: 'https://static.wixstatic.com/media/fd8f92_20d36c44daf84cae985279405a78319c~mv2.jpg/v1/crop/x_0,y_130,w_1428,h_1741/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/11_edited.jpg',
  leaderRobinMcKinney: 'https://static.wixstatic.com/media/fd8f92_8507b640e6f44ac4ac7aeb83ce0c6ae7~mv2.jpg/v1/crop/x_0,y_0,w_493,h_601/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Roivn%20McKinney_edited_edited.jpg',
  leaderAngeliaMcClanahan: 'https://static.wixstatic.com/media/fd8f92_453391d3dfd24ce3aaaad6a93dd1fce1~mv2.jpg/v1/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/4_edited.jpg',
  leaderSadieThompson: 'https://static.wixstatic.com/media/fd8f92_7066a1e21d1e47aa9d0ae68d93060457~mv2.jpg/v1/crop/x_81,y_0,w_627,h_764/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Floral%20Title%20Page%20Presentation%20(8_edited.jpg',
  leaderPatriciaMcKoy: 'https://static.wixstatic.com/media/fd8f92_0f2e81e00fcb44718f0077e1c38d8b5c~mv2.jpg/v1/crop/x_82,y_0,w_680,h_829/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Floral%20Title%20Page%20Presentation%20(8_edited_edited.jpg',
  leaderSharneceWard: 'https://static.wixstatic.com/media/fd8f92_545b688b1c5b418ba37ba4c4c6a3c5df~mv2.jpg/v1/crop/x_0,y_8,w_512,h_624/fill/w_443,h_540,al_c,q_80,enc_avif,quality_auto/Sharnice%20Ward_edited.jpg',

  // ── Photo Gallery images ──
  // Northeast
  galNESeatPleasant: 'https://static.wixstatic.com/media/fd8f92_60142e8a825941aabde2f74f113e334f~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/fd8f92_60142e8a825941aabde2f74f113e334f~mv2.jpg',
  galNEForestville: 'https://static.wixstatic.com/media/c822f1_7a1268761c2f4d10b4a39ec2d9505d02~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/c822f1_7a1268761c2f4d10b4a39ec2d9505d02~mv2.jpg',
  galNEBreastCancer: 'https://static.wixstatic.com/media/c822f1_19addfbdf680454989ae720c18af9d8a~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_19addfbdf680454989ae720c18af9d8a~mv2.jpg',
  galNESchoolSupply: 'https://static.wixstatic.com/media/c822f1_1fa2d0cf4f5741e9847f25cb458bfc1e~mv2.jpg/v1/fill/w_600,h_475,al_c,q_80,enc_avif,quality_auto/c822f1_1fa2d0cf4f5741e9847f25cb458bfc1e~mv2.jpg',
  galNEHighlandPark: 'https://static.wixstatic.com/media/c822f1_d1456df5d911449481a3a004dc169189~mv2.jpg/v1/fill/w_600,h_425,al_c,q_80,enc_avif,quality_auto/c822f1_d1456df5d911449481a3a004dc169189~mv2.jpg',
  galNE0021: 'https://static.wixstatic.com/media/c822f1_0e7cd8af0dfa4eff98bdea4447d54761~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/c822f1_0e7cd8af0dfa4eff98bdea4447d54761~mv2.jpg',
  galNE0024: 'https://static.wixstatic.com/media/c822f1_58d80fd17ee64a2882dbe2942fdd0bc7~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/c822f1_58d80fd17ee64a2882dbe2942fdd0bc7~mv2.jpg',
  // Mid-Atlantic
  galMARichmond: 'https://static.wixstatic.com/media/fd8f92_8ba47d784eb94ae189720555661dc183~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_8ba47d784eb94ae189720555661dc183~mv2.jpg',
  galMAPortsFighters4: 'https://static.wixstatic.com/media/c822f1_f16b5f14f7b149e39d5a497d2aa5e920~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_f16b5f14f7b149e39d5a497d2aa5e920~mv2.jpg',
  galMAPortsFighters2: 'https://static.wixstatic.com/media/c822f1_e23caaae4b03434da6f1a8501a2fc4d1~mv2.png/v1/fill/w_600,h_450,al_c,q_85,enc_avif,quality_auto/c822f1_e23caaae4b03434da6f1a8501a2fc4d1~mv2.png',
  galMAHurricane: 'https://static.wixstatic.com/media/c822f1_5a48e103c41b4de09f6e4ce6228cba34~mv2.png/v1/fill/w_600,h_450,al_c,q_85,enc_avif,quality_auto/c822f1_5a48e103c41b4de09f6e4ce6228cba34~mv2.png',
  galMAVolunteers: 'https://static.wixstatic.com/media/c822f1_6dd422266a80487494d85bd8bb631d01~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_6dd422266a80487494d85bd8bb631d01~mv2.jpg',
  galMAHCC: 'https://static.wixstatic.com/media/c822f1_fce5714fa8054cb38be008a0ad973525~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_fce5714fa8054cb38be008a0ad973525~mv2.jpg',
  // Southeast
  galSERaeford: 'https://static.wixstatic.com/media/fd8f92_5380770b33c64781b2eaa998df9c9716~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_5380770b33c64781b2eaa998df9c9716~mv2.jpg',
  galSEWaterBottles: 'https://static.wixstatic.com/media/fd8f92_3662f92b6eab49e38c2d952a7b194c17~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_3662f92b6eab49e38c2d952a7b194c17~mv2.jpg',
  galSEGboroDonation: 'https://static.wixstatic.com/media/fd8f92_2c02caaf61a04d249be79704e3e8b29e~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_2c02caaf61a04d249be79704e3e8b29e~mv2.jpg',
  galSEFayetteville: 'https://static.wixstatic.com/media/fd8f92_079410f3557048c6ad2a5b098a92cada~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_079410f3557048c6ad2a5b098a92cada~mv2.jpeg',
  galSECleanStreets: 'https://static.wixstatic.com/media/c822f1_b4d6555f0b5442cc86dad84cf3c3213a~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_b4d6555f0b5442cc86dad84cf3c3213a~mv2.jpeg',
  galSEWebb: 'https://static.wixstatic.com/media/c822f1_77c7481a8a664102802c3edac2c929ba~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/c822f1_77c7481a8a664102802c3edac2c929ba~mv2.jpeg',
  // Southwest
  galSWGwinnett: 'https://static.wixstatic.com/media/fd8f92_9cfb5e527dd2478896d7b6c8989a83e3~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_9cfb5e527dd2478896d7b6c8989a83e3~mv2.jpeg',
  galSW2: 'https://static.wixstatic.com/media/fd8f92_efd16d43e3ff440da36186844e60fce7~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_efd16d43e3ff440da36186844e60fce7~mv2.jpeg',
  galSW3: 'https://static.wixstatic.com/media/fd8f92_440b1b77963543a59aba2fe77c35680f~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_440b1b77963543a59aba2fe77c35680f~mv2.jpeg',
  galSW4: 'https://static.wixstatic.com/media/fd8f92_146bae2e3e594a5cb9fcaf9d4ee6bdd3~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_146bae2e3e594a5cb9fcaf9d4ee6bdd3~mv2.jpeg',
  galSW5: 'https://static.wixstatic.com/media/fd8f92_859ec60f042242a09c2db28ca885bd23~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_859ec60f042242a09c2db28ca885bd23~mv2.jpeg',
  galSW6: 'https://static.wixstatic.com/media/fd8f92_f873831ae0bb41e1973fdbe1ff09cefd~mv2.jpeg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_f873831ae0bb41e1973fdbe1ff09cefd~mv2.jpeg',

  // ── Past Conclaves images ──
  conclave2024_1: 'https://static.wixstatic.com/media/fd8f92_208e57f338794852a3eb02395783f4cc~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/2T1A0067.jpg',
  conclave2023_1: 'https://static.wixstatic.com/media/c822f1_a8633db2d5b74df8b2183ef7ceda5c87~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/IMG-5873.jpg',
  conclave2022_1: 'https://static.wixstatic.com/media/fd8f92_7ff8554cdacc414a95c3172976ebc911~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/IMG_20220625_120924.jpg',
  conclave2019_1: 'https://static.wixstatic.com/media/c822f1_5dd882ed7cf644f681f627e88eda4413~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/DSC_3083_JPG.jpg',
  // Conclave 2024 gallery
  conc24_2: 'https://static.wixstatic.com/media/fd8f92_7851220043154027ab1631dd4fb775b8~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_7851220043154027ab1631dd4fb775b8~mv2.jpg',
  conc24_3: 'https://static.wixstatic.com/media/fd8f92_2b36096282b541ca9f55f1c9d0291c15~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_2b36096282b541ca9f55f1c9d0291c15~mv2.jpg',
  conc24_4: 'https://static.wixstatic.com/media/fd8f92_c0d8095238e94bde832f13c921c0fe95~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_c0d8095238e94bde832f13c921c0fe95~mv2.jpg',
  conc24_5: 'https://static.wixstatic.com/media/fd8f92_7fb81474514c422e9754ffa2b726f22f~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_7fb81474514c422e9754ffa2b726f22f~mv2.jpg',
  conc24_6: 'https://static.wixstatic.com/media/fd8f92_cb61af64d22f46c4aa6cbe20b93c4dc2~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_cb61af64d22f46c4aa6cbe20b93c4dc2~mv2.jpg',
  conc24_7: 'https://static.wixstatic.com/media/fd8f92_445c35f8fa2e4297890ec4a27b7c6a83~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_445c35f8fa2e4297890ec4a27b7c6a83~mv2.jpg',
  conc24_8: 'https://static.wixstatic.com/media/fd8f92_505d55e14ef2494490cad4f16b8945bf~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_505d55e14ef2494490cad4f16b8945bf~mv2.jpg',
  conc24_9: 'https://static.wixstatic.com/media/fd8f92_b65c100c219948afb5a946889e97b5cd~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_avif,quality_auto/fd8f92_b65c100c219948afb5a946889e97b5cd~mv2.jpg',
};

const BASE = '';

// ─── MEMBER SLUGS (excluded from rendering) ─────────────────────────────────
const MEMBER_SLUGS = new Set([
  'members-home','documents-forms','member-directory','newsletter',
  'about-1','sassys-gifts','simply-be-rooted','national-paraphernalia',
  'national-payments','visitor-uploads','groups','members',
  'cart-page','checkout','thank-you-page','my-account','my-orders',
  'my-addresses','my-wallet','my-subscriptions','my-groups',
  'notifications','settings','profile','custom-login','custom-signup',
  'membership','executive-board','presidents-message','national-queen',
  'conclave-payments','side-cart','fullscreen-page',
]);

function isProductPage(slug) {
  return slug.startsWith('product-page');
}

// ─── REGION DATA ────────────────────────────────────────────────────────────
const REGION_DATA = {
  'copy-of-southeast-region': {
    name: 'Central Region',
    slug: 'copy-of-southeast-region',
    description: 'The Central Region has Chapters in the Fayetteville Elite, Greensboro, and High Point North Carolina areas.',
    leaders: [
      { title: 'Regional Director', name: 'Felicia Andrews', email: 'laigreensborovp@gmail.com', note: 'Appointed', photo: IMG.leaderFeliciaAndrews },
      { title: 'Asst. Regional Director', name: '', email: '', note: 'Appointed', photo: '' },
      { title: 'Fayetteville Chapter President', name: 'Ronita Hemingway', email: 'ronitahemingway@gmail.com', photo: IMG.leaderRonitaHemingway },
      { title: 'Greensboro Chapter President', name: 'Bianca Woods', email: 'bianca.d.woods@gmail.com', photo: IMG.leaderBiancaWoods },
      { title: 'High Point Chapter President', name: 'Rhonda Wilson-Henry', email: 'rhonda.henry@3avx.com', photo: IMG.leaderRhondaWilson },
    ],
    image: IMG.highPointChapter,
    galleryImages: [],
  },
  'copy-of-northeast-region-new': {
    name: 'Mid-Atlantic Region',
    slug: 'copy-of-northeast-region-new',
    description: 'The Mid-Atlantic Region is composed of Chapters in the following cities in Virginia: Chesterfield, Henrico County, Newport News-Hampton, Richmond, Portsmouth, Suffolk, and Colonial Heights.',
    leaders: [
      { title: 'Regional Director', name: 'Keisha Shelton', email: 'cs_lasamigas@hotmail.com', photo: IMG.leaderKeishaShelton },
      { title: 'Asst. Regional Director', name: 'Katrina Harrison', email: 'robinsonkatrinia@yahoo.com', photo: IMG.leaderKatrinaHarrison },
      { title: 'Chesterfield Chapter President', name: 'Carolyn Bonner', email: 'c_barner1222@yahoo.com', photo: IMG.leaderCarolynBonner },
      { title: 'Colonial Heights/Petersburg Chapter President', name: 'Lenice Sudds', email: 'lenice_w@hotmail.com', photo: IMG.leaderLeniceSudds },
      { title: 'Henrico County Chapter President', name: 'Angela Moore', email: 'Amgelalasamigas1996@gmail.com', photo: IMG.leaderAngelaMoore },
      { title: 'Newport News/Hampton Chapter President', name: 'Caroline Samuels', email: 'cdsamuels@aumail.averett.edu', photo: IMG.leaderCarolineSamuels },
      { title: 'Portsmouth Chapter President', name: 'Janet Dennis', email: 'nbkem75@yahoo.com', photo: IMG.leaderJanetDennis },
      { title: 'Richmond Chapter President', name: 'Darvina Terry', email: 'dsharpe78@aol.com', photo: IMG.leaderDarvinaTerry },
      { title: 'Suffolk Chapter President', name: 'Pearlie Blanks', email: 'prhblanks@gmail.com', photo: IMG.leaderPearlieBlanks },
    ],
    image: IMG.galMARichmond,
    galleryImages: [IMG.galMARichmond, IMG.galMAPortsFighters4, IMG.galMAPortsFighters2, IMG.galMAHurricane, IMG.galMAVolunteers, IMG.galMAHCC, IMG.portsChapter],
  },
  'about-1-1': {
    name: 'Northeast Region',
    slug: 'about-1-1',
    description: 'The Northeast Region is composed of the Baltimore, Forestville, Seat Pleasant, Southern Maryland and the Tri-State chapters.',
    leaders: [
      { title: 'Regional Director', name: 'Willa Majors-Johnson', email: 'willamj2013@outlook.com', photo: IMG.leaderWillaMajors },
      { title: 'Asst. Regional Director', name: 'Thelma Murray-Fisher', email: 'gottahave70@gmail.com', photo: IMG.leaderThelmaMurray },
      { title: 'Baltimore Chapter President', name: 'Sharon Petty', email: 'nilesharon831@gmail.com', photo: IMG.leaderSharonPetty },
      { title: 'Forestville Chapter President', name: 'DeniAntoinette Mazingo, Esq.', email: 'damazingoesq@gmail.com', photo: IMG.leaderDeniAntoinette },
      { title: 'Seat Pleasant Chapter President', name: 'Eleanor C. Johnson', email: 'eleanorcj14@gmail.com', photo: IMG.leaderEleanorJohnson },
      { title: 'Southern Maryland Chapter President', name: 'Dr. Nicole Gaskin-Laniyan', email: 'NicoleGaskinLaniyan@gmail.com', photo: IMG.leaderNicoleGaskin },
      { title: 'Tri-State Chapter President', name: 'Danita Berry', email: 'danitaberry1@yahoo.com', photo: IMG.leaderDanitaBerry },
    ],
    image: IMG.galNESeatPleasant,
    galleryImages: [IMG.galNEForestville, IMG.galNEBreastCancer, IMG.galNESchoolSupply, IMG.galNEHighlandPark, IMG.galNE0021, IMG.galNE0024],
  },
  'copy-of-mid-atlantic-region-new': {
    name: 'Southeast Region',
    slug: 'copy-of-mid-atlantic-region-new',
    description: 'The Southeast Region has Chapters in the Lumberton-Robeson, Raeford, Raleigh-Durham, Red Springs, St. Pauls/Bladen County, Whiteville and Wilmington areas.',
    leaders: [
      { title: 'Regional Director', name: 'Wanda Pugh-Trice', email: 'alwazapugh@twc.com', photo: IMG.leaderWandaPugh },
      { title: 'Asst. Regional Director', name: 'Sharon Simmons', email: 'sstephens032012@gmail.com', photo: IMG.leaderSharonSimmons },
      { title: 'Lumberton Robeson Chapter President', name: 'Carol T. Richardson', email: 'carolrich78@gmail.com', photo: IMG.leaderCarolRichardson },
      { title: 'Raeford Chapter President', name: 'Traci Jones', email: 'tracijones139@gmail.com', photo: IMG.leaderTraciJones },
      { title: 'Raleigh Durham Chapter President', name: 'Xavier McCutcheon', email: 'xlacy@yahoo.com', photo: IMG.leaderXavierMcCutcheon },
      { title: 'Red Springs Chapter President', name: 'Evelyn Jemison-Coleman', email: 'evelynjemison@gmail.com', photo: IMG.leaderEvelynJemison },
      { title: 'St. Pauls/Bladen County Chapter President', name: 'Tameka Davis', email: '', photo: '' },
      { title: 'Whiteville Chapter President', name: 'Sharon Simmons', email: '', photo: '' },
      { title: 'Wilmington Chapter President', name: 'Renee Beatty', email: 'beatty1208@yahoo.com', photo: IMG.leaderReneeBeatty },
    ],
    image: IMG.galSERaeford,
    galleryImages: [IMG.galSEWaterBottles, IMG.galSEGboroDonation, IMG.galSEFayetteville, IMG.galSECleanStreets, IMG.galSEWebb],
  },
  'copy-of-southeast-region-new': {
    name: 'Southwest Region',
    slug: 'copy-of-southeast-region-new',
    description: 'The Southwest Region has chapters in the Greater Atlanta, Charlotte-Mecklenburg, Gastonia, Greenville SC, Marlboro-Dillon, Mooresville, Morven and Stone Mountain areas.',
    leaders: [
      { title: 'Regional Director', name: 'Mamie Watkins', email: 'lasamigasdiva@gmail.com', photo: IMG.leaderMamieWatkins },
      { title: 'Asst. Regional Director', name: 'Elizabeth Kersey', email: 'keonk9@windstream.net', photo: IMG.leaderElizabethKersey },
      { title: 'Greater Atlanta Chapter President', name: 'Sandra Anderson', email: 'sandrak.lovely75@gmail.com', photo: IMG.leaderSandraAnderson },
      { title: 'Charlotte Mecklenburg Chapter President', name: 'Cynthia Shepard', email: 'chsabs@carolina.rr.com', photo: IMG.leaderCynthiaShepard },
      { title: 'Gastonia Chapter President', name: 'Robin McKinney', email: 'robinm1963@gmail.com', photo: IMG.leaderRobinMcKinney },
      { title: 'Greenville, SC Chapter President', name: 'Angelia McClanahan', email: 'angiemlasamigas@gmail.com', photo: IMG.leaderAngeliaMcClanahan },
      { title: 'Marlboro Dillon Chapter President', name: 'Audrey Brown', email: '', photo: '' },
      { title: 'Mooresville Chapter President', name: 'Sadie Thompson', email: 'tsadie33@gmail.com', photo: IMG.leaderSadieThompson },
      { title: 'Morven Chapter President', name: 'Patricia McKoy', email: 'tapcoy50@windstream.net', photo: IMG.leaderPatriciaMcKoy },
      { title: 'Stone Mountain Chapter President', name: 'Sharnece Ward', email: 'swardconsultant@gmail.com', photo: IMG.leaderSharneceWard },
    ],
    image: IMG.galSWGwinnett,
    galleryImages: [IMG.galSW2, IMG.galSW3, IMG.galSW4, IMG.galSW5, IMG.galSW6],
  },
};

// ─── SVG ICONS ──────────────────────────────────────────────────────────────
const ICONS = {
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  people: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`,
  home2: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
  medical: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>`,
  ballot: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm-6 0h4v-2H7v2zm0-7h4v-2H7v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  donate: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.94s4.18 1.36 4.18 3.85c0 1.89-1.44 2.93-3.12 3.19z"/></svg>`,
  volunteer: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  handshake: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.22 19.85c-.18.18-.5.18-.67 0l-3.89-3.89c-.18-.18-.18-.5 0-.67.18-.18.5-.18.67 0L12.22 19.85zm2.56-.91c.18.18.5.18.67 0l5.04-5.04c.18-.18.18-.5 0-.67L16 8.74l-4.11 4.11 2.89 2.89c.18.18.18.5 0 .67l-3.89 3.53zm-7.56-7.56l4.11-4.11L8 3.94c-.18-.18-.5-.18-.67 0L2.29 8.98c-.18.18-.18.5 0 .67l4.93 4.93z"/></svg>`,
};

// ─── NAVIGATION STRUCTURE ───────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    text: 'About',
    children: [
      { text: 'About Us', slug: 'about-us' },
      { text: 'Our Founders', slug: 'our-founders' },
      { text: 'Timeline', slug: 'timeline' },
    ],
  },
  { text: 'Our Impact', slug: 'our-impact' },
  { text: 'Get Involved', slug: 'get-involved' },
  { text: 'Affiliate Partners', slug: 'charitable-partners' },
  {
    text: 'Programs',
    children: [
      { text: 'Programmatic Thrusts', slug: 'programmatic-thrusts' },
      { text: 'Economic Development', slug: 'economic-development' },
      { text: 'Education', slug: 'education' },
      { text: 'Family', slug: 'family' },
      { text: 'Health', slug: 'health' },
      { text: 'Political Awareness', slug: 'political-awareness' },
    ],
  },
  {
    text: 'Regions',
    children: [
      { text: 'Central Region', slug: 'copy-of-southeast-region' },
      { text: 'Mid-Atlantic Region', slug: 'copy-of-northeast-region-new' },
      { text: 'Northeast Region', slug: 'about-1-1' },
      { text: 'Southeast Region', slug: 'copy-of-mid-atlantic-region-new' },
      { text: 'Southwest Region', slug: 'copy-of-southeast-region-new' },
    ],
  },
  {
    text: 'Events',
    children: [
      { text: 'News & Events', slug: 'events' },
      { text: 'New Members', slug: 'new-members' },
      { text: 'In Memoriam', slug: 'in-memoriam' },
    ],
  },
  { text: 'Contact Us', slug: 'contact-us' },
  { text: 'Donate', slug: 'donate' },
];


// ─── CSS DESIGN SYSTEM ─────────────────────────────────────────────────────
const STYLES = `
/* ── Reset & Base ───────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:host {
  display: block;
  width: 100%;
  font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; transition: all 0.3s ease; }
a:hover { color: #c9a84c; }
img { max-width: 100%; height: auto; display: block; object-fit: cover; }
ul, ol { list-style: none; }
button { cursor: pointer; font-family: inherit; border: none; background: none; }
input, textarea, select { font-family: inherit; }

/* ── Typography ─────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a2e;
}
h1 { font-size: clamp(2.4rem, 5vw, 4rem); letter-spacing: -0.5px; }
h2 { font-size: clamp(1.8rem, 3.5vw, 3rem); }
h3 { font-size: clamp(1.3rem, 2.5vw, 2rem); }
h4 { font-size: clamp(1.1rem, 2vw, 1.5rem); }
p { margin-bottom: 1rem; color: #555; font-size: 1.05rem; line-height: 1.8; }

.label {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.8rem;
  color: #c9a84c;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 12px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}
.section-title .label { display: block; margin-bottom: 16px; }
.section-title h2 { margin-bottom: 16px; }
.section-title p { max-width: 700px; margin: 0 auto; color: #777; }

/* ── Layout ─────────────────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; width: 100%; }
.container-wide { max-width: 1400px; margin: 0 auto; padding: 0 24px; width: 100%; }
.container-narrow { max-width: 800px; margin: 0 auto; padding: 0 24px; width: 100%; }
.section { padding: 100px 0; }
.section-sm { padding: 60px 0; }
.text-center { text-align: center; }
.text-white { color: #fff; }
.text-white p { color: rgba(255,255,255,0.85); }
.text-white h1, .text-white h2, .text-white h3, .text-white h4 { color: #fff; }

/* Backgrounds */
.bg-white { background: #fff; }
.bg-light { background: #f8f5fc; }
.bg-cream { background: #faf8f5; }
.bg-dark { background: #1a1a2e; }
.bg-primary { background: #5e398f; }
.bg-gradient {
  background: linear-gradient(135deg, #5e398f 0%, #3d2066 40%, #1a1a2e 100%);
}
.bg-gradient-gold {
  background: linear-gradient(135deg, #c9a84c 0%, #a88a32 100%);
}

/* Grid system */
.grid { display: grid; gap: 32px; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-5 { grid-template-columns: repeat(5, 1fr); }

@media (max-width: 1024px) {
  .grid-4, .grid-5 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4, .grid-5 { grid-template-columns: 1fr; }
  .section { padding: 60px 0; }
  .container { padding: 0 16px; }
}

/* Flex utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-16 { gap: 16px; }
.gap-24 { gap: 24px; }
.gap-32 { gap: 32px; }
.gap-40 { gap: 40px; }

/* ── Buttons ────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}
.btn:hover::before { left: 100%; }
.btn-primary {
  background: linear-gradient(135deg, #5e398f, #4c0863);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(94,57,143,0.3);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(94,57,143,0.45);
  color: #fff;
}
.btn-gold {
  background: linear-gradient(135deg, #c9a84c, #a88a32);
  color: #1a1a2e;
  border: none;
  box-shadow: 0 4px 15px rgba(201,168,76,0.3);
}
.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(201,168,76,0.45);
  color: #1a1a2e;
}
.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.8);
}
.btn-outline:hover {
  background: #fff;
  color: #5e398f;
  border-color: #fff;
  transform: translateY(-3px);
}
.btn-outline-dark {
  background: transparent;
  color: #5e398f;
  border: 2px solid #5e398f;
}
.btn-outline-dark:hover {
  background: #5e398f;
  color: #fff;
  transform: translateY(-3px);
}
.btn-sm { padding: 10px 24px; font-size: 0.8rem; letter-spacing: 2px; }
.btn-lg { padding: 18px 48px; font-size: 1rem; }

/* ── Header ─────────────────────────────────────────── */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  transition: all 0.4s ease;
  background: transparent;
}
.site-header.solid {
  background: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.site-header.scrolled {
  background: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0,0,0,0.15);
}

/* Top bar */
.header-top {
  background: #1a1a2e;
  padding: 8px 0;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.header-top .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-top a {
  color: rgba(255,255,255,0.7);
  transition: color 0.3s;
}
.header-top a:hover { color: #c9a84c; }
.header-top-social {
  display: flex;
  gap: 16px;
  align-items: center;
}
.header-top svg { width: 16px; height: 16px; display: inline-block; vertical-align: middle; }
.header-top span svg { width: 14px; height: 14px; }

/* Main nav */
.header-main {
  padding: 12px 0;
  transition: padding 0.4s;
}
.site-header.scrolled .header-main { padding: 8px 0; }
.header-main .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  margin-right: 24px;
}
.header-logo img {
  height: 60px;
  width: auto;
  transition: height 0.4s;
}
.site-header.scrolled .header-logo img { height: 45px; }
.header-logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  white-space: nowrap;
}
.header-logo-text span {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #c9a84c;
  font-weight: 400;
}

/* Navigation */
.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-item {
  position: relative;
}
.nav-item > a {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: rgba(255,255,255,0.9);
  font-weight: 400;
  transition: color 0.3s;
  white-space: nowrap;
}
.nav-item > a:hover { color: #c9a84c; }
.nav-item > a svg { width: 12px; height: 12px; opacity: 0.6; }
.nav-item.active > a { color: #c9a84c; }

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  box-shadow: 0 15px 50px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
}
.nav-item:hover > .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown a {
  display: block;
  padding: 10px 24px;
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  transition: all 0.3s;
  letter-spacing: 0;
  text-transform: none;
}
.dropdown a:hover {
  color: #c9a84c;
  background: rgba(201,168,76,0.08);
  padding-left: 28px;
}

/* Mobile menu toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}
.menu-toggle span {
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}
.menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* Member login button */
.header-cta {
  margin-left: 12px;
}
.header-cta .btn {
  padding: 8px 20px;
  font-size: 0.75rem;
  letter-spacing: 2px;
  border-radius: 50px;
}

@media (max-width: 1100px) {
  .menu-toggle { display: flex; }
  .header-top { display: none; }
  .nav-wrapper {
    position: fixed;
    top: 0; right: -100%;
    width: 320px;
    height: 100vh;
    background: #1a1a2e;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 24px;
    transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow-y: auto;
    box-shadow: -10px 0 40px rgba(0,0,0,0.3);
    gap: 0;
  }
  .nav-wrapper.open { right: 0; }
  .nav-item { width: 100%; }
  .nav-item > a {
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    width: 100%;
    font-size: 0.9rem;
  }
  .dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
    padding: 0 0 0 16px;
    display: none;
    min-width: auto;
  }
  .nav-item.dropdown-open > .dropdown { display: block; }
  .dropdown a {
    padding: 10px 0;
    font-size: 0.85rem;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .dropdown a:hover { padding-left: 8px; }
  .header-cta { margin-left: 0; margin-top: 20px; width: 100%; }
  .header-cta .btn { width: 100%; justify-content: center; }
}

/* ── Hero Section ───────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(26,26,46,0.7) 0%,
    rgba(76,8,99,0.5) 40%,
    rgba(94,57,143,0.4) 70%,
    rgba(26,26,46,0.8) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 120px 24px 80px;
  max-width: 900px;
}
.hero-label {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 0.8rem;
  color: #c9a84c;
  font-weight: 400;
  margin-bottom: 24px;
  display: block;
}
.hero h1 {
  color: #fff;
  font-size: clamp(2.8rem, 6vw, 5rem);
  margin-bottom: 24px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.hero p {
  color: rgba(255,255,255,0.85);
  font-size: 1.2rem;
  max-width: 650px;
  margin: 0 auto 40px;
  line-height: 1.8;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .hero { min-height: 85vh; }
  .hero-content { padding: 100px 16px 60px; }
  .hero-actions { flex-direction: column; align-items: center; }
  .hero-actions .btn { width: 80%; }
}

/* ── Page Banner ────────────────────────────────────── */
.page-banner {
  position: relative;
  padding: 180px 0 100px;
  text-align: center;
  overflow: hidden;
}
.page-banner-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}
.page-banner-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26,26,46,0.85), rgba(94,57,143,0.75));
}
.page-banner-content {
  position: relative;
  z-index: 2;
}
.page-banner h1 {
  color: #fff;
  margin-bottom: 16px;
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
}
.page-banner p {
  color: rgba(255,255,255,0.8);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}
.breadcrumbs {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.breadcrumbs a { color: #c9a84c; }
.breadcrumbs span { color: rgba(255,255,255,0.5); }

/* ── Stats Bar ──────────────────────────────────────── */
.stats-bar {
  background: linear-gradient(135deg, #5e398f, #4c0863);
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}
.stats-bar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: relative;
  z-index: 1;
}
.stat-item {
  text-align: center;
  padding: 20px;
}
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #c9a84c;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
}
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}

/* ── Cards ──────────────────────────────────────────── */
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  position: relative;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(94,57,143,0.15);
}
.card-img {
  height: 260px;
  overflow: hidden;
  position: relative;
}
.card-img.card-img-sm { height: 180px; }
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.card-img.card-img-contain img {
  object-fit: contain !important;
  background: #f8f5fc;
  padding: 16px;
  box-sizing: border-box;
}

.rajugrd .card-img.card-img-contain img {
  object-fit: cover !important;
  background: #f8f5fc;
  padding: 0;
  box-sizing: border-box;
}



.card:hover .card-img img { transform: scale(1.08); }
.card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,26,46,0.6), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.card:hover .card-img-overlay { opacity: 1; }
.card-body {
  padding: 28px;
}
.card-body .label { margin-bottom: 8px; }
.card-body h3 { margin-bottom: 12px; font-size: 1.3rem; }
.card-body p { font-size: 0.95rem; color: #777; margin-bottom: 16px; }

/* Icon Card (program cards style like AKA) */
.icon-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(94,57,143,0.08);
  position: relative;
  overflow: hidden;
}
.icon-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #5e398f, #c9a84c);
  transform: scaleX(0);
  transition: transform 0.4s;
}
.icon-card:hover::before { transform: scaleX(1); }
.icon-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 50px rgba(94,57,143,0.12);
}
.icon-card .icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f8f5fc, #ede4f7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.4s;
}
.icon-card:hover .icon-wrap {
  background: linear-gradient(135deg, #5e398f, #4c0863);
}
.icon-card .icon-wrap svg {
  width: 28px;
  height: 28px;
  color: #5e398f;
  transition: color 0.4s;
}
.icon-card:hover .icon-wrap svg { color: #fff; }
.icon-card .card-icon-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
  object-position: center center;
  margin: 0 auto 20px;
  padding: 14px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f8f5fc, #ede4f7);
  border: 3px solid #ede4f7;
  transition: all 0.4s;
  display: block;
}
.icon-card:hover .card-icon-img {
  border-color: #c9a84c;
  transform: scale(1.05);
}
.icon-card h3 { font-size: 1.2rem; margin-bottom: 12px; }
.icon-card p { font-size: 0.9rem; color: #777; margin: 0; }

/* Feature card (two-column with image) */
.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}
.feature-block.reverse { direction: rtl; }
.feature-block.reverse > * { direction: ltr; }
.feature-img {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  position: relative;
}
.feature-img img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.feature-img::after {
  content: '';
  position: absolute;
  bottom: -20px; right: -20px;
  width: 100px; height: 100px;
  border: 3px solid #c9a84c;
  border-radius: 12px;
  z-index: -1;
}
.feature-text .label { margin-bottom: 12px; }
.feature-text h2 { margin-bottom: 20px; }
.feature-text p { margin-bottom: 16px; }
@media (max-width: 768px) {
  .feature-block { grid-template-columns: 1fr; gap: 32px; }
  .feature-block.reverse { direction: ltr; }
  .feature-img img { height: 300px; }
}

/* ── Quote / Testimonial ────────────────────────────── */
.quote-section {
  background: linear-gradient(135deg, #1a1a2e, #2a1a3e);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}
.quote-section::before {
  content: '\\201C';
  position: absolute;
  top: 20px; left: 40px;
  font-size: 20rem;
  font-family: 'Playfair Display', serif;
  color: rgba(201,168,76,0.06);
  line-height: 1;
}
.quote-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.quote-content blockquote {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: rgba(255,255,255,0.9);
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 24px;
}
.quote-author {
  font-family: 'Oswald', sans-serif;
  color: #c9a84c;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* ── Values Grid (inspired by AKA/NCNW) ────────────── */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.value-card {
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  border-left: 4px solid #c9a84c;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  transition: all 0.3s;
}
.value-card:hover {
  transform: translateX(6px);
  box-shadow: 0 8px 30px rgba(94,57,143,0.1);
}
.value-card h4 {
  color: #5e398f;
  margin-bottom: 8px;
  font-size: 1.1rem;
}
.value-card p { font-size: 0.92rem; margin: 0; color: #666; }

/* ── Leader Cards ───────────────────────────────────── */
.leader-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.3s;
}
.leader-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(94,57,143,0.1);
}
.leader-card .leader-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5e398f, #c9a84c);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
}
.leader-card .leader-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
  display: block;
  border: 3px solid #c9a84c;
  box-shadow: 0 4px 16px rgba(94,57,143,0.15);
}
.leader-card h4 { font-size: 1rem; margin-bottom: 4px; }
.leader-card .leader-title {
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #c9a84c;
  margin-bottom: 8px;
}
.leader-card .leader-email {
  font-size: 0.8rem;
  color: #5e398f;
  word-break: break-all;
}

/* ── Partner Logos ───────────────────────────────────── */
.partner-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 48px;
}
.partner-logo {
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.4s;
}
.partner-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.1);
}

/* ── CTA Section ────────────────────────────────────── */
.cta-section {
  position: relative;
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}
.cta-section .cta-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}
.cta-section .cta-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(94,57,143,0.9), rgba(26,26,46,0.9));
}
.cta-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}
.cta-content h2 {
  color: #fff;
  margin-bottom: 20px;
}
.cta-content p {
  color: rgba(255,255,255,0.8);
  margin-bottom: 32px;
  font-size: 1.1rem;
}

/* ── Marquee Strip (inspired by NCNW) ──────────────── */
.marquee-strip {
  background: #c9a84c;
  padding: 14px 0;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-inner {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}
.marquee-inner span {
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #1a1a2e;
  padding: 0 48px;
  font-weight: 500;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── President Section ──────────────────────────────── */
.president-section {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  align-items: center;
}
.president-img {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.15);
  position: relative;
}
.president-img img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: top;
}
.president-img::before {
  content: '';
  position: absolute;
  top: -15px; left: -15px;
  width: 100%; height: 100%;
  border: 2px solid #c9a84c;
  border-radius: 16px;
  z-index: -1;
}
.president-info .label { margin-bottom: 16px; }
.president-info h2 { margin-bottom: 8px; }
.president-info .president-title {
  font-family: 'Oswald', sans-serif;
  color: #c9a84c;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.president-info .president-theme {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: #5e398f;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .president-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .president-img img { height: 400px; }
}

/* ── Founder Section ────────────────────────────────── */
.founder-block {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 60px;
}
.founder-block.reverse {
  grid-template-columns: 1fr 300px;
}
.founder-img {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
}
.founder-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.founder-text h3 { margin-bottom: 16px; color: #5e398f; }
.founder-text p { font-size: 0.95rem; line-height: 1.9; }
@media (max-width: 768px) {
  .founder-block, .founder-block.reverse {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

/* ── Timeline ───────────────────────────────────────── */
.timeline {
  position: relative;
  padding: 40px 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #c9a84c, #5e398f);
}
.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
}
.timeline-item:nth-child(even) { flex-direction: row-reverse; }
.timeline-content {
  width: 45%;
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  position: relative;
}
.timeline-item:nth-child(odd) .timeline-content { margin-right: auto; }
.timeline-item:nth-child(even) .timeline-content { margin-left: auto; }
.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #c9a84c;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 1;
}
.timeline-year {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #5e398f;
  font-weight: 700;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .timeline::before { left: 20px; }
  .timeline-item, .timeline-item:nth-child(even) {
    flex-direction: row;
    padding-left: 50px;
  }
  .timeline-content { width: 100%; }
  .timeline-dot { left: 20px; }
}

/* ── Contact Form ───────────────────────────────────── */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #5e398f;
  margin-bottom: 8px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e8e0f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s;
  background: #faf8fc;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #5e398f;
  box-shadow: 0 0 0 4px rgba(94,57,143,0.1);
  background: #fff;
}
.form-group textarea { resize: vertical; min-height: 150px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 768px) {
  .form-row { grid-template-columns: 1fr; }
}

/* ── Photo Gallery ──────────────────────────────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  position: relative;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}
.gallery-item:hover img { transform: scale(1.1); }
.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,26,46,0.4), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.gallery-item:hover::after { opacity: 1; }

/* ── Email Signup (inspired by AKA) ─────────────────── */
.signup-section {
  background: #1a1a2e;
  padding: 60px 0;
}
.signup-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.signup-inner h3 { color: #fff; font-size: 1.6rem; flex-shrink: 0; }
.signup-form {
  display: flex;
  gap: 12px;
  flex: 1;
  max-width: 500px;
}
.signup-form input {
  flex: 1;
  padding: 14px 20px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 50px;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 0.95rem;
}
.signup-form input::placeholder { color: rgba(255,255,255,0.4); }
.signup-form input:focus {
  outline: none;
  border-color: #c9a84c;
  background: rgba(255,255,255,0.12);
}
@media (max-width: 768px) {
  .signup-inner { flex-direction: column; text-align: center; }
  .signup-form { width: 100%; max-width: none; flex-direction: column; }
}

/* ── Footer ─────────────────────────────────────────── */
.site-footer {
  background: #0d0d1a;
  color: rgba(255,255,255,0.7);
  padding-top: 80px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand img { height: 80px; margin-bottom: 20px; }
.footer-brand p {
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 20px;
}
.footer-social {
  display: flex;
  gap: 12px;
}
.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.footer-social a:hover {
  background: #c9a84c;
  border-color: #c9a84c;
  color: #1a1a2e;
}
.footer-social svg { width: 16px; height: 16px; }
.footer-col h4 {
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c9a84c;
  margin-bottom: 24px;
  font-weight: 500;
}
.footer-col a {
  display: block;
  padding: 6px 0;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.5);
  transition: all 0.3s;
}
.footer-col a:hover {
  color: #c9a84c;
  padding-left: 4px;
}
.footer-bottom {
  padding: 24px 0;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
}
.footer-bottom a { color: #c9a84c; }
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}

/* ── Scroll Top Button ──────────────────────────────── */
.scroll-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5e398f, #4c0863);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.4s;
  box-shadow: 0 4px 20px rgba(94,57,143,0.4);
  z-index: 999;
}
.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.scroll-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(94,57,143,0.6);
}
.scroll-top svg { width: 20px; height: 20px; }

/* ── Animations ─────────────────────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in.visible,
.fade-in-left.visible,
.fade-in-right.visible {
  opacity: 1;
  transform: translate(0);
}

/* ── Decorative Elements ────────────────────────────── */
.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #5e398f, #c9a84c);
  margin: 0 auto 24px;
  border-radius: 2px;
}
.gold-line {
  width: 40px;
  height: 2px;
  background: #c9a84c;
  margin-bottom: 16px;
}
.gold-line-center { margin-left: auto; margin-right: auto; }

/* ── Memorial Cards ─────────────────────────────────── */
.memorial-card {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border-top: 4px solid #5e398f;
  transition: all 0.3s;
}
.memorial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(94,57,143,0.1);
}
.memorial-card .memorial-photo {
  width: 120px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0 auto 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.memorial-card h3 { font-size: 1.2rem; margin-bottom: 8px; color: #5e398f; }
.memorial-card .memorial-title {
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #c9a84c;
  margin-bottom: 12px;
}
.memorial-card p { font-size: 0.9rem; color: #777; margin: 0; }

/* ── Privacy Policy ─────────────────────────────────── */
.prose h2 {
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 1.4rem;
  color: #5e398f;
}
.prose h3 {
  margin-top: 28px;
  margin-bottom: 12px;
  font-size: 1.15rem;
  color: #333;
}
.prose p { line-height: 1.9; }
.prose ul {
  padding-left: 24px;
  margin-bottom: 20px;
}
.prose ul li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  color: #555;
  font-size: 1rem;
}
.prose ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c9a84c;
}

/* ── Responsive hide/show ───────────────────────────── */
.hide-mobile { display: block; }
.show-mobile { display: none; }
@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: block !important; }
}

/* ── Loading shimmer ────────────────────────────────── */
@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}
`;


// ─── HEADER RENDERER ────────────────────────────────────────────────────────
function renderHeader(currentPage) {
  const navHTML = NAV_ITEMS.map(item => {
    const isActive = item.slug === currentPage ||
      (item.children && item.children.some(c => c.slug === currentPage));

    if (item.children) {
      return `
        <div class="nav-item${isActive ? ' active' : ''}">
          <a href="/${item.children[0].slug}" data-nav>${item.text} ${ICONS.chevronDown}</a>
          <div class="dropdown">
            ${item.children.map(child => `
              <a href="/${child.slug}" data-nav>${child.text}</a>
            `).join('')}
          </div>
        </div>`;
    }

    return `
      <div class="nav-item${item.slug === currentPage ? ' active' : ''}">
        <a href="/${item.slug}" data-nav>${item.text}</a>
      </div>`;
  }).join('');

  return `
    <header class="site-header${currentPage !== 'home' && currentPage !== '' ? ' solid' : ''}" id="siteHeader">
      <div class="header-top hide-mobile">
        <div class="" style="display:flex;align-items:center;justify-content:space-between; margin:0 3rem;">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="display:inline-flex;align-items:center;gap:6px;margin-right:16px">
              <span style="width:14px;height:14px;display:inline-flex">${ICONS.email}</span>
              <a href="mailto:info@lasamigasincorporated.org">info@lasamigasincorporated.org</a>
            </span>
            <span style="display:inline-flex;align-items:center;gap:6px">
              <span style="width:14px;height:14px;display:inline-flex">${ICONS.location}</span>
              Greensboro, NC 27402
            </span>
          </div>
          <div class="header-top-social">
            <a href="https://www.facebook.com/LasamigasInc" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
            <a href="https://www.instagram.com/lasamigasinc/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="https://www.linkedin.com/company/las-amigas-incorporated" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
          </div>
        </div>
      </div>
      <div class="header-main">
        <div class="" style="display:flex;align-items:center;justify-content:space-between; margin:0 2rem;">
          <a href="/home" data-nav class="header-logo">
            <img src="${IMG.logo}" alt="Las Amigas Incorporated" loading="eager">
            <div class="header-logo-text hide-mobile">
              Las Amigas<br>Incorporated
              <span>Est. 1957</span>
            </div>
          </a>
          <div class="nav-wrapper" id="navWrapper">
            ${navHTML}
            <div class="header-cta">
              <a href="/members-home" class="btn btn-gold btn-sm">Members</a>
            </div>
          </div>
          <button class="menu-toggle" id="menuToggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
}


// ─── FOOTER RENDERER ────────────────────────────────────────────────────────
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${IMG.logoFooter}" alt="Las Amigas Incorporated">
            <p>Las Amigas Incorporated is a 501(c)(3) organization, founded in Charlotte, North Carolina in 1957, dedicated to enhancing the quality of life and promoting the general improvement of the communities in which we serve.</p>
            <div class="footer-social">
              <a href="https://www.facebook.com/LasamigasInc" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
              <a href="https://www.instagram.com/lasamigasinc/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="https://www.linkedin.com/company/las-amigas-incorporated" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="/about-us" data-nav>About Us</a>
            <a href="/our-founders" data-nav>Our Founders</a>
            <a href="/our-impact" data-nav>Our Impact</a>
            <a href="/get-involved" data-nav>Get Involved</a>
            <a href="/donate" data-nav>Donate</a>
          </div>
          <div class="footer-col">
            <h4>Programs</h4>
            <a href="/economic-development" data-nav>Economic Development</a>
            <a href="/education" data-nav>Education</a>
            <a href="/family" data-nav>Family</a>
            <a href="/health" data-nav>Health</a>
            <a href="/political-awareness" data-nav>Political Awareness</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <p style="color:rgba(255,255,255,0.5);font-size:0.9rem;line-height:1.7;">
              P O BOX 1957<br>
              Greensboro, NC 27402
            </p>
            <a href="mailto:info@lasamigasincorporated.org">info@lasamigasincorporated.org</a>
            <a href="/contact-us" data-nav>Contact Form</a>
            <a href="/privacy-policy" data-nav>Privacy Policy</a>
          </div>
        </div>
        <div class="footer-bottom">
          Las Amigas Incorporated is a 501(c)(3) organization, and all monetary donations are tax deductible to the fullest extent allowed by tax laws.<br>
          &copy;2021 Las Amigas, Incorporated &nbsp;|&nbsp; Website by <a href="/simply-be-rooted">Simply Be Rooted</a>
        </div>
      </div>
    </footer>`;
}


// ─── PAGE BANNER ────────────────────────────────────────────────────────────
function renderPageBanner(title, subtitle, bgImage, crumbs) {
  const breadcrumbHTML = crumbs ? `
    <div class="breadcrumbs">
      <a href="/home" data-nav>Home</a>
      ${crumbs.map(c => `<span>/</span> ${c.slug ?
        `<a href="/${c.slug}" data-nav>${c.text}</a>` :
        `<span style="color:rgba(255,255,255,0.7)">${c.text}</span>`
      }`).join('')}
    </div>` : '';

  return `
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image:url('${bgImage || IMG.communityGarden}')"></div>
      <div class="page-banner-content container">
        <div class="label">Las Amigas Incorporated</div>
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
        ${breadcrumbHTML}
      </div>
    </section>`;
}


// ─── HOME PAGE ──────────────────────────────────────────────────────────────
function renderHomePage() {
  return `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" style="background-image:url('${IMG.volunteers}')"></div>
      <div class="hero-content">
        <span class="hero-label">Founded 1957 &bull; Charlotte, North Carolina</span>
        <h1>Help Someone<br>In Need</h1>
        <p>Enhancing the quality of life and promoting the general improvement of the communities in which we serve.</p>
        <div class="hero-actions">
          <a href="/get-involved" data-nav class="btn btn-gold btn-lg">Get Involved</a>
          <a href="/donate" data-nav class="btn btn-outline btn-lg">Donate Now</a>
        </div>
      </div>
    </section>

    <!-- Marquee Strip -->
    <div class="marquee-strip">
      <div class="marquee-inner">
        <span>Economic Development</span>
        <span>&bull;</span>
        <span>Education</span>
        <span>&bull;</span>
        <span>Family</span>
        <span>&bull;</span>
        <span>Health</span>
        <span>&bull;</span>
        <span>Political Awareness</span>
        <span>&bull;</span>
        <span>Economic Development</span>
        <span>&bull;</span>
        <span>Education</span>
        <span>&bull;</span>
        <span>Family</span>
        <span>&bull;</span>
        <span>Health</span>
        <span>&bull;</span>
        <span>Political Awareness</span>
        <span>&bull;</span>
      </div>
    </div>

    <!-- Mission Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.conclaveBoard}" alt="Las Amigas Board" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Our Mission</div>
            <h2>Empowering Communities Since 1957</h2>
            <p>To enhance the quality of life and promote the general improvement of the communities in which we serve. To encourage personal and professional growth, and foster a closer relationship among members.</p>
            <div class="gold-line"></div>
            <p><em>&ldquo;Those who apply themselves too closely to little things, often become incapable of accomplishing great things.&rdquo;</em></p>
            <a href="/about-us" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <div class="stat-number">29</div>
            <div class="stat-label">Chapters</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">500+</div>
            <div class="stat-label">Members</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">$500K+</div>
            <div class="stat-label">Scholarships</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Service Hours</div>
          </div>
        </div>
      </div>
    </section>

    <!-- President Section -->
    <section class="section bg-light">
      <div class="container">
        <div class="president-section fade-in">
          <div class="president-img">
            <img src="${IMG.president}" alt="Cynthia H. Shepard" loading="lazy">
          </div>
          <div class="president-info">
            <div class="label">22nd National President</div>
            <h2>Cynthia H. Shepard</h2>
            <div class="president-title">National President</div>
            <div class="president-theme">&ldquo;The Power of We&rdquo;</div>
            <p>Leading Las Amigas Incorporated with vision and purpose, President Shepard continues our legacy of service to underserved communities across the nation.</p>
            <a href="/about-us" data-nav class="btn btn-primary btn-sm">Meet Our Leadership</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmatic Thrusts -->
    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">What We Do</div>
          <h2>Our Programmatic Thrusts</h2>
          <div class="section-divider"></div>
          <p>Five pillars of service driving meaningful change in underserved communities across the nation.</p>
        </div>
        <div class="grid grid-3 fade-in rajugrd" style="gap:28px">
          <div class="card">
            <div class="card-img card-img-sm card-img-contain" >
              <img src="${IMG.thrustEconDev}" alt="Economic Development" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Program</div>
              <h3>Economic Development</h3>
              <p>Addressing needs within our communities such as food insecurity.</p>
              <a href="/economic-development" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-img card-img-sm card-img-contain">
              <img src="${IMG.thrustEducation}"   alt="Education" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Program</div>
              <h3>Education</h3>
              <p>Advocating for literacy improvement and continuing the legacy of post-secondary education.</p>
              <a href="/education" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-img card-img-sm card-img-contain">
              <img src="${IMG.thrustFamily}" alt="Family" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Program</div>
              <h3>Family</h3>
              <p>Providing resources for those that need it most and to build stable homes.</p>
              <a href="/family" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-img card-img-sm card-img-contain">
              <img src="${IMG.thrustHealth}" alt="Health" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Program</div>
              <h3>Health</h3>
              <p>Helping fight the health disparities in the African American community.</p>
              <a href="/health" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-img card-img-sm card-img-contain">
              <img src="${IMG.thrustPolitical}" alt="Political Awareness" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Program</div>
              <h3>Political Awareness</h3>
              <p>Bridging the gap between social justice and change within our communities.</p>
              <a href="/political-awareness" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="container">
        <div class="quote-content fade-in">
          <blockquote>&ldquo;Those who apply themselves too closely to little things, often become incapable of accomplishing great things.&rdquo;</blockquote>
          <div class="quote-author">Our Founding Motto</div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="feature-block reverse fade-in">
          <div class="feature-text">
            <div class="label">Our Impact</div>
            <h2>Help Us, Help Others</h2>
            <p>Donate today to join the movement to change our underserved communities. Your dollars provide resources for education, health, family stability, and economic development.</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap">
              <a href="/donate" data-nav class="btn btn-primary btn-sm">Donate Now</a>
              <a href="/our-impact" data-nav class="btn btn-outline-dark btn-sm">See Our Impact</a>
            </div>
          </div>
          <div class="feature-img">
            <img src="${IMG.honorary}" alt="Las Amigas Impact" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Amounts -->
    <section class="section-sm bg-gradient text-white">
      <div class="container text-center">
        <div class="label" style="color:#c9a84c;margin-bottom:16px">Support Our Mission</div>
        <h2 style="color:#fff;margin-bottom:32px">Make a Donation</h2>
        <div class="grid grid-3 fade-in" style="max-width:700px;margin:0 auto;gap:16px">
          <a href="/donate" data-nav class="btn btn-gold btn-sm" style="justify-content:center">$25</a>
          <a href="/donate" data-nav class="btn btn-gold btn-sm" style="justify-content:center">$50</a>
          <a href="/donate" data-nav class="btn btn-gold btn-sm" style="justify-content:center">$100</a>
          <a href="/donate" data-nav class="btn btn-gold btn-sm" style="justify-content:center">$150</a>
          <a href="/donate" data-nav class="btn btn-gold btn-sm" style="justify-content:center">$200</a>
          <a href="/donate" data-nav class="btn btn-outline btn-sm" style="justify-content:center">Custom Amount</a>
        </div>
      </div>
    </section>

    <!-- Volunteer / Get Involved / Donate -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-3 fade-in">
          <a href="/get-involved" data-nav class="icon-card" style="cursor:pointer;text-decoration:none">
            <div class="icon-wrap">${ICONS.volunteer}</div>
            <h3>Volunteer</h3>
            <p>Volunteer today and help our communities thrive.</p>
          </a>
          <a href="/get-involved" data-nav class="icon-card" style="cursor:pointer;text-decoration:none">
            <div class="icon-wrap">${ICONS.people}</div>
            <h3>Get Involved</h3>
            <p>Help our communities by joining the movement.</p>
          </a>
          <a href="/donate" data-nav class="icon-card" style="cursor:pointer;text-decoration:none">
            <div class="icon-wrap">${ICONS.donate}</div>
            <h3>Donate</h3>
            <p>Help us reach our fundraising goal.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Gwinnett Chapter Induction -->
    <section class="section-sm bg-light">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.gwinnettInduction}" alt="Gwinnett Chapter Induction" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Our Impact</div>
            <h2>Gwinnett Chapter Induction</h2>
            <p>Our newest chapter continues to grow and serve the Greater Atlanta community. Welcome to the sisterhood!</p>
            <a href="/our-impact" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Sections -->
    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${IMG.harambe}')"></div>
      <div class="cta-content container">
        <div class="label" style="color:#c9a84c">Join the Movement</div>
        <h2 style="color:#fff">Sign Up to Learn More About Las Amigas</h2>
        <p style="color:rgba(255,255,255,0.8)">Stay connected with our mission and discover how you can make a difference in underserved communities.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <a href="/get-involved" data-nav class="btn btn-gold">Get Involved</a>
          <a href="/contact-us" data-nav class="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>

    <!-- Partner logos -->
    <section class="section-sm bg-light">
      <div class="container text-center">
        <div class="label" style="margin-bottom:32px">Our Affiliate Partners</div>
        <div class="partner-grid fade-in">
          <img src="${IMG.kidneyFoundation}" alt="Kidney Foundation" class="partner-logo" loading="lazy">
          <img src="${IMG.lupus}" alt="Lupus Foundation" class="partner-logo" loading="lazy">
          <img src="${IMG.habitat}" alt="Habitat for Humanity" class="partner-logo" loading="lazy">
          <img src="${IMG.ncnw}" alt="NCNW" class="partner-logo" loading="lazy">
          <img src="${IMG.boneMarrow}" alt="Bone Marrow Foundation" class="partner-logo" loading="lazy">
        </div>
      </div>
    </section>`;
}


// ─── ABOUT PAGE ─────────────────────────────────────────────────────────────
function renderAboutPage() {
  return `
    ${renderPageBanner('About Us', 'Learn about our history, mission, and the values that drive our service.', IMG.harambe, [{ text: 'About Us' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.conclaveBoard}" alt="Las Amigas Sisterhood" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Who We Are</div>
            <h2>Las Amigas Incorporated</h2>
            <p>Las Amigas Incorporated is a 501(c)(3) organization, founded in Charlotte, North Carolina in 1957, whose vision has been to recruit, develop, and retain members that are dedicated to making the world a better place for the present and future generations; one community at a time.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">What We Believe</div>
          <h2>Our Purpose</h2>
          <div class="section-divider"></div>
          <p>We believe in enhancing the quality of life and promoting the general improvement of the communities in which we serve.</p>
        </div>
        <div class="grid grid-3 fade-in">
          <div class="icon-card">
            <div class="icon-wrap">${ICONS.heart}</div>
            <h3>Serve</h3>
            <p>To further the enhancement and development of our communities through cultural and civic service.</p>
          </div>
          <div class="icon-card">
            <div class="icon-wrap">${ICONS.people}</div>
            <h3>Recruit</h3>
            <p>To encourage actions necessary and proper to implement and attain the purposes for which Las Amigas was organized.</p>
          </div>
          <div class="icon-card">
            <div class="icon-wrap">${ICONS.handshake}</div>
            <h3>Relationships</h3>
            <p>To foster a closer relationship and a fuller exchange of ideas among members.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Core Principles</div>
          <h2>Our Shared Values</h2>
          <div class="section-divider"></div>
        </div>
        <div class="values-grid fade-in">
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valCommitment}" alt="Commitment" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Commitment</h4>
              <p>100% committed to improving our communities with vision, innovation and execution.</p>
            </div>
          </div>
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valCitizenship}" alt="Good Citizenship" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Good Citizenship</h4>
              <p>Making an impact through our time, talents, passion and hard work as we serve our communities.</p>
            </div>
          </div>
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valIntegrity}" alt="Integrity" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Integrity</h4>
              <p>Striving to do what is right and fair for each other and for those that we serve.</p>
            </div>
          </div>
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valRespect}" alt="Respect" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Respect</h4>
              <p>Committed to building an encouraging, caring, and supportive environment.</p>
            </div>
          </div>
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valService}" alt="Service" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Service</h4>
              <p>Listening and understanding the needs of the community and building solutions that last for generations.</p>
            </div>
          </div>
          <div class="value-card" style="display:flex;gap:20px;align-items:center">
            <img src="${IMG.valTeamwork}" alt="Teamwork" style="width:80px;height:80px;border-radius:12px;object-fit:cover;flex-shrink:0">
            <div>
              <h4>Teamwork</h4>
              <p>Working together to understand problems, seek viable solutions, and continuously grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <div class="container">
        <div class="quote-content fade-in">
          <div class="label" style="color:#c9a84c;margin-bottom:24px">Our Creed</div>
          <blockquote>We believe in the principles and ideals of Las Amigas. We further believe that through the bonds of a united sisterhood, we can greatly enhance the society in which we live by availing ourselves to the opportunities to know and serve others; to remain loyal to our organization and the fulfillment of our individual responsibilities in making this world a better place in which to live. These things we believe.</blockquote>
        </div>
      </div>
    </section>`;
}


// ─── FOUNDERS PAGE ──────────────────────────────────────────────────────────
function renderFoundersPage() {
  return `
    ${renderPageBanner('Our Founders', 'The visionary women who established Las Amigas Incorporated.', IMG.firstConclave, [{ text: 'About', slug: 'about-us' }, { text: 'Our Founders' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Our History</div>
          <h2>Founded February 5, 1957</h2>
          <div class="section-divider"></div>
          <p>Las Amigas Incorporated is a national, public service, and charitable women\u2019s organization founded by two teachers, Mrs. Dora R. Mason and Mrs. Mary Q. Moore, in Charlotte, North Carolina.</p>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="founder-block fade-in">
          <div class="founder-img">
            <img src="${IMG.doraMason}" alt="Dora R. Mason" loading="lazy">
          </div>
          <div class="founder-text">
            <div class="label">Co-Founder</div>
            <h3>Dora R. Mason</h3>
            <p>No man is an island. No man stands alone. Each man\u2019s joy is joy to me. Each man\u2019s grief is my own.</p>
            <p>As I write this article it brings to mind that in eight months, Las Amigas will begin the thirty-fifth year of dedicated service to our fellowman. I consider each of us as Bridge Builders. When we speak of Bridge Builders, we readily think of engineers who build bridges to span the mighty rivers. They are needed for convenient and safe travel, but there is a need for bridges that you and I can build. Bridges that will make this world a better place to live, for those in need of Las Amigas Service.</p>
            <p>I will name a few of the bridges that Las Amigas Sisters can continue to build upon: Love, Friendship, Tolerance, Faith, Hope and Acceptance.</p>
            <p><em>May God continue to richly bless each of you.</em></p>
          </div>
        </div>

        <div class="founder-block reverse fade-in">
          <div class="founder-text">
            <div class="label">Co-Founder</div>
            <h3>Mary Q. Moore</h3>
            <p>Sisters of Las Amigas, we have reached many milestones in our organization because of your dedication and participation. You have given countless hours of your time, ideas and energy that has caused Las Amigas to move forward.</p>
            <p>Your sincerity and leadership to Las Amigas has proven through the years that we as strong black women can shoulder responsibilities to make meaningful things happen in our communities. Sisters there is nothing like leaning on each other for support.</p>
            <p>We are unique in various ways such as rendering service to others, having outstanding members in various fields, developing outstanding chapters, making sure our attendance is great in attending meetings and for the sisterliness that each of you portray.</p>
            <p><em>God has blessed all of us in so many ways. It is wonderful to be in your midst and I salute each of you!</em></p>
          </div>
          <div class="founder-img">
            <img src="${IMG.maryMoore}" alt="Mary Q. Moore" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.portsChapter}" alt="Las Amigas Mission" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Our Mission</div>
            <h2>Achieving the Mission</h2>
            <p>Our mission is achieved by providing community services and cultural enrichment through a variety of projects and programs. We extend financial and human support for the general improvement of the communities in which we serve.</p>
            <p>We provide opportunities that contribute to the development of members\u2019 professional and leadership capabilities, encouraging and promoting teamwork, full participation, and exchange of ideas.</p>
            <p>We recognize and reward members\u2019 contributions to the success of the mission.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Our Foundation</div>
          <h2>Founding Principles</h2>
          <div class="section-divider"></div>
        </div>
        <div class="container-narrow fade-in">
          <p style="text-align:center;font-size:1.1rem;line-height:2">The twelve original members established principles that remain the foundation of Las Amigas. From the beginning, Las Amigas Incorporated has created an atmosphere that fosters a closer relationship and a fuller exchange of ideas among members. To remain relevant, Las Amigas furthers the enhancement and development of communities through cultural and civic improvement. Our goal is to work with our communities to promote the general improvement of neighborhoods through various projects.</p>
        </div>
      </div>
    </section>`;
}


// ─── TIMELINE PAGE ──────────────────────────────────────────────────────────
function renderTimelinePage() {
  const events = [
    { year: '1957', title: 'Founded in Charlotte, NC', desc: 'Mrs. Dora R. Mason and Mrs. Mary Q. Moore establish Las Amigas with twelve original members.' },
    { year: '1960s', title: 'Growth & Expansion', desc: 'Las Amigas expands beyond Charlotte, establishing new chapters across North Carolina.' },
    { year: '1970s', title: 'Building Bridges', desc: 'Continued growth with focus on community service, cultural enrichment, and sisterhood.' },
    { year: '1980s', title: 'National Presence', desc: 'Las Amigas grows into a national organization with chapters in multiple states.' },
    { year: '1990s', title: 'Strengthening Communities', desc: 'Focused efforts on education, health, and economic development in underserved communities.' },
    { year: '2000s', title: 'New Millennium', desc: 'Embracing technology and modern approaches to community service and member engagement.' },
    { year: '2010s', title: 'Over $500K in Scholarships', desc: 'Reaching milestone achievements with over 500,000 scholarship dollars and 1 million community service hours.' },
    { year: 'Today', title: 'The Power of We', desc: 'Under the 22nd National President, continuing the legacy of service with 29 chapters and 500+ members.' },
  ];

  return `
    ${renderPageBanner('Our Timeline', 'A journey of service, sisterhood, and community impact since 1957.', IMG.firstConclave, [{ text: 'About', slug: 'about-us' }, { text: 'Timeline' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="timeline fade-in">
          ${events.map(e => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-year">${e.year}</div>
                <h3 style="font-size:1.1rem;margin-bottom:8px">${e.title}</h3>
                <p style="margin:0;font-size:0.92rem">${e.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── IMPACT PAGE ────────────────────────────────────────────────────────────
function renderImpactPage() {
  return `
    ${renderPageBanner('Our Impact', 'See how Las Amigas is making a difference in communities across the nation.', IMG.impactPhoto1, [{ text: 'Our Impact' }])}

    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <div class="stat-number">29</div>
            <div class="stat-label">Chapters</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">500+</div>
            <div class="stat-label">Members</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">$500K+</div>
            <div class="stat-label">Scholarships</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Service Hours</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.impactButterflies}" alt="Beautiful Butterflies" loading="lazy" style="object-fit:contain;background:#f8f5fc">
          </div>
          <div class="feature-text">
            <div class="label">Initiative</div>
            <h2>Beautiful Butterflies</h2>
            <p>Beautiful Butterflies mission is geared towards supporting the individuals with Lupus and their village of support\u2014their family, friends, and caregivers. With so many people affected by this illness, Beautiful Butterflies is an advocate for increasing public awareness and garnering private sector support to advance research for Lupus.</p>
          </div>
        </div>

        <div class="feature-block reverse fade-in">
          <div class="feature-text">
            <div class="label">Community Service</div>
            <h2>Scholarship Recipients & Community Outreach</h2>
            <p>Our chapters are actively involved in their communities. From donating blankets and supplies to the Donayre Cancer Center in Whiteville, North Carolina, to welcoming prospective new members, Las Amigas is always in motion.</p>
            <a href="/get-involved" data-nav class="btn btn-primary btn-sm">Get Involved</a>
          </div>
          <div class="feature-img">
            <img src="${IMG.charlotteDonation}" alt="Community Service" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Photo Gallery -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">In Action</div>
          <h2>Our Chapters at Work</h2>
          <div class="section-divider"></div>
        </div>
        <div class="grid grid-3 fade-in">
          <div class="card">
            <div class="card-img">
              <img src="${IMG.impactPhoto1}" alt="Chapter in action" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Chapter Activity</div>
              <h3>Community Outreach</h3>
              <p>Our sisters making a difference through direct service.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.impactPhoto2}" alt="Donation drive" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Giving Back</div>
              <h3>Donation Drives</h3>
              <p>Collecting and distributing supplies to those in need.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.impactPhoto3}" alt="Member engagement" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Engagement</div>
              <h3>New Member Induction</h3>
              <p>Welcoming new sisters and growing our community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${IMG.communityGarden}')"></div>
      <div class="cta-content container">
        <h2 style="color:#fff">Ready to Make a Difference?</h2>
        <p style="color:rgba(255,255,255,0.8)">Join us in our mission to empower communities and change lives.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <a href="/donate" data-nav class="btn btn-gold">Donate</a>
          <a href="/get-involved" data-nav class="btn btn-outline">Get Involved</a>
        </div>
      </div>
    </section>`;
}


// ─── GET INVOLVED PAGE ──────────────────────────────────────────────────────
function renderGetInvolvedPage() {
  const ways = [
    { img: IMG.iconGive, title: 'Give', desc: 'Donate to help us help others in underserved communities.', link: '/donate', btnText: 'Learn More' },
    { img: IMG.iconSocial, title: 'Get Social', desc: 'Follow us on Facebook, Instagram and LinkedIn.' },
    { img: IMG.iconVolunteer, title: 'Join our Sisterhood', desc: 'Join the movement to be the change that tomorrow needs.', link: '/contact-us', btnText: 'Become a Member' },
    { img: IMG.iconVolunteer, title: 'Volunteer', desc: 'Get involved at an upcoming event near you.' },
    { img: IMG.iconSponsor, title: 'Become a Sponsor', desc: 'Your gift will help raise awareness and create change in our communities.', link: '/donate', btnText: 'Donate Now' },
    { img: IMG.iconCorporate, title: 'Corporate Partner', desc: 'Corporate support is welcome in the form of donations or mentorship opportunities.' },
  ];

  return `
    ${renderPageBanner('Get Involved', 'See the transformative impact of our work and share our passion.', IMG.communityGarden, [{ text: 'Get Involved' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Help Us to Help Others</div>
          <h2>Ways to Get Involved</h2>
          <div class="section-divider"></div>
          <p>Become a part of the long-term solution. Together, we can create a lasting, sustainable change.</p>
        </div>
        <div class="grid grid-3 fade-in">
          ${ways.map(w => `
            <div class="icon-card">
              <img src="${w.img}" alt="${w.title}" class="card-icon-img" loading="lazy">
              <h3>${w.title}</h3>
              <p>${w.desc}</p>
              ${w.link ? `<a href="${w.link}" data-nav class="btn btn-outline-dark btn-sm" style="margin-top:16px">${w.btnText}</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${IMG.harambe}')"></div>
      <div class="cta-content container">
        <h2 style="color:#fff">Ready to Join the Movement?</h2>
        <p style="color:rgba(255,255,255,0.8)">Contact us today to learn how you can make a difference.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <a href="/contact-us" data-nav class="btn btn-gold">Contact Us</a>
          <a href="/donate" data-nav class="btn btn-outline">Donate Now</a>
        </div>
      </div>
    </section>`;
}


// ─── AFFILIATE PARTNERS PAGE ────────────────────────────────────────────────
function renderAffiliatePartnersPage() {
  return `
    ${renderPageBanner('Affiliate Partners', 'Together we create a better tomorrow.', IMG.modernOffice, [{ text: 'Affiliate Partners' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.collaboratingWork}" alt="Partners" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Our Partners</div>
            <h2>Changemakers for the Next Generation</h2>
            <p>Our Affiliate Partners and Corporate Sponsors help our nonprofit foundation support and empower our communities.</p>
            <p>They share our beliefs that each of us can be a lifeline for others by donating funds to worthy causes. Whether you are an individual, a family, a small business, or a corporation, you can provide the necessary funds to allow us to help more people in underserved communities.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container text-center">
        <div class="section-title fade-in">
          <div class="label">Partners in Service</div>
          <h2>Our Affiliate Organizations</h2>
          <div class="section-divider"></div>
        </div>
        <div class="partner-grid fade-in" style="gap:64px">
          <img src="${IMG.kidneyFoundation}" alt="Kidney Foundation" class="partner-logo" loading="lazy" style="max-width:220px">
          <img src="${IMG.lupus}" alt="Lupus Foundation" class="partner-logo" loading="lazy" style="max-width:220px">
          <img src="${IMG.habitat}" alt="Habitat for Humanity" class="partner-logo" loading="lazy" style="max-width:220px">
          <img src="${IMG.ncnw}" alt="NCNW" class="partner-logo" loading="lazy" style="max-width:220px">
          <img src="${IMG.boneMarrow}" alt="Bone Marrow Foundation" class="partner-logo" loading="lazy" style="max-width:220px">
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${IMG.communityGarden}')"></div>
      <div class="cta-content container">
        <h2 style="color:#fff">Become a Partner</h2>
        <p style="color:rgba(255,255,255,0.8)">Join us as changemakers for the next generation.</p>
        <a href="/contact-us" data-nav class="btn btn-gold">Contact Us</a>
      </div>
    </section>`;
}


// ─── PROGRAMMATIC THRUSTS PAGE ──────────────────────────────────────────────
function renderProgrammaticThrustsPage() {
  const programs = [
    { img: IMG.thrustEconDev, title: 'Economic Development', slug: 'economic-development', desc: 'Addressing the needs within our communities such as food insecurity.' },
    { img: IMG.thrustEducation, title: 'Education', slug: 'education', desc: 'Advocating for the improvement of literacy in underrepresented communities.' },
    { img: IMG.thrustFamily, title: 'Family', slug: 'family', desc: 'Providing resources for those that need it most and to build stable homes.' },
    { img: IMG.thrustHealth, title: 'Health', slug: 'health', desc: 'Helping fight the health disparities in the African American community.' },
    { img: IMG.thrustPolitical, title: 'Political Awareness', slug: 'political-awareness', desc: 'Bridging the gap between social justice and change within our communities.' },
  ];

  return `
    ${renderPageBanner('Programmatic Thrusts', 'Five pillars of service driving meaningful change.', IMG.blueStructure, [{ text: 'Programs', slug: 'programmatic-thrusts' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Our Programs</div>
          <h2>Five Pillars of Service</h2>
          <div class="section-divider"></div>
          <p>Our programmatic thrusts guide our community engagement and service initiatives.</p>
        </div>
        <div class="grid grid-3 fade-in" style="gap:32px">
          ${programs.map(p => `
            <div class="card">
              <div class="card-img">
                <img src="${p.img}" alt="${p.title}" loading="lazy">
                <div class="card-img-overlay"></div>
              </div>
              <div class="card-body">
                <div class="label">Program</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <a href="/${p.slug}" data-nav class="btn btn-outline-dark btn-sm">Learn More</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── GENERIC PROGRAM PAGE ───────────────────────────────────────────────────
function renderProgramPage(config) {
  return `
    ${renderPageBanner(config.title, config.subtitle, config.bannerImg, [{ text: 'Programs', slug: 'programmatic-thrusts' }, { text: config.title }])}

    <section class="section bg-white">
      <div class="container">
        ${config.sections.map((s, i) => `
          <div class="feature-block${i % 2 ? ' reverse' : ''} fade-in" style="margin-bottom:${i < config.sections.length - 1 ? '80px' : '0'}">
            <div class="feature-img">
              <img src="${s.img}" alt="${s.title}" loading="lazy">
            </div>
            <div class="feature-text">
              <div class="label">${config.label || 'Our Focus'}</div>
              <h2>${s.title}</h2>
              ${s.paragraphs.map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${config.ctaImg || IMG.communityGarden}')"></div>
      <div class="cta-content container">
        <h2 style="color:#fff">Help Us Make a Difference</h2>
        <p style="color:rgba(255,255,255,0.8)">Your support powers our mission to serve underserved communities.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <a href="/donate" data-nav class="btn btn-gold">Donate Now</a>
          <a href="/get-involved" data-nav class="btn btn-outline">Get Involved</a>
        </div>
      </div>
    </section>`;
}

function renderEconDevPage() {
  return renderProgramPage({
    title: 'Economic Development',
    subtitle: 'Addressing the needs within our communities.',
    label: 'Economic & Community Development',
    bannerImg: IMG.programEconDev,
    ctaImg: IMG.foodBank,
    sections: [
      {
        title: 'Community Development',
        img: IMG.foodBank,
        paragraphs: [
          'Las Amigas is dedicated to helping our communities with resources for the homeless and those with food insecurities through several community projects and activities.',
          'We believe that Economic or Community Development is an investment in enhancing the prosperity and quality of life for our communities. Our goal is to continue to offer resources for our underserved communities.',
        ],
      },
      {
        title: 'Addressing Disparities',
        img: IMG.charlotteDonation,
        paragraphs: [
          'The COVID-19 pandemic has shed a light on the disparities in underserved communities. We continue to advocate for better representation and resources.',
          'We collaborate and partner with other organizations to address community needs and improve the communities we live in.',
        ],
      },
    ],
  });
}

function renderEducationPage() {
  return renderProgramPage({
    title: 'Education',
    subtitle: 'Increasing literacy in our neighborhoods, one community at a time.',
    label: 'Education',
    bannerImg: IMG.educationBanner,
    ctaImg: IMG.schoolTeacher,
    sections: [
      {
        title: 'Building Our Future',
        img: IMG.studying,
        paragraphs: [
          'We believe that through education, it is the gateway for our children\u2019s future. We assist with tutoring and help provide celebrations to motivate and build morale for our Teachers.',
          'We continuously give back to communities by giving backpacks, clothing, books and school supplies to children in need.',
        ],
      },
      {
        title: 'Book Drive Initiative',
        img: IMG.bookDrive,
        paragraphs: [
          'Las Amigas Incorporated is committed to increasing the lifelong journey of literacy within our communities. By assisting local schools, educators and parents with the necessary resources, we can combat the rising literacy crisis.',
          'Our book drive initiative is designed to provide books that teach our children about their rich, cultural history. Every child should feel a sense of self worth when they read books.',
        ],
      },
    ],
  });
}

function renderFamilyPage() {
  return renderProgramPage({
    title: 'Family',
    subtitle: 'Providing resources for those that need it most to build stable homes.',
    label: 'Family Resources',
    bannerImg: IMG.programFamily,
    ctaImg: IMG.movingIn,
    sections: [
      {
        title: 'Resources for Everyday Life',
        img: IMG.charlotteSchool,
        paragraphs: [
          'We help provide resources for children living in low-income or homeless situations with the necessary items such as clothing, books and shoes as well as materials needed for the school year.',
          'Additionally, we feed families for the holidays and provide food boxes year round for families and seniors facing food insecurity.',
        ],
      },
      {
        title: 'Comfort of Love Blankets',
        img: IMG.thanksgivingDinner,
        paragraphs: [
          'Our Comfort of Love Blankets provide comfort for those that have experienced a major life altering event, such as those that are terminally ill, in hospice care, or enduring chemotherapy treatment.',
          'Additionally we provide blankets to the homeless and homeless shelters during the colder months. Las Amigas Incorporated donated over 300 blankets last year to those in need.',
        ],
      },
    ],
  });
}

function renderHealthPage() {
  return renderProgramPage({
    title: 'Health',
    subtitle: 'Fighting health disparities in the African American community.',
    label: 'Health Initiatives',
    bannerImg: IMG.mooresvilleLibrary,
    ctaImg: IMG.gastoniaHospice,
    sections: [
      {
        title: 'Showing Love to the Elderly',
        img: IMG.doctorAppt,
        paragraphs: [
          'Studies show that 43% of Americans age 60 and older report feeling lonely, which increases risk of dementia, heart disease, stroke, and premature fatality.',
          'We provide support for those wanting the Covid-19 Shot. Las Amigas is actively involved with our Seniors by visiting rest homes, providing care packages, and connecting with them so they feel loved.',
        ],
      },
      {
        title: 'Healthcare for Seniors',
        img: IMG.homelessCovid,
        paragraphs: [
          'We want to increase the frequency of African Americans seeking help from healthcare officials at the onset of diseases to help prolong their life.',
          'Additionally, we provide knowledge and care to decrease the risk of chronic health conditions such as hypertension, diabetes, stroke and cancer.',
        ],
      },
    ],
  });
}

function renderPoliticalAwarenessPage() {
  return renderProgramPage({
    title: 'Political Awareness',
    subtitle: 'Helping students become better informed about politics.',
    label: 'Civic Engagement',
    bannerImg: IMG.programPolitical,
    ctaImg: IMG.vote,
    sections: [
      {
        title: 'Increase Voter Participation',
        img: IMG.voteBoxes,
        paragraphs: [
          'We assist in promoting voter rights and civic engagement and spreading voter awareness at Universities and college campuses in our communities.',
        ],
      },
      {
        title: 'Get Involved in Democracy',
        img: IMG.voters,
        paragraphs: [
          'Our communities must do a better job to reduce the barriers to student voting and voting in general. Our voices must be heard in each election.',
          'We must promote an environment that actively involves our communities to register to vote and show up at the polls on election day to bring about a change for our nation.',
        ],
      },
    ],
  });
}


// ─── REGIONS PAGE ───────────────────────────────────────────────────────────
function renderRegionsPage() {
  const regions = Object.values(REGION_DATA);

  return `
    ${renderPageBanner('Our Regions', 'Las Amigas chapters across the nation.', IMG.regionsBanner, [{ text: 'Regions' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Nationwide Presence</div>
          <h2>Five Regions, One Sisterhood</h2>
          <div class="section-divider"></div>
          <p>Our chapters span across the Central, Mid-Atlantic, Northeast, Southeast, and Southwest regions.</p>
        </div>
        <div class="grid grid-3 fade-in">
          ${regions.map(r => `
            <div class="card">
              <div class="card-img">
                <img src="${r.image}" alt="${r.name}" loading="lazy">
                <div class="card-img-overlay"></div>
              </div>
              <div class="card-body">
                <div class="label">Region</div>
                <h3>${r.name}</h3>
                <p>${r.description.substring(0, 100)}...</p>
                <a href="/${r.slug}" data-nav class="btn btn-outline-dark btn-sm">Explore Region</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── REGION PAGE ────────────────────────────────────────────────────────────
function renderRegionPage(regionConfig) {
  return `
    ${renderPageBanner(regionConfig.name, regionConfig.description, regionConfig.image, [{ text: 'Regions', slug: 'regions' }, { text: regionConfig.name }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Leadership</div>
          <h2>Meet the Leaders</h2>
          <div class="section-divider"></div>
        </div>
        <div class="grid grid-4 fade-in">
          ${regionConfig.leaders.map(l => `
            <div class="leader-card">
              ${l.photo
                ? `<img src="${l.photo}" alt="${l.name || 'TBA'}" class="leader-photo" loading="lazy">`
                : `<div class="leader-avatar">${l.name ? l.name.charAt(0) : '?'}</div>`
              }
              <h4>${l.name || 'TBA'}</h4>
              <div class="leader-title">${l.title}</div>
              ${l.email ? `<div class="leader-email">${l.email}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">${regionConfig.name}</div>
          <h2>Our Region in Action</h2>
          <div class="section-divider"></div>
        </div>
        <div class="text-center fade-in">
          <img src="${regionConfig.image}" alt="${regionConfig.name} in action" loading="lazy" style="border-radius:16px;max-width:100%;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.1)">
        </div>
        ${regionConfig.galleryImages && regionConfig.galleryImages.length > 0 ? `
        <div class="gallery-grid fade-in" style="margin-top:48px">
          ${regionConfig.galleryImages.map(img => `
            <div class="gallery-item">
              <img src="${img}" alt="${regionConfig.name} gallery" loading="lazy">
            </div>
          `).join('')}
        </div>
        ` : ''}
      </div>
    </section>`;
}


// ─── EVENTS PAGE ────────────────────────────────────────────────────────────
function renderEventsPage() {
  return `
    ${renderPageBanner('News & Events', 'Stay updated with Las Amigas activities and celebrations.', IMG.conclave2024_1, [{ text: 'Events' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-3 fade-in">
          <div class="card">
            <div class="card-img card-img-contain">
              <img src="${IMG.conclaveFlyer}" alt="Conclave 2025" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Upcoming</div>
              <h3>Conclave 2025</h3>
              <p>Join us at the JW Marriott for our national conclave.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img card-img-contain">
              <img src="${IMG.happyBirthday}" alt="Member Birthdays" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">Celebrations</div>
              <h3>Member Birthdays</h3>
              <p>Celebrating our members and their milestones.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.conclave2023_1}" alt="Past Events" loading="lazy">
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="label">History</div>
              <h3>Past Conclaves</h3>
              <p>Relive memorable moments from our previous national gatherings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Quick Links</div>
          <h2>Event Categories</h2>
          <div class="section-divider"></div>
        </div>
        <div class="grid grid-3 fade-in" style="max-width:800px;margin:0 auto">
          <a href="/new-members" data-nav class="icon-card" style="cursor:pointer">
            <div class="icon-wrap">${ICONS.people}</div>
            <h3>New Members</h3>
          </a>
          <a href="/in-memoriam" data-nav class="icon-card" style="cursor:pointer">
            <div class="icon-wrap">${ICONS.heart}</div>
            <h3>In Memoriam</h3>
          </a>
          <a href="/service-awards" data-nav class="icon-card" style="cursor:pointer;text-decoration:none">
            <div class="icon-wrap">${ICONS.star}</div>
            <h3>Service Awards</h3>
          </a>
        </div>
      </div>
    </section>`;
}


// ─── PAST CONCLAVES PAGE ────────────────────────────────────────────────────
function renderPastConclavesPage() {
  return `
    ${renderPageBanner('Past Conclaves', 'Our national gatherings through the years.', IMG.conclaveBoard, [{ text: 'Events', slug: 'events' }, { text: 'Past Conclaves' }])}

    <section class="section bg-white">
      <div class="container text-center">
        <div class="section-title fade-in">
          <div class="label">Conclave History</div>
          <h2>National Gatherings</h2>
          <div class="section-divider"></div>
          <p>Our conclaves bring together members from across the nation for fellowship, service, and sisterhood.</p>
        </div>
        <div class="grid grid-3 fade-in">
          <div class="card">
            <div class="card-img card-img-contain">
              <img src="${IMG.conclaveFlyer}" alt="Conclave 2025" loading="lazy">
            </div>
            <div class="card-body">
              <div class="label">Upcoming</div>
              <h3>Conclave 2025</h3>
              <p>JW Marriott</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.conclave2024_1}" alt="Conclave 2024" loading="lazy">
            </div>
            <div class="card-body">
              <div class="label">Past Event</div>
              <h3>Conclave 2024</h3>
              <p>National gathering highlights.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.conclave2023_1}" alt="Conclave 2023" loading="lazy">
            </div>
            <div class="card-body">
              <div class="label">Past Event</div>
              <h3>Conclave 2023</h3>
              <p>Greensboro, NC</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.conclave2022_1}" alt="Conclave 2022" loading="lazy">
            </div>
            <div class="card-body">
              <div class="label">Past Event</div>
              <h3>Conclave 2022</h3>
              <p>Coming together in fellowship.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="${IMG.conclave2019_1}" alt="Conclave 2019" loading="lazy">
            </div>
            <div class="card-body">
              <div class="label">Past Event</div>
              <h3>Conclave 2019</h3>
              <p>Celebrating our sisterhood.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container text-center">
        <div class="section-title fade-in">
          <div class="label">Conclave 2024</div>
          <h2>Photo Gallery</h2>
          <div class="section-divider"></div>
        </div>
        <div class="gallery-grid fade-in">
          ${[IMG.conc24_2, IMG.conc24_3, IMG.conc24_4, IMG.conc24_5, IMG.conc24_6, IMG.conc24_7, IMG.conc24_8, IMG.conc24_9].map(img => `
            <div class="gallery-item">
              <img src="${img}" alt="Conclave 2024 photo" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── SERVICE AWARDS PAGE ────────────────────────────────────────────────────
function renderServiceAwardsPage() {
  return `
    ${renderPageBanner('Service Awards', 'Honoring members who have given 50+ years of dedicated service.', IMG.honorary, [{ text: 'Events', slug: 'events' }, { text: 'Service Awards' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Recognition</div>
          <h2>50+ Years of Service</h2>
          <div class="section-divider"></div>
          <p>We honor and celebrate our members who have dedicated half a century or more to the mission of Las Amigas Incorporated.</p>
        </div>
        <div class="text-center fade-in">
          <img src="${IMG.honorary}" alt="Honorary Sisters" loading="lazy" style="border-radius:16px;max-width:900px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.1)">
        </div>
      </div>
    </section>`;
}


// ─── NEW MEMBERS PAGE ───────────────────────────────────────────────────────
function renderNewMembersPage() {
  return `
    ${renderPageBanner('New Members', 'Welcoming the newest members of our sisterhood.', IMG.harambe, [{ text: 'Events', slug: 'events' }, { text: 'New Members' }])}

    <section class="section bg-white">
      <div class="container text-center">
        <div class="section-title fade-in">
          <div class="label">Welcome</div>
          <h2>Our Newest Sisters</h2>
          <div class="section-divider"></div>
        </div>
        <div class="fade-in">
          <img src="${IMG.highPointList}" alt="New Members" loading="lazy" style="border-radius:16px;max-width:700px;width:100%;margin:0 auto;box-shadow:0 20px 60px rgba(0,0,0,0.1)">
        </div>
      </div>
    </section>`;
}


// ─── IN MEMORIAM PAGE ───────────────────────────────────────────────────────
function renderInMemoriamPage() {
  const members = [
    { name: 'Dr. Edna L. Diggs', title: 'Past President', service: '54 Years of Service', photo: IMG.memDiggs },
    { name: 'Annlouise Goodner-Brown', title: '11th National President', service: '', photo: IMG.memGoodner },
    { name: 'Barbara Jamison', title: 'Member', service: '28 Years of Service', photo: IMG.memJamison },
  ];

  return `
    ${renderPageBanner('In Memoriam', 'Honoring the memory of our beloved sisters.', IMG.orchid, [{ text: 'Events', slug: 'events' }, { text: 'In Memoriam' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="section-title fade-in">
          <div class="label">Forever in Our Hearts</div>
          <h2>Remembering Our Sisters</h2>
          <div class="section-divider"></div>
        </div>
        <div class="grid grid-3 fade-in" style="max-width:900px;margin:0 auto">
          ${members.map(m => `
            <div class="memorial-card">
              <img src="${m.photo}" alt="${m.name}" class="memorial-photo" loading="lazy">
              <h3>${m.name}</h3>
              <div class="memorial-title">${m.title}</div>
              ${m.service ? `<p>${m.service}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── CONTACT PAGE ───────────────────────────────────────────────────────────
function renderContactPage() {
  return `
    ${renderPageBanner('Contact Us', 'Get in touch with Las Amigas, Incorporated.', IMG.communityGarden, [{ text: 'Contact Us' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-2 fade-in" style="gap:60px;align-items:start">
          <div>
            <div class="label">Get in Touch</div>
            <h2 style="margin-bottom:24px">We\u2019d Love to Hear From You</h2>
            <p>Have questions about Las Amigas Incorporated? Want to learn more about our programs or how to get involved? Send us a message and we\u2019ll get back to you.</p>

            <div style="margin-top:32px">
              <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:24px">
                <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#f8f5fc,#ede4f7);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                  <span style="color:#5e398f">${ICONS.location}</span>
                </div>
                <div>
                  <h4 style="font-size:1rem;margin-bottom:4px">Address</h4>
                  <p style="margin:0;font-size:0.92rem">P O BOX 1957<br>Greensboro, North Carolina 27402</p>
                </div>
              </div>
              <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:24px">
                <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#f8f5fc,#ede4f7);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                  <span style="color:#5e398f">${ICONS.email}</span>
                </div>
                <div>
                  <h4 style="font-size:1rem;margin-bottom:4px">Email</h4>
                  <p style="margin:0;font-size:0.92rem"><a href="mailto:info@lasamigasincorporated.org" style="color:#5e398f">info@lasamigasincorporated.org</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Your first name">
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Your last name">
              </div>
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="(555) 000-0000">
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" class="btn btn-primary" style="width:100%">Send Message</button>
          </div>
        </div>
      </div>
    </section>`;
}


// ─── DONATE PAGE ────────────────────────────────────────────────────────────
function renderDonatePage() {
  return `
    ${renderPageBanner('Donate', 'Join the movement to help others.', IMG.schoolTeacher, [{ text: 'Donate' }])}

    <section class="section bg-white">
      <div class="container">
        <div class="feature-block fade-in">
          <div class="feature-img">
            <img src="${IMG.charlotteDonation}" alt="Donate" loading="lazy">
          </div>
          <div class="feature-text">
            <div class="label">Support Our Mission</div>
            <h2>Your Dollars Make a Difference</h2>
            <p>Las Amigas Incorporated is a non-profit organization that uses fundraisers to generate the financial resources to support their missions and programmatic thrusts which include: feeding the homeless, collaborating with local schools to support their programs, and partnering with other organizations to help rebuild communities.</p>
            <p>Our fundraisers\u2014galas, auctions, online campaigns, and community events\u2014engage donors, raise awareness, and create a sense of community involvement. These funds help provide services like food, shelter, education and healthcare to those in need.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="feature-block reverse fade-in">
          <div class="feature-text">
            <div class="label">Recent Impact</div>
            <h2>Where Your Funds Go</h2>
            <p>This past year, funds were used to help purchase school supplies for Ben L. Smith High School throughout the year. We partnered with the Greensboro Police Department to supply blankets for the senior assisted living center on Church Street.</p>
            <p>Additionally, we provided blankets to those residents in Western Carolina that were affected by Hurricane Helene.</p>
            <a href="/our-impact" data-nav class="btn btn-primary btn-sm">See Our Impact</a>
          </div>
          <div class="feature-img">
            <img src="${IMG.gastoniaHospice}" alt="Impact" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-bg" style="background-image:url('${IMG.harambe}')"></div>
      <div class="cta-content container">
        <h2 style="color:#fff">Every Dollar Counts</h2>
        <p style="color:rgba(255,255,255,0.8)">Las Amigas Incorporated is a 501(c)(3) organization. All monetary donations are tax deductible to the fullest extent allowed by tax laws.</p>
        <a href="/contact-us" data-nav class="btn btn-gold btn-lg">Contact Us to Donate</a>
      </div>
    </section>`;
}


// ─── PRIVACY POLICY PAGE ────────────────────────────────────────────────────
function renderPrivacyPolicyPage() {
  return `
    ${renderPageBanner('Privacy Policy', 'How we protect your information.', IMG.modernOffice, [{ text: 'Privacy Policy' }])}

    <section class="section bg-white">
      <div class="container-narrow prose">
        <div class="fade-in">
          <h2>We Care About Your Privacy</h2>
          <p>At Las Amigas Incorporated (&ldquo;Las Amigas,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;), we understand and appreciate that your decision to choose us for your philanthropic investment in our communities is an expression of confidence.</p>

          <h2>I. Information We Collect</h2>
          <h3>A. Information You Provide</h3>
          <p>When you make a donation, we collect your name, address, phone number, and email address. We will not sell or rent our donor lists to any third party.</p>
          <h3>B. Information Collected Automatically</h3>
          <p>We may automatically collect certain information including IP address, browser type, and traffic data.</p>
          <h3>C. Use of Cookies</h3>
          <p>We may use cookies and Google Analytics to improve your browsing experience and analyze website traffic.</p>

          <h2>II. Use of Your Information</h2>
          <p>We will not sell your Personal Data. Uses include sharing with your consent, legal compliance, statistical analysis, and communication about our mission.</p>

          <h2>III. Security and Retention</h2>
          <p>We use SSL encryption for financial donations and follow a risk-based security approach to protect your data.</p>

          <h2>IV. Third-Party Websites</h2>
          <p>We have no control over third-party website tracking or policies. We encourage you to review privacy policies of any linked sites.</p>
        </div>
      </div>
    </section>`;
}


// ─── PHOTO GALLERY PAGE ────────────────────────────────────────────────────
function renderPhotoGalleryPage(regionSlug) {
  const regionMapping = {
    'mid-atlantic': 'copy-of-northeast-region-new',
    'northeast': 'about-1-1',
    'southeast': 'copy-of-mid-atlantic-region-new',
    'southwest': 'copy-of-southeast-region-new',
  };
  const regionNames = {
    'mid-atlantic': 'Mid-Atlantic',
    'northeast': 'Northeast',
    'southeast': 'Southeast',
    'southwest': 'Southwest',
  };
  const regionName = regionNames[regionSlug] || regionSlug;
  const regionDataSlug = regionMapping[regionSlug];
  const region = regionDataSlug ? REGION_DATA[regionDataSlug] : null;
  const images = (region && region.galleryImages && region.galleryImages.length > 0)
    ? region.galleryImages
    : [IMG.conclaveBoard, IMG.harambe, IMG.communityGarden, IMG.honorary];

  return `
    ${renderPageBanner(`${regionName} Photo Gallery`, `Photos from the ${regionName} Region.`, images[0], [{ text: 'Regions', slug: 'regions' }, { text: `${regionName} Gallery` }])}

    <section class="section bg-white">
      <div class="container text-center">
        <div class="section-title fade-in">
          <div class="label">${regionName} Region</div>
          <h2>Photo Gallery</h2>
          <div class="section-divider"></div>
          <p>Explore highlights and memorable moments from our ${regionName} chapters.</p>
        </div>
        <div class="gallery-grid fade-in">
          ${images.map(img => `
            <div class="gallery-item">
              <img src="${img}" alt="${regionName} gallery photo" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}


// ─── PAGE ROUTER ────────────────────────────────────────────────────────────
function getPageContent(slug) {
  if (MEMBER_SLUGS.has(slug) || isProductPage(slug)) {
    return null;
  }

  const renderers = {
    'home': renderHomePage,
    '': renderHomePage,
    'about-us': renderAboutPage,
    'our-founders': renderFoundersPage,
    'timeline': renderTimelinePage,
    'our-impact': renderImpactPage,
    'get-involved': renderGetInvolvedPage,
    'charitable-partners': renderAffiliatePartnersPage,
    'programmatic-thrusts': renderProgrammaticThrustsPage,
    'economic-development': renderEconDevPage,
    'education': renderEducationPage,
    'family': renderFamilyPage,
    'health': renderHealthPage,
    'political-awareness': renderPoliticalAwarenessPage,
    'regions': renderRegionsPage,
    'events': renderEventsPage,
    'services-5': renderPastConclavesPage,
    'conclave-2019': renderPastConclavesPage,
    'conclave-2023': renderPastConclavesPage,
    'copy-of-conclave-2024': renderPastConclavesPage,
    'service-awards': renderServiceAwardsPage,
    'new-members': renderNewMembersPage,
    'in-memoriam': renderInMemoriamPage,
    'contact-us': renderContactPage,
    'donate': renderDonatePage,
    'privacy-policy': renderPrivacyPolicyPage,
  };

  if (renderers[slug]) return renderers[slug]();
  if (REGION_DATA[slug]) return renderRegionPage(REGION_DATA[slug]);

  const galleryMatch = slug.match(/^(.+)-photo-gallery$/);
  if (galleryMatch) return renderPhotoGalleryPage(galleryMatch[1]);

  if (slug.startsWith('conclave-')) return renderPastConclavesPage();
  if (slug.startsWith('copy-of-conclave')) return renderPastConclavesPage();

  return renderHomePage();
}


// ─── CUSTOM ELEMENT CLASS ───────────────────────────────────────────────────

class RootxApp extends HTMLElement {
  static get observedAttributes() {
    return ['page'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._rendered = false;
    this._scrollHandlers = [];
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this._scrollHandlers.forEach(h => window.removeEventListener('scroll', h));
    this._scrollHandlers = [];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'page' && oldVal !== newVal) {
      this.render();
    }
  }

  render() {
    // Clean up old scroll listeners
    this._scrollHandlers.forEach(h => window.removeEventListener('scroll', h));
    this._scrollHandlers = [];

    const page = this.getAttribute('page') || 'home';
    const content = getPageContent(page);

    if (content === null) {
      this.shadowRoot.innerHTML = '';
      this.style.display = 'none';
      return;
    }

    this.style.display = 'block';

    this.shadowRoot.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet">
      <style>${STYLES}</style>
      ${renderHeader(page)}
      <main>${content}</main>
      ${renderFooter()}
      <div class="scroll-top" id="scrollTop">${ICONS.arrowUp}</div>
    `;

    this.setupInteractions();
    this._rendered = true;
  }

  setupInteractions() {
    const shadow = this.shadowRoot;

    // Mobile Menu Toggle
    const toggle = shadow.getElementById('menuToggle');
    const navWrapper = shadow.getElementById('navWrapper');
    if (toggle && navWrapper) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        navWrapper.classList.toggle('open');
      });

      shadow.querySelectorAll('.nav-item').forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
          item.querySelector('a').addEventListener('click', (e) => {
            if (window.innerWidth <= 1100) {
              e.preventDefault();
              item.classList.toggle('dropdown-open');
            }
          });
        }
      });
    }

    // Scroll Animations
    const animatedEls = shadow.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    if (animatedEls.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      animatedEls.forEach(el => observer.observe(el));
    }

    // Scroll to Top Button
    const scrollTopBtn = shadow.getElementById('scrollTop');
    if (scrollTopBtn) {
      const checkScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollTopBtn.classList.toggle('visible', scrollY > 400);
      };
      window.addEventListener('scroll', checkScroll);
      this._scrollHandlers.push(checkScroll);
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Internal Navigation (SPA-like)
    shadow.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          if (navWrapper) navWrapper.classList.remove('open');
          if (toggle) toggle.classList.remove('open');

          const slug = href.replace(/^\//, '') || 'home';

          this.dispatchEvent(new CustomEvent('rootx-navigate', {
            detail: { slug, href },
            bubbles: true,
            composed: true,
          }));

          this.setAttribute('page', slug);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // Sticky Header
    const header = shadow.getElementById('siteHeader');
    if (header) {
      const handleHeaderScroll = () => {
        const scrolled = window.scrollY > 100;
        header.classList.toggle('scrolled', scrolled);
      };
      window.addEventListener('scroll', handleHeaderScroll, { passive: true });
      this._scrollHandlers.push(handleHeaderScroll);
      handleHeaderScroll(); // Apply initial state
    }
  }
}

customElements.define('rootx-app', RootxApp);
