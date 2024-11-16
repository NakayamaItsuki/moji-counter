// 入力エリアで文字が変更されるたびに実行
document.getElementById("input-text").addEventListener("input", () => {
    // 入力テキストを取得
    const inputText = document.getElementById("input-text").value;

    // 文字数をカウント
    const charCount = inputText.length;

    // 結果を表示
    document.getElementById("char-count").textContent = `文字数: ${charCount}`;
});
