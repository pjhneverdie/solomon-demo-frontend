import solomonLogoDiscoImage from "../assets/solomon-logo-disco.png";


function LoginPage() {
    return (
        <div className={`
            w-screen h-screen
            flex flex-col justify-center items-center
            bg-[#121212]
            `}
        >
            <div className={`
                w-[20%] h-[100%]
                flex flex-col justify-center items-stretch
                bg-[#121212]
            `}
            >
                <img
                    src={solomonLogoDiscoImage}
                    alt="solomon-logo-disco.png"
                />
                <p className={`
                text-center
                `}>
                    돌아오신 것을
                    <br />
                    환영합니다
                </p>
                <p className={`
                text-center
                `}>
                    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                    <br />
                    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </p>
                <div className={`
                    h-[56px]
                    bg-[#121212]
                    rounded-full border-[1.5px] border-gray-100
                    `}
                >
                </div>
                <div className={`
                    h-[56px]
                    bg-[#121212]
                    rounded-full border-[1.5px] border-gray-100
                    `}
                >
                </div>
            </div>

        </div>


    );
}


export default LoginPage;