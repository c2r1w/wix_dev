// ============================================================================
// ROOTX CUSTOM ELEMENT — Las Amigas Incorporated Frontend Redesign
// Design inspired by: aka1908.com, ncnw.org, sgrho1922.org
// ============================================================================

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
};

// Base URL for links
const BASE = '';

// ─── CSS DESIGN SYSTEM ──────────────────────────────────────────────────────
const STYLES = `
/* ── Reset & Base ───────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:host {
  display: block;
  width: 100%;
  font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; transition: color 0.3s; }
a:hover { color: #c9a84c; }
img { max-width: 100%; height: auto; display: block; }
ul, ol { list-style: none; }
button { cursor: pointer; font-family: inherit; border: none; }
input, textarea, select { font-family: inherit; }

/* ── Typography ─────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a2e;
}
h1 { font-size: clamp(2.2rem, 5vw, 3.8rem); }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.8rem); }
h3 { font-size: clamp(1.3rem, 2.5vw, 2rem); }
h4 { font-size: clamp(1.1rem, 2vw, 1.5rem); }
p { margin-bottom: 1rem; color: #555; font-size: 1.05rem; }

.label {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: #c9a84c;
  font-weight: 500;
}

/* ── Layout Utilities ───────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.container-wide { max-width: 1400px; margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }
.section-sm { padding: 50px 0; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-16 { gap: 16px; }
.gap-24 { gap: 24px; }
.gap-32 { gap: 32px; }
.gap-48 { gap: 48px; }
.text-center { text-align: center; }
.text-white { color: #fff; }
.text-white p { color: rgba(255,255,255,0.85); }
.text-white h1, .text-white h2, .text-white h3, .text-white h4 { color: #fff; }
.bg-white { background: #fff; }
.bg-light { background: #f8f5fc; }
.bg-dark { background: #1a1a2e; }
.bg-primary { background: #5e398f; }
.bg-gradient { background: linear-gradient(135deg, #5e398f 0%, #3d2066 50%, #1a1a2e 100%); }

.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-5 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4, .grid-5 { grid-template-columns: 1fr; }
  .section { padding: 50px 0; }
  .container { padding: 0 16px; }
  .hide-mobile { display: none !important; }
}

/* ── Buttons ────────────────────────────────────────── */
.btn {
  display: inline-block;
  padding: 14px 36px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;
}
.btn-primary {
  background: #5e398f;
  color: #fff;
  border: 2px solid #5e398f;
}
.btn-primary:hover {
  background: #4c0863;
  border-color: #4c0863;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(94,57,143,0.35);
}
.btn-gold {
  background: #c9a84c;
  color: #1a1a2e;
  border: 2px solid #c9a84c;
}
.btn-gold:hover {
  background: #b8952f;
  border-color: #b8952f;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(201,168,76,0.35);
}
.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.btn-outline:hover {
  background: #fff;
  color: #5e398f;
  transform: translateY(-2px);
}
.btn-outline-dark {
  background: transparent;
  color: #5e398f;
  border: 2px solid #5e398f;
}
.btn-outline-dark:hover {
  background: #5e398f;
  color: #fff;
  transform: translateY(-2px);
}
.btn-sm { padding: 10px 24px; font-size: 0.85rem; }
.btn-lg { padding: 18px 48px; font-size: 1rem; }

/* ── Cards ──────────────────────────────────────────── */
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.4s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.card-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.card-body { padding: 28px; }
.card-body h3 { font-size: 1.3rem; margin-bottom: 12px; }
.card-body p { font-size: 0.95rem; color: #666; }
.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5e398f, #4c0863);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #fff;
}

/* ── Announcement Bar ───────────────────────────────── */
.announcement-bar {
  background: linear-gradient(90deg, #4c0863, #5e398f, #4c0863);
  color: #fff;
  padding: 8px 0;
  font-size: 0.85rem;
  text-align: center;
  letter-spacing: 1px;
  overflow: hidden;
}
.marquee {
  display: flex;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}
.marquee span {
  padding: 0 40px;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.8rem;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Header / Navigation ────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}
.site-header.scrolled {
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
}
.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.header-logo {
  display: flex;
  align-items: center;
  gap: 14px;
}
.header-logo img {
  height: 55px;
  width: auto;
}
.header-logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.2;
}
.header-logo-text small {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 0.65rem;
  color: #5e398f;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 400;
}

/* Navigation */
.main-nav { display: flex; align-items: center; gap: 4px; }
.main-nav > .nav-item { position: relative; }
.main-nav > .nav-item > a {
  display: block;
  padding: 8px 14px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #333;
  font-weight: 400;
  transition: color 0.3s;
  white-space: nowrap;
}
.main-nav > .nav-item > a:hover,
.main-nav > .nav-item.active > a { color: #5e398f; }

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  padding: 12px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
}
.nav-item:hover > .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown a {
  display: block;
  padding: 10px 24px;
  font-size: 0.9rem;
  color: #555;
  transition: all 0.2s;
}
.dropdown a:hover {
  background: #f8f5fc;
  color: #5e398f;
  padding-left: 30px;
}

/* Header CTA */
.header-cta {
  display: flex;
  align-items: center;
  gap: 16px;
}
.header-donate {
  background: #c9a84c;
  color: #1a1a2e;
  padding: 10px 28px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}
.header-donate:hover {
  background: #b8952f;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201,168,76,0.3);
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}
.menu-toggle span {
  display: block;
  width: 28px;
  height: 2px;
  background: #333;
  margin: 6px 0;
  transition: all 0.3s;
  border-radius: 2px;
}
.menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

@media (max-width: 1100px) {
  .menu-toggle { display: block; }
  .nav-wrapper {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    overflow-y: auto;
    z-index: 999;
    padding: 20px;
  }
  .nav-wrapper.open { transform: translateX(0); }
  .main-nav {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
  .main-nav > .nav-item > a {
    padding: 16px 0;
    font-size: 1rem;
    border-bottom: 1px solid #eee;
  }
  .dropdown {
    position: static;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    padding: 0 0 0 20px;
    display: none;
    border-radius: 0;
  }
  .nav-item.dropdown-open > .dropdown { display: block; }
  .dropdown a { padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
  .header-cta { display: none; }
  .mobile-cta {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 0;
  }
}
@media (min-width: 1101px) {
  .mobile-cta { display: none; }
}

/* ── Hero Section ───────────────────────────────────── */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  transition: transform 8s ease;
}
.hero:hover .hero-bg { transform: scale(1.05); }
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(76,8,99,0.7) 0%, rgba(26,26,46,0.8) 100%);
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 0 24px;
}
.hero-content .label { color: #c9a84c; margin-bottom: 16px; display: block; }
.hero-content h1 {
  color: #fff;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 20px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.3);
}
.hero-content p {
  color: rgba(255,255,255,0.85);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 32px;
}
.hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* Page Banner (interior pages) */
.page-banner {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a2e;
}
.page-banner .hero-bg { filter: brightness(0.35); }
.page-banner .hero-overlay {
  background: linear-gradient(135deg, rgba(94,57,143,0.75) 0%, rgba(26,26,46,0.85) 100%);
}
.page-banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
}
.page-banner-content .label { color: #c9a84c; margin-bottom: 12px; display: block; }
.page-banner-content h1 { color: #fff; margin-bottom: 12px; }
.page-banner-content p { color: rgba(255,255,255,0.8); font-size: 1.15rem; max-width: 600px; margin: 0 auto; }
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
}
.breadcrumb a { color: rgba(255,255,255,0.6); }
.breadcrumb a:hover { color: #c9a84c; }
.breadcrumb .sep { color: rgba(255,255,255,0.3); }

/* ── Stats Section ──────────────────────────────────── */
.stats-bar {
  background: linear-gradient(135deg, #5e398f, #3d2066);
  padding: 60px 0;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
.stat-item {}
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #c9a84c;
  display: block;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.8);
}
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}

/* ── Marquee Strip ──────────────────────────────────── */
.marquee-strip {
  background: #1a1a2e;
  padding: 16px 0;
  overflow: hidden;
}
.marquee-strip .marquee span {
  color: rgba(255,255,255,0.5);
  font-size: 1rem;
  letter-spacing: 6px;
}

/* ── Content Sections ───────────────────────────────── */
.split-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 500px;
}
.split-section.reverse { direction: rtl; }
.split-section.reverse > * { direction: ltr; }
.split-img {
  background-size: cover;
  background-position: center;
  min-height: 400px;
}
.split-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 80px;
}
.split-content .label { margin-bottom: 16px; }
.split-content h2 { margin-bottom: 20px; }
.split-content p { margin-bottom: 16px; }
@media (max-width: 768px) {
  .split-section, .split-section.reverse { grid-template-columns: 1fr; direction: ltr; }
  .split-section.reverse > * { direction: ltr; }
  .split-content { padding: 40px 24px; }
  .split-img { min-height: 300px; }
}

/* ── Program Cards ──────────────────────────────────── */
.program-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 360px;
  cursor: pointer;
}
.program-card-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}
.program-card:hover .program-card-bg { transform: scale(1.1); }
.program-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(26,26,46,0.9) 100%);
  transition: background 0.3s;
}
.program-card:hover .program-card-overlay {
  background: linear-gradient(180deg, transparent 10%, rgba(94,57,143,0.9) 100%);
}
.program-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px;
  color: #fff;
  z-index: 2;
}
.program-card-content h3 {
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 8px;
}
.program-card-content p {
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  margin: 0;
}
.program-card:hover .program-card-content p {
  opacity: 1;
  transform: translateY(0);
}

/* ── Testimonial / Quote ────────────────────────────── */
.quote-section {
  background: #f8f5fc;
  padding: 80px 0;
  text-align: center;
}
.quote-mark {
  font-size: 5rem;
  color: #5e398f;
  line-height: 1;
  opacity: 0.3;
  font-family: Georgia, serif;
}
.quote-text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-style: italic;
  color: #333;
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.6;
}
.quote-author {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: #5e398f;
}

/* ── CTA Banner ─────────────────────────────────────── */
.cta-banner {
  position: relative;
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}
.cta-banner .hero-bg { filter: brightness(0.3); }
.cta-banner .hero-overlay {
  background: linear-gradient(135deg, rgba(94,57,143,0.8), rgba(26,26,46,0.85));
}
.cta-banner-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 24px;
}
.cta-banner-content h2 { color: #fff; margin-bottom: 16px; }
.cta-banner-content p { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 32px; }

/* ── Partner/Sponsor Logos ──────────────────────────── */
.partner-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
.partner-logos img {
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
  filter: grayscale(40%);
  opacity: 0.7;
  transition: all 0.3s;
}
.partner-logos img:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.05);
}

/* ── Gallery ────────────────────────────────────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 4/3;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}
.gallery-item:hover img { transform: scale(1.08); }

/* ── Form Styles ────────────────────────────────────── */
.form-group { margin-bottom: 20px; }
.form-group label {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #555;
  margin-bottom: 6px;
}
.form-control {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e0d8e8;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background: #fff;
  color: #333;
}
.form-control:focus {
  outline: none;
  border-color: #5e398f;
  box-shadow: 0 0 0 3px rgba(94,57,143,0.15);
}
textarea.form-control { min-height: 140px; resize: vertical; }

/* ── Newsletter Form ────────────────────────────────── */
.newsletter-form {
  display: flex;
  gap: 0;
  max-width: 500px;
  margin: 0 auto;
}
.newsletter-form input {
  flex: 1;
  padding: 14px 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-right: none;
  border-radius: 4px 0 0 4px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 0.95rem;
}
.newsletter-form input::placeholder { color: rgba(255,255,255,0.5); }
.newsletter-form input:focus { outline: none; border-color: #c9a84c; }
.newsletter-form button {
  padding: 14px 28px;
  background: #c9a84c;
  color: #1a1a2e;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
  transition: background 0.3s;
}
.newsletter-form button:hover { background: #b8952f; color: #fff; }

/* ── Footer ─────────────────────────────────────────── */
.site-footer {
  background: #1a1a2e;
  color: rgba(255,255,255,0.7);
  padding-top: 80px;
}
.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer-logo { display: flex; flex-direction: column; gap: 16px; }
.footer-logo img { height: 90px; width: auto; }
.footer-logo p { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.7; }
.footer-heading {
  font-family: 'Oswald', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #c9a84c;
  margin-bottom: 24px;
}
.footer-links a {
  display: block;
  padding: 6px 0;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  transition: all 0.3s;
}
.footer-links a:hover { color: #c9a84c; padding-left: 6px; }
.footer-contact p { font-size: 0.9rem; margin-bottom: 6px; color: rgba(255,255,255,0.6); }
.footer-contact a { color: #c9a84c; }
.footer-social {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s;
}
.footer-social a:hover {
  background: #5e398f;
  border-color: #5e398f;
  color: #fff;
  transform: translateY(-3px);
}
.footer-bottom {
  padding: 24px 0;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
}
.footer-bottom a { color: rgba(255,255,255,0.5); }
.footer-bottom a:hover { color: #c9a84c; }
@media (max-width: 768px) {
  .footer-main { grid-template-columns: 1fr; gap: 32px; }
}

/* ── Animations ─────────────────────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-in-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}
.fade-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* ── Divider ────────────────────────────────────────── */
.divider {
  width: 60px;
  height: 3px;
  background: #c9a84c;
  margin: 16px auto;
  border-radius: 2px;
}
.divider-left { margin: 16px 0; }

/* ── Region Map Styles ──────────────────────────────── */
.region-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  padding: 32px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s;
}
.region-card:hover {
  border-color: #5e398f;
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(94,57,143,0.15);
}
.region-card h3 { font-size: 1.2rem; margin-bottom: 8px; }
.region-card p { font-size: 0.9rem; color: #666; margin: 0; }

/* ── Timeline Styles ────────────────────────────────── */
.timeline {
  position: relative;
  padding: 40px 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0d8e8;
  transform: translateX(-50%);
}
.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
}
.timeline-item:nth-child(odd) { flex-direction: row; }
.timeline-item:nth-child(even) { flex-direction: row-reverse; }
.timeline-content {
  width: 45%;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.timeline-item:nth-child(odd) .timeline-content { margin-right: auto; }
.timeline-item:nth-child(even) .timeline-content { margin-left: auto; }
.timeline-dot {
  position: absolute;
  left: 50%;
  top: 32px;
  width: 16px;
  height: 16px;
  background: #5e398f;
  border: 3px solid #fff;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px #e0d8e8;
  z-index: 2;
}
.timeline-year {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #5e398f;
  font-weight: 700;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .timeline::before { left: 20px; }
  .timeline-item, .timeline-item:nth-child(even) { flex-direction: row; }
  .timeline-content { width: calc(100% - 50px); margin-left: 50px !important; margin-right: 0 !important; }
  .timeline-dot { left: 20px; }
}

/* ── Memorial Cards ─────────────────────────────────── */
.memorial-card {
  text-align: center;
  padding: 24px;
}
.memorial-card img {
  width: 200px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.memorial-card h4 { font-size: 1.1rem; margin-bottom: 4px; }
.memorial-card p { font-size: 0.9rem; color: #666; margin: 0; }

/* ── Contact Info ───────────────────────────────────── */
.contact-info-card {
  background: #f8f5fc;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
}
.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5e398f, #4c0863);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.3rem;
  color: #fff;
}

/* ── Scroll-to-top ──────────────────────────────────── */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  background: #5e398f;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 1001;
  box-shadow: 0 4px 15px rgba(94,57,143,0.4);
}
.scroll-top.visible { opacity: 1; visibility: visible; }
.scroll-top:hover { background: #4c0863; transform: translateY(-3px); }

/* ── Misc ───────────────────────────────────────────── */
.leader-card {
  text-align: center;
  padding: 24px;
}
.leader-card img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 4px solid #e0d8e8;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.leader-card h4 { margin-bottom: 4px; }
.leader-card p { font-size: 0.85rem; color: #5e398f; margin: 0; }

.img-rounded { border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
.gold-line { width: 60px; height: 3px; background: #c9a84c; border-radius: 2px; }
.gold-line-center { margin: 0 auto; }

.section-header { text-align: center; margin-bottom: 48px; }
.section-header .label { margin-bottom: 12px; display: block; }
.section-header h2 { margin-bottom: 16px; }
.section-header p { max-width: 600px; margin: 0 auto; }
`;

