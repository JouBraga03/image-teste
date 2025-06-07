import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-start">
      <header className="w-full h-20 bg-black" />

      <div
        className="h-96 w-full aspect-[21/9] bg-cover bg-no-repeat bg-center border-b-4"
        // style={{
        //   backgroundImage:
        //     "url('https://images.hdqwalls.com/wallpapers/zoro-from-one-piece-x5.jpg')",
        //     "url('https://wbl.blob.core.windows.net/img-cdn/img-otm/135/495x880-capa-blog-wind-banner.webp')",
        // }}
      >
        <img
          className="w-full h-full object-fit aspect-[21/9]"
          src="https://static.vecteezy.com/ti/vetor-gratis/p1/12189339-banner-horizontal-criativo-de-arco-iris-de-tracos-redondos-de-pintura-design-abstrato-artistico-para-banners-cartazes-etc-vetor.jpg"
        />
      </div>
    </div>
  );
}

export default App;
