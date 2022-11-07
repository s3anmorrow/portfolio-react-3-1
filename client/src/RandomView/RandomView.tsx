import React from 'react';
import { Sample, ViewProps } from "./../tools/Samples.model";
import { getRandom } from "./../tools/Toolkit";

const RandomView = ({samples}:ViewProps) => {

    // ------------------------------------------- event handlers
    const onRandom = (e:any) => {
        // randomly select index of sample
        let index:number = getRandom(0, samples.length - 1);
        // update state variable which forces a render of all components
        setSelected(samples[index]);
    }

    // -------------------------------------------- state variables
    const [selected, setSelected] = React.useState<Sample>(samples[getRandom(0, samples.length - 1)]);

    // ------------------------------------------- rendering to the DOM
    return (
        <div className="flex flex-wrap">
            <div className="pr-5 pb-5">
                <input type="button" value="Surprise Me!" className="bg-white text-[#035074] p-2 rounded-md active:bg-[#EEAA40]" onClick={onRandom} />
            </div>

            <div>
                <div id="txtName" className="font-title font-bold text-xl pb-3">{selected.name}</div>
                <div id="txtDescription" className="max-w-[600px] pb-3">{selected.description}</div>
                <div className="pb-4">
                    <a href="{selected.url}" target="_blank" id="lnkUrl" className="hover:underline">{selected.url}</a>
                </div>
                <div className="flex flex-nowrap">
                    {/* images are located in /public/images - URL is relative to /public when web app is running in browser */}
                    <img src={"/images/" + selected.images[0].filename} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                    <img src={"/images/" + selected.images[1].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                    <img src={"/images/" + selected.images[2].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                    <img src={"/images/" + selected.images[3].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                </div>
            </div>
        </div>
    );
}

export default RandomView;