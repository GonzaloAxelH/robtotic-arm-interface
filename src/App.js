import { Images } from "./components/data/Images";
import useLongPress from "./components/hooks/useLongPress";
import { useState } from "react";
import Button from "./components/Buttons";
import {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Playicon,
  PlusIcon,
  MinusIcon,
  PauseIcon,
  Reloadicon,
  StopIcon,
} from "./components/Icons/HeroIcons";
export default function App() {
  const [displayImage, setDisplayImage] = useState(false);
  const [formData, setFormData] = useState({
    image: 0,
  });
  const [data, setData] = useState({
    direccionEjeX: 0,
    direccionEjeY: 0,
    direccionEjeZ: 0,
    articulacion1: 0,
    articulacion2: 0,
    articulacion3: 0,
    articulacion4: 0,
    baseGiratoria: 0,
    articulacionGiratoria: 0,
    isPlay: true,
    reload: false,
    pinza: 0,
  });
  const { image } = formData;
  const {
    direccionEjeX,
    direccionEjeY,
    direccionEjeZ,
    articulacion1,
    articulacion2,
    articulacion3,
    articulacion4,
    baseGiratoria,
    articulacionGiratoria,
    isPlay,
    reload,
    pinza,
  } = data;
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
                <option key={index} value={index}>
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
          <img
            width="50%"
            className="m-1 rounded-lg"
            src={Images[image].image1}
          />

          <img
            width="50%"
            className="m-1 rounded-lg"
            src={Images[image].image2}
          />
        </div>
      )}
      <div className="controls flex bg-gray justify-between m-5 h-80">
        <div id="controles" className="flex w-full flex-col items-center ">
          <h2 className="text-xl mt-5 mb-5 ">
            <b>Control de proceso</b>
          </h2>
          <div className="flex bg-gray-300 p-3 rounded-lg flex-col w-full">
            <h3 className="text-center">
              <b>Control de parametros</b>
            </h3>
            <div className="flex justify-center">
              <Button
                key={1}
                onClick={() => {
                  setData({ ...data, isPlay: !isPlay });
                  console.log({ isPlay });
                  console.log(data);
                }}
                Arrow={<Playicon />}
              />
              <Button key={2} Arrow={<StopIcon />} />
              <Button
                onClick={() => {
                  setData({ ...data, reload: !reload });
                  console.log({ reload });
                  console.log(data);
                }}
                key={3}
                Arrow={<Reloadicon />}
              />
              <Button key={4} Arrow={<PauseIcon />} />
            </div>
          </div>

          <h2 className="text-xl mt-5 mb-5 "></h2>
          <div className="flex bg-gray-300 p-3 rounded-lg flex-col w-full">
            <h3 className="text-center">
              <b>Otros parametros</b>
            </h3>
            <div className="flex"></div>
          </div>
          {/* control de direcciones */}
          <h2 className="text-xl mt-5 mb-5">
            <b>Control manual Direcciones</b>
          </h2>

          <div className="flex flex-wrap justify-center ">
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg ">
              <h3 className="">
                <b>Control Eje X</b>
              </h3>
              <div className="flex flex-col" style={{ width: "50vw" }}>
                <input
                  maxLength={100}
                  type="range"
                  onChange={(ev) => {
                    setData({
                      ...data,
                      direccionEjeX: parseInt(ev.target.value),
                    });
                    console.log(data);
                  }}
                  value={direccionEjeX}
                />
              </div>
            </div>
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control Eje Y</b>
              </h3>
              <div className="flex flex-col" style={{ width: "50vw" }}>
                <input
                  maxLength={100}
                  type="range"
                  onChange={(ev) => {
                    setData({
                      ...data,
                      direccionEjeY: parseInt(ev.target.value),
                    });
                    console.log(data);
                  }}
                  value={direccionEjeY}
                />
              </div>
            </div>
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control Eje Z</b>
              </h3>
              <div className="flex flex-col" style={{ width: "50vw" }}>
                <input
                  maxLength={100}
                  type="range"
                  onChange={(ev) => {
                    setData({
                      ...data,
                      direccionEjeZ: parseInt(ev.target.value),
                    });
                    console.log(data);
                  }}
                  value={direccionEjeZ}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="control-robotic arm"
          className="flex flex-col w-full items-center"
        >
          {/* control de brazo robotico */}
          <h2 className="text-xl mt-5 mb-5">
            <b>Control manual Brazo Robotico</b>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de pinza Abrir/Cerrar</b>
              </h3>

              <div className="flex">
                <Button
                  onClick={(e) => {
                    setData({
                      ...data,
                      pinza: pinza > 1 ? pinza - 1 : pinza,
                    });

                    console.log({ pinza });
                    console.log(data);
                    console.log(data);
                  }}
                  Arrow={<MinusIcon />}
                />

                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      pinza: pinza + 1,
                    });

                    console.log({ pinza });
                    console.log(data);
                  }}
                  Arrow={<PlusIcon />}
                />
              </div>
            </div>
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg ">
              <h3 className="">
                <b>Control de direccion de la base</b>
              </h3>
              <div className="flex">
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      baseGiratoria:
                        baseGiratoria > 1 ? baseGiratoria - 1 : baseGiratoria,
                    });

                    console.log({ baseGiratoria });
                    console.log(data);
                  }}
                  Arrow={<ArrowLeft />}
                />
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      baseGiratoria: baseGiratoria + 1,
                    });
                    console.log({ baseGiratoria });
                    console.log(data);
                  }}
                  Arrow={<ArrowRight />}
                />
              </div>
            </div>

            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de articulacion 1</b>
              </h3>
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion1: articulacion1 + 1,
                    });

                    console.log({ articulacion1 });
                    console.log(data);
                  }}
                  Arrow={<ArrowUp />}
                />
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion1:
                        articulacion1 > 1 ? articulacion1 - 1 : articulacion1,
                    });

                    console.log({ articulacion1 });
                    console.log(data);
                  }}
                  Arrow={<ArrowDown />}
                />
              </div>
            </div>

            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de articulacion 2 </b>
              </h3>
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion2: articulacion2 + 1,
                    });

                    console.log({ articulacion2 });
                    console.log(data);
                  }}
                  Arrow={<ArrowUp />}
                />
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion2: articulacion2 + 1,
                    });

                    console.log({ articulacion2 });
                    console.log(data);
                  }}
                  Arrow={<ArrowDown />}
                />
              </div>
            </div>

            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de articulacion 3</b>
              </h3>
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion3: articulacion3 + 1,
                    });

                    console.log({ articulacion3 });
                    console.log(data);
                  }}
                  Arrow={<ArrowUp />}
                />
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion3: articulacion3 + 1,
                    });

                    console.log({ articulacion3 });
                    console.log(data);
                  }}
                  Arrow={<ArrowDown />}
                />
              </div>
            </div>
            <div className="flex flex-col items-center m-2 bg-gray-300 p-3 rounded-lg">
              <h3 className="">
                <b>Control de articulacion 4</b>
              </h3>
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion4: articulacion4 + 1,
                    });

                    console.log({ articulacion4 });
                    console.log(data);
                  }}
                  Arrow={<ArrowUp />}
                />
                <Button
                  onClick={() => {
                    setData({
                      ...data,
                      articulacion4: articulacion4 + 1,
                    });

                    console.log({ articulacion4 });
                    console.log(data);
                  }}
                  Arrow={<ArrowDown />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
