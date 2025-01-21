import ChangeDate from "../utils/ChangeDate";

export default function LinkItem({ link }) {
  return (
    <div className="h-[334px] w-full max-w-[340px] overflow-hidden rounded-xl bg-red-100 shadow-xl">
      <img src={link.imageSource} className="h-3/5 w-full object-cover" />
      <div className="flex flex-col px-5 py-3">
        <div className="flex justify-between">
          <p className="text-gray06">10 minutes ago</p>
          <img src="/kebab.svg" />
        </div>
        <h2 className="my-2 line-clamp-2 text-2xl leading-6">{link.description}</h2>
        <p className="text-xl">{ChangeDate(link.createdAt)}</p>
      </div>
    </div>
  );
}
