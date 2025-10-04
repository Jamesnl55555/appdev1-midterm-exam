function App() {
  

  return (
    <>
      <main className="tm-container masonry">
        <div
          className="item tm-bg-white tm-block tm-block-left"
          data-desktop-seq-no={1}
          data-mobile-seq-no={1}
        >
          <p className="tm-hero-text">
            “Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Maecenas vel lacinia ipsum, nec fermentum diam.
            Nulla nec gravida odio, eget vestibulum urna.”
          </p>
          <header className="tm-block-brand">
            <div className="tm-bg-primary-dark tm-text-white tm-block-brand-inner">
              <i className="fas fa-braille fa-3x" />
              <h1 className="tm-brand-name">Character</h1>
            </div>
          </header>
        </div>
        <div className="item" data-desktop-seq-no={2} data-mobile-seq-no={4}>
          <img src="img/image-01.jpg" alt="Image" className="tm-img-left" />
        </div>
        <div
          className="item tm-bg-secondary tm-text-white tm-block tm-block-wider tm-block-pad tm-block-left-2"
          data-desktop-seq-no={3}
          data-mobile-seq-no={5}
        >
          <i className="fas fa-award fa-4x tm-block-icon" />
          <p>
            Maecenas scelerisque ex neque, vel ultrices purus pharetra sit amet.
            Donec consectetur ipsum in elit eleifend porta. Morbi bibendum porttitor
            dui. Proin molestie purus non nisi blandit rutrum.
          </p>
          <div className="tm-text-right">
            <a href="#" className="tm-btn tm-btn-small tm-btn-primary tm-mt">
              Read More
            </a>
          </div>
        </div>
        <div className="item" data-desktop-seq-no={4} data-mobile-seq-no={8}>
          <img src="img/image-04.jpg" alt="Image" className="tm-img-left" />
        </div>
        <div
          className="tm-footer"
          id="tmFooter"
          data-desktop-seq-no={5}
          data-mobile-seq-no={9}
        >
          <img src="img/qr-link-tooplate.png" alt="QR Code" className="tm-img-qr" />
          <div>
            <p className="tm-mb-small">Copyright © 2018 Company Name</p>
            <p>
              Designed by{" "}
              <a rel="nofollow" href="https://www.facebook.com/tooplate">
                Tooplate
              </a>
            </p>
          </div>
        </div>
        <div className="item" data-desktop-seq-no={6} data-mobile-seq-no={2}>
          <img src="img/image-02.jpg" alt="Image" />
        </div>
        <div
          className="item tm-block-right"
          data-desktop-seq-no={7}
          data-mobile-seq-no={3}
        >
          <div className="tm-block-right-inner tm-bg-primary-light tm-text-white tm-block tm-block-wider tm-block-pad">
            <header>
              <h2 className="tm-text-uppercase">Proin Molestie Purus Non</h2>
            </header>
            <p>
              You can freely use this Character HTML Template for your site. Please{" "}
              <a href="https://www.facebook.com/tooplate">follow us</a> on Facebook
              page for updates. Don't forget to tell your friends about Tooplate.
              Thank you. :)
            </p>
            <p className="tm-mt tm-mb-small">
              Aenean gravida augue luctus, egestas massa ac, hendrerit ipsum.
              Vestibulum et ex sollicitudin, commodo liqula suscipit, laoreet lacus.
            </p>
            {/* */}
          </div>
        </div>
        <div className="item" data-desktop-seq-no={8} data-mobile-seq-no={6}>
          <img src="img/image-03.jpg" alt="Image" />
        </div>
        <div
          className="item tm-bg-white tm-block tm-form-section"
          data-desktop-seq-no={9}
          data-mobile-seq-no={7}
        >
          <div className="tm-form-container tm-block-pad tm-pb-0">
            <header>
              <h2 className="tm-text-uppercase tm-text-gray-light tm-mb">
                Contact Us
              </h2>
            </header>
            <form action="index.html" className="tm-contact-form" method="POST">
              <div className="tm-form-group">
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  className="form-control"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="tm-form-group">
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="tm-form-group">
                <textarea
                  rows={5}
                  id="contact_message"
                  name="contact_message"
                  className="form-control"
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="tm-text-right">
                <button
                  type="submit"
                  className="tm-btn tm-btn-secondary tm-btn-pad-big"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="tm-form-section-tag">
            <div className="tm-bg-secondary tm-text-white tm-block-pad tm-form-section-tag-inner">
              <header>
                <h2>Proin imperdiet commodo nisi</h2>
              </header>
              <p>
                Mauris sodales vulputate ante a dapibus Donec vitae maximus dolor,
                pharetra imperdiet lectus. Praesent pharetra elit ac est congue
                volutpat.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* https://jquery.com/download/ */}
    </>

  )
}

export default App
