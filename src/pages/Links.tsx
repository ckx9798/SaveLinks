import AddLink from "../components/AddLink";
import Button from "../components/Button";
import Link from "../components/Link";

export default function Links() {
  return (
    <div className="p-10">
      <Link />
      <Link />
      <Button size={"sm"} text="로그인" />
      <br></br>
      <Button size={"md"} text="회원가입" onClick={() => alert("클릭!")} />
      <br></br>

      <AddLink />
    </div>
  );
}
