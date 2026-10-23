"use strict";

/* ------------------------------------------------------------------
   Debug Destanı - i18n
   Kaynak dil Türkçe. script.js içindeki Türkçe metinler anahtar olarak
   kullanılır; eksik çeviri olursa Türkçe metne düşer.
   ------------------------------------------------------------------ */

const LANG_LIST = [
  { id: "tr", label: "Türkçe", dir: "ltr" },
  { id: "en", label: "English", dir: "ltr" },
  { id: "de", label: "Deutsch", dir: "ltr" },
  { id: "ar", label: "العربية", dir: "rtl" },
  { id: "zh", label: "中文", dir: "ltr" },
];

let LANG = null;
try { LANG = localStorage.getItem("dd-lang"); } catch (e) {}
if (!LANG || !LANG_LIST.some(l => l.id === LANG)) {
  const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase();
  LANG = nav.indexOf("de") === 0 ? "de"
    : nav.indexOf("ar") === 0 ? "ar"
    : nav.indexOf("zh") === 0 ? "zh"
    : nav.indexOf("en") === 0 ? "en"
    : "tr";
}

let redraw = null;

/* ---------- arayüz metinleri ---------- */
const I18N = {
  en: {
    "Oyun alanı": "Game area",
    "Dil": "Language",
    "Müzik": "Music",
    "Ses": "Sound",
    "Duraklat": "Pause",
    "Sola": "Left",
    "Sağa": "Right",
    "Ateş et": "Fire",
    "Zıpla": "Jump",
    "ATEŞ": "FIRE",
    "ZIPLA": "JUMP",
    "Uzun bas, daha yükseğe zıpla": "Hold to jump higher",
    "Adın": "Your name",
    "Örn. Musa": "e.g. Musa",
    "yeni sekmede açılır": "opens in a new tab",
    "Kahraman": "Hero",
    "debugger düştü": "debugger lost",
    "commit!": "commit!",
    "+1 can": "+1 life",
    "DOKUNULMAZ!": "INVINCIBLE!",
    "KAHVE YAĞMURU!": "COFFEE RAIN!",
    "Yeni düşman: {0}": "New enemy: {0}",
    "Gizli sır: {0}": "Secret: {0}",
    "{0} / {1} bulundu": "{0} / {1} found",
    "Bunu zaten bulmuştun": "You already found this one",
    "Önce adını yaz; Ela kimin geldiğini bilsin.": "Write your name first; Ela should know who is coming.",
    "Kopyala": "Copy",
    "Kopyalandı": "Copied",
    "Seçildi": "Selected",
    "Çay: +1 can": "Tea: +1 life",
    "Debugger: ateş": "Debugger: fire",
    "Ördek: dokunulmaz": "Duck: invincible",
    "Oklarla yürü, <b>ZIPLA</b> ile zıpla. Debugger'ı alınca <b>ATEŞ</b> açılır.": "Walk with the arrows, jump with <b>JUMP</b>. <b>FIRE</b> unlocks once you grab the debugger.",
    "Yürü: <b>←</b> <b>→</b> · Zıpla: <span class='nw'><b>Boşluk</b> / <b>Z</b></span> · Ateş: <b>X</b> · Mola: <b>P</b>": "Move: <b>←</b> <b>→</b> · Jump: <span class='nw'><b>Space</b> / <b>Z</b></span> · Fire: <b>X</b> · Pause: <b>P</b>",
    "Sesi aç": "Unmute",
    "Sesi kapat": "Mute",
    "Müziği kapat": "Mute music",
    "Müziği aç": "Unmute music",
    "İmdat!": "Help!",
    "Veri merkezine gidiyor...": "Heading to the data center...",
    "</> OFİS": "</> OFFICE",
    "İleri": "Next",
    "Hikâyeyi geç": "Skip story",
    "Cuma · 18:01": "Friday · 6:01 PM",
    "Sıra sende, {ad}": "Your turn, {ad}",
    "Kahveni bitir. Bug'ları ez, kutulardan güç topla, veri merkezine in ve Ela'yı kurtar.": "Finish your coffee. Stomp bugs, grab power-ups from the crates, descend into the data center and rescue Ela.",
    "Göreve başla": "Start the mission",
    "Sesli oyun · Kulaklık önerilir": "Game with sound · Headphones recommended",
    "Cuma 17:59. Prod çöktü, Ela kayıp. Hazırsan başlayalım.": "Friday 5:59 PM. Production is down, Ela is missing. Let's begin if you're ready.",
    "▶ Başlat": "▶ Start",
    "Ses ve müziği sağ üstteki butonlardan kapatabilirsin.": "You can turn sound and music off with the buttons at the top right.",
    "Yeni oyun": "New game",
    "Devam: {0}": "Continue: {0}",
    "Eskişehir · Cuma 17:59": "Eskişehir · Friday 5:59 PM",
    "Ela production'a push etti, bug canavarları onu kaçırdı. Bug'ları ez, güç topla, Ela'yı kurtar.": "Ela pushed to production and the bug monsters kidnapped her. Stomp bugs, gather power, rescue Ela.",
    "Bug'lar beni durduramaz!": "Bugs can't stop me!",
    "En iyi skor": "Best score",
    "Gizli sırlar": "Secrets",
    "Oyunu yapan geliştirici Musa Yazlık, freelance projelere ve tam zamanlı Full-Stack pozisyonlarına açık:": "Musa Yazlık, the developer behind this game, is open to freelance projects and full-time Full-Stack positions:",
    "Dünya {0} · Canavar": "World {0} · Boss",
    "Bölüm {0} · {1}": "Level {0} · {1}",
    "Savaşa gir": "Enter the battle",
    "Hadi!": "Let's go!",
    "Oyun bitti · Kazandın": "Game complete · You win",
    "Musa kurtarıldı!": "Musa is rescued!",
    "Ela kurtarıldı!": "Ela is rescued!",
    "Bu sefer roller değişti: Ela kahraman, Musa kafesteydi. Prod yeşil, hafta sonu sizin.": "This time the roles switched: Ela is the hero and Musa was stuck in the cage. Prod is green, the weekend is yours.",
    "Teşekkürler {ad}! İki canavar da yenildi, prod yeşil yanıyor. Hafta sonu sizin.": "Thanks, {ad}! Both monsters are defeated and prod is green again. The weekend is yours.",
    "Toplanan kahve": "Coffee collected",
    "Yenilen bug": "Bugs squashed",
    "Skor": "Score",
    "En iyi": "Best",
    "Tekrar oyna": "Play again",
    "Ekibine Full-Stack geliştirici mi arıyorsun, yoksa bir projen mi var? Tam zamanlı ve freelance işler için:": "Looking for a Full-Stack developer for your team, or have a project in mind? For full-time and freelance work:",
    "Spagetti Kod Canavarı yenildi": "Spaghetti Code Monster defeated",
    "Kafes boş!": "The cage is empty!",
    "Ela burada değil. Kafeste bir not var:": "Ela is not here. There is a note in the cage:",
    "Ela, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Musa": "Ela, they handed me over to the Legacy Code Monster. I'm on the night server, hurry! — Musa",
    "{ad}, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Ela": "{ad}, they handed me over to the Legacy Code Monster. I'm on the night server, hurry! — Ela",
    "Dünya 2'ye geç": "Go to World 2",
    "Bölüm {0} tamam": "Level {0} complete",
    "Ofise vardın!": "You made it to the office!",
    "{ad}, sıradaki kapının ardında bir canavar var. Debugger'ını hazır tut.": "{ad}, a monster waits behind the next door. Keep your debugger ready.",
    "Bayrak indi, kalan her can 100 puan getirdi.": "Flag lowered. Every remaining life was worth 100 points.",
    "Bayrak bonusu": "Flag bonus",
    "Kahve": "Coffee",
    "Sonraki bölüm": "Next level",
    "Veri merkezine in": "Descend to the data center",
    "Build failed": "Build failed",
    "Prod'a bug kaçtı": "A bug slipped into prod",
    "Olur böyle şeyler, {ad}. Bir commit daha?": "It happens, {ad}. One more commit?",
    "Tekrar dene": "Try again",
    "Ana menü": "Main menu",
    "Gerçek projendeki bug'lar için: freelance destek ya da tam zamanlı Full-Stack geliştirici": "For the bugs in your real project: freelance support or a full-time Full-Stack developer",
    "sudo · Geliştirici modu": "sudo · Developer mode",
    "Bölüm seç": "Level select",
    "Root yetkisi verildi. İstediğin bölüme atla.": "Root access granted. Jump to any level you like.",
    "Mola": "Break",
    "Kahve molası": "Coffee break",
    "Oyun durdu. Hazır olunca devam et.": "Game paused. Continue when you're ready.",
    "Devam": "Resume",
    "Molada küçük bir not: freelance projeler ve tam zamanlı Full-Stack roller için": "A little note during the break: available for freelance projects and full-time Full-Stack roles",
    "Lastik ördek debugging": "Rubber duck debugging",
    "Sorununu ördeğe anlattın, çözüm kendiliğinden geldi. Devam edince 10 saniye dokunulmazsın.": "You explained your problem to the duck and the answer came by itself. Continue for 10 seconds of invincibility."
  },
  de: {
    "Oyun alanı": "Spielfläche",
    "Dil": "Sprache",
    "Müzik": "Musik",
    "Ses": "Sound",
    "Duraklat": "Pause",
    "Sola": "Links",
    "Sağa": "Rechts",
    "Ateş et": "Feuern",
    "Zıpla": "Springen",
    "ATEŞ": "FEUER",
    "ZIPLA": "SPRUNG",
    "Uzun bas, daha yükseğe zıpla": "Länger halten für höhere Sprünge",
    "Adın": "Dein Name",
    "Örn. Musa": "z. B. Musa",
    "yeni sekmede açılır": "öffnet in neuem Tab",
    "Kahraman": "Held",
    "debugger düştü": "Debugger verloren",
    "commit!": "commit!",
    "+1 can": "+1 Leben",
    "DOKUNULMAZ!": "UNVERWUNDBAR!",
    "KAHVE YAĞMURU!": "KAFFEE-REGEN!",
    "Yeni düşman: {0}": "Neuer Gegner: {0}",
    "Gizli sır: {0}": "Geheimnis: {0}",
    "{0} / {1} bulundu": "{0} / {1} gefunden",
    "Bunu zaten bulmuştun": "Das hattest du schon gefunden",
    "Önce adını yaz; Ela kimin geldiğini bilsin.": "Schreib zuerst deinen Namen; Ela soll wissen, wer kommt.",
    "Kopyala": "Kopieren",
    "Kopyalandı": "Kopiert",
    "Seçildi": "Ausgewählt",
    "Çay: +1 can": "Tee: +1 Leben",
    "Debugger: ateş": "Debugger: Feuer",
    "Ördek: dokunulmaz": "Ente: unverwundbar",
    "Oklarla yürü, <b>ZIPLA</b> ile zıpla. Debugger'ı alınca <b>ATEŞ</b> açılır.": "Lauf mit den Pfeilen, spring mit <b>SPRUNG</b>. <b>FEUER</b> wird frei, sobald du den Debugger hast.",
    "Yürü: <b>←</b> <b>→</b> · Zıpla: <span class='nw'><b>Boşluk</b> / <b>Z</b></span> · Ateş: <b>X</b> · Mola: <b>P</b>": "Bewegen: <b>←</b> <b>→</b> · Springen: <span class='nw'><b>Leertaste</b> / <b>Z</b></span> · Feuern: <b>X</b> · Pause: <b>P</b>",
    "Sesi aç": "Ton an",
    "Sesi kapat": "Ton aus",
    "Müziği kapat": "Musik aus",
    "Müziği aç": "Musik an",
    "İmdat!": "Hilfe!",
    "Veri merkezine gidiyor...": "Auf dem Weg ins Rechenzentrum...",
    "</> OFİS": "</> BÜRO",
    "İleri": "Weiter",
    "Hikâyeyi geç": "Story überspringen",
    "Cuma · 18:01": "Freitag · 18:01",
    "Sıra sende, {ad}": "Du bist dran, {ad}",
    "Kahveni bitir. Bug'ları ez, kutulardan güç topla, veri merkezine in ve Ela'yı kurtar.": "Trink deinen Kaffee aus. Zertritt Bugs, hol dir Power-ups aus den Kisten, steig ins Rechenzentrum hinab und rette Ela.",
    "Göreve başla": "Mission starten",
    "Sesli oyun · Kulaklık önerilir": "Spiel mit Ton · Kopfhörer empfohlen",
    "Cuma 17:59. Prod çöktü, Ela kayıp. Hazırsan başlayalım.": "Freitag 17:59. Die Prod ist down, Ela ist verschwunden. Los geht's, wenn du bereit bist.",
    "▶ Başlat": "▶ Start",
    "Ses ve müziği sağ üstteki butonlardan kapatabilirsin.": "Ton und Musik kannst du über die Buttons oben rechts ausschalten.",
    "Yeni oyun": "Neues Spiel",
    "Devam: {0}": "Weiter: {0}",
    "Eskişehir · Cuma 17:59": "Eskişehir · Freitag 17:59",
    "Ela production'a push etti, bug canavarları onu kaçırdı. Bug'ları ez, güç topla, Ela'yı kurtar.": "Ela hat in die Produktion gepusht und die Bug-Monster haben sie entführt. Zertritt Bugs, sammle Kraft und rette Ela.",
    "Bug'lar beni durduramaz!": "Bugs können mich nicht aufhalten!",
    "En iyi skor": "Bestwert",
    "Gizli sırlar": "Geheimnisse",
    "Oyunu yapan geliştirici Musa Yazlık, freelance projelere ve tam zamanlı Full-Stack pozisyonlarına açık:": "Musa Yazlık, der Entwickler dieses Spiels, ist offen für Freelance-Projekte und Vollzeit-Full-Stack-Stellen:",
    "Dünya {0} · Canavar": "Welt {0} · Boss",
    "Bölüm {0} · {1}": "Level {0} · {1}",
    "Savaşa gir": "In die Schlacht",
    "Hadi!": "Los!",
    "Oyun bitti · Kazandın": "Spiel vorbei · Gewonnen",
    "Musa kurtarıldı!": "Musa ist gerettet!",
    "Ela kurtarıldı!": "Ela ist gerettet!",
    "Bu sefer roller değişti: Ela kahraman, Musa kafesteydi. Prod yeşil, hafta sonu sizin.": "Diesmal waren die Rollen vertauscht: Ela ist die Heldin und Musa saß im Käfig. Die Prod ist grün, das Wochenende gehört euch.",
    "Teşekkürler {ad}! İki canavar da yenildi, prod yeşil yanıyor. Hafta sonu sizin.": "Danke, {ad}! Beide Monster sind besiegt, die Prod leuchtet grün. Das Wochenende gehört euch.",
    "Toplanan kahve": "Kaffee gesammelt",
    "Yenilen bug": "Bugs besiegt",
    "Skor": "Punkte",
    "En iyi": "Bestwert",
    "Tekrar oyna": "Nochmal spielen",
    "Ekibine Full-Stack geliştirici mi arıyorsun, yoksa bir projen mi var? Tam zamanlı ve freelance işler için:": "Suchst du einen Full-Stack-Entwickler für dein Team oder hast du ein Projekt? Für Vollzeit- und Freelance-Jobs:",
    "Spagetti Kod Canavarı yenildi": "Spaghetti-Code-Monster besiegt",
    "Kafes boş!": "Der Käfig ist leer!",
    "Ela burada değil. Kafeste bir not var:": "Ela ist nicht hier. Im Käfig liegt ein Zettel:",
    "Ela, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Musa": "Ela, sie haben mich dem Legacy-Code-Monster übergeben. Ich bin auf dem Nachtserver, beeil dich! — Musa",
    "{ad}, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Ela": "{ad}, sie haben mich dem Legacy-Code-Monster übergeben. Ich bin auf dem Nachtserver, beeil dich! — Ela",
    "Dünya 2'ye geç": "Weiter zu Welt 2",
    "Bölüm {0} tamam": "Level {0} geschafft",
    "Ofise vardın!": "Du hast das Büro erreicht!",
    "{ad}, sıradaki kapının ardında bir canavar var. Debugger'ını hazır tut.": "{ad}, hinter der nächsten Tür wartet ein Monster. Halte deinen Debugger bereit.",
    "Bayrak indi, kalan her can 100 puan getirdi.": "Flagge unten. Jedes verbliebene Leben brachte 100 Punkte.",
    "Bayrak bonusu": "Flaggenbonus",
    "Kahve": "Kaffee",
    "Sonraki bölüm": "Nächstes Level",
    "Veri merkezine in": "Ins Rechenzentrum hinab",
    "Build failed": "Build fehlgeschlagen",
    "Prod'a bug kaçtı": "Ein Bug ist in die Prod entwischt",
    "Olur böyle şeyler, {ad}. Bir commit daha?": "Kommt vor, {ad}. Noch ein Commit?",
    "Tekrar dene": "Erneut versuchen",
    "Ana menü": "Hauptmenü",
    "Gerçek projendeki bug'lar için: freelance destek ya da tam zamanlı Full-Stack geliştirici": "Für die Bugs in deinem echten Projekt: Freelance-Support oder ein Vollzeit-Full-Stack-Entwickler",
    "sudo · Geliştirici modu": "sudo · Entwicklermodus",
    "Bölüm seç": "Levelauswahl",
    "Root yetkisi verildi. İstediğin bölüme atla.": "Root-Zugriff gewährt. Springe in jedes Level.",
    "Mola": "Pause",
    "Kahve molası": "Kaffeepause",
    "Oyun durdu. Hazır olunca devam et.": "Spiel pausiert. Mach weiter, wenn du bereit bist.",
    "Devam": "Weiter",
    "Molada küçük bir not: freelance projeler ve tam zamanlı Full-Stack roller için": "Eine kleine Notiz in der Pause: offen für Freelance-Projekte und Vollzeit-Full-Stack-Rollen",
    "Lastik ördek debugging": "Gummienten-Debugging",
    "Sorununu ördeğe anlattın, çözüm kendiliğinden geldi. Devam edince 10 saniye dokunulmazsın.": "Du hast der Ente dein Problem erklärt und die Lösung kam von allein. Weiter für 10 Sekunden Unverwundbarkeit."
  },
  ar: {
    "Oyun alanı": "منطقة اللعب",
    "Dil": "اللغة",
    "Müzik": "الموسيقى",
    "Ses": "الصوت",
    "Duraklat": "إيقاف مؤقت",
    "Sola": "يسار",
    "Sağa": "يمين",
    "Ateş et": "أطلق النار",
    "Zıpla": "اقفز",
    "ATEŞ": "نار",
    "ZIPLA": "اقفز",
    "Uzun bas, daha yükseğe zıpla": "اضغط مطولاً للقفز أعلى",
    "Adın": "اسمك",
    "Örn. Musa": "مثال: موسى",
    "yeni sekmede açılır": "يفتح في علامة تبويب جديدة",
    "Kahraman": "البطل",
    "debugger düştü": "سقط المصحح",
    "commit!": "commit!",
    "+1 can": "+1 حياة",
    "DOKUNULMAZ!": "لا تُمَسّ!",
    "KAHVE YAĞMURU!": "مطر القهوة!",
    "Yeni düşman: {0}": "عدو جديد: {0}",
    "Gizli sır: {0}": "سر مخفي: {0}",
    "{0} / {1} bulundu": "تم العثور على {0} / {1}",
    "Bunu zaten bulmuştun": "لقد عثرت على هذا سابقاً",
    "Önce adını yaz; Ela kimin geldiğini bilsin.": "اكتب اسمك أولاً؛ لتكون Ela على علم بمن أتى.",
    "Kopyala": "انسخ",
    "Kopyalandı": "تم النسخ",
    "Seçildi": "تم التحديد",
    "Çay: +1 can": "شاي: +1 حياة",
    "Debugger: ateş": "المصحح: إطلاق نار",
    "Ördek: dokunulmaz": "البطة: مناعة",
    "Oklarla yürü, <b>ZIPLA</b> ile zıpla. Debugger'ı alınca <b>ATEŞ</b> açılır.": "تحرك بالأسهم واقفز بزر <b>اقفز</b>. يُفتح زر <b>نار</b> عند أخذ المصحح.",
    "Yürü: <b>←</b> <b>→</b> · Zıpla: <span class='nw'><b>Boşluk</b> / <b>Z</b></span> · Ateş: <b>X</b> · Mola: <b>P</b>": "الحركة: <b>←</b> <b>→</b> · القفز: <span class='nw'><b>مسافة</b> / <b>Z</b></span> · الإطلاق: <b>X</b> · الإيقاف: <b>P</b>",
    "Sesi aç": "تشغيل الصوت",
    "Sesi kapat": "كتم الصوت",
    "Müziği kapat": "إيقاف الموسيقى",
    "Müziği aç": "تشغيل الموسيقى",
    "İmdat!": "النجدة!",
    "Veri merkezine gidiyor...": "في الطريق إلى مركز البيانات...",
    "</> OFİS": "</> المكتب",
    "İleri": "التالي",
    "Hikâyeyi geç": "تخطي القصة",
    "Cuma · 18:01": "الجمعة · ٦:٠١ م",
    "Sıra sende, {ad}": "دورك الآن، {ad}",
    "Kahveni bitir. Bug'ları ez, kutulardan güç topla, veri merkezine in ve Ela'yı kurtar.": "أنهِ قهوتك. اِصرع الحشرات، واجمع القوى من الصناديق، وانزل إلى مركز البيانات وأنقذ Ela.",
    "Göreve başla": "ابدأ المهمة",
    "Sesli oyun · Kulaklık önerilir": "لعبة بصوت · يُنصح بسماعات الرأس",
    "Cuma 17:59. Prod çöktü, Ela kayıp. Hazırsan başlayalım.": "الجمعة ٥:٥٩ م. تعطل الإنتاج واختفت Ela. لنبدأ إن كنت مستعداً.",
    "▶ Başlat": "▶ ابدأ",
    "Ses ve müziği sağ üstteki butonlardan kapatabilirsin.": "يمكنك إيقاف الصوت والموسيقى من الأزرار أعلى اليمين.",
    "Yeni oyun": "لعبة جديدة",
    "Devam: {0}": "متابعة: {0}",
    "Eskişehir · Cuma 17:59": "إسكيشهير · الجمعة ٥:٥٩ م",
    "Ela production'a push etti, bug canavarları onu kaçırdı. Bug'ları ez, güç topla, Ela'yı kurtar.": "دفعت Ela إلى بيئة الإنتاج فاختطفها وحوش الأخطاء. اِصرع الحشرات، واجمع القوى، وأنقذ Ela.",
    "Bug'lar beni durduramaz!": "لا يمكن للأخطاء أن توقفني!",
    "En iyi skor": "أفضل نتيجة",
    "Gizli sırlar": "الأسرار",
    "Oyunu yapan geliştirici Musa Yazlık, freelance projelere ve tam zamanlı Full-Stack pozisyonlarına açık:": "موسى يازليك، مطور هذه اللعبة، متاح لمشاريع العمل الحر ووظائف Full-Stack بدوام كامل:",
    "Dünya {0} · Canavar": "العالم {0} · الوحش",
    "Bölüm {0} · {1}": "المرحلة {0} · {1}",
    "Savaşa gir": "ادخل المعركة",
    "Hadi!": "هيا بنا!",
    "Oyun bitti · Kazandın": "انتهت اللعبة · فزت",
    "Musa kurtarıldı!": "تم إنقاذ موسى!",
    "Ela kurtarıldı!": "تم إنقاذ Ela!",
    "Bu sefer roller değişti: Ela kahraman, Musa kafesteydi. Prod yeşil, hafta sonu sizin.": "هذه المرة انقلبت الأدوار: Ela هي البطلة وموسى كان في القفص. الإنتاج أخضر وعطلة نهاية الأسبوع لكم.",
    "Teşekkürler {ad}! İki canavar da yenildi, prod yeşil yanıyor. Hafta sonu sizin.": "شكراً لك {ad}! هُزم الوحشان والإنتاج أخضر. عطلة نهاية الأسبوع لكم.",
    "Toplanan kahve": "القهوة المجموعة",
    "Yenilen bug": "الأخطاء المهزومة",
    "Skor": "النتيجة",
    "En iyi": "الأفضل",
    "Tekrar oyna": "العب مجدداً",
    "Ekibine Full-Stack geliştirici mi arıyorsun, yoksa bir projen mi var? Tam zamanlı ve freelance işler için:": "هل تبحث عن مطور Full-Stack لفريقك أم لديك مشروع؟ للأعمال بدوام كامل والعمل الحر:",
    "Spagetti Kod Canavarı yenildi": "هُزم وحش الشيفرة السباغيتي",
    "Kafes boş!": "القفص فارغ!",
    "Ela burada değil. Kafeste bir not var:": "Ela ليست هنا. في القفص رسالة:",
    "Ela, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Musa": "Ela، سلّموني إلى وحش الشيفرة القديمة. أنا في خادم الليل، أسرعي! — موسى",
    "{ad}, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Ela": "{ad}، سلّموني إلى وحش الشيفرة القديمة. أنا في خادم الليل، أسرع! — Ela",
    "Dünya 2'ye geç": "انتقل إلى العالم 2",
    "Bölüm {0} tamam": "اكتملت المرحلة {0}",
    "Ofise vardın!": "وصلت إلى المكتب!",
    "{ad}, sıradaki kapının ardında bir canavar var. Debugger'ını hazır tut.": "{ad}، خلف الباب التالي وحش ينتظر. أبقِ مصححك جاهزاً.",
    "Bayrak indi, kalan her can 100 puan getirdi.": "نزل العلم، وكل حياة متبقية منحت 100 نقطة.",
    "Bayrak bonusu": "مكافأة العلم",
    "Kahve": "القهوة",
    "Sonraki bölüm": "المرحلة التالية",
    "Veri merkezine in": "انزل إلى مركز البيانات",
    "Build failed": "فشل البناء",
    "Prod'a bug kaçtı": "تسلل خطأ إلى الإنتاج",
    "Olur böyle şeyler, {ad}. Bir commit daha?": "يحدث هذا، {ad}. هل من commit آخر؟",
    "Tekrar dene": "حاول مجدداً",
    "Ana menü": "القائمة الرئيسية",
    "Gerçek projendeki bug'lar için: freelance destek ya da tam zamanlı Full-Stack geliştirici": "لأخطاء مشروعك الحقيقي: دعم حر أو مطور Full-Stack بدوام كامل",
    "sudo · Geliştirici modu": "sudo · وضع المطور",
    "Bölüm seç": "اختيار المرحلة",
    "Root yetkisi verildi. İstediğin bölüme atla.": "مُنح وصول الجذر. انتقل إلى أي مرحلة تريد.",
    "Mola": "استراحة",
    "Kahve molası": "استراحة قهوة",
    "Oyun durdu. Hazır olunca devam et.": "توقفت اللعبة. أكمل عندما تكون مستعداً.",
    "Devam": "متابعة",
    "Molada küçük bir not: freelance projeler ve tam zamanlı Full-Stack roller için": "ملاحظة صغيرة في الاستراحة: متاح لمشاريع العمل الحر ووظائف Full-Stack بدوام كامل",
    "Lastik ördek debugging": "تصحيح البطة المطاطية",
    "Sorununu ördeğe anlattın, çözüm kendiliğinden geldi. Devam edince 10 saniye dokunulmazsın.": "شرحت مشكلتك للبطة فجاء الحل من تلقاء نفسه. تابع للحصول على 10 ثوانٍ من المناعة."
  },
  zh: {
    "Oyun alanı": "游戏区域",
    "Dil": "语言",
    "Müzik": "音乐",
    "Ses": "音效",
    "Duraklat": "暂停",
    "Sola": "左",
    "Sağa": "右",
    "Ateş et": "射击",
    "Zıpla": "跳跃",
    "ATEŞ": "射击",
    "ZIPLA": "跳跃",
    "Uzun bas, daha yükseğe zıpla": "长按跳得更高",
    "Adın": "你的名字",
    "Örn. Musa": "例如：Musa",
    "yeni sekmede açılır": "在新标签页中打开",
    "Kahraman": "勇者",
    "debugger düştü": "调试器掉了",
    "commit!": "commit!",
    "+1 can": "+1 生命",
    "DOKUNULMAZ!": "无敌！",
    "KAHVE YAĞMURU!": "咖啡雨！",
    "Yeni düşman: {0}": "新敌人：{0}",
    "Gizli sır: {0}": "隐藏秘密：{0}",
    "{0} / {1} bulundu": "已找到 {0} / {1}",
    "Bunu zaten bulmuştun": "这个你已经找到了",
    "Önce adını yaz; Ela kimin geldiğini bilsin.": "先写下你的名字，让 Ela 知道是谁来了。",
    "Kopyala": "复制",
    "Kopyalandı": "已复制",
    "Seçildi": "已选择",
    "Çay: +1 can": "茶：+1 生命",
    "Debugger: ateş": "调试器：射击",
    "Ördek: dokunulmaz": "鸭子：无敌",
    "Oklarla yürü, <b>ZIPLA</b> ile zıpla. Debugger'ı alınca <b>ATEŞ</b> açılır.": "用方向键移动，<b>跳跃</b>键起跳。拿到调试器后解锁<b>射击</b>。",
    "Yürü: <b>←</b> <b>→</b> · Zıpla: <span class='nw'><b>Boşluk</b> / <b>Z</b></span> · Ateş: <b>X</b> · Mola: <b>P</b>": "移动：<b>←</b> <b>→</b> · 跳跃：<span class='nw'><b>空格</b> / <b>Z</b></span> · 射击：<b>X</b> · 暂停：<b>P</b>",
    "Sesi aç": "开启音效",
    "Sesi kapat": "关闭音效",
    "Müziği kapat": "关闭音乐",
    "Müziği aç": "开启音乐",
    "İmdat!": "救命！",
    "Veri merkezine gidiyor...": "正在前往数据中心……",
    "</> OFİS": "</> 办公室",
    "İleri": "继续",
    "Hikâyeyi geç": "跳过剧情",
    "Cuma · 18:01": "周五 · 18:01",
    "Sıra sende, {ad}": "轮到你了，{ad}",
    "Kahveni bitir. Bug'ları ez, kutulardan güç topla, veri merkezine in ve Ela'yı kurtar.": "喝完咖啡。踩扁 bug，从箱子里拿道具，下到数据中心拯救 Ela。",
    "Göreve başla": "开始任务",
    "Sesli oyun · Kulaklık önerilir": "有声游戏 · 建议佩戴耳机",
    "Cuma 17:59. Prod çöktü, Ela kayıp. Hazırsan başlayalım.": "周五 17:59。生产环境崩溃，Ela 失踪。准备好了就开始吧。",
    "▶ Başlat": "▶ 开始",
    "Ses ve müziği sağ üstteki butonlardan kapatabilirsin.": "你可以用右上角的按钮关闭音效和音乐。",
    "Yeni oyun": "新游戏",
    "Devam: {0}": "继续：{0}",
    "Eskişehir · Cuma 17:59": "埃斯基谢希尔 · 周五 17:59",
    "Ela production'a push etti, bug canavarları onu kaçırdı. Bug'ları ez, güç topla, Ela'yı kurtar.": "Ela 把代码推到了生产环境，bug 怪兽把她抓走了。踩扁 bug，收集力量，拯救 Ela。",
    "Bug'lar beni durduramaz!": "Bug 们拦不住我！",
    "En iyi skor": "最高分",
    "Gizli sırlar": "隐藏秘密",
    "Oyunu yapan geliştirici Musa Yazlık, freelance projelere ve tam zamanlı Full-Stack pozisyonlarına açık:": "本游戏开发者 Musa Yazlık 接受自由职业项目与全职全栈职位：",
    "Dünya {0} · Canavar": "世界 {0} · 怪兽",
    "Bölüm {0} · {1}": "关卡 {0} · {1}",
    "Savaşa gir": "进入战斗",
    "Hadi!": "上吧！",
    "Oyun bitti · Kazandın": "游戏通关 · 你赢了",
    "Musa kurtarıldı!": "Musa 获救了！",
    "Ela kurtarıldı!": "Ela 获救了！",
    "Bu sefer roller değişti: Ela kahraman, Musa kafesteydi. Prod yeşil, hafta sonu sizin.": "这次角色互换了：Ela 成了英雄，Musa 被关在笼子里。生产环境恢复绿色，周末属于你们。",
    "Teşekkürler {ad}! İki canavar da yenildi, prod yeşil yanıyor. Hafta sonu sizin.": "谢谢你，{ad}！两只怪兽都被打败，生产环境恢复绿色。周末属于你们。",
    "Toplanan kahve": "收集咖啡",
    "Yenilen bug": "消灭 bug",
    "Skor": "得分",
    "En iyi": "最高",
    "Tekrar oyna": "再玩一次",
    "Ekibine Full-Stack geliştirici mi arıyorsun, yoksa bir projen mi var? Tam zamanlı ve freelance işler için:": "你在为团队寻找全栈开发者，或者有项目要做？全职与自由职业合作：",
    "Spagetti Kod Canavarı yenildi": "意大利面代码怪兽被打败",
    "Kafes boş!": "笼子空了！",
    "Ela burada değil. Kafeste bir not var:": "Ela 不在这里。笼子里有一张纸条：",
    "Ela, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Musa": "Ela，他们把我交给了遗留代码怪兽。我在夜间服务器上，快来！—— Musa",
    "{ad}, beni Legacy Kod Canavarı'na verdiler. Gece sunucusundayım, acele et! — Ela": "{ad}，他们把我交给了遗留代码怪兽。我在夜间服务器上，快来！—— Ela",
    "Dünya 2'ye geç": "前往世界 2",
    "Bölüm {0} tamam": "完成关卡 {0}",
    "Ofise vardın!": "你到达办公室了！",
    "{ad}, sıradaki kapının ardında bir canavar var. Debugger'ını hazır tut.": "{ad}，下一扇门后有只怪兽。准备好你的调试器。",
    "Bayrak indi, kalan her can 100 puan getirdi.": "旗帜降下，每条剩余生命带来 100 分。",
    "Bayrak bonusu": "旗帜奖励",
    "Kahve": "咖啡",
    "Sonraki bölüm": "下一关",
    "Veri merkezine in": "下到数据中心",
    "Build failed": "构建失败",
    "Prod'a bug kaçtı": "bug 溜进了生产环境",
    "Olur böyle şeyler, {ad}. Bir commit daha?": "常有的事，{ad}。再来一次 commit？",
    "Tekrar dene": "再试一次",
    "Ana menü": "主菜单",
    "Gerçek projendeki bug'lar için: freelance destek ya da tam zamanlı Full-Stack geliştirici": "解决你真实项目中的 bug：自由职业支持或全职全栈开发者",
    "sudo · Geliştirici modu": "sudo · 开发者模式",
    "Bölüm seç": "选择关卡",
    "Root yetkisi verildi. İstediğin bölüme atla.": "已授予 root 权限。可跳转到任意关卡。",
    "Mola": "休息",
    "Kahve molası": "咖啡时间",
    "Oyun durdu. Hazır olunca devam et.": "游戏已暂停。准备好了就继续。",
    "Devam": "继续",
    "Molada küçük bir not: freelance projeler ve tam zamanlı Full-Stack roller için": "休息时的小提示：承接自由职业项目与全职全栈职位",
    "Lastik ördek debugging": "小黄鸭调试法",
    "Sorununu ördeğe anlattın, çözüm kendiliğinden geldi. Devam edince 10 saniye dokunulmazsın.": "你把问题讲给鸭子听，答案自己冒了出来。继续游戏可获得 10 秒无敌。"
  }
};