// ─── SVG ICONS (inline) ─────────────────────────────────────────────────────
const ICONS = {
  menu: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  users: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  book: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  dollarSign: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  award: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
};


// ─── NAVIGATION DATA ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about-us',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Founders', href: '/our-founders' },
      { label: 'Timeline', href: '/timeline' },
    ]
  },
  { label: 'Our Impact', href: '/our-impact' },
  {
    label: 'Programs',
    href: '/programmatic-thrusts',
    children: [
      { label: 'Programmatic Thrusts', href: '/programmatic-thrusts' },
      { label: 'Economic Development', href: '/economic-development' },
      { label: 'Education', href: '/education' },
      { label: 'Family', href: '/family' },
      { label: 'Health', href: '/health' },
      { label: 'Political Awareness', href: '/political-awareness' },
    ]
  },
  {
    label: 'Regions',
    href: '/regions',
    children: [
      { label: 'All Regions', href: '/regions' },
      { label: 'Central Region', href: '/copy-of-southeast-region' },
      { label: 'Mid-Atlantic Region', href: '/copy-of-northeast-region-new' },
      { label: 'Northeast Region', href: '/about-1-1' },
      { label: 'Southeast Region', href: '/copy-of-mid-atlantic-region-new' },
      { label: 'Southwest Region', href: '/copy-of-southeast-region-new' },
    ]
  },
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'News & Events', href: '/events' },
      { label: 'Past Conclaves', href: '/services-5' },
      { label: 'Service Awards', href: '/service-awards' },
      { label: 'New Members', href: '/new-members' },
      { label: 'In Memoriam', href: '/in-memoriam' },
    ]
  },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact-us' },
];


// ─── SHARED COMPONENT RENDERERS ─────────────────────────────────────────────

