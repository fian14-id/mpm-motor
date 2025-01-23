function SpecialPromo() {
  const promos = [
    { model: "BEAT SERIES", dp: "100" },
    { model: "NEW SCOOPY", dp: "300" },
    { model: "NEW PCX CBS", dp: "1.000" },
    { model: "VARIO 125 CBS", dp: "700" },
    { model: "VARIO 125 ISS", dp: "900" },
    { model: "PCX ABS OLD", dp: "500" },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">SPESIAL PROMO JANUARI</h2>
      <p className="mb-4">
        Sekarang waktu yang sangat tepat untuk miliki motor impian Honda, dengan Spesial Promo 𝘾𝙐𝘾𝙄 𝙂𝙐𝘿𝘼𝙉𝙂
      </p>
      <ul className="list-disc list-inside mb-4">
        {promos.map((promo, index) => (
          <li key={index}>
            🎉 {promo.model} DP {promo.dp}
          </li>
        ))}
      </ul>
      <p className="mb-4">
        Jangan sampai ketinggalan dan terlewatkan untuk Spesial Promonya, segera bawa pulang Motor Honda impian Anda ‼️
      </p>
      <p className="font-semibold">Konsultasi - Negosiasi - Deal - Booking - Proses - Kirim.</p>
      <p>Simpel kan ? 👌🏼</p>
    </section>
  )
}

export default SpecialPromo

