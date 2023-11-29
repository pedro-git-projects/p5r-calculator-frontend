import TakeYourTimeGIF from "../../assets/take_your_time.gif";

const TakeYourTime: React.FC = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <img
        src={TakeYourTimeGIF}
        alt="Take Your Time"
        className="max-w-full max-h-full w-auto h-auto"
      />
    </div>
  );
};

export default TakeYourTime;
