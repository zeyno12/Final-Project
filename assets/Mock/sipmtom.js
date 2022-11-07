let simptom = [
  {
    image:
      "https://www.saglamaile.az/site/assets/files/11940/burun_qanaxmasi.283x171.png",
    name: "Burun qanaxması",
    content:
      "Sadə dillə desək, burun qanaması burnunuzun içini əhatə edən toxumadan qan xaric olmasıdır. Burun...",
    month: "1 Avqust 2022",
    view: "Baxış sayı: 505",
  },
];

simptom.forEach((simptom) => {
  if (simptom != null) {
    let output_simptom = "";
    output_simptom += `
    <div class="lab_card">
    <div class="lab_image">
      <img src=${simptom.image} alt=${simptom.name} />
    </div>
    <div class="lab_items">
      <h4>${simptom.name}</h4>
      <p>${simptom.content}</p>
      <div class="lab_data">
        <div class="month">
          <p>${simptom.month}</p>
        </div>
        <div class="view">
          <p>${simptom.view}</p>
        </div>
      </div>
    </div>
    </div>
          `;
    let simptomss = document.querySelector(".simptomlar");
    let new_simptomss = document.createElement("div");
    new_simptomss.classList.add("col-lg-4");
    new_simptomss.innerHTML = output_simptom;
    simptomss.append(new_simptomss);
  }
});
