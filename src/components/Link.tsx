export default function LinkItem() {
  return (
    <div className="w-full max-w-[340px] rounded-xl overflow-hidden h-[334px] bg-red-100 shadow-xl">
      <img src="/d0.webp" className="h-3/5 w-full object-cover" />
      <div className="px-5 py-3 flex flex-col">
        <div className="flex justify-between">
          <p className="text-gray06">10 minutes ago</p>
          <img src="/kebab.svg" />
        </div>
        <h2 className="line-clamp-2 text-2xl">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. TldkdMetus amet habitant nunc
          consequat. Tldkd
        </h2>
        <p className="text-xl">2023. 3. 15</p>
      </div>
    </div>
  );
}
