import React from 'react';
import { Sample, ViewProps } from "./../tools/Samples.model";

const AllView = ({samples}:ViewProps) => {

    return (
        <div className="flex flex-col flex-wrap">
            {samples.map((data:Sample,n:number) => {
                return (
                    <div key={n} className="flex flex-nowrap mb-10">
                        <div className="mr-2.5">
                            <img src={"/images/" + data.images[0].filename} alt="Portfolio Sample" className="mr-1" />
                        </div>
                        <div>
                            <div className="font-title font-bold text-xl pb-2">{data.name}</div>
                            <div className="pb-2 max-w-[600px]">{data.description}</div>
                            <a href="{data.url}" className="hover:underline" target="_blank">{data.url}</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AllView;