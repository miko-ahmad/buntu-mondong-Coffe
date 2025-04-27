import React, { useState } from "react";
import Card from "./Card";
import coffeeList from "../data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    quantity: 1,
    name: "",
    address: "",
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setOrderInfo({
      quantity: 1,
      name: "",
      address: "",
    });
  };

  const sendMessage = () => {
    const phoneNumber = "6285397731616";
    const totalHarga = selectedProduct.Harga * orderInfo.quantity;
    const message = `Saya ingin memesan ${selectedProduct.name} (${
      selectedProduct.Berat
    }) sebanyak ${
      orderInfo.quantity
    } dengan total harga Rp ${totalHarga.toLocaleString()}. Nama: ${
      orderInfo.name
    }, Alamat: ${orderInfo.address}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <section id="products" className="mx-auto w-full max-w-[1440px] scroll-mt-24 pt-[80px]">
      <div className="mx-[60px] flex flex-col items-center justify-center gap-[41px]">
        <div className="flex flex-col items-center gap-[6px]">
          <p className="font-semibold uppercase text-[#5A4FCF]">
            Produk Kopi Buntu Mondong
          </p>
          <h2 className="text-[28px] font-semibold text-resto-black">
            Kopi Premium dari Buntu Mondong
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
          {coffeeList.map((coffee, index) => (
            <Card
              key={index}
              imgSrc={coffee.image}
              rating="5.0"
              title={coffee.name}
              priceRange={`Rp ${coffee.Harga.toLocaleString()}`}
              berat={coffee.Berat}
              onOrder={() => openModal(coffee)} // Kirim data produk ke Products
            />
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedProduct && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50  z-50">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Pesan {selectedProduct.name} ({selectedProduct.Berat})
              </h3>

              <div className="space-y-4">
                {/* Nama */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1" htmlFor="name">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Masukkan Nama Anda"
                    value={orderInfo.name}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, name: e.target.value })
                    }
                  />
                </div>

                {/* Alamat */}
                <div className="flex flex-col">
                  <label
                    className="text-sm text-gray-700 mb-1"
                    htmlFor="address"
                  >
                    Alamat Pengiriman
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Masukkan Alamat"
                    value={orderInfo.address}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, address: e.target.value })
                    }
                  />
                </div>

                {/* Jumlah */}
                <div className="flex flex-col">
                  <label
                    className="text-sm text-gray-700 mb-1"
                    htmlFor="quantity"
                  >
                    Jumlah
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={orderInfo.quantity}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, quantity: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Tombol */}
              <div className="flex justify-between mt-8 space-x-4">
                <button
                  className="flex-1 bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-400 transition"
                  onClick={closeModal}
                >
                  Batal
                </button>
                <button
                  className="flex-1 bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
                  onClick={sendMessage}
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