function renderHeader(currentPage) {
  const navHTML = NAV_ITEMS.map(item => {
    const isActive = currentPage === item.href?.replace('/', '') || 
      (item.children && item.children.some(c => currentPage === c.href?.replace('/', '')));
    const activeClass = isActive ? ' active' : '';
    
    if (item.children) {
      const dropdownItems = item.children.map(child => 
        `<a href="${child.href}" data-nav>${child.label}</a>`
      ).join('');
      return `
        <div class="nav-item${activeClass}">
          <a href="${item.href}" data-nav>${item.label} ${ICONS.chevronDown}</a>
          <div class="dropdown">${dropdownItems}</div>
        </div>`;
    }
    return `<div class="nav-item${activeClass}"><a href="${item.href}" data-nav>${item.label}</a></div>`;
  }).join('');

  return `
  <!-- Announcement Bar -->
  <div class="announcement-bar">
    <div class="marquee">
      <span>Commitment</span><span>Unity</span><span>Service</span><span>Sisterhood</span>
      <span>Founded 1957</span><span>Charlotte, North Carolina</span>
      <span>Commitment</span><span>Unity</span><span>Service</span><span>Sisterhood</span>
      <span>Founded 1957</span><span>Charlotte, North Carolina</span>
    </div>
  </div>
  
  <!-- Header -->
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="/" class="header-logo" data-nav>
        <img src="${IMG.logo}" alt="Las Amigas Incorporated Logo">
        <div class="header-logo-text">
          Las Amigas<br>Incorporated
          <small>Est. 1957</small>
        </div>
      </a>
      
      <button class="menu-toggle" id="menuToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      
      <div class="nav-wrapper" id="navWrapper">
        <nav class="main-nav">${navHTML}</nav>
        <div class="mobile-cta">
          <a href="/donate" class="btn btn-gold" data-nav>Donate</a>
          <a href="/members-home" class="btn btn-outline-dark" data-nav>Members</a>
        </div>
      </div>
      
      <div class="header-cta hide-mobile">
        <a href="/members-home" data-nav style="font-family:'Oswald',sans-serif;font-size:0.82rem;text-transform:uppercase;letter-spacing:1.5px;color:#555;">Members</a>
        <a href="/donate" class="header-donate" data-nav>Donate</a>
      </div>
    </div>
  </header>`;
}


function renderFooter() {
  return `
  <!-- CTA Strip -->
  <div class="bg-gradient section-sm text-center text-white">
    <div class="container">
      <h3 style="margin-bottom:16px;">Join the Movement</h3>
      <p style="max-width:500px;margin:0 auto 24px;">Sign up to learn more about Las Amigas Incorporated and how you can make a difference.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="Enter your email address">
        <button type="button">Join</button>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <!-- Column 1: Logo & About -->
        <div class="footer-logo">
          <img src="${IMG.logoFooter}" alt="Las Amigas Incorporated">
          <p>Las Amigas Incorporated is a 501(c)(3) organization dedicated to enhancing the quality of life and promoting the general improvement of the communities in which we serve.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/lasamigasinc" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
            <a href="https://www.instagram.com/lasamigasinc/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="https://www.twitter.com/LasAmigasInc" target="_blank" rel="noopener" aria-label="Twitter">${ICONS.twitter}</a>
          </div>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div>
          <div class="footer-heading">Quick Links</div>
          <div class="footer-links">
            <a href="/about-us" data-nav>About Us</a>
            <a href="/our-founders" data-nav>Our Founders</a>
            <a href="/our-impact" data-nav>Our Impact</a>
            <a href="/get-involved" data-nav>Get Involved</a>
            <a href="/events" data-nav>Events</a>
            <a href="/donate" data-nav>Donate</a>
          </div>
        </div>
        
        <!-- Column 3: Programs -->
        <div>
          <div class="footer-heading">Programs</div>
          <div class="footer-links">
            <a href="/economic-development" data-nav>Economic Development</a>
            <a href="/education" data-nav>Education</a>
            <a href="/family" data-nav>Family</a>
            <a href="/health" data-nav>Health</a>
            <a href="/political-awareness" data-nav>Political Awareness</a>
            <a href="/regions" data-nav>Our Regions</a>
          </div>
        </div>
        
        <!-- Column 4: Contact -->
        <div>
          <div class="footer-heading">Contact Us</div>
          <div class="footer-contact">
            <p>${ICONS.mapPin} P O BOX 1957<br>Greensboro, North Carolina 27402</p>
            <p>${ICONS.mail} <a href="mailto:info@lasamigasincorporated.org">info@lasamigasincorporated.org</a></p>
          </div>
          <div style="margin-top:24px;">
            <a href="/privacy-policy" data-nav class="footer-links" style="font-size:0.85rem;">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>Las Amigas Incorporated is a 501(c)(3) organization, and all monetary donations are tax deductible to the fullest extent allowed by tax laws.</p>
        <p style="margin-top:8px;">&copy; ${new Date().getFullYear()} Las Amigas, Incorporated. All Rights Reserved.</p>
      </div>
    </div>
  </footer>`;
}


function renderPageBanner(title, subtitle, bgImage, breadcrumbs) {
  const bcHTML = breadcrumbs ? `
    <div class="breadcrumb">
      <a href="/" data-nav>Home</a>
      ${breadcrumbs.map(bc => `<span class="sep">/</span><a href="${bc.href}" data-nav>${bc.label}</a>`).join('')}
      <span class="sep">/</span><span>${title}</span>
    </div>` : '';
    
  return `
  <section class="page-banner">
    <div class="hero-bg" style="background-image:url('${bgImage}')"></div>
    <div class="hero-overlay"></div>
    <div class="page-banner-content">
      <span class="label">Las Amigas Incorporated</span>
      <h1>${title}</h1>
      ${subtitle ? `<p>${subtitle}</p>` : ''}
      ${bcHTML}
    </div>
  </section>`;
}


// ─── PAGE RENDERERS ─────────────────────────────────────────────────────────

