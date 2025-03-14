
export const TagButton = ({ label }:{label:string}) => {
  return (
    <div className="bg-blue-100 contentFont text-blue-700 px-4 py-1 uppercase w-fit rounded-sm text-sm font-medium ">
      {label}
    </div>
  );
};

export const Line = () =>{
    return <div className="h-[2px]  w-20 bgColor"></div>;
}

export const TagButtonWithLine = ({ label }:{label:string}) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center gap-4 mb-4 "
      >
        <TagButton label={label} />
        <Line />
      </div>
    );
}

export const Button = ({ label }: { label: string }) => {
  return (
    <button
      data-aos="fade-up"
      data-aos-duration="1400"
      className="bg-green-500 contentFont hover:bg-green-600  font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300 w-fit"
    >
      {label}
    </button>
  );
};