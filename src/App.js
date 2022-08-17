import { useEffect, useState } from "react";
import Button from "./components/Buttons";
import Dropdown from "./components/Dropdown";
const Images = [
  {
    image1:
      "https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440",
    name1: "Image 1",
    name2: "Image 2",
    image2:
      "https://mott.pe/noticias/wp-content/uploads/2017/10/Las-fotos-de-paisajes-naturales-m%C3%A1s-hermosos-del-mundo-por-Andi-Campbell_Jones.jpg",
  },
  {
    name1: "Image 3",
    name2: "Image 4",
    image1:
      "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JDnDssd4_OWpAW7Fmz7mjBsbF4liuvqSHOGmi1jqX76Ej4DYnb3wPTJ-I9cm5CO_u68&usqp=CAU",
  },
  ,
  {
    name1: "Image 5",
    name2: "Image 6",
    image1:
      "https://img2.wallspic.com/crops/2/2/6/6/5/156622/156622-flores_silvestres-blog-montana-la_comunidad_vegetal-ecorregion-1366x768.jpg",
    image2:
      "https://cdn.shopify.com/s/files/1/0592/5371/9202/files/campo.de_.tulipanes_480x480.jpg?v=1638388374",
  },
  {
    name1: "Image 7",
    name2: "Image 8",
    image1:
      "https://www.telesurtv.net/__export/1638504305316/sites/telesur/img/2021/12/02/p2.jpg",
    image2:
      "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
  },
  {
    name1: "Image 9",
    name2: "Image 10",
    image1:
      "https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg",
    image2:
      "https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440",
  },
];
const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  );
};
const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 17l-5-5m0 0l5-5m-5 5h12"
      />
    </svg>
  );
};
const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 13l-5 5m0 0l-5-5m5 5V6"
      />
    </svg>
  );
};
const StopIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const Reloadicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};
const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  );
};
const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const Playicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    image: 0,
  });
  const [displayImage, setDisplayImage] = useState(false);
  const { image } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
    console.log(formData);
  };

  return (
    <div className="flex flex-col">
      <div className="m-2 w-full flex">
        <form className=" flex">
          <select
            id=""
            name="image"
            onChange={(e) => onChange(e)}
            className="gradient border text-dark text-sm rounded-lg   block w-full p-2.5 m-1"
          >
            {Images.map((images, index) => {
              return (
                <option value={index}>
                  {images.name1} - {images.name2}
                </option>
              );
            })}
          </select>
          <button
            onClick={() => setDisplayImage(!displayImage)}
            type="button"
            className="gradient border text-dark text-sm rounded-lg   block w-full p-2.5 m-1"
          >
            Mostrar Imagenes
          </button>
        </form>
      </div>
      {displayImage && (
        <div className="images flex m-5 max-w-full" height={200}>
          <img width="50%" className="m-1" src={Images[image].image1} />

          <img width="50%" className="m-1" src={Images[image].image2} />
        </div>
      )}
      <div className="controls flex bg-gray justify-between m-5 h-80">
        <div id="controles" className="flex w-full flex-col items-center ">
          <h2 className="text-xl mt-5 mb-5 ">
            <b>Control de proceso</b>
          </h2>
          <div className="flex bg-gray-300 p-3 rounded-lg flex-col">
            <h3 className="text-center">
              <b>Control de pinza Abrir/Cerrar</b>
            </h3>
            <div className="flex">
              <Button Arrow={Playicon} />
              <Button Arrow={StopIcon} />
              <Button Arrow={Reloadicon} />
              <Button Arrow={PauseIcon} />
            </div>
          </div>
        </div>
        <div
          id="control-robotic arm"
          className="flex flex-col w-full items-center"
        >
          <h2 className="text-xl mt-5 mb-5">
            <b>Control manual</b>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de pinza Abrir/Cerrar</b>
              </h3>
              <div className="flex">
                <Button Arrow={MinusIcon} />
                <Button Arrow={PlusIcon} />
              </div>
            </div>
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg ">
              <h3 className="">
                <b>Control de direccion de la base</b>
              </h3>
              <div className="flex">
                <Button Arrow={ArrowLeft} />
                <Button Arrow={ArrowRight} />
              </div>
            </div>

            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de Bajar/Subir</b>
              </h3>
              <div className="flex flex-col">
                <Button Arrow={ArrowUp} />
                <Button Arrow={ArrowDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
