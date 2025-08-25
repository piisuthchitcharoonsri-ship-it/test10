<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ร้านขายของ</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>🌸 ร้านพาสเทลช็อป 🌸</h1>
    <nav>
      <a href="cart.html">🛒 ไปหน้าตะกร้า</a>
    </nav>
  </header>

  <main>
    <section class="product-list">
      <div class="product">
        <img src="https://i.ibb.co/tmHQWzq/shirt.jpg" alt="เสื้อยืด">
        <h2>เสื้อยืด</h2>
        <p>ราคา: 250 บาท</p>
        <button onclick="addToCart(1, 'เสื้อยืด', 250)">ใส่ตะกร้า</button>
      </div>
      <div class="product">
        <img src="https://i.ibb.co/Yc3jLkM/jeans.jpg" alt="กางเกงยีนส์">
        <h2>กางเกงยีนส์</h2>
        <p>ราคา: 500 บาท</p>
        <button onclick="addToCart(2, 'กางเกงยีนส์', 500)">ใส่ตะกร้า</button>
      </div>
      <div class="product">
        <img src="https://i.ibb.co/3MBN5C4/headphone.jpg" alt="หูฟัง">
        <h2>หูฟัง</h2>
        <p>ราคา: 800 บาท</p>
        <button onclick="addToCart(3, 'หูฟัง', 800)">ใส่ตะกร้า</button>
      </div>
      <div class="product">
        <img src="https://i.ibb.co/wwR3Bwm/phone.jpg" alt="โทรศัพท์">
        <h2>โทรศัพท์</h2>
        <p>ราคา: 10,000 บาท</p>
        <button onclick="addToCart(4, 'โทรศัพท์', 10000)">ใส่ตะกร้า</button>
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