/* ---------- bölüm metinleri ---------- */
const I18N_LEVELS = {
  en: {
    "1-1": { name: "Morning Standup", time: "09:30", lead: "{ad}, standup is over and your coffee is ready. Jump on the bugs' heads, hit the crates from below. At the end, lower the flag and step into the office." },
    "1-2": { name: "Mid-Sprint", time: "14:00", lead: "Don't step on the purple spiky merge conflicts; only fire defeats them. Cloud servers carry you across." },
    "1-3": { name: "Code Review", time: "16:30", lead: "Comments are pouring in. Grab the debugger; if you find the duck you'll be invincible for a few seconds." },
    "1-4": { name: "Friday 5:59 PM", time: "Last deploy", lead: "The workday is almost over. Clouds rise and fall, bugs are everywhere. After this level you descend into the monster's data center." },
    "1-K": { name: "Spaghetti Code Monster", time: "Data center", bossName: "Spaghetti Code Monster", lead: "The monster that kidnapped Ela is in this data center. Code nobody has touched for years has come alive. Shoot it with the debugger or jump on its head." },
    "2-1": { name: "Night Overtime", time: "21:00", lead: "The note in the cage was right: Ela is on the night server. While the city sleeps, you hunt bugs." },
    "2-2": { name: "Load Test", time: "23:10", lead: "Someone started a load test on prod. Bugs are coming in swarms; don't lose your firepower." },
    "2-3": { name: "Hotfix Night", time: "01:30", lead: "A midnight hotfix. Jump your way forward across clouds and desks." },
    "2-4": { name: "Server Room", time: "03:00", lead: "The last room before the night data center. Racks are tall, spikes are sharp. Ela is very close." },
    "2-K": { name: "Legacy Code Monster", time: "Night data center", bossName: "Legacy Code Monster", lead: "{ad}, Ela is in the cage. The monster is faster and throws three bugs at once. Final battle." }
  },
  de: {
    "1-1": { name: "Morgen-Standup", time: "09:30", lead: "{ad}, das Standup ist vorbei und dein Kaffee steht bereit. Springe den Bugs auf den Kopf, triff die Kisten von unten. Senke am Ende die Flagge und geh ins Büro." },
    "1-2": { name: "Sprint-Mitte", time: "14:00", lead: "Tritt nicht auf die lila stacheligen Merge-Konflikte; nur Feuer besiegt sie. Cloud-Server tragen dich hinüber." },
    "1-3": { name: "Code Review", time: "16:30", lead: "Die Kommentare regnen nur so herunter. Schnapp dir den Debugger; findest du die Ente, bist du ein paar Sekunden unverwundbar." },
    "1-4": { name: "Freitag 17:59", time: "Letztes Deploy", lead: "Der Feierabend naht. Wolken steigen und fallen, überall Bugs. Nach diesem Level steigst du ins Rechenzentrum des Monsters hinab." },
    "1-K": { name: "Spaghetti-Code-Monster", time: "Rechenzentrum", bossName: "Spaghetti-Code-Monster", lead: "Das Monster, das Ela entführt hat, ist in diesem Rechenzentrum. Code, den jahrelang niemand angefasst hat, ist lebendig geworden. Schieß mit dem Debugger oder spring ihm auf den Kopf." },
    "2-1": { name: "Nacht-Überstunden", time: "21:00", lead: "Der Zettel im Käfig hatte recht: Ela ist auf dem Nachtserver. Während die Stadt schläft, jagst du Bugs." },
    "2-2": { name: "Lasttest", time: "23:10", lead: "Jemand hat einen Lasttest auf der Prod gestartet. Bugs kommen in Schwärmen; verliere nicht deine Feuerkraft." },
    "2-3": { name: "Hotfix-Nacht", time: "01:30", lead: "Ein Hotfix um Mitternacht. Springe über Wolken und Schreibtische nach vorn." },
    "2-4": { name: "Serverraum", time: "03:00", lead: "Der letzte Raum vor dem nächtlichen Rechenzentrum. Die Racks sind hoch, die Stacheln scharf. Ela ist ganz nah." },
    "2-K": { name: "Legacy-Code-Monster", time: "Nächtliches Rechenzentrum", bossName: "Legacy-Code-Monster", lead: "{ad}, Ela ist im Käfig. Das Monster ist schneller und wirft drei Bugs gleichzeitig. Die letzte Schlacht." }
  },
  ar: {
    "1-1": { name: "اجتماع الصباح", time: "09:30", lead: "{ad}، انتهى الاجتماع وحصلت على قهوتك. اقفز على رؤوس الحشرات، واضرب الصناديق من الأسفل. وفي النهاية أنزل العلم وادخل المكتب." },
    "1-2": { name: "منتصف السبرنت", time: "14:00", lead: "لا تطأ صراعات الدمج الشوكية البنفسجية؛ لا تُهزم إلا بالنار. خوادم السحابة تنقلك إلى الضفة الأخرى." },
    "1-3": { name: "مراجعة الشيفرة", time: "16:30", lead: "التعليقات تتساقط. التقط المصحح؛ وإن وجدت البطة تصبح محصناً لبضع ثوانٍ." },
    "1-4": { name: "الجمعة ٥:٥٩ م", time: "النشر الأخير", lead: "يكاد ينتهي يوم العمل. السحب تهبط وتصعد، والحشرات في كل مكان. بعد هذه المرحلة ستنزل إلى مركز بيانات الوحش." },
    "1-K": { name: "وحش الشيفرة السباغيتي", time: "مركز البيانات", bossName: "وحش الشيفرة السباغيتي", lead: "الوحش الذي اختطف Ela في مركز البيانات هذا. شيفرة لم يمسّها أحد لسنوات قد استفاقت. أطلق النار بالمصحح أو اقفز فوق رأسه." },
    "2-1": { name: "العمل الليلي الإضافي", time: "21:00", lead: "كانت رسالة القفص صحيحة: Ela في خادم الليل. بينما تنام المدينة، أنت تطارد الأخطاء." },
    "2-2": { name: "اختبار التحميل", time: "23:10", lead: "أحدهم بدأ اختبار تحميل على الإنتاج. الأخطاء تأتي في أسراب؛ لا تفقد قوة نارك." },
    "2-3": { name: "ليلة الإصلاح العاجل", time: "01:30", lead: "إصلاح عاجل في منتصف الليل. تقدّم بالقفز بين السحب والمكاتب." },
    "2-4": { name: "غرفة الخوادم", time: "03:00", lead: "الغرفة الأخيرة قبل مركز بيانات الليل. الرفوف عالية والأشواك حادة. Ela قريبة جداً." },
    "2-K": { name: "وحش الشيفرة القديمة", time: "مركز بيانات الليل", bossName: "وحش الشيفرة القديمة", lead: "{ad}، Ela في القفص. الوحش أسرع ويرمي ثلاثة أخطاء دفعة واحدة. المعركة الأخيرة." }
  },
  zh: {
    "1-1": { name: "晨会", time: "09:30", lead: "{ad}，晨会结束，咖啡到手。跳到 bug 头上，从下面顶箱子。最后降下旗帜，走进办公室。" },
    "1-2": { name: "冲刺中途", time: "14:00", lead: "别踩紫色的多刺合并冲突；只有射击才能打败它们。云服务器会载你过河。" },
    "1-3": { name: "代码审查", time: "16:30", lead: "评论如雨点般落下。拿起调试器；找到鸭子就能无敌几秒。" },
    "1-4": { name: "周五 17:59", time: "最后一次部署", lead: "快到下班时间了。云起云落，bug 遍地。过了这关，你就要下到怪兽的数据中心。" },
    "1-K": { name: "意大利面代码怪兽", time: "数据中心", bossName: "意大利面代码怪兽", lead: "抓走 Ela 的怪兽就在这个数据中心。多年无人触碰的代码活了过来。用调试器射击，或者跳到它头上。" },
    "2-1": { name: "夜间加班", time: "21:00", lead: "笼子里的纸条没错：Ela 在夜间服务器上。城市沉睡时，你在猎杀 bug。" },
    "2-2": { name: "压力测试", time: "23:10", lead: "有人对生产环境发起了压力测试。bug 成群结队而来；别丢了你的火力。" },
    "2-3": { name: "热修复之夜", time: "01:30", lead: "午夜热修复。在云朵和办公桌之间跳跃前行。" },
    "2-4": { name: "服务器机房", time: "03:00", lead: "通往夜间数据中心的最后一间房。机架高耸，尖刺锋利。Ela 就在附近。" },
    "2-K": { name: "遗留代码怪兽", time: "夜间数据中心", bossName: "遗留代码怪兽", lead: "{ad}，Ela 在笼子里。怪兽更快，还会一次扔出三个 bug。最终之战。" }
  }
};

