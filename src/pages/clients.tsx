// src/pages/Clients.jsx

const partners = [
  { name: "Chicken story-food franchise client", logo: "/partner/01.jpg" },
  { name: "dailogue digital gallery- Franchise Client of Franchise Media Kerala", logo: "/partner/02.png" },
  { name: "Frapino- franchise partner", logo: "/partner/03.png" },
  { name: "gelato cafe-ice cream franchise client", logo: "/partner/04.png" },
  { name: "Ht wingz - franchise restaurant client", logo: "/partner/05.png" },
  { name: "Grapa’s Burger Lounge – burger franchise client", logo: "/partner/06.jpg" },
  { name: "Chai Habbat – tea franchise client", logo: "/partner/07.jpg" },
  { name: "Crunchy's -franchise client", logo: "/partner/08.jpg" },
  { name: "Cake sudio -Successful franchise outlet developed by Franchise Media in Kerala", logo: "/partner/09.jpg" },
  { name: "Cake lounge -Successful franchise outlet developed by Franchise Media in Kerala", logo: "/partner/010.jpg" },
  { name: "tea studio -best franchise for cafe", logo: "/partner/011.jpg" },
  { name: "Mobile Mate – mobile franchise ", logo: "/partner/012.png" },
  { name: "Naradan’s – Franchise Media client", logo: "/partner/013.jpg" },
  { name: "Nice Cream – ice cream franchise client", logo: "/partner/015.png" },
  { name: "Kiwi Ice Cream – franchise client", logo: "/partner/016.png" },
  { name: "Twist on  softserve & deserve", logo: "/partner/017.png" },
  { name: "The charcoal bay", logo: "/partner/018.png" },
  { name: "jaazo", logo: "/partner/019.png" },
  { name: "kenz karam", logo: "/partner/020.png" },
  { name: "taste of malabar", logo: "/partner/021.jpg" },
  { name: "Albaik Feasto Express – restaurant franchise client", logo: "/partner/022.png" },
  { name: "ampure", logo: "/partner/023.png" },
  { name: "banwet", logo: "/partner/024.png" },
  { name: "club sulaimani", logo: "/partner/025.png" },
  { name: "frozen bottle ", logo: "/partner/026.png" },
  { name: "fzone ", logo: "/partner/027.png" },
  { name: "the grillax", logo: "/partner/029.png" },
  { name: "hap &  hope ", logo: "/partner/030.png" },
  { name: "Heroelectric", logo: "/partner/031.png" },
  { name: "IFCS – Franchise Media corporate client", logo: "/partner/032.png" },
  { name: "ojin", logo: "/partner/033.png" },
  { name: "Parisons Tea House – tea franchise client", logo: "/partner/034.png" },
  { name: "Vollmond – franchise client", logo: "/partner/035.png" },
  { name: "wayn", logo: "/partner/036.png" },
  { name: "team care & cure", logo: "/partner/037.png" },
  { name: "avilpro", logo: "/partner/038.jpeg" },
  { name: "Grama Bakes & Sweets – bakery franchise client", logo: "/partner/039.jpg" },
  { name: "kpg roofings", logo: "/partner/040.jpeg" },
  { name: "royal", logo: "/partner/041.jpg" },
];

function Clients() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Clients & Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center w-full h-28"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-20 max-w-full object-contain"
              title={partner.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
