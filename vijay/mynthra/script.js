const products = [
{name:"Stylish Shirt",price:"₹1999"},
{name:"Trendy Dress",price:"₹2499"},
{name:"Casual Shoes",price:"₹1799"},
{name:"Denim Jacket",price:"₹2999"},
{name:"Ethnic Wear",price:"₹1599"},
{name:"Sports Wear",price:"₹1299"},
{name:"Designer Top",price:"₹1899"},
{name:"Winter Hoodie",price:"₹2199"},
];

let container = document.getElementById("products");

products.forEach(p => {

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab">
<h4>${p.name}</h4>
<div class="price">${p.price}</div>
<button class="btn">❤️ Wishlist</button>
`;

container.appendChild(card);

});
