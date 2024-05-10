import { IonIcon } from "@ionic/react";
import useImage from "../../hooks/useImage";
import Avatar from "../Avatar/Avatar";
import Image from "../Image/Image";
import ImageSkeleton from "../Skeleton/ImageSkeleton";
import { downloadOutline, checkmarkOutline } from "ionicons/icons";
import { useState } from "react";
import { ChatMessageType } from "../../store/store";
import bot from "../../assets/images/ecBuddy/bot.png"; // Importing the bot icon
type Props = {
  index: number;
  chat: ChatMessageType;
};

export default function ImageMessage({ index, chat }: Props) {
  const { loading, error, image } = useImage(index, chat);
  const [isImagesDownloaded, setIsImagesDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsImagesDownloaded(true);
    // i will add this later
  };

  return (
    <div className="flex items-start w-full">
      <div className="mr-4  rounded-md flex items-center flex-shrink-0">
        <Avatar className=" h-11 w-11" src={bot} />
      </div>
      <div className=" image border-4 border-teal-700 rounded flex-grow">
        {loading && (
          <div className=" h-[300px] w-full">
            <ImageSkeleton />
          </div>
        )}
        {error && <p>{error}</p>}
        <div className=" flex items-center flex-wrap">
          {!loading && <Image src={image} key={image} />}
        </div>
      </div>
      <div className=" text-xl dark:text-black  text-black">
        {!isImagesDownloaded ? (
          <button
            className="edit md:ml-8 text-black dark:text-black text-xl"
            onClick={handleDownload}
          >
            <IonIcon icon={downloadOutline} />
          </button>
        ) : (
          <span className="dark:text-black text-black text-xl">
            <IonIcon icon={checkmarkOutline} />
          </span>
        )}
      </div>
    </div>
  );
}
