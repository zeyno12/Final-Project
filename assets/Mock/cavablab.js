let cavab = [
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11419/xaric.283x171.png",
    name: "Türkiyəyə göndərilən analizləri üçün şərtlər",
    content:
      "Sağlam Ailə laboratoriyasında işlənilməyən analizləri Türkiyənin qabaqcıl laboratoriyalarından Acıbadem,...",
    month: "26 Noyabr 2021",
    view: "Baxış sayı: 775",
  },
  {
    image: "https://www.saglamaile.az/site/assets/files/11410/usm.283x171.png",
    name: "USM müayinələri üçün necə yaxınlaşmaq lazımdır?",
    content:
      "Abdominal (qarın boşluğu) ultrasəs müayinəsi üçün pasiyent acqarına, sidik kisəsi dolu...",
    month: "20 Noyabr 2021",
    view: "Baxış sayı: 894",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11411/irriqoskopiya.283x171.png",
    name: "İrriqoskopiya müayinəsinə gəlmədən öncə nələri bilmək vacibdir?",
    content:
      "Pasient 24 saat ərzində qaz əmələ gətirən qidalar (qara çörək, süd, kartof, kələm, alma, üzüm...",
    month: "20 Noyabr 2021",
    view: "Baxış sayı: 774",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11412/histerosalpinqoqrafiya.283x171.png",
    name: "Histerosalpinqoqrafiya müayinəsinin şərtləri nələrdir?",
    content:
      "Uşaqlığın anatomik dəyişikliyini və fallop borularının keçiriciliyinin...",
    month: "20 Noyabr 2021",
    view: "Baxış sayı: 905",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11413/bakterioloji.283x171.png",
    name: "Bakterioloji müayinələr üçün tələblər nələrdir?",
    content:
      "Bakterioloji müayinə üçün materialların götürülməsinə dair ümumi tələblər: Müayinə üçün...",
    month: "20 Noyabr 2021",
    view: "Baxış sayı: 1076",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11404/spermoqramma_srti.283x171.png",
    name: "Spermoqramma analizi üçün necə yaxınlaşmaq lazımdır?",
    content:
      "Spermoqramma kişi fertilliyinin (mayalandırma qabilliyyətinin)  qiymətləndirilməsi üçün aparılan...",
    month: "19 Sentyabr 2021",
    view: "Baxış sayı: 978",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11405/urogenital.283x171.png",
    name: "Urogenital nahiyədən götürülən yaxma analizinin şərtləri nələrdir?",
    content:
      " Qadınlarda: Cinsi pəhriz  - 2 gün Son sidik  ifrazından 3 saat keçdikdən...",
    month: "19 Noyabr 2021",
    view: "Baxış sayı: 2632",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11406/prisca.283x171.png",
    name: "PRİSCA müayinəsi üçün necə yaxınlaşmaq lazımdır?",
    content:
      "2 li test Hamiləliyin 11 -13həftə + 6 günədək yoxlanılır.   24 saat ərzində olunmuş USM nəticəsi...",
    month: "19 Noyabr 2021",
    view: "Baxış sayı: 947",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11407/hormonal.283x171.png",
    name: "Hormonal analizlər necə verilməlidir?",
    content:
      "Hormon müayinələri üçün qan nümunələri səhər saatlarında acqarına götürülməlidir. Qan nümunəsinin...",
    month: "19 Noyabr 2021",
    view: "Baxış sayı: 4232",
  },
  {
    image: "https://www.saglamaile.az/site/assets/files/10365/ncis.283x171.png",
    name: "Nəcisin ümumi analizi üçün necə yaxınlaşmalı?",
    content:
      "Koproloji müayinəyə materialın toplanmasından öncə təmizləyici və müalicəvi imalələr etmək, işlədici...",
    month: "1 Mart 2021",
    view: "Baxış sayı: 8089",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/10366/sutqaliq_sidik.283x171.png",
    name: "Sutkalıq sidik necə toplanmalıdır?",
    content:
      "Sidik 24 saat ərzində  sterilizasıya olunmuş  balona yığılır.   Səhər ilkin sidik atılır, vaxt qeyd...",
    month: "1 Mart 2021",
    view: "Baxış sayı: 1861",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/10368/covid_ucus_n_cox_veriln.283x171.png",
    name: "Covid 19 analizi üçün necə yaxınlaşmaq lazımdır?",
    content:
      "Müayinə şərtləri : Qeyd edildiyiniz saatda müayinəyə gələn zaman ac qarına və ya son qida qəbulundan ( su...",
    month: "1 Mart 2021",
    view: "Baxış sayı: 1913",
  },
];

cavab.forEach((cavab) => {
  if (cavab != null) {
    let output_cavab = "";
    output_cavab += `
    <div class="lab_card">
    <div class="lab_image">
      <img src=${cavab.image} alt=${cavab.name} />
    </div>
    <div class="lab_items">
      <h4>${cavab.name}</h4>
      <p>${cavab.content}</p>
      <div class="lab_data">
        <div class="month">
          <p>${cavab.month}</p>
        </div>
        <div class="view">
          <p>${cavab.view}</p>
        </div>
      </div>
    </div>
    </div>
    `;
    let elem = document.querySelector(".tabcavab");
    let new_elem = document.createElement("div");
    new_elem.classList.add("col-lg-4");
    new_elem.innerHTML = output_cavab;
    if (elem) {
      elem.append(new_elem);
    }
  }
});
