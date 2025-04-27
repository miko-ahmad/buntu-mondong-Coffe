import { useState } from 'react';
import coffeeList from '../data/products';


export default function CardCoffe() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderInfo, setOrderInfo] = useState({
    quantity: 1,
    name: '',
    address: '',
  });

  const formatRupiah = (angka) => {
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return 'Rp ' + ribuan;
  };
  

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setOrderInfo({
      quantity: 1,
      name: '',
      address: '',
    });
  };

  const sendMessage = (product, orderInfo) => {
    // Ganti dengan nomor WhatsApp tujuan
    // const phoneNumber = '6282158149146';
    const phoneNumber = '6285397731616';

    const message = `Saya ingin memesan ${product.name} (${product.Berat}) sebanyak ${orderInfo.quantity} dengan total harga ${formatRupiah(product.Harga * orderInfo.quantity)}. Nama: ${orderInfo.name}, Alamat: ${orderInfo.address}.`;

    // Buat URL WhatsApp dengan nomor tujuan dan pesan
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Buka halaman WhatsApp dalam tab baru
    window.open(whatsappUrl, '_blank');
    closeModal();
  };


  return (
    <>
    <section id="products" className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-amber-900">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeList.map((coffee, index) => (
              <div key={index} className="bg-amber-100 rounded-2xl shadow-md overflow-hidden">
                <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-1 text-amber-900">{coffee.name}</h4>
                  <p className="text-sm md:text-base text-amber-800 mb-1">{coffee.Berat}</p>
                  <p className="text-base md:text-lg text-amber-800 font-semibold mb-2">{formatRupiah(coffee.Harga)}</p>
                  <button onClick={() => openModal(coffee)} className="bg-amber-900 text-white py-1 px-4 rounded-full text-sm md:text-base hover:bg-amber-800">{coffee.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h4 className="text-xl font-semibold mb-4">Pesan Produk: {selectedProduct.name}</h4>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Jumlah Pesanan</label>
              <input type="number" min="1" value={orderInfo.quantity} onChange={(e) => setOrderInfo({ ...orderInfo, quantity: e.target.value })} className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Nama Pemesan</label>
              <input type="text" value={orderInfo.name} onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Alamat Pengiriman</label>
              <textarea value={orderInfo.address} onChange={(e) => setOrderInfo({ ...orderInfo, address: e.target.value })} className="w-full border px-3 py-2 rounded"></textarea>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Tutup</button>
              <button onClick={() => sendMessage(selectedProduct, orderInfo)} className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800">Kirim Pesanan</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
