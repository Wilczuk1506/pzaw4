import { useState } from "react";
import Post from "./Post";
import "./Task1Style.css";
import json from "./posts.json";

function Gallery(){
    const [slider, SetSlider] = useState();

    return (
        <div>
            <div>
                <input type="range" min="1" max="100" onChange={(e) => SetSlider(e.target.value)}/>
            </div>
            <div className="gallery">
                {
                    json.slice(0, slider).map((e) => {
                        var tempTitle = "";
                        if (e.title.length > 15){
                            tempTitle = e.title.slice(0, 12) + "...";
                        } else {
                            tempTitle = e.title;
                        }

                        var tempDesc = "";
                        if (e.body.length > 30){
                            tempDesc = e.body.slice(0, 37) + "...";
                        } else {
                            tempDesc = e.body;
                        }

                        var tempImg = "";
                        
                        if (e.id % 40 < 10) {
                            tempImg = "0" + e.id % 40;
                        }
                        else {
                            tempImg = e.id % 40;
                        }
                        if (e.id % 40 === 0){
                            tempImg = "40";
                        }

                        return (
                            <Post title={tempTitle} description={tempDesc} imgSrc={"./icons/Icon14_" + tempImg + ".png"}/>
                        );
                    })
                }
                </div>
        </div>
        
    );
}

export default Gallery;