function renderHomePage() {
  return `
  <!-- Hero -->
  <section class="hero">
    <div class="hero-bg" style="background-image:url('${IMG.volunteers}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="label">Founded 1957 &middot; Charlotte, North Carolina</span>
      <h1>Enhancing Communities,<br>Empowering Lives</h1>
      <p>To enhance the quality of life and promote the general improvement of the communities in which we serve.</p>
      <div class="hero-buttons">
        <a href="/get-involved" class="btn btn-gold btn-lg" data-nav>Get Involved</a>
        <a href="/about-us" class="btn btn-outline btn-lg" data-nav>Learn More</a>
      </div>
    </div>
  </section>

  <!-- Marquee Strip -->
  <div class="marquee-strip">
    <div class="marquee">
      <span>Commitment</span><span>&middot;</span><span>Unity</span><span>&middot;</span>
      <span>Service</span><span>&middot;</span><span>Sisterhood</span><span>&middot;</span>
      <span>Community</span><span>&middot;</span><span>Empowerment</span><span>&middot;</span>
      <span>Commitment</span><span>&middot;</span><span>Unity</span><span>&middot;</span>
      <span>Service</span><span>&middot;</span><span>Sisterhood</span><span>&middot;</span>
      <span>Community</span><span>&middot;</span><span>Empowerment</span><span>&middot;</span>
    </div>
  </div>

  <!-- Mission Section -->
  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Our Mission</span>
      <div class="divider" style="margin:12px auto 24px;"></div>
      <h2 style="max-width:800px;margin:0 auto 20px;">To enhance the quality of life and promote the general improvement of the communities in which we serve.</h2>
      <p style="max-width:650px;margin:0 auto;font-size:1.1rem;">To encourage personal and professional growth, and foster a closer relationship among members.</p>
    </div>
  </section>

  <!-- President Spotlight -->
  <section class="split-section reverse">
    <div class="split-img" style="background-image:url('${IMG.president}')"></div>
    <div class="split-content bg-light fade-in-right">
      <span class="label">Leadership</span>
      <h2>Our 22nd National President</h2>
      <div class="gold-line" style="margin:12px 0 20px;"></div>
      <h3 style="color:#5e398f;margin-bottom:12px;">Cynthia H. Shepard</h3>
      <p style="font-style:italic;font-size:1.2rem;color:#5e398f;">"The Power of We"</p>
      <p>Leading Las Amigas Incorporated with vision, purpose, and a commitment to excellence in community service.</p>
      <a href="/about-us" class="btn btn-outline-dark btn-sm" data-nav>Learn More</a>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item fade-in">
          <span class="stat-number" data-count="29">29</span>
          <span class="stat-label">Chapters</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">500+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">$500K+</span>
          <span class="stat-label">Scholarships</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">1M+</span>
          <span class="stat-label">Service Hours</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Programmatic Thrusts -->
  <section class="section bg-white">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">What We Do</span>
        <h2>Our Programmatic Thrusts</h2>
        <div class="divider"></div>
        <p>Five key areas where Las Amigas Incorporated makes a meaningful impact in communities across the nation.</p>
      </div>
      <div class="grid-5 fade-in">
        <a href="/economic-development" class="program-card" data-nav>
          <div class="program-card-bg" style="background-image:url('${IMG.programEconDev}')"></div>
          <div class="program-card-overlay"></div>
          <div class="program-card-content">
            <h3>Economic Development</h3>
            <p>Addressing needs within our communities such as food insecurity.</p>
          </div>
        </a>
        <a href="/education" class="program-card" data-nav>
          <div class="program-card-bg" style="background-image:url('${IMG.programEducation}')"></div>
          <div class="program-card-overlay"></div>
          <div class="program-card-content">
            <h3>Education</h3>
            <p>Advocating for literacy improvement in underrepresented communities.</p>
          </div>
        </a>
        <a href="/family" class="program-card" data-nav>
          <div class="program-card-bg" style="background-image:url('${IMG.programFamily}')"></div>
          <div class="program-card-overlay"></div>
          <div class="program-card-content">
            <h3>Family</h3>
            <p>Providing resources for those that need it most to build stable homes.</p>
          </div>
        </a>
        <a href="/health" class="program-card" data-nav>
          <div class="program-card-bg" style="background-image:url('${IMG.programHealth}')"></div>
          <div class="program-card-overlay"></div>
          <div class="program-card-content">
            <h3>Health</h3>
            <p>Fighting health disparities in the African American community.</p>
          </div>
        </a>
        <a href="/political-awareness" class="program-card" data-nav>
          <div class="program-card-bg" style="background-image:url('${IMG.programPolitical}')"></div>
          <div class="program-card-overlay"></div>
          <div class="program-card-content">
            <h3>Political Awareness</h3>
            <p>Bridging the gap between social justice and change.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Motto Quote -->
  <section class="quote-section fade-in">
    <div class="container">
      <div class="quote-mark">&ldquo;</div>
      <div class="quote-text">Those who apply themselves too closely to little things, often become incapable of accomplishing great things.</div>
      <div class="divider"></div>
      <div class="quote-author">Our Motto</div>
    </div>
  </section>

  <!-- Get Involved CTA -->
  <section class="cta-banner">
    <div class="hero-bg" style="background-image:url('${IMG.conclaveBoard}')"></div>
    <div class="hero-overlay"></div>
    <div class="cta-banner-content fade-in">
      <span class="label" style="color:#c9a84c;display:block;margin-bottom:12px;">Make a Difference</span>
      <h2>Help Us, Help Others</h2>
      <p>Donate today to join the movement to change our underserved communities. Together, we can create lasting, sustainable change.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="/donate" class="btn btn-gold" data-nav>Donate Now</a>
        <a href="/get-involved" class="btn btn-outline" data-nav>Volunteer Today</a>
      </div>
    </div>
  </section>

  <!-- Honorary Sisters -->
  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Our Legacy</span>
      <h2 style="margin-bottom:32px;">Honorary Sisters</h2>
      <div class="img-rounded" style="max-width:900px;margin:0 auto;">
        <img src="${IMG.honorary}" alt="Las Amigas Honorary Sisters" style="width:100%;">
      </div>
    </div>
  </section>

  <!-- Social / Follow Us -->
  <section class="section-sm bg-light text-center">
    <div class="container fade-in">
      <span class="label">Stay Connected</span>
      <h2 style="margin:12px 0 24px;">Follow Us</h2>
      <div style="display:flex;gap:20px;justify-content:center;">
        <a href="https://www.facebook.com/lasamigasinc" target="_blank" rel="noopener" style="width:56px;height:56px;border-radius:50%;background:#5e398f;display:flex;align-items:center;justify-content:center;color:#fff;transition:all 0.3s;font-size:1.2rem;" aria-label="Facebook">${ICONS.facebook}</a>
        <a href="https://www.instagram.com/lasamigasinc/" target="_blank" rel="noopener" style="width:56px;height:56px;border-radius:50%;background:#5e398f;display:flex;align-items:center;justify-content:center;color:#fff;transition:all 0.3s;font-size:1.2rem;" aria-label="Instagram">${ICONS.instagram}</a>
        <a href="https://www.twitter.com/LasAmigasInc" target="_blank" rel="noopener" style="width:56px;height:56px;border-radius:50%;background:#5e398f;display:flex;align-items:center;justify-content:center;color:#fff;transition:all 0.3s;font-size:1.2rem;" aria-label="Twitter">${ICONS.twitter}</a>
      </div>
    </div>
  </section>`;
}


function renderAboutPage() {
  return `
  ${renderPageBanner('About Us', 'Learn about our history, mission, and the women who make a difference.', IMG.harambe, [])}
  
  <!-- Who We Are -->
  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 items-center gap-48">
        <div class="fade-in-left">
          <img src="${IMG.orchid}" alt="Las Amigas Orchid" style="width:120px;margin-bottom:24px;">
          <span class="label">Who We Are</span>
          <h2 style="margin:12px 0 20px;">Las Amigas Incorporated</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          <p>Las Amigas Incorporated is a 501(c)(3) organization, founded in Charlotte, North Carolina in 1957, whose vision has been to recruit, develop, and retain members that are dedicated to making the world a better place for the present and future generations; one community at a time.</p>
        </div>
        <div class="fade-in-right img-rounded">
          <img src="${IMG.harambe}" alt="HARAMBE 2019" style="width:100%;">
        </div>
      </div>
    </div>
  </section>

  <!-- What We Believe -->
  <section class="quote-section fade-in">
    <div class="container">
      <span class="label">What We Believe</span>
      <div class="divider" style="margin:12px auto 24px;"></div>
      <div class="quote-text">We believe in enhancing the quality of life and promoting the general improvement of the communities in which we serve.</div>
    </div>
  </section>

  <!-- Our Purpose -->
  <section class="split-section">
    <div class="split-img" style="background-image:url('${IMG.charlotteDonation}')"></div>
    <div class="split-content fade-in-right">
      <span class="label">Our Purpose</span>
      <h2>Making Communities Better</h2>
      <div class="gold-line" style="margin:12px 0 20px;"></div>
      <p>Las Amigas serves communities across the nation through five programmatic thrusts: Economic Development, Education, Family, Health, and Political Awareness.</p>
      <p>Our members volunteer thousands of hours annually, providing direct support and resources to those who need it most.</p>
      <a href="/programmatic-thrusts" class="btn btn-primary btn-sm" data-nav>Our Programs</a>
    </div>
  </section>

  <!-- Stats -->
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item fade-in">
          <span class="stat-number">1957</span>
          <span class="stat-label">Year Founded</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">29</span>
          <span class="stat-label">Chapters</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">500+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">5</span>
          <span class="stat-label">Regions</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="hero-bg" style="background-image:url('${IMG.communityGarden}')"></div>
    <div class="hero-overlay"></div>
    <div class="cta-banner-content fade-in">
      <h2>Join Us in Making a Difference</h2>
      <p>Be part of a legacy of service that spans nearly seven decades.</p>
      <a href="/get-involved" class="btn btn-gold" data-nav>Get Involved</a>
    </div>
  </section>`;
}


function renderFoundersPage() {
  return `
  ${renderPageBanner('Our Founders', 'The visionary women who started a legacy of service in 1957.', IMG.firstConclave, [{label:'About',href:'/about-us'}])}

  <section class="section bg-white">
    <div class="container">
      <div class="text-center fade-in" style="max-width:800px;margin:0 auto 48px;">
        <span class="label">Our History</span>
        <div class="divider" style="margin:12px auto 24px;"></div>
        <p style="font-size:1.1rem;">Las Amigas Incorporated is a national, public service, and charitable women's organization founded by two teachers, Mrs. Dora R. Mason and Mrs. Mary Q. Moore. It was organized on February 5, 1957 in Charlotte, North Carolina.</p>
      </div>

      <!-- Founder: Dora R. Mason -->
      <div class="grid-2 items-center gap-48" style="margin-bottom:80px;">
        <div class="fade-in-left img-rounded">
          <img src="${IMG.doraMason}" alt="Dora R. Mason" style="width:100%;">
        </div>
        <div class="fade-in-right">
          <span class="label">Co-Founder</span>
          <h2 style="margin:12px 0 20px;">Dora R. Mason</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          <p><em>"No man is an island. No man stands alone. Each man's joy is joy to me. Each man's grief is my own."</em></p>
          <p>I consider each of us as Bridge Builders, when we speak of Bridge Builders, we readily think of engineers who build bridges to span the mighty rivers. They are needed for convenient and safe travel, but there is a need for bridges that you and I can build.</p>
          <p>Let us stop and take inventory of the situations and remember that we all are the children of God, and Great Bridge Builders in our respective communities. Orchids to each of you for your dedication to Las Amigas, and for the service you render in your community.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="quote-section fade-in">
    <div class="container">
      <div class="quote-mark">&ldquo;</div>
      <div class="quote-text">I will name a few of the bridges that Las Amigas Sisters can continue to build upon: Love, Friendship, Tolerance, Faith, Hope and Acceptance.</div>
      <div class="divider"></div>
      <div class="quote-author">Dora R. Mason, Co-Founder</div>
    </div>
  </section>`;
}


