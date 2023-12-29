import axios from "axios";
import React, { FC, useState, useEffect } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{ paddingTop: "41%", position: "relative" }}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=7t5YwL0ffQ7abG3L`}
          style={{
            border: 0,
            width: "90%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;

//   API Secret  =  H7aB9wfFnJqYjzQe3z5vIb9n136bTzgDQcdOi2gfj2sEKuAkiNCTJkKYUtXUtPOE
