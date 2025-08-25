function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("เพิ่ม " + name + " ลงตะกร้าแล้ว!");
}

// แสดงตะกร้าใน cart.html
if (document.getElementById("cart-list")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-list");
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<p>ตะกร้าของคุณว่างเปล่า</p>";
  } else {
    cart.forEach(item => {
      let div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>ราคา: ${item.price} บาท</p>
        <p>จำนวน: ${item.quantity}</p>
        <p>รวม: ${item.price * item.quantity} บาท</p>
      `;
      cartList.appendChild(div);
      total += item.price * item.quantity;
    });
    document.getElementById("total").innerText = "💰 ราคารวม: " + total + " บาท";
  }
}
