import { Link } from "react-router-dom";

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

interface ButtonProps {
  label: string;
  clickHandle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  navigateTo?: string | undefined;
}


export const Button = ({ label, clickHandle, navigateTo }: ButtonProps) => {
  if (navigateTo) {
    return (
      <Link
        to={navigateTo}
      >
        <button
          data-aos="fade-up"
          data-aos-duration="1400"
          className="bg-green-500 contentFont hover:bg-green-600  font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300 w-fit"
        >
          {label}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={clickHandle}
      data-aos="fade-up"
      data-aos-duration="1400"
      className="bg-green-500 contentFont hover:bg-green-600  font-medium py-3 px-6 rounded-lg cursor-pointer transition duration-300 w-fit"
    >
      {label}
    </button>
  );
};