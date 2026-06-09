import solomonLogoDiscoImage from "../assets/solomon-logo-disco.png";
import googleLogoImage from "../assets/google-logo.png";
import kakaoLogoImage from "../assets/kakao-logo.png";

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
                flex flex-col justify-center items-center
                bg-[#121212]
            `}
            >
                
                <img
                    src={solomonLogoDiscoImage}
                    alt="solomon-logo-disco.png"
                    className="w-[70%]"
                />
                <div className="h-[20px]"></div>
                <p className={`
                    text-center text-[50px] text-[#fff] font-bold
                `}>
                    돌아오신 것
                    <br />
                    을 환영합니다
                </p>
                <div className="h-[20px]"></div>
                <p className={`
                    text-start text-[20px] text-[#fff] font-medium
                `}>
                    함정을 파는 자는 그것에 빠질 것이요 돌을 굴리는 자는 도리어 그것에 치이리라 - 잠언 26:27
                </p>
                <div className="h-[20px]"></div>
                <div className={`
                    flex
                    w-[100%] h-[56px]
                    bg-[#121212] rounded-full border-[1.5px] border-gray-100
                    `}
                >
                    <img
                        src={googleLogoImage}
                        alt="google-logo.png"
                        className={`
                            ml-[15px] my-[15px]
                            `}
                    />
                    <div class={`
                      flex-1 flex flex-col justify-center items-center p-[0px]
                        `}>
                        <p className={`
                                text-center text-[18px] text-[#fff] font-semibold
                                `}>
                            <span className="font-extrabold">Google</span>로 계속하기
                        </p>
                    </div>
                </div>
                <div className="h-[10px]"></div>
                <div className={`
                    flex
                    w-[100%] h-[56px]
                    bg-[#121212] rounded-full border-[1.5px] border-gray-100
                    `}
                >
                    <img
                        src={kakaoLogoImage}
                        alt="kakao-logo.png"
                        className={`
                            ml-[10px] my-[10px]
                            `}
                    />
                    <div class={`
                      flex-1 flex flex-col justify-center items-center p-[0px]
                        `}>
                        <p className={`
                                text-center text-[18px] text-[#fff] font-semibold
                                `}>
                            <span className="font-extrabold">카카오톡</span>으로 계속하기
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
}


export default LoginPage;