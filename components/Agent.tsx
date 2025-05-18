"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({ username }: { username: string }) => {
  const isSpeaking = true;
  const [status, setStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const messages = [
    "What is your name?",
    "My name is John Doe",
    "What is your age?",
    "I am 25 years old",
    "What is your gender?",
    "I am a male",
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3 className="text-lg font-bold">Vapi- AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className=" rounded-full object cover size-[120px]"
            />
            <h3>{username}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {status !== CallStatus.ACTIVE ? (
          <button
            className="relative btn-call"
            onClick={() => setStatus(CallStatus.CONNECTING)}
          >
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                status !== CallStatus.CONNECTING && "hidden"
              )}
            />

            <span className="relative">
              {status === CallStatus.INACTIVE || status === CallStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button
            className="btn-disconnect"
            onClick={() => setStatus(CallStatus.FINISHED)}
          >
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
