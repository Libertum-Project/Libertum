export default function TokenSection() {
  return (
    <>
      <div className="lg:min-w-screen lg:mx-auto lg:mt-24">
        <h2 className="lg:pt-12 pt-4 text-center lg:text-5xl text-2xl font-bold tracking-tight text-gray-900">
          Understand the $LBM Token
        </h2>
        <h3 className="lg:py-8 lg:px-0 py-8 px-4 text-center lg:text-3xl lg:max-w-7xl lg:mx-auto text-2xl font-md tracking-tight text-gray-900">
          Be rewarded for being an early supporter and earn even greater rewards
          with our utility token that appreciates in value over time.
        </h3>
        <div className="lg:px-16 lg:grid lg:grid-cols-2 lg:gap-4 lg:max-w-7xl lg:mx-auto lg:pt-8">
          <div className="lg:col-span-1 lg:col-start-1">
            <img
              className="lg:p-0 p-4 rounded-xl mix-blend-multiply mx-auto"
              src="/img/token1.png"
              width={600}
            ></img>
            <h2 className="lg:pt-8 pt-4 text-center lg:text-3xl text-2xl font-bold tracking-tight text-gray-900">
              Deflationary​
            </h2>
            <h3 className="lg:py-8 p-4 text-center lg:text-2xl lg:max-w-7xl mx-auto text-2xl md:max-w-2xl font-md tracking-tight text-gray-900">
              From day one, 5% of our investment earnings will be allocated to a
              continuous buyback and burn program, enhancing the value of our
              tokens
            </h3>
          </div>
          <div className="lg:col-span-1 lg:col-start-2">
            <img
              className="lg:p-0 p-4 rounded-xl mix-blend-multiply mx-auto"
              width={600}
              src="/img/token2.png"
            ></img>
            <h2 className="lg:pt-8 pt-4  text-center lg:text-3xl text-2xl font-bold tracking-tight text-gray-900">
              Staking Pool​
            </h2>
            <h3 className="lg:py-8 p-4 text-center lg:text-2xl lg:max-w-7xl md:max-w-2xl  mx-auto text-2xl font-md tracking-tight text-gray-900">
              $LBM will be injected into the staking pool for early supporters,
              increasing the potential rewards for our dedicated community​
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
