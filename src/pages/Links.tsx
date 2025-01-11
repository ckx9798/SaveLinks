import AddLink from "../components/AddLink";
import Button from "../components/Button";
import Favorite from "../components/Favorite";
import Header from "../components/Header";
import LinkItem from "../components/Link";

export default function Links() {
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center bg-gray05 px-5">
        <Header />
        <div className="mb-8 flex h-[100px] w-full items-center justify-center px-5 md:h-[150px]">
          <AddLink />
        </div>
      </div>
      <div className="p-10">
        <LinkItem />
        <Button size={"sm"} text="로그인" />
        <br></br>
        <Button size={"md"} text="회원가입" onClick={() => alert("클릭!")} />
        <br></br>
      </div>
    </>
  );
}
