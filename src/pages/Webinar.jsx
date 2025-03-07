import React, { useRef, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Webinar = () => {
    const APP_ID = 1907602911;
    const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538";
    const { ROOM_ID } = useParams();
    const containerRef = useRef(null);

    const myMeeting = async (element) => {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            APP_ID,
            SERVER_SECRET,
            ROOM_ID,
            Date.now().toString(),
            "YOUR_NAME"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy link",
                    url: `${window.location.origin}/webinar/${ROOM_ID}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
                config: {
                    role: ZegoUIKitPrebuilt.Audience,
                },
            },
            showTextChat: true,
            showUserList: true,
            showLeavingView: false,
            turnOnMicrophoneWhenJoining: false,
            turnOnCameraWhenJoining: false,
            showScreenSharingButton: false,
            showAudioVideoSettingsButton: false,
            showTurnOffRemoteCameraButton: false,
            showTurnOffRemoteMicrophoneButton: false,
            onLeaveRoom: () => {
                window.location.href = "/AIacademy";
            },
        });
    };

    useEffect(() => {
        if (containerRef.current) {
            myMeeting(containerRef.current);
        }
    }, []);

    return (
        <div className="flex flex-col w-full h-screen">
            {/* Room ID displayed at the top */}
            <div className="w-full text-center text-white py-3">
                <p className="text-xl font-semibold">Webinar ID: {ROOM_ID}</p>
            </div>

            {/* Video Container taking full space */}
            <div className="flex-grow flex items-center justify-center px-2">
                <div 
                    ref={containerRef} 
                    className="w-full h-full"
                ></div>
            </div>
        </div>
    );
};

export default Webinar;
