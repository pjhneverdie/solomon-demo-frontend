import solomonLogoDiscoImage from "../assets/solomon-logo-disco.png";
import googleLogoImage from "../assets/google-logo.png";
import kakaoLogoImage from "../assets/kakao-logo.png";

function LoginPage() {
    return (
        <div className={`
            w-screen h-screen
            overflow-y-auto
            bg-[#121212]
            `}
        >
            <div className={`
                flex flex-col justify-center items-center 
                gap-[16px]
                w-full h-full
            `}
            >
                <div className="
                        flex justify-center items-center
                        w-full h-auto shrink-0
                        ">
                    <img
                        src={solomonLogoDiscoImage}
                        alt="solomon-logo-disco.png"
                        className="h-[100px]"
                    />
                </div>
                <div className="
                        flex justify-center items-start
                        w-full h-auto shrink-0
                        ">
                    <p className={`
                    text-center text-[32px] text-[#fff] font-bold
                `}>
                        돌아오신 것
                        <br />
                        을 환영합니다
                    </p>
                </div>
                <div className="
                        flex justify-center items-start
                        w-full h-auto shrink-0
                        ">
                    <p className={`
                    text-center text-[14px] text-[#fff] font-medium mx-[15px]
                `}>
                        함정을 파는 자는 그것에 빠질 것이요 돌을 굴리는 자는 도리어 그것에 치이리라
                        <br>
                        </br>
                        - 잠언 26:27 -
                    </p>
                </div>
                <div className="
                        flex flex-col
                        w-full h-auto shrink-0
                        px-[16px]
                ">
                    <div
                        className={`
                            flex items-center
                            w-full h-[40px]
                            bg-[#121212]
                            rounded-full
                            border-[1.5px] border-gray-100
                        `}
                    >
                        <img
                            src={googleLogoImage}
                            alt="google-logo.png"
                            className="w-[24px] h-[24px] ml-4"
                        />

                        <div className="flex-1 flex justify-center items-center">
                            <p className="text-center text-[16px] text-[#fff] font-semibold">
                                <span className="font-extrabold">Google</span>로 계속하기
                            </p>
                        </div>
                    </div>
                    <div className="h-[6px]"></div>
                    <div
                        className={`
                            flex items-center
                            w-full h-[40px]
                            bg-[#121212]
                            rounded-full
                            border-[1.5px] border-gray-100
                        `}
                    >
                        <img
                            src={kakaoLogoImage}
                            alt="kakao-logo.png"
                            className={`
                             ml-[15px] my-[12px] w-[24px] h-[24px]
                            `}
                        />
                        <div class={`
                      flex-1 flex flex-col justify-center items-center
                        `}>
                            <p className={`
                                text-center text-[14px] text-[#fff] font-semibold
                                `}>
                                <span className="font-extrabold">카카오톡</span>으로 계속하기
                            </p>
                        </div>
                    </div>
                </div>
                <div className="
                        flex justify-center items-center
                        w-full h-auto shrink-0
                        
                        ">
                    <p className={`
                    text-[14px]
                    text-[#B3B3B3] font-semibold
                    `}>
                        개인정보 처리방침
                    </p>
                </div>
            </div>

        </div>


    );
}


export default LoginPage;