function renderTimelinePage() {
  return `
  ${renderPageBanner('Timeline', 'Key milestones in the history of Las Amigas Incorporated.', IMG.firstConclave, [{label:'About',href:'/about-us'}])}

  <section class="section bg-white">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Our Journey</span>
        <h2>Milestones & Achievements</h2>
        <div class="divider"></div>
      </div>
      
      <div class="timeline">
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">1957</div>
            <h4>Organization Founded</h4>
            <p>Las Amigas Incorporated is founded by Dora R. Mason and Mary Q. Moore in Charlotte, North Carolina on February 5, 1957.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">1960s</div>
            <h4>Early Growth</h4>
            <p>The organization expands through North Carolina, establishing new chapters and building a foundation of community service.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">1970s</div>
            <h4>Regional Expansion</h4>
            <p>Las Amigas grows into a regional organization, with chapters forming across the Southeast and beyond.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">1980s</div>
            <h4>National Presence</h4>
            <p>Las Amigas becomes a truly national organization with chapters in multiple regions across the United States.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">1990s</div>
            <h4>Bridge Builders</h4>
            <p>The organization deepens its commitment to community service, focusing on building bridges of Love, Friendship, Tolerance, Faith, Hope and Acceptance.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">2000s</div>
            <h4>Growing Impact</h4>
            <p>Las Amigas Incorporated formalizes its five Programmatic Thrusts: Economic Development, Education, Family, Health, and Political Awareness.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">2019</div>
            <h4>Conclave 2019</h4>
            <p>A landmark national conclave bringing together chapters from all five regions to celebrate sisterhood and service.</p>
          </div>
        </div>
        <div class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">Today</div>
            <h4>Continuing the Legacy</h4>
            <p>With 29 chapters, 500+ members, over $500,000 in scholarships and over 1,000,000 community service hours, Las Amigas continues to grow and serve.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}


function renderImpactPage() {
  return `
  ${renderPageBanner('Our Impact', 'See the transformative impact of our work in communities across the nation.', IMG.communityGarden, [])}

  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item fade-in">
          <span class="stat-number">29</span>
          <span class="stat-label">Chapters</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">500+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">$500K+</span>
          <span class="stat-label">Scholarships</span>
        </div>
        <div class="stat-item fade-in">
          <span class="stat-number">1M+</span>
          <span class="stat-label">Service Hours</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 items-center gap-48">
        <div class="fade-in-left">
          <span class="label">Beautiful Butterflies</span>
          <h2 style="margin:12px 0 20px;">Community Partnerships</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          <p>Beautiful Butterflies mission is geared towards supporting the individuals with Lupus and their village of support. With so many people affected by this illness, Beautiful Butterflies is an advocate for increasing public awareness and garnering private sector support to advance research for Lupus.</p>
        </div>
        <div class="fade-in-right img-rounded">
          <img src="${IMG.impactButterflies}" alt="Beautiful Butterflies" style="width:100%;">
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-light">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Making a Difference</span>
        <h2>Scholarship Recipients & Community Service</h2>
        <div class="divider"></div>
        <p>Our chapters across the nation actively serve their communities through donations, volunteer work, and scholarship programs.</p>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <div class="hero-bg" style="background-image:url('${IMG.conclaveBoard}')"></div>
    <div class="hero-overlay"></div>
    <div class="cta-banner-content fade-in">
      <h2>Join Our Mission</h2>
      <p>Help us continue making a lasting impact in communities across the nation.</p>
      <a href="/donate" class="btn btn-gold" data-nav>Donate Today</a>
    </div>
  </section>`;
}


function renderGetInvolvedPage() {
  return `
  ${renderPageBanner('Get Involved', 'See the transformative impact of our work and share our passion for change.', IMG.communityGarden, [])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Take Action</span>
      <h2 style="margin:12px 0 20px;">Help Us to Help Others</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto 48px;">Become a part of the long-term solution. Together, we can create a lasting, sustainable change.</p>
      
      <div class="grid-3">
        <div class="card fade-in">
          <div style="padding:48px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 20px;">${ICONS.heart}</div>
            <h3>Give</h3>
            <p>Donate to help us help others in underserved communities.</p>
            <a href="/donate" class="btn btn-primary btn-sm" data-nav style="margin-top:16px;">Donate Now</a>
          </div>
        </div>
        <div class="card fade-in">
          <div style="padding:48px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 20px;">${ICONS.users}</div>
            <h3>Get Social</h3>
            <p>Follow us on Facebook, Instagram and LinkedIn.</p>
            <a href="https://www.facebook.com/lasamigasinc" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="margin-top:16px;">Follow Us</a>
          </div>
        </div>
        <div class="card fade-in">
          <div style="padding:48px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 20px;">${ICONS.globe}</div>
            <h3>Volunteer</h3>
            <p>Join us in making a direct impact in your community.</p>
            <a href="/contact-us" class="btn btn-primary btn-sm" data-nav style="margin-top:16px;">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-banner">
    <div class="hero-bg" style="background-image:url('${IMG.volunteers}')"></div>
    <div class="hero-overlay"></div>
    <div class="cta-banner-content fade-in">
      <h2>Volunteer Today</h2>
      <p>Help our communities through service and dedication.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="/donate" class="btn btn-gold" data-nav>Help Our Communities</a>
        <a href="/charitable-partners" class="btn btn-outline" data-nav>Our Partners</a>
      </div>
    </div>
  </section>`;
}


function renderAffiliatePartnersPage() {
  return `
  ${renderPageBanner('Affiliate Partners', 'Our partners and corporate sponsors help empower our communities.', IMG.modernOffice, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="text-center fade-in" style="max-width:800px;margin:0 auto 48px;">
        <span class="label">Together We Serve</span>
        <h2 style="margin:12px 0 20px;">Let&rsquo;s Change the World for a Better Tomorrow</h2>
        <div class="divider"></div>
        <p>Our Affiliate Partners and our Corporate Sponsors help our nonprofit foundation support and empower our communities. They share our beliefs that each of us can be a lifeline for others by donating funds to worthy causes.</p>
      </div>

      <div class="partner-logos fade-in" style="margin-bottom:60px;">
        <img src="${IMG.kidneyFoundation}" alt="National Kidney Foundation">
        <img src="${IMG.lupus}" alt="Lupus Foundation">
        <img src="${IMG.habitat}" alt="Habitat for Humanity">
        <img src="${IMG.ncnw}" alt="National Council of Negro Women">
        <img src="${IMG.boneMarrow}" alt="Bone Marrow Foundation">
      </div>
    </div>
  </section>

  <section class="quote-section fade-in">
    <div class="container">
      <span class="label">Changemakers</span>
      <div class="divider" style="margin:12px auto 24px;"></div>
      <h2>Join Us as Changemakers for the Next Generation</h2>
      <p style="max-width:600px;margin:16px auto 32px;">Whether you are an individual, a family, a small business, or a corporation, you can provide the necessary funds to allow us to help more people in underserved communities.</p>
      <a href="/donate" class="btn btn-primary" data-nav>Partner With Us</a>
    </div>
  </section>`;
}


function renderProgrammaticThrustsPage() {
  return `
  ${renderPageBanner('Programmatic Thrusts', 'Five key areas where we make a meaningful impact.', IMG.volunteers, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Our Programs</span>
        <h2>Areas of Impact</h2>
        <div class="divider"></div>
        <p>Las Amigas Incorporated focuses on five programmatic thrusts to create positive change in our communities.</p>
      </div>

      <div class="grid-2 gap-32" style="margin-bottom:32px;">
        ${[
          { title: 'Economic Development', desc: 'Addressing the needs within our communities such as, but not limited to, food insecurity.', img: IMG.programEconDev, href: '/economic-development', icon: ICONS.dollarSign },
          { title: 'Education', desc: 'Advocating for the improvement of literacy in underrepresented communities.', img: IMG.programEducation, href: '/education', icon: ICONS.book },
          { title: 'Family', desc: 'Providing resources for those that need it most and to build stable homes.', img: IMG.programFamily, href: '/family', icon: ICONS.heart },
          { title: 'Health', desc: 'Helping fight the health disparities in the African American community.', img: IMG.programHealth, href: '/health', icon: ICONS.users },
        ].map(p => `
          <a href="${p.href}" class="card fade-in" data-nav style="text-decoration:none;">
            <img src="${p.img}" alt="${p.title}" class="card-img">
            <div class="card-body">
              <div class="card-icon" style="width:48px;height:48px;font-size:1rem;">${p.icon}</div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
          </a>
        `).join('')}
      </div>
      <div style="max-width:600px;margin:0 auto;">
        <a href="/political-awareness" class="card fade-in" data-nav style="text-decoration:none;">
          <img src="${IMG.programPolitical}" alt="Political Awareness" class="card-img">
          <div class="card-body">
            <div class="card-icon" style="width:48px;height:48px;font-size:1rem;">${ICONS.award}</div>
            <h3>Political Awareness</h3>
            <p>Bridging the gap between social justice and change within our communities.</p>
          </div>
        </a>
      </div>
    </div>
  </section>`;
}


function renderProgramPage(config) {
  return `
  ${renderPageBanner(config.title, config.subtitle, config.bannerImg, [{label:'Programs',href:'/programmatic-thrusts'}])}

  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 items-center gap-48">
        <div class="fade-in-left">
          <span class="label">${config.label || config.title}</span>
          <h2 style="margin:12px 0 20px;">${config.heading}</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          ${config.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="fade-in-right img-rounded">
          <img src="${config.mainImg}" alt="${config.title}" style="width:100%;">
        </div>
      </div>
    </div>
  </section>

  ${config.sections ? config.sections.map(s => `
  <section class="split-section${s.reverse ? ' reverse' : ''}">
    <div class="split-img" style="background-image:url('${s.img}')"></div>
    <div class="split-content ${s.bg || 'bg-light'} fade-in${s.reverse ? '-left' : '-right'}">
      <span class="label">${s.label || ''}</span>
      <h3 style="margin-bottom:16px;">${s.title}</h3>
      ${s.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
  </section>`).join('') : ''}

  <section class="cta-banner">
    <div class="hero-bg" style="background-image:url('${config.ctaImg || IMG.communityGarden}')"></div>
    <div class="hero-overlay"></div>
    <div class="cta-banner-content fade-in">
      <h2>Get Involved</h2>
      <p>Join us in making a difference through ${config.title.toLowerCase()}.</p>
      <a href="/get-involved" class="btn btn-gold" data-nav>Learn How</a>
    </div>
  </section>`;
}


function renderEconDevPage() {
  return renderProgramPage({
    title: 'Economic Development',
    subtitle: 'Addressing the needs within our communities.',
    bannerImg: IMG.foodBank,
    label: 'Programmatic Thrust',
    heading: 'Economic and Community Development',
    paragraphs: [
      'Las Amigas is dedicated to helping our communities with resources for the homeless and those with food insecurities through several community projects and activities.',
      'At Las Amigas Incorporated, we believe that Economic or Community Development is an investment in enhancing the prosperity and quality of life for our communities.',
    ],
    mainImg: IMG.homelessCovid,
    sections: [
      {
        title: 'Community Development',
        label: 'Our Goal',
        img: IMG.charlotteDonation,
        paragraphs: ['Our goal is to continue to offer resources for our underserved communities in an effort to provide a better place to live and work.'],
        reverse: true,
      },
      {
        title: 'Advocating for Change',
        label: 'Take Action',
        img: IMG.morvenWater,
        paragraphs: ['The COVID-19 pandemic has shed a light on the disparities in the underserved communities. Why not join us by continuing to advocate for better representation and dollars that are spent in our communities?'],
      },
    ],
    ctaImg: IMG.volunteers,
  });
}


function renderEducationPage() {
  return renderProgramPage({
    title: 'Education',
    subtitle: 'Increasing literacy in our neighborhoods, one community at a time.',
    bannerImg: IMG.studying,
    label: 'Programmatic Thrust',
    heading: 'Building Our Future Through Education',
    paragraphs: [
      'Assisting the community with education and financial resources to ensure that all children have an equal opportunity to learn, that children live in more stable environments and that healthier lives become the norm.',
      'We believe that through education, it is the gateway for our children\'s future. We assist with tutoring and help provide celebrations to motivate and build morale for our Teachers.',
    ],
    mainImg: IMG.studying,
    sections: [
      {
        title: 'Book Drive Initiative',
        label: 'Literacy',
        img: IMG.bookDrive,
        paragraphs: [
          'Las Amigas Incorporated is committed to increasing the lifelong journey of literacy within our communities.',
          'Our book drive initiative is designed to provide books that teach our children about their rich, cultural history. Every child should feel a sense of self worth when they read books.',
        ],
        reverse: true,
      },
    ],
  });
}


function renderFamilyPage() {
  return renderProgramPage({
    title: 'Family',
    subtitle: 'Providing resources for those that need it most to build stable homes.',
    bannerImg: IMG.movingIn,
    label: 'Programmatic Thrust',
    heading: 'Resources for Everyday Life',
    paragraphs: [
      'We help provide resources for children living in low-income or homeless situations with the necessary items such as clothing, books and shoes as well as materials that are needed for the school year.',
      'Additionally, we feed families for the holidays and provide food boxes year round for families and seniors facing food insecurity.',
    ],
    mainImg: IMG.charlotteSchool,
    sections: [
      {
        title: 'Comfort of Love Blankets',
        label: 'Giving Back',
        img: IMG.thanksgivingDinner,
        paragraphs: [
          'Giving back to those that are in need. Our Comfort of Love Blankets provide comfort for those that have experienced a major life altering event.',
          'These blankets are our way of helping them through their experience. Las Amigas Incorporated donated over 300 blankets last year to those in need.',
        ],
        reverse: true,
      },
    ],
  });
}


function renderHealthPage() {
  return renderProgramPage({
    title: 'Health',
    subtitle: 'Fighting the health disparities in the African American community.',
    bannerImg: IMG.mooresvilleLibrary,
    label: 'Programmatic Thrust',
    heading: 'Health & Wellness',
    paragraphs: [
      'Our goal is to fight the health disparities in the African American community. Some factors that contribute to these health disparities are: unemployment, poverty, lack of funds for doctor\'s visits, mistrust of doctors, smoking, obesity and an inactive lifestyle.',
    ],
    mainImg: IMG.gastoniaHospice,
    sections: [
      {
        title: 'Showing Love to the Elderly',
        label: 'Seniors',
        img: IMG.gastoniaHospice,
        paragraphs: [
          'Helping to ease the stigma of growing old and lonely. Studies show that 43% of Americans age 60 and older report feeling lonely, which is shown to increase risk of dementia, heart disease, stroke, and premature fatality.',
          'We provide support for those that want to get the Covid-19 Shot. Las Amigas Incorporated is actively involved with our Seniors by visiting the rest homes, providing care packages, and connecting with them so that they feel loved.',
        ],
        reverse: true,
      },
      {
        title: 'Healthcare for Seniors',
        label: 'Action',
        img: IMG.doctorAppt,
        paragraphs: [
          'We want to increase the frequency of African Americans seeking help from healthcare officials at the onset of diseases to help prolong their life.',
          'Additionally, we want to provide knowledge and care to help decrease the risk of chronic health conditions such as hypertension, diabetes, stroke and cancer.',
        ],
      },
    ],
  });
}


function renderPoliticalAwarenessPage() {
  return renderProgramPage({
    title: 'Political Awareness',
    subtitle: 'Helping students become better informed about politics.',
    bannerImg: IMG.vote,
    label: 'Programmatic Thrust',
    heading: 'Increase Voter Participation',
    paragraphs: [
      'We assist in promoting voter rights and civic engagement and spreading voter awareness at Universities and college campuses in our communities.',
    ],
    mainImg: IMG.voteBoxes,
    sections: [
      {
        title: 'Get Involved in Civic Life',
        label: 'Take Action',
        img: IMG.voters,
        paragraphs: [
          'Our communities must do a better job to reduce the barriers to student voting and voting in general.',
          'Our voices must be heard in each election. We must promote an environment that actively involves our communities to register to vote and to show up at the polls on election day to bring about a change for our nation.',
        ],
        reverse: true,
      },
    ],
  });
}


function renderRegionsPage() {
  const regions = [
    { name: 'Central Region', slug: '/copy-of-southeast-region', desc: 'Fayetteville, Greensboro, and High Point, NC areas' },
    { name: 'Mid-Atlantic Region', slug: '/copy-of-northeast-region-new', desc: 'Chapters serving the Mid-Atlantic states' },
    { name: 'Northeast Region', slug: '/about-1-1', desc: 'Chapters serving the Northeast states' },
    { name: 'Southeast Region', slug: '/copy-of-mid-atlantic-region-new', desc: 'Chapters serving the Southeast states' },
    { name: 'Southwest Region', slug: '/copy-of-southeast-region-new', desc: 'Chapters serving the Southwest states' },
  ];

  return `
  ${renderPageBanner('Our Regions', 'Las Amigas Incorporated has chapters across five regions of the United States.', IMG.conclaveBoard, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">Across the Nation</span>
        <h2>Five Regions of Service</h2>
        <div class="divider"></div>
        <p>Our chapters span five regions, each led by dedicated Regional Directors committed to community service and sisterhood.</p>
      </div>

      <div class="grid-3 fade-in">
        ${regions.map(r => `
          <a href="${r.slug}" class="region-card" data-nav style="text-decoration:none;">
            <div class="card-icon" style="margin:0 auto 16px;">${ICONS.mapPin}</div>
            <h3>${r.name}</h3>
            <p>${r.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">5</span>
          <span class="stat-label">Regions</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">29</span>
          <span class="stat-label">Chapters</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">500+</span>
          <span class="stat-label">Members</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">1M+</span>
          <span class="stat-label">Service Hours</span>
        </div>
      </div>
    </div>
  </section>`;
}


function renderRegionPage(regionConfig) {
  return `
  ${renderPageBanner(regionConfig.name, regionConfig.description, regionConfig.bannerImg || IMG.conclaveBoard, [{label:'Regions',href:'/regions'}])}

  <section class="section bg-white">
    <div class="container">
      <div class="text-center fade-in" style="max-width:800px;margin:0 auto 48px;">
        <span class="label">${regionConfig.name}</span>
        <h2 style="margin:12px 0 20px;">Meet the Leaders</h2>
        <div class="divider"></div>
      </div>

      ${regionConfig.leaders ? `
      <div class="grid-3 fade-in">
        ${regionConfig.leaders.map(l => `
          <div class="leader-card">
            <div class="card-icon" style="width:80px;height:80px;margin:0 auto 16px;font-size:1.5rem;">${ICONS.users}</div>
            <h4>${l.name}</h4>
            <p>${l.title}</p>
            ${l.email ? `<a href="mailto:${l.email}" style="font-size:0.85rem;color:#5e398f;">${l.email}</a>` : ''}
          </div>
        `).join('')}
      </div>` : ''}
    </div>
  </section>

  <section class="section bg-light">
    <div class="container">
      <div class="section-header fade-in">
        <span class="label">In Action</span>
        <h2>Our Region in Action</h2>
        <div class="divider"></div>
      </div>
      ${regionConfig.img ? `
      <div class="text-center fade-in">
        <div class="img-rounded" style="max-width:800px;margin:0 auto;">
          <img src="${regionConfig.img}" alt="${regionConfig.name} in Action" style="width:100%;">
        </div>
      </div>` : ''}
    </div>
  </section>`;
}


// Region data
const REGION_DATA = {
  'copy-of-southeast-region': {
    name: 'Central Region',
    description: 'Chapters in the Fayetteville Elite, Greensboro, and High Point North Carolina areas.',
    bannerImg: IMG.highPointChapter,
    img: IMG.highPointChapter,
    leaders: [
      { name: 'Felicia Andrews', title: 'Appointed Regional Director', email: 'laigreensborovp@gmail.com' },
      { name: 'Ronita Hemingway', title: 'Fayetteville Chapter President', email: 'ronitahemingway@gmail.com' },
      { name: 'Bianca Woods', title: 'Greensboro Chapter President', email: 'bianca.d.woods@gmail.com' },
      { name: 'Rhonda Wilson-Henry', title: 'High Point Chapter President', email: 'rhonda.henry@3avx.com' },
    ],
  },
  'copy-of-northeast-region-new': {
    name: 'Mid-Atlantic Region',
    description: 'Chapters serving the Mid-Atlantic states.',
    leaders: [],
  },
  'about-1-1': {
    name: 'Northeast Region',
    description: 'Chapters serving the Northeast states.',
    leaders: [],
  },
  'copy-of-mid-atlantic-region-new': {
    name: 'Southeast Region',
    description: 'Chapters serving the Southeast states.',
    leaders: [],
  },
  'copy-of-southeast-region-new': {
    name: 'Southwest Region',
    description: 'Chapters serving the Southwest states.',
    leaders: [],
  },
};


function renderEventsPage() {
  return `
  ${renderPageBanner('News & Events', 'Stay up to date with the latest happenings in Las Amigas Incorporated.', IMG.conclaveBoard, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 items-center gap-48">
        <div class="fade-in-left img-rounded">
          <img src="${IMG.happyBirthday}" alt="Events" style="width:100%;">
        </div>
        <div class="fade-in-right">
          <span class="label">Upcoming</span>
          <h2 style="margin:12px 0 20px;">Events & Celebrations</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          <p>Las Amigas Incorporated hosts various events throughout the year, from regional gatherings to national conclaves, service projects, and celebrations.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px;">
            <a href="/new-members" class="btn btn-primary btn-sm" data-nav>New Members</a>
            <a href="/in-memoriam" class="btn btn-outline-dark btn-sm" data-nav>In Memoriam</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-light">
    <div class="container">
      <div class="grid-3 fade-in">
        <a href="/new-members" class="card" data-nav style="text-decoration:none;">
          <div style="padding:40px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 16px;">${ICONS.users}</div>
            <h3>New Members</h3>
            <p>Welcome our newest members to the sisterhood.</p>
          </div>
        </a>
        <a href="/services-5" class="card" data-nav style="text-decoration:none;">
          <div style="padding:40px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 16px;">${ICONS.award}</div>
            <h3>Past Conclaves</h3>
            <p>Relive the memories from our national conclaves.</p>
          </div>
        </a>
        <a href="/in-memoriam" class="card" data-nav style="text-decoration:none;">
          <div style="padding:40px 28px;text-align:center;">
            <div class="card-icon" style="margin:0 auto 16px;">${ICONS.heart}</div>
            <h3>In Memoriam</h3>
            <p>Honoring the memory of our departed sisters.</p>
          </div>
        </a>
      </div>
    </div>
  </section>`;
}


function renderPastConclavesPage() {
  return `
  ${renderPageBanner('Past Conclaves', 'Celebrating our national gatherings through the years.', IMG.conclaveBoard, [{label:'Events',href:'/events'}])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Our Gatherings</span>
      <h2 style="margin:12px 0 20px;">National Conclaves</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto 48px;">Our national conclaves bring together sisters from all five regions to celebrate sisterhood, share accomplishments, and plan for the future.</p>
      
      <div class="img-rounded" style="max-width:900px;margin:0 auto;">
        <img src="${IMG.conclaveBoard}" alt="Conclave Board" style="width:100%;">
      </div>
    </div>
  </section>`;
}


function renderServiceAwardsPage() {
  return `
  ${renderPageBanner('Service Awards', 'Recognizing our members\' dedication and years of service.', IMG.conclaveBoard, [{label:'Events',href:'/events'}])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Recognition</span>
      <h2 style="margin:12px 0 20px;">Honoring Our Sisters</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto;">Las Amigas Incorporated recognizes and celebrates our members who have dedicated years of service to our organization and communities. Their commitment exemplifies the true spirit of sisterhood and service.</p>
    </div>
  </section>

  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">Years of Service Awards</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">500+</span>
          <span class="stat-label">Members Honored</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">29</span>
          <span class="stat-label">Active Chapters</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">1M+</span>
          <span class="stat-label">Hours Served</span>
        </div>
      </div>
    </div>
  </section>`;
}


function renderNewMembersPage() {
  return `
  ${renderPageBanner('New Members', 'Welcome to our newest members of Las Amigas Incorporated.', IMG.conclaveBoard, [{label:'Events',href:'/events'}])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Welcome</span>
      <h2 style="margin:12px 0 20px;">Our Newest Sisters</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto 48px;">We are proud to welcome these outstanding women into the Las Amigas Incorporated family. Their dedication to service and community will help us continue our legacy.</p>

      <div class="img-rounded" style="max-width:700px;margin:0 auto;">
        <img src="${IMG.highPointList}" alt="New Members" style="width:100%;">
      </div>
    </div>
  </section>`;
}


function renderInMemoriamPage() {
  return `
  ${renderPageBanner('In Memoriam', 'Honoring the memory of our beloved sisters.', IMG.conclaveBoard, [{label:'Events',href:'/events'}])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">Remembrance</span>
      <h2 style="margin:12px 0 20px;">In Loving Memory</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto 48px;">We honor and remember the sisters who have passed on. Their contributions to Las Amigas Incorporated and to our communities will never be forgotten.</p>
    </div>
  </section>

  <section class="quote-section fade-in">
    <div class="container">
      <div class="quote-mark">&ldquo;</div>
      <div class="quote-text">No man is an island. No man stands alone. Each man's joy is joy to me. Each man's grief is my own.</div>
      <div class="divider"></div>
      <div class="quote-author">Dora R. Mason, Founder</div>
    </div>
  </section>`;
}


function renderContactPage() {
  return `
  ${renderPageBanner('Contact Us', 'Get in touch with Las Amigas Incorporated.', IMG.modernOffice, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 gap-48">
        <!-- Contact Form -->
        <div class="fade-in-left">
          <span class="label">Send a Message</span>
          <h2 style="margin:12px 0 20px;">Contact Las Amigas, Incorporated</h2>
          <div class="gold-line" style="margin-bottom:32px;"></div>
          
          <form id="contactForm" onsubmit="return false;">
            <div class="grid-2 gap-16">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name">
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name">
              </div>
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" class="form-control" placeholder="Your email" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" class="form-control" placeholder="Your phone">
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="fade-in-right">
          <div style="display:flex;flex-direction:column;gap:24px;">
            <div class="contact-info-card">
              <div class="contact-icon">${ICONS.mapPin}</div>
              <h4 style="margin-bottom:8px;">Our Address</h4>
              <p style="margin:0;">P O BOX 1957<br>Greensboro, North Carolina 27402</p>
            </div>
            <div class="contact-info-card">
              <div class="contact-icon">${ICONS.mail}</div>
              <h4 style="margin-bottom:8px;">Email Us</h4>
              <p style="margin:0;"><a href="mailto:info@lasamigasincorporated.org" style="color:#5e398f;">info@lasamigasincorporated.org</a></p>
            </div>
            <div class="contact-info-card">
              <div class="contact-icon">${ICONS.globe}</div>
              <h4 style="margin-bottom:8px;">Follow Us</h4>
              <div style="display:flex;gap:12px;justify-content:center;margin-top:12px;">
                <a href="https://www.facebook.com/lasamigasinc" target="_blank" rel="noopener" style="color:#5e398f;">${ICONS.facebook}</a>
                <a href="https://www.instagram.com/lasamigasinc/" target="_blank" rel="noopener" style="color:#5e398f;">${ICONS.instagram}</a>
                <a href="https://www.twitter.com/LasAmigasInc" target="_blank" rel="noopener" style="color:#5e398f;">${ICONS.twitter}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}


function renderDonatePage() {
  return `
  ${renderPageBanner('Donate', 'Your dollars will be used as resources to help underserved communities.', IMG.schoolTeacher, [])}

  <section class="section bg-white">
    <div class="container">
      <div class="grid-2 items-center gap-48">
        <div class="fade-in-left">
          <span class="label">Make an Impact</span>
          <h2 style="margin:12px 0 20px;">Join the Movement to Help Others</h2>
          <div class="gold-line" style="margin-bottom:20px;"></div>
          <p>Las Amigas Incorporated is a non-profit organization that uses fundraisers to generate the financial resources to support their missions and programmatic thrusts.</p>
          <p>Our fundraisers engage donors, raise awareness and create a sense of community involvement. These funds help provide services like food, shelter, education and healthcare to those in need.</p>
          <p>This past year, funds were used to help purchase school supplies for Ben L. Smith High School. We partnered with the Greensboro Police Department to supply blankets for the senior assisted living center. Additionally, we provided blankets to those residents in Western Carolina affected by Hurricane Helene.</p>
        </div>
        <div class="fade-in-right">
          <div style="background:linear-gradient(135deg,#5e398f,#3d2066);padding:48px;border-radius:12px;text-align:center;">
            <h3 style="color:#fff;margin-bottom:8px;">Support Our Mission</h3>
            <div style="width:50px;height:3px;background:#c9a84c;margin:0 auto 24px;border-radius:2px;"></div>
            <p style="color:rgba(255,255,255,0.8);margin-bottom:32px;">Every donation makes a difference in the lives of those in our communities.</p>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <a href="#" class="btn btn-gold btn-lg" style="width:100%;">Donate Now</a>
              <a href="/get-involved" class="btn btn-outline" data-nav style="width:100%;">Other Ways to Help</a>
            </div>
            <p style="color:rgba(255,255,255,0.5);font-size:0.8rem;margin-top:20px;margin-bottom:0;">Las Amigas Incorporated is a 501(c)(3) organization. All donations are tax deductible.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}


function renderPrivacyPolicyPage() {
  return `
  ${renderPageBanner('Privacy Policy', 'Notice of Privacy for Las Amigas Incorporated.', IMG.modernOffice, [])}

  <section class="section bg-white">
    <div class="container">
      <div style="max-width:800px;margin:0 auto;" class="fade-in">
        <h2 style="margin-bottom:24px;">We Care About Your Privacy</h2>
        <div class="gold-line" style="margin-bottom:32px;"></div>
        
        <p>At Las Amigas Incorporated ("Las Amigas," "we," "our," "us"), we understand and appreciate that your decision to choose us for your philanthropic investment in our communities an expression of confidence. You trust us with your donations and you trust us to keep secure any information we obtain from you or about you.</p>
        
        <p>The following notice is designed to help you better understand the information we gather from those who visit lasamigasincorporated.org (the "Website"). It also describes how we handle the information once we gather it, whether we disclose it to anyone, and the choices you have regarding our use of the information.</p>
        
        <h3 style="margin:32px 0 16px;">Information We Collect</h3>
        <p>Our primary goals in collecting Personal Data are to share information about our work, to invite you to events designed to update you on Las Amigas' activities, to allow you to request information, and to thank you for your support.</p>
        
        <h4 style="margin:24px 0 12px;">A. Information You Provide</h4>
        <p>If you make a donation to Las Amigas, Incorporated, we will request Personal Data, such as your name, address, phone number, and email address. We seek such information to facilitate your donation and communicate with you about it.</p>
        <p>We do not sell or rent our donor lists to anyone. We also do not share your personal data with any third parties other than service providers we employ to perform functions on our behalf.</p>
        
        <h4 style="margin:24px 0 12px;">B. Information Collected Automatically</h4>
        <p>We may collect information used primarily to provide an enhanced online experience, including traffic data, location data, weblogs, and other communication data.</p>
        
        <h4 style="margin:24px 0 12px;">C. Use of Cookies</h4>
        <p>Cookies are text files created by websites that transfer information to your computer. Las Amigas, by itself and through third-party services such as Google Analytics, uses cookies to evaluate use of the Website and improve services.</p>
        
        <p style="margin-top:32px;font-style:italic;color:#888;">Please read this Privacy Statement carefully to fully understand how we collect, share, and protect information about you.</p>
      </div>
    </div>
  </section>`;
}


function renderPhotoGalleryPage(region) {
  const regionNames = {
    'mid-atlantic': 'Mid-Atlantic',
    'northeast': 'Northeast',
    'southeast': 'Southeast',
    'southwest': 'Southwest',
  };
  const regionName = regionNames[region] || region;

  return `
  ${renderPageBanner(`${regionName} Photo Gallery`, `Photos from the ${regionName} Region.`, IMG.conclaveBoard, [{label:'Regions',href:'/regions'}])}

  <section class="section bg-white">
    <div class="container text-center fade-in">
      <span class="label">${regionName} Region</span>
      <h2 style="margin:12px 0 20px;">Photo Gallery</h2>
      <div class="divider"></div>
      <p style="max-width:650px;margin:16px auto;">Capturing moments of service, sisterhood, and community impact across the ${regionName} Region.</p>
    </div>
  </section>`;
}


// ─── PAGE ROUTER ────────────────────────────────────────────────────────────

// Member area slugs that should NOT be rendered by rootx
const MEMBER_SLUGS = new Set([
  'members-home', 'documents-forms', 'member-directory', 'newsletter',
  'about-1', 'sassys-gifts', 'simply-be-rooted', 'national-paraphernalia',
  'national-payments', 'visitor-uploads', 'groups', 'members',
  'cart-page', 'checkout', 'thank-you-page', 'my-account', 'my-orders',
  'my-addresses', 'my-wallet', 'my-subscriptions', 'my-groups',
  'notifications', 'settings', 'profile', 'custom-login', 'custom-signup',
  'membership', 'executive-board', 'presidents-message', 'national-queen',
  'conclave-payments', 'side-cart', 'fullscreen-page',
]);

function isProductPage(slug) {
  return slug.startsWith('product-page') || slug.startsWith('product_page');
}

function getPageContent(slug) {
  // Don't render member/dashboard/product pages
  if (MEMBER_SLUGS.has(slug) || isProductPage(slug)) {
    return null; // Signal to not render
  }

  // Map slugs to renderers
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
    'service-awards': renderServiceAwardsPage,
    'new-members': renderNewMembersPage,
    'in-memoriam': renderInMemoriamPage,
    'contact-us': renderContactPage,
    'donate': renderDonatePage,
    'privacy-policy': renderPrivacyPolicyPage,
  };

  // Direct match
  if (renderers[slug]) return renderers[slug]();

  // Region pages
  if (REGION_DATA[slug]) return renderRegionPage(REGION_DATA[slug]);

  // Photo gallery pages
  const galleryMatch = slug.match(/^(.+)-photo-gallery$/);
  if (galleryMatch) return renderPhotoGalleryPage(galleryMatch[1]);

  // Conclave pages
  if (slug.startsWith('conclave-')) return renderPastConclavesPage();
  if (slug.startsWith('copy-of-conclave')) return renderPastConclavesPage();

  // Fallback: render home
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
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'page' && oldVal !== newVal) {
      this.render();
    }
  }

  render() {
    const page = this.getAttribute('page') || 'home';
    const content = getPageContent(page);

    // If null, this is a member/dashboard page — don't render
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

    // ── Mobile Menu Toggle ──
    const toggle = shadow.getElementById('menuToggle');
    const navWrapper = shadow.getElementById('navWrapper');
    if (toggle && navWrapper) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        navWrapper.classList.toggle('open');
      });

      // Mobile dropdown toggles
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

    // ── Scroll Animations (IntersectionObserver) ──
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

    // ── Scroll to Top Button ──
    const scrollTopBtn = shadow.getElementById('scrollTop');
    if (scrollTopBtn) {
      // Use host window scroll since custom element is in page flow
      const checkScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 400) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      };
      window.addEventListener('scroll', checkScroll);
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ── Internal Navigation (SPA-like) ──
    shadow.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          // Close mobile menu
          if (navWrapper) navWrapper.classList.remove('open');
          if (toggle) toggle.classList.remove('open');

          // Extract slug from href
          const slug = href.replace(/^\//, '') || 'home';
          
          // Dispatch event for Velo to handle navigation
          this.dispatchEvent(new CustomEvent('rootx-navigate', {
            detail: { slug, href },
            bubbles: true,
            composed: true,
          }));

          // Also update the attribute directly for immediate re-render
          this.setAttribute('page', slug);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // ── Sticky Header ──
    const header = shadow.getElementById('siteHeader');
    if (header) {
      const handleHeaderScroll = () => {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleHeaderScroll);
    }
  }
}

// Register the custom element
customElements.define('rootx-app', RootxApp);
