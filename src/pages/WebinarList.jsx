import WebinarCard from "../components/UI/WebinarCard";
import { WebinarsData } from "../context/WebinarsContext";
import Spinner from "../components/UI/Spinner";

const WebinarList = () => {
  const { webinars, webinarsloading } = WebinarsData();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Upcoming Webinars</h1>
      {
        webinarsloading ?
          <div className="flex justify-center items-center min-h-[200px]">
            <Spinner />
          </div> :
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {webinars.map((webinar) => (
              <div className="w-full max-w-[400px]" key={webinar._id}>
                <WebinarCard webinar={webinar} />
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default WebinarList;