/* ---------- NPC replikleri ---------- */
const I18N_NPCS = {
  en: {
    "1-1": ["Intern: Dude, are we pushing straight to prod?", "Cat: Meow. (I slept on your keyboard.)"],
    "1-2": ["PM: This fits into this sprint too, right?", "Designer: Should we move the button 2 pixels left?"],
    "1-3": ["Senior: LGTM. I didn't read the code, though.", "Client: Can we make the logo a little bigger?"],
    "1-4": ["DevOps: A Friday deploy? I'm out.", "Cat: Meow. (The server is warm, I'm sleeping here.)"],
    "2-1": ["Security: What are you doing in the office at this hour?", "Intern: I just came to grab some coffee..."],
    "2-2": ["PM: Who started the load test? Not me.", "DevOps: The logs are on fire, I'll put the tea on."],
    "2-3": ["Client: It's midnight, but I have one urgent request.", "Cat: Meow. (The night shift is mine.)"],
    "2-4": ["Senior: I wrote this code in 2014. Don't touch it.", "Designer: Dark mode is perfect for the night."]
  },
  de: {
    "1-1": ["Praktikant: Boss, pushen wir direkt in die Prod?", "Katze: Miau. (Ich hab auf der Tastatur geschlafen.)"],
    "1-2": ["PM: Das passt auch noch in den Sprint, oder?", "Designer: Verschieben wir den Button 2 Pixel nach links?"],
    "1-3": ["Senior: LGTM. Den Code hab ich aber nicht gelesen.", "Kunde: Können wir das Logo etwas größer machen?"],
    "1-4": ["DevOps: Deploy am Freitag? Ich bin raus.", "Katze: Miau. (Der Server ist warm, ich liege hier.)"],
    "2-1": ["Sicherheit: Was machst du um diese Zeit im Büro?", "Praktikant: Ich wollte nur Kaffee holen..."],
    "2-2": ["PM: Wer hat den Lasttest gestartet? Ich nicht.", "DevOps: Die Logs brennen, ich mach erstmal Tee."],
    "2-3": ["Kunde: Es ist Mitternacht, aber ich habe eine dringende Bitte.", "Katze: Miau. (Die Nachtschicht gehört mir.)"],
    "2-4": ["Senior: Diesen Code hab ich 2014 geschrieben. Nicht anfassen.", "Designer: Dark Mode ist perfekt für die Nacht."]
  },
  ar: {
    "1-1": ["المتدرب: يا أخي، هل ندفع مباشرة إلى الإنتاج؟", "القطة: مواء. (نمت على لوحة المفاتيح.)"],
    "1-2": ["مدير المنتج: هذا يتسع في السبرنت أيضاً، صحيح؟", "المصمم: هل نحرك الزر بكسلين إلى اليسار؟"],
    "1-3": ["المطور المخضرم: LGTM. لكنني لم أقرأ الشيفرة.", "العميل: هل يمكن أن نجعل الشعار أكبر قليلاً؟"],
    "1-4": ["الديف أوبس: نشر يوم الجمعة؟ أنا غير موجود.", "القطة: مواء. (الخادم دافئ، سأنام هنا.)"],
    "2-1": ["الأمن: ماذا تفعل في المكتب في هذه الساعة؟", "المتدرب: جئت فقط لأخذ القهوة..."],
    "2-2": ["مدير المنتج: من بدأ اختبار التحميل؟ لست أنا.", "الديف أوبس: السجلات تحترق، سأصنع شاياً."],
    "2-3": ["العميل: منتصف الليل، لكن لدي طلب عاجل.", "القطة: مواء. (وردية الليل لي.)"],
    "2-4": ["المخضرم: كتبت هذه الشيفرة في 2014. لا تلمسها.", "المصمم: الوضع الداكن مثالي لليل."]
  },
  zh: {
    "1-1": ["实习生：哥，我们直接推到生产环境吗？", "猫：喵。（我在键盘上睡了。）"],
    "1-2": ["产品经理：这个也塞得进这个冲刺，对吧？", "设计师：按钮往左移 2 像素怎么样？"],
    "1-3": ["资深工程师：LGTM。不过我没看代码。", "客户：能把 logo 再放大一点吗？"],
    "1-4": ["运维：周五部署？我不干。", "猫：喵。（服务器很暖和，我要睡这儿。）"],
    "2-1": ["保安：这个点你在办公室干什么？", "实习生：我只是来拿咖啡的……"],
    "2-2": ["产品经理：谁发起的压力测试？反正不是我。", "运维：日志着火了，我先泡杯茶。"],
    "2-3": ["客户：虽然是半夜，但我有个紧急需求。", "猫：喵。（夜班是我的。）"],
    "2-4": ["资深工程师：这代码是我 2014 年写的。别碰。", "设计师：深色模式正适合夜晚。"]
  }
};

