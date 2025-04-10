export default function Maps() {
  return (
    <section className="py-20 bg-map">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-amber-900">
          Find Us
        </h3>
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Buntu Mondong Coffee"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1395.4650582528407!2d119.90386198823872!3d-3.4283747175668995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d94116c4f09ce85%3A0x46621798f0fca2b7!2sBuntu%20Mondong%20coffee!5e0!3m2!1sid!2sid!4v1744270725545!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
