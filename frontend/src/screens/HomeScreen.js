import axios from "axios";
import Rating from "../components/Rating";
import { getProducts } from '../api';
const HomeScreen = {
  render: async () => {
    const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
    return `
    <ul class="products">
      ${products
        .map(
          (product) => `
            <li>
              <div class="product">
                <a href="/#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-info">
                  <div class="product-name">
                    <a href="/#/product/${product._id}">
                        <span>${product.name}</span>
                    </a>
                  </div>
                  <div class="product-rating">
                    ${Rating.render({
                      value: product.rating,
                      text: `${product.numReviews} reviews`,
                    })}
                  </div>
                  <div class="product-brand">
                    ${product.brand}
                  </div>
                  <div class="product-price">
                    $${product.price}
                  </div>
                </div>
              </div>
            </li>
            <section class="about">
              <p>${product.name}</p>
              <p class="product-desc">${product.description}</p>

              <div class="about-links">
                  <a href="instagram.com">
                      <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="amazon.com">
                      <i class="fa-brands fa-amazon"></i>
                  </a>
                  <a href="linkedin.com">
                      <i class="fa-brands fa-linkedin"></i>
                  </a>
              </div>
            </section>
      `
        )
        .join("\n")}
        
        
</ul>


    `;
  },
};
export default HomeScreen;
