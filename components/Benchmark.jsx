const data = [
  {
    model: "NDP Model",
    parameters: "163K",
    status: "In-house model",
    dataTrained: "500 Hrs Training on 2K Hrs",
    pesq: "2.65*",
  },
  {
    model: "Hifi Mini Model",
    parameters: "200K",
    status: "In-house model",
    dataTrained: "Training in progress",
    pesq: "---",
  },
  {
    model: "NDP / Hifi 5 Model",
    parameters: "622K",
    status: "In-house model",
    dataTrained: "500 Hrs Training on 2K Hrs",
    pesq: "2.87*",
  },
  {
    model: "RNNoise",
    parameters: "60K",
    status: "Open Source Model",
    dataTrained: "160 Hrs",
    pesq: "2.04",
  },
  {
    model: "DTLN",
    parameters: "987K",
    status: "Open Source Model",
    dataTrained: "500 Hrs",
    pesq: "2.36",
  },
  {
    model: "DeepFilterNet",
    parameters: "2310K",
    status: "Open Source Model",
    dataTrained: "1700 Hrs",
    pesq: "3.08",
  },
];

const Benchmark = () => {
  return (
    <div className="max-w-screen-lx mx-auto md:pb-20">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-blue-500 mb-4 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl">
          Benchmark Results
        </h1>
        <div className="text-lg font-medium text-gray-500">
          Demand + Voice Bank Test Set | Input PESQ - 1.97
        </div>
        <div className="overflow-x-auto my-5">
          <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border">
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Model
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Parameters
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Data Trained
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  PESQ
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "odd:bg-white odd:dark:bg-gray-900"
                      : "even:bg-gray-50 even:dark:bg-gray-800"
                  } text-center border-b dark:border-gray-700`}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    {item.model}
                  </td>
                  <td className="px-6 text-center border py-4">
                    {item.parameters}
                  </td>
                  <td className="px-6 text-center border py-4">
                    {item.status}
                  </td>
                  <td className="px-6 text-center border py-4">
                    {item.dataTrained}
                  </td>
                  <td className="px-6 text-center py-4">{item.pesq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Benchmark;
