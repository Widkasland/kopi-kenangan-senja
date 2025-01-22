document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "robusta brazil",
        img: "1.jpg",
        price: 200000,
        diskon: 0,
        rating: 0,
      },
      {
        id: 2,
        name: "beans",
        img: "2.jpg",
        price: 300000,
        diskon: 75000,
        rating: 0,
      },
      {
        id: 3,
        name: "battle",
        img: "3.jpg",
        price: 400000,
        diskon: 65000,
        rating: 0,
      },
      {
        id: 4,
        name: "azil",
        img: "4.jpg",
        price: 500000,
        diskon: 70000,
        rating: 0,
      },
      {
        id: 5,
        name: "robuwerzil",
        img: "5.jpg",
        price: 600000,
        diskon: 75000,
        rating: 0,
      },
      {
        id: 6,
        name: "robuwerrazil",
        img: "6.jpg",
        price: 700000,
        diskon: 0,
        rating: 0,
      },
    ],
    showModal: false,
    selectedProduct: {},
    rateProduct(productId, rating) {
      const product = this.items.find((item) => item.id === productId);
      if (product) {
        product.rating = rating;
        // Simpan rating di sini, misalnya ke server atau local storage
        // Anda dapat menambahkan logika untuk menyimpan rating di sini
      }
    },
    showProductModal(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;

      console.log(this.total);
    },
  });
});
