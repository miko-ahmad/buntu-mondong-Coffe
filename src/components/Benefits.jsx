import ForkKnife from '../assets/icons/fork-knife.svg'
import PathRightBlack from '../assets/icons/path-right-black.svg'
import MoneySvg from '../assets/icons/decor/money-bag.svg'
import Discount from '../assets/icons/decor/discount.svg'
import Charm from '../assets/icons/decor/charm.svg'

export default function Benefits() {
    return (
        <section id="about" className="mx-auto  w-full max-w-[1440px] scroll-mt-24 pt-[80px]">
            <div className="mx-[60px] flex flex-col items-center justify-center gap-[41px]">
                <div className="flex flex-col items-center gap-[6px]">
                    <p className="font-semibold uppercase text-[#5A4FCF]">Keunggulan Produk Kami</p>
                    <h2 className="text-[28px] font-semibold text-resto-black">Kenapa Harus Kopi Buntu Mondong?</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <a href="">
                        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white">
                            <div className="flex flex-col items-center px-6 pt-6">
                                <div className="shrink-0 overflow-hidden rounded-full bg-resto-bright-yellow/15 p-4">
                                    <img className="h-full w-full object-contain" src={Discount} alt="Harga Terjangkau" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-resto-black">Harga Terjangkau</h3>
                                <p className="mt-3 text-center text-[#656565]">Nikmati kopi premium dengan harga yang ramah di kantong.</p>
                            </div>
                            <div className="relative flex items-center justify-center p-6 before:absolute before:-bottom-20 before:h-full before:w-full before:bg-resto-bright-yellow before:transition-all before:duration-300 before:content-[''] before:group-hover:bottom-0">
                                <span className="relative font-semibold text-resto-black">Lihat Detail</span>
                                <div className="relative h-6 w-6 shrink-0 overflow-hidden">
                                    <img className="h-full w-full object-contain" src={PathRightBlack} alt="Arrow" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white">
                            <div className="flex flex-col items-center px-6 pt-6">
                                <div className="shrink-0 overflow-hidden rounded-full bg-resto-bright-yellow/15 p-4">
                                    <img className="h-full w-full object-contain" src={ForkKnife} alt="Rasa Autentik" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-resto-black">Rasa Autentik</h3>
                                <p className="mt-3 text-center text-[#656565]">Diproses dari biji kopi terbaik langsung dari Buntu Mondong.</p>
                            </div>
                            <div className="relative flex items-center justify-center p-6 before:absolute before:-bottom-20 before:h-full before:w-full before:bg-resto-bright-yellow before:transition-all before:duration-300 before:content-[''] before:group-hover:bottom-0">
                                <span className="relative font-semibold text-resto-black">Lihat Detail</span>
                                <div className="relative h-6 w-6 shrink-0 overflow-hidden">
                                    <img className="h-full w-full object-contain" src={PathRightBlack} alt="Arrow" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white">
                            <div className="flex flex-col items-center px-6 pt-6">
                                <div className="shrink-0 overflow-hidden rounded-full bg-resto-bright-yellow/15 p-4">
                                    <img className="h-full w-full object-contain" src={MoneySvg} alt="Tanpa Campuran" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-resto-black">Tanpa Campuran</h3>
                                <p className="mt-3 text-center text-[#656565]">100% kopi murni tanpa bahan pengawet atau campuran lain.</p>
                            </div>
                            <div className="relative flex items-center justify-center p-6 before:absolute before:-bottom-20 before:h-full before:w-full before:bg-resto-bright-yellow before:transition-all before:duration-300 before:content-[''] before:group-hover:bottom-0">
                                <span className="relative font-semibold text-resto-black">Lihat Detail</span>
                                <div className="relative h-6 w-6 shrink-0 overflow-hidden">
                                    <img className="h-full w-full object-contain" src={PathRightBlack} alt="Arrow" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white">
                            <div className="flex flex-col items-center px-6 pt-6">
                                <div className="shrink-0 overflow-hidden rounded-full bg-resto-bright-yellow/15 p-4">
                                    <img className="h-full w-full object-contain" src={Charm} alt="Aroma Khas" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-resto-black">Aroma Khas</h3>
                                <p className="mt-3 text-center text-[#656565]">Aroma kopi kuat & khas pegunungan yang menggoda selera.</p>
                            </div>
                            <div className="relative flex items-center justify-center p-6 before:absolute before:-bottom-20 before:h-full before:w-full before:bg-resto-bright-yellow before:transition-all before:duration-300 before:content-[''] before:group-hover:bottom-0">
                                <span className="relative font-semibold text-resto-black">Lihat Detail</span>
                                <div className="relative h-6 w-6 shrink-0 overflow-hidden">
                                    <img className="h-full w-full object-contain" src={PathRightBlack} alt="Arrow" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
