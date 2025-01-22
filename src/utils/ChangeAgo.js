export default function ChangeAgo(isoDateString) {
  const now = new Date();
  const made = new Date(isoDateString);
  const ago = now - made;
  console.log(now);
  console.log(made);
  console.log(left);
}

console.log(ChangeAgo("2025-01-20T03:48:46.877Z"));
