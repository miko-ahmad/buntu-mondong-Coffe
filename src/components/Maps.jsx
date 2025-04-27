import BtnContact from "./BtnContact";

export default function Maps() {
  return (
    <section id="contact" className="mx-auto  w-full max-w-[1440px] scroll-mt-24 pt-[80px]">
      <div className="mx-[60px] flex flex-col md:flex-row items-center justify-center gap-[41px]">
        <div className="flex flex-col lg:flex-row gap-[24px]  lg:gap-[58px]">
          
          {/* Text Section */}
          <div className="flex flex-col md:items-start gap-[6px]">
            <p className="font-semibold uppercase text-[#5A4FCF]">Find Us</p>
            <h2 className="text-[28px] font-semibold text-resto-black text-center md:text-left">
              Kopi Buntu Mondong
            </h2>
            <p className="text-[#656565] text-justify ">
            Kopi Buntu Mondong adalah tempat yang menyajikan kopi dengan cita rasa
              yang khas dan otentik, menggunakan biji kopi pilihan yang diproduksi
              langsung dari daerah sekitar. Dikenal karena suasananya yang nyaman
              dan ramah, serta kopi yang disajikan dengan keahlian tinggi
            </p>
        <span className="mt-4">

            <BtnContact  />
        </span>
          </div>

          {/* Map Section */}
          <div className="w-full max-w-[500px] ">
            <div className="overflow-hidden rounded-3xl ">
              <iframe
                title="Buntu Mondong Coffee"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1395.4650582528407!2d119.90386198823872!3d-3.4283747175668995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d94116c4f09ce85%3A0x46621798f0fca2b7!2sBuntu%20Mondong%20coffee!5e0!3m2!1sid!2sid!4v1744270725545!5m2!1sid!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full min-w-[400px] h-[300px] sm:h-[400px] lg:h-[475px] border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
