const rooms = [
    {
        name: "slide1",
        alt: "Двомісний номер люкс, спальня"
    },
    {
        name: "slide2",
        alt: "Двомісний номер люкс, вітальня"
    },
    {
        name: "slide3",
        alt: "Двомісний номер люкс, ванна"
    }
]

const slidContainer = document.querySelector(".room-hero .swiper-wrapper");

function renderSlideRoom() {
    const markup = rooms.map(({name, alt})=> `<div class="swiper-slide">
        <picture>
          <source
            srcset="
              ./images/room-page/room-${name}-desktop.jpg    1x,
              ./images/room-page/room-${name}-desktop@2x.jpg 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ./images/room-page/room-${name}-tablet.jpg    1x,
              ./images/room-page/room-${name}-tablet@2x.jpg 2x
            "
            media="(min-width: 481px)"
          />
          <img
            class="swiper-slide__img"
            srcset="
              ./images/room-page/room-${name}-mobile.jpg    1x,
              ./images/room-page/room-${name}-mobile@2x.jpg 2x
            "
            src="./images/room-page/room-${name}-mobile.jpg"
            alt=${alt}
          />
        </picture>
      </div>`).join('');

    slidContainer.innerHTML = markup
}

renderSlideRoom();