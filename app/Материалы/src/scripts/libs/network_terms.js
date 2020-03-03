document.addEventListener("DOMContentLoaded", () => {
    const quantity_terms = document.querySelector(".quantity_terms");
    const terms__description = document.querySelectorAll(".terms__description");

    let number = 0;
    const bbb = document.querySelectorAll(".terms__description > b"); // ВСЕ БЛОКИ b

    // let terms = document.querySelectorAll(".terms > div"); // ВСЕ 3 БЛОКА ТЕРМИНОВ ВНУТРИ БЛОКА .terms
    // let protocol = terms[1];
    // let other = terms[2];

    // let protocol_terms = document.querySelectorAll(".protocols > .terms__description");
    // for (let i = 0; i < protocol_terms.length; i++) {
    //     if (protocol_terms[i])
    // }

    bbb.forEach(item => {
        number++;
        item.insertAdjacentText("afterbegin", number + ") ");
    });

    if (terms__description.length % 10 == 1)
        quantity_terms.innerHTML = terms__description.length + " термин";
    if (
        terms__description.length % 10 >= 2 &&
        terms__description.length % 10 <= 4
    )
        quantity_terms.innerHTML = terms__description.length + " термина";
    if (
        terms__description.length % 10 >= 5 ||
        terms__description.length % 10 == 0
    )
        quantity_terms.innerHTML = terms__description.length + " терминов";

});