import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";
import { useChatStore } from "../stores/useChatStore";
import { useNavigate } from "react-router-dom";

/**
 * Zod Schema
 */
const createTrialSchema = z.object({
  issueTitle: z
    .string()
    .min(1, "사건 제목을 입력해주세요")
    .max(50, "50자 이내로 입력해주세요"),
});

export default function HomePage() {
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [chatRoomUuid, setChatRoomUuid] = useState(null);

  const addChatRoom = useChatStore((state) => state.addChatRoom);

  const navigate = useNavigate();

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createTrialSchema),
    mode: "onBlur",
  });

  /**
   * step 이동
   */
  const nextStep = async () => {
    if (step === 1) {
      const ok = await trigger("issueTitle");
      if (!ok) return;
    }
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  /**
   * 모달 초기화
   */
  const resetAll = () => {
    setStep(1);
    setChatRoomUuid(null);
    reset();
  };

  /**
   * 핵심 API 호출
   */
  const handleStartTrial = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const issueTitle = "issueTitle";
      // getValues("issueTitle");

      // API 호출 (chatRoomUuid 생성)
      // const res = await createChatRoom(issueTitle);

      // res = { chatRoomUuid: number }
      setChatRoomUuid("res.chatRoomUuid");

      addChatRoom({
        chatRoomUuid: "res.chatRoomUuid",
        issueTitle,
      });


      navigate("/chat/res.chatRoomUuid");
      // step 유지 or 자동 닫기 선택 가능
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const progressValue = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 min-h-screen p-10">
      <Dialog.Root
        open={open}
        onOpenChange={(open) => {
          if (!open) resetAll();
          setOpen(open);
        }}
      >
        {/* Trigger */}
        <Dialog.Trigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-200 w-full max-w-2xl h-[400px] flex items-center justify-center rounded-xl shadow-lg hover:bg-blue-300 transition"
          >
            <span className="text-2xl font-bold text-blue-800">
              재판 생성하기
            </span>
          </button>
        </Dialog.Trigger>

        {/* Overlay */}
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Content */}
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-blue-600 mb-2">
                <span>STEP {step} / {totalSteps}</span>
                <span>{Math.round(progressValue)}%</span>
              </div>

              <Progress.Root
                className="h-2 bg-gray-100 rounded-full overflow-hidden"
                value={progressValue}
              >
                <Progress.Indicator
                  className="bg-blue-500 h-full transition-transform duration-300"
                  style={{
                    transform: `translateX(-${100 - progressValue}%)`,
                  }}
                />
              </Progress.Root>
            </div>

            {/* Title */}
            <Dialog.Title className="text-xl font-bold text-gray-900">
              {step === 1 && "재판 제목 입력"}
              {step === 2 && "초대 코드"}
            </Dialog.Title>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="mt-4">
                <label className="text-sm text-gray-600 font-medium">
                  사건 제목
                </label>

                <input
                  {...register("issueTitle")}
                  placeholder="예: 사과 분쟁 사건"
                  className="w-full mt-2 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {errors.issueTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.issueTitle.message}
                  </p>
                )}
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="mt-6 space-y-3 text-center">
                <div className="p-4 bg-gray-50 border border-dashed rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">
                    chatRoomUuid
                  </p>

                  <p className="text-xl font-mono font-bold tracking-widest">
                    {chatRoomUuid ?? "생성 중..."}
                  </p>
                </div>

                <p className="text-[11px] text-gray-400">
                  이 코드를 참가자에게 공유하세요
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex justify-between items-center">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="text-gray-500 hover:text-gray-900"
                >
                  ← 이전
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
                >
                  다음 →
                </button>
              ) : (
                <button
                  onClick={handleStartTrial}
                  disabled={loading}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? "생성 중..." : "재판 시작"}
                </button>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}