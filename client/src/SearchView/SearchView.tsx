import React from 'react';
import { Sample, ViewProps } from "../tools/Samples.model";

const SearchView = ( { samples }:ViewProps ) => {

    // ------------------------------------------- event handlers
    const onSubmit = (e:any) => {
        // if keyword is blank then return undefined by default (find() below fails at doing this)
        if (keyword === "") {
            setSelected(undefined);
            return;
        }

        // search through all samples and find keyword in the name
        // the find() method returns either a Sample object or undefined (if no match found)
        // in typescript can declare both datatypes using |
        let sample:Sample | undefined = samples.find(element => {
            // get name of sample and lowercase it
            let name:string = element.name.toLowerCase();
            // see if name of sample matches in any way what was entered into the textbox
            return name.includes(keyword.toLowerCase());
        });
        setSelected(sample);
    };

    // -------------------------------------------- state variables
    const [selected, setSelected] = React.useState<Sample>();
    // ----------------------------- challenge solution
    const [keyword, setKeyword] = React.useState<string>("");
    // ------------------------------------------------    

    return (    
        <div className="flex flex-wrap">
            <div className="pr-5 pb-5">
                {/* ------------------------------- challenge solution */}
                {/* as the user types into the textbox below the state variable is updated accordingly
                state variable can be used later - this is the basic pattern used when working with forms
                I added a feature to blank out the textbox when it is clicked by setting state variable to "" on click  */}

                <div>
                    <input type="text" className="text-[#035074] p-2 rounded-md" 
                        onClick={(e:any) => setKeyword("")} 
                        value={keyword} 
                        onChange={(e:any) => setKeyword(e.target.value)} />
                </div>
                <div>
                    <input type="button" value="Search" 
                        className="bg-white text-[#035074] mt-2 p-2 rounded-md active:bg-[#EEAA40]"
                        onClick={onSubmit} />
                </div>

                {/* -------------------------------------------------- */}
            </div>

            {/* ------------------------------- challenge solution */}
            {
                (selected !== undefined) ?
                <div>
                    <div id="txtName" className="font-title font-bold text-xl pb-3">{selected.name}</div>
                    <div id="txtDescription" className="max-w-[600px] pb-3">{selected.description}</div>
                    <div className="pb-4">
                        <a href="{selected.url}" target="_blank" id="lnkUrl" className="hover:underline">{selected.url}</a>
                    </div>
                    <div className="flex flex-nowrap">
                        <img src={"/images/" + selected.images[0].filename} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                        <img src={"/images/" + selected.images[1].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                        <img src={"/images/" + selected.images[2].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                        <img src={"/images/" + selected.images[3].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                    </div>
                </div>
                :
                <div>
                    <div className="font-title font-bold text-xl pb-3">No matches found...</div>
                </div>
            }
            {/* -------------------------------------------------- */}
        </div>
    )
}

export default SearchView;