// import { storage } from "../Api"

export const RecipeCard = ({ recipe }) => {

    const { image, title, description, author, ranking } = recipe
    
    if(!recipe) return <></>

    // const imagePath = storage.refFromURL(image).getDownloadURL()
    return <div className="cart">
        <div className="svg1">
            <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_2_343)">
                    <path
                        d="M16.9999 3H6.99994C5.89994 3 5.00994 3.9 5.00994 5L4.99994 21L11.9999 18L18.9999 21V5C18.9999 3.9 18.0999 3 16.9999 3Z"
                        fill="#F86E10"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_2_343"
                        x="-1.00006"
                        y="-1"
                        width="30"
                        height="30"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2_343"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2_343"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
        <img src={image} alt="" />

        <h3>{title}</h3>
        <p>
            {description}
        </p>
        <div >
            <img
                src={author?.image}
                alt="UMmenino negro segurando celular"
            />

            <p>{author?.name}</p>
            <div className="svg">
                {ranking}
            </div>
        </div>
    </div>
}