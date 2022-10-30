let vitamin = [
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12629/vitamin-h.283x171.jpg",
    name: "Vitamin H və ya Biotin nədir?",
    content:
      "B vitaminləri qrupuna daxil olan B7 vitamini Biotin və ya Vitamin H adlanır. Xüsusilə saç, dırnaq və dəri...",
    month: "16 Sentyabr 2022",
    view: "Baxış sayı: 153",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12464/vitamin-b2.283x171.jpg",
    name: "B2 vitamini və ya Riboflavin faydaları",
    content:
      "Riboflavin (B2 vitamini)  zülal, yağ və karbohidrat metabolizmasında iştirak edən suda həll olunan, bioloji...",
    month: "9 Sentyabr 2022",
    view: "Baxış sayı:200",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12465/vitamin-b3.283x171.jpg",
    name: "B3 vitamini (PP vitamini) nə kimi faydaları var?",
    content:
      "Vitamin B3 (niasin) digər adları PP vitamini, nikotin turşusu- suda həll olan vitamin olduğu üçün depolana...",
    month: "9 Sentyabr 2022",
    view: "Baxış sayı: 209",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12479/vitamin-b5.283x171.jpg",
    name: "B5 vitamini hansı qidaların tərkibində var?",
    content:
      "B5 vitamini və ya pantotenik asit, suda həll oluna bilən vitaminlər qrupuna aiddir. Adı da bütün heyvan və...",
    month: "9 Sentyabr 2022",
    view: "Baxış sayı: 160",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12286/fosfor.283x171.jpg",
    name: "Fosfor nədir? Hansı qidalarda var?",
    content:
      "Fosfor nədir? Hansı qidaların tərkibində vardır? Fosfor hüceyrə membranlarının qurulmasında və...",
    month: "7 Sentyabr 2022",
    view: "Baxış sayı: 207",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12331/vitamin-b1.283x171.jpg",
    name: "B1 vitamini faydaları nələrdir? Hansı qidalarda var?",
    content:
      "B1 vitamini sağlamlığımız üçün çox vacib olan vitamindir. Tiamin adı ilə də tanınan bu vitamin orqanizmdə..",
    month: "7 Sentyabr 2022",
    view: "Baxış sayı: 227",
  },
  {
    image: "https://www.saglamaile.az/site/assets/files/12349/xrom.283x171.jpg",
    name: "Xrom və şəkərli diabet arasında əlaqə? Xromun faydaları nələrdir?",
    content:
      " Xrom orqanizm üçün zəruri olan, insulin hormonunun işləməsinə kömək edən və karbohidrat, zülal və yağ...",
    month: "7 Sentyabr 2022",
    view: "Baxış sayı: 212",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/12350/vitamin-b6.283x171.jpg",
    name: "B6 vitamini və ya Piridoksin faydaları və çatışmazlığı əlamətləri hansılardır?",
    content:
      "Vitamin B6 (piridoksin)- suda həll olan, immunitet sisteminin və beyin funksiyalarının düzgün işləməsi üçün...",
    month: "7 Sentyabr 2022",
    view: "Baxış sayı: 223",
  },
  {
    image: "https://www.saglamaile.az/site/assets/files/11509/dmir.283x171.jpg",
    name: "Dəmir elementinin orqanizmə faydası və dəmir tərkibli qidalar",
    content:
      "Dəmir bir neçə vacib funksiyanı yerinə yetirən mineraldır, onun əsas funksiyası qırmızı qan...",
    month: "18 Yanvar 2022",
    view: "Baxış sayı: 1039",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11398/selen.283x171.png",
    name: "Selen nədir? Hansı qidaların tərkibində vardır?",
    content:
      "Selen immun sisteminin, DNT funksiyalarının və tiroid vəzinin sağlam işləməsi üçün lazım olan çox vacib...",
    month: "13 Noyabr 2021",
    view: "Baxış sayı: 3863",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11384/vitamin_b12.283x171.jpg",
    name: "Vitamin B12 nədir? Hansı qidaların tərkibində vardır?",
    content:
      "B12 vitamini bədənimizdə istehsal olunmayan və xaricdən alınması lazım olan vacib bir vitamindir. Bundan...",
    month: "6 Noyabr 2021",
    view: "Baxış sayı: 2586",
  },
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11126/maqnezium.283x171.jpg",
    name: "Maqnezium (Mg) nədir? Maqnezium tərkibli qidalar hansılardır?",
    content:
      "Maqnezium sümüklərin inkişafı üçün vacib bir mineraldır. Kalsiumla qarşılıqlı təsir edərək ferment...",
    month: "9 Sentyabr 2021",
    view: "Baxış sayı: 6370",
  },
];

vitamin.forEach((vitamin) => {
  if (vitamin != null) {
    let output_vitamin = "";
    output_vitamin += `
      <div class="lab_card">
      <div class="lab_image">
        <img src=${vitamin.image} alt=${vitamin.name} />
      </div>
      <div class="lab_items">
        <h4>${vitamin.name}</h4>
        <p>${vitamin.content}</p>
        <div class="lab_data">
          <div class="month">
            <p>${vitamin.month}</p>
          </div>
          <div class="view">
            <p>${vitamin.view}</p>
          </div>
        </div>
      </div>
      </div>
      `;
    let mikro = document.querySelector(".tabvitamin");
    let new_mikro = document.createElement("div");
    new_mikro.classList.add("col-lg-4");
    new_mikro.innerHTML = output_vitamin;
    mikro.append(new_mikro);
  }
});
