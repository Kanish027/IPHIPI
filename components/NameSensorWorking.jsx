const NameSensorWorking = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold text-blue-500 mb-4 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Name Sensor
          </h1>
          <h1 className="text-xl text-blue-500 font-medium">
            Sensor Development Strategy
          </h1>
          <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
            <li>
              Registers users by name to create and update a custom AI model
              using Generative AI for data generation and precise data mining
              with proprietary tools.
            </li>
            <li>Name sensor is Expected to have around 400k params</li>
            <li>Can be supported in NDP and Hifi Families.</li>
            <li>
              Currently we have developed a wake word model and tools for data
              mining to mine the names precisely and productively, where data
              miner can use crude ai for initial mining.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameSensorWorking;
