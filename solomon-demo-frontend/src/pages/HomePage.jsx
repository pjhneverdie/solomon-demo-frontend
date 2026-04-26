import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";

export default function HomePage() {
  const [step, setStep] = React.useState(1);
  const totalSteps = 3;
  const progressValue = (step / totalSteps) * 100;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const resetForm = () => setStep(1);

  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 min-h-screen p-10">
      <Dialog.Root onOpenChange={(open) => !open && resetForm()}>
        <Dialog.Trigger asChild>
          <button className="bg-blue-200 w-full max-w-2xl h-[400px] flex items-center justify-center rounded-xl shadow-lg hover:bg-blue-300 transition-all outline-none">
            <span className="text-2xl font-bold text-blue-800">재판 생성하기</span>
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
          
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-8 shadow-2xl transition-all">
            
            {/* Radix UI Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-semibold text-blue-600 mb-2">
                <span>단계 {step} / {totalSteps}</span>
                <span>{Math.round(progressValue)}%</span>
              </div>
              <Progress.Root 
                className="relative overflow-hidden bg-gray-100 rounded-full w-full h-2" 
                value={progressValue}
              >
                <Progress.Indicator 
                  className="bg-blue-500 w-full h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${100 - progressValue}%)` }}
                />
              </Progress.Root>
            </div>

            <Dialog.Title className="text-xl font-bold text-gray-900">
              {step === 1 && "재판 제목 입력"}
              {step === 2 && "내 닉네임 설정"}
              {step === 3 && "유저 초대 코드"}
            </Dialog.Title>

            <div className="mt-6 min-h-[120px]">
              {step === 1 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">사건의 이름을 정해주세요</label>
                  <input className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="예: 어제 먹은 사과 실종 사건" />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">재판에서 사용할 닉네임</label>
                  <input className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="예: 솔로몬" />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center">
                    <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">Invitation Code</p>
                    <p className="text-2xl font-mono font-bold text-gray-800 tracking-widest">XYZ-9902</p>
                  </div>
                  <p className="text-[11px] text-center text-gray-400">코드를 복사하여 참가자에게 전달하세요.</p>
                </div>
              )}
            </div>

            {/* 하단 제어 버튼 */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                >
                  &larr; 이전
                </button>
              ) : (
                <div /> 
              )}

              {step < totalSteps ? (
                <button 
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold transition-all shadow-md active:scale-95"
                >
                  다음 단계 &rarr;
                </button>
              ) : (
                <Dialog.Close asChild>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold transition-all shadow-md active:scale-95">
                    재판 시작하기
                  </button>
                </Dialog.Close>
              )}
            </div>

            {/* 닫기 버튼 (X 아이콘 대신 직접 구현) */}
            <Dialog.Close asChild>
              <button className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all outline-none">
                <span className="text-xl leading-none">&times;</span>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}