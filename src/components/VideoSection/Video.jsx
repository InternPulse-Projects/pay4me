import ReactPlayer from "react-player/youtube";
function Video() {
  return (
    <section className="w-full flex border-0">
      <ReactPlayer
        url="https://youtu.be/c9YJBE3re20?si=jgfVbglDfNFjxlwf"
        pip
        stopOnUnmount={false}
        progressInterval={1000}
        width="100%"
        height="500px"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </section>
  );
}

export default Video;
