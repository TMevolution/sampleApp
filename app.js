<script>
  window.onload = function () {
    // おみくじ
    // この順番が良い順番らしい（吉と中吉が逆になることも）
    const list = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];

    document.getElementById("button").onclick = function () {
      var random = Math.floor(Math.random() * list.length);
      document.getElementById("result").textContent = list[random];
    }
  }
</script>