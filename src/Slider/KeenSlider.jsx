import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./styles.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function KeenSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 text-3xl font-bold text-white w-40 h-40 bg-red-500">
          1
        </div>
        <div className="keen-slider__slide number-slide2 text-3xl font-bold text-white w-40 h-40 bg-green-500">
          2
        </div>
        <div className="keen-slider__slide number-slide3 text-3xl font-bold text-white w-40 h-40 bg-blue-500">
          3
        </div>
        <div className="keen-slider__slide number-slide4 text-3xl font-bold text-white w-40 h-40 bg-teal-400">
          4
        </div>
        <div className="keen-slider__slide number-slide5 text-3xl font-bold text-white w-40 h-40 bg-zinc-400">
          5
        </div>
        <div className="keen-slider__slide number-slide6 text-3xl font-bold text-white w-40 h-40 bg-orange-400">
          6
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1 w-5 h-10 bg-violet-500">
          1
        </div>
        <div className="keen-slider__slide number-slide2 w-5 h-10 bg-violet-500">
          2
        </div>
        <div className="keen-slider__slide number-slide3 w-5 h-10 bg-violet-500">
          3
        </div>
        <div className="keen-slider__slide number-slide4 w-5 h-10 bg-violet-500">
          4
        </div>
        <div className="keen-slider__slide number-slide5 w-5 h-10 bg-violet-500">
          5
        </div>
        <div className="keen-slider__slide number-slide6 w-5 h-10 bg-violet-500">
          6
        </div>
      </div>
    </>
  );
}