/* ---------- reklam panoları (3. satır e-posta, çevrilmez) ---------- */
const I18N_ADS = {
  en: {
    "1-1": ["FULL-STACK DEVELOPER", "Full-time · Freelance"],
    "1-2": ["SPRINT NOT FITTING?", "Freelance support for your team"],
    "1-3": ["NEED A CODE REVIEW?", "Next.js · Node.js · PHP"],
    "1-4": ["FRIDAY DEPLOY?", "Send an email first"],
    "1-K": ["WANTED", "Developer who untangles spaghetti code"],
    "2-1": ["LET ME JOIN YOUR TEAM", "Open to full-time Full-Stack roles"],
    "2-2": ["LOAD TEST INCOMING?", "Let's build systems that scale"],
    "2-3": ["URGENT HOTFIX?", "Freelance support is one email away"],
    "2-4": ["SERVER SETUP", "Coolify · Dokploy · DevOps"],
    "2-K": ["HIRING", "Full-Stack dev who modernizes legacy code"]
  },
  de: {
    "1-1": ["FULL-STACK-ENTWICKLER", "Vollzeit · Freelance"],
    "1-2": ["SPRINT PASST NICHT?", "Freelance-Support für dein Team"],
    "1-3": ["CODE REVIEW NÖTIG?", "Next.js · Node.js · PHP"],
    "1-4": ["FREITAGS-DEPLOY?", "Schreib zuerst eine Mail"],
    "1-K": ["GESUCHT", "Entwickler, der Spaghetti-Code entwirrt"],
    "2-1": ["LASS MICH INS TEAM", "Offen für Vollzeit-Full-Stack-Rollen"],
    "2-2": ["LASTTEST IM ANMARSCH?", "Bauen wir Systeme, die skalieren"],
    "2-3": ["DRINGENDER HOTFIX?", "Freelance-Support ist nur eine Mail entfernt"],
    "2-4": ["SERVER-SETUP", "Coolify · Dokploy · DevOps"],
    "2-K": ["STELLENAUSSCHREIBUNG", "Full-Stack-Dev, der Legacy-Code modernisiert"]
  },
  ar: {
    "1-1": ["مطور FULL-STACK", "بدوام كامل · عمل حر"],
    "1-2": ["السبرنت لا يكفي؟", "دعم حر لفريقك"],
    "1-3": ["تحتاج مراجعة شيفرة؟", "Next.js · Node.js · PHP"],
    "1-4": ["نشر يوم الجمعة؟", "أرسل بريداً أولاً"],
    "1-K": ["مطلوب", "مطور يفك شيفرة السباغيتي"],
    "2-1": ["دعني أنضم إلى فريقك", "متاح لوظائف Full-Stack بدوام كامل"],
    "2-2": ["اختبار تحميل قادم؟", "لنبنِ أنظمة قابلة للتوسع"],
    "2-3": ["إصلاح عاجل؟", "الدعم الحر على بُعد بريد واحد"],
    "2-4": ["إعداد الخوادم", "Coolify · Dokploy · DevOps"],
    "2-K": ["توظيف", "مطور Full-Stack يحدّث الشيفرة القديمة"]
  },
  zh: {
    "1-1": ["全栈开发者", "全职 · 自由职业"],
    "1-2": ["冲刺赶不完？", "为你的团队提供自由职业支援"],
    "1-3": ["需要代码审查？", "Next.js · Node.js · PHP"],
    "1-4": ["周五部署？", "先发封邮件"],
    "1-K": ["招募", "能理清意大利面代码的开发者"],
    "2-1": ["让我加入你的团队", "接受全职全栈职位"],
    "2-2": ["压力测试来了？", "一起来做能扩展的系统"],
    "2-3": ["紧急热修复？", "自由职业支持只差一封邮件"],
    "2-4": ["服务器搭建", "Coolify · Dokploy · DevOps"],
    "2-K": ["招聘", "擅长改造遗留代码的全栈开发者"]
  }
};

