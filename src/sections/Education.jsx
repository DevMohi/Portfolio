const Education = () => {
  return (
    <div className="c-space" id="education">
      <section>
        <h3 className="text-xl text-center md:text-start md:text-2xl font-semibold text-neutral-300">Education</h3>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 h-[1px] w-full" />

        {/* Education Section */}
        <div className="">
          <div className="bg-dashed-line mt-4 h-[1px] w-full" />
          <div className="mt-6 space-y-6 px-4 md:px-0">
            <div className="bg-gradient-to-r bg-indigo to-storm p-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl text-neutral-100">
                UCSI University Malaysia
              </p>
              <p className="text-sm text-neutral-400">2020 - 2023</p>
              <p className="text-neutral-300">Course: Bachelors In Computing</p>
            </div>
            <div className="bg-gradient-to-r bg-indigo to-storm p-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl text-neutral-100">
                Sunshine Grammar School
              </p>
              <p className="text-sm text-neutral-400">O Levels & A Levels</p>
              <p className="text-neutral-300">Graduated: 2019</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
