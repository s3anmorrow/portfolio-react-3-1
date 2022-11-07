import React from 'react';
import { ViewProps, Sample } from "./../tools/Samples.model";

const SelectedView = ({samples}:ViewProps) => {

    // ---------------------------------------------- event handlers
    const onChangeSample = (e:any) => {
        // update state variable which forces a re-render of this component
        setSelected(samples[e.target.value]);
    }

    // ---------------------------------------------- state variables
    // the currently selected portfolio sample stored in a state variable
    // this is initialized to the first sample by default - if there are no samples, this component is not rendered at all because of the conditional rendering in the JSX of App.tsx
    const [selected, setSelected] = React.useState<Sample>(samples[0]);

    // ------------------------------------------- rendering to the DOM
    return (
        <div className="flex flex-wrap">
            <div className="pr-5 pb-5">
                <select id="lstSamples" 
                    className="bg-white hover:bg-opacity-90 text-[#035074] py-2 px-3 rounded mb-3"
                    onChange={onChangeSample}>
                    {/* adding options to the dropdown based on samples state variable */}
                    {samples.map((data:Sample,n:number) => {
                        return <option key={n} value={n}>{data.name}</option>
                    })}
                </select>
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

export default SelectedView;