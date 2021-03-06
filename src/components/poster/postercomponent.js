import React from "react";
//props=> title,subtitle, isDark,src

const MoviePoster = (props) => {
    return (
        <>
            <div className=" flex flex-col items-start gap-2 " >
                <div className="h-80" >
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"
                    />
                </div>
                <h3
                    class={
                        `text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`
                    }
                >
                    {props.title}
                </h3>
                <p
                    class={
                        `text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`
                    }
                >
                    {props.subtitle}
                </p>
            </div>
        </>
    );
}

export default MoviePoster;