'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [margin, setMargin] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const gayNumber = useRef<number>(0)

  function addMargin(){
    const marginTop = Math.floor(Math.random() * 500) + 1;
    const marginLeft = Math.floor(Math.random() * 900) + 1;
    // const marginRight = Math.floor(Math.random() * 900) + 1;

    setMargin(marginTop)
    setMarginLeft(marginLeft)
    setMarginRight(marginRight)

    gayNumber.current += 1;
  }

  useEffect(() => {
    console.log("margin", margin)
  }, [margin])

  return (
    <div className="p-3">
        <span className="font-bold text-9xl">
          Vc é gay? - {gayNumber.current}
        </span>

        <div className="flex gap-2">
          <div className="">
            <button className="bg-slate-700 text-white p-6 rounded-xl">
              Sim
            </button>
          </div>

          <div>
            <button 
              className={`bg-green-600 p-6 rounded-xl`} 
              style={{ "marginTop": margin, marginLeft: marginLeft }}  onMouseEnter={addMargin}
            >
              Não kkk
            </button>
          </div>
        </div>
        
    </div>
  );
}