/* ---------- düşman bilgileri ---------- */
const I18N_ENEMY = {
  en: {
    bug: ["Bug", "Stomp on it from above."],
    spiky: ["Merge conflict", "Don't step on it. Beat it with fire or the duck."],
    flaky: ["Flaky test", "It flies, sometimes visible, sometimes gone. Can be stomped."],
    leak: ["Memory leak", "Hops toward you. Stomp its head."],
    loop: ["Infinite loop", "Spins fast, can't be stomped. Stop it with fire."]
  },
  de: {
    bug: ["Bug", "Spring von oben drauf."],
    spiky: ["Merge-Konflikt", "Nicht drauftreten. Mit Feuer oder der Ente besiegen."],
    flaky: ["Flaky Test", "Fliegt, mal sichtbar, mal weg. Kann zertreten werden."],
    leak: ["Memory Leak", "Hüpft auf dich zu. Spring auf seinen Kopf."],
    loop: ["Endlosschleife", "Dreht sich schnell, nicht zertretbar. Mit Feuer stoppen."]
  },
  ar: {
    bug: ["خطأ برمجي", "اقفز فوقه لسحقه."],
    spiky: ["صراع دمج", "لا تطأه. اهزمه بالنار أو بالبطة."],
    flaky: ["اختبار متقلب", "يطير، يظهر حيناً ويختفي حيناً. يمكن سحقه بالقفز."],
    leak: ["تسريب ذاكرة", "يقفز نحوك. اطأ رأسه."],
    loop: ["حلقة لا نهائية", "يدور بسرعة ولا يُصرع بالقفز. أوقفه بالنار."]
  },
  zh: {
    bug: ["Bug", "从上面踩扁它。"],
    spiky: ["合并冲突", "别踩它。用射击或鸭子打败。"],
    flaky: ["不稳定测试", "会飞，时而出现时而消失。可以踩。"],
    leak: ["内存泄漏", "朝你跳来。踩它的头。"],
    loop: ["死循环", "高速旋转，不能踩。用射击阻止。"]
  }
};

