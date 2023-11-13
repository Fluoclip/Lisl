function insertElements() {
  const windwowWidth = window.innerWidth;
  let linkedElement = document.querySelector('.js-desktop-linkedIn');
  
  if (windwowWidth > 565) {
    linkedElement.innerHTML = `
    <p class="contact-info phone">
    <picture>
      <source
        media="(min-width: 560px)"
        srcset="
          Assets%20Signatur%20SpotEn/Assets_desktop/SVG/linkedin.svg
        "
      />
      <img
        src="Assets%20Signatur%20SpotEn/Assets_mobile/SVG/linkedin.svg"
        alt="Logo"
      />
    </picture>
    <a href="https://www.linkedin.com/company/spot-my-energy/" target="_blank"
    >www.spotmyenergy.com</a
  >
  </p>
    `;
  } else {
    linkedElement.innerHTML = '';
  }
}

window.addEventListener('resize', insertElements);

insertElements();

 