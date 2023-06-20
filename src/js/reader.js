export default async function read() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('{"data":"Some data"}');
    }, 1000);
  });
}