/* ---------- hikâye sahneleri ---------- */
const I18N_STORY = {
  en: [
    { kicker: "Friday · 5:58 PM", title: "The last push", lead: "Two minutes until the workday ends. Ela wrote her final commit and pushed to production without asking anyone." },
    { kicker: "Friday · 5:59 PM", title: "The deploy blew up", lead: "The screen turned red. Bugs began pouring out of the monitor, each one angrier than the last." },
    { kicker: "Friday · 6:00 PM", title: "Ela was taken!", lead: "The leader of the bugs, the Spaghetti Code Monster, appeared. It grabbed Ela and dragged her to the data center beneath the city." }
  ],
  de: [
    { kicker: "Freitag · 17:58", title: "Der letzte Push", lead: "Zwei Minuten bis zum Feierabend. Ela schrieb ihren letzten Commit und pushte in die Produktion, ohne jemanden zu fragen." },
    { kicker: "Freitag · 17:59", title: "Das Deploy ist geplatzt", lead: "Der Bildschirm wurde rot. Aus dem Monitor begannen Bugs zu quellen, einer wütender als der andere." },
    { kicker: "Freitag · 18:00", title: "Ela wurde entführt!", lead: "Der Anführer der Bugs, das Spaghetti-Code-Monster, erschien. Es packte Ela und schleppte sie ins Rechenzentrum unter der Stadt." }
  ],
  ar: [
    { kicker: "الجمعة · ٥:٥٨ م", title: "الدفعة الأخيرة", lead: "تبقّى دقيقتان على نهاية الدوام. كتبت Ela آخر commit لها ودفعت إلى الإنتاج دون أن تسأل أحداً." },
    { kicker: "الجمعة · ٥:٥٩ م", title: "انفجر النشر", lead: "تحوّلت الشاشة إلى الأحمر. بدأت الأخطاء تتدفق من الشاشة، كل واحد أغضب من سابقه." },
    { kicker: "الجمعة · ٦:٠٠ م", title: "اختُطفت Ela!", lead: "ظهر زعيم الأخطاء: وحش الشيفرة السباغيتي. اختطف Ela وجرّها إلى مركز البيانات تحت المدينة." }
  ],
  zh: [
    { kicker: "周五 · 17:58", title: "最后一次推送", lead: "距离下班还有两分钟。Ela 写下最后一个 commit，没问任何人就推送到了生产环境。" },
    { kicker: "周五 · 17:59", title: "部署炸了", lead: "屏幕变红了。bug 开始从显示器里涌出，一只比一只凶。" },
    { kicker: "周五 · 18:00", title: "Ela 被抓走了！", lead: "bug 的首领——意大利面代码怪兽现身了。它抓走 Ela，拖进了城市地下的数据中心。" }
  ]
};

