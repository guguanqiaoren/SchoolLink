const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".category button");
const cards = document.querySelectorAll(".recruit-card");

let selectedCategory = "全部";

// 募集カードを表示・非表示にする関数
function filterCards() {

    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();
        const category = card.dataset.category;

        const matchKeyword = text.includes(keyword);

        const matchCategory =
            selectedCategory === "全部" ||
            category === selectedCategory;

        if (matchKeyword && matchCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// 検索欄に文字を入力したら実行
searchInput.addEventListener("input", filterCards);

// カテゴリーボタンを押したら実行
buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterCards();

    });

});