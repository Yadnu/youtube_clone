import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard title={"Dramatic Win at Lords" } thumbImage={"/thumb.jpeg"} image={"/lords.jpeg"} views={'50M'} timeStamp={"13 days ago"} author={"England Cricket Board"} ></VideoCard>
    </div>
  );
}