/* ---------- gizli sırlar ---------- */
const I18N_EGGS = {
  en: { block: "Invisible block", rain: "Coffee rain", duck: "Rubber duck debugging", ela: "Roles swapped", sudo: "sudo mode" },
  de: { block: "Unsichtbarer Block", rain: "Kaffee-Regen", duck: "Gummienten-Debugging", ela: "Rollen getauscht", sudo: "sudo-Modus" },
  ar: { block: "الصندوق الخفي", rain: "مطر القهوة", duck: "تصحيح البطة المطاطية", ela: "تبدّلت الأدوار", sudo: "وضع sudo" },
  zh: { block: "隐形方块", rain: "咖啡雨", duck: "小黄鸭调试法", ela: "角色互换", sudo: "sudo 模式" }
};

/* ---------- yardımcılar ---------- */
function T(key) {
  const tbl = I18N[LANG];
  let s = tbl && Object.prototype.hasOwnProperty.call(tbl, key) ? tbl[key] : key;
  for (let i = 1; i < arguments.length; i++) s = s.split("{" + (i - 1) + "}").join(String(arguments[i]));
  return s;
}
function lvT(id) {
  const d = LEVELS.find(x => x.id === id);
  const t = I18N_LEVELS[LANG];
  return (t && t[id]) || d;
}
function npcSay(id, idx, fallback) {
  const t = I18N_NPCS[LANG];
  return (t && t[id] && t[id][idx]) || fallback;
}
function adLines(id) {
  const a = ADS[id]; if (!a) return a;
  const t = I18N_ADS[LANG];
  const tr = t && t[id];
  return tr ? [a[0], [tr[0], tr[1], a[1][2]], a[2]] : a;
}
function enemyT(type) {
  const t = I18N_ENEMY[LANG];
  return (t && t[type]) || ENEMY_INFO[type];
}
function storyT(i) {
  const t = I18N_STORY[LANG];
  return (t && t[i]) || STORY[i];
}
function eggT(id) {
  const t = I18N_EGGS[LANG];
  return (t && t[id]) || EGGS[id];
}

