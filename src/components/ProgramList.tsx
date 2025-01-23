function ProgramList() {
  const programs = [
    {
      year: 2024,
      models: [
        { name: "Beat series", dp: "100", installment: "803*35" },
        { name: "Beat CBS", dp: "", installment: "803*35" },
        { name: "Beat DX kunci", dp: "", installment: "830*35" },
        { name: "Beat DX remote", dp: "", installment: "853*35" },
        { name: "Scoopy series", dp: "300", installment: "" },
        { name: "Scoopy kunci", dp: "", installment: "935*35" },
        { name: "Scoopy remote", dp: "", installment: "977*35" },
        { name: "PCX CBS", dp: "1.000", installment: "1.416*35" },
        { name: "PCX ABS old", dp: "1.500", installment: "1.507*35" },
      ],
    },
    {
      year: 2025,
      models: [
        { name: "Vario 125 CBS", dp: "700", installment: "1.019*35" },
        { name: "Vario 125 ISS", dp: "900", installment: "1.098*35" },
        { name: "Scoopy prestige", dp: "1jt", installment: "1.007*35" },
      ],
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Program Unit</h2>
      {programs.map((program) => (
        <div key={program.year} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{program.year}</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>DP</th>
                  <th>Angsuran</th>
                </tr>
              </thead>
              <tbody>
                {program.models.map((model, index) => (
                  <tr key={index}>
                    <td>{model.name}</td>
                    <td>{model.dp ? `DP ${model.dp}` : "-"}</td>
                    <td>{model.installment || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProgramList

