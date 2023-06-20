export default async function json(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(data));
    }, 1000);
  });
}
