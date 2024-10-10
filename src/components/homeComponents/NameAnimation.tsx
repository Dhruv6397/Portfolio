"use client";

const NameAnimation = () => {
  return (
    <section className="flex  bg-[#111827] m-9 max-w-fit top-5  ">
      <div className="relative">
        {/* First h2 with stroke effect */}
        <h2 className="text-transparent text-9xl font-poppins" style={{ WebkitTextStroke: '5px #E53E3E' }}>
          DHRUV
        </h2>
        {/* Second h2 with animation */}
        <h2 className="text-[#EDF2F7] text-9xl font-poppins animate-clip-animation absolute top-0 left-0">
          DHRUV
        </h2>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

        .animate-clip-animation {
          animation: animate 4s ease-in-out infinite;
        }

        @keyframes animate {
          0%,
          100% {
            clip-path: polygon(
              0% 45%,
              16% 44%,
              33% 50%,
              54% 60%,
              70% 61%,
              84% 59%,
              100% 52%,
              100% 100%,
              0% 100%
            );
          }

          50% {
            clip-path: polygon(
              0% 60%,
              15% 65%,
              34% 66%,
              51% 62%,
              67% 50%,
              84% 45%,
              100% 46%,
              100% 100%,
              0% 100%
            );
          }
        }
      `}</style>
    </section>
  );
};

export default NameAnimation;
