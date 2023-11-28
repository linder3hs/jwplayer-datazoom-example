import JWPlayer from "@jwplayer/jwplayer-react";
import { destroyDataZoom, loadDataZoom } from "@/datazoom";

export default function Home() {
  const jwplayerScript = process.env.NEXT_PUBLIC_JWPLAYER_SCRIPT;
  const datazoomScript = process.env.NEXT_PUBLIC_DATAZOOM_SCRIPT;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Video</h1>
      <button onClick={() => destroyDataZoom()}>Destroy</button>
      <JWPlayer
        file="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
        library={jwplayerScript as string}
        didMountCallback={({ player }) => {
          if (typeof window === "undefined") return;
          window.jw_player = player;
          loadDataZoom(datazoomScript as string);
        }}
      />
    </main>
  );
}