/* ---------- dil değişimi ---------- */
function applyLangStatic() {
  const info = LANG_LIST.find(l => l.id === LANG) || LANG_LIST[0];
  document.documentElement.lang = LANG;
  document.documentElement.dir = info.dir;
  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const setA = (id, attr, txt) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, txt); };
  setA("game", "aria-label", T("Oyun alanı"));
  setA("sLang", "aria-label", T("Dil"));
  setA("bMusic", "aria-label", T("Müzik"));
  setA("bSound", "aria-label", T("Ses"));
  setA("bPause", "aria-label", T("Duraklat"));
  setA("wMusic", "aria-label", T("Müzik"));
  setA("wSound", "aria-label", T("Ses"));
  setA("cL", "aria-label", T("Sola"));
  setA("cR", "aria-label", T("Sağa"));
  setA("cF", "aria-label", T("Ateş et"));
  setA("cJ", "aria-label", T("Zıpla"));
  const fireLbl = document.querySelector("#cF span"); if (fireLbl) fireLbl.textContent = T("ATEŞ");
  const jumpLbl = document.querySelector("#cJ span"); if (jumpLbl) jumpLbl.textContent = T("ZIPLA");
  set("hint", T("Uzun bas, daha yükseğe zıpla"));
  const nameLbl = document.querySelector('label[for="pName"]'); if (nameLbl) nameLbl.textContent = T("Adın");
  const nameIn = document.getElementById("pName"); if (nameIn) nameIn.placeholder = T("Örn. Musa");
  set("bCopy", T("Kopyala"));
  document.querySelectorAll("#sSocial a").forEach(a => {
    const cur = a.getAttribute("aria-label") || "";
    a.setAttribute("aria-label", cur.replace(/\s*\([^)]*\)\s*$/, " (" + T("yeni sekmede açılır") + ")"));
  });
}
function syncLangButtons() {
  const host = document.getElementById("sLang");
  if (!host) return;
  [...host.children].forEach((b, i) => {
    const on = LANG_LIST[i].id === LANG;
    b.setAttribute("aria-pressed", String(on));
  });
}
function buildLangButtons() {
  const host = document.getElementById("sLang");
  if (!host || host.childElementCount) return;
  LANG_LIST.forEach(l => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = l.label; b.lang = l.id;
    b.setAttribute("aria-pressed", String(l.id === LANG));
    b.addEventListener("pointerdown", e => e.stopPropagation());
    b.addEventListener("click", () => setLang(l.id));
    host.append(b);
  });
  syncLangButtons();
}
function setLang(id) {
  if (id === LANG || !LANG_LIST.some(l => l.id === id)) return;
  LANG = id;
  try { localStorage.setItem("dd-lang", id); } catch (e) {}
  const nameEl = document.getElementById("pName");
  const typed = nameEl && nameEl.closest("[hidden]") === null ? nameEl.value : "";
  applyLangStatic(); syncLangButtons();
  if (typeof syncSound === "function") syncSound();
  if (typeof redraw === "function") redraw();
  if (typed) {
    const el = document.getElementById("pName"), form = document.getElementById("sForm");
    if (el && form && !form.hidden) el.value = typed;
  }
}

/* boot: script.js'ten önce yüklenir, DOM bu noktada hazır */
applyLangStatic();
buildLangButtons();

